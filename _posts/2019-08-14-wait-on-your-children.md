--- 
title: The importance of waiting for your children (within HPC batch jobs)
author: Will Furnass
slug: think-of-the-children
date: 2019-08-14 18:00:00 UTC+01:00
tags: 
category: 
link: 
description: 
type: text
---

Today I helped a researcher with an interesting problem. 
He had workflow that generated the desired number of output files when run interactively on our ShARC HPC system
but returned fewer output files when run as a (Grid Engine) batch job. 

After some sleuthing I realised that the issue related to the main process, a C program, creating *child processes* 
but not waiting for them to finish before exiting. 
(A running program i.e. a process can create further processes, which in turn can also create processes;
the relationships between these are often described using the terms 'parent' and 'child'). 

<img src="/assets/images/think-of-the-children.jpg" />

Within an interactive session on ShARC, it doesn't matter if we start a process that then doesn't wait for its children to exit before it exits:
the children can typically continue doing what they need to (write to the terminal or files etc) until they finish, all within the interactive session.

However, with batch jobs the Grid Engine job scheduler / distributed resource manager deems the job to have finished successfully 
when the main process within that job finishes and returns a particular error code. 
All other processes associated with that job are then forcefully terminated, regardless of whether they had finished their business.
In our case, this resulted in child processes being terminated (*killed*) before writing all the output files we hoped for.

An ugly workaround is to wait for a short while at the end of the batch job to give the child processes time to finish successfully.
This could be done by adding a line like the following to the end of your job script to 
delay the end of the job by 10 seconds after the previous commands finish.

```sh
sleep 10
```

However,
 * There are no guarantees that all child processes will exit gracefully within 10 seconds
 * Having jobs waiting via `sleep` unnecessarily is a questionable use of valuable HPC resources

A better approach would be to investigate *where* and *how* the critical child processes are being created (*forked*) and 
ensure that the relevant parent process(es) wait for these children to finish before they themselves finish.
That investigation is for another blog post!

---

If you're interested in exploring the above ideas for yourself then 
try running the following C program interactively on ShARC then from a batch job.


```c
#include <stdlib.h>
#include <unistd.h>
#include <stdio.h>
#include <sys/wait.h> 
#include <sys/types.h>

int main(int argc, char* argv[]) {
    pid_t child_pid, wpid;
    int status = 0;
    int n_children = 2;

    // Parent code (before child processes start)
    printf("Hello from the parent\n");
    // Ensure buffered output written to stdout is flushed before we fork
    fflush(stdout);

    for (int id=0; id < n_children; id++) {
        // If we are in a child process...
        if ((child_pid = fork()) == 0) {
            // Wait for 5 seconds
            sleep(5);
            printf("Hello from child %d\n", id);
            exit(EXIT_SUCCESS);
        }
    }

    // Parent waits for all the child processes (COMMENTED OUT)
    //while ((wpid = wait(&status)) > 0);

    // Parent only
    exit(EXIT_SUCCESS);
}
```

If you call this `forktest.c` then you can compile this code with  

```sh
gcc -std=c99 -Wall forktest.c -o forktest
```

to produce a file called `forktest`.

If you run this using `./forktest` from an interactive session,
you should see that you return to the prompt *before*  `Hello from child X` is written twice to the terminal.
This is because the `forktest` process exited before its children did (they were waiting at the `sleep(5)` line).

If you run `forktest` from a batch job then `Hello from the parent` is written to the output log file but `Hello from child X` is not,
as the child processes that would have written those lines were forceably terminated when the parent process, and therefore the job, finished.

To force `forktest` to wait for its children, uncomment the `while ((wpid = wait(&status)) > 0);` line and recompile.

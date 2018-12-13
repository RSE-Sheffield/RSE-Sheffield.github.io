---
title: Fun with strace
author: David Jones
slug: fun-with-strace
date: 2016-05-23 10:26:51 UTC+01:00
tags: 
category: 
link: 
description: 
type: text
---

## How I solved a mystery with strace and bash

So I'm dabbling with `iceberg`, The University of Sheffield's HPC, and
I finally get round to putting my [`.profile`](https://github.com/drj11/dot) on there.
And I remember that I don't like
the way `less` clears the screen when I've finished reading a `man` page.

I need to set my `LESS` environment variable to `-X`.
So I [add that to my `.profile`](https://github.com/drj11/dot/commit/7d097ba875e2cca186b8d659d3510c2af5c8df1b).
I do `exec bash -l` to emulate logging back in.

Doesn't work.
Still clears screen when reading man pages.
Turns out `LESS` isn't set.
What is going wrong with my `.profile`?

I'm becoming a fan of `strace` for this sort of debugging.

Have a look at this. When I run this command:

```
strace -e signal= -e open bash -l -c 'echo SCRIPT GOT HERE'
```
I get this output (long and boring, skip and come back to the
bits I refer to):
```
open("/etc/ld.so.cache", O_RDONLY)      = 3
open("/lib64/libtinfo.so.5", O_RDONLY)  = 3
open("/lib64/libdl.so.2", O_RDONLY)     = 3
open("/lib64/libc.so.6", O_RDONLY)      = 3
open("/dev/tty", O_RDWR|O_NONBLOCK)     = 3
open("/usr/lib/locale/locale-archive", O_RDONLY) = 3
open("/proc/meminfo", O_RDONLY|O_CLOEXEC) = 3
open("/usr/lib64/gconv/gconv-modules.cache", O_RDONLY) = 3
open("/etc/profile", O_RDONLY)          = 3
open("/etc/profile.d/", O_RDONLY|O_NONBLOCK|O_DIRECTORY|O_CLOEXEC) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/colorls.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/cvs.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/ge.sh", O_RDONLY)  = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/glib2.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/lang.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/less.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/modules.sh", O_RDONLY) = 3
open("/usr/share/Modules/init/bash", O_RDONLY) = 3
open("/usr/share/Modules/init/bash_completion", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/qt.sh", O_RDONLY)  = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/set-bmc-url.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/shef-login.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/udisks-bash-completion.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/vim.sh", O_RDONLY) = 3
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/usr/share/locale/locale.alias", O_RDONLY) = 3
open("/usr/share/locale/en_GB.UTF-8/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file or directory)
open("/usr/share/locale/en_GB.utf8/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file or directory)
open("/usr/share/locale/en_GB/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file or directory)
open("/usr/share/locale/en.UTF-8/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file or directory)
open("/usr/share/locale/en.utf8/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file or directory)
open("/usr/share/locale/en/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file or directory)
open("/dev/null", O_WRONLY|O_CREAT|O_TRUNC, 0666) = 3
open("/etc/profile.d/which2.sh", O_RDONLY) = 3
open("/home/md1xdrj/.bash_profile", O_RDONLY) = 3
open("/home/md1xdrj/.bashrc", O_RDONLY) = 3
open("/etc/bashrc", O_RDONLY)           = 3
open("/etc/profile.d/modules.sh", O_RDONLY) = 3
open("/usr/share/Modules/init/bash", O_RDONLY) = 3
open("/usr/share/Modules/init/bash_completion", O_RDONLY) = 3
SCRIPT GOT HERE
+++ exited with 0 +++
```

`strace` runs a command and *traces* the *system calls*
(so I suppose `strace` is short for **S**ystem **Trace**).
I'm running the command line `bash -l -c 'echo SCRIPT GOT HERE'` under `strace`.
`bash -l` is a *login* shell, so it should source my `.profile`.

First thing to notice about running things with `strace` is that you get lots of output.
And that's after I've used two options to reduce the ammount of output.
The `-e open` option to `strace` restricts it so that it only shows `open()` system calls;
normally it will show all system calls, which is _way_ more output.
The `-e signal=` option to `strace` means that it won't show any signals, without it you see all signals.
Most programs don't see many signals,
but in this case there are a fair number of child process management signals
that are not particularly interesting.

The first few files are related to C runtimes and dynamic linking (`/etc/ld.so.cache`, `/lib64/libc.so.6`, and so on).
Then we get `/etc/profile`. Aha!
`bash` is reading the system wide profile file.
Which it turns out causes it to reading the bag of little profile scripts kept in `/etc/profile.d/` (most of which are specific to the Sheffield HPC).

(I've no idea what the obsession with opening `/dev/null` in between every script is by the way; some crazy `bash` thing. whatever)

Then, eventually, near the bottom, we see bash opening `/home/md1xdrj/.bash_profile`.
And this is the culprit.
I'm like "wait, WAT!?", "I have a `.bash_profile`?"

It turns out that, yes, I do have a `.bash_profile`.
I wasn't expecting that (it wasn't created by me).
A quick perusal of `man bash`[\*1] reveals that
if `~/.bash_profile` exists then it will be sourced and `.profile` will not.

So I remove my `~/.bash_profile` and life is good again.

## Reflection

`strace` is a great tool and well worth exploring a little bit
(fun fact: you can attach to already running processes with `strace -p`).
So in this case I could've read the manual and inspected the file system to see what files `bash` would source,
but `strace` is more direct.
The manual might be out of date, misunderstood, or just plain wrong.
But `strace` cannot lie, it shows me what system calls a tool is actually making.

The Truth.

Of course The Truth that `strace` provides is really just _a_ truth.
There is a whole world of complexity that `strace` hides from us.
Most obviously, we don't get to see all the instructions
that get executed in between the system calls.
We probably don't want to.
`strace` is serving up an abstraction, and that's a useful Truth
to deal with.

## Fanzine!

If you liked this, then you should check out this [strace
fanzine](https://jvns.ca/blog/2015/04/14/strace-zine/).
I cannot recommend it enough.
It's enthusiastic, witty, fun to read, and you will learn
something about `strace` and system calls (I did!).


## Footnotes

1. This is what I call "a joke". Everyone should read `man bash`, but it is like Joyce's Ulysses: better read the Cliffs Notes[\*2].

2. There are no Cliffs Notes for `bash`.

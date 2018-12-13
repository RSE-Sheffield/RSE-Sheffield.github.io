---
title: ! "tmux: remote terminal management and multiplexing"
author: Will Furnass
slug: tmux-intro
date: 2017-06-15 12:53:04 UTC+01:00
tags: tmux, terminals
category: 
link: 
description: 
type: text
---

Today we have a guide to 'terminal multiplexing' including suggestions
on how to use it on computer clusters such as [ShARC and
Iceberg](http://docs.hpc.shef.ac.uk/).

------------------------------------------------------------------------

Have you ever?
==============

-   Started a process (such as a compilation or application install)
    over SSH only to realise that it's taking far longer than you
    expected and you need to shut down your laptop to go to a meeting,
    which you know will therefore **kill both the SSH connection and
    your process**?
-   Been in a cafe with flakey wifi and had a remote process hang or
    possibly die due to an unstable SSH connection?
-   Accidentally closed a window with a SSH session running in it and
    really regretted it?
-   Wanted to be able to switch between multiple terminal sessions on a
    remote machine without having to establish a SSH connection per
    session?
-   Wanted to be able to have multiple terminals visible at once so you
    can say edit source code in one terminal whilst keeping compilation
    errors visible in another?
-   Wanted a nicer way to copy and paste between remote terminal
    sessions?

If the answer to any of these is "yes" then **terminal multiplexing**
may help!

![](/assets/images/tmux-intro/intro.png)

------------------------------------------------------------------------

First, we need to delve a little deeper into some of the problems we are
trying to solve.

Why do my remote processes die when my SSH connection dies/hangs?
=================================================================

(*Skip over this section if you want!*)

Every process (bar the `systemd` process or `init` process with a
process ID of 1) has a parent process. If a process is sent a signal
telling it to cleanly terminate (or ['hang
up'](https://en.wikipedia.org/wiki/SIGHUP)) then typically its child
processes will be told to do the same.

When you SSH to a remote machine, the SSH service on that machine
creates a shell for you within which you can run commands.

To illustrate, here I logged into a server and used the `pstree` program
to view the tree of child-parent relationships between processes. Notice
in the excerpt shown below that the SSH service (`sshd`) has *spawned* a
(bash) shell process for my SSH session, which in turn has spawned my
`pstree` process: :

    [will@acai ~]$ ssh sharc
    ...
    [will@sharc-login1 ~]$ pstree -a
    systemd --switched-root --system --deserialize 21
    ...
      ├─sshd -D
      │   └─sshd  
      │       └─sshd   
      │           └─bash
      │               └─pstree -a
    ...

So if the SSH service decides that your connection has timed out then it
will send a signal to `bash` process were to die then any child
processes started by that `bash` process would also die.

If the remote servers you work with are primarily High-Performance
Computing (HPC) clusters running scheduling software such as Grid Engine
then you have a simple, robust way of ensuring that the sucess of your
processes doesn't depend on the reliability of your connection to the
clusters: **submit your work to the scheduler as batch jobs**. There are
many other benefits to submitting batch jobs over using interactive
sessions when using such clusters but we won't go into those here.

However, what do you do when there is no HPC-style scheduling software
availble?

-   You could run batch jobs using much simpler schedulers such as
    [at](https://en.wikipedia.org/wiki/At_(Unix)) for one-off tasks or
    [cron](https://en.wikipedia.org/wiki/Cron) or [systemd
    Timers](https://www.freedesktop.org/software/systemd/man/systemd.timer.html)
    for periodic tasks.
-   You could prefix your command with
    [nohup](https://en.wikipedia.org/wiki/Nohup) (*no hang up*) to
    ensure it continues running if the parent process tells it to *hang
    up*.

Neither of these allow you to easily **return to interactive sessions**
though. For that we need terminal multiplexers.

A brief guide to the tmux Terminal Multiplexer
==============================================

Detaching and reattaching to sessions
-------------------------------------

Terminal Multiplexer programs like [GNU
Screen](https://www.gnu.org/software/screen/) and
[tmux](https://tmux.github.io/) solve this problem by:

1.  Starting up a **server process on-demand**, which then spawns a
    shell. The server process is configured not to respond when being
    told to *hang up* so **will persist** if is started over a SSH
    connection that subsequently hangs/dies.
2.  Starting up a **client process** that allows you to connect to that
    server and interact with the shell session it has started
3.  Using key-bindings to stop the client process and **detatch** from
    the server process.
4.  Using command-line arguments to allow a client process to
    **(re)connect to an existing server process**

### Demo 1

Here we look at demonstrating the above using **tmux**. I recommend tmux
over GNU Screen as the documentation is clearer and it makes fewer
references to legacy infrastructure. Plus, it is easier to google for
it! However, it may use more memory (true for older versions).

Let's create and attach to a new tmux session, start a long-running
command in it then detach and reattach to the session:

<embed>
<video controls>
  <source src="/assets/images/tmux-intro/reattach.webm" type="video/webm">
  Your browser does not support the video tag.
</video> 
</embed>
Used keys:

&lt;prefix&gt; d

:   detatch

where **&lt;prefix&gt;** is **Control** and **b** by default. Here
**&lt;prefix&gt; d** means press **Control** and **b** then release that
key combination before pressing **d**.

In this case we started tmux on the local machine. tmux is much more
useful though when you start it on a remote machine **after connecting
via ssh**.

Windows (like tabs)
-------------------

What else can we do with terminal multiplexers? Well, as the name
implies, they can be used to view and control multiple virtual consoles
from one session.

A given tmux session can have multiple windows, each of which can
contain multiple panes, each of which is a virtual console!

### Demo 2

Here's a demonstration of creating, renaming, switching and deleting
tmux windows:

<embed>
<video controls>
  <source src="/assets/images/tmux-intro/windows.webm" type="video/webm">
  Your browser does not support the video tag.
</video> 
</embed>
Used keys:

&lt;prefix&gt; ,

:   rename a window

&lt;prefix&gt; c

:   create a new window

&lt;prefix&gt; n

:   switch to next window

&lt;prefix&gt; p

:   switch to previous window

&lt;prefix&gt; x

:   delete current window (actually deletes the current **pane** in the
    window but will also delete the window if it contains only one pane)

Dividing up Windows into Panes
------------------------------

Now let's look at creating, switching and deleting panes *within* a
window:

<embed>
<video controls>
  <source src="/assets/images/tmux-intro/panes.webm" type="video/webm">
  Your browser does not support the video tag.
</video> 
</embed>
Used keys:

&lt;prefix&gt; %

:   split the active window vertically

&lt;prefix&gt; "

:   split the active window horizontally

&lt;prefix&gt; Up or Down or Left or Right

:   switch to pane in that direction

Scrolling backwards
-------------------

You can scroll back up through the terminal history of the current
pane/window using:

&lt;prefix&gt; Page Up

:   scroll back through terminal history

Copying and pasting
-------------------

If you have multiple panes side-by-side then attempt to copy text using
the mouse, you'll copy lines of characters that span *all* panes, which
is almost certainly not going to be what you want. Instead you can

&lt;prefix&gt; z

:   toggle the maximisation of the current pane

then copy the text you want.

Alternively, if you want to copy and paste between tmux panes/windows
you can

&lt;prefix&gt; \[

:   enter copy mode

move the cursor using the arrow keys to where you want to start copying
then

space

:   (in copy mode) mark start of section to copy

move the cursor keys to the end of the section you want to copy then

enter

:   (in copy mode) mark end of section to copy and exit copy mode

You can then move to another pane/window and press

&lt;prefix&gt; \]

:   paste copied text

I find this mechanism very useful.

And there's more
----------------

Things not covered in detail here include:

-   The ability to [customise much behaviour and all
    keybindings](https://wiki.archlinux.org/index.php/tmux#Configuration)
    (here's [my config
    file](https://github.com/willfurnass/dotfiles/blob/master/tmux/.tmux.conf))
-   The [tpm](https://github.com/tmux-plugins/tpm) plugin system
    (including the awesome [tmux
    fingers](https://github.com/Morantron/tmux-fingers) plugin for
    intelligently copying key info (e.g. IP addresses) from the output
    of standard Unix utilities).
-   [Sharing a session with another
    user](https://www.howtoforge.com/sharing-terminal-sessions-with-tmux-and-screen)

Using tmux on HPC clusters
==========================

Terminal Multiplexers can be useful if doing [interactive
work](http://docs.hpc.shef.ac.uk/en/latest/hpc/scheduler/sge.html#interactive-sessions))
on a [HPC](https://en.wikipedia.org/wiki/Supercomputer) cluster such as
the University of Sheffield clusters [ShARC and
Iceberg](http://docs.hpc.shef.ac.uk/) (assuming that you don't need a
[GUI](https://en.wikipedia.org/wiki/Graphical_user_interface)).

On ShARC and Iceberg can:

1.  Start a tmux or GNU Screen session on a login node;
2.  Start an interactive job using [qrshx or
    qrsh](http://docs.hpc.shef.ac.uk/en/latest/hpc/scheduler/sge.html);
3.  Disconnect and reconnect from the tmux/Screen session (either
    deliberately or due an issue with the SSH connection to the
    cluster);
4.  Create additional windows/panes on the login node for editing files,
    starting additional interactive jobs etc, watching log files.

Starting tmux on worker nodes is also useful if you want to have
multiple windows/panes on a worker node *but* less useful if you want to
disconnect/reconnect from/to a session as if you run qrsh a second time
you cannot guarantee that you will be give an interactive job on on the
node you started the tmux session from.

However, note that you can have nested tmux sessions (with
**&lt;prefix&gt;&lt;prefix&gt; &lt;key&gt;** used to send tmux commands
to the 'inner' tmux session).

**Warning**: many clusters have multiple login nodes for redundancy,
with only one being the default active login node at any given time. If
the active login node requires maintenance then logged-in users may be
booted off and long-running processes may be terminated (before the
system administrator makes a 'standby' login node the currently active
one). Under such circumstances your tmux/Screen session may be killed.

Being a good HPC citizen
------------------------

Your interactive job (on a cluster worker node) will be terminated by
the cluster's *Grid Engine* job scheduler after a fixed amount of time
(the default is 8 hours) but your tmux/Screen session was started on a
login node so is outside the control of the cluster and will keep
running indefinitely unless you kill it.

Each tmux/Screen session requires memory on the login node (which is
used by all users) so to be a good HPC citizen you should:

-   **Kill your tmux/Screen session when no longer needed** (tmux/Screen
    will exit when you close all windows)
-   **Only start as many tmux/Screen sessions on the login node as you
    need (ideally 1)**
-   **Exit your interactive Grid Engine job** (on a worker node) **if no
    longer needed** as then others can make use of the resources you had
    been using on this node.

**Tip**: with tmux you can ensure that you either reconnect to an
existing session (with a given name) if it already exists *or* create a
new session using: :

    tmux new-session -A -s mysession

This should help avoid accidentally creating more than one tmux session.

------------------------------------------------------------------------

NB the recordings of terminal sessions shown were created using
[ttyrec](http://0xcc.net/ttyrec/) and
[ttygif](https://github.com/icholy/ttygif) then converted to
[.webm](https://www.webmproject.org/) videos using
[ffmpeg](http://ffmpeg.org/).

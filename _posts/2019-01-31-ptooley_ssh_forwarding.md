---
layout: post
title: SSH Forwarding for easier HPC interaction
author: Phil Tooley
slug: 2019-01-31-ssh-forwarding
date: 2019-01-31 12:00:00 UTC+00:00
tags: ssh hpc
category: tutorials
link:
description:
type: text
---

# What is SSH?

If you have ever used an HPC you have likely encountered SSH as the means for connecting to it and
interacting via the command line.  SSH stands for "Secure Shell", and is the standard method for
making encrypted remote connections to machines running Linux or similar "unix-like" operating systems
(such as Mac OS X).

Users of Linux or Mac machines will typically launch SSH directly in the console, with a command
like:

```sh
user@localmachine ~ $ ssh user@remotemachine
```

while Windows users are more likely to have used an application such as Putty or MobaXTerm to
connect.

Either way, SSH is a very powerful tool and is capable of much more than just providing secure
remote command line access.  The SSH protocol also allows the creation of more generic encrypted
connections or "tunnels" between computers, which other programs may use to communicate.  The
purpose of this post is to look at these secure tunnels and how they can be useful when interacting
with HPC systems.

# Firewall Problems

Recently as part of a Winter School programme I was asked to host a hands-on workshop session for a
piece of software I develop.  As the host institution is also the host of a prestigious Tier-0 HPC,
we were given access to the system for students to run the code.  However, when I came to start
installing my software on the machine I discovered that no outbound connections from the HPC to
the internet are possible.  This means that pulling data from github, or downloading files directly
to the HPC, is impossible.  This leaves users in the unenviable situation of having to download
everything they need locally, and then copy it to the HPC.  This is perhaps tolerable if you only
need to download a couple of archives and copy them over, but it makes using a package manager such
as [Spack](https://spack.io) very difficult, and using git all but impossible.

As you may have guessed by now though, there is a solution to this problem: using SSH to route
connections via the user's own machine.  However, before I explain exactly how this works, let's
look at how inter-machine communication and SSH tunnels work.

# Connections and Port Numbers

In order for two computers to communicate, a connection must be opened between them. Essentially
this is a negotiation where the two machines agree the terms of the communication such that data is
transferred in a meaningful way.  The point of this post is not to cover all the details of
networking protocols, so we will focus on the important part for our purposes: port numbers. In
order to allow multiple programs to communicate at the same time, they must do so using specific
numbered ports. Each packet of information sent from one machine to another will be tagged to state
which port it came from, and which port it should be delivered to.  Only one program may use a port
at any given time, and so by assigning specific ports to specific programs, multiple programs may
communicate simultaneously, without conflict, by addressing their communications to the appropriate
port.  There are a total of 65535 ports available to use, and typically programs will have a port
number that they use by convention. For example, web browsing via the http protocol normally uses
port 80, while the ssh protocol uses port 22. These conventions mean that, for example, when
connecting to github.com your browser knows to expect to communicate on port 80, rather than having
to try them all to find the right one.

# SSH Tunnels

So what do these ports have to do with SSH and our HPC connection problem?  SSH allows us to
perform "forwarding" of connections, taking data from a given port on one machine, and sending it
to another port on a different machine.  This can be useful in a lot of situations, in particular
to allow temporary access to one machine from another, without compromising security.

## Local Forwarding

Suppose, for example, that you have a machine in the office on which you do most of your work, and
your employer's firewall allows you to access it via SSH (port 22) from your laptop when you are
travelling. We will refer to the laptop as the *local* (to us) machine and the office machine as
the *remote* (from us) machine. Now suppose that you also use iPython notebooks and run a notebook
server (port 80) on that machine.  Now if you want to use your notebook server while you are
travelling you can use your existing SSH access to do just that. To do this, we need to ask SSH to
create a tunnel that forwards connections to port 80 on your work machine. This is known as *Local
Forwarding* because we are forwarding connections *from* the *local* machine, to a remote machine
(which may or may not be the machine we are making the SSH connection to).

To create this connection we call SSH with the following options:

```sh
user@laptop ~ $ ssh -L 8080:localhost:80 user@office
```

This tells SSH to open a console session on the office machine, but also asks it to create a local
forward (`-L`) of port 8080 on this machine to port 80 on "localhost" (which for local forwarding
means "the machine we have connected to").  If you then point a web browser on the laptop to
"localhost:8080" (where from the browser's point of view "localhost" refers to the laptop itself),
this connection will be forwarded by SSH to port 80 on the other machine, and will load your
ipython notebooks as if you were sat in the office.

Schematically, the connection we have created looks like this:

<img src="/assets/images/ssh_forwarding/forwardtunnel.svg" height="200em" />

with port 8080 on our local machine forwarded through an encrypted SSH tunnel to port 80 on the
office machine.

## Remote Forwarding

Alternatively, we can tell SSH to forward connections *from* the *remote* machine, either to the
local machine or to some other remote machine.

To create such a connection, we call SSH with the option:

```sh
user@laptop ~ $ ssh -R 2020:localhost:20 user@office
```

This instructs SSH to forward connections from port 2020 on the remote machine to port 20 on
"localhost" (which in the case of remote forwards refers to the local machine).  Imagine that for
some reason we are running an FTP server on port 20 of our local machine, and want to connect to it
from the remote machine.  To use our ssh tunnel we can connect our FTP client on the remote
machine to "localhost:2020" (which from the perspective of the FTP client meants the remote
machine) and the connection will be forwarded to the FTP server on our local machine:

<img src="/assets/images/ssh_forwarding/reversetunnel.svg" height="200em" />

## Onward Forwarding

SSH forwarding allows us to forward connections to any address, not just the machine at the other
end of the connection, so we can use connection forwarding to allow a machine to connect to remote
sites through a restrictive firewall using another machine as a gateway.  For example, this
potentially provides a solution to the HPC connection problem I outlined earlier.  To allow git
connections from a remote server that disallows outbound connections, to github.com, we can issue
the following command:

```sh
user@laptop ~ $ ssh -R 2020:github.com:22 user@office
```

Telling git on the remote machine to connect to localhost:2020 e.g as `git clone
git@localhost:2020/user/myrepo.git` will now allow connection through the firewall to github:

<img src="/assets/images/ssh_forwarding/onwardreversetunnel.svg" height="200em" />

## Dynamic Forwarding

So far we have looked at forwarding to a fixed destination. However, SSH also supports dynamic
forwarding, where the application using the forwarded connection may choose and change the
destination.  This is not quite as simple as a forwarded connection however, because the
application must understand how to instruct SSH to choose the destination. SSH uses a protocol
known as SOCKS for this, and a dynamic forward can also be known as a SOCKS proxy. The vast
majority of Linux/Unix applications that perform network communication understand how to use a
SOCKS proxy, including git, ssh, wget, curl, etc.

A SOCKS proxy like this is commonly used similar to a VPN, to allow use of the internet via an
encrypted connection to a trusted gateway machine, rather than an insecure local connection.

For example, returning to our example of travelling with a laptop, to create a SOCKS proxy via the
remote (office) machine, we would invoke SSH as:

```sh
user@laptop ~ $ ssh -D 2020 user@office
```

This creates a SOCKS proxy accessible at port 2020 on the local machine, which forwards connections
via the remote machine to the wider internet.  Programs can be instructed to use this through their
settings, or for command line applications by setting the `PROXY_ALL` variable, e.g 
`PROXY_ALL=localhost:2020`.

Note that dynamic forwarding only works to forward from a port on the *local* machine, via the
*remote* machine, not the other way around.

# A complete solution

To solve the problem of downloading software to the HPC, an ideal solution would be to use a
SOCKS proxy to enable applications on the HPC to access all required sites. Unfortunately, this is
the wrong direction for dynamic forwarding, as it requires forwarding from *remote* to *local*.  The
problem can be solved, however, using a pair of SSH forwards: first a remote forward from the HPC
to the local machine, and then a dynamic forward from the local machine to the wider internet:

```sh
user@laptop ~ $ ssh -D 2020 user@localhost -f &
user@laptop ~ $ ssh -R 2020:localhost:2020 user@hpc
```

<img src="/assets/images/ssh_forwarding/dynamicforward.svg" height="200em" />

The first command here creates a dynamic forwarding SOCKS proxy on the local machine but also *via*
the local machine, with the `-f` option telling SSH to run in the background so we can then run
another command.  The second ssh command then connects to a session on the HPC and creates a remote
forward connection port 2020 on the HPC to the SOCKS proxy we just created on the local machine.

Finally, setting `PROXY_ALL=localhost:2020` on the HPC will instruct applications to use this
proxy, and programs such as git and wget can be used to download the needed software.

## Automating the solution

One last useful step is to automate the solution using ssh config (see [this stackexchange
post](https://superuser.com/questions/370930/ssh-reverse-socks-tunnel)).  This is slightly hackish,
as it abuses the `ProxyCommand` option to create the SOCKS proxy, but automatically creates all the
necessary forwards when connecting to a session on the HPC. This ends up being slightly complicated
as SSH requires the ProxyCommand to accept all the ssh data as its input and output. The netcat
(`nc`) command is used to do this, while the ssh command provides the dynamic forward.  To enable
this automated solution, add the following to your `~/.ssh/config/` file, replacing names and urls
as appropriate:

```ini
Host somehpcsocks
  ProxyCommand ssh -D 2020 localhost nc -q 1 localhost 22

Host somehpc
  Hostname login.somehpc.ac.uk
  Port 22
  User myuser
  ForwardAgent yes
  RemoteForward 2020 localhost:2020
  ProxyCommand ssh -W %h:%p somehpcsocks
```

Now when you execute `ssh somehpc`, you will get a console session as usual, but the tunnels will
also be set up so that you can `export PROXY_ALL="localhost:2020` (or put it in your `.bashrc`),
and use git, wget and friends to your heart's content.


# Conclusions

SSH forwarding is a very powerful tool to have in your repertoire, but use it with care.  Be aware
that if you are using it to get around firewall restrictions, the system administrator may well
have implemented them for a reason.  Make sure you read the rules for the system you are using and
ask if you are in any doubt(!)

---
layout: post
title: Securely accessing remote Linux machines
author: Will Furnass
slug: 2020-05-20-ssh-best-prac
date: 2020-05-20 12:00:00 UTC
tags: SSH
category:
link:
description:
type: text
---

*Including High-Performance Computing clusters*

It appears that [recent cyberattacks on various European High-Performance Computing (HPC) clusters][recent-hpc-attack]
were in part facilitated by bad actors acquiring 'SSH keys' of researchers
with accounts on multiple clusters then using these keys to hop between
HPC clusters.  *Secure SHell* (SSH), as the name implies, can be a very
secure way of starting a remote shell (command-line session) on remote
Linux machines (e.g. HPC clusters) and the underlying protocol is also
useful for copying files to/from remote machines (via the *SCP*, *SFTP* and
*rsync* tools), but there are several poor practices that can limit the
security of remote access and file transfers.  Given the recent attacks
it makes sense for staff and students who access remote Linux machines
to consider these, even if the remote machines are not managed by the
University of Sheffield as poorly managed keys/passwords could allow
others to impersonate you, which could result in further cyberattacks,
data theft/loss and reputational damage to you and the University.

If you **typically use a password to authenticate via SSH** then consider what
damage could be done should someone else acquire/guess your password.  This is
why it is sensible to authenticate using two distinct pieces of private
information, such as something you have plus something you know, where possible
(*multi-factor authentication (MFA)*).  This is why access to Iceberg, the only
internet-accessible University cluster, now requires a [VPN
connection][tuos-vpn] (with its distinct password) or [an additional,
one-time-only password][tuos-hpc-connecting] (via [Duo MFA][tuos-duo-mfa], if
supported, when accessed off campus.  Note that currently multi-factor authentication via
Duo when using SSH is only mandatory if Duo MFA has been enabled for your
University account.  You should continue to [manage your University password
carefully][tuos-pw-mgmt] even when using MFA (password plus VPN or Duo MFA).

Another common way to authenticate using SSH is using a **public/private key
pair**.  You generate the key pair on your own machine, which results in two
files containing cryptographically-linked contents, then install *just* the
public key file on the remote machine(s) you want to SSH to.  For example, you
might install one of your public keys on the ShARC HPC system and, under the current setup, you would
then be able to connect to it *without* entering your University password.
  Public/private key pairs are potentially more secure than using just a
password to authenticate as an attacker must have the private key file to
access a machine that has the corresponding public key.  However, if the
private key is itself unencrypted then if your laptop is compromised (e.g. by a
malicious program) then attackers will be able to log into remote machines as
you (which is what is believed to have happened with the compromised European
HPC systems).  The solution to this is to **specify a passphrase with which to
encrypt the private key when you create a new keypair**.  You will then be
prompted for that passphrase when using the private key to log into a remote
machine and the private key file by itself will be useless to attackers.  To
save you having to retype your passphrase every time you want to use the
associated private key you can use a program called a *SSH Agent* to
cache your passphrase in memory for some time.

**Recommendations for managing SSH public/private key pairs**:

-   Specify a passphrase when creating a new keypair to ensure the
    unencrypted private key is never directly accessible from your home
    directory.
-   Consider adding a passphrase to existing unencrypted private
    keys.
-   If you have been using an unencrypted private key to automate access
    to remote machines then contact
    `it-servicedesk@sheffield.ac.uk` discuss your needs;
    there may be more secure ways of doing things.
-   Do not re-use your University password as a passphrase to encrypt a
    SSH private key.
-   Do not copy your private key to remote machines.
-   Use a SSH Agent to save you from having to retype your passphrase
    very frequently.
-   Do not install your public key in other users' home directories in
    such a way that would allow you to log in via SSH as them using the
    corresponding key pair; this constitutes account sharing and so is
    prohibited.

Changes to SSH public/private key pair authentication on the Iceberg
HPC cluster: SSH does not allow system administrators to enforce all
users' private keys to be encrypted with a passphrase so following the
recent attacks on other HPC systems SSH public/private key pair
authentication to Iceberg is only permitted on campus or via a VPN
connection.

[More information on logging in to University HPC clusters via
SSH][tuos-hpc-connecting].

[recent-hpc-attack]: https://sites.google.com/sheffield.ac.uk/cyberblog/latest-threats-news#h.p_MR_o8UFwSj3K
[tuos-hpc-connecting]: https://docs.hpc.shef.ac.uk/en/latest/hpc/connecting.html
[tuos-vpn]: https://www.sheffield.ac.uk/it-services/vpn
[tuos-duo-mfa]: https://sites.google.com/sheffield.ac.uk/mfa/home
[tuos-pw-mgmt]: https://www.sheffield.ac.uk/it-services/information-security/passwords

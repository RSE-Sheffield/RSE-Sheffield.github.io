---
layout: post
title: "Git: rebase vs merge"
author: Robert Chisholm
slug: 2020-06-23-git-rebase-vs-merge
date: 2020-06-23 12:00:00 UTC
tags: git
category:
link:
description:
type: text
excerpt_separator: <!--more-->
---

I'm personally a big proponent of using `git rebase`. Whilst it can be used in place of `git merge` to combine branches, it operates differently. This can easily lead to people misunderstanding how it works, which can subsequently lead to problems.

The classic problem is that after performing `git rebase`, you attempt to `git push` and your changes are rejected as your local HEAD is behind the remote HEAD. *Helpfully* git bash suggests you should use `git pull` first, to include the remote changes, before you `git push`. However, this is **not** what you want to do. The rebase has intentionally changed history which leads to this disagreement between the local and remote copies of the branch, performing `git pull` at this stage will (redundantly) merge back in the the commits that were just rebased.

<!--more-->

## `git merge`

`git merge` incorporates changes from the named branch to the head of the current branch.

There are actually two types of merge which can occur;

### True Merge
If the branches `master` and `topic` both contain new commits, a true merge will be applied. This essentially creates a new merge commit with parents from both of the branches being merged.

If we call `git merge topic`, whilst the current branch is `master`
```
      A---B---C topic
     /
D---E---F---G master
```
becomes
```
      A---B---C topic
     /         \
D---E---F---G---H master
```
The new commit `H` has been added to the branch `master` which merges in the changes from `topic`. The branch `topic` remains unchanged.

### Fast Forward Merge
In contrast, when the head of the current branch exists within the history of the branch being merged, it can be fast-forwarded. This simply means that the new commits are copied directly to the current branch, essentially making the two branches match. This will commonly happen automatically when using `git pull` to retrieve changes from the remote repository.

If we call `git merge topic`, whilst the current branch is `master`

```
      C---D---E topic
     /
A---B master
```
becomes
```
                   topic
                 /
A---B---C---D---E master
```


*You can ofcourse add the argument `--no-ff` to force a true merge to occur instead. Similarly, `--ff-only` will only apply the merge if it can be done via fast forward.*

The full documentation for `git merge` can be found [here](https://git-scm.com/docs/git-merge).

## `git rebase`

In contrast, `git rebase` incorporates changes from the current branch to the head of the named branch in-place. 

More explicitly, it rolls back all commits on the current branch until a common point in history between the current and named branches is found. All commits after that point in the named branch are then fast-forward merged into current. Following the initially rolled back commits are reapplied individually.

Therefore using the earlier example, if we instead call `git rebase master`, whilst the current branch is `topic`
```
      A---B---C topic
     /
D---E---F---G master
```
becomes
```
              a---b---c topic
             /
D---E---F---G master
```
However, as the parents of commits `A`, `B` and `C` have changed. Their commit hashes have changed, so git no longer sees them as the same commits. This is why git sees commits `a`, `b`, `c` as completely new commits, whereas `A`, `B` and `C` no longer exist. As commits have been *deleted*, history has changed!

When you attempt to `git push`, `topic` on remote is `D---E---A---B---C`, whereas the local `topic` is `D---E---F---G---a---b---c`. This is why git believes you are behind and suggests you `git pull`, your branches diverge at commit `E` rather than the head of the remote `topic`.

Therefore, in order to push the rewritten history to remote, force push must be used `git push -f`. This replaces the remote `topic` with your local `topic`.

**But never force push!**
Force push is only ever used to rewrite history, for this reason it has a bad reputation from people using it without understanding what they're doing (and inadvertently deleting important commits).

It is true, you should avoid force pushing to `master`, or to change/delete any commits relied on by other users (without their approval). However, if you are working in your own feature branch, force push simply serves to make the remote branch match your local copy and should not harm other users. You may wish to first review your branch history with `git log` and execute your test suite to ensure everything is as expected. After performing a force push, the only way to recover the deleted history is via [`git reflog`](https://www.atlassian.com/git/tutorials/rewriting-history/git-reflog).

If someone has rebased a branch you have a copy of locally, you will then need to perform the inverse of a force push. Replacing your local version of `topic` with the remote, `git fetch` `git checkout topic` `git reset --hard origin/topic`. 

If you have local changes in that branch which you don't wish to lose, it gets more complicated. I would suggest you first make a clone of your branch `git branch -d topic_backup`, then perform the `reset` as described above, followed by [`git cherry-pick`](https://www.atlassian.com/git/tutorials/cherry-pick) to reapply your changes on top of the freshly rebased branch (cherry-pick requires you to specify which commits from `topic_backup` to add back into `topic`). However in most cases, you would avoid getting into this position.

### So Why Rebase?
Rebase rewrites history, so it's seen as dangerous and potentially harmful if used improperly. There are lots of ways this can occur:
* Rebasing when the local `topic` is behind remote; this loses all commits that weren't local if you force push.
* Rebasing when the local `master` is behind remote; this just means you need to update your local master and rebase again.
* `git pull` after `git rebase`; this adds a pointless (and possibly conflicting) merge commit to the head of your local branch.

Rebase however, allows you to maintain a clear linear history, and keep long lived branches in active repositories upto date with `master`. This can prevent a more complicated conflict when it becomes time to merge the branch into `master`.

Furthermore `git rebase` can be very powerful, by using the `--interactive` flag you can perform a wide range of additional functionality (which can be achieved with other git commands). I personally prefer to learn one versatile command, than many highly specific commands.

### `git rebase --interactive`

*Before using `git rebase --interactive`, if you haven't already, you should update the text editor used by git to your personal favourite. This can save you alot of time if you're unfamiliar with `vim`. ([See here](https://help.github.com/en/github/using-git/associating-text-editors-with-git))*

When you first call `git rebase --interactive`, git opens your text editor and presents the below message

```
# Rebase AAAAAA..BBBBBB onto CCCCCC (N commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
```

Reading this, it should be clear how powerful an interactive rebase can be. Like a regular rebase, it first returns to the closest point of common history. However, now you can modify how the commits are reapplied.

This can be very useful when you wish to cleanup a branch prior to merging a pull request, but still retain several seperate commits.

Furthermore, with the ability to squash, delete and reword commits using rebase, it reduces the need to learn how to use `git squash` and a range of other commands. You can simply call `git rebase --interactive HEAD~10`, to amend the previous 10 commits or `git rebase --interactive ABCDEF` to rework all commits after the commit `ABCDDEF`. Performing a rebase against a branch's own history, should not produce any conflicts (with the exception of rebasing over merge commits and reordering commits) so it is a convenient way of tidying up a branch.

One additional note; if you are rebasing an external branch, which introduces new commits which are likely to conflict. You may wish to first perform an interactive rebase against the branch's own history to squash commits. If you don't, you may be required to fix a conflict in every individual commit, as interactive rebase's squash operation is not applied to the commits first. This can be particularly annoying when you have numerous commits iterating over a single block of conflicting code.

The full documentation for `git rebase` can be found [here](https://git-scm.com/docs/git-rebase).

### How can I rebase my fork?
When you're working with on a 3rd party repo or don't have access to create branches within a repo, you are required to create a fork. This acts as a separate repository, which creates a problem if you wish to rebase changes from 'upstream', the original repository. If you attempt to rebase `master`, it will use the `master` branch from your repo, rather than the upstream.

When you fork a repo on GitHub (or BitBucket etc), the git repository you clone to your computer isn't aware that it's forked (you could manually fork a repo from GitHub, to BitBucket!). Therefore, if you wish to link it to the original repository you must add a second remote, this is normally referred to as 'upstream'.

First you must create a new remote, this tells your local copy of the git repo that there is a second remote repo you wish to use: `git remote add upstream https://github.com/foo/bar.git`

Then to perform your rebase it is three commands, similar to a regular rebase. 
* `git fetch upstream` to update your local copy of the upstream remote repo. 
* `git checkout topic` to ensure you are rebasing the correct branch (`topic` could be `master` or any other branch). 
* `git rebase upstream/master` to rebase using `master` from the upstream repo.
* `git push -f origin topic` to push these changes to your remote (origin), this may not be necessary depending on circumstance.

This introduces the new concept of having multiple remotes, however otherwise the process should feel similar to performing a rebase with a local branch.

---------------------
In summary, `git rebase` is a very powerful command, which can be used to edit, reword, reorder, squash commits and merge branches. For your day to day work, it may not be required. However if you are working in shared projects with feature branches and wish to retain a tidy git history, it provides the tools to do that in a single place.

If you have a long-lived feature branch, it may be useful to regularly rebase updates from master, this will save a larger conflict when it comes time for a pull request and will ensure your code is tested with relation to current changes.

Rebase does rewrite history, so it's important to understand how it works to ensure that work isn't lost unintentionally. A strong test suite can also be useful to ensure functionality has not been changed when combining branches or reordering commits. Furthermore, avoid changing shared histories without the approval of everyone it affects, as this is likely to cause extra hassle for the users who didn't perform the rebase.

The option of `git rebase` over `git merge` when merging pull requests is largely one of preference. A fast-forward merge will be performed if the code is update to master (or has already been rebased). However, if the feature branch is behind, I prefer to perform a rebase first, as this retains the linear history and avoids creating an additional merge commit.


If you would like to learn more about how to use git, Python or HPC resources; head on over to our [training resources page](/training/programming).

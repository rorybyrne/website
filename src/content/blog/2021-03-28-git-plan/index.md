---
title: "Is there a better git workflow for context switching?"
slug: 'git-plan'
description: "git-plan, a git extension for writing preemptive commit messages"
pubDate: "Mar 28 2021"
tags: ["tool"]
coverImage: './cover.png'
---

Update 30/03/2021: I decided to make the title less inflammatory, and change the tone in some places to be less critical of git.

## Background

Picture the scene, you're in the zone working on a new feature in your codebase when you spot a typo and fix it. Then,
to facilitate the feature you're working on you decide to make a small architectural change elsewhere in the codebase.
Finally, before finishing your session you decide to refactor some code in one of the files you were working on.

Those kind of sessions are great, because you're in flow. And then it comes time to stage your changes and commit your
work and the frustration begins. You've got changes in 12 files, and many of those changes aren't related to
each other. What do you do?

The "right" thing to do is to spend time un-tangling your changes, staging them in groups and committing with well
thought-out commit messages. `git add --patch` can help here, but it's still tedious work. Alternatively, you could just
`git add --all` and call it a day.

## Poor incentives

Neither of those choices are good, but git doesn't give us much choice. In-fact, the natural way of using `git` seems
to inevitably lead to this situation. Here's why:

1. Git expects you to write your commit message at the end of your coding session - after you've already turned your
thoughts into code anyway.
2. If you context-switch during your coding session, git is not aware of it. In-fact, git isn't even a part of the
picture until _after_ you've finished writing code.

Ultimately, git expects you to plan your context-switching yourself, with no opportunity to write down your thoughts
until you commit your work. That workflow is not very flexible: git should instead allow
[preemptive/draft commit messages](https://arialdomartini.wordpress.com/2012/09/03/pre-emptive-commit-comments/).

## A better way

I recently built a tool called [git-plan](https://github.com/synek/git-plan) which tries to make this possible, by adding a new
`plan` command  to git. When you run `git plan`, you have the opportunity to write your commit message in advance.
Then, when you've staged some changes and you're ready to commit, simply run `git plan commit` and you can use your
previously-written plan as a template for your commit message.

An example usage might look something like:
1. `git plan add` -> open vim to draft the commit message for your current task
1. ...start writing code, then notice a method that needs to be refactored/bug to be fixed.
2. `git plan add` -> opens vim, so you can draft a commit message for the new task
3. ...continue working on your original task, without needing to context switch
4. `git add --all` -> stage files for your task
5. `git plan commit` -> asks you to choose a plan, so you choose the current task's plan
6. ...then opens `vim` with that plan as the template.
7. ...make changes to the commit message if needed, then save.
8. `git plan list` -> see the other commits you have planned
9. ...start working on the second task

It's important to say that this isn't a magic pill - you can still end up with too many unrelated changes in step
4 that you have to untangle. This tool just makes it possible to use git in a new way, which can lead to better habits
if you put in the effort.

That being said, I do think that a magic pill _is_ possible. This is where problem #1 comes into play: when you
context-switch while writing code, your tools *do not* switch with you...but they should. If your tools "know" what your
planned work is, there is no reason why they cannot, in principle, keep up with you as you switch from building a
feature in file A to fixing a bug in file B.

That is the future work for `git plan` - to build a git workflow where staging your changes manually is not required,
because your tools can keep up with you.

If any readers are interested in contributing to the magic pill, I'm happy to take contributions for
[git-plan](https://github.com/synek/git-plan).

Rory.

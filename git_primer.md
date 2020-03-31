# Git Primer
Git is version control software; which means that it records incremental changes to a file or set of files over time — usually within a designated directory called a "repository", or "repo" for short. Each incremental change that is recorded within the repository (which may actually include changes or additions to several files) is called a "commit." Git maintains a set of commits, commonly called the "history", or "commit history." By maintaining this history git is able to recall specific versions of your files later on. This is analogous to computer backup software like Time Machine, that makes incremental backups of your files and allows you to see the state of your files at any date a backup was made.

Many version control systems, including git, have also features (e.g. merging) which facilitate many users making changes to the same set of files at the same time without worrying about some changes overwriting others.

## Installing Git
There are various ways to install git, but the easiest way is to simply [download](https://git-scm.com/downloads) and run the installer package for your OS from git-scm.com. 

## Git CLI
Below are a subset of basic git commands that you may find useful during this course. For a more thorough list, see the [git reference](https://git-scm.com/docs).

- [`git commit`](https://git-scm.com/docs/git-commit)
  - Committing is essentially saving changes to a set of files along with the timestamp, an auto-generated unique ID (hash), and a user-provided message stating the purpose of the change. Each saved set of changes is called a **commit**. All of your commits taken together are called your **commit history**.
- [`git add`](https://git-scm.com/docs/git-add)
  - Before you can commit a new or changed file, you must use `git add` to **stage** that file for committing. Staging makes a file eligible for committing, otherwise git will ignore it. But, why the extra step? Why not just add/commit all in one step? Staging is useful in cases where you may have many changed files, but only want to commit some of them now. Maybe you want to spread the changes across several commits. Or maybe you're still working on some of the files, but want to save the state of ones you've completed; following the mantra, "_Commit early. Commit often._" Staging commits was a novel feature introduced by git, whereas previous version control systems like CVS and Subversion, required you to commit all changes at once.
- [`git status`](https://git-scm.com/docs/git-status)
  - Among other things, this command shows any files which have changed in your current working branch since your most recent commit.
- [`git push`](https://git-scm.com/docs/git-push)
  - When you make a commit, it is saved to the repository on your local machine. In order to see these commits on the remote (aka upstream) repository you'll need to use `push` to synchronize the commits from your local machine with your remote repository (e.g. on github.com).
- [`git pull`](https://git-scm.com/docs/git-pull)
  - As the name implies, `git pull` is sort of like the opposite of `git push`, in that it "pulls in" commits (and other meta info) from your remote repository and integrates them into your local repository. This is useful if you're working in parallel with others on the same repository and want to pull in any updates (commits).
- [`git branch`](https://git-scm.com/docs/git-branch)
  - This command lists, creates, or deletes branches. A branch is essentially a set of commits - a particular git history. When you create a git repository a default branch, usually called `master`, is created (in older version control systems it was often called the "trunk", which makes more sense in a tree analogy). As you work and commit changes, those changes will be recorded to the `master` branch's history. Normally, however, when a feature or other large set of changes needs to be made, a separate branch is created from `master`, called a working branch. When this branch is created, it is identical to `master`, but commits made to this new branch do not appear on `master` - they are separate. This is one way that parallel work is achieved. Each user creates their own separate branch from the same `master` branch, and works on their branch until it is time to copy (or "merge") their changes back into master.
- [`git checkout`](https://git-scm.com/docs/git-checkout)
  - Among other things, this command switches to another branch from your current branch, e.g. `git checkout <branch_name>`.

## Github Desktop GUI
If you're using Github and prefer to use a GUI application, Github provides the free [Github Desktop](https://desktop.github.com/) application. Github Desktop is a simplified git interface to the command line interface (CLI), meaning you can achieve many of the tasks you can achieve using the CLI. It's a great learning tool, however once you master the CLI you may find it more flexible. For more information see the [help documentation](https://help.github.com/en/desktop).

## Other Topics


### Cloning a Git Repo
Cloning a git repo means getting a local copy of that repo on your machine, so that you can make changes to it directly via `git commit`. To clone a repository you would use the [`git clone`](https://git-scm.com/docs/git-clone) command. For instance, to clone the `react-course-1` repo you'd use the command followed by the repository URL, `git clone https://github.com/programmist/react-course-1.git`

### Forking a Github Repo
[Forking a repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) is similar to cloning, but it's more of a Github concept rather than a specific git command. Forking a repo creates a copy of that repo within your Github account repositories list. Once you've created a fork you can then clone that fork and make changes to it as you normally would, however the changes you make only affect your fork, not the original repo. If you do wish to make changes to the original repo, you can create a [pull request from your fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). A pull request is a set of commits which you are suggesting that the owner (or admin) of the original repo (from which you forked) to review and potentially integrate into to their repo. This is often how open source collaboration works on Github.

## Learning Resources
- Tutorial: [Learn the Basics of Git in Under 10 Minutes](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/)
- [Official Documentation](https://git-scm.com/doc)
- [Pro Git (free ebook)](https://git-scm.com/book/en/v2)
- [Atlassian Beginner Tutorials](https://www.atlassian.com/git/tutorials/what-is-version-control)
- [Atlassian Git Cheat Sheet](https://git-scm.com/doc)

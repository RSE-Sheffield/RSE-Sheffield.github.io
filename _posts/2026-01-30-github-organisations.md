---
layout: post
title: "Managing Research Code at Sheffield: Getting Started with GitHub Organisations "
author: Joe Heffer
slug: 2026-01-30-github-organisations
date: 2026-01-30 12:00:00 UTC
tags: github "version control" "github organisations" collaboration security
category:
link:
description:
social_image:
type: text
excerpt_separator: <!--more-->
---

This guide is for researchers at the University of Sheffield who need to set up a GitHub Organisation for their team or project. It covers the essential decisions you'll need to make, explains who is responsible for what, and walks through key security settings.

# Why use a GitHub Organisation?

If you're already using Git and GitHub for version control (and if you're not, there are [good reasons to start](https://www.software.ac.uk/news/ten-reasons-implement-code-management-practices-early-research-group)), you've probably been working from your personal account. That works fine for solo projects, but research groups face a specific problem: what happens to the code when people leave?

When a PhD student or postdoc moves on, their personal repositories often become "gradware"—abandoned code that the group can no longer access or maintain. An Organisation solves this by giving the research group itself ownership of the code, separate from any individual's account.

Organisations also let you:

* **Manage access** centrally (who can see what, who can change what)  
* Set consistent **security policies** across all your projects  
* Keep your group's **work together* in one discoverable place

The University's [GitHub Enterprise Early Access Program](https://rse.shef.ac.uk/training/github-enterprise/) provides access to these features. This provides several advantages over a standard free account, including:

* **Unlimited Private Repositories:** Collaborate securely within your team without public exposure.  
* **Enhanced Security:** Access to advanced tools like secret scanning to prevent accidental leaks of API keys or credentials.

**To get started**, you will need to follow the University’s formal onboarding process. Please refer to the [GitHub Enterprise Policy Document](https://rse.shef.ac.uk/training/github-enterprise/); specifically, you will find the required setup form in Section 5 (Requesting an Organisation).

**💡 Tip:** When naming your Organisation, choose something descriptive and evergreen such as UoS-\[Institute\] or UoS-\[Lab-Name\], rather than something tied to a specific year or project. An organisation can contain multiple repositories that span multiple projects.

# **Who looks after the Organisation?**

GitHub Organisations need designated **Owners**—people who take responsibility for the space. This isn't just a technical role; it comes with ongoing obligations.

**You need at least two owners** for continuity. These people will be responsible for:

* **User management**: inviting new members, removing people who leave  
* **Security oversight**: ensuring the organisation follows University policies, responding to security alerts  
* **Housekeeping**: periodically reviewing inactive members, archiving old repositories

Choose your owners carefully. They should be people who'll be around for a while and who understand (or are willing to learn) the security implications of managing shared code. The full list of owner responsibilities is in Section 1.3 of the [GitHub Enterprise policy](https://rse.shef.ac.uk/training/github-enterprise/).

To prevent an Organisation from becoming "orphaned" when a researcher moves on, we recommend that the Principal Investigator (PI) or a permanent staff member always holds one of the Owner roles. This ensures the department retains access to the research outputs even after students or post-docs finish their contracts.

# **Essential security settings**

Once your Organisation is created, you'll need to configure some settings. You'll find these under **Settings** in your organisation's GitHub page. The [GitHub documentation on security settings](https://docs.github.com/en/code-security/securing-your-organization) covers everything in detail, but here are the key ones to address first.

If you're working with commercially sensitive code, personal data, or anything requiring particular protection, [contact the Research & Innovation IT team](https://students.sheffield.ac.uk/it-services/research) to discuss your specific needs.

## **Restrict public repository creation**

**Where:** Settings → Member privileges → Repository creation

**What to do:** Untick "Public" (leave Private and/or Internal enabled)

**Why:** This prevents anyone from accidentally making a repository public. Research code often needs to stay private until publication—or permanently. With this setting, making something public requires deliberate action by an owner.

## **Control outside collaborators**

**Where:** Settings → Member privileges → Outside collaborators

**What to do:** Untick "Allow repository administrators to invite outside collaborators"

**Why:** Outside collaborators are people who aren't organisation members but can access specific repositories. Without this control, any repository admin could invite external people without oversight. Centralising this with owners means you always know who has access and can ensure external users meet any contractual or ethical requirements.

## **Enable automated security scanning**

**Where:** Settings → Code security and analysis

**What to do:** Enable "Dependabot alerts" and "Secret scanning"

**Why:** These tools watch for common security problems:

* **Dependabot** alerts you when the libraries your code depends on (Python packages, R packages, etc.) have known security vulnerabilities. It can even suggest fixes automatically.  
* **Secret scanning** catches accidentally committed passwords, API keys, or other credentials. This happens more often than you'd think, and catching it early prevents data breaches.

## **Restrict GitHub Actions**

**Where:** Settings → Actions → General → Policies

**What to do:** Select "Allow enterprise actions and reusable workflows"

**Why:** GitHub Actions runs automated tasks on your code (tests, checks, deployments). There's a marketplace of community-built Actions, but not all are trustworthy. Restricting to enterprise-approved actions reduces the risk of malicious code running in your workflows.

## **Limit Personal Access Tokens**

**Where:** Settings → Personal access tokens → Settings

**What to do:** Under "Tokens (classic)", select "Restrict access via personal access tokens (classic)"

**Why:** Personal Access Tokens let scripts access GitHub on behalf of a user. Classic tokens have broad permissions and are a security risk if leaked. This setting forces users to approve which organisations their tokens can access and encourages use of the newer, more secure fine-grained tokens.

## Require two-factor authentication

**Where:** Settings → Authentication security

**What to do:** Tick "Require two-factor authentication for everyone in your organization"

**Why:** Your organisation's security is only as strong as its weakest password. Two-factor authentication means that even if someone's password is stolen, attackers still can't access your repositories.

# Protecting important repositories

Beyond organisation-wide settings, your most important repositories deserve additional protection.

## **Branch protection rules**

**Where:** Repository Settings → Branches → Add branch protection rule

**What to do:** Target your main branch and enable "Require a pull request before merging" and "Require approvals". While you're there, also turn on:

* **Dismiss stale pull request approvals when new commits are pushed**
* **Require approval of the most recent reviewable push**

**Why:** Without branch protection, anyone on the team—including you—can push changes directly to your main branch. Requiring a pull request means every change has to be reviewed before it lands: the code equivalent of asking a colleague to read over your work before you send it.

<details>
<summary>Why those two extra settings matter</summary>
<p>There is a gap in the default pull request setup that is easy to overlook. Once a PR is approved, any team member can still push new commits to the same branch. The approval stays in place even though the code has changed, so those unreviewed commits can be merged straight through—quietly bypassing the review process.</p>
<p>"Dismiss stale approvals" clears existing sign-offs the moment new commits arrive, forcing another review. "Require approval of the most recent push" goes further: it ensures the reviewer explicitly signed off on exactly what gets merged, not an earlier version of it. Without both settings, the approval requirement is straightforward to circumvent, intentionally or not.</p>
</details>

# Common mistakes to avoid

**Committing data to repositories.** GitHub is for code, not data storage. Large files make repositories sluggish, and committing research data may violate ethics approvals. Use a `.gitignore` file to exclude data files and folders.

**⚠️ Warning:** GitHub is not a data repository. Never commit raw research data, sensitive participant information, or large binary datasets to GitHub. Use it for code, scripts, and documentation only.

**Hard-coding credentials.** It's tempting to put database passwords or API keys directly in scripts. Don't. Use environment variables or a `.env` file (added to your `.gitignore`) to keep credentials separate from code.

# Going further

This guide covers the essentials, but GitHub offers more for making research software FAIR (Findable, Accessible, Interoperable, Reusable):

* **Citation files**: Add academic citations using the [Citation File Format](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-citation-files) so others can credit your work properly  
* **Archiving with ORDA**: Archive snapshots of your code in the University's [research data repository](https://sheffield.ac.uk/library/research-data-management/orda) with a permanent DOI  
* **Automated testing**: Use [GitHub Actions](https://docs.github.com/en/actions) to run tests automatically when code changes

Why use [ORDA](https://sheffield.ac.uk/library/research-data-management/orda) instead of just leaving code on GitHub? While GitHub is excellent for active development, it does not guarantee long-term preservation. To meet most funder requirements, you should archive "frozen" versions of your code in ORDA.

Unlike GitHub, ORDA provides a persistent [Digital Object Identifier (DOI)](https://www.doi.org/the-identifier/what-is-a-doi/). This ensures that when you cite your code in a paper, the link will never break, and other researchers can access the exact version of the software used to produce your results.

For more information on integrating GitHub with ORDA (which is based on the FigShare platform,) please read [How to connect Figshare with your GitHub account](https://info.figshare.com/user-guide/how-to-connect-figshare-with-your-github-account/) on the FigShare documentation.

# Summary checklist

If you are starting a new research organisation today, follow these six steps:

1. Request Access: Complete the form in Section 5 of the Enterprise Policy.  
2. Assign Owners: Ensure at least two people (including a permanent staff member) have Owner status.  
3. Restrict Creation: Set "Repository Creation" to Owners Only to prevent sprawl.  
4. Enforce 2FA: Check that "Require two-factor authentication" is active for all members.  
5. Protect Branches: Enable "Branch Protection" for your main or master branches.  

# Getting help

Contact the [Research Software Engineering](https://rse.shef.ac.uk/) or  [Research & Innovation IT team](https://students.sheffield.ac.uk/it-services/research) if you need help choosing the right settings, working with sensitive data, or troubleshooting permissions issues.

While the security configurations outlined above provide a robust baseline for most projects, it is important to remember that security is not a one-size-fits-all requirement. Not every option needs to be strictly locked down in all circumstances; rather, managing an organization involves making informed judgments and balancing security trade-offs against the specific collaborative needs of your research. If you are uncertain about which settings are appropriate for your project’s unique requirements, or if you need help navigating these decisions, you can [contact us](https://students.sheffield.ac.uk/it-services/research) for further guidance

## Training courses

We offer a range of short courses throughout the year that are free for all researchers. Learn beginner to advanced skills in popular programming languages, computing, and statistical packages.

As part of the [FAIR² for research software curriculum](https://rse.shef.ac.uk/training/fair4rs/), the [Research Software Engineering team](https://rse.shef.ac.uk/) provides a two-tiered version control training program tailored specifically for researchers. The journey begins with the "Git, GitHub and GitKraken - From Zero to Hero" module, which introduces absolute beginners to version control basics and collaborative workflows using graphical tools. For those looking to level up, the "Git With It" session dives deeper into branch management, commit history, and advanced collaboration techniques. Together, these modules empower researchers to move beyond basic file saving, ensuring their code is reproducible, organized, and ready for collaborative open research.

# Online guidance

These resources provided by other Universities may be useful as you learn to collaborate on research software using GitHub:

- [How to set up GitHub for a research project](https://www.ucl.ac.uk/advanced-research-computing/expertise/research-software-development/research-software-development-tools/support-ucl-researchers) by University College London
- [Introduction to Using GitHub](https://rainsworth.github.io/intro-to-github/) by Rachael Ainsworth from the University of Manchester

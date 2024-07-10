---
layout: post
title: "Upgrading R to at least version 4.4.0"
author: Grace Accad, Gemma Ives, Will Furnass
slug: 2024-07-10-faqs-for-upgrading-r
date: 2024-07-10 09:00:00 UTC
tags: R rstats security
category:
link:
description:
social_image:
type: text
excerpt_separator: <!--more-->
---

# Upgrading R to at least version 4.4.0

Due to a security vulnerability, all users are advised to update their installation of R to version 4.4.0 or newer as soon as possible, and by the end of July 2024 at the latest.
<!--more-->

* [YoYo and Managed Desktop users](#yoyo-and-managed-desktop-users)
* [Unmanaged or Ronin users](#unmanaged-or-ronin-users)
* [University of Sheffield HPC users](#university-of-sheffield-hpc-users)
* [FAQs](#faqs)
* [General advice](#general-advice)

## Background

We want to bring to your attention the security risks associated with handling R data files (with the file extension .rds and .rdx).  While the University has not experienced any cyber security incidents as a result of this vulnerability, it is imperative to remain vigilant and informed about potential threats and act accordingly. 

A vulnerability ([CVE-2024-27322](https://hiddenlayer.com/research/r-bitrary-code-execution/)) has been identified in the R language that allows attackers to run any code they want without your permission when certain types of (maliciously-crafted) data files are loaded, which could potentially lead to unauthorised access, manipulation of systems or unauthorised exporting of data. This vulnerability affects RDS (R Data Serialization) format files and RDX (R database index) files. Attackers can exploit this by crafting malicious RDS or RDX files to execute arbitrary commands on the target device. The vulnerability arises from how R implements data loading, particularly through the readRDS function, used to load RDS and RDX files. Despite expectations that loaded files don't run code, this vulnerability allows for unauthorised code execution.


The most concerning aspects of this exploit have been fixed in R 4.4.0 (with 4.4.1 being the newest version at the time of writing) and we strongly recommend that all R users at the University of Sheffield upgrade their R version immediately. However, it is important to note that there will continue to be a risk when using RDS or RDX files from untrusted sources, regardless of whether you are using R >= 4.4.0. As always, members of the University of Sheffield should use their best judgement when running code from sources outside of the University.

## YoYo and Managed Desktop users

The upgrade to R >= 4.4.0 will happen automatically and you will not need to take any further action to update R itself. You will need to recreate your R package library for R >= 4.4.0 - reinstalling any R packages that you currently need/use.

## Unmanaged machine or Ronin users 

We recommend that you have a recent *backup* of your files before beginning the update.

1. Go to the [R project's website](https://cran.r-project.org/)
     * Choose the appropriate installer option from the list based on your machine.  ![Downloads on the R website](/assets/images/2024-06-05-faqs-for-upgrading-r/upgrading-r-rstudio-r-website-downloads.png)
1. Navigate to the precompiled package: 
    * For *Windows* machines: 
        * Choose _base_
        * Click _Download R 4.4.1 for Windows_.
        * Open the downloaded file and follow the installation instructions.
    * For *Mac* machines:
        * Choose the .pkg file that is appropriate for your macOS version and architecture.
        * Open the downloaded file and follow the installation instructions.
1. When the installer has completed, open R Studio. In the _Tools_ menu, select _Global Options..._   ![Tools menu in RStudio](/assets/images/2024-06-05-faqs-for-upgrading-r/upgrading-r-rstudio-tools-menu.png)
1. On the _General_ settings page, in the _R Sessions_ section,  view the file path under _R Version_ and click _Change..._
1. Choose R version 4.4.1 from the pop up file explorer. Click OK.   ![R version selection in RStudio](/assets/images/2024-06-05-faqs-for-upgrading-r/upgrading-r-rstudio-version-selection.png)
1. Restart RStudio when prompted.
1. (Re)install the R packages you use in your work (your R package library is specific to the version of R you're using) .
1. Test your workflows with R 4.4.1 
1. Delete your older version(s) of R. 
   1. To do this, open your file explorer and navigate to where your base R files are located. Use the file path from step 4 to guide you to the files if they are not obvious.  ![Picking old versions to delete](/assets/images/2024-06-05-faqs-for-upgrading-r/upgrading-r-rstudio-r-folder-deletion.png)
   1. Right click on the older version(s) and select _Delete_.  
1. When all the old versions have been deleted, the upgrade task is complete.

## University of Sheffield HPC users

The versions of R centrally installed on Stanage and Bessemer may be older than 4.4.0. Those installations have recently been updated to include a fix for the vulnerability.  

If you're using R via Conda on Bessemer or Stanage, see the *guidance for Conda* below.

## FAQs

### What are RDS and RDX data files for R (.rds, .rdx), and why are they used?

These are binary files used to store R objects such as data frames, lists, functions, and other R data structures. They are commonly used for saving and loading data within the R programming environment.

### Do I have to upgrade to R 4.4.0 or newer?

Upgrading to R >= 4.4.0 is mandatory as it addresses recent security vulnerabilities. It's important to remember that even with the latest version there is still a risk with untrusted RDS files.

### How long will it take to upgrade?

The time to upgrade to >= 4.4.0 can range from 2 minutes to 30 mins depending on the internet speed and other factors.

### How do I upgrade R versions when using Conda or Docker containers?

Upgrading R versions within Conda or Docker containers is typically straightforward due to their support for a drop-in replacement approach. However, certain considerations and best practices can streamline the process and mitigate potential complexities.

### Upgrading R in Conda environments

To upgrade R in your Conda environment, you can use the following command:

```sh
conda install -c conda-forge r-base>=4.4
```

Significant changes, such as a compiler or low-level library update, may necessitate updates to every package in the environment. In such cases, creating a new environment based on the same specifications might offer a simpler solution.

### Upgrading R in Docker containers

To upgrade R in a Docker container, ensure that the Docker image's R version meets your requirements. Typically, you specify the desired R version in the Dockerfile, ensuring compatibility with your application's dependencies.

```sh
Docker image r-base version >= 4.4
```

One potential issue arises if the older Conda environments rely on different compiler or library versions that are incompatible with the new R version or other dependencies within the environment. In such cases, addressing compatibility issues may require a solve-by-issue approach, where each problem is tackled individually. This could involve updating dependencies, modifying the environment configuration, or seeking alternative solutions depending on the specific challenges encountered.

### What if my workflow is dependent on an older version of R?

We advise you to start testing your workflow on the new version, documenting any warnings or errors that might arise. You can book a [Code Clinic](https://rse.shef.ac.uk/support/code-clinic/) with the Research Software Engineering (RSE) team, to discuss your specific workflow and concerns in detail and get hands-on assistance with debugging any errors or adapting your code to the new version.

### Can we always trust packages downloaded from CRAN?

While CRAN offers some security measures, using a package from CRAN isn't guaranteed to be entirely-risk free. Always use your best judgement. 

### What's new in R 4.4.0? 

Changes in R version 4.4.0 can be found in [R News Documentation](https://cran.r-project.org/bin/windows/base/NEWS.R-4.4.0.html). 

### What if I don't use R Studio as my default environment for R?

We recommend that you read the documentation for your operating system / chosen operating system package manager (if applicable). If you cannot find an appropriate method, then we recommend starting the update process by either uninstalling the older version of base R or (less preferable) manually deleting the base R files before downloading and installing version >= 4.4.0.  The FAQs linked to from [https://cloud.r-project.org/](https://cloud.r-project.org/) may also be useful.

## General advice

1. Use trusted sources
    * Use packages from a reputable source with a history of well-maintained packages. 
    * Use only serialised (`.Rds` / `.Rdx`) objects from trusted sources; be very wary of such files shared openly on the internet.
1. Regular updates
    * Keep your R environment and packages up-to-date with the latest security patches. 
1. Data minimisation
    * Store only the data essential for your analysis to reduce the risk of a data breach. If you have sensitive data, consider storing it separately in a secure location to minimise the data at risk. 
1. Version control
    * Implement version control strategies to track changes and manage your codebase effectively. 
1. Maintain test cases
    * Develop simple test cases that can be used to validate your code's results to make it easier and more reliable to upgrade between versions of R and other packages.

---
title: RSE Handbook (RSE Working Practice)
permalink: /collaboration/handbook/
slug: index
type: text
---

## What is this Handbook for?

Good software comes less from genius software engineers than from good practices, processes and relationships. The information here sets out what this means for projects involving the University of Sheffield RSE Team. Every project is different, and everyone we work with is different. Different approaches, values and levels of expertise. The purpose of this information is to articulate approaches that we know can be very successful and to inform our collaborators of how to get the best out of working with our team.

There’s no way we’ve got this right first time! This is a working document and we welcome feedback via any of our team members or to [rse@sheffield.ac.uk](mailto:rse@sheffield.ac.uk) where your message will be received by the RSE Team management.


## Before a project starts {#before-a-project-starts}


### Project management strategy {#project-management-strategy}

Once an RSE is allocated to your project the project PI will ultimately be responsible for how the RSE is deployed as a resource. As such it is essential that thought is given to a strategy for project management. Having a project management process will ensure that the RSE has agreed priorities for work, is able to meet agreed deadlines and can provide feedback to the project PI on progress. The project management approach may be to include the RSE in an existing process including postdocs or it could be to adopt a new process unique to the tasks the RSE is to undertake. There are different project management approaches but the RSE can help to define a process if you do not already have one. As a minimum you should think about and then agree on the items in the section [Kick off meetings](#kick-off-meetings).

The RSE team has a fairly standardised process for working on code which uses GitHub projects and issues and this can be incorporated into your project management approach early on if required (see section [During the Project](#during-the-project)).


### Instructions for delivery of necessary materials to initiate project {#instructions-for-delivery-of-necessary-materials-to-initiate-project}

Before work begins, it is likely that we will need to inspect existing materials. This may include code, example data, database schema etc.


### Code {#code}

The RSE team delivers code according to best practices using a collaborative version control system (preferably GitHub, but equivalent tools such as GitLab or Bitbucket can be used for established projects). At the outset of the project initial code can be provided on a secure shared resource like Google Drive however we would expect to migrate this to version control to make any changes. The RSE team can help you to do this. If you already use version control and have a private repository, you will need to add the allocated RSE as a collaborator.


### Data {#data}

Along with code, or for completely new software projects, it may also be necessary to provide data. Providing access to all data required by the project as soon as possible would ensure any software developed takes into consideration edge cases. Should your data be sensitive, ensure it is appropriately anonymised or that appropriate dummy data has been provided. A[ data management plan](https://www.sheffield.ac.uk/library/rdm/dmp) should be in place and is the responsibility of the project PI. The RSE team can assist you in completing one or advise on certain aspects.


### Sensitive materials {#sensitive-materials}

It may be that the work will require access to sensitive materials which will require an NDA being in place. Please ensure you consider whether this will be required and take steps as soon as possible to initiate the process so as to avoid delaying the beginning of the project at this stage. As employees of the University of Sheffield, RSE team members are often covered by existing NDAs or research agreements, which are typically between the whole organisation and an external one.


### Licensing {#licensing}

The RSE team recognises research software as a first class research output and is committed to obtaining maximum value from it via sharing. Options for licensing software should be considered at the earliest opportunity and the default position is that **code should be made available under a permissive open source licence** as it is developed (i.e. right now!), in keeping with the [University of Sheffield Statement on Open Research](https://www.sheffield.ac.uk/openresearch/university-statement-open-research).

Exceptions to this include:



* Restrictions on background IP (e.g. the project extends software which cannot be made open source).
* Legal agreements around project funding (e.g. NDAs, ownership of foreground IP is shared under a research agreement)
* Collaborators outside the University of Sheffield will not release copyright.
* The research team has contacted the research services commercialisation team and plans to commercialise the software in a manner that precludes open source licensing.
* The software contains confidential information.


### Sustainability plan - software/data maintenance plan {#sustainability-plan-software-data-maintenance-plan}

RSE effort on a project is for a fixed period of time, usually associated with specific research funding. For software to continue to do its job beyond this scope, ongoing maintenance will be required. Current research funding models do not usually acknowledge this. Bug fixes and updates in dependencies and operating systems, beyond the control of the project, are a key driver of the need for maintenance. As mitigation, prior to starting the project the following should be considered:



* Is the software required to operate after the end of this project?
* If so, who will maintain it? Will they need training within the scope of the project to enable them to do this?
* If so, does it require any infrastructure (e.g. web servers, databases)?
* Consider doing an online [Software Sustainability Review](https://www.software.ac.uk/resources/online-sustainability-evaluation). Not all of the criteria are universal. The project RSE will advise on appropriateness of specific criteria.

As part of your project design you should consider and plan for sustainability (see After the Project). Many research proposals benefit greatly from defining the plans for sustainability within the case for support. 


### Good Practice {#good-practice}

Whilst collaborating with researchers, the RSE team endeavours to follow good practice throughout with the objective of crafting a software project that is reproducible, sustainable and produces accountable results. Ultimately, following good practice in a research software project will result in a more impactful piece of software which outlasts the project itself.

In practice, this means using tools and techniques such as:



* Version control (almost always via `git`)
* Shared repositories
* Software testing
* Documentation (version controlled)

"Best practices" are not universally agreed upon in the software engineering community and will change over time. A thorough list of good practices for [free open source software](https://bestpractices.coreinfrastructure.org/en/criteria/0) has been produced, additionally ISO standards for quality assurance exist for [Systems and software engineering](https://committee.iso.org/sites/jtc1sc7/home/projects/flagship-standards/iso-25000-square-series.html). These can be quite daunting and a pragmatic approach must be adapted to balance compliance with project value.


### Kick off meetings {#kick-off-meetings}

Once a project is funded (congratulations!) and an RSE is allocated, at or before the beginning of the work, a kick-off meeting should be held with the PI, researchers and RSE(s) involved to make decisions on the priorities, scope and working methods as described here.

Notes should be taken in a document that everyone has access to, which can be referred to during the project. Use a team Google Drive or GitHub/GitLab repository for this.

Checklist for kick-off meetings:



1.  Meeting cadence
2.  Personnel, their roles and fractional allocation/working times
3.  Primary contact for setting development priorities
4.  Agree access and technologies to work with code & data 
5.  Issue tracking and communication
6.  Where project information will be kept (e.g. GitHub, Google Drive)
7.  Project scope, duration, priorities, milestones
8.  Deliverables
9.  Maintenance
10.  Handover


## During the project {#during-the-project}


### Use of Version control {#use-of-version-control}

All software  by RSEs will be managed as a repository using version control software, most likely `git`. This represents fundamental software engineering best practice and ensures the evolution of the project is captured and allows for navigation through the history of project development which will always be available, even after handover. Any non software activities should utilise tools and storage agreed as part of the kick off meeting.

All our projects will also be shared online via online repository hosting sites (e.g GitHub). This method provides a number of features that aid development, access to materials, collaboration and project management and communication:



* Code is version controlled and saved on redundant storage
* Code is easily accessible by collaborators
* Facilitates collaboration through formal management of contributions.
* Continuous Integration testing improves robustness of contributions
* Provides user friendly task management functionality.
* Communication, planning and task management remains associated with the project.

Repositories hosted online can be made private where necessary. In rare circumstances where the work involves materials that cannot be shared online at all, we will discuss with you and develop more secure custom arrangements.


### Communication {#communication}

It is important to manage communication between stakeholders and RSEs in a software project and as a team we have developed a set of recommendations over the course of many projects for getting the most out of collaborating together.

These concepts are intended as guidance and each individual project may require its own tweaks to this framework.

PIs, Researchers and RSEs should agree on a communication strategy for the project.

As a starting point, we recommend:



* Regular (but not too regular) focused meetings to prioritise work to be carried out.
* Agreeing on an instant messaging platform for quick discussions, e.g. Google Chat, Slack or Skype - this is particularly useful in our current remote/hybrid working model.
* Use of issues and pull requests, described in more detail below.

We encourage the use of instant messaging (for quick discussions) or slack for throwaway conversation. As a general rule we suggest that you should not expect or require anyone to read messages on an instant messaging service (e.g slack, google chat, etc) unless they are specifically tagged (either individually or via a channel). We also need decisions to always be recorded. Notes or decision making around particular development tasks should always be recorded in an agreed location (e.g. GitHub Issues, or a Google Drive folder) rather than via email history.


### Issues and Project Boards {#issues-and-project-boards}

GitHub and GitLab, alongside acting as an online hosting platform for code, also provide a useful set of project management tools. Other cloud based tools such as Jira also provide project management but without close coupling to Issues.

Each task on the project should be described in an 'issue'. Each issue can be assigned a team member, associated with a project milestone and also acts as a discussion thread to communicate over the specifics.

Issues don't only have to be used for code, but can be used to track all tasks in a project.

Code-related issues can also be associated with pull requests (see below) so that when code is implemented to address an issue, the issue can be automatically closed.

Project boards (GitHub, known as issue boards on GitLab) are a useful and efficient way to track the progress of tasks within a project and to prioritise work.

We encourage PIs to engage with the project board during a project, particularly during regular meetings as a way of seeing the progress of the project in one place as well as prioritising tasks.

Issues can be added to the project board as well as task cards (which do not relate to an issue).


### Contributing to Coding {#contributing-to-coding}

A set of [contribution guidelines](https://mozillascience.github.io/working-open-workshop/contributing/) should be agreed and held either in the repository or in the project Google Drive.

When code is contributed to a project, it should be committed to the project repository via a git workflow that is agreed by everyone. E.g. It could be committed to its own branch (or fork) and a pull request made against another branch (often `main`, `master` or `dev`).

If you are unfamiliar with the use of version control and collaborative platforms such as GitHub and GitLab and will be contributing code to the project, the RSE(s) collaborating with you will be happy to provide guidance.

Pull requests are a useful tool for discussion of code changes and draft pull requests are often the most efficient place for team members to decide on how best to address an issue.

Team members should agree on a particular process for merging pull requests. Ideally pull requests should use reviewing. However, due to the flexible nature of research software in most cases, it is advisable to merge code even if it is not perfect, as long as it doesn't break an existing feature. This keeps the project from stagnating and improvements can be made later on.

It is advisable to implement testing to ensure that existing features are not broken in development. This can be automated via a continuous integration pipeline which will ensure that code being added to the principal branch functions correctly.


### Recognising the contribution of your RSE

An RSE is a collaborator within the research process and should be recognised as such. If an RSE has made a contribution to work underpinning a research paper you should consider naming them as a co-author and highlighting what their contribution has been according to the journal's guidance. If the contribution of the RSE is less significant then you should provide an acknowledgement in the acknowledgements section of the paper if it has one.

Outside of research outputs, if an RSE has made an exceptional contribution to your work then please feed this back to the RSE management team ([rse@sheffield.ac.uk](mailto:rse@sheffield.ac.uk)). You can also consider making a recommendation for a recognition award via [The Deal](https://staff.sheffield.ac.uk/reward-recognition) which is a nice way to recognise any staff contribution.


## After the project (sustainability) {#after-the-project-sustainability}


### Handover {#handover}

Outputs are specific to projects and vary greatly by programming language, but have some core themes. The RSE team aspires to produce software that can be further developed with minimal or no input from the original engineer. To facilitate this we prioritise including the following in our repositories:



* Developer and user documentation: How to build / run the software, how it is organised, what conventions have been used, what developer tools are needed e.g. to run tests.
* Execution environment and dependencies: What operating systems will the software run on, is what other software / libraries / modules are needed, what versions, how the execution environment is described. E.g. through containerisation.
* Appropriate automated tests: Uunit, regression, integration.

We aim to empower the project team to be able to maintain and modify the software by sharing skills and explaining these throughout the project, or at a final handover meeting.


### FAIR Open Access {#fair-open-access}

We strongly prefer outputs that are FAIR open access. [FAIR](https://www.go-fair.org/fair-principles/) means that a research output is **Findable**, **Accessible**, **Interoperable** and **Reusable**. This was initially conceived for data but is in the process of being adapted to research software ([FAIR4RS](https://www.rd-alliance.org/groups/fair-research-software-fair4rs-wg)).

Making code available via a collaborative version control site such as GitHub is a fantastic step towards realising this. However, additionally pushing software releases to ORDA (preferred for University of Sheffield researchers) or Zenodo confers some important additional benefits:



* Guaranteed long-term archiving
* DOIs for direct citation of software releases (*software releases in this context are snapshots of the source code, and possibly also "builds" or executable files*). A means of [automatically pushing software releases to ORDA](https://github.com/RSE-Sheffield/release_to_ORDA) is being developed.
* Tagging releases with metadata to aid findability

FAIR outputs can lead to more citations and more transparent, trustworthy, research (see [SSI benefits reference list](https://github.com/softwaresaved/useful-references/blob/master/benefits.bib)).


### Ongoing software maintenance {#ongoing-software-maintenance}

Software maintenance is poorly supported by research funding which is generally for a fixed term. The lifecycle of software and infrastructure/services may very well be expected to run beyond the end of the research project. With respect to software maintenance the use of software best practice plays a vital role in ensuring that your software is maintainable. As part of the development activity on your project you should expect your RSE to leave the code in a state where a future developer is able to contribute in future funding rounds or when maintenance is required. Generally the team tries to work under the assumption that at any period they may need to drop a coding project and it should be possible for another developer to pick up where they left off. This is important for reducing the so-called bus factor of a project and we will work with you to ensure that aspects such as documentation, tests, contribution guidelines and up to date issues are in place. If your code is open source (which we encourage) then ensuring the code has contribution guidelines gives your software the possibility of broader maintenance and feature contributions from the open source community.

As a team we do not take on specific maintenance contracts but if your code has been developed with us or following our guidance we may be able to undertake short pieces of work on code  (subject to staff availability). 


### Infrastructure and Service Maintenance  {#infrastructure-and-service-maintenance}

Similarly to software development the deployment of infrastructure and services (usually web services or cloud infrastructure) are difficult to support beyond the end of a project's funding cycle. We encourage you to consider these factors when proposing your research proposal and plan for how maintenance will be undertaken. All software and services have a lifecycle and it is not feasible to expect them to live persistently forever without an investment in their maintenance. Generally if the development of services or infrastructure is required as an RSE task on a project then we will put in place processes and documentation to ensure you or your researchers are able to perform basic maintenance after our time on a project has finished. It will then be your responsibility to maintain it. Performing updates to dependencies on web services is not something which the team has capacity to undertake. The exception to this is that where we have deployed particular pieces of infrastructure we will engage with IT services to encourage them to run hosted services where there is common demand. This greatly simplifies the maintenance of particular workflows.


### Additional Resources {#additional-resources}


* [UCL RSE Ways of Working](https://www.ucl.ac.uk/advanced-research-computing/services/research-software-development/ways-working)
* Turing Way [contributing.md](https://github.com/alan-turing-institute/the-turing-way/blob/main/CONTRIBUTING.md)
* [The RSE Toolkit](https://rsetoolkit.github.io/) (Work in progress)

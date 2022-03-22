---
title: Tier 2 Embedded Support
permalink: /collaboration/tier2/
slug: index
type: text
---

# Open Call: Funding for Embedded support for High Performance Computing and Machine Learning


## Context

High performance computing (HPC) is the processing of data and performing of computing calculations at high speeds. When surveyed (as part of the Sheffield Research Software survey 2020), roughly a quarter of researchers from all faculties at Sheffield expressed an interest in using HPC in the future. It may not be as difficult as you would think to do so! The barrier to entry for using specialist HPC facilities such as Graphics Processing Units (GPUs) has been significantly lowered by the emergence of software to facilitate Machine Learning (ML) and AI. The purpose of this open call is to provide funding to support skilled Research Software Engineers (RSEs) to assist researchers in migrating their research workflows to suitable HPC systems. RSE support will be provided from the [Sheffield RSE group](https://rse.shef.ac.uk/). The RSE group is a team of 12 who provide collaborative embedded support for research across the whole of the university.

Aside from the universities own HPC systems. The University of Sheffield is a partner organisation in two EPSRC Tier 2 HPC facilities; [JADE II](https://docs.hpc.shef.ac.uk/en/latest/other-uk-hpc-resources/jade2.html) and [Bede](https://docs.hpc.shef.ac.uk/en/latest/other-uk-hpc-resources/bede.html). As such we have a percentage share of the system available for University of Sheffield research. Both systems are large GPU compute clusters which have been designed to perform large scale computations in a broad range of domains. JADE II is specifically designed to support Machine Learning and Bede to support more general GPU computation spanning multiple compute nodes. All members of the university can access these facilities free of charge even if their work falls outside of EPSRCs domain.

This call will specifically aim to enable researchers to use the Tier 2 HPC systems by providing funding for embedded support within research teams or with individual researchers. Embedded support will be provided by the Research Software Engineering group, a team of ~13 software engineering experts who work collaboratively across the entire university supporting [~40 active projects](https://rse.shef.ac.uk/collaboration/projects/) worth over £12M to the university. The call is keen to support researchers from a diverse research background, particularly those who are not traditional HPC users.

There are a number themes which are support in this call; 


* **Support for scaling up of Machine Learning/AI workflows**: Assisting researchers to migrate workflows for ML/AI running on their laptops/desktops to running on the Tier 2 facilities. This level of collaborative support is ideal for those unfamiliar with HPC requiring a low barrier method of achieving higher computational performance.
* **Research Software Engineering Consultancy**: Collaborative support to work with you on your research software to provide a mechanism to embed parallel libraries/APIs or to directly accelerate your code's performance and allow it to utilise the HPC systems effectively. This may include first steps into parallelisation through to application profiling and optimisation or configuration of software and libraries within a HPC environment, This level of collaborative support is ideal for research developers who are looking to improve the performance of their research code and target GPUs.
* **Machine Learning/AI Consultancy**: AI Problems can vary and include image, time series data, text, speech and any other structured data. We can help you to decide on what methods are the most feasible for applying to your research.  This level of collaborative support is ideal for novice users of ML/AI but who have interesting datasets and a desire to learn more about ML/AI methods by working with us to create a proof of concept.
* **Lowering the barrier of entry for HPC Usage**: Support to create mechanisms which lower the barriers to entry for you or your research team in using the HPC systems. This may include things like configuring interactive notebooks to allow you to use the facilities with a minimal change to your existing research practice.

Each of these activities is underpinned by the RSE groups ethos in good quality software engineering practice and reproducible research. 


## Example Case Study

**Project Title**: Migrating Lung Segmentation

**Application Theme**: Support for scaling up of Machine Learning/AI workflows

**Project Details**: We worked with Bilal Tahir’s group to migrate a lung segmentation workflow to JADE. The work required the use of Niftynet a Tensor Flow based open source platform for research in medical image analysis and image-guided therapy. Niftynet uses convolutional neural networks (CNNs) and was therefore good fit to GPU acceleration on JADE. The Niftynet software was not able to be installed on JADE using a conventional approach as the installation process requires an outgoing internet connection which is unavailable with JADE for security reasons. The RSE on this project helped create a singularity container (a form of software execution environment) which packages Niftynet and all required software for use on the JADE cluster. The end result was that sears within the team could run large scale medical image analysis workflows without having complex software installations to navigate.


## Eligibility and What is on Offer

This call is open to all research staff but with some conditions imposed by the Tier 2 facilities. Postdocs must have at least one year left on their contract (else should apply via their PI). Doctoral research students must have support from their supervisor.

This call is specifically to facilitate uptake in the use of the Tier 2 resources. Collaborative support for use of the University HPC resources (e.g. Bessemer, ShARC) is within remit providing there is an ambition to later migrate workflows to the Tier 2 systems.

This call will fund upto £5,000 of embedded RSE time which is roughly 12 days of RSE support. There is no cash alternative available. Funding must be spent on embedded RSE time. As part of the review of your application a suitable member of the RSE team will be allocated to your project so you do not have to identify a particular team member. 

Applications should not be submitted for short pieces of consultancy work which can be completed in less than a day. Instead such requests should be submitted to the [Code Clinic](https://rse.shef.ac.uk/support/code-clinic/), a free consultancy service run by the RSE and Research IT teams. Alternatively for support requests you can raise a [ticket via ITS](https://shef.topdesk.net/solutions/forms/eeb223ec-fd1a-4436-b3fb-3c8414f9903b?token=5b2cdc96-fa45-48b7-b756-58c68884ebd2). Requests for embedded support beyond the 12 day limit will also not be considered. You should however discuss with the RSE team management about how to support your research [through grant funding](https://rse.shef.ac.uk/collaboration/) if a larger investment of specialist staff time is required.

If you are unsure about eligibility of scope then please contact [rse@sheffield.ac.uk](mailto:rse@sheffield.ac.uk) or book a code clinic session to discuss your project ideas.


## How Your Application will be Assessed

Your application will be assessed on the following criteria;


* **Suitability of your application to make effective use of one of the Tier 2 systems (50%)**. This will include the potential for your research work to utilise the GPU equipment effectively. You do not have to identify which system you would like to target only which theme you are applying for. Criteria will be assessed by considering the software or data which you are using as part of your research.
* **Impact of the project on research work (25%)**. This is not a measure of the research quality but an assessment of the impact in which the embedded support will advance the research work. You should clarify how the activities of this project will advance your research.
* **Availability of resources and future ambitions (25%)**. You must identify researchers or members of your research team to work with the RSE over a period of time. It is vital that this activity is undertaken as a collaboration in order to get the maximum value from the embedded staff member. This criteria will also consider the current (and proposed) availability of software and data as well as availability of RSE team members to undertake the work.


## Application Process

You should apply via the provided expression of interest google form below. This is an open call but applications will be reviewed in batches every 6 months. **The closing date for the next (first) round of reviews is Friday 22/04/2022 at 17:00**. Applications received after this date will be reviewed in the next round of applications. Dates for future rounds will be announced on this page.

[Application Form](https://docs.google.com/forms/d/e/1FAIpQLScsp1T57ohGnCA91D7KoKJPPtGiuVTY52u8S3q21I9VLLsH0Q/viewform) 

On receiving a completed application form we will contact you to arrange a short (less than 30 minutes) online consultation to gather any additional technical information required to understand your project. The application form is purposefully short to ensure that we can discuss your requirements rather than expect you to provide all of these in the written application. 

After review the projects will be ranked and estimates given as to when RSE time can be allocated. At the conclusion of your project a brief post-project report will be required.
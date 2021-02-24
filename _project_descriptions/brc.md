---
key: brc
---

The [NIHR][nihr]-funded [Sheffield Biomedical Research Centre](brc) (BRC)
is a research partnership between the University of Sheffield and [Sheffield Teaching Hospitals][sth] (STH) NHS Foundation Trust,
dedicated to improving the treatment and care of people living with chronic neurological disorders.

It is an umbrella project for a number of clinical studies and brings together:

  - Academics Researchers in the [INSIGNEO][insigneo] institute for In-Silico Medicine
  - Clinicians at STH, who might also be members of INSIGNEO
  - Project officers/administrators at STH
  - The Scientific Computing team at STH
  - This RSE team

RSE time has been costed for the duration of the BRC project (at 50% FTE),
with the main study we're involved with being [MoStrAct][mostract].
MoStrAct aims to explore whether data from movement sensors such as gait monitors can
provide biomarkers for changes in neurological conditions,
with additional sources of information such as standard clinical tests and MRI imaging data
being used to provide independent information on changes.

MoStrAct has been very much a collaboration, with the parties listed above all contributing to the experimental protocol and ethics application along with the subsequent workflows/pipelines.
The RSE team worked with the STH Scientific Computing team to advise on information governance and to set up systems for

  - Capturing and validating pseudonymised non-imaging clinical data (via a [REDCap][redcap] database instance) and making it available to INSIGNEO researchers
  - Receiving MRI imaging data from STH MRI scanners via a STH imaging database (using a [XNAT][xnat] database instance) and making it available to INSIGNEO researchers
  - Storing study-specific gait sensor data.

Other RSE contributions to the project include:

  - Defining and documenting data dictionaries (schemas)
  - Developing and supporting the development of software tooling for processing and visualising gait data (using MATLAB and R)
  - Providing training to researchers on tools and methods that should
    make the computational aspects of the workflows more robust and reproducible
    (such as training in software version control using Git and GitHub).


[brc]: http://sheffieldbrc.nihr.ac.uk/
[insigneo]: https://insigneo.org/
[mostract]: https://www.hra.nhs.uk/planning-and-improving-research/application-summaries/research-summaries/mostract/
[nihr]: https://www.nihr.ac.uk/
[redcap]: https://www.project-redcap.org/
[sth]: https://www.sth.nhs.uk/
[xnat]: https://www.xnat.org/

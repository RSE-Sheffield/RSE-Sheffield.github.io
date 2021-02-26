---
key: primage
---

[PRIMAGE](https://www.primageproject.eu/) (PRedictive In-silico Multiscan Analytics to support cancer personalised diaGnosis and prognosis, Empowered by imaging biomarkers) is an EU Horizon 2020 funded collaboration between 16 partners to develop an open cloud-based platform to support decision making int he clinical management of two paediatric cancers, Neuroblastoma (NB), the most frequent solid cancer of early childhood, and the Diffuse Intrinsic Pontine Glioma (DIPG) the leading cause of brain tumour-related death in children.

The Sheffield RSE team has been working closely with [Insigneo's](https://insigneo.org/) team on the project to develop a highly scalable CUDA GPU parallel cell-level model of a Neuroblastoma tumour. Parallel development has been used, whereby an RA with understanding of the biological processes has developed a model using their language of choice (Python), each incremental change to the model has then been transfered to a separate CUDA implementation of the model using the agent-based modelling framework [FLAMEGPU](http://www.flamegpu.com/) and validated for consistent behaviour with the original implementation.

The separation of concerns has allowed the modeller to focus on the correctness of their model rather than performance, whilst the RSE-developed CUDA model has made it practical to model tumours 1,000+ times larger, enabling much faster access to model calibration and parameter sweep results. Furthermore, the Sheffield RSE team has handled much of the discussion with the project's international members with regards to the integration of the model into the overarching platform.

RSE involvement in this project has also supported development of [FLAMEGPU2](https://github.com/FLAMEGPU/FLAMEGPU2_dev), which aims to provide a more-accessible (Python and C++) interface to highly-scalable CUDA GPU parallel modelling of complex systems.
---
key: primage
---

[PRIMAGE](https://www.primageproject.eu/) (PRedictive In-silico Multiscan Analytics to support cancer personalised diaGnosis and prognises, Empowered by imaging biomarkers) is an EU financed collaboration between 16 partners to develop an open cloud-based platform to support decision making int he clinical management of two paediatric cancers, Neuroblastoma (NB), the most frequent solid cancer of early childhood, and the Diffuse Intrinsic Pontine Glioma (DIPG) the leading cause of brain tumour-related death in children.

RSEs have been working closely with the Sheffield team on the project to develop a highly scalable CUDA GPU parallel cell-level model of a Neuroblastoma tumour. Parallel development has been used, whereby an RA with understanding of the biological processes has developed a model using their language of choice (Python), each incremental change to the model has then been transfered to a separate CUDA implementation of the model using [FLAMEGPU](http://www.flamegpu.com/) and validated for consistent behaviour with the original implementation.

The separation of concerns, has allowed the modeller to focus on the correctness of their model rather than performance. Whilst the RSE developed CUDA model has made it practical to model tumours 10,000+ times larger, enabling much faster access to model calibration and parameter sweep results.

The partnership has also allowed technical concerns regarding integration of the Sheffield model with the wider consortium's models to be offloaded to the RSE team.

RSE involvement in this project has also supported development of [FLAMEGPU2](https://github.com/FLAMEGPU/FLAMEGPU2), which aims to provide a more-accessible (Python and C++) interface to highly-scalable CUDA GPU parallel modelling of complex systems.
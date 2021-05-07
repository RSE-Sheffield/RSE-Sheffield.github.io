---
key: flamegpu2
---

[FLAME GPU 2](https://flamegpu.com/) (Flexible Large Scale Agent Modelling Environment for GPUs) is a framework for developing highly parallel complex system simulations, allowing modellers to write their models using C++ or Python without an explicit understanding of CUDA or GPU optimisation strategies. Version 2 follows on from the original FLAME GPU developed by Dr Paul Richmond, and has been rewritten from the ground up to provide greater flexibility and replaces the template driven architecture with modern C++ and Python APIs. The software currently underpins exciting research into crowd modelling under social distancing, simulation of tumour growth in cancer research, and modelling of the immune system.

FLAME GPU 2 adds a range of new features which ensure performant model simulation. E.g.

* **Support for Big GPUs** - Support for concurrent execution of agents functions which ensures that heterogenous models do not necessarily result in poor device utilisation.
* **Model Ensembles** - The ability to run ensembles of models. I.e. the same model with different parameters or random seeds. This is necessary within stochastic simulation and FLAME GPU allows the specification of ensembles to occupy multiple devices on a single computing node.
* **Sub models** - Certain behaviours in FLAME GPU require iterative processes to ensure reproducibility with serial counterparts (e.g. conflict resolution for resources). FLAME GPU 2 allows re-usable sub models to be described for such behaviours so that it can be abstracted from the rest of the model function.

Development and maintenance of FLAME GPU 2 has and continues to be supported by other projects taken on by the team which use FLAME GPU and/or FLAME GPU 2, and an ESPRC fellowship granted to Dr Paul Richmond.

This talk from GTC 2021 by Dr Paul Richmond provides a thorough introduction to FLAME GPU 2:

<iframe width="1068" height="600" src="https://www.youtube.com/embed/NRRW6EDClYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


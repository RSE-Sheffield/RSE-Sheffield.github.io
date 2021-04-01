---
category: lunchbytes
date: 2021-04-01
published: True
from: "14:00"
to: "15:00"
location: "Google Meet"
speaker: "Freddie Witherden, James Knight, Tom Deakin; Host: Matthew Leach (RSE Sheffield)"
institute:
title: "Lunch bytes #5: Making GPU Programming More Portable"
image:
slides_url:
---

GPU computing offers great benefits to simulation performance, but can certainly be intimidating to get to grips with! Join us for a set of short talks describing projects in which the GPU programming aspect has been made more portable in some way, whether through alternative language bindings, or cross-platform portability.

Each talk will be ~10 minutes, leaving roughly 20 minutes for discussion/questions.

This session will take place on [Google Meet](https://meet.google.com/sqk-bdmi-tjq) and participants can join 15 mins before the start of the session.

We also have a [Google Jam Board](https://jamboard.google.com/d/1Z6kZfJIabiWX31KgtEl6yoCo1Tlb4cRXgxUuFyqozEM/edit?usp=sharing) where you can note down any questions or comments before or during the event.

The slides for each talk will be made available after the event.

## Talk 1: PyFR: Facilitating Heterogeneous GPU Computing from a Homogeneous Codebase

*Freddie Witherden, Assistant Professor at Texas A&M University, developer of PyFR, a CUDA accelerated python CFD library*


## Talk 2: GPU acceleration of Spiking Neural Networks - James Knight

*James Knight, Research Fellow in Computer Science at The University of Sussex, developer of PyNN/GeNN, a GPU enhanced Neuronal Network simulation environment*

Large-scale numerical simulations of brain circuit models are important for identifying hypotheses on brain functions and testing their consistency and plausibility. Similarly, spiking neural networks are also gaining traction in machine learning with the promise that neuromorphic hardware will eventually make them much more energy efficient than classical ANNs. In this session, I will present the GeNN (GPU-enhanced Neuronal Networks) framework, which uses GPUs to accelerate computational models of large-scale spiking neuronal networks. GeNN is an open source library that generates code to accelerate the execution of network simulations on NVIDIA GPUs through a flexible and extensible interface, which does not require in-depth technical knowledge from the users.

## Talk 3: Portable performance on CPUs and GPUs without resorting to [redacted] - Tom Deakin

*Tom Deakin, Senior Research Associate at Bristol University, researcher in understanding performance portability of massively parallel simulation codes*

The range of computer architectures used in supercomputers today is growing in diversity, and we need to obtain high-performance on CPUs and GPUs from a variety of vendors. This talk highlights ongoing research into performance portability and will discuss different parallel programming models that, with some work, are showing it is possible to write codes that achieve good performance everywhere.

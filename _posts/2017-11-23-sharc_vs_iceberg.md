---
title: Iceberg vs ShARC
author: Mike Croucher
slug: iceberg-vs-sharc
date: 2017-11-23 13:04:27 UTC
tags:
category:
link:
description:
type: text
---

<br>

**TL;DR Around 100 of Iceberg's nodes are ancient and weaker than a decent laptop. You may get better performance by switching to ShARC.  You'll get even better performance by investing in the [RSE project on ShARC](/community/resources-and-equipment/).**

## Benchmarking different nodes on our HPC systems

I have been benchmarking various nodes on Iceberg and ShARC using Matrix-Matrix multiplication.
This operation is highly parallel and optimised these days and is also a vital operation in many scientific workflows.

The benchmark units are GigaFlops (Billion operations per second) and **higher is better**
Here are the results for maximum matrix sizes of 10000 by 10000, sorted worst to best

* [119 GigaFlops](https://github.com/mikecroucher/Jupyter-Matrix-Matrix/blob/master/results/Sheffield_iceberg_12cores.ipynb) - Old Iceberg 'Westmere' Nodes (12 core X5650 CPUs )
* [169 Gigaflops](https://github.com/mikecroucher/Jupyter-Matrix-Matrix/blob/master/results/MacBookPro2014.ipynb) - My 4 core Mid-2014 MacBook Pro
* [333 Gigaflops](https://github.com/mikecroucher/Jupyter-Matrix-Matrix/blob/master/results/Sheffield_iceberg_16cores.ipynb) - New Iceberg 'Ivy Bridge' Nodes (16 core )
* [458 Gigaflops](https://github.com/mikecroucher/Jupyter-Matrix-Matrix/blob/master/results/Sheffield_sharc_16cores.ipynb) - Standard ShARC node (16 cores)
* [802 Gigaflops](https://github.com/mikecroucher/Jupyter-Matrix-Matrix/blob/master/results/Sheffield_sharc_32cores.ipynb) - 32 core ShARC node (only available to [RSE queue contributors](/community/resources-and-equipment/))

According to the [Iceberg cluster specs](https://docs.hpc.shef.ac.uk/en/latest/iceberg/cluster_specs.html), over half of Iceberg is made up of the old 'Westmere' nodes.  According to these benchmarks, these are almost **4 times slower** than a standard node on ShARC.

## The RSE project - the fastest nodes available

We in the RSE group have co-invested with our collaborators in additional hardware on ShARC to form a 'Premium queue'.  This hardware includes large memory nodes (**768 Gigabytes per node** - 12 times the amount that's normally available), Advanced GPUs ([A DGX-1 server](https://www.nvidia.com/en-us/data-center/dgx-1/)) and 'dense-core' nodes with 32 CPUs each.

These 32 core nodes are capable of [over 800 Gigaflops](https://github.com/mikecroucher/Jupyter-Matrix-Matrix/blob/master/results/Sheffield_sharc_32cores.ipynb) and so are 6.7 times faster than the old Iceberg nodes.  Furthermore, since they are only available to contributors, the queues will be shorter too!

Details of how to participate in the RSE-queue experiment on ShARC can be [found on our website](/community/resources-and-equipment/)

## What if ShARC is slower than Iceberg?

These benchmarks give reproducible evidence that ShARC can be significantly faster than Iceberg when well-optimised code is used.  We have heard some unconfirmed reports that code run on ShARC can be slower than code run on Iceberg.  If this is the case for you, please [get in touch with us](/contact/) and give details.

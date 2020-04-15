--- 
title: Dept of Computer Science invests in GPUs for new HPC cluster
author: Will Furnass
slug: dcs-gpus-for-bessemer
date: 2019-07-17 10:09:00 UTC+01:00
tags: 
category: 
link: 
description: 
type: text
---

Here in the [Dept of Computer Science][dcs] (DCS) at the University of Sheffield
the need for access to high-performance GPU hardware has increased considerably in the last couple of years. 
Within the dept uses currently include 
machine/deep learning and 
agent-based modelling (e.g. using FLAME GPU).

One way of getting access to GPUs is via the University's [ShARC][sharc] HPC system, 
which contains several GPU-equipped nodes including an [NVIDIA DGX-1 node with 8x NVIDIA P100 GPUs][dgx1]^. 
This DGX-1 is currently only accessible to DCS researchers and collaborators. 

The DGX-1 has proved fairly popular, 
so DCS has decided to invest heavily in GPUs for the University's next HPC system, [Bessemer][bessemer], 
which will run concurrently with ShARC for the next few years. 
DCS has purchased eight GPU nodes for Bessemer that again will be available for use by all DCS researchers and academics plus collaborators.
The specification *per node* is:

* Processors: 2x Intel Xeon Gold 6138 (2.0 GHz, 20 physical cores per socket, 27 MB L3 Cache);
* RAM: 192 GB (DDR4-2666);
* GPUs: 4x NVIDIA Tesla V100 (16 GB RAM), with high-bandwidth, low-latency [NVLink][nvlink] interconnects;
* Network: 25Gbps Ethernet.

That's 32 NVIDIA V100 GPUs in total! 
These V100 devices have several advantages over the P100 cards available in the DGX-1. 
Firstly, the V100 devices have a number of [tensor cores][tensor-cores], 
which multiply two half-precision 4x4 matrices then 
add a half or full precision matrix to the result. 
Tensor cores can expedite neural network training.

Secondly, the V100 devices offer more performance in several ways:


| Model                       | V100 (NVLink) | P100 (NVLink) |
|-----------------------------|---------------|---------------|
| CUDA cores                  | 5120          | 3584          |
| Memory bandwidth            | 900 GB/sec    | 720 GB/sec    |
| Half Precision perf         | 30 TFLOPS     | 21.2 TFLOPS   |
| Single Precision perf       | 15 TFLOPS     | 10.6 TFLOPS   |
| Double Precision perf       | 7.5 TFLOPS    | 5.3 TFLOPS    |
| Tensor perf (Deep Learning) | 120 TFLOPS    | N/A           |
| NVLink bandwidth            | 300 GB/s      | 160 GB/s      |
{:.table.table-bordered.table-striped.table-hovered}

One major difference between Bessemer and ShARC is that 
Bessemer is to be the first University of Sheffield HPC system to run the [SLURM][slurm] job/resource manager rather than Sun Grid Engine aka SGE (or a variant thereof).
SLURM has native support for GPUs, which is [much improved as of this year's 19.05 release (PDF)][slurm-19-05].  
The main benefits to users will be:

* much stronger isolation of GPU resources per job, 
* the ability to request multiple CPU cores per requested GPU device and 
* a means for tracking GPU utilisation per job.

**Expect to hear much more about Bessemer in the next month or two!**

I should also mention that DCS has more dedicated hardware in ShARC other than the DGX-1: 
there are [12 CPU-only nodes with high core counts and/or large amounts of RAM][dcs-cpu-nodes] (<= 768 GB).

---

^ Only seven are usable at present as there is a memory fault with one device.

[bessemer]: https://sites.google.com/a/sheffield.ac.uk/rcg/my-blog/introducingsharc2-bessemer
[dcs-cpu-nodes]: https://docs.hpc.shef.ac.uk/en/latest/sharc/groupnodes/
[dcs]: https://www.sheffield.ac.uk/dcs
[dgx1]: https://docs.hpc.shef.ac.uk/en/latest/sharc/groupnodes/dgx-1.html     
[nvlink]: https://www.nvidia.com/en-gb/data-center/nvlink/
[sharc]: https://docs.hpc.shef.ac.uk/en/latest/sharc/index.html
[slurm-19-05]: http://on-demand.gputechconf.com/gtcdc/2018/pdf/dc8214-slurm-workload-management-for-gpu-systems-presented-by-schedmd-llc.pdf
[slurm]: https://slurm.schedmd.com/overview.html
[tensor-cores]: https://www.nvidia.com/en-gb/data-center/tensorcore/

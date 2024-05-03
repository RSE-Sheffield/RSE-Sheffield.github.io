---
layout: post
title: "Bede Tier 2 HPC: Nvidia Grace-Hopper Superchip Pilot"
author: Peter Heywood
slug: 2024-05-06-bede-tier-2-hpc-nvidia-grace-hopper-superchip
date: 2024-05-06 12:00:00 UTC
tags: Bede Grace-Hopper GH200 GPU benchmarking PyTorch
category:
link:
description:
social_image:
type: text
excerpt_separator: <!--more-->
---

## GH200 GPUs now available in N8 CIR Bede

Members of the University of Sheffield have access to a range of GPU resources for carrying out their research, available in local (Tier 3) and affiliated regional (Tier 2) HPC systems.

**As of March 2024, the [N8 CIR Bede Tier 2 HPC facility][bede] now includes an [Open Pilot of 3 NVIDIA GH200 Nodes][bede-gh200-pilot-docs] which are available to all users**.

Each GH200 node in Bede contains a single [NVIDIA GH200 Grace Hopper Superchip][nvidia-gh200-superchip] - a 72 core NVIDIA Grace ARM CPU connected to a single [NVIDIA Hopper GPU][nvidia-h100-architecture] via a 900GB/s [NVIDIA NVLink-C2C][nvidia-nvlink-c2c] interconnect.
This new interconnect allows data to be moved between the host and device with a much higher bandwidth than in traditional PCI-e based systems, reducing the time spent transferring data.

<!--more-->

The following figure shows the theoretical peak bandwidth for the range of GPU interconnect technologies used in a range of GPUs.

![Figure 1: GPU host-device interconnect theoretical peak bandwidth](/assets/images/2024-05-06-bede-tier-2-hpc-nvidia-grace-hopper-superchip/gpu-interconnects-tuos.png)
Source: [github.com/ptheywood/gpu-interconnect-plots][ptheywood/gpu-interconnect-plots]

### PyTorch LLM Fine-tuning Benchmark

To illustrate the performance of the GH200 GPUs for machine learning workloads, a benchmark of LLM fine-tuning previously used by [Farhad Allian][farhad-github] to [investigate the performance of NVIDIA L40 GPUs for machine learning][l40-pytorch-benchmark-blog] benchmarked on the [GH200 GPUs in Bede][bede-gh200-pilot-docs].

The benchmark uses the [HuggingFace Transformers][huggingface-transfomers] [`run_clm.py`][huggingface-transformers-runclm] example to train and evaluate the fine-tuning of the [GPT-2 124 million parameter LLM][gpt-2] using the [WikiText-2 (raw)][wikitext-2-raw] dataset in FP32 and FP16 precisions.
Each benchmark was repeated `3` times, using a single batch size of `8`.
This batch size allows the benchmark to be repeated on GPUs with lower memory capacity, but larger batch sizes would likely improve performance for GPUs with sufficient memory, such as the GH200.

As of April 2024, pre-built binary wheels and conda packages for PyTorch for `aarch64` systems such as the GH200 do not include CUDA support.
Instead, the benchmark was containerised via [Apptainer][apptainer], using containers based on the [NGC PyTorch containers][ngc-pytorch].
Version [24.02][ngc-pytroch-24.02] was used for this benchmark, resulting in a software environment containing:

+ Python `3.10`
+ CUDA `12.3.2`
+ PyTorch `2.3.0a0+ebedce2`
+ HuggingFace Transformers `4.37.0`

The benchmark was then executed on [V100 GPUs in Bessemer][bessemer-gpus], [A100 & H100 PCIe GPUs in Stanage][stanage-gpus], and the [GH200 GPUs in Bede][bede-gh200-pilot-docs].
Source files, instructions, job submission scripts and the generated results and figures can be found in the [RSE-Sheffield/pytorch-transformers-wikitext2-benchmark GitHub repository][RSE-Sheffield/pytorch-transformers-wikitext2-benchmark].

#### FP32 Results

The following figures and tables show the benchmark data for **FP32** training and inferencing on across a range of GPUs.

This includes the runtime training and inferencing phases in seconds (lower is better),
and the samples processing rate in samples per second (higher is better).

As you might expect, newer generations of GPU offer reduced application runtimes and increased performance compared to previous generations, with the GH200 outperforming the V100 SXM2 GPUs in Bessemer, the A100 SXM4 GPUs in Stanage and the H100 PCIe GPUs in stanage.

![Figure 2: FP32 Runtime (s)](/assets/images/2024-05-06-bede-tier-2-hpc-nvidia-grace-hopper-superchip/ngc-pytorch-24.02-fp32-runtime.png)

![Figure 3: FP32 Samples per Second](/assets/images/2024-05-06-bede-tier-2-hpc-nvidia-grace-hopper-superchip/ngc-pytorch-24.02-fp32-samples-per-second.png)

| Metric                            |   V100 SXM2 |   A100 SXM4 |   H100 PCIe |   GH200 480GB |
|:----------------------------------|------------:|------------:|------------:|--------------:|
| FP32 Training Time (s)            |     733.447 |     204.360 |     181.747 |       114.210 |
| FP32 Inference Time (s)           |       9.827 |       3.287 |       2.973 |         1.997 |
| FP32 Training Samples per Second  |       9.481 |      34.028 |      38.261 |        60.886 |
| FP32 Inference Samples per Second |      24.413 |      72.932 |      80.666 |       119.908 |

{:.table.table-bordered.table-striped.table-hovered}

#### FP16 Results

The following figures and tables show the benchmark data for **FP16** training and inferencing on across a range of GPUs.

This includes the runtime training and inferencing phases in seconds (lower is better),
and the samples processing rate in samples per second (higher is better).

As with the FP32 results, the newer generations of GPU offer improved performance over older GPUs, with the GH200 out-performing the other models.
The relative performance difference will vary from workload to workload, with larger batch sizes likely showing increased performance.

![Figure 4: FP16 Runtime (s)](/assets/images/2024-05-06-bede-tier-2-hpc-nvidia-grace-hopper-superchip/ngc-pytorch-24.02-fp16-runtime.png)

![Figure 5: FP16 Samples per Second](/assets/images/2024-05-06-bede-tier-2-hpc-nvidia-grace-hopper-superchip/ngc-pytorch-24.02-fp16-samples-per-second.png)

| Metric                            |   V100 SXM2 |   A100 SXM4 |   H100 PCIe |   GH200 480GB |
|:----------------------------------|------------:|------------:|------------:|--------------:|
| FP16 Training Time (s)            |     376.310 |     198.677 |     172.673 |       116.243 |
| FP16 Inference Time (s)           |       5.723 |       3.290 |       2.893 |         2.147 |
| FP16 Training Samples per Second  |      18.479 |      35.001 |      40.271 |        59.833 |
| FP16 Inference Samples per Second |      41.892 |      72.819 |      82.826 |       111.463 |


## Accessing Bede

As a member organisation of the [N8 CIR][N8CIR], Bede is available for use by an researchers at the University of Sheffield.

Access is granted on a per project basis, with the [N8 CIR Bede website providing instructions on how to apply for access][N8CIR-Bede-Accessing-Bede] via the [online form][n8cir-bede-online-form].
Once submitted, the application will be reviewed and if deemed appropriate and compatible with Bede the project will be created.

[Bede's online documentation][bede-docs] now includes GH200 specific information on the appropriate pages, in addition to the [high level overview of the GH200 pilot][bede-gh200-pilot-docs].

In addition to Bede, Sheffield researchers can also access a range of GPUs in our local Tier 3 facilities [Bessemer][bessemer] and [Stanage][stanage]; as well as the [Tier 2 JADE HPC Facility][jade2].

<!-- Reference style links, to simplify reading the markdown -->

[N8CIR]: https://n8cir.org.uk/
[N8CIR-Bede-Accessing-Bede]:https://n8cir.org.uk/bede/accessing-bede/
[n8cir-bede-online-form]: https://n8cir.org.uk/bede/bede-application/
[stanage]: https://docs.hpc.shef.ac.uk/en/latest/stanage/
[bede-docs]: https://bede-documentation.readthedocs.io/en/latest/
[stanage-gpus]: https://docs.hpc.shef.ac.uk/en/latest/stanage/cluster_specs.html#gpu-nodes
[bessemer]: https://docs.hpc.shef.ac.uk/en/latest/bessemer/index.html
[bessemer-gpus]: https://docs.hpc.shef.ac.uk/en/latest/bessemer/cluster_specs.html#gpu-node-specifications
[jade2]: https://docs.hpc.shef.ac.uk/en/latest/other-uk-hpc-resources/jade2.html
[bede]: https://docs.hpc.shef.ac.uk/en/latest/other-uk-hpc-resources/bede.html
[nvidia-h100-architecture]: https://resources.nvidia.com/en-us-tensor-core
[nvidia-gh200-superchip]: https://www.nvidia.com/en-us/data-center/grace-hopper-superchip/
[nvidia-nvlink-c2c]: https://www.nvidia.com/en-us/data-center/nvlink-c2c/
[bede-gh200-pilot-docs]: https://bede-documentation.readthedocs.io/en/latest/usage/index.html#grace-hopper-pilot
[farhad-github]: https://github.com/f-allian
[l40-pytorch-benchmark-blog]: https://notesrcg.blogspot.com/2023/12/blog-post.html
[RSE-Sheffield/pytorch-transformers-wikitext2-benchmark]: https://github.com/RSE-Sheffield/pytorch-transformers-wikitext2-benchmark
[ptheywood/gpu-interconnect-plots]: https://github.com/ptheywood/gpu-interconnect-plots
[huggingface-transfomers]: https://huggingface.co/docs/transformers/en/index
[huggingface-transformers-runclm]: https://github.com/huggingface/transformers/blob/main/examples/pytorch/language-modeling/run_clm.py
[gpt-2]: https://huggingface.co/openai-community/gpt2
[wikitext-2-raw]: https://huggingface.co/datasets/wikitext
[apptainer]: https://apptainer.org/docs/user/main/introduction.html
[ngc-pytorch]: https://catalog.ngc.nvidia.com/orgs/nvidia/containers/pytorch
[ngc-pytroch-24.02]: https://docs.nvidia.com/deeplearning/frameworks/pytorch-release-notes/rel-24-02.html

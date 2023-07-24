---
title: Accelerated versions of R for Iceberg
author: Mike Croucher
slug: intel-r-iceberg
date: 2016-09-12 00:31:35 UTC
tags:
category:
link:
description:
type: text
---

**To Long; Didn't Read -- Summary**

**EDIT: Iceberg was decommissioned in November 2020**

I've built a version of R on Iceberg that is faster than the standard version for various operations. Documentation is at [https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/apps/r.html](https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/apps/r.html).

If it works more quickly for you, or if you have problems, please let us know by emailing [rse@sheffield.ac.uk](mailto:rse@sheffield.ac.uk)

**Background**

I took over building [R for Iceberg](https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/apps/r.html), Sheffield's High Performance Computing System, around a year ago and have been incrementally improving both the install and the documentation with every release. Something that's been bothering me for a while is the lack of optimisation. The standard Iceberg build uses an ancient version of the gcc compiler and (probably) unoptimised versions of [BLAS](https://en.wikipedia.org/wiki/Basic_Linear_Algebra_Subprograms) and [LAPCK](https://en.wikipedia.org/wiki/LAPACK).

BLAS and LAPACK are extremely important libraries -- they provide the code that programs such as R use for linear algebra: Matrix-Matrix multiplication, Cholesky decomposition, principle component analysis and so on. It's important to note that there are lots of implementations of BLAS and LAPACK: [ATLAS](http://math-atlas.sourceforge.net/), [OpenBLAS](http://www.openblas.net/) and the [Intel MKL](https://software.intel.com/en-us/mkl) are three well-known examples. Written in Fortran, the interfaces of all of these versions are identical, which means you can use them interchangeably, but the speed of the implementation can vary considerably.

The BLAS and LAPACK implementations on Iceberg are undocumented (before my time!) which means that we have no idea what we are dealing with. Perhaps they are optimised, perhaps not. I suspected 'not'.

**Building R with the Intel Compiler and MKL**

The Intel Compiler Suite often produces the fastest executables of all available compilers for any given piece of Fortran or C/C++ code. Additionally, the Intel MKL is probably the fastest implementation of BLAS and LAPACK available for Intel Hardware. As such, I've had **Build R using Intel Compilers and MKL** on my to-do list for some time.

Following a recent visit to the University of Lancaster, where they've been doing this for a while, I finally bit the bullet and produced some build-scripts. Thanks to Lancaster's Mike Pacey for help with this!  There are two versions (links point to the exact commits that produced the builds used in this article):

* [install_intel_r_sequential.sh](https://github.com/mikecroucher/HPC_Installers/blob/ea4a9f33b705a8cae01841d9c173278fcb486061/apps/R/3.3.1/sheffield/iceberg/intel_15/install_intel_r_sequential.sh) - Linked to the sequential (i.e. single-core) version of Intel MKL.
* [install_intel_r_parallel.sh](https://github.com/mikecroucher/HPC_Installers/blob/ea4a9f33b705a8cae01841d9c173278fcb486061/apps/R/3.3.1/sheffield/iceberg/intel_15/install_intel_r_parallel.sh) - Linked to the parallel version of Intel MKL.

The benchmark code is available in the Sheffield HPC examples repo [https://github.com/mikecroucher/HPC_Examples/](https://github.com/mikecroucher/HPC_Examples/). The exact commit that produced these results is [35de11e](https://github.com/mikecroucher/HPC_Examples/blob/35de11e7c47bc278b15a64fb77c5575b074e1a47/languages/R/linear_algebra/linear_algebra_bench.r)

**Testing**

It's no good having fast builds of R if they give the wrong results! To make sure that everything is OK, I ran R's installation test suite and everything passed. If you have an account on iceberg, you can see the output from the test suite at `/usr/local/packages6/apps/intel/15/R/sequential-3.3.1/install_logs/make_install_tests-R-3.3.1.log`.

It's important to note that although the tests passed, there **are** differences in output between this build and the reference build that R's test suite is based on. This is due to a number of factors such as the fact that [Floating point addition is not associative](http://www.walkingrandomly.com/?p=5380) and that the signs of eigenvectors are arbitrary and so on.

A discussion around these differences and how they relate to R can be found [on nabble](http://r.789695.n4.nabble.com/quot-make-check-quot-fails-on-lapack-R-and-stats-Ex-R-td4698672.html).

**How fast is it?**

So is it worth it? I ran a benchmark called [linear_algebra_bench.r](https://github.com/mikecroucher/HPC_Examples/blob/35de11e7c47bc278b15a64fb77c5575b074e1a47/languages/R/linear_algebra/linear_algebra_bench.r#L19) that implemented 5 tests

* MatMul - Multiplies two random 1000 x 5000 matrices together
* Chol - Cholesky decomposition of a 5000 x 5000 random matrix
* SVD - Singular Value Decompisition of a 10000 x 2000 random matrix
* PCA - Principle component analysis of a 10000 x 2000 random matrix
* LDA - A Linear Discriminant Analysis problem

Run time of these operations compared to Iceberg's standard install of R is shown in the table below.

* Iceberg submission scripts for these can be found in the [HPC Examples repo](https://github.com/mikecroucher/HPC_Examples)

**Execution time in seconds (Mean of 5 independent runs) **

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l"></th>
    <th class="tg-yw4l">MatMul</th>
    <th class="tg-yw4l">Chol</th>
    <th class="tg-yw4l">SVD</th>
    <th class="tg-yw4l">PCA</th>
    <th class="tg-yw4l">LDA</th>
  </tr>
  <tr>
    <td class="tg-yw4l">Standard R</td>
    <td class="tg-yw4l">134.70</td>
    <td class="tg-yw4l">20.95</td>
    <td class="tg-yw4l">46.56</td>
    <td class="tg-yw4l">179.60</td>
    <td class="tg-yw4l">132.40</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with sequential MKL</td>
    <td class="tg-yw4l">12.19</td>
    <td class="tg-yw4l">2.24</td>
    <td class="tg-yw4l">9.13</td>
    <td class="tg-yw4l">24.58</td>
    <td class="tg-yw4l">31.32</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (2 cores)</td>
    <td class="tg-yw4l">7.21</td>
    <td class="tg-yw4l">1.60</td>
    <td class="tg-yw4l">5.43</td>
    <td class="tg-yw4l">14.66</td>
    <td class="tg-yw4l">23.54</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (4 cores)</td>
    <td class="tg-yw4l">3.24</td>
    <td class="tg-yw4l">1.17</td>
    <td class="tg-yw4l">3.34</td>
    <td class="tg-yw4l">7.87</td>
    <td class="tg-yw4l">20.63</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (8 cores)</td>
    <td class="tg-yw4l">1.71</td>
    <td class="tg-yw4l">0.38</td>
    <td class="tg-yw4l">1.99</td>
    <td class="tg-yw4l">5.33</td>
    <td class="tg-yw4l">15.82</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (16 cores)</td>
    <td class="tg-yw4l">0.96</td>
    <td class="tg-yw4l">0.28</td>
    <td class="tg-yw4l">1.60</td>
    <td class="tg-yw4l">4.05</td>
    <td class="tg-yw4l">13.65</td>
  </tr>
</table>

![A graph demonstrating the execution time of four different versions of matrix multiplication with R](/assets/images/matmul_r_intel.png)

Another way of viewing these results is to see the speed up compared to the standard install of R. **Even on a single CPU core, the Intel builds are between 4 and 11 times faster than the standard builds**.  Making use of 16 cores takes this up to **141 times faster in the case of Matrix-Matrix Multiplication**!

**Speed up compared to standard R**

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l"> </th>
    <th class="tg-yw4l">MatMul</th>
    <th class="tg-yw4l">Chol</th>
    <th class="tg-yw4l">SVD</th>
    <th class="tg-yw4l">PCA</th>
    <th class="tg-yw4l">LDA</th>
  </tr>
  <tr>
    <td class="tg-yw4l">Standard R</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">1</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with sequential MKL</td>
    <td class="tg-yw4l">11</td>
    <td class="tg-yw4l">9</td>
    <td class="tg-yw4l">5</td>
    <td class="tg-yw4l">7</td>
    <td class="tg-yw4l">4</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (2 cores)</td>
    <td class="tg-yw4l">19</td>
    <td class="tg-yw4l">13</td>
    <td class="tg-yw4l">9</td>
    <td class="tg-yw4l">12</td>
    <td class="tg-yw4l">6</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (4 cores)</td>
    <td class="tg-yw4l">42</td>
    <td class="tg-yw4l">18</td>
    <td class="tg-yw4l">14</td>
    <td class="tg-yw4l">23</td>
    <td class="tg-yw4l">6</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (8 cores)</td>
    <td class="tg-yw4l">79</td>
    <td class="tg-yw4l">55</td>
    <td class="tg-yw4l">23</td>
    <td class="tg-yw4l">34</td>
    <td class="tg-yw4l">8</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Intel R with parallel MKL (16 cores)</td>
    <td class="tg-yw4l">141</td>
    <td class="tg-yw4l">75</td>
    <td class="tg-yw4l">29</td>
    <td class="tg-yw4l">44</td>
    <td class="tg-yw4l">10</td>
  </tr>
</table>

**Parallel environment**

The type of parallelisation in use here is [OpenMP](https://www.openmp.org/). As such, you need to use Iceberg's openmp environment.  That is, if you want 8 cores (say), add the following to your submission  script

<pre>
#$ -pe openmp 8
export OMP_NUM_THREADS=8
</pre>

Using OpenMP limits the number of cores you can use per job to the number available on a single node. At the time of writing, this is 16.

**How many cores: Finding the sweet spot**

Note that everything is fastest when using 16 cores! As such, it may be tempting to always use 16 cores for your jobs. This will almost always be a mistake.
It may be that the aspect of your code that's accelerated by this build doesn't account for much of the runtime of your problem. As such, those 16 cores will sit idle most of the time -- wasting resources.  

You'll also spend a lot longer waiting in the queue for 16 cores than you will for 2 cores which may swap any speed gains.

You should always perform scaling experiments before deciding how many cores to use for your jobs. Consider the Linear Discriminant Analysis problem, for example. Using just one core, Intel build gives us a 4 times speed-up compared to the standard build. Moving to 8 cores only makes it twice as fast again. As such, if you had lots of these jobs to do, your throughput would be higher running lots of single core jobs compared to lots of 8 core jobs.

If matrix-matrix multiply dominates your runtime, on the other hand, it may well be worth using 16 cores.

**Using this version of R for your own work**

As a user, there are a few things you need to be aware of with the Intel builds of R so I've created a separate documentation page for them.  This is currently at
[https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/apps/intel_r.html](https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/apps/intel_r.html)

My recommendation for using these builds is to work through the following procedure

* Ensure that your code runs with Iceberg's standard version of R and produce a test result.
* In the first instance, switch to the sequential version of the Intel R build. In the best case, this will just require changing the module. You may also need to install some of your packages since the Intel build has a separate packages directory to the standard build.
* If you see speed-up **and** the results are consistent with your test result, try the parallel version. Initially start with 2 cores and move upwards to find the sweet spot.

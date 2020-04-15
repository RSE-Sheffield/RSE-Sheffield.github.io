---
title: Fortran 
slug: fortran 
permalink: /community/resources-and-equipment/languages/fortran
date: 2016-02-06 06:14:00 UTC 
tags:
category: 
link: 
description: 
type: text
---

The Fortran programming language originated over 50 years ago, and
modern variants (e.g. Fortran 95/2003) are the languages of choice for
many scientists, engineers and mathematicians for numerical computing.

Site licensed Fortran Compilers at University of Sheffield
==========================================================

Members of the University of Sheffield have access to several commercial
Fortran compilers all of which have particular strengths and weaknesses.

NAG Fortran Compiler (Windows, MacOS X and Linux)
-------------------------------------------------

According to the 2015 Fortran UK compiler comparisons, the NAG compiler
was one of the best diagnostic compilers available:
<https://www.fortran.uk/fortran-compiler-comparisons/intellinux-fortran-compiler-diagnostic-capabilities/>

The Windows and Mac versions of the NAG compiler have graphical user
interfaces containing full documentation for the Fortran language.
Combined with the fact that students can install it on their personal
machines, this makes it an ideal compiler for teaching and learning
Fortran. Unfortunately, the Linux version is command line only and so is
not as easy to use.

-   Suitable for Teaching and Learning
-   Installed on the Iceberg High Performance Computing facility:
    <https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/compilers/nag.html>
-   Unlimited number of licenses for members of the University
-   Network access not required at compile time
-   Download (University staff and students only):
    <https://www.sheffield.ac.uk/software/>
-   Vendor Website: <https://www.nag.co.uk/nag-compiler>

Intel Fortran Compiler (Windows, MacOS X and Linux)
---------------------------------------------------

On average, programs generated using the Intel Fortran Compiler run
faster than those produced by other Fortran compilers (see
<https://www.fortran.uk/fortran-compiler-comparisons/polyhedron-benchmarks-linux64-on-intel/>
for details). At Sheffield, the small number of network licenses mean
this compiler is suitable for research use only, i.e. not suitable for
teaching use. Our license also allows use of Intel's debugger and the
Math Kernel Library (MKL) which includes optimised versions of the BLAS,
LAPACK, FFTW etc.

-   Best for compute intensive research.
-   Small number of network licenses. Need to be connected to the
    network at compile time
-   Installed on the Iceberg High Performance Computing facility:
    <https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/compilers/intel_compilers.html>
-   Can be used as a mex compiler for MATLAB (Windows only)
-   Download (University staff and students only):
    <https://www.sheffield.ac.uk/software/>
-   Vendor Website: <https://software.intel.com/en-us/intel-compilers>

PGI Fortran Compiler (Linux and Windows)
----------------------------------------

The PGI Compiler is a useful alternative to the Intel Compiler but its
real strength lies when developing code for General Purpose Graphical
Processing Units (GP-GPUs). We only have a small number of network
licenses so this compiler is not suitable for teaching.

-   Best for GPU development
-   Small number of network licenses. Need to be connected to the
    network at compile time
-   Installed on the Iceberg High Performance Computing facility:
    <https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/compilers/pgi.html>
-   Vendor Website: <https://www.pgroup.com/>

Silverfrost Fortran Compiler (Windows only)
-------------------------------------------

A windows based Fortran and C Compiler suite with excellent debugging
facilities. Sheffield has a site license for teaching and research use.

-   Download (University staff and students only):
    <https://www.sheffield.ac.uk/it-services/research/software/silverfrost>

Free, Open Source Fortran Compilers
===================================

gfortran
--------

Free to use compiler included in the Linux and Mac OSX operating systems
(note: may not be installed by default). gfortran is part of the GNU
Compiler Collective (GCC) that includes C/C++ compilers, Windows
versions are also available via MinGW or as part of Cygwin. Although
performance falls short of the Intel compiler, executable run times are
reasonable.

To install in Windows see <http://www.mingw.org/>

Numerical Fortran Libraries
===========================

The University of Sheffield has site licenses for the following Fortran
numerical libraries:

-   [NAG Fortran Library](https://www.nag.co.uk/nag-fortran-library).
    Contains 1844 user-callable routines covering a huge variety of
    mathematical and statistical areas.
    -   Obtain the NAG Fortran Library from IT Services' software download
        site. (University staff and students only).
        <https://www.sheffield.ac.uk/software/>
    -   NAG Fortran Library documentation on Sheffield's High
        Performance Computing cluster:
        <https://docs.hpc.shef.ac.uk/en/latest/iceberg/software/libs/nagfortran.html>
    -   Complete list of functions provided by the NAG Fortran library:
        <https://www.nag.co.uk/numeric/fl/nagdoc_fl25/html/FRONTMATTER/manconts.html>
-   [Intel Math kernel Library
    (MKL)](https://software.intel.com/en-us/mkl). Contains extremely
    fast functions for linear algebra, fourier transforms, data fitting
    and statistics.
    -   The MKL is distributed as part of the Intel compiler suite which
        can be obtained from IT Services' software download site. (University
        staff and students only) <https://www.sheffield.ac.uk/software/>

Additional Fortran Resources
============================

-   A look at fortran unit test frameworks by The Software
    Sustainability Institute
    <http://www.software.ac.uk/blog/2014-07-22-look-fortran-unit-test-frameworks>


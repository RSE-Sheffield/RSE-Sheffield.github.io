---
# Required
include: true
title:HYBIRD: a Particle-Fluid Engineering Simulation Tool (HYPFEST)
pi_name: Alessandro Leonardi
rses: [Robert Chisholm]
start_date: 16-09-2024
end_date: 15-03-2025
keywords: [GPU, simulation, optimisation, performance, C++, OpenMP, ParaView, CMake]

# Optional
dept: Mechanical, Aerospace and Civil Engineering
collaborators: [Andrea Pasqua]
completed: true
image: hybird-paraview.png
testimonial: 
  author: Alessandro Leonardi
  quote:  |
    Collaborating with the Research Software Engineering (RSE) team has been a highly constructive experience that has made a tangible difference on how my research group works. I am a civil engineering researcher, and I often rely on numerical methods, but the challenges we face with our in-house software, particularly around performance and usability, require a level of software engineering expertise that goes well beyond what is typically available within our research group.  
    The RSE team brought in-depth technical knowledge that helped us identify and address several key bottlenecks in the code. In particular, they supported the development of a GPU-enabled version of our fluid solver and contributed to improving the memory management routines. These changes led to a noticeable reduction in simulation times and improved the stability of our models. I was lucky to work with a Software Engineer who is an expert in this type of implementation, which made the process very smooth.  
    Beyond the technical improvements, the collaboration helped raise the standard of software development within our group. Working with the RSE team encouraged us to adopt more systematic development practices, improve our documentation, and consider long-term maintainability. This has directly benefited our PhD students and research staff, who now engage with the codebase more confidently and productively.
funding_sources: 
  - name: Sheffield RSE Call for Proposals 2024
    url: https://rse.shef.ac.uk/collaboration/RSEtime/2024/
short_summary: HYBRID is a research software package that couples the Discrete Element Method (DEM) with the Lattice Boltzmann Method (LBM) to model particle–fluid interactions. This project optimised the existing C++/OpenMP implementation and delivered a prototype GPU (CUDA) version, achieving substantial performance improvements across both CPU and GPU platforms.
software_link: 
  name: HYBIRD
  url: https://github.com/gnomeCreative/HYBIRD
publication_links:        # Links to published material associated with project. DOI preferred.
  - description: 
    url: 
  - description: 
    url: 
---
HYBRID is research software developed by Dr Alessandro Leonardi and his team which form part of the Geotechnical Engineering group. Written in C++ with OpenMP, the software couples the Discrete Element Method (DEM) with the Lattice Boltzmann Method (LBM) to simulate complex interactions between particles and fluids. These simulations help researchers study how granular fronts form in free-surface flows, improving understanding of particle-laden flow behaviour in environmental and geotechnical engineering.

Performance specialist Robert Chisholm assessed and optimised the existing codebase. Like many research tools created by domain experts without formal software engineering training, the original implementation contained small inefficiencies that significantly affected performance. After optimisation, the CPU version of HYBRID ran the largest tutorial model up to **6 times faster**, with actual speed-ups varying by model scale and configuration.

A valuable side benefit of this work was converting HYBRID’s ParaView outputs from ASCII to binary format. Although this only slightly improved HYBIRD’s overall runtime, it allowed ParaView to load individual frames **40 times faster**, dramatically streamlining the workflow for researchers analysing results from HYBRID.

The remaining project time was spent developing a GPU-accelerated prototype, as LBM simulations are particularly well suited to GPU parallelism. By the end of the project, a fully functional GPU re-implementation of both the LBM and DEM components that matched the outputs of the existing examples had been completed. Further work however remains to improve the usability and maintainability of this prototype, which the team hopes to continue with future funding.

On a 3060 RTX GPU, the GPU prototype ran the largest tutorial model **24 times faster** than the original CPU code, with performance limited primarily by the use of double-precision floating-point arithmetic. On the H100 GPUs available on Stanage, the same model ran **180 times faster** than the original CPU version, demonstrating the substantial potential of GPU acceleration for this research.
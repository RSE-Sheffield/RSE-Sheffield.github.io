---
# Required
include: true
title: PolyChron
pi_name: Dr Bryony Moody
rses: [Peter Heywood]
start_date: 23-01-2025
end_date: 23-07-2025
keywords: [chronology, statistics, python, GUI]

# Optional
dept: School of Mathematical and Physical Sciences
collaborators: [Shreyan Ghosh (N8CIR intern)]
completed: true
image: polychron-dating-results-screenshot.png
testimonial:
  author: Bryony Moody
  quote: |
    Having access to funded RSE time was instrumental in pushing my PhD research forward following the completion of my PhD.
    As a teaching-only academic, I have very limited time to commit to furthering the work I started during my PhD.
    Also, despite being a fairly capable programmer, my codebase required extensive refactoring before I could hope to publish the software to the user community.
    Being able to have someone who has the expertise about best practice when it comes to writing code and publishing packages to take the refactoring project means that I saved a significant amount of time compared to if I had attempted it myself.
    
    I was incredibly surprised by how quickly the RSE (Peter Heywood) was able to hit the ground running with the project and just how much progress they were able to make!
    During the project, not only was the codebase completely refactored, but Peter also made significant progress with improving the documentation, which was something that had certainly been neglected during my PhD research.
    I’d encourage any researcher to make use of the RSE team when funding calls become available!
funding_sources:
  - name: Sheffield RSE Call for Proposals 2024
    url: /collaboration/RSEtime/2024/
short_summary: >
  PolyChron is a GUI application designed to facilitate the analysis and archiving of archaeological dating evidence. 
  It supports the management of both relative and absolute dating evidence, enabling users to build multiple chronological models within a Bayesian modelling framework.
software_link:
  name: PolyChron (GitHub)
  url: https://github.com/bryonymoody/PolyChron
publication_links:
  - description: PolyChron on PyPI
    url: https://pypi.org/project/polychron/
  - description: PolyChron on Zenodo
    url: https://doi.org/10.5281/zenodo.17092267
---

Initially developed as a prototype during Dr. Moody's AHRC and Historic England funded PhD,
PolyChron is a GUI application designed to facilitate the analysis and archiving of archaeological dating evidence. 

PolyChron supports the management of both relative and absolute dating evidence, enabling users to build multiple chronological models within a Bayesian modelling framework.
A key objective in developing PolyChron was to semi-automate archiving reusable archaeological dating evidence, ensuring compliance with the [FAIR principles](https://doi.org/10.1038/sdata.2016.18).

As part of the [2024 RSE collaboration call](/collaboration/RSEtime/2024/) project, PolyChron underwent significant refactoring and restructuring, resulting in:

- Refactored to follow a Model-View-Presenter architecture 
- Implemented automated testing and Continuous Integration (CI)
- Modern python packaging and distribution through [PyPI](https://pypi.org/project/polychron/)
- A hosted [documentation and user-guide](https://bryonymoody.github.io/PolyChron)
- Published [research software artifacts on Zenodo](https://doi.org/10.5281/zenodo.17092267)

This collaboration has continued through the supervision of two [N8CIR funded internships](https://n8cir.org.uk/internships/) by Dr. Moody and Dr. Heywood.

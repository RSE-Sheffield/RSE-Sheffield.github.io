---
# Required
include: true
title: SNF-simulations
pi_name: Dr Liz Kneale
rses: [Martin Dyer]
start_date: 2025-10-01
end_date:  2026-06-01
keywords: [physics, python, GUI]

# Optional
dept: School of Mathematical and Physical Sciences
completed: true
image: snf-dashboard.png
testimonial:
  author: Liz Kneale
  quote: This project has been absolutely brilliant. Martin has gone above and beyond the consolidation and refactoring work that I originally envisaged, to produce a software package that I have already used to produce results for a successful fellowship application, and a web interface that can be used by the increasing number of researchers working in this area. It also provides the framework for me to extend the functionality of the software and Martin has identified additional improvements that I will be able to implement to make the software more accurate, and at the same time more flexible. Thanks!
funding_sources:
  - name: Sheffield RSE Call for Proposals 2025
    url: https://rse.shef.ac.uk/collaboration/RSEtime/2025/
short_summary: SNF-simulations is a Python software package developed to model spent nuclear fuel (SNF) through antineutrino detection. The RSE project was to modernise and refactor the existing codebase, removing old dependencies and preparing the software for public release. A web-based dashboard was also developed to demonstrate the software's capabilities.
software_link:
  name: SNF-simulations
  url: https://ekneale.github.io/SNF-simulations/
publication_links:
  - description: SNF-simulations on PyPI
    url: https://pypi.org/project/snf-simulations/
  #  JOSS paper and Science paper to be added when published

---
SNF-simulations is a Python software package created to predict the antineutrino emission spectrum from a Spent Nuclear Fuel (SNF) storage facility of any number of dry storage casks with any initial isotopic composition and cooling time after removal from the core of a nuclear reactor. It takes the isotopic composition from FISPIN calculations of nuclear fuel after burn up in a reactor core, and outputs the total antineutrino spectrum, for input into detector simulations.

Funded for 8 months at 20% FTE as part of the [Call for Proposals 2025](https://rse.shef.ac.uk/blog/2025-09-30-funded-proposals/), the RSE project involved refactoring and modernising the existing codebase, which had been developed by [Dr Liz Kneale](https://sheffield.ac.uk/mps/people/research-staff/liz-kneale) and her students over several years. The original code was dependent on the ROOT framework making it difficult to install and maintain. The RSE project consolidated and refactored the code, removing the dependency on ROOT framework, added automated testing and documentation and packaged the code for release to [PyPI](https://pypi.org/project/snf-simulations/). A web-based dashboard was also developed using the [Shiny for Python](https://shiny.posit.co/py/) framework to demonstrate the software's capabilities and provide an accessible interface for users to explore the results.

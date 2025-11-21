---
# Required
include: true
title: CITCoM - Causal Inference for Testing Computational Models
pi_name: Neil Walkinshaw
rses: [Michael Foster, Farhad Alian, Chris Wild, Bob Turner]
start_date: 01-01-2021
end_date: 31-12-2025
keywords: [software testing, computational models, causal reasoning, python]

# Optional
dept: Computer Science
collaborators: [Robert Hierons, Nicholas Latimer, David Wagg, Andrew Clark, Richard Somers]
completed: false # Soon to be true :(
image: citcom.png
testimonial:              # Testimonal quote from project
  author:
  quote:
funding_sources:          # Funding sources for project. URL for funding source optional
  - name: EPSRC
    url: https://gtr.ukri.org/projects?ref=EP%2FT030526%2F1
short_summary: Scientific models possess several properties that make them notoriously difficult to test, including a complex input space, long execution times, and non-determinism. This project employs the statistical framework of Causal Inference to address these challenges.
software_link:            # Link to software generated from project. DOI preferred.
  name: The Causal Testing Framework
  url: https://doi.org/10.21105/joss.07739
publication_links:        # Links to published material associated with project. DOI preferred.
  - description: Evolving Estimation Models for Causal Testing
    url: https://doi.org/10.1145/3696630.3731613
  - description: Using Causal Inference to Test Systems with Hidden and Interacting Variables - An Evaluative Case Study
    url: https://arxiv.org/abs/2504.16526v1
  - description: Causal Test Adequacy
    url: https://doi.org/10.1109/ICST60714.2024.00023
  - description: Testing Causality Scientific Modelling Software
    url: https://doi.org/10.1145/3607184
---
<!---
Longer description that gets put on the Projects page.
Should be 2-3 paragraphs ideally outlining broad details of project.
-->
Scientific models possess several properties that make them notoriously difficult to test, including a complex input space, long execution times, and stochastic behaviour.
Furthermore, the experimental nature of many models can make it difficult to precisely specify their expected behaviour in advance.
This makes them impractical to test effectively using existing techniques.
The CITCoM solution is to specify tests in terms of the expected relationships between the variables within the model, for example increasing the infectiousness of a disease should lead to there being more observed cases and employ a statistical methodology known as Causal Inference to validate these relationships using pre-existing runtime data.

The RSEs have integrated the techniques developed during this project into the Causal Testing Framework, which provides a suite of automated tools to assist with the process of causal testing alongside comprehensive documentation and tutorials.
This ensures high-quality reproducible research outputs while also providing a production-ready software tool that can be used by practitioners to test their models.

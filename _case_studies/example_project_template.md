---
# Required
include: false            # Flag to include project in list of projects displayed on site
title:                    # Title of project
pi_name:                  # PI name of the project
rses: []                  # Array of names of RSE involved with project
start_date:               # Start date of project in DD-MM-YYYY format
end_date:                 # End date of project in DD-MM-YYYY format
keywords: []              # Array of keywords for the project

# Optional
dept:                     # PIs dept/affiliation
collaborators: []         # Array of people or organisations involved with project that don't fall into PIs or RSEs
completed:                # Boolean indicating if the project has finished
image:                    # Image filename to represent project. Accomanying image should be placed in assets/images/project_images.
testimonial:              # Testimonal quote from project
  author:
  quote:
funding_sources:          # Funding sources for project. URL for funding source optional
  - name: 
    url: 
short_summary:            # Single paragraph summary of project.
software_link:            # Link to software generated from project. DOI preferred.
  name: 
  url: 
publication_links:        # Links to published material associated with project. DOI preferred.
  - description: 
    url: 
  - description: 
    url: 
---
<!---
Longer description that gets put on the Projects page.
Should be 2-3 paragraphs ideally outlining broad details of project. 
-->
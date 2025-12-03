---
include: true
title: GridLive - API access to the UKs Smart Meter Data 
pi_name: [Prof Alastair Buckley, Dr Jamie Taylor, Edwin Brown]
dept: School of Mathematical and Physical Sciences
rses: [Edwin Brown, Fred Sonnerwald, Chris Wild, Tamora James]
collaborators: [Advanced Infrastructure Technology Ltd]
completed: true
start_date: 01-10-2024
end_date: 01-10-2025
image: gridlive-dashboard.png
keywords: [database, smart meters]
testimonial:
  author:
  quote:
funding_sources:
  - name: Innovate UK
short_summary:
  "GridLive is an Database and API that provides centralised access to aggregated smart meter electricity demand data for the UK. This enables researchers, network operators and energy system planners to easily access and analyse large scale electricity demand data to support the development of digital twins and AI models for the UK electricity grid."
software_link:
  name: GridLive API Documentation
  url: https://api.gridlive.shef.ac.uk/docs
publication_links:
  - description: GridLive Documentation
    url: https://sites.google.com/sheffield.ac.uk/gridlive/home

---
In 2024, the energy regulator; Ofgem, mandated that all the Distribution Network Operators (DNOs) publish aggregated smart meter data publicly. GridLive is a central database and restful API for all the DNOs smart meter data that is optimized for large scale data retreival and analysis. The user can extract smart meter data based on date ranges, license area, DNO and grid reference. All the metadata from the electrical substations are also available. 

The RSEs were responsible for building the full data pipeline and designed the database structure for optmised data retrieval. The software is written so the database is automatically updated every month from the DNOs data portals. The RSEs also ensured the process of building the database and API is heavily documented so the research group can edit and maintain the software. 

---
include: true
title: GridLive - Central access to aggregated smart meter electricity demand data for the UK
pi_name: Prof Alastair Buckley
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
publication_links:
  - description: GridLive Documentation
    url: https://sites.google.com/sheffield.ac.uk/gridlive/home
software_link:
  name: GridLive API Documentation
  url: https://api.gridlive.shef.ac.uk/docs
publication_links:
---
In 2024, the energy regulator; Ofgem, mandated that all the Distribution Network Operators (DNOs) publish aggregated smart meter data publicly. The DNOs have started publishing their own data to their own data portals. However, datasets are uploaded at different times and in different formats. In addition, the dno's data portals are not designed for optimized retreival of 100s of 1000s of GBs of data.

The GridLive project aims to build a central database and restful API for all the DNOs smart meter data that is optimized for large scale data retreival and analysis. This is essential for supporting digital twins of the UK electricity grid and AI model development. Dashboards can be built on top of the data portal to support network operators and energy system planners.

GridLive gathers all the smart meter data from the DNOs data portals, processes it into a common format, and stores it in a central postgresql database. The data can then be accessed via a restful API that allows users to query and retrieve data in a standardized format. The user can query data by date range, region, DNO and grid reference.


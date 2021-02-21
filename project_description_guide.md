# Project Description Guide

Each project listed in [`_data/projects.csv`](_data/projects.csv) should have a description in a markdown file in the [`_project_descriptions/`](_project_descriptions/) folder. The markdown file nust be named identically to the text in the key column of `projects.csv`. 

The following project data (and metadata) are to be populated in `projects.csv`:

| Field | Description | Mandatory |
| - | - | - |
| ID | Project ID from [RSE Admin](https://rseadmin.shef.ac.uk/) | No |
| key | A code that links this table to the markdown file containing the full project description. | Yes |
| title | Project title used in RSE Admin. | Yes |
| long_title | A descriptive project title. | Yes |
| tech_methods | Technology and methods used in the project including programming languages. | Yes |
| rses | Comma seperated list of RSEs involved (`firstname` `lastname`). | Yes |
| start | Project start date `dd/mm/yyyy` | Yes |
| end | Project end date `dd/mm/yyyy` | Yes |
| department | Collaborator department. | Yes |
| level | Priority level for display - currently set to 1 if project has a description, 2 if not. |
| show | Set to 1 if the project is to be displayed, 0 if not. |

Project descriptions are to be written in markdown with a header containing the project key:

```
---
key: <key>
---
```

The text should address the following:

- A general description of the project, its aims and objectives, link to project website (if available). 
- What does / did the RSE collaboration add to the project?
- Current and planned project outputs linked to RSE contribution (e.g. GitHub link, papers, talks).
- Project impact beyond software (societal benefits, policy change, improved media output, financial / business, public engagement, health benefits).

---
layout: post
title: "Catching illegal loggers from space"
author: Joe Heffer
slug: 2026-07-22-catching-illegal-loggers-from-space
date: 2026-07-22 12:00:00 UTC
tags:
    - case-study
    - data-analytics-service
    - google-earth-engine
    - remote-sensing
    - web-application
category: case-study
link:
description: "How we gave a forest-monitoring tool a secure home on University infrastructure, with the access controls it needed to be trusted with sensitive data and shared safely with a government partner in Peru."
social_image: /assets/images/2026-07-22-catching-illegal-loggers-from-space/image1.png
type: text
excerpt_separator: <!--more-->
---

_How we gave a forest-monitoring tool a secure home on University infrastructure, with the access
controls it needed to be trusted with sensitive data and shared safely with a government partner in
Peru._

In the Peruvian Amazon, the most damaging kind of logging is often the hardest to see. Selective
logging takes out a handful of the most valuable trees at a time and leaves the rest of the forest
standing, so the canopy closes over the gaps within a season or two. From a satellite, it barely
registers. For years, this made illegal selective logging almost impossible to catch across areas
far too vast to patrol on foot.

<!--more-->

A team of University of Sheffield researchers [set out to change
that](https://sheffield.ac.uk/news/new-technology-helping-fight-against-illegal-logging-perus-valuable-rainforest).
Working from a detailed, ground-checked dataset and [training a machine-learning
model](https://sheffield.ac.uk/research/new-technology-turns-tide-against-illegal-logging-peru)
(software that learns to recognise patterns from examples), they built a way to spot the faint,
tree-by-tree disturbance that selective logging leaves in satellite imagery. This was precise enough
that inspectors could be sent to a specific location rather than searching blindly. The method now
underpins a working tool used operationally by OSINFOR, Peru's forestry oversight agency, to direct
drones and ground teams to suspected illegal logging sites.

🎥 To find out more, watch this video on the Sheffield Player ["Tackling Illegal Logging in
Peru"](https://player.sheffield.ac.uk/events/tackling-illegal-logging-peru).

![Satellite imagery with suspected selective-logging sites outlined in red](/assets/images/2026-07-22-catching-illegal-loggers-from-space/image1.png){: .img-fluid #fig1}
{: style="text-align: center;"}
_Satellite imagery showing areas flagged by the team's machine-learning model, which is trained to
spot the subtle canopy disturbance left by selective logging and outlines each suspected site in
red._
{: style="text-align: center;"}

The tool had been built on Google Earth Engine (GEE), a free cloud platform, popular in research,
for analysing satellite data at scale. Google Earth Engine is excellent for building this kind of
analysis, but its sharing model is coarse: to give OSINFOR working access to the tool, the team had
to share the entire project — including all of the source code behind the detection method.

![The Google Earth Engine platform](/assets/images/2026-07-22-catching-illegal-loggers-from-space/image2.png){: .img-fluid #fig2}
{: style="text-align: center;"}
_Google Earth Engine: a powerful platform for satellite analysis at scale._
{: style="text-align: center;"}

For a tool whose whole purpose is flagging suspected illegal activity to a government agency, that
raised two real concerns. The flagged locations are operationally sensitive, and handing over the
underlying method as the price of giving a partner access sat awkwardly with the team's wish to keep
the research open while leaving room for future development.

![Sheffield and OSINFOR teams working together at a joint workshop in Lima](/assets/images/2026-07-22-catching-illegal-loggers-from-space/image3.png){: .img-fluid #fig3}
{: style="text-align: center;"}
_Sheffield and OSINFOR teams working together at a joint workshop in Lima in July 2026 that focused
on "Digital transformation in forest oversight: towards evidence-based management"._
{: style="text-align: center;"}

We suggested a quick fix that helped but didn't resolve the fundamental issues. Google Earth Engine
can [publish a project as a standalone web
app](https://developers.google.com/earth-engine/guides/apps), so OSINFOR could use the tool through
a simple interface rather than the underlying script. That closed off the most obvious exposure, but
it didn't solve the real problem: the tool was still tied to Google's platform, offered little room
for customisation, and gave no fine-grained control over who could see or do what. Crucially, the
detection model itself was still sent to each user's browser to run, so anyone determined enough
could recover it.

## The project

Our team took on the job of rehoming the tool: moving it off Google's platform and onto University
of Sheffield infrastructure, without losing the convenience and scale that made the original setup
attractive in the first place.

Chris Wild led the engineering and did the bulk of the technical work, in close collaboration with
the researchers; Rosanna Milner rebuilt the front end — the part users see and interact with.
Between September 2025 and February 2026, they migrated the tool to University-hosted infrastructure
and put a proper sign-in system in front of it, so access could be granted organisation by
organisation rather than all-or-nothing. Behind the scenes, the tool still draws on Google Earth
Engine's processing power for the heavy satellite analysis — we built a clean interface to it — so
this was about giving the tool a secure home and a controlled front door, not cutting the link to
Google's computing altogether.

The result is now [live as SELECT-S2](https://select.sheffield.ac.uk/) (SElective Logging DetECtion
Tools) and sits on a University of Sheffield domain rather than a commercial platform, behind a login
that lets the team decide precisely who can use it. This keeps the sensitive detection data and the
underlying method separate from the access a partner is given.

![The ADETOP algorithm interface](/assets/images/2026-07-22-catching-illegal-loggers-from-space/image4.png){: .img-fluid #fig4}
{: style="text-align: center;"}
_The ADETOP algorithm (Aplicativo de Detección de Tala Selectiva con sensor ÓPtico) was developed
with the University of Sheffield and is now used by Peru's forestry oversight agency OSINFOR to
detect illegal selective logging._
{: style="text-align: center;"}

Free, convenient cloud platforms (Google Earth Engine, Colab, RStudio Cloud and the like) are often
the natural place to start a data-heavy project. They only start to strain when real external
partners and genuinely sensitive data arrive, and you discover that "share this with a collaborator"
can mean "share everything, with everyone you've added."

![ADETOP/SELECT data being used operationally by OSINFOR in Lima](/assets/images/2026-07-22-catching-illegal-loggers-from-space/image5.png){: .img-fluid #fig5}
{: style="text-align: center;"}
_ADETOP/SELECT data being used operationally by OSINFOR in Lima, Peru. In the photo, a senior
analyst at OSINFOR is using ADETOP via the SELECT portal to detect illegal selective logging within
OSINFOR-managed concessions. The redesigned SELECT-S2 web application has a map-based user interface
for viewing potential logging patterns._
{: style="text-align: center;"}

At that point the questions become practical ones: how do you keep the convenience of a hosted
platform while gaining proper control over who sees what? How do you give an outside partner a usable
tool without handing over your data or your methods along with it? And how do you support open
research while keeping future options open? Those are exactly the questions the Data Analytics
Service helps researchers work through — and, where it makes sense, build their way out of.

## Results & impact

For the research and its real-world effect in Peru, the headline figures reported so far are
striking.

* The tool has been credited with identifying as much as [37% of all reported illegal
  logging](https://sheffield.ac.uk/news/new-technology-helping-fight-against-illegal-logging-perus-valuable-rainforest)
  across the surveyed area of Peruvian rainforest, which has grown from 1.3M ha (2023) to 4M ha
  (2026).
* Between 2023 and 2025, its use contributed to the seizure of over 57,000 m³ of illegal timber,
  worth more than US$26 million.
* Inspection times were reportedly cut from 23 days to 4 — letting enforcement teams target checks
  precisely instead of working on a sample or complaint basis.

Chris Bousfield, a researcher and ADETOP developer, said:

> "In 2025 alone, OSINFOR used ADETOP as part of its monitoring and tracking programme covering more
> than 4.2 million hectares of forest. Monitoring data generated through ADETOP between 2023 and 2025
> has helped identify more than 57,000 cubic metres of unauthorized timber extraction with a market
> value of at least $26 million, and has supported oversight activities across some of Peru's most
> important forest regions, including Ucayali, Loreto and Madre de Dios. The results demonstrate how
> artificial intelligence and satellite-based monitoring can provide actionable information at scales
> that would be impossible to achieve through field inspections."

The migration project's contribution has been important because the tool now has a secure,
University-owned home that can grow with the project, be shared safely with partners across borders,
and keep sensitive data properly protected. That is what turns a successful research prototype into
something that can be relied on for years.

This supports the future goals of the research. Project lead Robert Bryant said:

> "We have exciting plans for the future that will build upon our collaboration with OSINFOR. Our
> team from Sheffield will work with Professor David Edwards and his team in Cambridge on a Velux
> Stiftung funded project to facilitate the global roll-out of ADETOP and SELECT across tropical
> forests. In addition, work driven by Jefersson dos Santos and his team at Sheffield will use
> funding from the Royal Society to contribute to the development of complementary AI tools for
> improved forest governance."

## Contact us

Have you outgrown the free platform your research started on? Are you trying to share a tool or
dataset with an external partner without giving away more than you mean to? The [Data Analytics
Service](https://sheffield.ac.uk/it-services/about/who-we-are-and-what-we-do) works with researchers
across every faculty to move projects onto secure, sustainable University infrastructure. We offer a
range of support: from a quick conversation about options through to building and hosting a full web
application.

Whether you need help rehoming a research tool, controlling access to sensitive data, or building
and deploying a web application, our team of Research Technical Professionals (RTPs) in the Data
Analytics Service and the [Research Software Engineering Group](https://rse.shef.ac.uk/) can help.

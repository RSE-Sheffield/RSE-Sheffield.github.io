---
category: lunchbytes
date: 2022-03-17
published: True
from: "12:00"
to: "13:00"
location: "Google Meet"
speaker: "Christos Anastopoulos (University of Sheffield), Mark C Hodgkinson (University of Sheffield)"
institute:
title: "Software engineering in High Energy / Particle Physics"
image:
slides_url:
---

This session will take place on [Google Meet](https://meet.google.com/unb-cjmh-sus) and participants can join 15 minutes before the start of the session.

We also have a [Google Jam Board](https://jamboard.google.com/d/1KTbvVzwqINY-qMfNAmiUUs8QTPSJogdatDO3MEB-djU) where you can note down any questions or comments before or during the event.

## Migrating 4 million lines of C++ code to multi threading

**Christos Anastopoulos**

The Atlas collaboration had to migrate its production software to run in a multi threaded environment. This necessitated a significant refactoring of the relevant code base. This effort would be practically impossible without employing gitlab, code review , unit test, integration tests inside the git pipeline, and regular larger scale tests continuously stressing the code base. The talk will attempt to describe how these are used inside the ATLAS collaboration and how they helped to achieve migrating to code base to successfully run in MT.

[Slides](/assets/slides/2022-03-17-lb-hep/ATLAS_4M_MT.pdf)

## A new era of computing at the Large Hadron Collider

**Mark C Hodgkinson**

The Large Hadron Collider will enter a new era of "high luminosity" in the late 2020's which will entail higher data rates, as well as more complex data to analyse. New software solutions may be required beyond the current CPU based multi-threading paradigm in use in LHC experiments. I will discuss current efforts to study alternate approaches such as offloading code to GPU and machine learning based data analysis, which may bring the required resource and physics performance improvements. I also also briefly discuss software training programs in usage in the particle physics community. These are important to provide skills to new people for existing work (c++, python etc) and new approaches in the future (GPU etc).

[Slides](/assets/slides/2022-03-17-lb-hep/LunchBytes_mhodgkin_2022.pdf)

## Video

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2103181/sp/210318100/embedIframeJs/uiconf_id/38838661/partner_id/2103181?iframeembed=true&playerId=kaltura_player&entry_id=1_wdh4005q&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_6c64sldm" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

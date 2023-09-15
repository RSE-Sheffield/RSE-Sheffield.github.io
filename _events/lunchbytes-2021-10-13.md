---
category: lunchbytes
date: 2021-10-13
published: True
from: "12:00"
to: "13:00"
location: "Google Meet"
speaker: "Gemma Ives (host, University of Sheffield), Mike Croucher (Mathworks), Tim Rogers (University of Sheffield), Fred Sonnenwald (University of Sheffield)"
institute:
title: "LunchBytes: Better MATLAB, Better Research"
image:
redirect_from:
  - /events/LunchBytes-2021-10-13.html
slides_url:
---

<iframe id="kaltura_player" src="https://cdnapisec.kaltura.com/p/2103181/sp/210318100/embedIframeJs/uiconf_id/38838661/partner_id/2103181?iframeembed=true&playerId=kaltura_player&entry_id=1_0qwso3ju&flashvars[streamerType]=auto&amp;flashvars[localizationCode]=en&amp;flashvars[leadWithHTML5]=true&amp;flashvars[sideBarContainer.plugin]=true&amp;flashvars[sideBarContainer.position]=left&amp;flashvars[sideBarContainer.clickToClose]=true&amp;flashvars[chapters.plugin]=true&amp;flashvars[chapters.layout]=vertical&amp;flashvars[chapters.thumbnailRotator]=false&amp;flashvars[streamSelector.plugin]=true&amp;flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&amp;flashvars[dualScreen.plugin]=true&amp;flashvars[hotspots.plugin]=1&amp;flashvars[Kaltura.addCrossoriginToIframe]=true&amp;&wid=1_889cc37i" width="400" height="285" allowfullscreen webkitallowfullscreen mozAllowFullScreen allow="autoplay *; fullscreen *; encrypted-media *" sandbox="allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation" frameborder="0" title="Kaltura Player"></iframe>

Short talks on how University of Sheffield researchers are using Matlab features old and new, straightforward and complex. A chance to get perspectives from researchers and from MathWorks, and to discuss Matlab in the research software ecosystem.

This session will take place on [Google Meet](https://meet.google.com/jde-tgwa-hru) and participants can join 15 minutes before the start of the session. [Add to your calendar.](https://calendar.google.com/event?action=TEMPLATE&tmeid=NTUwZDlwdDlubTc1bGg1OG1oYzRrOXJ1b3Ugci5kLnR1cm5lckBzaGVmZmllbGQuYWMudWs&tmsrc=r.d.turner%40sheffield.ac.uk)

We also have a [Google Jam Board](https://jamboard.google.com/d/1O9NVU0p3zU9yStNghyPlT7prWxa0A_mPMCSHJYVFj6U) where you can note down any questions or comments before or during the event.

---

**What's neat about using the MATLAB IDE for research (and teaching)**

*Fred Sonnenwald*

MATLAB tightly integrates its command window, editor, debugger, profiler, and live scripts into an Integrated Development Environment (IDE) in a way uncommon for interpreted languages. This short talk will go over these features and provide some examples of how I've used them to aid in research (and teaching).

[Slides](/assets/slides/2121-10-13_LB_MATLAB/LunchBytes 13 October 2021 Fred Sonnenwald v1.1.pptx)

---

**MATLAB Live Editor Tasks: The art of programming without programming**

*Mike Croucher*

Some researchers prefer to analyse their data using easy to use Graphical User Interfaces while others insist that coding is the only way to ensure reproducible, reusable and correct computational research.

Why choose when you can have both with MATLAB Live Editor tasks?  

[Slides and code](/assets/slides/2121-10-13_LB_MATLAB/Sheffield_Lunch_Croucher.zip)

---

**Writing Object Oriented MATLAB For Parallel Compute: Challenges and Successes**

*Tim Rogers*

For a large number of algorithms the computation can be broken down into independent blocks which have a self-contained set of attributes and methods, for example, it may be necessary to run multiple instances of an algorithm with different parameters. To improve modularity, reusability and reproducibility it can be beneficial to define an 'object' which packages these blocks. Formally, this is called an OOP approach to writing code (although the brief definition here is not complete). Despite being a popular approach in other languages, most notably Python, it is not widely employed within MATLAB where more commonly a functional programming model is used. This talk will show an example of one algorithm where an OOP model greatly improves the readability and useability of the code base by defining objects which can be used as building blocks of more complicated algorithms. The task of system identification using an Iterated Batch Importance Sampling algorithm will be used as a demonstration. A particular focus of the talk will be on how MATLAB objects can be written such that they are amenable for use within parallel compute structures provided by MATLAB, such as 'parfor' loops, for which there are some specific challenges.

[Slides](/assets/slides/2121-10-13_LB_MATLAB/lunchbytes_parallel_classes_TR.pdf)

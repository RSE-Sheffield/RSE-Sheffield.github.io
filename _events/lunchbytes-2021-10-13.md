---
category: lunchbytes
date: 2021-10-13
published: True
from: "12:00"
to: "13:00"
location: "Google Meet"
speaker: "Mike Croucher, Tim Rogers, Fred Sonnenwald"
institute:
title: "Lunch bytes: Better MATLAB, Better Research"
image:
redirect_from:
  - /events/LunchBytes-2021-10-13.html
slides_url:
---

Short talks on how University of Sheffeild researchers are using Matlab features old and new, straightforward and complex. A chance to get perspectives from researchers and from Mathworks, and to discuss Matlab in the research software ecosystem.

---

**What's neat about using the MATLAB IDE for research (and teaching)**

*Fred Sonnenwald*

MATLAB tightly integrates its command window, editor, debugger, profiler, and live scripts into an Integrated Development Environment (IDE) in a way uncommon for interpreted languages. This short talk will go over these features and provide some examples of how I've used them to aid in research (and teaching).

---

**MATLAB Live Editor Tasks: The art of programming without programming**

*Mike Croucher*

Some researchers prefer to analyse their data using easy to use Graphical User Interfaces while others insist that coding is the only way to ensure reproducible, reusable and correct computational research.

Why choose when you can have both with MATLAB Live Editor tasks?  

---

**Writing Object Oriented MATLAB For Parallel Compute: Challenges and Successes**

*Tim Rogers*

For a large number of algorithms the computation can be broken down into independent blocks which have a self-contained set of attributes and methods, for example, it may be necessary to run multiple instances of an algorithm with different parameters. To improve modularity, reusability and reproducibility it can be beneficial to define an 'object' which packages these blocks. Formally, this is called an OOP approach to writing code (although the brief definition here is not complete). Despite being a popular approach in other languages, most notably Python, it is not widely employed within MATLAB where more commonly a functional programming model is used. This talk will show an example of one algorithm where an OOP model greatly improves the readability and useability of the code base by defining objects which can be used as building blocks of more complicated algorithms. The task of system identification using an Iterated Batch Importance Sampling algorithm will be used as a demonstration. A particular focus of the talk will be on how MATLAB objects can be written such that they are amenable for use within parallel compute structures provided by MATLAB, such as 'parfor' loops, for which there are some specific challenges.

---
title: Christopher Woods talk about  How To Design And Engineer Good Code For Research
author: Becky Arnold
slug:
date: 
tags: SSI 
category:
link:
description:
type: text
---

![*Image courtesy of Nic Trott*](/assets/images/chrys-woods-talk-foss.png){: .img-fluid}

**By [Becky Arnold](https://software.ac.uk/fellows/becky-arnold),
[University of Sheffield](https://www.sheffield.ac.uk).**

On the 30th of January 2019, [Christopher Woods](https://chryswoods.com/), an EPSRC fellow at the [Advanced Computing Research Centre](https://www.bristol.ac.uk/acrc/) at the [University of Bristol](http://www.bristol.ac.uk/homepage/) gave a talk on "How To Design And Engineer Good Code For Research" at the University of Sheffield. Around seventy people attended to hear Chris talk about what makes code good, how to go about writing it, and how to make sure it’s reliable. The slides can be found [here](https://drive.google.com/file/d/1CBTAhCVixccui1DjeUT13qh6ga5SDXjl/view).

Chris first discussed the question of what does good code for research need to be, and gave three main criteria. 

- It needs to be flexible enough to adapt to evolving research questions
- It needs to be performance portable and fast enough for its intended purpose
- It needs to be trustably correct and “do what it says on the tin” 

Inevitably requirements of time, money and design mean that trying to meet these criteria will always be a trade off, however there are things a researcher can do to improve their compliance with them. These include thinking carefully about how you design and structure your code before “jumping in” and writing any. Further to this making your code as modular as possible and documenting it well both makes it more maintainable and reusable. 

Chris also talked at length about the importance of testing. This included a section of his “scare the principal investigator talk” covering cases where nonexistent or inadequate testing had huge reputational and financial costs, such as a case where a single incorrect character in a program led to five retractions from major journals including Science. Every program contains bugs, and tests may not be able to fully eliminate them, but they can dramatically increase your chances of catching them early and minimising the damage they do.

He went on to discuss different kinds of test, such as unit tests to check small pieces of code are working as expected, and systems tests which check that the pieces are working together correctly. Chris particularly advocated for runtime tests which test key aspects of the program as it runs. This allows problems to be caught early on, effectively “Minimising the blast radius”. Without runtime tests such errors will propagate until they either break something vital further on (making them difficult to trace and fix) or until the program ends without the user ever being aware that their result are compromised. Chris ended his talk with a piece of homework for everyone: write at least one test.

Chris’s talk will most likely be the last event I organise with my Software Sustainability Institute Fellowship funds, (a list of others I’ve run can be found at the [Programming Skills Sessions billboard](https://www.sheffield.ac.uk/physics/news/programming-skills-sessions) if you’re curious). This fellowship has given me a lot of wonderful opportunities which have changed the course of my life, and I look forward to following the work of the 2019 cohort of Fellows in the future.



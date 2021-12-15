---
category: lunchbytes
date: 2022-01-13
published: True
from: "12:00"
to: "13:00"
location: "Google Meet"
speaker: "Rob Chisholm (host, University of Sheffield RSE), Will Furnass (University of Sheffield IT Services), Paul Richmond (University of Sheffield RSE), Mike Griffiths (University of Sheffield IT Services)"
institute:
title: "Lunch bytes: Parallelisation: an easy trick to speed up your code?"
image:
redirect_from:
  - /events/LunchBytes-2021-12-02.html
  - /events/LunchBytes-2022-01-13.html
slides_url:
---

*This event was originally scheduled for the 2nd of December, but has been moved to January due to unforeseen circumstances.*

Parallelisation - running multiple pieces of work at the same time - can be a great way to speed up research code, but requires an appreciation of the costs introduced by distributing work concurrently over computational assets. This session will be made up of short talks introducing both fundamental concepts needed for successful use of parallelisation, and state of the art technologies available for researchers.

This session will take place on [Google Meet](https://meet.google.com/ozm-cops-ktj) and participants can join 15 minutes before the start of the session. 

We also have a [Google Jam Board](https://jamboard.google.com/d/1gxOkpOmEE2xwK7DFo1Lbql8nJ4SvGvafmzl0qEBVfbs) where you can note down any questions or comments before or during the event.

---

**Processes and doing things in parallel with multi-threading and multi-processing**

*Will Furnass*

We're to start the session by ensuring we have a common understanding of:

* What's the difference between and program and process?
* What are threads and how can we create them?
* How can we create more processes through forking?
* How can we do work in parallel using multiple threads and/or processes?

---

**OpenMP: Data parallelism in 2, 1, 3?**

*Paul Richmond*

OpenMP offers an easy way to add data parallelism to your existing code. In this talk I will provide a crash course in data parallelism and provide examples of just how simple it can be to use OpenMP to parallelise simple cases. For not so simple cases, I will identify the general approaches of what can be done and signpost to more complex approaches.

---

**Parallelisation using more than one computer**

*Mike Griffiths*

After a brief introduction to parallel computing using the Message passing interface (MPI) library this talk will use an example from a magnetohydrodynamics (MHD) simulation code, we will consider:

- How the work is parallelised using Message Passing Interface (MPI)
- How we converted it to a shared memory model (i.e. using single GPUs)
- Strategies for parallelization with multiple GPUs using MPI

---

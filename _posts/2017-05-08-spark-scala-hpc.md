---
title: Spark and Scala on Sheffield HPC systems
author: Mike Croucher
slug: spark-scala-sheffield-hpc
date: 2017-05-08 11:17:05 UTC
tags:
category:
link:
description:
type: text
---

As part of our support for a Large scale machine learning MSc course in Computer Science, the Sheffield RSE group put together a tutorial for how to use [Spark](http://spark.apache.org/) and Scala on [Sheffields HPC systems](https://docs.hpc.shef.ac.uk/en/latest/).
We are sharing with the rest of the community in case its useful to you [https://github.com/mikecroucher/Intro_to_HPC/blob/gh-pages/README.md](https://github.com/mikecroucher/Intro_to_HPC/blob/gh-pages/README.md) 

Its for people whove never used a HPC system before. By the time theyve finished, they are able to submit their own Spark jobs to the HPC cluster.
If anyone is interested in us re-running this as a workshop (it takes around 2 hours) let us know.

Some notes on our current implementation of Spark on HPC:-

 * We are currently restricted to jobs that run on one node. This is because Sheffields HPC clusters are not traditional Hadoop/Spark clusters and so some level of integration is required between Sun Grid Engine and Spark. We've only managed to get as far as implementing this across single nodes at the moment.

 * One way weve fudged this is to make sure that we provide our students with access to nodes with a LOT of memory  768 GB per node in fact, 12 times as much as you get on a normal node on ShARC or Iceberg. We are experimenting with allowing others access to our kit via a contribution based model. See [/community/resources-and-equipment//](/community/resources-and-equipment/) for details.



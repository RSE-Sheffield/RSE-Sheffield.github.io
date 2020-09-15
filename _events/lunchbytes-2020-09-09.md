---
category: lunchbytes
date: 2020-09-09
published: True
from: "12:00"
to: "13:00"
location: "Blackboard Collaborate"
speaker: "Joe Heffer, David Jones, Will Furnass"
institute: "University of Sheffield"
title: "Lunch bytes #1: writing safer (Python) code"
image:
slides_url:
---

What methods and tools can we use to make it easier to write less buggy Python software?
At this inaugural event we'll be exploring this question via three short talks.
Each will be ~10 minutes, leaving half an hour for discussion/questions.

[Blackboard Collaborate event](https://eu.bbcollab.com/guest/749647f98f5c4d788af118713e75b607)
(participants can join 15 mins before the start of the session).

[Google JamBoard for Q&A](https://jamboard.google.com/d/1AHQInvcGk5es3Tmk8--o9Rztt-L2AbNeYfhuo_-NL6s/): note down questions/comments (using JamBoard Sticky Notes) before/during the event.  

* [Video recording](https://digitalmedia.sheffield.ac.uk/media/1_muuuuhoj) of the session.
* [Intro/Outro slides](https://rse.shef.ac.uk/lunch-bytes-intro1/)

## Type hinting in Python

*Joe Heffer, Research Data Engineer, IT Services*

What on earth is that object?
Make your Python code more readable, for yourself and your collaborators,
reduce risk of incorrect inputs and increase your IDE productivity by
annotating your functions with type hints.

* [Google Slides](https://docs.google.com/presentation/d/1mFgQOG4zIZJW-Kl-STi8VnbekVgxzNF_JSO-UOzjHnU/edit?usp=sharing)

## A Practical Introduction to pytest

*David Jones, Research Software Engineer, RSE team*

You can test your Python code with pytest, one of the leading systems for testing Python code.
Here I will gently introduce you to pytest with practical examples. As pytest themselves put it pytest "helps you write better programs".

* [Slides](https://github.com/RSE-Sheffield/2020-09-talk-pytest)

## Avoiding 'side effects': writing functions that are easier to test

*Will Furnass, Research Software Engineer, RSE team*

Everyone who writes code needs to consider if/when/how to encapsulate code as functions.
But what makes for a good function that you can test/validate?  One strategy is to try to write a proportion of your functions so they don't have 'side effects', 
where a side effect is something like reading/writing a file or reading/writing data over a network.  
By creating functions that only return useful values and don't perform side effects functions can be much easier to test.  
Here we discuss why, when and when not to write functions without side effects.  
This talk should be of interest to those who write Python code and code in other languages.

* [Slides](https://willfurnass.github.io/avoiding-side-effects/#1)
* [Source for slides](https://github.com/willfurnass/avoiding-side-effects)

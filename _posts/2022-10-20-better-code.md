---
layout: post
title: "Writing better and more shareable code"
author: David Wilby
slug: 2022-10-20-better-code
date: 2022-10-20 12:00:00 UTC
tags: 
category:
link:
description:
social_image: 
type: text
excerpt_separator: <!--more-->
---

If you know how to write code, it's not actually that hard to make it better! You just need to know how.

This quick blog is intended to be fairly non-specific with regard to programming language, my experience is mainly with Python & MATLAB, but I believe the principles should extend to any language. In theory.

Firstly, what do I mean by "better" here? I mean:
* more readable
* less repetetive
* easier to debug
* less prone to errors
* simpler for others to use

Let's get into it.

<!--more-->

## 0. Keep variable names descriptive
I've heard the terrible advice to "keep your variable names short, it saves memory and is quicker to type" - maybe this is the case if you have RAM that's measured in kiloBytes, but in most applications these days we aren't worried about the sizes of our source code files. So make your variable names clear and descriptive.

I was once given a script where each variable was just called `A`, `B`, `C` and so on. Let me tell you, it was incredibly difficult to follow.

Instead, use a variable name that describes its content, such as `temperature_recordings` or `raw_data_frame` - a variable should only contain one sort of data, which shouldn't really change throughout your code's execution. Which brings me on to..

## 1. Don't reuse variables
This concept may follow from using well-named variables. For instance, if your code performs some data cleaning and validation, each operation should assign a new variable.

```py
data = "data/data.csv"

data = read_data(data)

data = clean_data(data)

data = validate_data(data)
```

is a lot less readable than

```py
data_path = "raw_data/01readings.csv"

raw_data = read_data(data_path)

cleaned_data = clean_data(raw_data)

validated_data = validate_data(cleaned_data)
```

This may be especially true if you're writing your code in notebooks, in which the cells could be run in any order, meaning that if the same variable names are used throughout, it's very difficult to tell what they contain at any stage of execution.

## 2. Use functions for repeated tasks
If you do the same job at many places throughout your code, instead of copying the same lines of code, write a function!
Functions take input variables (known as arguments), perform some operation and return a result.
In the above pseudocode example, `read_data()` might look like this:

```py
def read_data(filepath):
    data = read_csv(filepath)
    return data    
```

This is a very simple example, which already uses some imaginary built-in function called `read_csv()`, but if you need do do an operation numerous times, even with only a few lines of code, functions are the answer. This means that if you need to make a change, it only needs to be changed once in your code, and saves the mistake of missing one instance out.

Functions also have the benefit, in many cases, of making software testing possible. This is a strategy which helps you to validate the correctness of your code and is a great next step for writing better code.

## 3. Give functions sensible names
When you write a function, give it a sensible name, meaning that when reading your code it's easier to tell what that function is doing, just from its name, without having to go and read its source code.

Sometimes a language or community (or even within a project) may have a convention on function names. For example, if the function acquires the value of a variable, its name may begin with `get_`. Look up the conventions or style guide for the language you're using. Following standard practice also makes your code easier to follow.

Function names may also be a good indicator of whether you need to split your function down into smaller logical chunks. If you end up giving a function a very long name e.g. `add_numbers_and_export_them_to_spreadsheet`, then these steps may not logically go together, so should live in different functions.

## 4. Comments?
Writing comments inline with code is something that most people writing code know about. But is it always the answer?
Yes, comments can help to explain what's going on in your code and all code should have some.
But if you find you are writing large amounts of comments in your code what might be better is to write your code in a way that inherently makes it easier to understand.
If you follow the steps discussed so far, you may find that your code explains itself and comments are only needed in a few places.

## 5. Consider dependencies
If your code relies on another library, package or toolbox, that's what we call a dependency. Dependencies are needed to run your code, but aren't actually part of your codebase. In order for somone else to use your code (think about openly sharing your research) then they'll need to have those dependencies as well.
When writing your code, consider which depdendencies are required and make sure that when your code is shared, you also document which other dependencies are required and how to get hold of them.
One useful approach to dealing with dependencies is to turn you code into a package which will typically pull in the required dependencies when it is installed.
## Next steps?
These are all great steps to take and principles to consider when writing code. But how can we go further to write even better code?

Examples of best practice in writing code include:
* software testing
* documentation
* dependency management
* version control
---
key: gpy
---

Multiple output Gaussian processes are useful where several different measurements are made at different points in a parameter space, but not all measurements are made at each point. For example:

<embed src="http://gpss.cc/gpss17/slides/multipleOutputGPs.pdf#page=4" type="application/pdf">

A Gaussian process model can be created that allows prediction, with a measure of uncertainty, of any of the measurements at any point in the space. Furthermore, [inference of underlying functions driving the measurements](http://proceedings.mlr.press/v5/alvarez09a/alvarez09a.pdf) is also possible.

[GPy](https://github.com/SheffieldML/GPy) is a popular framework for Gaussian processes in written in Python. However, code to execute advanced multiple output Gaussian processes was only available in [MatLab](https://uk.mathworks.com/products/matlab.html), which is less widely used for Gaussian processes and less well suited as a development platform for this work.

The RSE involvement was in documenting aspects of GPy and converting MatLab code into reliable Python in the GPy framework. We used tests to compare code python code output to a MatLab baseline as a means of driving development. The architectural documentation contributes to the sustainability of GPy making it easier for new developers to add functionality and fix bugs.

Broader access to multiple output Gaussian process modelling is of potential benefit to a range of fields and activities. Examples include pollution modelling, robotics, gene regulation and financial services.
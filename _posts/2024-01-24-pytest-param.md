---
layout: post
title: "Pytest Parametrisation"
author: Neil Shephard
slug: pytest-param
date: 2024-01-24 12:00:00 UTC
tags: python pytest testing parametrisation
category:
link:
description:
social_image: https://live.staticflickr.com/65535/53258274023_f628d3291a_k.jpg
type: text
excerpt_separator: <!--more-->
---

[Pytest](https://docs.pytest.org/en/latest/) is an excellent framework for writing tests in
[Python](https://python.org). One of the neat features it includes is the ability to parameterise your tests which means
you can write one test and pass different sets of parameters into it to test the range of actions that the
function/method are meant to handle.

<!--more-->

<div style="width: 50%; margin:0 auto;"><img src="https://live.staticflickr.com/65535/53258274023_f628d3291a_k.jpg"
alt="Minerals"/><p>Photo by <a href="https://www.flickr.com/photos/slackline/53258274023/" target="_blank">Neil Shephard</a>.</p></div>

## Example

A simple example to work through is provided in my [ns-res/pytest_examples](https://github.com/ns-rse/pytest-examples)
repository. We want to have a state where the function can fail so we'll use a very simple function that carries out
division.

```python
def divide(a: float | int, b: float | int) -> float:
    """Divide a by b.

    Parameters
    ----------
    a: float | int
        Number to be divided.
    b: float | int
        Number to divide by.

    Returns
    -------
    float
        a divided by b.
    """
    try:
        return a / b
    except TypeError as e:
        if not isinstance(a, (int | float)):
            raise TypeError(f"Error 'a' should be int or float, not {type(a)}") from e
        raise TypeError(f"Error 'b' should be int or float, not {type(b)}") from e
    except ZeroDivisionError as e:
        raise ZeroDivisionError(f"Can not divide by {b}, choose another number.") from e
```

## Structuring Tests

Pytest is well written and will automatically find your tests in a few places. Personally I use a
[flat](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/) rather than `src/` based package
layout and keep my tests in the `tests/` directory of the package root. Pytest looks in this directory automatically for
files that begin with `test_` and within each file for functions/methods that begin with `test_`.

With the above function we could write the following basic test to make sure it works because we know that if we divide
`10` by `5` we should get `2` as the answer.

```python
from pytest_examples.divide import divide


def test_divide_unparameterised() -> None:
    """Test the divide function."""
    assert divide(10, 5) == 2
```

You can find this test along with others in the
[`tests/test_divide.py`](https://github.com/ns-rse/pytest-examples/blob/main/tests/test_divide.py) file of the
accompanying repository.

## Parameterising Tests

In order to make our test suite robust we should test more scenarios and edge cases, in particular making sure we
capture the exceptions that can be raised. This is where the
[`pytest.mark.parameterize()`](https://docs.pytest.org/en/7.1.x/reference/reference.html?#pytest-mark-parametrize)
fixture comes into play. It takes as a first argument a tuple of variables that you are going to define values for and
pass into your test. Following it is a list of tuples with the values that you want to include, one for each of the
variables you have first defined. Here we define `a`, `b` and the `expected` value of dividing `a` by `b` which is the
value the `divide()` function should return.

If we expand the number of scenarios we wish to test using `@pytest.mark.parametrize()` we can write our test as
follows.

```python
import pytest

from divide import divide
@pytest.mark.parametrize(
    ("a", "b", "expected"),
    [
        (10, 5, 2),
        (9, 3, 3),
        (5, 2, 2.5),

    ]
)
def test_divide(a: float | int, b: float | int, expected: float) -> None:
    """Test the divide function."""
    assert divide(a, b) == expected
```

## Parameter set IDs

For some time I simply wrote my tests and if the structure was complicated I used comments to mark the code to indicate
what the test was doing. When they (inevitably!) failed there was a cryptically long indication of what had failed based
on the filename, test name and the values of the various parameters that were in use at the point of failure. These
helped narrow down which test failed but took a bit of mental over-head to decipher.

For the above test _without_ ID's we can force them to fail by adding 1 to the expected value (i.e. `== expected + 1`)
and the resulting output shows how the parameters are concatenated to indicate which test failed.

```python
======================= short test summary info ====================================
FAILED tests/test_divide.py::test_divide_fail[10-5-2] - assert 2.0 == (2 + 1)
FAILED tests/test_divide.py::test_divide_fail[9-3-3] - assert 3.0 == (3 + 1)
FAILED tests/test_divide.py::test_divide_fail[5-2-2.5] - assert 2.5 == (2.5 + 1)
======================= 3 failed in 0.79s ==========================================
```

Whilst it is possible to work out which failed test is which if you have many sets of parameters with multiple values
and only one or two are failing it can take a while to work out which set has failed.

Recently though I was put onto the
[pytest.param()](https://docs.pytest.org/en/7.1.x/reference/reference.html?#pytest.param) function
by a [toot from @danjac@masto.ai](https://mastodon.social/@danjac@masto.ai/111674313059704725) and instantly saw the
benefit of using this as it allows us to give each set of parameters a unique `id` which is then used by Pytest when
reporting failures.

```python
@pytest.mark.parameterize(
    ("a", "b", "expected"),
    [
        pytest.param(10, 5, 2, id="ten divided by five"),
        pytest.param(9, 3, 3, id="nine divided by three"),
        pytest.param(5, 2, 2.5, id="five divided by two"),

    ]
)
def test_divide(a: float | int, b: float | int, expected: float) -> None:
    """Test the divide function."""
    assert divide(a, b) == expected
```

Then if/when a test fails the `id` parameter is reported for the failed test, making it much easier to narrow down where
the failure occurred.

Not only does it allow
each set of parameters to be given a unique `id = ""` to aid with identifying tests that fail it also allows each set of
parameters to be marked with `marks = <>` to indicate the expected behaviour for example
[`pytest.mark.xfail`](https://docs.pytest.org/en/7.1.x/reference/reference.html?#pytest-mark-xfail) or
[`pytest.mark.skipif`](https://docs.pytest.org/en/7.1.x/reference/reference.html?#id25).

We could therefore add another set of parameters that should fail because one of the exceptions is raised.

```python
import pytest

from pytest_examples.divide import divide


@pytest.mark.parameterize(
    ("a", "b", "expected"),
    [
        pytest.param(10, 5, 2, id="ten divided by five"),
        pytest.param(9, 3, 3, id="nine divided by three"),
        pytest.param(5, 2, 2.5, id="five divided by two"),
        pytest.param(
            10, 0, ZeroDivisionError, id="zero division error", marks=pytest.mark.xfail
        ),
    ],
)
def test_divide(a: float | int, b: float | int, expected: float) -> None:
    """Test the divide function."""
    assert divide(a, b) == expected
```

## Testing Exceptions

The above example shows that Pytest allows us to combine tests that pass and fail (in the above example a
`ZeroDivisionError`) via parmeterisation. However, whilst tests can and should be parameterised, some consider that it
is better to keep tests focused and on-topic and write a separate test for different outcomes such as raising
exceptions.

This is slightly different from the way the Pytest documentation suggests to undertake [Parameterising conditional
raising](https://docs.pytest.org/en/7.1.x/example/parametrize.html#parametrizing-conditional-raising) but there is a
school of thought, which I like, which states that testing different states/behaviours should be separate (see the
following thread for some discussion [Why should unit tests test only one
thing?](https://stackoverflow.com/questions/235025/why-should-unit-tests-test-only-one-thing)).

With this in mind we can separate out the tests that raise exceptions under different scenarios to their own tests
(**NB** obviously its excessive to parameterise `test-divide_zero_division_error()`).

```python
@pytest.mark.parametrize(
    ("a", "b", "exception"),
    [
        pytest.param("a", 5, TypeError, id="a is string"),
        pytest.param(9, "b", TypeError, id="b is string"),
        pytest.param([1], 2, TypeError, id="a is list"),
        pytest.param(10, [2], TypeError, id="b is list"),
    ],
)
def test_divide_type_errors(a: float | int, b: float | int, exception: float) -> None:
    """Test that TypeError is raised when objects other than int or float are passed as a and b."""
    with pytest.raises(exception):
        divide(a, b)
```

```python
@pytest.mark.parametrize(
    ("a", "b", "exception"),
    [
        pytest.param(10, 0, ZeroDivisionError, id="b is zero"),
    ],
)
def test_divide_zero_division_error(a: float | int, b: float | int, exception: float) -> None:
    """Test that ZeroDivsionError is raised when attempting to divide by zero."""
    with pytest.raises(exception):
        divide(a, b)
```

## Parameterising with Fixtures

[Fixtures](https://docs.pytest.org/en/stable/explanation/fixtures.html) are a common and useful feature of the Pytest
framework that allow you to define "_defined, reliable and consistent context for the tests_". What this means is that
if you always need a particular object, whether that is an instantiated class (a new instance of a class) or something
else, you can mark a function with `@pytest.fixture()` and use it in subsequent tests (often fixtures are defined in
`tests/conftest.py` to keep things tidy, at least that is what I do!)[^1].

It can be useful to parameterise fixtures themselves so that they too test a number of different states and this saves
writing more sets of parameters under the `@pytest.mark.parameterize()` decorator of each test.

For this example we use a simple function `summarise_shapes()` which returns the results of summarising a 2-D Numpy
array using [scikit-image](https://scikit-image.org) and its
[`skimage.measure.regionprops()`](https://scikit-image.org/docs/stable/api/skimage.measure.html#skimage.measure.regionprops)
function (see
[pytest_examples/shapes.py](https://github.com/ns-rse/pytest-examples/blob/main/pytest_examples/shapes.py)).

```python
"""Summarise Shapes."""
import numpy.typing as npt
from skimage import measure


def summarise_shape(shape: npt.NDArray) -> list:
    """
    Summarise the region properties of a 2D numpy array using Scikit-Image.

    Parameters
    ----------
    shape : npt.NDArray
        2D binary array of a shape.

    Returns
    -------
    list
        List of Region Properties each item describing one labelled region.
    """
    return measure.regionprops(shape)

```

We want to write some tests for these using fixtures which we define in `tests/conftest.py`. These define two
[Numpy](https://numpy.org/) 2-D binary arrays of `0`'s and `1`'s in particular shapes (the names should give an
indication of the shapes!)

```python
import numpy as np
import numpy.typing as npt
import pytest

from skimage import draw


@pytest.fixture
def square() -> npt.NDArray:
    """Return a 2D numpy array of a square."""
    square = np.zeros((6, 6), dtype=np.uint8)
    start = (1, 1)
    end = (5, 5)
    rr, cc = draw.rectangle_perimeter(start, end, shape=square.shape)
    square[rr, cc] = 1
    return square


@pytest.fixture
def circle() -> npt.NDArray:
    """Return a 2D numpy array of a circle."""
    circle = np.zeros((7, 7), dtype=np.uint8)
    rr, cc = draw.circle_perimeter(r=4, c=4, radius=2, shape=circle.shape)
    circle[rr, cc] = 1
    return circle
```

There are two different methods to using these fixtures in parameterised tests.

### request.getfixturevalue()

The first uses
[`request.getfixturevalue()`](https://docs.pytest.org/en/7.1.x/reference/reference.html?#pytest.FixtureRequest.getfixturevalue)
which "_is a special fixture providing information of the requesting test function._", in this case the "_named fixture
function_".

You define the fixture name (in quotes) in the `@pytest.mark.parametrize()` and then when the parameter, in this case
`shape`, is referred to in the test itself, you wrap it in `request.getfixturevalue()` and the named fixture is then
returned and used.

```python
"""Test the shapes module."""
import pytest

from pytest_examples.shapes import summarise_shape


@pytest.mark.parametrize(
    ("shape", "area", "feret_diameter_max", "centroid"),
    [
        pytest.param("square", 11, 7.810249675906654, (1.3636363636363635, 1.3636363636363635), id="summary of square"),
        pytest.param("circle", 12, 5.385164807134504, (4, 4), id="summary of circle"),
    ],
)
def test_summarise_shape_get_fixture_value(
    shape: str, area: float, feret_diameter_max: float, centroid: tuple, request
) -> None:
    """Test the summarisation of shapes."""
    shape_summary = summarise_shape(request.getfixturevalue(shape))
    assert shape_summary[0]["area"] == area
    assert shape_summary[0]["feret_diameter_max"] == feret_diameter_max
    assert shape_summary[0]["centroid"] == centroid

```

### pytest-lazy-fixture

An alternative is to use the Pytest plugin [pytest-lazy-fixture](https://github.com/tvorog/pytest-lazy-fixture) and
instead of marking the value to be obtained in the test itself you do so when setting up the parameters by referring to
the fixture name as an argument to `pytest.lazy_fixture()` within `@pytest.mark.parametrize()`.

```python
"""Test the shapes module."""
import pytest

from pytest_examples.shapes import summarise_shape


@pytest.mark.parametrize(
    ("shape", "area", "feret_diameter_max", "centroid"),
    [
        pytest.param(
            pytest.lazy_fixture("square"),
            11,
            7.810249675906654,
            (1.3636363636363635, 1.3636363636363635),
            id="summary of square",
        ),
        pytest.param(pytest.lazy_fixture("circle"), 12, 5.385164807134504, (4, 4), id="summary of circle"),
    ],
)
def test_summarise_shape_lazy_fixture(
    shape: str, area: float, feret_diameter_max: float, centroid: tuple, request
) -> None:
    """Test the summarisation of shapes."""
    shape_summary = summarise_shape(shape)
    print(f"{shape_summary[0]['centroid']=}")
    assert shape_summary[0]["area"] == area
    assert shape_summary[0]["feret_diameter_max"] == feret_diameter_max
    assert shape_summary[0]["centroid"] == centroid

```

## Parameterise Fixtures

The [pytest-lazy-fixture](https://github.com/tvorog/pytest-lazy-fixture) also allows fixtures themselves to be
parameterised using the `pytest_lazyfixture.lazy_fixture()` function and demonstrated in the packages
[README](https://github.com/tvorog/pytest-lazy-fixture#usage) which I've reproduced below.

The fixture called `some()` uses `lazy_fixture()` to include both the `one()` and the `two()` fixtures which return
their respective integers. `test_func()` then checks that the value returned by the `some()` fixture is in the list `[1,
2]`. Obviously this example is contrived but it serves to demonstrate how fixtures themselves can be parameterised.

```python
import pytest
from pytest_lazyfixture import lazy_fixture

@pytest.fixture(params=[
    lazy_fixture('one'),
    lazy_fixture('two')
])
def some(request):
    return request.param

@pytest.fixture
def one():
    return 1

@pytest.fixture
def two():
    return 2

def test_func(some):
    assert some in [1, 2]
```

## Conclusion

[Pytest](https://pytest.org) is a powerful and flexible suite for writing tests in Python. One of the strengths is the
ability to parameterise the tests to test multiple scenarios. This can include both successes and failures, however a
common approach is to separate tests based on the expected behaviour, although Pytest allows you the flexibility to
choose.

Ultimately though parameterising tests is a simple and effective way of reducing the amount of code you have to write to
unit-tests for different aspects of your code.

## Links

+ [Pytest](https://docs.pytest.org/en/latest/)
+ [Parametrizing tests — pytest documentation](https://docs.pytest.org/en/7.1.x/example/parametrize.html)
+ [Src Layout vs Flat Layout](https://packaging.python.org/en/latest/discussions/src-layout-vs-flat-layout/)
+ [pytest using fixtures as arguments in parametrize - Stack Overflow](https://stackoverflow.com/questions/42014484/pytest-using-fixtures-as-arguments-in-parametrize)
+ [How do you solve multiple asserts?](http://www.owenpellegrin.com/blog/testing/how-do-you-solve-multiple-asserts/)
+ [Why should unit tests test only one thing? - Stack
   Overflow](https://stackoverflow.com/questions/235025/why-should-unit-tests-test-only-one-thing)

[^1]: A caveat to this is the use of Random Number Generators as once seeded these can produce different numbers
    depending on the order in which the fixture is used but that is beyond the scope of this post.

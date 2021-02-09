# A modern small Python package

You should make a wheel.

You should use `pip` and `setuptools`.
If you create a conda environment with Python in,
it will have those components already available
(if everything is working properly).

You should create a `setup.cfg` with most of your metadata in.

You should make a wheel with

    python -m pip wheel .

You can distribute wheel files
(they are zip files with a `.whl` extension) by any means you
like (FTP, shared drive, e-mail).
You can make them _publicly accessible_ in a well known place by
putting them on `pypi.org`.
You should use `twine` for that.


::sidebox:

    Why do I prefer `python -m pip` over `pip`?

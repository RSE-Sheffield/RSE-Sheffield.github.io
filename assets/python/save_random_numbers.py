import numpy as np
from pathlib import Path
import csv


def save_random_numbers(
    size: int, seed: int = 87653546, save_as: Union[str, Path] = "./random_numbers.txt"
) -> None:
    """Save a list of random numbers (floats) to the given file.

    The stated number of random numbers will be saved to the given target file, if the directory structure
    doesn't exist it will be created. Output will by default be over-written.

    Parameters
    ----------
    size : int
        Number of random numbers to generate
    seed: int
        Seed for random number generation
    save_as : Union[str, Path]
        Directory/file to save numbers to.
    """
    rng = np.random.default_rng()
    random_numbers = rng.random(size)

    with Path(save_as).open("w") as out:
        writer = csv.write(out)
        writer.writerows(random_numbers)

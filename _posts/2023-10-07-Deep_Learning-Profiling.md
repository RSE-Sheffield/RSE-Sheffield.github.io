---
layout: post
title: "Profiling Deep Learning Code with Tensorflow"
author: Edwin Brown
slug: 2023-10-07-python-packaging
date: 2023-10-07 12:00:00 UTC
tags: python deep-learning profiling
category:
link:
description:
social_image:
type: text
excerpt_separator: <!--more-->
---

# How do I make my deep learning code run quicker?


Deep Learning is a subfield of Machine Learning and is often very computationally expensive. But how do we know which parts of our code can be changed to make it run faster?
**Profiling** is the process of measuring the resources used by a program. It can be used to tell the developer which parts of their code take the longest to run aswell as the  memory usage.
In this blog, we will profile a simple deep learning training script to identify how we can make it run faster. This blog will be using the Tensorflow deep learning framework and we will be visualising the profiling results using Tensorboard.

## How do I profile my code?

A generic deep learning training script is shown below:

```
data = get_data(“path_to_my_data”)

model = get_model()

model.compile(...)

model.fit(data)
```

To profile a training script within the Tensorflow framework, we use the **TensorBoard callback**. A callback is a function that is called at certain points during the training process. The TensorBoard callback will write the profiling results to a directory that can be visualised using TensorBoard. The two arguments of interest are the **logs_dir** and **profile_batch** arguments. The **logs_dir** argument is the directory where the profiling results will be written to. The **profile_batch** argument is a tuple of two integers. The first integer is the batch number to start profiling and the second integer is the batch number to stop profiling.  The default value for the **profile_batch** argument is (2, 20). This means that profiling will start at the second batch and stop at the 20th batch.



```
tb_callback = tf.keras.callbacks.TensorBoard(
    logs_dir = ‘logs’, profile_batch=(2, 20)
    )

model.fit(data, callbacks=[tb_callback])
```

**Tip: It is generally advisable to avoid profiling the first batch as it will not be representative of the rest of the training process.**

## How do I visualise the profiling results?

The above code will write the profiling results to the **logs** directory. To visualise the profiling results, we can use the TensorBoard command line tool. To view the profiling results, we need to run the following command on the command line:

```
tensorboard --logdir logs/
```

This will start a TensorBoard server on port 6006. We can then view the profiling results by navigating to http://localhost:6006/ in our web browser.

**Tip: If this work is being done on a machine that doesn't have a browser (i.e. HPC), then the logs/ directory will need to be copied to the users local machine to view the results.**


After navigating to the profile tab, we should see something like this:

![Figure 1: ](/assets/images/2023-10-07-Deep_Learning-Profiling/001_tensorboard.png)

We will explore some of the features shown on this screen in the following examples.


## Setup

gpu vs cpu. Define both. Diagram of workflow.

Emphasis that GPU utilization is vital.


## Run 1

A typical data pipeline in tensorflow looks something like this:

```
# Take a list of str paths to the input data on disk and convert into a tf Dataset object.
dataset = tf.data.Dataset(list_of_image_paths)

# Map a processing function to each image
dataset - dataset.map(proc_func)

# Batch the data
dataset = dataset.batch(batch_size)
```

The `proc_func` is a function responsible for reading the data from disk and performing any preprocessing on the data before it goes into training. Below is my processing function:

```
def proc_image(image_path):

    # Read and decode the data into a tensor
    image = tf.io.read_file(image_path)
    image = tf.io.decode_png(image, channels=3)

    # Centrally crop the image to the middle 75% of the image
    image = tf.image.central_crop(image, central_fraction=0.75)

    # Apply random transformations to augment the data. This can help with overfitting
    image - tf.image.random_contrast(image, lower=0.1, upper=1)
    image = tf.image.random_saturation(image, lower=0.1, upper=1)

    # Finally resize the image
    image = tf.image.resize(image, (512, 512), method='linear')
    return image

```

This kind of processing is common in a deep learning pipeline because of data being too big to load directly into RAM and random augmentation being desirable. However, what impact does this kind of data pipeline have on training?

![Figure 2: ](/assets/images/2023-10-07-Deep_Learning-Profiling/002_run1_time_graph.png)

The step time graph (Figure 2) indicates how much time the program spends on different tasks. The two tasks we are most interested in are Device Compute and Input. Device Compute is the time the program spends computing on the GPU. Input is the time spent reading and preparing data.

The step time graph shows that a batch of data takes ~800ms to run through the code. Of that 800ms, about 50% is compute on the GPU and ~40% is preparing the data. The trace viewer shows a large gap in the GPU run time where nothing is happening. Therefore, the conclusion is the GPU is idle for ~40% whilst input data is processed by the CPUs. As previously discussed, it is probabaly better if the GPU time is the bottleneck because GPU time is the expensive part of deep learning and often the hardware that is in demand.

## Run 2

The program is currently spending ~40% of its time preparing data, leaving the GPU idle. To reduce this time, we need to improve the input data pipeline. The first thing we can do is parallelise the processing function by spreading the work across multiple workers. This is controlled by the `num_parallel_calls` argument in the `map` method. The `num_parallel_calls` argument states how many CPUs the user wants to use to process the data.

The second thing we can do is to prefetch the data. This means that the CPUs will be preparing the next batch of data whilst the GPU is computing on the current batch. This is controlled by the `prefetch` method with the `buffer_size` argument that states how many batches of data the user wants to prepare wilst the GPU is working.

Finally, choosing values for parameters such as `buffer_size` and `num_parallel_calls` can be tricky. However, TensoFlow has the option to dynamically optimise these values so the user doesn't have to define it. This is done using `tf.data.AUTOTUNE`. The updated data pipeline looks like this:


```
dataset = tf.data.Dataset(list_of_paths)

dataset = dataset.map(proc_func, num_parallel_calls=tf.data.AUTOTUNE)

dataset = dataset.batch(batch_size).prefetch(tf.data.AUTOTUNE)
```

What impact does this have on the run time? The new step time graph is shown below shows that the input time is now no longer significant and the GPU is now the bottleneck. **The time to process a batch has now reduced from ~800ms to ~500ms.**

Note: I have no idea what the blue spike is.

![Figure 3: ](/assets/images/2023-10-07-Deep_Learning-Profiling/004_run2_time_graph.png)

## Run 3

Now the GPU is the bottleneck, we need to work at reducing the time the GPU takes to compute a batch of data. One option is to enable mixed precision. Mixed precision is a technique that uses a combination of 16-bit and 32-bit floating point numbers to reduce the memory usage and increase the speed of training. This is controlled by the `mixed_precision` argument in the `tf.keras.mixed_precision.experimental.set_policy` method. To enable this, we simply add to following code to the top of our script:

```
policy = tf.keras.mixed_precision.Policy("mixed_float16")
tf.keras.mixed_precision.set_global_policy(policy)
```

The new step time graph is shown below. **The average time to process a batch has now reduced from 520ms to 281ms.** Furthermore, we use the memory profile tab in TensorBoard to view the memory usage with and without mixed precision. This dmeonstrates how the memory usage is reduced when using mixed precision which is vital if the user wants to incerase the batch size or use larger models with the same hardware.

![Figure 4: ](/assets/images/2023-10-07-Deep_Learning-Profiling/006_run3_time_graph.png)

![Figure 5: ](/assets/images/2023-10-07-Deep_Learning-Profiling/007_run3_memory_viewer.png)


## Run 4

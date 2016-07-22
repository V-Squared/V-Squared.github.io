---
layout: page
title: CPU
subtitle: How to choose the CPU.
abstract: Description of different CPU options ranging from entry level to high end. Covers  specifications, benchmarks, and recommendations for each processor. 
issueNo: 137
readiness:
   - develop-active
---

# Table of Contents

[TOC]

# Introduction

## The problem this article solves

There are a huge number of CPUs out there. Each one varies in performance, size, and cost. There are also other elements to take into consideration, such as motherboard socket, integrated GPUs and RAID controllers, the types of applications you plan to use on your computer, and many other factors. This article goes through these issues.

## How this Article solves the problem

This Article is part of two community projects, all designed to simplify building DIY PCs

- **V²Configurator:** GitHub Project. The Configurator assists you when configuration your PC
- **This Article Series:** In depth Know How. In case you want to tune Ready Made Configurations of the V² Configurator

## Is there an easier way

Yes! Learning how to choose components for a DIY computer is time consuming. This is why we created a shortcut for you. Go to the V²Configurator and open the wizard. Pick your field of application,  e.g. photography and then pick the main use and the configurator will custom build a complete computer for you, optimized for your use case and performance class.


# How this Article works

## CPU Classes

    **Photo Placement**
        - three vicases side by side, horizontal stack
        - one with a single "$", another with "$$", another with "$$$"

This Article is providing choices of CPUs divided into three performance classes:

1. **Entry Level:** Total cost of Computer: $700+
2. **Mid Range:** Total cost of Computer: $1100+
3. **High End:** Total cost of Computer: $1800+



## Side by side comparison
We have selected four CPUs covering the range from lowest cost to most powerful. We put them into one table for easy side by side comparison. All features are explained in another table.

## Assign CPUs to Use Cases
To make picking a CPU easier the V²Configurator simply asks you about your field of application and main use case and then picks the right CPU for you.


# CPU Comparison

## CPU Comparison Table

{:.uk-table.uk-table-hover.table-header-row-column}

| CPU Feature  | Entry CPU | Mid CPU  | High CPU Value | High CPU Performance |
|--------------|-----------|----------|----------------|----------------------|
| Model►Name   | Intel i3  | Intel i5 | Intel i7       | Intel i7             |
| Model►Series | 6300      | 6600     | 6700           | 6700k                |
| Model►Series | Skylake   | Skylake  | Skylake        | Skylake              |
|Model►# of Cores  | 2         | 4        | 8              | 8                    |
|Perf►Clock  | 3.7       | 3.3      | 3.4            | 4.0                  |
| Perf►L2 Cache     | 2x256KB   | 4x256KB  | 4x256KB        | 4x256KB              |
| Perf►L3 Cache     | 4MB       | 6MB      | 8MB            | 8MB                  |
| Perf►Overclocking | No        | No       | No             | Yes                  |
| Misc►Socket   | 1151      | 1151     | 1151           | 1151                 |
| Misc►Power TDP    |   51      | 65       | 65             | 91                   |
| Mem►Max Memory   | 64        | 64       | 64             | 64                   |
| Perf►CPU Bench    |5500       |7050      |10000           |11000                 |
| Disk►RAID5 |     ?     |    Yes   |     Yes        |      Yes             |
| Perf►Max Resolution|  4K@60hz  |  4K@60hz |   4K@60hz      |       4K@60hz      |
| Price        |    $119    |  $230     |     $300        |           $344        |

## CPU Features explained

{:.uk-table.uk-table-hover.table-header-row-column}

| CPU Feature | Feature explained |
|--------------------:|:------------------|
|Model►Name|Model Name of the CPU. It is easy to find exactly this CPU in any online shop searching the Model Name|
|Model►Brand|Brand of CPU. Make sure the Motherboard you choose is for the same brand|
|Model►Series|Series of CPU|
|Model►Core Name|Name of the Core. Useful if you want to search for similar CPUs in your favorite online shop|
|Model►# of Cores|More cores of the same Model will be faster, but also use more power|
|Perf►Clock|Maximum clock speed by factory settings|
|Perf►L2 Cache|Extremely fast memory. More of it is better|
|Perf►L3 Cache|Slower than L2 cache, but faster than DDR memory. More is better|
|Perf►CPU Bench|Rating in www.cpubenchmark.net|
|Perf►GPU Bench|Rating in http://www.videocardbenchmark.net/|
|Perf►Max Resolution|Max Resolution of Display connected to Motherboard|
|Perf►Overclocking| Does the vendor allow overclocking?)|
|Misc►Socket|Name of Socket. Make sure to use a Motherboard with same socket|
|Misc►Power TDP|Maximum Thermal Design Power aka TDP. Make sure to use a CPU cooler that can handle the power|
|Mem►Max Size|Max Size of Memory|
|Mem►Speed|Max Clock Speed Speed of Memory in MHz|
|Disk►RAID5|Requires at least 3 Disks. Makes your HDD significantly faster and the same time makes your data more safe. Even when one disk can fails you will still have all data.|

### List of CPUs (with Tag Lines)

- [i3-6100](https://www.amazon.com/Intel-BX80662I36100-i3-6100-Cache-Processor/dp/B015VPX2EO/ref=sr_1_1?) $119  - Intel - EntryRange
- [i5-6600](https://www.amazon.com/Intel-I5-6600-FC-LGA14C-Processor-BX80662I56600/dp/B0136JONRM/ref=sr_1_fkmr0_1?) $230   - Intel - Fast Mid Range
- [i7-6700](https://www.amazon.com/Intel-I7-6700-FC-LGA14C-Processor-BX80662I76700/dp/B0136JONG8/ref=sr_1_3?) $300  - Intel - High End
- [i7-6700K](https://www.amazon.com/Intel-Boxed-I7-6700K-Processor-BX80662I76700K/dp/B012M8LXQW/ref=sr_1_2?) $344  - Intel - Extreme

### CPU Benchmarks

{:.uk-table.uk-table-hover.table-header-row-column}

|CPU Name         |Benchmark|
|----------------:|:--------|
|i3-6100|5500|
|i5-6600|7050|
|i7-6700|10000 |
|i7-6700K|11000|

- Numbers taken from www.cpubenchmark.net

# About Intel CPU Sockets

## Overview

    **Photo Placement**
        -four images, horizontal stack
        -Intel socket images, (1156, sandy bridge, haswell, skylake)


{:.uk-table.uk-table-hover.table-header-row-column}

|Feature       | LGA 1156     |LGA 1155       | LGA 1150    | LGA 1151 |
|-------------:|:-------------|:---------------|:------------|:--------------------|
|Pin Number    | 1156         |1155           | 1150        |1151   |
|Introduced    | 2009         |2011           |2013         |2015  |
|USB           | USB 2        | USB 2         | USB 3       | USB 3 |
|PCIe          | PCIe 2       | PCIe 2        | PCIe 3      | PCIe 3 |
|Mem           | DDR3         |DDR3           | DDR3        | DDR4 |
|SATA          | SATA 2       | SATA 3        | SATA 3      | SATA 3 |


## Reference on Intel CPU Sockets
- https://en.wikipedia.org/wiki/LGA_1156
- https://en.wikipedia.org/wiki/LGA_1155
- https://en.wikipedia.org/wiki/LGA_1150
- https://en.wikipedia.org/wiki/LGA_1151

## Advice for choosing a CPU

    **Photo Placement**
        -Pheonix shopping, choosing CPU
        -Several CPUs in a store isle on the shelf
        

### Intel 6100 i3

Entry level i-series from Intel. Two cores but uses Intel hyper-threading, making two virtual cores for a total of 4. High base clock speed and strong enough for non-CPU heavy gaming, photo editing, or light 3D-modeling. 

### Intel 6600 i5

This is the latest generation of Quad Core CPU. Choose this CPU for High End Gaming, Video Editing, Audio Editing, Photo Editing, 3D Design or other very demanding applications. Instead of going all the way to an i7 Quad Core you often get higher performance for your money by investing into a PCIe Add In Card of the type corresponding to your application. 

### Intel 6700 i7

High end consumer model that supports hyper-threading; the Intel i7 series has 4 physical cores but this technology also has 4 virtual cores, giving 8 core performance. This is extremely valuable for CPU intensive applications, such as 3d model rendering. Compared the the i5 series, hyper-threading is the only real advantage when choosing the i7 model. Not a processor suited for gamers as 8 cores isn't necessary for games, but a worthwhile purchase for professional work.

### Intel 6700k i7

Ultimate consumer CPU. Higher base clock speed as the 6700 with an unlocked core, allowing the user to overclock the processor. We do not recommend overclocking to everyone as it can shorten the lifespan of the CPU, increase power consumption, and cause potential lock-ups with the system, but overclocking can be a great way to increase performance for applications that depend on clock speed.


# Where to find more Information

## Newegg CPU Section
This is a great way to start: [Power Search: Processors - Desktops](http://www.newegg.com/Product/PowerSearch.aspx?SubCategory=343&N=100007671&IsNodeId=1)

## CPU Benchmarks
- http://www.cpubenchmark.net/
- Use Google search engine to find the benchmark you are looking for

## GPU Benchmarks
- http://videocardbenchmark.net/
- Use Google search engine to find the benchmark you are looking for

## CPU Data Sheet
- Search in Google for "Data Sheet" + CPU Model
- Pick the link based on: http://ark.intel.com/products/
- Example: [Data Sheet Intel® Core™ i7-6700K Processor](Intel® Core™ i7-6700K Processor )








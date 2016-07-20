---
layout: page
title: RAID Disks
subtitle: How to choose RAID Disks.
abstract: Lorem Ipsum dolar sit at met. Lorem Ipsum dolar sit at met. Lorem Ipsum dolar sit at met.
issueNo: 163
readiness:
   - is-complete
   - is-active
---

# Introduction
## The Problem this Article solves
The operating system (OS) is the platform your computer will run on. The three main operating systems, Windows, Mac OS X, and Linux, all have core similarities; each has file explorers, applications to run, and user interfaces to navigate, although each is done differently. Depending on your field of work, certain OSs will serve you better. 

## How this Article solves the problem
This Article is part of three community projects, all designed to simplify building DIY PCs

- **ViCase:** Indiegogo Project. A DIY Mini and All-IN-One Computer Case System
- **V²Configurator:** GitHub Project. The Configurator assists you when configuration your PC
- **This Article Series:** In depth Know How. In case you want to tune Ready Made Configurations of the V² Configurator

## Is there an easier way?
Yes! Learning how to choose components for a DIY computer is time consuming. This is why we created a shortcut for you. Go to the V²Configurator and open the Wizard. Pick your Field of Application, say e.g. Photography and then pick the Main Use and the Configurator will custom build a complete computer for you, optimized for your Use Case and Performance class.


# What is RAID?
RAID (redundant array of independent disks) is the combination of a number of drives to store the same data on each one (in most cases). Doing this increases read performance (how fast info is taken from a drive) and data security as information is stored in multiple disks. In the operating system, a RAID configuration is seen as a single drive within the device manager.


# Why do you need RAID?

RAID can be an inexpensive method of having faster storage or lower the chance of losing valuable data.

{:.uk-table.uk-table-hover.table-header-row-column}

|                       | RAID 0                                    | RAID 1         | RAID 5         | RAID 6                                           | RAID 10                           |
|-----------------------|-------------------------------------------|----------------|----------------|--------------------------------------------------|-----------------------------------|
| Min. # of Disks       | 2                                         | 2              | 3              | 4                                                | 4                                 |
| Read Performance      | Optimal                                   | Optimal        | Optimal        | Optimal                                          | Optimal                           |
| Write Performance     | Optimal                                   | Decent         | Low            | Low                                              | Decent                            |
| Data Protection       | None                                      | One-drive fail | One-drive fail | One-drive fail                                   | One drive per sub-array           |
| Storage % Utilization | 100%                                      | 50%            | ~75%           | -65%                                             | 50%                               |
| User Scenario         | Gaming, real-time rendering, data logging | Boot drive,    | Data warehouse | Data archive, disk backup, large capacity server | Fast database, application server |


# RAID Configurations


## RAID 0

Disk blocks are striped, diving data across the drives. This configuration has the same data on both disks, doubling the performance but not giving any added security to the data. Great for increasing read/write speed of your drives and ideal for fast loading in games, real-time rendering, and speed-oriented applications. 


## RAID 1

Mirrors the disk data, putting the same information on two disks. Much more reliable (information still usable if one disk fails) and read performance is increased. Write performance is the same as a single disk so not as fast compared to RAID 0, but a better option if data reliability is more important than performance.

## RAID 5

Disks in a striping configuration (similar to RAID 0) except one disk is dedicated to parity information. This is aimed to detect errors in the other disks.

## RAID 6



## RAID 10



reference: http://searchstorage.techtarget.com/definition/RAID

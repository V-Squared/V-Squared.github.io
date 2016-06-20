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

# What is RAID?
RAID (redundant array of independent disks) is the combination of a number of drives to store the same data on each one (in most cases). Doing this increases read performance (how fast info is taken from a drive) and data security as information is stored in multiple disks. In the operating system, a RAID configuration is seen as a single drive within the device manager.

# Why do you need RAID?
RAID can be an inexpensive method of having faster storage or lower the chance of losing valuable data. 

# RAID Configurations
## RAID 0
Disk blocks are striped, diving data across the drives. This configuration has the same data on both disks, doubling the performance but not giving any added security to the data. Great for increasing read/write speed of your drives.
## RAID 1
Mirrors the disk data, putting the same information on two disks. Much more reliable (information still useable if one disk fails) and read performance is increased. Write performance is the same as a single disk so not as fast compared to RAID 0, but a better option if data reliability is more important than performance.
## RAID 3
Disks in a striping configuration (similar to RAID 0) except one disk is dedicated to parity information. This is aimed to detect errors in the other disks.
## RAID 4
Similar to RAID 3, but uses larger block paritys.
## RAID 5

## RAID 6
Two parity schemes distributed across multiple drives, letting two drives fail without loss of data. High cost and slower write performance.


refefence: http://searchstorage.techtarget.com/definition/RAID

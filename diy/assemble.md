---
layout: page
title: Workstation PC Assembly
subtitle: Tutorials on how to Assemble a Custom Workstation PC.
abstract: >
  Building a custom workstation PC can save hundreds of dollars and it can give you the exact computer you want, that may not be available otherwise. At the same time it can be a daunting and time consuming experience to the new comer. These step by step tutorials in combination with the ViCase design optimized for easy assembly will make your assembly experience easy and free of headaches.
readiness:
   - is-complete
---


One Motherboard only will allow to build base models and test them. For more information, please see the → "Proposed assembly workflow" below.

## All memory are DDR4
This reduces inventory burden and parts management overhead.

## Memory, CPU, GPU are easy to change
After the PC is already assembled and tested you can do the final assembly even without a screw driver. Just open the top cover, change parts, close cover. Voila!

## Disks are almost easy to change
We minimize the number of time that the SSD ned to be changed. We have one common SSD in all models: 250 GB. The procedure for changing disks:

1. Open 4 motherboard screws and remove the motherboard.
2. Open 4 screws on bottom of case to loosen the Disk Screws
3. Slide the disk out of the bay. Keep screws and rubber grommets mounted.

# Proposed assembly workflow
## Split Assembly into Base-Assembly and Final-Build
**Benefits:**

1. Better workload balancing. In times of few orders you can build and test base systems
2. When order comes in the assembly of the Final-Build is fast

## Base-Assembly
1. Assembly of Case + PSU + Cable Tree + Arduino in ViPanel
2. Assembly of Motherboard. 
	1. If you received new CPU and Memory, insert those so you can make IQC
	2. If have no CPU and memory, use the Pentium G CPU and burn in memory
3. Add the burn in boot disk. It is a 64 GB Linux SSD configured to automatically test all components. We have a custom burn in software that works with the PSU Monitoring in Arduino + ViPanel.
4. Run 4 hours burn in

## Final Assembly
1. Receive customer order
2. Take CPU, Disks, Memory and GPU from shelf or order with vendor
3. Final Assembly
4. Final Test and Burn in. If system was build from parts that all have been burned in already, the final burn in can be only 30 minutes. Otherwise 4 hours.

## Packaging
ViCase shipment comes from Village with additional packaging materials to package the assembled ViCase securely and on top of it to provide additional fastening of the large parts: CPU Cooler, GPU Card and PSU.

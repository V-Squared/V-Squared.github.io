---
layout: page
title: Boot Disk
subtitle: How to choose the Boot Disk.
abstract: Lorem Ipsum dolar sit at met. Lorem Ipsum dolar sit at met. Lorem Ipsum dolar sit at met.
issueNo: 161
readiness:
   - is-complete
   - is-active
---

# Table of Contents
[TOC]




# Introduction
## The Problem this Article solves
When building your custom PC you need to choose your Boot Disk. You get your pick out of 3 physical disk interfaces, several mechanical form factors, storage technologies and of course lots of brands and capacities. This Article sorts it all out and helps you to find the right Boot Disk for your computer.

## How this Article solves the problem
This Article is part of three community projects, all designed to simplify building DIY PCs

- **ViCase:** Indiegogo Project. A DIY Mini and All-IN-One Computer Case System
- **V²Configurator:** GitHub Project. The Configurator assists you when configuration your PC
- **This Article Series:** In depth Know How. In case you want to tune Ready Made Configurations of the V² Configurator

## Is there an easier way?
Yes! Learning how to choose components for a DIY computer is time consuming. This is why we created a shortcut for you. Go to the V²Configurator and open the Wizard. Pick your Field of Application, say e.g. Photography and then pick the Main Use and the Configurator will custom build a complete computer for you, optimized for your Use Case and Performance class.


# Understanding Disk Technologies for Boot Disk

## SSD vs HDD for Boot Disk
In terms of speeding up a PC, nothing beats value for money over using an SSD. As such all our Ready Made Configuration use SSD as Boot Disk. At small sizes SSD are even lower cost than HDD. For $40 US you can get a 120 GB SSD. Enough space for boot disk and and work data. If however you want to store large amounts of data, say photos, videos, etc..., then we recommend your Data to be stored on a second HDD for cost reasons. Using RAID 5 technology, you can make HDD quite save and fast. More about that in the Article → [How to choose your Data Disks](https://github.com/V-Squared/v2-How-to-DIY-Mini-PC/wiki/How-to-choose-the-Data-Disks) or → [V²Configurator](http://v-squared.github.io/v2-Configurator/)►6. PC Parts►Data Disk (Single). 

## Why it is important that the Boot-Disk is fast?
1. The responsiveness of your computer depends on the responsiveness of the disk which your Operating Systems uses to boot. Faster Boot Disk will make your PC feel to you much faster.
2. Installer defaults will assume that your Boot-Disk is the fastest disk in your system and will put caches on the Boot-Disk. If your Boot-Disk is not the fastest disk, by default your Apps will run slower.

## Can't every disk boot?
Unfortunately not. The latest M2 and NVME will not always boot. Due to the importance of the Boot Disk to be the fastest Disk in your system, we made the extra effort to build every configuration so that the fastest disk is always the Boot-Disk.

## SATA3 vs NVME-M.2 vs NVME-PCIe
Nowadays SSDs are faster than SATA 3. In response the industry developed M2 Modules and NVME PCIe Add In Cards. There are also NVME 2.5" disks, but they are not easy to connect. Here is a brief overview.

|Feature                  |SATA3 SSD 2.5" | M2 Module  | PCIe NVME   |
|------------------------:|:-------------:|:----------:|:-----------:|
|Theoretical Max Speed    | 0.65 GBps     | 4 GBps     | 4 GBps      |
|Practical Max Speed      | 0.65 GBps     | 2.5 GBps   | 2.5 GBps    |
|Motherboard Compatibility| every         | Z170       | Z170        |
|Boot in BIOS Mode        | Yes           | No         | No          |
|Boot in UEFI Mode        | Yes           | Yes        | Yes         |
|Win Support out of box   | 7, 8, 10      | 10         | 10          |
|Ubuntu Support           | since ever    | 14.04 LTS +| 14.04 LTS + |
|Speed @ 100% workload    | 100%          | 50%        | 100%        |

Conclusion: Today M2 and PCIe NVME can be 300% faster than your SATA SSD. But you need latest OS and latest motherboard in order for it to be easy to install and so that booting from these disks is supported out of the box. Also care during installation need to be taken to use the Disk in UEFI Mode. These disks are trouble to install and are more expensive, but they give you a 300% performance increase, which can be very significant, depending on your Application. Please also note that M2 modules quickly overheat and throttle down the speed. This is OK for typical consumer use, such a loading a game, but this is not OK in server or professional applications. In such cases choose the PCIe NVME. They have a large heat sink integrated and do not have a problem of overheating. 

We have mitigated the M2 overheating problem somewhat, by a) choosing a module that runs cooler and b) offering a heat sink to cool the IC that is getting hot.

## What about NVME 2.5" Disks?
Simply put, they forgot to standardize the cables to connect to a motherboard. Wherever we looked, people avoided using these drives in use cases requiring direct connection to a motherboard. In such case simply use the PCIe Add In Card version.

## What about mSATA?
We build systems with mSATA. But they have two problems: a) They run significantly more hot than the 2.5" counterparts and b) mSATA to SATA adapter are finicky. Instead we choose to offer plenty of 2.5" bays to make your life easy and simply use 2.5" SSD disks. Cheaper, easier to buy, run cooler and better brands available.

## What about SSD SATA RAID 
You can stripe SATA SSD in RAID 0 to double the data rate or mirror the disks for higher availability. You need an Intel Motherboard that supports RAID. Only high end motherboards have this feature. 





# Choice of Boot Disk
- SATA3 2.5" SSD 120GB-$50 - Kingston - SSDNow V300 Series - SV300S37A/120G
- SATA3 2.5" SSD 250GB-$96 - Samsung - 850 EVO- MZ-75E250B/AM
- SATA RAID 0 SSD 500 GB $192 - 2x Samsung - 850 EVO- MZ-75E250B/AM
- SATA RAID 1 SSD 250 GB $192 - 2x Samsung - 850 EVO- MZ-75E250B/AM
- SATA3 2.5" SSD 500GB- $173 - Samsung - 850 EVO - MZ-7KE512BW
- SATA3 2.5" SSD 1TB- $366 - Samsung - 850 EVO - MZ-75E1T0B/AM
- NVME M.2 SSD 256 GB - $200 -  Samsung - 950 Pro - MZ-V5P256BW
- NVME M.2 SSD  512 GB - $350 -  Samsung - 950 Pro - MZ-V5P512BW
- NVME PCIe SSD 400 GB - $ 370 - Intel - 750 - SSDPEDMW400G4X1
- NVME PCIe SSD 800 GB - $ 700 - Intel - 750 - SSDPEDMW800G4X1


# Comparison Table

{:.uk-table.uk-table-hover.table-header-row-column}

| Disk       | Read Speed | Write Speed | Read IOPS  | Write IOPS  |
|-----------:|:----------:|:-----------:|:----------:|:-----------:|
|Average HDD        | 150 MB/s | 150 MB/s | 0.1K     | 0.1K        |
|SATA3 2.5" SSD 120GB| 450 MB/s | 450 MB/s | 85K      | 55K         |
|SATA3 2.5" SSD 250GB| 540 MB/s | 520 MB/s | 197K     | 88K         |
|SATA RAID 0 SSD 500 GB| 1000 MB/s| 1000 MB/s| 350k   | 140k        |
|SATA RAID 1 SSD 250 GB| 540 MB/s | 520 MB/s | 197K   | 88K         |
|SATA3 2.5" SSD 500GB| 540 MB/s | 520 MB/s | 98k      | 90K         |
|SATA3 2.5" SSD 1TB |  540 MB/s | 520 MB/s | 98k      | 90K         |
|NVME M.2 SSD 256GB | 2.2 GB/s | 900 MB/s | 270k     | 85K         |
|NVME M.2 SSD 512GB | 2.5 GB/s | 1.5 GB/s | 300k     | 110K        |
|NVME PCIe SSD 400GB| 2.2 GB/s | 900 MB/s | 430k     | 230k        |
|NVME PCIe SSD 800GB| 2.1 GB/s | 800 MB/s | 420k     | 210k        |

## Choice / Links / Reasoning
- [SATA3 2.5" SSD 120GB](http://www.newegg.com/Product/Product.aspx?Item=N82E16820721107&cm_re=SV300S37A%2f120G-_-20-721-107-_-Product) The cheapest one in NewEgg
- [SATA3 2.5" SSD 250GB](http://www.newegg.com/Product/Product.aspx?Item=9SIA2W02CZ2241) Common choice, good value, high speed, from SSD Leader Samsung
- [SATA RAID 0 SSD 500 GB](http://www.newegg.com/Product/Product.aspx?Item=9SIA2W02CZ2241) Twice the speed. Works only in High End Motherboard.
- [SATA RAID 1 SSD 250 GB](http://www.newegg.com/Product/Product.aspx?Item=9SIA2W02CZ2241) Redundant Boot Disk for high reliability. Works only in High End Motherboard.
- [SATA3 2.5" SSD 500GB](http://www.newegg.com/Product/Product.aspx?Item=9SIA2W02DV8166) Common choice, good value, high speed, from SSD Leader Samsung. The most common one in NewEgg.
- [SATA3 2.5" SSD 1TB](http://www.newegg.com/Product/Product.aspx?Item=9SIA12K2GN1593) Common choice, good value, high speed, from SSD Leader Samsung. The most common one in NewEgg.
- [NVME M.2 SSD 256 GB](http://www.newegg.com/Product/Product.aspx?Item=N82E16820147466) Newest, fastest M2 from SSD leader Samsung. 3 x faster than SATA 3
- [NVME M.2 SSD 512 GB](http://www.newegg.com/Product/Product.aspx?Item=N82E16820147467) Newest, fastest M2 from SSD leader Samsung 4 x faster than SATA 3
- [NVME PCIe SSD 400 GB](http://www.newegg.com/Product/Product.aspx?Item=N82E16820167359) Best value server grade SSD. Extremely fast for Database or Web Server Apps.
- [NVME PCIe SSD 800 GB](http://www.newegg.com/Product/Product.aspx?Item=N82E16820167361) Best value server grade SSD. Extremely fast for Database or Web Server Apps.


# Advice

## SSD vs HDD for Boot Disk
In terms of speeding up a PC, nothing beats value for money over using an SSD. As such all our Ready Made Configuration use SSD as Boot Disk. At small sizes SSD are even lower cost than HDD. For $40 US you can get a 120 GB SSD. Enough space for boot disk and and work data. If however you want to store large amounts of data, say photos, videos, etc..., then we recommend your Data to be stored on a second HDD for cost reasons. Using RAID 5 technology, you can make HDD quite save and fast. More about that in the Article ???How to choose your Data Disk???

## Why a fast Boot-Disk is so important?
1. The responsiveness of your computer depends on the responsiveness of the disk which your Operating Systems uses to boot. Faster Boot Disk will make your PC feel to you much faster.
2. Installer defaults will assume that your Boot-Disk is the fastest disk in your system and will put caches on the Boot-Disk. If your Boot-Disk is not the fastest disk, by default your Apps will run slower.

## Entry Level and Mid Range
Choose SATA 3 SSD for Entry Level and Mid Range PC configurations. They are low cost, fast, easy top install and compatible to all OS and Motherboards. If you are upgrading from a PC with an HDD you are in for a treat. Even the entry level SSD nowadays is 10 x faster the the best Desktop HDD from yesteryear. 

## High End
You have two choices for higher performance of SATA3 SSD: 1) RAID 0 of two SATA3 SSD. This will double the speed and capacity. Alternatively choose NVME M.2. For twice the cost you get about 300 ... 400% speed increase over SSD or 150 ... 200% of speed over RAID0 SSD. Bear in mind that this only works well with latest high end motherboards and latest OS and requires extra care during installation. When the time comes we will provide a How-To Video on YouTube.

## High Performance Server
Consumer M.2 modules overheat when loaded with the workload of a server and they also do not support that kind of workload. This is where the 750 Series from Intel fits in. In terms of IO Operations even faster than NVME M.2 modules and designed for the heavy load in a Server. In case you want to build a system with even more reliability, you can choose SSD RAID 1 for a redundant boot disk and choose the NVME-PCIe as Data Disk.

## Recommendations on capacities
For a regular PC running Windows 10 or Ubuntu and a bunch of Apps 120 GB will be fine. If your budget is not too tight for $50 US more you get 250 GB and have some room to grow. If you store a lot of Photos / Movies / Songs you will need more space. However, for these data a slower HDD will do in most cases and gives you more space for your money. For more information → Data Disk.

# Reference
- http://www.samsung.com/us/computer/ssd-evo
- http://www.samsung.com/us/computer/ssd-pro
- http://www.pcworld.com/article/2904340/intel-750-series-ssd-review-storage-so-fast-only-the-highest-end-pcs-can-keep-up.html
- http://www.pcworld.com/article/2899351/everything-you-need-to-know-about-nvme.html
- https://en.wikipedia.org/wiki/SATA_Express#U.2
- https://en.wikipedia.org/wiki/NVM_Express
 


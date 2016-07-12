---
layout: page
title: The Missing PC Standard
subtitle: White Paper on benefits of the new PC Standard and comparison to current standards
abstract: >
   This white paper compares the new *PC standard* V² Modular PC to the current All-In-One, Desktop and Mini PC standards, respectively pointing out the lack thereof. In that comparison the reason of being for the new PC standard becomes obvious as it fills a gap not covered by the current standards. 
issueNo: 209
contents:
   - name: Solving Problems
     url: solving-problems
     subitems:
        - name: Providing Missing Standards
          url: missing-standards
        - name: Active Development
          url: active-development
   - name: List of Missing Standards
     url: list-missing-standards
     subitems:
        - name: Overview Missing Standards
          url: overview-missing-standards
        - name: Modular PC Standards
          url: modular-pc-standards
        - name: Supporting PC Standards
          url: supporting-pc-standards
        - name: Modular All-In-One
          url: all-in-one-standards
   - name: Mission V² Standards
     url: mission-v-squared
     subitems:
        - name: Making V² Mainstream
          url: making-modular-pc-mainstream
        - name: Analogy to ATX Standard
          url: analogy-to-atx
   - name: Community Development
     url: community-development
     subitems:
        - name: Benefits
          url: benefits
        - name: Leading Contribution
          url: leading-contribution
        - name: Contribution Workflows    
          url: standardized-workflow
        - name: Contribution Standards
          url: contribution-standards
   - name: Plan
     url: plan-v-squared
     subitems:
        - name: Where we are today
          url: where-we-are-today
        - name: Detailed Plan
          url: detailed-plan
readiness:
   - is-complete
   - is-complete
   - is-active

table-symptoms-missing-standards:
   style: [twin-head,twin-blue]
   name: Symptons of the Missing Standards
   desc: Mini and All-In-One PCs are more expensive as a result of their missing standards.
   head: [Symptom, Mini & AiO PC, Desktop PC]
   rows:
     - data: [Development Cost, High, Low]
       color: [tp, rd, gn]
     - data: [Tooling Cost, High, Low]
       color: [tp, rd, gn]
     - data: [Production Cost, High, Low]
       color: [tp, rd, gn]
     - data: [Save Planet, Short Service Life, Long Service Life]
       color: [tp, rd, gn]
     - data: [Upgradeability, Very Limited, Completely Modular]
       color: [tp, rd, gn]

table-modular-pc-standards:
   style: [twin-head,twin-blue]
   name: Comparison of available standards by Form Factor
   desc: The new standard V² Modular PC provides the missing standards for Mini and All-In-One PC.
   head: [Standard, V² Modular PC †, Mini PC, All-In-One PC, ATX Desktop PC]
   rows:
     - data: [Case †, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [Motherboard, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [Power Supply, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [Disk Bays, ✓ , ✓ , ✓ , ✓]
       color: [tp, gn, gn, gn, gn]
     - data: [Memory Modules, ✓ , ✓ , ✓ , ✓]
       color: [tp, gn, gn, gn, gn]
     - data: [CPU Socket, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [CPU Cooling, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [GPU Expansion, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [IO Panel, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
     - data: [Cables, ✓ , — , — , ✓]
       color: [tp, gn, rd, rd, gn]
   footer: >
      **†** The *Modular All-In-One Standards as described below in combination with the V²Modular PC standards provide all necessary standards to build a standardized and modular All-In-One PC.

---



# Solving Problems {#solving-problems}

List of current problems of Desktop PCs and how V² Modular PC Standards solves them:

## Providing Missing Standards {#missing-standards}

### Problem 1: Missing Standards

The table → [PC Core Standards](https://v-squared.github.io/diy/compare/missing-standard/#modular-pc-standards) makes it obvious just how many standards are missing. Whereas the ATX Desktop PC provides all essential standards, the Mini and All-In-One PCs however are basically not standardized. This leads to a lot of problems described in the table below:

{% include table id="table-symptoms-missing-standards" %}


### Solution 1: Providing Missing Standards

The solution is obvious: Develop, publish and market the missing standards. This is exactly what V² Modular PC standards is all about. It is spelled out in → [Mission of V² Modular PC Standards](https://v-squared.github.io/diy/compare/missing-standard/#mission-v-squared) further down of this document.

## Active Development {#active-development}

### Problem 2: ATX has no Active Development

The set of ATX standards was developed by Intel and then published in 1995. It resides as a passive download repository of PDF files on on [www.formfactors.org](//www.formfactors.org). It has no True North, no forum, no bylaws, no contribution workflow. As a consequence no active development is happening, at the very least a visitor would not know how and where to contribute to. In over two decades the ATX Desktop PC has not adapted to the changing user demands of smaller and quieter PCs. This is the root cause that the form factors Mini PC and All-In-One PC have never been standardized. Leading to the problem of the → [Missing Standards](https://v-squared.github.io/diy/compare/missing-standard/#missing-standards).


### Solution 2: V² Community Development Platform

V² Modular PC is actively developed by its community. It resides on [https://v-squared.github.io/](https://v-squared.github.io/). When finished it not only hosts the standard documents, but a lot of additional infrastructure to assist makers, retailer and users. All documents are hosted on GitHub as *Open Source* under *Creative Commons License*. Development and contribution is documented as a → [Standardized Contribution Workflow](https://v-squared.github.io/diy/compare/missing-standard/#standardized-workflow). Anyone with a *GitHub* account can easily contribute. It works exactly like *Wikipedia* where a large community constantly updates its content. How we do this exactly is described in more details → [V² Community Development Platform](community-development) further down in this white paper.




# List of Missing Standards {#list-missing-standards}

## Overview Missing Standards {#overview-missing-standards}

{:.uk-table.twin-head-desc.twin-blue}

|                Standard | Description |
|------------------------:|:-------------:|
|    Modular PC Standards | Set of standards that cover all parts needed to build a modular Mini PC. |
| Supporting PC Standards | Set of standards that were not important at time of creation of the original set of ATX standards, yet became important until today. E.g. Airflow or Noise Management. |
|      Modular All-In-One | Set of standards that expand the Modular PC Standard to build modular All-In-One PCs. |


## Modular PC Standards {#modular-pc-standards}

Set of standards that cover all parts needed to build a modular Mini PC.

{% include table id="table-modular-pc-standards" %}





## Supporting PC Standards {#supporting-pc-standards}

Set of standards that were not important at time of creation of the original set of ATX standards, yet became important until today. E.g. Airflow or Noise Management.

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

|              Standard | Description |
|----------------------:|:-------------:|
| V² Airflow Management | Standardized V² Airflow design is integrated with V²Case design, providing maximum thermal design power versus minimum case size and generated noise. |
|   V² Noise Management | Design Guides to develop airflow with reduced noise footprint. Creation of 5 noise classes making it easy for the buyer to gauge loudness of a PC when buying. |
|        V² Dust Filter | Standardized filter design that are quick and easy to clean. Integrated with V²Case design. |
|     V² Health Monitor | Microcontroller that monitors various modular components of the PC. It tries to report failing modules ahead of fatal failure. It points out broken modules after failure simplifying repair. |
|       V² Illumination | Standards of connectors, lights, mounting, firmware and UI for illuminating V²Case. |
|        V² Custom Logo | Standardized Logo Inserts and Production Methods. Making custom logos easy and low cost. |
|      V² Configuration | Standardization of the entire configuration chain. Configurator UI principles, configuration exchange data format, sample application in Open Source. |
|   V² Cable Management | All that is necessary to make it easy for the user to contain the cable mess on his computer desk. |


## Modular All-In-One Standards {#all-in-one-standards}

Set of standards that expand the Modular PC Standard to build modular All-In-One PCs.

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

|           Standard | Description |
|-------------------:|:-------------:|
|           V²Access | Remote power on switch and status LED to a Modular PC for easy access when the Modular PC is placed behind the display. PCB mounting pattern, case specifications, case mounting pattern, cable specs, connector pin outs, circuit diagram. |
|       V²USB-Access | Simple remote USB Ports to a Modular PC for easy access when the Modular PC is placed behind the display. PCB mounting pattern, case specifications, case mounting pattern, cable specs, connector pin outs, circuit diagram. |
|             V²Feet | Standardized feet to V²Case. Allows placement of ports in left, up and right direction. |
|            V²Stand | Standardized stand for Modular All-In-One PC. Holds V²Case, V²Access, V²USB-Access, V²Bracket, V²Hinge and Keyboard Shelf. Specs, sample design in STL and FreeCAD. |
|          V²Bracket | Specs for a simple and low cost bracket to hang V²Case to the wall or to V²Stand. |
|            V²Hinge | Standardized hinge for tilt movement with standardized mounting pattern to mount on one side to V²Stand and on the other side to a Display with VESA mount. |
|V²Fluid-Form-Factor | Specs to design all other specs of V² in such a way that a V²Case can be converted from a Mini PC formfactor to an All-In-One formfactor and vice versa. |
|       V²Fluid-Port | Hanging system enabling the connection of V²Case to V²Bracket so that the port of the V²Case can point to the four directions: up, right, down, left. |





# Mission of V² Modular PC Standards {#mission-v-squared}

## Making Missing PC Standards Mainstream {#making-modular-pc-mainstream}

Our mission is to develop, publish, promote and maintain all missing standards to enable anyone to develop, make, assemble, use and maintain Mini and All-In-One Computer. To lower any entry barriers, reduce cost, and reduce trial and error in development and assembly.

At V² we are a global community of architects, thinkers, engineers and marketeers working together to achieve our vision of an open modular mini or All-in-One PC Standard. We believe this act of human collaboration across an open platform is essential for individual and collective growths.

## Analogy to ATX Desktop PC Standard {#analogy-to-atx}

Desktop ATX computers were the best selling PC form factor, because the ATX standard made them to be lowest cost, fastest to develop, easiest to build and upgrade. But this de facto standard is 30 years old and was never updated to fit the needs of mini and all-in-one form factor. The V² Standard fills this vacuum. By using the exact same principles that the ATX standard used on desktop PCs, the V² Standard is lowering the cost, increasing development speed and performance, and simplifying upgrades for mini an All-In-One PCs. In doing so, V² is breathing new life into mini and All-In-One PCs.

## More ...
For more information on benefits, Life after V² and Principles of V² → [True North of V²](https://v-squared.github.io/plan/true-north/)


# Community Development Platform {#community-development}

## Benefits of Community Development {#benefits}

- **For the people, by the people:** The V² Modular PC Standards are a service to all PC Users, Retailer, Developers and Manufacturers. Development is provided by diverse community members who work for an equally diverse number of companies. This ensure a balance of interests.
- **Simple and Fast Contribution:** Editing an article, reporting a bug or provide an idea is all accessible with just one mouse click / tab on the V²Flow Button. The power of community editing has been proven by [wikipedia](//wikipedia.com). V² applies this method (quite possibly for the first time) to standards and products.
- **You can always fix it yourself:** If a bug in the V² Standard blocks your project you can always go ahead and fix it yourself. To unstuck your project but also to move the standard forward. Simply fork it on GitHub, fix the problem and make a pull request. We will do our best to include your fix swiftly.


## Leading Contribution {#leading-contribution}

Developing standards means to coordinate a lot of work by many contributors over a very long period of time. We have contributed a complete board (section) of our web site by the name [V²Plan](https://v-squared.github.io/plan/) to this purpose. Below is a list of the key documents to get you started:

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

|              Workflows | Description |
|-----------------------:|:-------------:|
|          V² True North | V² Mission, Targets, Benefits, Life after V² and Principles of V². The guides for us to reach our targets. Read more → [V² True North](https://v-squared.github.io/plan/true-north/)|
|            V² Road Map | The *V²Road Map* shows the way to reach our *V² True North* via consecutive *Campaigns*. A campaign is a group of *Milestones* and lasts about 3 months while focusing all our efforts. Read more → [V² Road Map](https://v-squared.github.io/plan/road-map/)|
|              Dashboard | Complete overview of our current development convenient in one place. Read more → [V² Dashboard](https://v-squared.github.io/plan/dashboard/) |

For a complete overview → [V²Plan](https://v-squared.github.io/plan/).



## Standardized Contribution Workflows {#standardized-workflow}

Standardized and published workflow on creating, publishing, improving and maintaining the V² Modular PC standard documents including their supporting design files.

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

|              Workflows | Description |
|-----------------------:|:-------------:|
|          V² Contribute | Found a bug, need a feature or simply want to help? V²Flow makes contributing as easy as Wikipedia. Read more → [V² Contribute](https://v-squared.github.io/plan/contribute/)|
|               V² Agile | Consistent documentation of the implementation of the Agile Development and Toyota Production System for V². Including custom developed tools and mashup to expand the capabilities of GitHub as Agile Project Management System.  Read more → [V² Agile](https://v-squared.github.io/plan/agile/)|
|    V² Writing Articles | *Style Guides*, *Tutorials* and *Workflow-Templates* on writing articles in high quality ready to be published on V². Read more → [Introduction on Writing Articles](https://v-squared.github.io/plan/flow/writing/)|
|             V²CAM.Flow | V²Case Trailblazer Product Cases are manufactured via CNC cut. We found that there exists no standard on how to go effectively from CAD → CAM → CNC. As such handing over a CNC project to the CNC shop is inefficient. V²CAM.Flow is an attempt to solve this problem for us and possibly also for the CNC industry. Read more → [V²CAM.Flow](https://v-squared.github.io/plan/flow/mechanical/cad-cam-cnc/)|
|      Standard Creation | Workflow on creating a V² Standard Document with all supporting technical files.|
|     Release Management | Workflow on publishing a new release of a V²Standard including promotion.|
|     Version Management | Workflow, specs, tutorials and tools on version management of V² Standards.|
|     Quality Management | Workflow and Game Theory of Quality Management and Quality Control of the V² Standard Documents as well as V² compatible products from third parties.|



## Contribution Standards {#contribution-standards}

The standard below ensure that the V² Standard documents are presented in a consistent manner:

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

| Contribution Standards | Description |
|-----------------------:|:-------------:|
|      V² Software Stack | List of all Software used to create all document types published on V² Site. All software we use is part of FOSS (Free and Open Source Software) to remove entry barriers to contributors and users of V² Standards.|
|        V² File Formats | List of file formats, when to use them and which application is best to open them. Discussion on why we selected on file format over another. Until today every file that we publish can be opened in a FOSS application (Free and Open Source Software)|
|         V² Style Guide | Set of standards on writing and designing articles for V². Read more → [Style Guide](https://v-squared.github.io/plan/flow/writing/style-guide/) |
|                 V² Art | Visual Style Guides for Illustrations. Workflows on creating Photos, Snapshots, Pixel, Vexctor and Interactive Illustrations. |
|          V² Formatting | Tutorials and references on styling and formatting articles on V². Read more → [Basic Article Formatting](https://v-squared.github.io/plan/flow/writing/basic-formatting/) and [Advanced Article Formatting](https://v-squared.github.io/plan/flow/writing/advanced-formatting/) |
|  V² Layout Style Guide | Consistent use of colors and text styles |




# Plan on How to make it Happen {#plan-v-squared}

## Where we are today {#where-we-are-today}

Developing, publishing and making a standard mainstream is no small feat. When looking at the history of other successful standards such as USB or PCI you will find that they all took over 10 years. We started in 2011 and are about half way through. Development of the core standards has been completed. 2016 sees the first shipping products based on the new V²Standard. All core standards will be completed publishing by middle of 2017.


## Detailed Plan {#detailed-plan}

Development of V² is a coordinated community effort. Development happens on GitHub. Our Mission, Targets, Road Map and Milestones as well as our Contribution Workflow is spelled out in → [V² Plan](https://v-squared.github.io/plan/).





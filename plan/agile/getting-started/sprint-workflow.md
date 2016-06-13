---
layout: page
title: 	V²Sprint Workflow on GitHub
subtitle: Getting Started 2&#58; Workflow during a Sprint. Integration with GitHub Issues and Waffles.
abstract: The Sprint Workflow is at the core of the Agile Workflow as such we give it this dedicated Article. This Article works just the same as the previous&#58; It first shows the Overview Sprint Workflow from beginning to end. Then you can zoom into each step of the overview which is a complete workflow in on itself. Each workflow is documented with three methods&#58; <strong>1)</strong> User Stories, <strong>2)</strong> Step by Step Text Tutorial, <strong>3)</strong> Video Tutorial. Interactive Info-graphics assist in the learning process.
issueNo: 61
---

# Introduction

## Workflow
## Roles & Communication
## Iterations

# (7) Sprint Cycle <a name="7"></a>
The *Sprint Cycle* aka *Scrum* aka *Burndown* is at the heart of A

## (7.1) Workflow
### (1) Sprint Backlog
### (2) Sprint Kickoff Meeting
![](http://jpattonassociates.com/wp-content/uploads/2015/01/StoryMapping.png)
### (3) Weeks Sprint Cycle
### (4) Discover
### (5) Design
### (6) Test
### (7) Deploy
### (8) Shippable Product Increment
### (9) Sprint Review
### (10) Daily Sprint Cycle
### (11) Daily Scrum Meeting



## (7.2) Roles & Communication
*Closed Circle*
{Infographics V² Agile Roles & Communication}

### Roles and Items
- **Community User** Lots of People, lots of colors
- **Cloud** Between Community and Board. Inside Cloud we show symbols of: Twitter, Facebook, YouTube, GitHub Issues
- **Board ** few people, all the same colors
- **GitHub Issues** between Board and Scrum 
- **Campaign Owner**
- **GitHub Issues**
- **Scrum Master** Person in Orange
- **GitHub Issues**
- **Developer / Contributor** People sitting at at desks with PCs
- **Contributor**
- **OEM Developer**
- **Retailer**
- **Product** Symbolized by box in primary color, connection between Deva and User
- **Community User** Lots of People receiving the Product, symbolized by box in Primary Color. This is the very same Community User as above. It is closing the circle

### Messages
- Closed Circle
- Community is the boss
- Board is part of the Community
- GitHub Issues is what connects many Roles
---

### Community Users
For the V² Initiative the Users in the Community request *Features* and as such are the *Stake Holders*. See [Step 1](#!) in the V² Agile Scrum Process.

1.
2.

### Board
A group of people who are extra engaged to move V² forward. They often serve as a focused version of the *Community* to the *Campaign Manager*.

### Campaign Master ...
... mediates the *Feature Requests* from the Community / *Board* to the *Development Team* and thus functions in the Role of *Product Owner*, balancing interests of all parties and available resources.

1. **Maintaining True North**
2. **Creating Master** The *Road Map* helps me to fit the *Campaign* into the big picture aka *True North*. The *Campaign Brief* helps me to bring the campaign into focus. In the *Campaign Plan* I break the campaign down into *Projects*, while the Gantt Chart helps me to consider their dependencies and timing. Finally I break *Projects* into *Issues*, write their User-Stories or Specs and assign them to *Milestones*. 
3. **Creating Milestones**
4. **Managing Campaign** On every Monday I check with the *Milestone* tool of *GitHub Issues* the percentage of completion for each *Project* and update it in the *Campaign Chart*. This way everyone can see intuitively which *Project* is on schedule and which *Project* need to play catch up. The *Campaign Management* page makes it easy and fast for me to find *Issues* that are stuck and need my help.
5. **Creating Issues**


### SCRUM Master ...
... is the facilitator that makes the *Development Team* work smoothly. 

1. **Milestone Kick Off**
2. **Sprint Kick Off**
3. **Daily Scrum Meeting**
4. **Getting Issues Ready for Sprint**
5. **Tracking Schedule**
6. **Unstuck Developer**
7. **Archive Know How**
8. **Product Review**
9. **Close Sprint**
10.**Close Milestone** 

### Developer / Contributor ...
develops the *Shippable Product Increment* in the *Agile Sprint Process*. 

### Community User ...


## (7.3) Iterations
![](http://wpdev.learningfuze.com/wp-content/uploads/2014/10/SRUMimg1.png)
*Infographics courtesy [Learning Fuze](http://learningfuze.com/blog/agile-team-development-special-guest-speaker-marvin-marv-chan/)


----------------------- 
Sort In
=========


## Sprint Planning → Sprint Backlog
*Sprint Planning* is a two step procedure:

1. **Grouping Issues:**
2. **Spell out Issues:**

### Grouping Issues
Experienced people will create a Column with names such *Backlog 1*, *Backlog 2* on the *Scrum Board* in *Waffle* and then sort in the corresponding Issues. 

### Spelling out Issues
Experienced people add the following information to each Issue that has been sorted into a Backlog Column:

- **Tasks:** 
- **User Stories:**
- **Features:**
- **References:**
- **Tests:**
- **Assignment:** Assign the person who is responsible to get the work done. Only one person can be assigned to the Issue, but each task can be assigned to another person using *@mention*.

### Who are these experienced people?
That depends on the Sprint. Our senior folks will look at the *Issues* of a *Milestone* and who feels most competent will suggest to do the work. It is possible that this work is done in a team if not one person knows everything that is to know to group and spell out Issues. Often it will be the Product Owner (Hubert) and the Scrum Master of this Milestone.

## Sprint → Scrum Board & Meeting
### Introduction to Sprint


### Sprint Meeting

### Development aka Analyze, Design, Build

### Testing

### Sprint Review

## Deployment

### Publication on *Master* or *gh-pages* Branch

### Daily Deployment vs Sprint Deployment

### Shipping new Hardware

## For more Information
Who is interested in more details, please refer to: [V² Agile User Manual](https://github.com/V-Squared/v2-Plan/wiki/v2-Agile-Manual).



-------
# Sort In

## How to work with GitHub Issues
### Limits
GitHub Issues does not allow to sort Issues within a Milestone. This makes for losing overview on what to work next. 

### Labels indicating Sequence
To fix above problem we introduce Labels that indicate the sequence. 


Example of Progress Labels for Production:

1-payment  #044A00
2-design  #078500
3-production #0AC700
4-bring-to-life #0DFF00
5-Ship #AAFFA6


### Using natural order of Issues
- Issues are sorted in ascending order of issue number
- Issue numbers are serial numbers, beginning with #1 for first issue
- Write down all issues in a notepad, than order issues as you want them to be ordered
- Create issues by copy pasting titles from that list in the order of the list. 
   - The issues first to be closed should be created first. They will have lower numbers and are listed on the bottom of issues

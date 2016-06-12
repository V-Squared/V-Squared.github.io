---
layout: page
menu: Dashboard
title: V² Dashboard
subtitle: Complete overview of our current development convenient in one place.
abstract: >
   We develop in [Agile Sprints](https://v-squared.github.io/plan/system/sprint-workflow/). This dashboard shows all our Scrum Boards and a History of each Sprint Target. Convenient for the **Contributor** to find the next work to do and for the **V²Reader** to get an overview what we are working on. Please note that the Scrum Boards are public and visible to anyone. Also anyone can enter comments to any issue on the Scrum Board. Ideal to add a *Feature Request* or to *Report a Bug*.
issueNo: 94
contents:
   - name: Scrum Boards
     url: scrum-boards
   - name: Understanding V² Sprints
     url: understanding-v2-sprints
   - name: Weekly Sprints Overview
     url: weekly-sprints-overview
readiness:
   - is-complete
   - is-complete
   - is-active
---

# Scrum Boards {#scrum-boards}

## V² Scrum Board ######
[![scrum-board-v-squared](https://cloud.githubusercontent.com/assets/7278716/15988570/568b6f40-3088-11e6-8bd9-e9405bbc453f.png)](https://waffle.io/V-Squared/V-Squared.github.io)

- Public → [Scrum Board V²](https://waffle.io/V-Squared/V-Squared.github.io)
- All activities of this weeks sprint
- Listing of what goes into next spring and the spring after that
- listing of what we are working on right now


## Production Scrum Board ######
[![scrum-board-production](https://cloud.githubusercontent.com/assets/7278716/15988587/1b82a2dc-3089-11e6-8d9c-10c44b94914c.png)](https://waffle.io/V-Squared/v2-Production)


- Public → [Scrum Board Production](https://waffle.io/V-Squared/v2-Production)
- Listing of all production issues, grouped into 4 columns:
   - Design
   - Production
   - Bring to Life
   - Shipping / Closing




# Understanding V² Sprints {#understanding-v2-sprints}

## If You are Familiar with Agile Sprints
- → [Weekly Sprints Overview](#weekly-sprints-overview) (on page links are broken → [Bug: Stop Angular from Rerouting Hashtag #154](https://github.com/V-Squared/V-Squared.github.io/issues/154)
- → [V² Scrum Board of all Work](https://waffle.io/V-Squared/V-Squared.github.io)
- → [V² Scrum Board Production Only](https://waffle.io/V-Squared/v2-Production)
- **Sprint Kick Off:** Sunday 8:30 pm Las Vegas Time, Monday 11:30 am China time
- **Daily Stand Up:** 8:30 pm Las Vegas time, 11:30 am China time
- **Sprint Review:** At the bottom of each completed weekly sprint. → [Example Sprint Review](#example-sprint-review)

## If Agile Sprint is new to you

We are working on a detailed Article Series → [V²Plan Agile System](https://v-squared.github.io/plan/system/). A Quick Start Guide goes like this:

### Sprint Kick Off Meeting

- Preparation (1 hour prior to meeting)
   - **Update Messgae:** Scrum Master notifies Team Members once Sprints Overview and Scrum Boards are updated.
   - **Study Weekly Sprints:** Every Team Member studies a) the updated → [Weekly Sprints Overview](#weekly-sprints-overview) and b) the updated → [Scrum Board V²](https://waffle.io/V-Squared/V-Squared.github.io) and → [Scrum Board Production](https://waffle.io/V-Squared/v2-Production) to understand targets and issues for this and next two sprints
- Meeting (Skype call on Sunday 8:30 pm Las Vegas Time, Monday 11:30 am China time)
   - **Sprint Review:** Discuss the results of Sprint Review. → [Example Sprint Review](#example-sprint-review)
   - **Sprint Targets:** Discuss agreements / disagreements with the next three Sprint Targets
   - **Discuss Problems:** Every team member already read the target of this week's sprint and her / his assignments. Only problems need to be discussed.
   - **First Stand Up Meeting:** Each developer presents last Friday's work and drags the work of today into *Developing* column.
   - **Wrapping up:** Any last minute comments? Compliments or Complaints? Confirm next Kick Off Meeting on schedule?

### Daily Stand Up Meeting
At the beginning (or end) of every work day the sprint team meets for the Daily Stand Up Meeting. Each developer has 2 minutes to show what he did since the last meeting and what he is going to do until the next one. The idea is to synchronize order in which tasks are worked down to avoid one incompleted issue is gating another. This is also the best place to ask for help if needed. During the meeting the agreed upon next work is dragged from the *This Sprint* column to the *Developing* column.

### Working Down Issues
Every day each developer works down the issues assigned to him and placed in the *Developing* column of the [Scrum Board](https://waffle.io/V-Squared/V-Squared.github.io). In case he finishes early he drags another issue from *This Sprint* to *Developing* and works it down.

### Sprint Preparation

 At the end of each Sprint the Srum Master cleans out the [Scrum Board](https://waffle.io/V-Squared/V-Squared.github.io) like so:

- Work on Sunday and possibly Monday morning. So far I (HC) needed about 14 hours work time.
- Archiving all closed Issues → [Example Closed Issues](#example-closed-issues)
- Create Sprint Review → [Example Sprint Review](#example-sprint-review}
- Close Issues that the developer finished but forgot to close
- Move still open issues from *Developing* to *This Sprint* column. Add lable: *o.week.2* to mark failed target.
- Reorganize and update [Weekly Sprints Overview](#weekly-sprints-overview)
- Move Issues from *Next Sprint* to *This Sprint*
- Move Issues from *Sprint after Next* to *Next Sprint*
- Fill up *Sprint after Next* from *Backlog*
- Order Issues in all columns so that more important issues or issues gating others are placed on top
- Open each issue. Check if:
   - Writing is complete and up to date
   - Labels, Milestones and Assignee are properly
   - Only one Assignee is set
   - Task have trigger build in to keep flow on hand over work (e.g. write "@bcaswelch Please review" in comment)
 
### Creating Sprint Review

After each Sprint (and prior to the next) the Scrum Master creates the Sprint Review like so:

- Add search term of current week into Issue Title. Example for label: "16W23" as 2016 week 23 
- Create Link as → [Example Closed Issues]{#example-closed-issues}
- Create Statistics → [Example Statistics](#example-statistics)
- Write the Wish List for Improvements
- Notify team members that all reference documentation to new sprint has been updated so they can prepare next sprint




# Weekly Sprints Overview {#weekly-sprints-overview}

## Purpose of Weekly Sprints Overview
- Give an Overview of the current plus next two sprints
- Keep a historic record on what we did in each week and what we learned to improve each week
- Compile targets for next two sprints before the Scrum Master spells it out in current sprint

## Sprint Week 26 (June 27) — In two weeks

### Focus Sprint after Next

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

| Team | Key Target this week |
|------:|:--------------------|
| Shop | Build ViPC Workstation used for Review and Reference |
| Shop + Site | Create all Pages in DIY Books: *Install* and *QA* based on real world experience of building the ViPC Workstation |
| Site | Setting up and test Contribution Workflow, Pull Requests, Write Contribution Instruction |
| Engineering | BTL PCBs, Sandblasting & Anodizing ViCase  |
| Leading |  |


## Sprint Week 25 (June 20) — Next Week

### Focus next Sprint

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

| Team | Key Target this week |
|------:|:--------------------|
| Shop + Site | Complete all Configuration Pages. Data Structure for Configuration. Finalize Configuration for ViPC Workstation Review & Reference PC |
| Site | V² Home Page and all its Visuals; Add Title Graphics to all Main Plan Articles; Rough Restructure V²Configurator |
| Engineering | Create Panel Form 6mm. Manufacture Panel Holder and 6mm Parts. BTL ViCase. |
| Leading | ViPC Legal Situation ; Legal protection of IP: Implementation  |



## Sprint Week 24 (June 13) — This Week ← ←

### Focus this Sprint

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

| Team | Key Target this week |
|------:|:--------------------|
| Shop + Site | Complete DIY & Comparison Pages including Intro. Add nice visuals and infographics |
| Site | Fix Bugs, automated table of contents, automated infographics, tune article layouts, Fluid Formfactor App, V²Flow Create, V²Art Create |
| Engineering | Create Panel Form 2mm. Manufacture Panel Holder and 2mm Parts |
| Leading | Legal protection of IP: detailed research |


## Sprint Week 23 (June 6) — Last Sprint

### Targets of Sprint 16W23

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

| Team | Key Target this week |
|------:|:--------------------|
| Shop + Site | Create: V²DIY, all its pages, transfer DIY & Config Article, begin again writing, create concept of DIY data & DIY Apps |
| Shop + Engineering | Joint Review, creating ECR, verifying HDPLEX dimensions |
| Engineering | Put ViCase to production: Final Review, generate production files |
| Leading | Legal protection of IP, Basic Research |

### Sprint Review {#example-sprint-review}

#### Statistics {#example-statistics}

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}

| What | Number |
|------:|:--------------------|
| Total Number of Issues & Epics | 18 |
| Number of Epics | 2 |
| Number of Issues considering Epic Size (*1) | 32 |
| Number of Issues closed by V²Core | 32 |
| Number of Issues closed by V²Shop-Midwest (*2) | 0 |


- (*1) One Epic contains the in average work of 8 Normal Issues. 
- (*2) This number is misleading. V²Shop-Midwest worked on many Articles. But the Issue not closed yet. We should discuss to a) change these Issues to Epics, b) if we should break the Epic into separate issues for more transparent Management?

#### Improvement Wish List for Next Sprint
- Meetings on Time or change of time is announced 2 hours earlier
- Notification Chat Period: 9:00 ... 10:00 am China time, 6:00 ... 7:00 pm Las Vegas time
   - During this one hour everybody responds notifications with the speed of chatting
- Answer all Notifications at the end of the day

- → [All issues closed in Sprint of Week 16](https://github.com/search?q=org%3AV-Squared++2016W23&type=Issues) {#example-closed-issues}

---
layout: page
title: V² Plan Reference
subtitle: Architecture, Data Structure, Tools, Visualization and Navigation of V²Plan. Mapping of V²Plan to Agile Development.
abstract: The Reference Manual to V²Plan serves two purposes&#58; <strong>1)</strong> The theoretical look behind the scenes shows the Architecture of V²Plan with occasional goodies such as an explanation why we made particular choices. This background information will help you to better remember the V²Agile Workflows. <strong>2)</strong> A place to quickly look up information.
issueNo: 75
contents:
  - name: Labels
    url: labels
  - name: Repositories
    url: repositories
readiness:
  - is-complete
  - is-active
---





![](http://cdn.css-tricks.com/wp-content/uploads/2013/12/vector-snagging.png)
*???The table of content can be drawn in SVG, indicating that this is a reference and it can be the table of content. We can show V² Logo and V²Plan and the V²Plan Slogan ???*
# Table of Contents
- [How it all fits together](#fits)
- [Introduction](#intro)
- [Motivation via Visible Progress](#motivation)
- [Mapping: V²Plan ↔ V²Agile ↔ Agile](#mapping)

# How it all fits together <a name="fits"></a>
![](http://www.presentationmagazine.com/powerpoint-templates/0/0/00358/powerpoint-jigsaw-puzzle-template_1.jpg)
*???Draw this Image same style as the puzzle in the V² Home Page. Hover over Puzzle piece will show the tool tip with the content from the table below. ???*

We have several User Manual on how to work within V²Plan. They are very hands on and their read is highly recommended. This Article however is a more theoretical look behind the scenes. It shows you the Architecture of V² Plan and sometimes adds the thinking on why we made particular choices. This background information will help you to better remember the workflows as described in other manuals:

| Manual | Content
|---------:|:----------------|
|V²Plan Introduction | Purpose, Motivation, Methods, How it all fits together |
|V²Plan Reference | Architecture, Data Structure, Tools, Visualization and Navigation of V²Plan. Mapping of V²Plan to V²Agile|
|V²Agile Workflow | All Steps from Vision to Ideas through Sprint Development to Product involving everyone |
|V²Sprint Workflow | Sprint Cycle Workflow, Roles & Communication, Continuous Iteration, Continuous Integration |
|V²Roles & Comunication | Which *Role* is doing what *Jobs* communicating to whom using which *Tools*  | 
|V²Iterations | Continuously improve product with *Shippable Product Increments*. For Software, Hardware, Standards, Production Methods and Art |
|V²Integration| Continuously test, integrate and deploy the *Product Increment*. For Software, Hardware, Standards, Production Methods and Art   |
|V²Plan Cheat Sheet | All interactive Info Graphics in one page |


# Introduction <a name="intro"></a>
![](http://1.bp.blogspot.com/-2u0QUSECazQ/T5BR_HVmCgI/AAAAAAAAAB8/eZzMWL2kDwM/s1600/compass.jpg)
*??? Use the True North Version I already have! ???*

## Reaching the Right True North
We spelled out the Goal of V² in *True North* by drawing a *Vision* on how the world will look like in 2021 after the successful introduction of V². This vision has been created with the community and is shown very visibly on the *V² Home Page* and *Plan Home Page* for two reasons:

1. **Picking the right Goal:** We spend endless discussions with key members of the community to spell out *True North*. Great care was taken to choose *True North* so that we create something that **a)** is missing in the *Industry* and **b)** nobody else seems to be working on and most importantly **c)** is something that the *Community* deeply misses.
2. **Constant Review:** By placing *True North* in a very prominent position and by always motivating contribution the V² Goal is under constant review and improvement. Ensuring that the V² Goal is as close as possible to what the *Community* really wants.
3. **Make best choices towards True North:**  When faced with different options each *Contributor* can find the best option by asking the question: Which choice will bring us closer to *True North*?


## Strict Hierarchical Structure
![](http://image.shutterstock.com/z/stock-vector-infographic-examples-food-pyramid-cake-154247843.jpg)

*??? Create Icon for each Item (we do anyways for another illustration). Draw Pyramid as above. Add short Tooltips. Link to longer text below **Tip:** use the shade web site tool from Lukas to create 7 shades of our Primary color ???*

 
Reaching *V² True North* is a *Big Undertaking*. Using a *Strict Hierarchical Structure* is essential for a *Divide and Conquer* approach that cuts the *Big Undertaking* in ever smaller pieces, until they are simple *Tasks* which are *assigned* and *worked down*. The *Architecture* described below fits the key management tool that *GitHub* provides, which is *GitHub Issues*. For working down aka *Burndown* the *Issues* we are using the *Methodology* of *Agile Development* with its key tool *Sprint* that is manged with a *Scrum Board*.

1. **V²True North:**<a name="v2-true-north"></a> A Vision on how the world will look like in 2021 after the successful introduction of V² showing how V² improves your life. It shows you where we are going and directs us to go there.
2. **V²Road Map:** The Road Map is the visual representation on how we are moving from today to our final *Goal* that is *True North*. We are doing this is via steps called *Campaigns*. The Goal of each Campaign is strategically chosen as to sit upon the shoulder of the previous *Campaign* and at the same time the new Goal brings us forward as much as possible towards *True North*. 
3. **V²Campaigns:**<a name="v2-campaigns"></a> We have about four campaigns / year. Each campaigns focus all V² activities onto a single goal on a very high level. This is why they are listed directly on the V² Home Page. Only one campaign is active at any given time. Before a new campaign is opened, the old one is closed, evaluated and archived. Typically *Projects* aka *Milestones* do not carry over from one campaign to another.
4. **V²Milestones:**<a name="v2-milestones"></a> About 10 Milestones make up one campaign and their dependencies are visualized in a Gantt Chart. A *Milestone* is a bucket of *Issues* with a completion date. In a more traditional *Terminology* *Milestone* would be the *Big Project* comprised of *Small Projects* aka *Issues*. The completion of the last Issue marks a *Milestone* of the *Campaign*,  thus the name. A Milestone in the Campaign Chart is linked to *GitHub Milestones".
5. **V²Sprints:** Each Milestone is broken down into *Sprints*, which itself is a bucket of *GitHub Issues*, making it easy for you to get involved. A *Sprint* lasts between 1 ... 4 weeks and is a process in *Agile Development* to work down aka *burndown* *Issues* for the purpose to output an Incremental Product Release.
6. **V²Issues:** An Issue begins either with a *User Story* or *Specifications* of what needs to be done. It may have suggestions on *Implementation* and *References* to resources. The *Issue Owner* is responsible to complete the issue whereas the *Issue Assignee* gets the work done. The work to be done is spelled out in the very top with the *Tasks Checklist*. It is possible to assign a *Task* to a third person using *@mentions*. Each *Issue* is assigned to one *Milestone*. 
7. **V²Tasks:** Finally we reached the point where work actually gets done. The top of the *Issue* contains the *Tasks Checklist*. The *Issue Assignee* is automatically assigned to it. If however you want to assign one task to another person you can do that with *@mentions*. In average an Issue contains about 5 Tasks. Ticking off task moves the *Progress Bar* of a *Issue* forward.

**Tip:** There has been a heated discussions on the chosen *Nomenclature*. A lot of members where most unhappy about how *Milestone* and *Issue* are defined above. However, this is how *GitHub Issues* defines and uses these *Terms*. Since we are working with *GitHub Issues* we all agreed to use these *Terms* consistently with *GitHub* to avoid confusion when you will read up on *GitHub Documentation* on how to use *GitHub Issues*.


## Making the Plan easy to understand
The best way to reach our target in an effective way on time is to deliver easy to find answers to the following questions: **1)** Where are we going? **2)** What work needs to be done? **3)** how to track if we are on time? V²Plan delivers exactly that! 

## Making the Plan Fun
![](http://images.clipartpanda.com/strife-clipart-family-fun.svg)
*??? Color it with our shades. Add a jumping Phoenix ???*

If it is fun you'll do a good Job! Adding fun to the plan by:

1. **Fast in use:** Working fast is always more fun than working slow
2. **Lots if Visualization:** Looking at Infographics is more fun than reading lots of text
3. **Very good structure:** It is easy to find things and once done, they make sense
4. **Short meetings:** Opportunities to show your work and to get a compliment or to ask and receive help. It is also motivating to see the progress by others.
5. **Visible Progress:** We (or the tools we use) publish progress frequently in easy to read charts. It is always motivating seeing the work is moving along.

## Fast to look up information
By making it very fast to look up information two things are happening:

1. **Work is more accurate:** By using actual reference instead of working from memory the work done becomes more accurate
2. **Progress reports are more up to date:** Since the Issue with the Task Checklist is already open when you work  (fast to find) it is convenient enough to tick the task when done.

## Promote the Plan on V² Home Page
*??? Snap shot of the Plan Section of V² Home Page after we added the Portfolio Images ???*

Say you evaluate V² for the first time. You will quickly realize that V² is a *Big Undertaking*. Instantly you will ask yourself: "Can they do it?". If your answer to this question is "No" then you will leave and we have lost a wonderful *Supporter* to V². The purpose of the *V² Plan* is to convincingly show that we know where we are going: *True North* and that we have a good plan and enough resources to execute it. And we are showing that most of the work has been already completed. In other words, if we got this far, we can finish up the rest. Now that you believe in our success, you can use the plan to check out if that what you need has been already completed, or when it will become available. You may even consider contributing.

## Easy to contribute
![](https://guides.github.com/activities/hello-world/branching.png)
*??? Get SVG from GitHub. Add bigger text. Use their text from GitHub Flow and add our Tooltips ???*

The success of V² Initiative depends on *Contribution*. As such it is essential for our success to make contribution easy. The Architecture in V²Plan makes it easy to contribute to make **1)** Feature Requests / Bug Reports, **2)** Contribute Work and **3)** Get involved  with Management, because the V²Plan Architecture is designed around the core *GitHub* tools: **GitHub <>Code Repositories** and **GitHub Issues**:

- **Bug Reporting, Feature Request & Tracking:** Technically it is part of *Management* and it uses the exact same tools of [GitHub Issues](https://guides.github.com/features/issues/). But since most *V² Community Members* will get involved this way we have spelled it out here separately.
- **Work:** All *Work* happens in *GitHub <>Code*. We use the *GitHub* standard mechanism of *Contribution* which is [GitHub Flow](https://guides.github.com/introduction/flow/). It is easy to learn, you do not need to install software. Anybody who is on GitHub knows about it. We use *GitHub Repositories* for: **1)** Source Code, **2)** Articles **3)** Web Sites **4)** Schematics, **4)** PCB files, **4)** Artwork, **5)** 3D Models, and anything else.
- **Management:** All our *Management* is done in [GitHub Issues](https://guides.github.com/features/issues/). It is very intuitive to use, you do not need to install any app and anybody who is on GitHub uses it.


# Motivation via visible Progress <a name="motivation"></a>
![](https://cloud.githubusercontent.com/assets/7278716/14466638/3a39ff76-010a-11e6-803d-2822584a79b3.jpg)


As important it is to have a clear plan how to reach *True North* it is even more important to promote *Progress*. Otherwise many visitors will get frustrated about so much work that needs to be done and abandon V² out of fear we are not going to make it. 

## We are More than Half Way Through
*??? Our Time Line Illustration ???*
That it is 5 years to reach the final "True North" will look not so daunting any more if we deliver this method in the same breath that we started in 2011 already and that now we are more than half way through. We will do this by showing the *Big Picture Timeline* in the *Introduction* of the *V² Home Page* 

## Breakthrough Milestone only 3 month later
And even more motivating is to show that a major desirable thing is available only 3 months later. This is done in the "This Year Timeline", right under the *Big Picture Timeline*. This is where we are promoting the *Goal* of he current *Campaign*.

## Every closed tasks moves progress forward
And whenever a *Contributor* completes and *assigned* *Task* he can see the green *Progress Bar* of the corresponding *Milestone* moving forward.


# Mapping: V²Plan ↔ V²Agile ↔ Agile <a name="mapping"></a>
![](http://www.artmuseum.arizona.edu/wp-content/uploads/2015/04/Logo_Color.png)
![](http://www.innovationmanagement.se/wp-content/uploads/2015/03/mind-mapping-for-business.jpg)
*??? Two people talking to each other, one has question "Question mark" other has answer "Exclamation mark". Both have speech bubble. Each speach bubble has 3 items represented by polygon items of different corner count. Two items map randomly, one item maps 1:1 ???*



*V²Plan* is made for the *V²Agile Development System* which is a unified Agile Development system for: **1)** Standards **2)** Software **3)** Hardware. 

V²Agile is based on the *Agile Development System* for Software and the *Toyota Production System* for Hardware. 

*V²Plan* and *V²Agile* use the tools: *GitHub* and *Waffle* for implementation.

Each development or production system and each tool come with their own terminology. In this chapter we list the terms used in V²Plan which is not always consistent. In this Chapter Mapping 

## Items
![](http://comps.canstockphoto.com/can-stock-photo_csp21560771.jpg)
*??? Create Icons for Item. We can use in many places in all Manuals to add visuals. We can use the same tool tip on SVG. We can even link to the table with more text information ???*

| V² Term | V² Use | Agile-DS / Toyota-PS Equivalent|
|------------:|:---------|:-------------------|
|True North | Whenever presented with choices we pick the one that brings us closest to our final goal *True North* | The *Toyota Production System* heavily uses *True North* this way.|
|Road Map | Sequence of Campaigns. Each sitting on the shoulders of the previous Campaign. Each moving V² closer to *True North*. | Road Map. Agile is not so specific about it.
|Campaign | A campaign focus all our efforts to create and promote new shippable products. It is a group of milestones. | Project, as in group of Epics. Promotion aspect is not covered in Agile. |
|Milestones | Grouping Issues into one shippable product or major shippable product increment which marks a Milestone for V². | Epic, as in Groups of User Stories |
|Weekly Sprint | Smaller group of Issues (of the same Milestone) into a small shippable product increment. | Weekly Sprints as in 1 ... 4 weeks are the heart of Agile and it is very well structured and documented. (*1) |
|Daily Sprint | One Issue or few small issues making a tiny (if at all) shippable increment | Daily Sprint. Same comment applies as to *Weekly Sprint* |
|Issues | Grouping Tasks | User Story or Card |
|Tasks | Tasks as in Things to do in an Issue | Tasks as in Things to do on a Card

<font color=#777>(*1) We apply *Agile-DS* 100% for Software, borrowed from Toyota-PS what *Agile-DS* is missing for Hardware and added what is missing for Standards.</font>

## Roles
![](http://www.infochimps.com/wp-content/themes/infochimps/images/roles-conf-table.png)
*??? Find free svg silhouettes and rebuild this image. A twist would be to use personified Phoenix. Or just add one Phoenix sitting in one chair. ???*

| V² Roles  | Traditional Agile Equivalent|
|------------:|:-------------------|
| Community giving Feedback | Stake Holder / Customer |
| Board Member |  Stake Holder / Customer |
| Community User | User
| Community Contributor | Developer |
| Assignee |Developer Assigned to Card |
| Issue Owner
| Milestone Owner
| Scrum Master |
| Campaign Owner | Product Owner |


For more information → [V²Roles & Comunication](???) ???


## Data, Tools & Places
![Scrum Framework](https://dmquickscrum.files.wordpress.com/2014/11/sprint-planning.png)
*??? My Illustration with the same Call Outs, but with different Tool Tips. Each Tool Tip has same title, but the content is about which tool is used and where the data is stored. Say Cards in Waffle, etc ... ???*

**Tip:** *In this section we look at how the elements of V²Plan are stored and manipulated.  We will not discuss the workflow itself. This is discussed →  [V² Agile Manual](https://github.com/V-Squared/v2-Plan/wiki/v2-Agile-Manual) ???.*

| Data | Tools | Places |
|-------:|:--------:|:--------:|
| Input: (Bug Report, Feature Request, Idea) | GitHub Issues | Opened in Repo: v2-Input
|Product Backlog | GitHub Issues | Sorted into respective Repo, assigned to corresponding Milestone |
|Sprint Backlog| GitHub Issues + Waffle| Issue assigned to currently active Milestone + Assigned to current Board |
|Sprint Management | GitHub Issues + Waffle| Issue assigned to currently active Milestone + Assigned to current Board |
|Product | GitHub <>Code | of respective Repository |
|Documentation | GitHub <>Code | gh-pages repository |

V²Plan's Architecture is designed to efficiently support Agile Development:

1. Data Structures
2. Tools
3. Visualization
4. Roles



## Data Structures

### Planning → True North
The birth of V² was on the Facebook VillageViDock page in 2011, when the Community wanted PCI Express Expansion Box that works with many different computer. Over the next two years Hubert took on the role of Product Owner and developed with the community our *True North*: The Vision of a Modular PC with the PCI Express Expansion Box to be one part of the whole. More → [V²True North](#v2-true-north).

### Project → Campaign
The Road Map shows the way to reach True North via consecutive Campaigns. A campaign is a group of Milestones and lasts about 3 months while focusing all our efforts. As such a Campaign functions as the Major Project in Agile. At V² Initiative Hubert is the Product Owner and has worked with key members of the Community to develop our next campaigns, which are published on the [Plan section of V² Home Page](http://v-squared.github.io/#plan). We publish at least one future campaign ahead to make it easy for the community to request changes without forcing planning anew, which would be the case when changing a Campaign that is already in Sprint. More → [V²Campaign](#v2-campaigns).

### Product Backlog → Milestones
The Product Owner Hubert works with the corresponding Scrum Masters to break a Campaign into Milestones, which are a buckets of GitHub Issues. Each Milestone is created to have a *shippable* *Products* or *Product Features*. As such what we refer to as *Milestones* in *V²Plan* is referred to as *Product Backlog* in *Agile*.   More → [V²Milestones](#v2-milestones).


## Tools

## Visualization

## Roles
Roles are described in detail → [V²Sprint User Manual]()???




# V²Agile manages items *not* people
V²Plan is where we want to go and V²Agile is how we are going there. V² is a *Big Undertaking* and as such requires management. 

That said we subscribe to the key principles and methods of Agile, which is: People are smart and don't need to be managed. Tell them where to go and they will find a way to go there.

However, so many items such as features, deadlines, test criteria, etc ... are involved, that managing these is absolutely necessary. 

??? Sort in Writing from my old Article???


# V² Plan Architecture supporting Management
## No Milestone spanning Repositories

## V² Sprint
→ [V² Sprint Manual](https://github.com/V-Squared/v2-Plan/wiki/v2-Sprint-Manual)


# Management
## Responsibility & Delegation
- **Issue Owner:** Each Issue has one owner. He is ultimately responsible.
- **Issue Assignee:** Each issue has one assignee. She is responsible to get the work done. All progress or lack thereof is reported in comment to issue.
- **Task Assignee:** Each task can be given one @mention. He is responsible to complete the task. When done he need to tick it.

## Finding Work

## Asking for Help

## Reporting Progress

## Project Manager staying on Track
### All Issues of Milestone
### Project SCRUM Board in Waffles
### Manually updated Campaign Chart


## Do not leave data in GitHub Issues or Wiki
GitHub Issues or GitHub are great for what they are intended for. However, when synchronizing a Git Repository using a Git Client such as *Smart Git* they are not included and as such they are not archived. For this reason all our workflows must include that if at some point data aka Know How is stored in Issue or Wiki it will be transferred into an Article in the <>Code section.

# Contribution
The V²Plan resides in the *<>Code* section of its v2-Plan repository. As such contribution is as always:

- **Report Bugs:** Use GitHub Issues to report a Bug
- **Fix a Bug:** Fork the repository, fix the bug, make a *Pull Request*. We will include your fix.
- **Offer your help:** Study the projects of the current campaign. Then create an issue in this repository with a suggestion on how you can hep. We will reply to you as comment in the issue.


# Pages
## Find my work
The work to do is listed in GitHub Issues. But it is hard to develop and apply the right filters to find it. On the "Find my Work" Page these filters are build and easy accessible with a press of a button.

- **My Issues:**

## Campaign Map

## Road Map

## Campaigns
- **Campaign Brief:**
- **Campaign Plan:** Gantt
- :**Issues in Milestone List:** Filtered by Milestone
- Milestone Progress
- **Issues in Campaign List:** Filtered by Campaign Flag
- **Campaign Management:** Page designed for the *Campaign Manager* to quickly find: **1)** Projects behind schedule **2)** Issues that are stuck.



## Progress Report
-  **Automatic report in Milestone List:** 
- ** 

## Teams


## Round Trip Navigation
- **In Gantt:** 
   - Clicking Milestone opens a new tab with all its Issues listed in GitHub Issues
   - Both open and closed issues are listed
- **In Issues:**
   - Clicking its milestone icon reloads page showing list of all issues to this milestone
   - We list a link to go to Gantt chart of this issue in its reference section 



# Visualization
## Campaign → Brief & Gantt Chart
- **Purpose:** Understand all key aspects of the campaign in a glance
- **Fields:**
   - Target
   - Timing
   - Key Projects
   - Key Motivation
### Milestones → Gantt Chart
- **Purpose:** Show dependencies of Milestones in timeline
- Each  is visualized by its own Gantt Chart
- Each Milestone is one Row in the Gantt Chart
- Current Stages are shown and linked in Time Line in V² Home Page

### Issues → GitHub Issues List & Progress
- An overdue Milestone is shown in red
- Progress of all tasks of all issues of one milestone is consolidated and shown in progress bar


## Milestone Completion
The green progress bar in *Milestones* only shows percentage of closed *Milestones*. It does not consider closed *Tasks*.

- **Example 1:** 10 Issues with each 10 Tasks, out of which 9 of 10 are checked will show 0% complete, although they should show 90% complete.
- **Example 2:**  10 Issues with each 10 Tasks, out of which 0 of 10 Tasks are checked in every *Issue*. However, 2 Issues are closed. The green progress bar will show 20% complete, although they should show 0% complete.

### Conclusion to properly use *Progress*
1. Only close *Issues* after all of its *Tasks* have been ticked
2. Understand the progress of *Open Issues* by viewing their respective  *Progress Bars* as shown in the *List of Issues of Milestone*.

**Tip:** The first lines must be a *GitHub Markdown Task List* or the *Tasks* may not be considered when showing the *Issues Progress Bar*. In fact if you place the *GitHub Markdown Task List* somewhere lower down in the Issue, no *Issues Progress Bar* might be shown at all.


----

- True North
- Campaigns
- Projects

- True North
- Road Map & Campaigns
- Projects & Milestones




# Plan on V² Home Page
## True North
We will draw an image how the world will look like in 2021 after the successful introduction of V². It is a list of User Stories written in the perspective of: PC User, Journalist, Developer, Manufacturer, Retailer, Standard Community, so it is easy for you to find yourself and what V² will do to improve your life.

## Campaigns
Each Campaign is moving us closer to reach True North. 

## Projects


The Road Map shows the way to reach True North with key releases for each Quarter. Milestones breaks each quarter down into release targets for each month.

Finally each target is broken down into projects, that are manged in GitHub Issues.


# Page Structure in Plan
## Plan Home² 
- **Plan Portfolio:** Repeat the 3 Folio Items of the V² Home Page.
- 

## True North Home³
- **Layout:** Article Home Page
- **Articles:** On True North
- 
## Road Map & Campaigns Home³
## Projects Home³


# Repositories <a name="repositories"></a>

## Introduction to GitHub Repository
If you are familiar with GitHub Repositories you are safe to skip this chapter. But in case you are not 100% sure, here is brief summary of the key features:

### Git
Git was invented by Linus Torvalds, the creater of Linux. He wanted a safer and faster Revision Management System than were available. GitHub is a Git Server, thus the name. Git has a few unique features versus traditional Revision Management Systems:

- **Very Safe:** If you put your data into a Git Repository it will be almost impossible to loose it. And the more people use it, the more safe your data will be.
- **Very Fast:** You can work with all your files on your local disk. This makes working as fast as your computer versus working as fast your network connection in traditional Revision Management Systems.
- **Works Offline:** Ideal when you have local or no internet connection
- **Huge Community:** The developer community using GitHub is in the millions of people. Big projects like Linux or big organisations like Microsoft are on GitHub.
- **Free for Open Source:** Open Source project are hosted for free on GitHub with access to all features.
- **Free Web Hosting:** The GitHub hosting service includes hosting of a complete web site. Our web site V²Site is hosted using this *GitHub Pages* service.
 
### <> Code
This is where you code resides. It is the key function of Git and of a Git Server, such as GitHub.

### GitHub Flow
Git allows many workflows. In fact so many that it easily gives you enough rope to hang yourself. GitHub provides a very simple yet very powerful Git Workflow: *GitHub Flow*. It works for a team of 2 people and even for a company with 500 contributors. GitHub itself is developed using *GitHub Flow*.

### GitHub Issues
A full blown bug tracking and ticket system. It may appear simple, but the power is available under the hood. V²Plan sits on top of *GitHub Issues* and only extends its features when they are missing.

### GitHub Accounts
Anyone can create a GitHub account. It is free and fast to create. You can create your repositories or fork any public repository such as ours. Usually you get your work done as a GitHub User using your Account working on Forks. Creating a Fork is one mouse click and takes a second. Once you completed your work you click "Pull-Request" button.

### GitHub Organizations
Anyone can create a GitHub Organization. Like the name suggests it is for organizations as in a group of people working together. An organisation has repositories, where the work gets done. V² is a GitHub Organization.

### GitHub Jekyll
Jekyll is a web site compiler. The output is a static website. During compilation Jekyll merges its templates with your content to create a web site that can be as complex as you are used to by complex *Content Management Systems* such as Joomla. V² is a web site project with a 5 Level Navigation and when finished more than 1000 pages. We are creating it using Jekyll.


## Two Types of Repositories

### Web Site Repository
Each *GitHub Organization* can create one special repository with the name: {organization-name}.github.io. Our *Organization Name* is *V-Squared* so our web site repository name is: ```V-Squared.github.io```. The content in the ```master``` branch will be interpreted by GitHub as the *GitHub Web Site* for your *Organization*. It creates automatically the URL: https://{organization-name}.github.io which in our case is: [https://v-squared.github.io/](https://v-squared.github.io/). Thanks to HTTPS in combination with the Jekyll pre-compiler concept this site is very fast.

Each *Project Repository* has its own gh-pages web site. For consistency and simplicity reason we have opted for now to host all web pages in this repository. This means all web pages in regards to other *Project Repositories* are also hosted here. 

### Project Repository
All Projects that are not the organization web site are Project repositories. Your Project Repositories will differ of course. For our reference and possibly your inspiration, here is a list of our current *Project Repositories*:

{:.uk-table.uk-table-hover.uk-table-striped.table-detail}
| Repository | Purpose |
|------------:|:-------------------|
| v2-Tabs | Angular Tabs that can be selected and scrolled toward with a deep URL using hashtag. Compatible with ng-repeat. |
| v2-Tooltip | SVG and HTML responsive Angular Tooltip Directive. Supports: Touch Screen, Mouse Over and Links and HTML in Tooltip|
| v2-Production | All Production information on V² Trailblazer Products: Production Dates, Known Issues, Feature Requests, Versions. |
| v2-Art | All Artwork used in V² Projects |
| v2-Configurator | Powerful, yet simple to use PC Configutator with community features |

**Tip:** If you are unsure if your new project belongs into the *Web Site Repository* or into a new *Project Repository* you can figure this out by asking yourself the following questions:

- Goes to *Web Site Repository* if answered with yes:
   - Are all project files Articles?
   - If you have project files that are web apps, are these web apps only used on our web site?
- Goes to new *Project Repository* if answered with yes:
   - Do project files include other files than Articles?
   - If project files are a web app, will they be used on other web sites than ours?


# Labels <a name="labels"></a>

## Purpose
The purpose of labels is for you to invest a little time into classification to save big time when you need to search.

## Mandatory Base Label groups and their function in V²Plan:
4 mandatory labels have to be selected on issue creation. They are needed for other parts of the V²Plan system to function.

1. m.board: Which Section of our Organization the issue belongs to.
2. m.size: Size of issue to give idea on how long it takes to finish
3. m.sprint: Column information for Waffle Kanban Board.
4. m.type: What kind of data is created with execution of the issue.


## Optional Base Label groups and their function in V²Plan:
Like the name suggestions you can add optional labels, but you do not have to.

1. o.debt: Technical debt. You close the issue now, but later have to fix the debt.
2. o.help: What kind of help the Assignee is looking for.
3. o.urgent: What needs to be done ASAP.


## Color Code
- Visually groups labels for faster access and faster comprehension

## When to assign what label
The following table lists all labels and explains when to assign what label and what actions are requested by the assignment of a label.

## Real world example
→ [GitHub►V²►V-Squared.github.io►Issues►Labels](https://github.com/V-Squared/V-Squared.github.io/labels)

## Consistent Base Labels for each Repository
For the sake of consistency we have added the same *Base Labels* to each repository. We may choose to add *Special Labels* to repositories with special functions. However, our structure is that all Articles (including those about developments in other repositories) are in the V-Squared.github.io repository and not in the dedicated repository. In turn we need all special labels to be dublicated in the V-Squared.github.io repository.

## Tip
Most repositories use colons in the label name to structure groups. E.g. "sprint: now". This leads to hard to read URLS: ```https://github.com/V-Squared/V-Squared.github.io/labels/sprint%3A%20now```. Using dots gives you two benefits: First your label names are shorter: "sprint.now". Second your URL remains legible: ```https://github.com/V-Squared/V-Squared.github.io/labels/sprint.now```

## Tip
Name your labels so that the important labels are listed on top. GitHub displays labels in alphanumeric order. So choose your names accordingly. E.g. we grouped our labels into mandatory and optional and added "m." and "o." prefix to the label names. Mandatory labels are more important and are listed first. This is not by accident. We choose the names "mandatory" and "optional" so that the more imporant one is listed first in alphabetical order.


# Navigation in Plan


# Burn down

# User Manual
## Campaign Manager
### Creating Road Map
### Creating Campaign
### Burn down campaign

# Pages / Bookmarks / Workflow

# Branching / Merging

# Improvements
These are the improvements when compared to previous method of planning:

1. Timing and dependencies of projects is visiolized in Campaign Gantt Chart
2. We can see a list of all Issues of one project
3. We can see progress of project in progress bar of milestone
4. It is very easy for a contributor to find next thing to do by looking at open issues
5. Specific procedures for Creating Campaign, Burn down campaign
6. Optimized procedures for daily work with specifc page designs and bookmarks


# Reference
- [angular-gantt](https://github.com/angular-gantt/angular-gantt) Reads Gantt Data from JSON and renders Gantt Chart as HTML + SVG + CSS. We will use this one first.
- [gh-issues-gantt](https://github.com/neyric/gh-issues-gantt) automatically render Gantt Chart of GitHub Issues. We may use this as an example project to understand how to read the GitHub API. Then write the data into the JSON of **angular-gantt**.



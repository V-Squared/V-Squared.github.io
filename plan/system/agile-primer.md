---
layout: page
title: Agile Development Primer
subtitle: How Incremental and Rapid Develop works and its benefits.
abstract: Complete Introduction Article on how Agile Development works and what are the benefits versus the Traditional Waterfall Development. The key idea and key benefit is to produce a Shippable Product Increment aka Iteration in a very short time, such as one week. This makes for a very fast Return of Investment as well as very fast Customer Feedback. We excluded any V²Plan specific information so that those already knowledgeable on Agile Development can safely skip this Article.
issueNo: 68
---


--------------------------

# Status

| Type  | Info |
|------:|:-----|
| Source | [ViDrive](https://docs.google.com/document/d/1KHvX7h8dCXUn17kpc5IGR4rL_YCMnZLJpOyFvtEAXz0/) → Classeur |
| Readiness | Develop |
| On GitHub | [agile-philosophy.md](https://github.com/V-Squared/v2-Plan/blob/gh-pages/system/agile-philosophy.md) |
| Issue | [Write V²Agile Philosophy Article #17](https://github.com/V-Squared/v2-Plan/issues/17) |

--------------------------


# V²Agile Philosophy

## Why call this a Development System rather than a Project Management System

Because developer are smart individuals, they are not inventory items. If you manage your developers, you demotivate them and reduce their productivity. Developers are very creative. Tell them what is the target and they find a way to accomplish it.

So lead developers and manage items. That is what this Development System is about: Leading Developers and Managing Items. Such as the target, its deadline, its budget are all items which need to be managed. Thus the Development System needs to provide both: Features for Leading and Features for Management.

Hence we simply called it Development System. Finally we will show you procedures and a software system to implement all this in real life.

## The big overview

Vi²DS is short for our Standardized Development System. It is an implementation of the Agile Development System, which is based on the TPS (Toyota Production System). 

This is a good thing. Since production follows development, communication between production and development team will be easier if both are using the same methodology to stay organized.

The Vi²DS differs from most other development system in that it it is leading developers and not managing them. This standard defines terminologies, work approaches, delivers a complete set of instructions for all positions in the development team and introduces a high quality free software for organizing your development in a team. 

Village is using the Vi²DS inside our company, in joint projects with partners and it is used in all Birds of Feather Teams of the Vi² Open Standard. At a later time Vi²DS might be integrated into Vi²BPM.DS. For now it will be stand alone.

## Based on Agile Development System

This development system is completely based on Agile. So whenever you find our documentation not detailed enough, you can search on the internet for more. However, Agile is young and not completely standardized, thus you might find some inconsistencies. That is also the reason why we try to write a complete documentation about how we use Agile. And besides the methodology of a system there is also always the matter of application, which can differ a lot.

## Agile is about getting things done, this is why there is a new value approach:

- **Individuals and interactions** over processes and tools
- **Working software** over comprehensive documentation
- **Customer collaboration** over contract negotiation
- **Responding to change** over following a plan

That is, while there is value in the items on the right, we value the items on the left more. ([http://agilemanifesto.org/](http://agilemanifesto.org/))

## 12 Agile Principles

1. Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.
2. Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage.
3. Deliver working increments frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.
4. Business people and developers must work together daily throughout the project.
5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
6. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
7. Working software is the primary measure of progress.
8. Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9. Continuous attention to technical excellence and good design enhances agility.
10. Simplicity--the art of maximizing the amount of work not done--is essential.
11. The best architectures, requirements, and designs emerge from self-organizing teams.
12. At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.

## A nice Video on SCRUM and Agile Development
- [http://scrumtrainingseries.com/Intro_to_Scrum/Intro_to_Scrum.htm](http://scrumtrainingseries.com/Intro_to_Scrum/Intro_to_Scrum.htm)
- [http://scrummasterchecklist.org/](http://scrummasterchecklist.org/)
- [http://scrumreferencecard.com/ScrumReferenceCard.pdf](http://scrumreferencecard.com/ScrumReferenceCard.pdf)

## Agile is based on TPS

Agile is a Software Development Method, which is using a lot of principles and methods of the Toyota Production System. Software development was supposed to be faster than Car development. But when Toyota developed faster new cards than software companies developed new Increments of their Software (Toyota every year, Microsoft every 3 years) then the software industry looked at Toyota for inspiration. The Toyota Production System is very well documented, thanks to Toyota’s spirit of teaching. And the result is the Agile Software Development System, which is now definitely faster than car development, with an average incremental development cycle of 2 … 4 weeks!

## Kanban on the SCRUM Board

On of the key methods in the Toyota TPS (Toyota Production System) is Kanban. It literally means signboard. Work that needs to be done is represented by a Card. The Kanban board is divided into stages corresponding to the stages of the process it represents. When the work is progressing through its stages, so does the card by moving from the corresponding section to the next section on the Kanban board, being a signal of where the work is.

And this is where the value of the Kanban Board in Agile comes in(, from now on referred to as SCRUM Board): As a Project Leader / Manager you can see very fast how your project is doing. How fast are cards moving from left to right? Is any card stuck?

## Agile is called so, because after 2 … 4 weeks you have a shippable increment of your product

That is fast, right. Thus it is called Agile! Fast has many benefits. A project this short is so short that nobody loses overview. Your Return of Investment is of course great! And developer and sales people’s motivation is of course high, as there is always something finished and something new to sell. The benefits are so dramatic, that Agile Development System in Software Engineering is now becoming the predominant form in Software Development. Same as the Toyota Production System is becoming the predominant form in Production. But whereas changes in production are inherently slow, the changes in the Software Industry are moving at a much faster pace.

## We are implementing Agile for Software, Hardware and Standard Development

Implementation for Software is a no brainer, just find good instructions on the internet and follow them. For hardware this is another matter. Electronics Hardware typically has at least a one year production life cycle in which it is produced without any significant change. This long life cycle is against the idea of Agile. You develop a new increment, then you put it in production. 

And this is why Agile in Development only makes sense when you have a TPS in Production. In TPS you have no more than 4 weeks worth of inventory and you have very short lead time for all parts. (Where not possible, you have to keep stock, but you would also avoid during design phase to remove such parts). You also have a very modular design, so you can make a production change on one module only, making an incremental and completed development realistic, by making it focused on one module only.

So any design change you made in the Agile Development you can put to production within 4 weeks, thus shippable product increments within 4 weeks will become a reality with ViDock G4. 

This will smooth out the big irregularities in sales and production volume at the end of the old product and the beginning of the new. With incremental product upgrades, there will be no major difference anymore.

As for using Agile in Standard Development, we will just have to do it, by crossing the river seeking the stepping stone (Deng Xiaoping). I found zero documentation on how standard organizations manage and lead themselves. So we have to figure this one out for ourselves. 

## Leading versus Managing

In leading you show your developer where to go. In managing you tell him every step on how to go there. Developers you are led are more motivated and work self driven. Developers who are managed wait for you to tell them and to push them. That is why you have to manage managed developers and are very busy in doing so and both of you will not be happy. Instead if you simply tell the developer what his final result has to look like, he may surprise you in delivering a solution better than what you had in mind, or he might arrive there in less time than you thought is needed. A developer should always have a better knowledge on the details than the Leader. And the leader should have a better overview than the developer. So they should help each other in their strengths and compensate each other's weaknesses.

## Organizing centered around Sprints

A sprint is an iterative development process that delivers a shippable product increment. We are using Agile for Software, Hardware and for Standards, so specifically for us this means:

|    Class | Shippable Increment                             |
|---------:|-------------------------------------------------|
| Software | New Release                                     |
| Hardware | New Module or new Carrier or new Housing        |
| Standard | New Sub Section or new Section Table of Content |



## True North, 5 Year Plan, 1 Year Plan, Next things to do plan

The process of determining flows from the True North, which is like a Target for the company in 30 years into the future, to the 5 year goal, to the 1 year goal and then eventually to the next months goal, which is then expressed into 1 or 2 sprints.

## Each Project goes through the same Stages

These Phases are:

|       Stage | Description                                                                                                                                                                                                                                                                                                                                                                                         |
|------------:|-----------------------------------------------|
| Preplanning | This is everything before Planning a Project. This will include your yearly meetings to set your annular goals and adjust your 5 Year Targets and inspect your True North. This also includes on the short term side your ideas board, your Inbox, your customer feedback board etc. In short management and structuring of all information which will be input to the planning phase of a project. |
|    Planning | The planning stage of a project. This is done on the (Product) Planning Board. Its output is the product backlog. We will differentiate between themes which is an ongoing flow of new user stories flowing into the product backlog of a theme and after processing will flow into the SCRUM backlog. Whereas project will be a one time affair only. |
|      Sprint | The incremental development process in which all user stories (cards) of the SCRUM backlog are worked upon until their work is completed and the result is a shippable product increment.  |


## Actual work gets done during the sprint

This is why the sprint team or SCRUM development team has the most people to keep efficiency high. And ideal Product Owner and SCRUM master work in the background to prepare the next sprint. This would allow the spring team to stay in the development flow all the time and thus to be really productive. Once this flow is achieved pulling people out of SCRUM development and asking them to do other work will be perceived as if you interrupt their productivity.

## Work progress shown on the SCRUM board

One of the reasons why SCRUM works so well is due to the many feedback loops. Feedback loops shows quickly what works and what doesn’t, so that everybody can enforce very quickly what does work and fix what does not. What does not work is rooted out so fast, that it can not turn into a bad habit.

The SCRUM board shows the progress of each card and thus showing the progress of the entire spring. This direct signaling is one of the most important feedback loop of SCRUM and is certainly one of the most used once, with a review everyday.

## Sprints are completing work into a shippable increment within 2 … 4 weeks time span

We have said this here several times but it bears repeating. A 2 weeks sprint period becomes a kind of industry standard with a fixed two weeks cycle. Starting on a Monday with the Spring Planning Meeting and ending on a Friday with a Sprint review meeting. The team chops off the right amount of work they can get done in a 2 weeks period and then completes the spring and shows off in a show and tell meeting to every stakeholder the new shippable product increments. This way sales knows what to sell and tech support knows what to get ready for.

## The SCRUM team manages themselves with the SCRUM Board in daily SCRUM meetings

There is a timeboxed stand up meeting every day, where each team member shows what he did and what he is going to do. She shows impediments and progress, challenges and solutions. The team works together to keep each User Story win the Work in Progress Section progressing. Each user story is represented by a card and progress would be to move from one stage (represented by a column) to the next stage.

## How Planning, Sprint, SCRUM and Burn Down are related

This is best shown in below graph:

![](https://lh4.googleusercontent.com/J5fDHwRY6LPGn1aBB6cdaesLOxWG-AjAJY5BElZtY-KddKURBOFzAPo3SuQXrrA3FW1GlmA7BG1p6oythNXABvvvvHHosnMmqD39EapIsJCFuCOes6UtHeOPqjG0iNia8Qh9cas)

In Planning all tasks or mini projects are compiled into a list of cards. Once planning is complete, the cards are transferred to the backlog of the SCRUM board. In daily SCRUM meetings the team decides which cards are moved from backlog into the development process. From thereon the responsible developer works on getting the work done the card calls for. In doing so the card is moving from left to right through the SCRUM board. Changing a column indicates the progress, visible to all team members. The daily SCRUM meetings discuss the progress, problems, which cards to take out as the work they represent has been completed and accordingly which cards to enter into work in progress from the backlog. The SCRUM board functions as the communication center in these meetings signaling the state of the entire project. Since during the spring the work is worked down, it is called the burndown of the sprint. When done, you will have a shippable increment of your product. Before filing the project away, you will perform a spring review, clean up loose ends and archive the knowledge needed for reference in google drive document.

## SCRUM Elements

### Roles

#### Product Owner
- Responsible for RoI (Return on Investment). Makes the business calls.
- Final arbiter of requirements questions
- Focuses more on the what than on the how
- Provides the vision behind the product

#### SCRUM development team

- Cross functional (discipline) group
- Builds a shippable product every increment (2 … 6 weeks)
- Collaborates
- Self-organizing
- self-optimizing the team after each sprint
- small teams of 4 … 9 people (we can use the instinctive social skills of a family)
- put the team into one room. If working international, let them work together for some time and then let them rejoin every few months

#### SCRUM Master

- He is a facilitator and not the manager of the team
   - No decision Power
   - He is the facilitator
- Protects the teams from interruptions
- Helps teach people how to use SCRUM and promotes SCRUM
- Keeps people on schedule
- Creates visibility
- [SCRUM Master Checklist](http://www.scrumalliance.org/community/articles/2010/november/an-example-scrummaster-s-checklist) (not really suitable for us, as it is intended for large SW organizations. But it gives a feeling on what a SCRUM master does by looking at his checklists. Eventually we need to define the role for us. This will take a while and we need to find out who will be doing this. In between our senior team members need to do what they can)

## Waffle as the Kanban Software to manage the details 

Just to repeat what is really worth repeating. What we have to manage are details, not people! Waffles is a cloud based software. It is fast and works reliable. You can start using it for free without any limitations. As a company eventually you will want to get the Business Class though to reduce your administration overhead. 

Waffle Implements two key functions: **a)** Boards with Lists and **b)** Cards that you can move between lists. The top of the card gives you the most important information at a glance, such as the owner, the due date, the title and how much of its tasks are complete. And when you want to see more, you can open the card and check out the rear.

For our purpose of managing the details of a project this works great. 

## Archive on Google Drive the Knowledge of the Project in a Document

The Agile Project Management with Trello is focusing on the moment. Meaning it is all about to make your work efficient. This system does not care about documentation nor archiving. You can archive cards and you should, but if say a year later you want to get an overview of that project, it will be no fun to find all spread around cards and put them into order and context. This is NOT the purpose of this system. 

Documentation instead is the strength and purpose on Google Drive Documents. We will create one new document for each project. It is very useful that both Google Drive Document and and Trello create static links.

In a Trello card you can refer to a google drive document, or even jump to a heading within that document in a link which you can place in the cards description, in the cards task or in the cards comment. (tested).

In Google Drive Document you can link to a Trello Board or to a Trello card. (tested).

## Issues will move through your board and then disappear

It should be like your desk. You have an inbox. New stuff comes in all the time. When you are done you have an outbox. And in a classic organization this would include a special outbox for your assistant to archive your documents, so that if needed, she can retrieve it for you. 

This is exactly how trello board work. Stuff comes in. You organize it in cards and then you work on the cards. Finally the cards are move off your board and onto someone elses board until the work the card represents is finished and the card is archived.

So in a sense you work never ends, same as in real live. But what this system does is to organize it in less time than other systems and to keep a better overview. It is also very helpful to discuss current work within your team. You will find out doing this on a SCRUM board when done right will be very fast and very motivating for your team.

## Keep the knowledge in <>Code and only refer to Issues
??? rewrite below paragraph???
Since your information only passes through your Trello Board and then disappears, this is clearly not the place for archiving. Thus we write about to archive in Google Drive Document. And since you have a stage where you collect all valuable information from your Trello board and card for a project, you can make your life easier by keeping all information which need to be archive straight from the beginning on Google Drive in documents and only reference to them in the Trello cards.

# Important Agile Terms
*It is not only about the definition, it is also a different way of thinking versus a managed team*

## User Story

A User story is simply something a user wants, expressed in his point of view. It typically follows this format:

As a *type of user*, I want *some goal* so that *some reason*.

User stories are written on Cards in Waffle / Issues. 

User story shift the focus from features to understanding and delivering what the user wants. This makes the developer automatically to deliver something the user values. Since the developer understands all implications ( or incase when he doesn’t the goal of the user can not be accomplished and the failed acceptance test will show that quickly), the very short user story is often sufficient in the hand over from product owner to SCRUM team. 

## Epic

A bundle of User Stories. Typically an Epic needs to be chipped down into User Stories before they can be processed in SCRUM. It is very common that one starts writing intending to create a User Story only to figure out that in truth it is an Epic and this needs to be chopped down into User Stories

## Example of EPIC and User Story

One of the benefits of agile user stories is that they can be written at varying levels of detail. We can write a user story to cover large amounts of functionality. These large user stories are generally known as epics. Here is an epic agile user story example from a desktop backup product:

* As a user, I can backup my entire hard drive.

*

Because an epic is generally too large for an agile team to complete in one iteration, it is split into multiple smaller user stories before it is worked on. The epic above could be split into dozens (or possibly hundreds), including these two:

* As a power user, I can specify files or folders to backup based on file size, date created and date modified.

* As a user, I can indicate folders not to backup so that my backup drive isn't filled up with things I don't need saved.

## Example of adding detail to Epics and User Stories

- By splitting a user story into multiple, smaller user stories.
- By adding “conditions of satisfaction.”
- By adding tasks which are steps to accomplish the goal
- By describing how it looks when it is finished

## Relationship of User Stories to traditional Requirements Documents

Agile projects, especially Scrum ones, use a product backlog, which is a prioritized list of the functionality to be developed in a product or service. Although product backlog items can be whatever the team desires, user stories have emerged as the best and most popular form of product backlog items.

While a product backlog can be thought of as a replacement for the requirements document of a traditional project, it is important to remember that the written part of an agile user story (“As a user, I want …”) is incomplete until the discussions about that story occur.

It’s often best to think of the written part as a pointer to the real requirement. User stories could point to a diagram depicting a workflow, a spreadsheet showing how to perform a calculation, or any other artifact the product owner or team desires.

## Feature

Feature(s) is the (traditional) thing(s) that needs to be implemented in order to make a User Story happen. They can be itemized and tasks can be spelled out to develop each feature. It is important to understand to minimize the number of features needed in order to accomplish the User Story.

## Theme

Theme is a broad way of describing an Area of Focus. 

## Project

The project is very finite. It has a beginning and an end. It has a finite number of tasks to do. Once you worked down your project it is completed. You will archive it for reference and only refer to it in an extraordinary situation.

## When to use Theme and when to use Project

In case you work on the same Themes over a period of times, then they should be grouped in a Theme list on your product planning board. The Theme list will stay there, as new User Stories will come in, forma product backlog and then will be transferred to the SCRUM backlog.

A project instead is more of a one time affair. When the Project is transferred from the Product Planning board to the SCRUM Board, the Project list is erased on the Planning board. Once all User Story cards walked through the SCRUM board and have been archived, the Project is completed and no longer on the board and on the mind of the team.

Now we are ready to dive into detail Articles




<table style="border:none;border-collapse:collapse"><colgroup><col width="231"><col width="505"></colgroup><tbody><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Evaluating Trello](https://docs.google.com/document/d/1YSqaIK4SsP4HS0WKHnSeFaoOuETNLf-pco9HQ1_-6eM)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Protocol and results of evaluating Trello and a few other alternatives

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Preplanning](https://docs.google.com/document/d/1_0wUoRR1VUOuQwgG9hBfWSZftTOmpEQOzMhJaDRKFMg)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Workflow on how to arrive to cards in Planning

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Planning Board](https://docs.google.com/document/d/1tIeDFTDre4mZDxSmyvFKsOPPsx3F9BQfIUR9ybRPUDY)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

All components and functions of the Planning Board explained

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[SCRUM Board](https://docs.google.com/document/d/1-ZzOGGqneGaa8STssWudpc9g17hmFHz1gW5MyHG4rks)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

All components and functions of the SCRUM Board explained

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Administering Trello](https://docs.google.com/document/d/1mrYqNoNAkZtZTuJzu30jh8oD3jghlzLOoJ7SWJAfwaw)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Procedures and background information on Administrative Tasks for Trello

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[From Planning to Sprint](https://docs.google.com/document/d/169CiK6O1lbnP4-HbAo_SWS45lv7oNAuv9zOjTeXox-E)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

How to move a planned project from Planning Board to SCRUM Board

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[SCRUM Meetings](https://docs.google.com/document/d/16aMdJcYlj12k8ieziTJcMPjQAaDg52BjQfTQ3qMN1MA)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Procedures for efficient Meetings on Planning with the Planning Board

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Planning Meetings](https://docs.google.com/document/d/17zcDWw2GP1NWpaNZxhnDfmHTbQHbZP_Vp70KPrH61pY)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Procedures for efficient Meetings on Planning with the Planning Board

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

Vi²Agile Workflow Cheat Sheet

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">  
</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Solving Problems](http://drive.google.com/open?id=1kWNHXdvgWhaLWMaW2NMuCnoFv3eI1AmJ_u9vvtXWhBg)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

While introducing Vi²Agile we hit problems which we are solving here

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

Holding Mini Sprints

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Holding Mini Sprints together in the Planning Documentation

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Google Calendar for Agile](https://docs.google.com/document/d/13wRkVT4ubmOloIGwnu1XzZYSc5BDKIyJM5wWGvcQN_o)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Basic usage of Google Calendar for team members to get together at the same time

</td></tr><tr style="height:0px"><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;background-color:#cfe2f3;padding:7px 7px 7px 7px">

[Rules](http://drive.google.com/open?id=15kyD2scljAMLU1lhcPdb3uzca4NHwiU7OZin1Ne_lWA)

</td><td style="border-left:solid #d9d9d9 1px;border-right:solid #d9d9d9 1px;border-bottom:solid #d9d9d9 1px;border-top:solid #d9d9d9 1px;vertical-align:top;padding:7px 7px 7px 7px">

Creating consistency in work and workflow by written down, agreed upon and rules

</td></tr></tbody></table>

# Problems and processes we are facing introducing SCRUM

## We have many projects open the same time

We need to find out why that is. How much is miss management by Hubert and how much is needed due to requirements in the development flow. For sure the number of open projects can be reduced. We will do a clean up of closing the open projects and we will be more careful when opening a new one.

## Only one project open in HW development is not efficient, as you will have waiting times

For sure we can not do as in SW. E.g. after PCB tape out we have to wait for PCB to come back, then a different team has to assemble it, etc. before it comes back. Also in housing development we sometimes need to wait for samples, and this sometimes can be weeks with even no exact schedule give. To keep productive, we are working on another project while waiting for items to continues in the previous one.

## In standard development we have many dependencies, so we can work so far and then have to wait

This is a big problem and possible we just have to accept it. 

## We are too small to have a SCRUM master

We just are too few people. The role of the SCRUM master makes sense. For now the experienced team members have to wear this hat to do what they can. The name of the game is to grow. Build larger teams. Keep the idea and function of this role alive and let a SCRUM master emerge from the new SCRUM team. 

## How could a SCRUM team looks like for our products

1. PCB Engineer
2. Circuit Engineer
3. Software Engineer (mostly AVR Firmware, but also some Arduino IDE coding)
4. 3D Mechanical Engineer
5. Product Architect ( put all the things together )
6. Community Interface ( Web Design, Tech Support, Documentation, Product Feedback )

## Quality Testing

We want to do an approach of the Product Owner to start specify acceptance criteria right in the beginning which should inspire the developer to add even more quality criteria and then develop the quality test as well. During development the developer tests accordingly and during the Spring Review each User story is tested for full quality acceptance criteria compliance. Team members should try if they are able to force bugs early on. We will always develop the quality test procedure together with the function and only put a shippable increment into production if the test is ready as well

## How a SCRUM team for a bird of feathers team in standard development is different

* Most members do this in their free time, so progress is much slower

* Face to face meetings of the whole team are very impractical, due to different time zone

## Adapting SCRUM to smaller teams?

We have teams of only two on various projects. We need to see if we either increase team size by merging a few teams of if we modify the SCRUM process accordingly.

## In the beginning forget about fixed 4 weeks Rhythm for HW and 2 weeks for SW and web, but plan for it and tune for it in every review

We will keep planning for it. Then do the sprint and then in the Review and Retrospective Meetings learn what went wrong and incrementally become better to keep the schedule until we are perfect. As always, practice makes perfect!

# The big motivations to go for Agile at Village

## Shippable monthly Product Development Increments

In the software industry a 2 weeks increment becomes standard. But I think for hardware this is too aggressive. In fact after we can make it to have a 4 weeks shippable increment we should have one of the fastest hardware development processes in the industry. This short innovation span has the following advantages:

### Take benefit of our new fast production process

This is kind of chicken and egg. But we developed the new fast production process as a complement to the new fast development process. You need to have both in order to use one and benefit from each of course.

### Increase satisfaction of staff

Fast development cycles is important for motivation of our staff. Chinese people need to feel to be in a fast team or they think they work in a losing team.

### Increase satisfaction of our community

Our focus is community development. Being able to quickly respond to new demands will help us increase our community.

## Higher efficiency and stability in development

We have developed a habit to have too many projects open. This new approach will help us to focus on less and thus to speed up development cycles for individual projects. This increases Return on Investment as well as shorten time from inception to shipping and thus have a faster feedback loop. Faster feedback loop always result into a more stable organisation and higher efficiency!

## Combine the fast turn around cycle with money feedback

Once we can establish a trusted fast speed for each sprint, we can put a new product increment into the Village Kickstarter store and let customer vote with their money. They trust that we will deliver has we have established a track record. ANd we can trust that once the sprint is finished, we have something to sell.

## Develop complete products in only one sprint

This is of course only possible due to the new modular approach. But we are almost there. Most product soon will consist of the same Hybrid ICs, but combined in a new manner. We mostly would need two glues:

1. Firmware: To make the modules communicate together

2. Carrier: To hold the modules

Both can be developed in less than 2 weeks, giving enough time for prototyping and testing in a 4 week cycle. Sprint with SCRUM is the ideal methodology for this.

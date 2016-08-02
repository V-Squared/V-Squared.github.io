---
layout: page
title: Classeur User Manual
subtitle: Community Manual to the Markdown Editor Classeur
abstract: >
  Classeur is the leading markdown IDE. This Classeur User Manual is our contribution to the Classeur community. As always, anyone can contribute. Click the V²Flow button, next click "Edit Article". You can add a comment to the issue of this article or you can edit this article directly, resulting in a pull request.
issueNo: 218
readiness:
   - is-complete
   - is-active
contents:
  - name: Using this Manual
    url: using-this-manual
    subitems:
      - name: User Manual Structure
        url: user-manual-structure
      - name: Tutorials
        url: tutorials
      - name: Passes
        url: passes
  - name: Introduction
    url: introduction
    subitems:
      - name: What it Does
        url: what-it-does
      - name: Capabilities
        url: capabilities
      - name: Classeur Project
        url: classeur-project
  - name: Understanding Classeur
    url: understanding-classeur
    subitems:
      - name: Organizing your Articles
        url: organizing-your-articles
      - name: 3 Screens for 3 Modes
        url: screens-for-3-modes
      - name: Exploring Screen
        url: exploring-screen
      - name: Settings Screen
        url: settings-screen
      - name: Writing Screen
        url: writing-screen
      - name: Writing-Menu Screen
        url: writing-menu-screen
  - name: Setting Up
    url: setting-up
    subitems:
      - name: Writing Screen Preferences
        url: writing-screen-preferences
      - name: ToC Depth Settings
        url: toc-depth-settings
      - name: Tutorial Create Account
        url: tutorial-create-account
      - name: Tutorial Link Host
        url: tutorial-link-host
  - name: Tutorial Managing Documents
    url: tutorial-managing-documents
    subitems:
      - name: Selecting Binder
        url: selecting-binder
      - name: Searching Articles
        url: searching-articles
      - name: Moving Articles
        url: moving-articles
      - name: Open Article
        url: open-article
  - name: Writing
    url: writing
    subitems:
      - name: Markdown Intro
        url: markdown-intro
      - name: Zen Mode
        url: zen-mode
      - name: ToC, Navigation & Scrolling
        url: toc-navigation--scrolling
      - name: Suggested Window Setup
        url: suggested-window-setup
      - name: Current Preview Limitations
        url: current-preview-limitations
      - name: Tutorial Writing
        url: tutorial-writing
  - name: Publishing
    url: publishing
    subitems:
      - name: Publishing Power
        url: publishing-power
      - name: GitHub Pages Publishing
        url: github-pages-publishing
      - name: Create ToC
        url: create-toc
      - name: Push to GitHub
        url: push-to-github
      - name: Creating Classeur Account
        url: creating-classeur-account
      - name: Tutorial Export ToC
        url: tutorial-export-toc
      - name: Tutorial Publishing
        url: tutorial-publishing
  - name: Remaining Mysteries
    url: remaining-mysteries
    subitems:
      - name: Export Pandoc TOC
        url: export-pandoc-toc
  - name: Modes
    url: modes
  - name: Improvements
    url: improvements
    subitems:
      - name: Setup Classeur
        url: setup-classeur
      - name: Related Open Issues
        url: related-open-issues
  - name: Terms
    url: terms
---





# Using this Manual

## User Manual Structure

This manual is structured in the order a new user will explore and use Classeur:

1. [Introduction](#introduction) Key purpose and list of capabilities.
2. [Understanding Classeur](#understanding-classeur) Grasping Classeur's philosophy speeds up your learning.
3. [Setting Up](#setting-up) Configuring Classeur so it works for you.
4. [Managing Documents](#managing-documents) 1) Create or find an Article. 2) Group articles in folders and binders.
5. [Writing](#writing) Write your articles in markdown with powerful WYSIWYG tools.
6. [Publishing](#publishing) Post your articles on your blog or website directly from within Classeur.
7. [Improvements](#improvements) No app is perfect. Here we record improvement ideas and check their progress.
8. [Terms](#terms) Definition of terms used in this manual.

## Tutorials

Our tutorials will walk you through the entire workflow from configuration to publishing.

- [Tutorial Create Account](#tutorial-create-account)
- [Tutorial Link Host](#tutorial-link-host)
- [Tutorial Managing Documents](#tutorial-managing-documents)
- [Tutorial Writing](#tutorial-writing)
- [Tutorial Export ToC](#tutorial-export-toc)
- [Tutorial Publishing](#tutorial-publishing)

## Passes

__First pass is better than nothing:__ I am writing this manual to help out the Classeur team because at this time they do not have one. This also means I have no reference information other than the working App itself. In order to make it easier for you to memorize I am explaining the philosophy and underlying principles of Classeur. I also needed to make up a few item names so I can refer to them without the need to add too many screen shots. Without having a chance to talk to the author or having access to his documentation there is a chance that I got it wrong.  In such cases please accept my sincere apologies. 

__Second pass makes it nice:__ You can easily give feedback with the V²Flow Button via the Article Issue or edit this Article directly. I am also hoping in the future to have the opportunity to directly talk to the author of Classeur to deliver his philosophy and gestalt truthfully in the first pass of any future writing, saving both of us the time of correcting mistakes.

# Introduction

## What it Does

### Markdown WYSIWYG

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/intro-classeur.png)

Many authors find writing in markdown more productive than using other authoring tools. In the past it came at the loss of WYSIWYG. Classeur now offers the best of both worlds: The zen style focus and speed of writing in markdown and the intuitive review power of WYSIWYG. 

The snapshot above was taken when I wrote this Classeur Manual in Classeur:

- __Left Pane:__ Markdown Source Code. This is where you write.
- __Middle Pane:__ Live Preview. WYSIWYG. This is where you review.
- __Right Pane:__ Live Table of Contents (ToC). This is where you navigate.

### Single Click Publish

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-single-click.png)

With a single click you can publish your writing. Provided you linked your blog / server accordingly.

### Integrated Workflow

During writing you will go through the process of incubation, writing, editing, and publishing. Classeur supports you through this entire workflow.

### Integrated Article Management

When writing on a larger body of work (blog, website or intranet server) you will end up writing on several articles simultaneously prior to publishing. Classeur offers you a complete documentation management system, enabling you to build with the same navigation structure during your development as the one used in production.

### Collaboration

It promises interesting collaboration features. I will document them after I have figured out how to use them. 


## Capabilities

{:.uk-table.twin-head.twin-blue}

| Feature | ✔ | Note |
|---------:|:--:|:------------|
| Cost | ✔ | Free for 100 files, $3 / month for unlimited files, also has enterprise edition. |
| Customization | ✔ | Rich with intuitive UI. |
| Speed | ✔ | Fast. Complex documents on a PC with Celeron work smoothly. |
| Reliability | ✔ | Never lost any writing. Good enough to use in production. Its bugs can be worked around. |
| Support | ✔ | You can search and open [GitHub > Classeur > Issues](https://github.com/classeur/classeur/issues). As of July 2016 they reply swiftly.
| Markdown Editor | ✔ | Works well. With lots of useful features for beginners & pros. |
| Markdown Preview | ✔ | Works very well. |
| Managing Documents |✔ | Very intuitive UI. Works well and smooth. | 
| Export | ✔ | Exceptional Export functionality: Markdown, Plain & styled HTML, PDF, RTF, OpenOffice, Word, EPUB, LaTex, and many more through PanDoc. |
| Cross Platform | ✔ | Runs in browser! |
| Offline Editing | ✔ | Firefox Version available. Windows coming soon |
| User Manual | ⚠ |  This [Classeur > Manual](https://v-squared.github.io/plan/flow/publishing/classeur-manual/) is a community project. It is not complete yet.
| Zen Mode | ⚠ | Nice to use. But complex to turn on. Only works without Preview & ToC. Scheduled to be fixed soon. |
| Table of Contents | ⚠ | Usable, but with bugs requiring workaround.  |
| GitHub Push / Pull | ⚠ | Push is implemented, Pull is not. |
| Image Preview | ⚠ | Works with absolute URL, but not with relative. |
| Kramdown | ⚠ | Some features are supported, such as *Definition List* while other features are not supported, such as *Header ID*. I will ask the authors about this after more pressing matters are settled. |
| Share & Collaboration | ? | Sounds very useful. Not explored yet. |
| Publish | ? | Supports: Blogger, Dropbox, GitHub, Tumblr, Wordpress. I will write about them in time. |

### Using in Production

We have found Classeur to be complete & stable enough to use it in our production flow. As you can see in the capabilities list above, it lacks some important features and has bugs. But frankly we have not found a better alternative. It is an open source project on GitHub with friendly and responsive developers. As such we are contributing what we can to fix any open issues.

__Bottom Line:__  We work much faster and have more fun at work with Classeur than without! As such it is highly recommended for anyone implementing a markdown based publishing workflow.

## Classeur Project

- [Classeur > Home](http://classeur.io/) Home Page of Markdown IDE
- [Classeur > App](https://app.classeur.io/) Classeur in browser app
- [Classeur > Support](https://github.com/classeur/classeur/issues) GitHub Issues of Classeur
- [Classeur > Manual](https://v-squared.github.io/plan/flow/publishing/classeur-manual/) Community Manual of Classeur


# Understanding Classeur

## Organizing your Articles

Classeur organizes your documents in just the same way as you would file them in the physical world:

1. Folders group Articles
2. Binders group Folders

### Folders

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/folders.png)

(??? I need to make a new snap shot after I reorganized my folders and binders)

### Binders

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/binders.png)


## 3 Screens for 3 Modes

When creating articles you will be in one of three work modes: 

1. __Exploring:__ Explore and manage your Articles: 1) Create or find an Article. 2) Group articles in folders and binders.
2. __Settings:__ Global configurations for Classeur and its connected services. Make Classeur work for you.
3. __Writing:__  Get your writing and publishing done.
   - __Writing-Menu:__ Sub-screen of Writing containing all editor's menu functions.

Classeur is supporting your work modes by offering an optimized screen for each work mode, putting the tools you need in each mode at your fingertips. Below we look at each screen and its key elements. This will give you an overview of where things are and how they are related in the context of your writing workflow. 

## Exploring Screen

__Classeur Navigation:__ This is the heart of Classeur navigation. From here you can go anywhere. This is also your landing page after closing a *Writing Screen* or *Settings Screen*. This is important to understand to avoid getting lost. Say you go to the *Settings Screen* from within the *Writing Screen* and you close the *Settings Screen*. You will not return to the *Writing Screen* but to this *Dashboard Screen*.

__Article Management:__ You can do all the things that a file explorer offers in your OS: Finding, moving, deleting, renaming of articles aka documents aka files. 

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/screen-exploring.png)


1. Current Binder.
2. Change Binder Icon.
3. Login Account.
4. Explaining value of Classeur Premium.
5. Go to *Settings Screen*.
6. List of Recent Articles.
7. Find Articles.
8. Add a new folder.
9. Folders of this binder.
10. Filter list of articles. Handy if you have a lot in one folder.
11. Create a new article.
12. Filtered list of all articles in this folder .
13. Pick sorting order of article list.
14. 1) Choose sharing option of article 2) Rename Article, 3) Delete Article.
15. Click article name to open it in the *Writing Screen*.
16. Article handle. Used to drag and drop the article to folder tabs.

__Tip:__ These screenshots are made of a configured Classeur app in order to show you Classeur's power and also to give you a vision as to where you want to go. When you open Classeur for the first time on your PC it will look more empty. Have no worries. In the tutorials we will walk you through on how to get from there to here.

## Settings Screen

This is the place where you configure Classeur so it will work for you:

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/screen-settings.png)

1. Title of *Settings Screen*
2. Close *Settings Screen* and return to *Explorer Screen*
3. Global settings for Classeur
4. Your Classeur User Account
5. Manage, add and pick your host to upload articles. Supported: Blogger, GitHub, WordPress and Zendesk.
6. Recently deleted articles
7. Link to Privacy Policy article
8. Link to Terms
9. Classeur keeps you logged in until you *Sign Out*.
10. Link to Classeur on Twitter
11. Link to Classeur on Facebook
12. Link to Classeur on GitHub


## Writing Screen

Finally this is the screen where you get all your writing done.

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/screen-writing.png)

1. Tab Name. On first load it shows you the document name. On reload it shows "Classeur". We hope in the future it always shows you the document name → [Document Name lost in tab on reload #150](https://github.com/classeur/classeur/issues/150)
2. Your document's URL. You can bookmark the link to this article.
3. Markdown editor pane.
4. Side Preview pane delivering live rendering of your markdown source code. You can turn Side Preview off.
5. Side Bar pane, in this snap showing ToC. Side Bar can be turned off.
6. Status bar showing statistics of your document. It can be turned off.
7. Buttons to configure options of Side Bar: 1) Markdown Help, 2) Table of Contents, 3) Discussions 4) History. 
8. Vertical Menu Bar. Clever idea to save vertical space so you can see more of your text.
9. Close *Writing Screen* and return to *Explorer Screen*.
10. Open the *Writing-Menu Screen*. For more details see below.
11. Preview. Distraction free final rendering of your markdown article.
12. Upload or Synchronize button. In this case showing the upload button. Once configured you can push your writing to your production server / blog platform with a single click. 


## Writing-Menu Screen

This sub-screen of the *Writing Screen* contains all editor's menu functions. This screen is revealed when you click on the vertical menu button. This is Classeur's clever way to save vertical space, which is always a good thing for an editor.

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/screen-writing-menu.png)

1. Press __Menu__ button to unfold the *Writing-Menu Screen*. Press again to return to writing.
2. The __Writing-Menu Screen__ containing below adjustment buttons, requester and screens:
3. __Stay on this article menu entries:__ Click opens a requester on topic. Close requester returns to here.
4. __Make a copy__ button instantly does so and you will continue writing in a copy of this article.
5. __Settings__ leaves article and opens *Settings Screen*.
6. __Writing Screen Preferences__ configures your *Writing Screen*.


# Setting Up

## Writing Screen Preferences

1. Open [Writing-Menu Screen](#writing-menu-screen)
2. Adjust the *Writing Screen Preferences*. See below table for more details:

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/set-up-top-level.png)

All changes are instant (except for Zen Mode). See below for more details:

{:.uk-table.twin-head.twin-blue}

| Setting | Description & Recommendation |
|--------:|:-----------------------------|
| Zoom | Global font size for all Classeur Windows. 
| Side Preview | Real time "what you see is what you get" (WYSIWYG). Most useful. |
| Side Bar | A third pane right to *Side Preview* offering 4 options: Help, Table of Contents (ToC), Discussions, History |
| Status Bar | Delivers document's statistics. We turn it on when needed and off otherwise for benefit of more writing space. |
| Button Bar | Quasi WYSIWYG formatting toolbar. Very useful to beginners. |
| Zen Mode | Dims the UI to let you focus during writing. → [Zen Mode](#zen-mode).|
| Scroll Sync | Synchronizes scrolling of preview pane with the writing pane. If you use *Side Preview* you will want this one to be on! |

## ToC Depth Settings

This setting adjusts how many levels are shown in the Inline ToC (Table of Contents):

1. Open Menu > Properties
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/menu-properties.png)
2. Enter Key: ext:markdown:tocdepth and set value: 2
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/file-properties.png)
3. Click OK

__Note:__ You can choose values from 1 ... 6. Tests have shown that most online readers find one level too coarse and 3 levels too detailed. This is different than in print media where 3 ... 4 levels are standard.

## Tutorial Create Account

1. Go to *Explorer Screen*, e.g. by clicking  →  [https://app.classeur.io/](https://app.classeur.io/)
2. Click "SIGN I WITH GOOGLE"
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/account-sign-in.png)
3. Follow the instructions

## Tutorial Link Host

1. Go to your →  [Settings Screen](https://app.classeur.io/#!/settings).
   - If you are on the *Explorer Screen* click the gear icon ⚙
2. Click the Blog Tab:
3. Click the *LINK BLOG* button
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/account-link-blog.png)
4. Select the platform. In our case GitHub.
5. Fill out the *Link Blog Requester*
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-settings-blog-link-blog-2.png)
6. Click OK
7. Authorize Application via GitHub
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-authorization.png)
   - For safety reasons compare 1 ... 4 for authenticity.
8. Confirm GitHub password:
   - ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-confirm-pw.png)
9. Your Linked Host is now listed in Setting > Blogs
   -  ![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-linked-blog.png)


# Tutorial Managing Documents

To reach the *Explorer Screen* close the *Writing Screen* or *Settings Screen*. Or simply click →  [https://app.classeur.io/](https://app.classeur.io/) or type it into your browser's URL field.

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/screen-exploring.png)


1. Current Binder.
2. Change Binder Icon.
3. Login Account.
4. Explaining value of Classeur Premium.
5. Go to *Settings Screen*.
6. List of Recent Articles.
7. Find Articles.
8. Add a new folder.
9. Folders of this binder.
10. Filter list of articles. Handy if you have a lot in one folder.
11. Create a new article.
12. Filtered list of all articles in this folder .
13. Pick sorting order of article list.
14. 1) Choose sharing option of article 2) Rename Article, 3) Delete Article.
15. Click article name to open it in the *Writing Screen*.
16. Article handle. Used to drag and drop the article to folder tabs.

## Selecting Binder

1. Click the *Change Binder Icon*
2. Click the binder in which you want to work. You will return to the *Explorer Screen* with folders shown of the newly selected binder.

## Searching Articles

### Browse Recent Articles

1. Click the recent folder with the four o'clock icon: 🕓.
2. Browse the list of recent articles.
3. You can narrow down the list by typing a filter.

### Article Search Field

1. Click the search folder with the magnifier icon: 🔎.
2. Enter your search phrase.
3. Browse the list of search results articles.

## Moving Articles

### Moving within a Binder

1. Locate the article using any of the methods described above.
2. Click onto the *Article handle* and then drag the article to its new folder tab.

### Moving between Binders

1. Navigate to your target binder.
   1. Click the *Change Binder Icon*.
   2. Click the binder which you want to move the article to.
2. Open the tab: "Search".
3. Find the Article you want to move to this binder.
4. Drag the article using its handle into the target folder of this binder.

## Open Article

1. Locate the article using any of the methods described above
2. Single click the article. It will open the *Writing Screen*.



# Writing

## Markdown Intro

Classeur is a markdown editor. If you are not familiar with markdown you will want to read this introduction article → ???

## Zen Mode

### Benefits of Zen Mode

Zen is about you being in the *Zone* as in writing so focused that you forget anything else but your writing. Classeur assists you in entering the *Zone* via the *Zen Mode* which will fade the Classeur UI so all that is left for you to see: Is your writing!

### Turning on Zen Mode:

1. Click Menu, enable the "Zen Mode" button 
2. Turn off Side Preview (if it is on, Zen Mode is disabled)
3. Turn off Side Bar (if it is on, Zen Mode is disabled)
4. Start typing without using the mouse
5. Wait for 5 seconds (during which you can type or not after you began typing)
6. Zen Mode will turn on automatically, by fading out the UI

__Note:__ We created an issue to request that turning on Zen Mode becomes a single click. [Zen Mode: Trigger as soon as user begins typing #146](https://github.com/classeur/classeur/issues/146)

### Limitations

Currently Zen Mode does not work when Preview, and / or Side Bar is enabled. 

__Note:__ We created the issue → [Zen Mode: Trigger as soon as user begins typing #146](https://github.com/classeur/classeur/issues/146) and hope the authors will remove this limitation soon.

## ToC, Navigation & Scrolling

### Inline ToC

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/ToC-inline.png)

You can insert a Table of Contents (ToC) anywhere within your document with the ```[TOC]``` command.

__Note 1:__ For the  ```[TOC]``` command to be recognized by Classeur it needs a leading empty line and to be the first command in that line. 

__Note 2:__ You need to insert the Inline ToC for HTML ToC export to work.

### Side Bar ToC

### Navigation by ToC

When writing long articles you will want to use your Table of Contents (ToC) for two purposes:

1. Inspect the 

### Navigation by Folding

### Scroll Sync Trick

In → [Preview & Preferences](#preview--preferences) you enabled Scroll Sync.  It means that when you scroll one pane the other pane scrolls accordingly. This works mostly as expected. But sometimes a line of source code expands to much more in the preview pane. In such case scrolling the left pane leads to accelerated scrolling of the right pane. If that is not desired, simply move your cursor to hover over the right pane and use your scroll wheel for a more controlled scrolling experience.



## Suggested Window Setup

This is my setup. As always your mileage may vary :-)

- __Two 1080p Displays:__
   - __Left:__ *Writing*. I am sitting in front of this one.
   - __Right:__ *Reference* as in research and final review. Placed to right hand side further away. This is OK as I only use it for reference and not for work.
- __Left Window Tabs:__ (Writing)
   - __Classeur Article:__ This is where I write the article
   - __Appetizing Articles:__ My reference for more fancy formatting
   - __ToC Converter:__ Tool to convert HTML ToC to YAML ToC
   - __HTML Export Page:__ Export generated from Classeur for ToC
   - __HTML Source:__ HTML Source Code of previous page
- __Right Window Setup:__ (Reference)
   - __Article Blog Page:__ In our case the published article on V²Site
   - __Article Issue:__ Linked issue to this article. Our todo lists.
   - __All sorts of Research:__ Various tabs containing research to my writing
## Current Preview Limitations

### We really like Classeur Preview!

In this section we are going to list limitations of Classeur's preview. Before doing so we want you to know that as it is the preview function is more than usable in production. In fact we enjoy using Classeur. We are a picky bunch, we do not say this very often. Having said that, it is important to understand Classeur's preview limitations and the available workarounds:

### No Style Sheets

### No Relative Links for Images

### No Permalinks for Headings

## Tutorial Writing

__Note:__ I will write it if later after going through the editing process of the first pass.

# Publishing

## Publishing Power

Publishing workflows vary wildly. Classeur is very flexible in this regard. It supports a large variety of publishing platforms and data formats.

__Integrated direct upload:__

- Blogger
- Dropbox
- GitHub
- Tumblr
- WordPress
- Any other publishing platform via copy and paste.

__Export Data Formats:__

- Markdown
- HTML (plain & styled)
- PDF
- RTF
- OpenOffice / LibreOffice
- Word
- EPUB
- LaTex
- And many more through [PanDoc](http://pandoc.org/).

As such it also gives you enough rope to hang yourself. There are simply too many possible workflows to document them all here. Instead we are documenting but one, in the hope that you can use the above list of capabilities in combination with the fully described workflow below to create your own publishing workflow.

__Note:__ You should be able to use most of the workflow for your purposes. E.g., it is likely that your publishing system will require a Table of Contents. We show you how to create in the most common formats: HTML, JSON and YAML. We also show you how to link Classeur to GitHub. Once you see how you can link one platform it shall be easy to link to the others.

If you have documented your workflow and would like to share it to help others, then use the V²Flow button to create a fork of this article, add  your workflow and make a pull request so to share it with others.

## GitHub Pages Publishing

## Create ToC

### Verify has Inline ToC

You only can export your ToC (Table of Contents) if you have inserted an → [Inline ToC](#inline-toc) in the first place.

### Export HTML ToC

### HTML ToC → YAML or JSON

### Add ToC to Front Matter 

## Push to GitHub

## Creating Classeur Account

### Open Publishing Preferences

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-menu-publish.png)



![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/




## Tutorial Export ToC

## Tutorial Publishing

__Note:__ I will write it later after going through the editing process of the first pass.

# Remaining Mysteries

## Export Pandoc TOC
I found no way to export the TOC. Since we need to export the ToC, this would have been useful. We are now using HTML export and manually copy paste the ToC from the HTML source. A bit crude and a pain to describe in a manual, but it works.

# Modes




# Improvements

## Setup Classeur

- Sections to get titles: This way is easier to refer to a section in the manual
- 
## Related Open Issues
- [Connection with Github - update file on Github #114](https://github.com/classeur/classeur/issues/114)


# Terms

Screen
: User interface page on a specific topic. E.g. Explorer Screen, Settings Screen, Writing Screen, etc.

Term 2
: Definition 2

# Sort In

Automatic ToC

- Write in Classeur Manual how to limit ToC to 2 Levels
   - http://classeur.io/help/extensions/
- Automatic Table of Contents Generation #130


Report to Classeur

- Life ToC also respect heading depth
- Create simple document H1, H2, H3 to reproduce
- Show how configured ToC






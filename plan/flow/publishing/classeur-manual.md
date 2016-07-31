---
layout: page
title: Classeur User Manual
subtitle: Community Manual to the Markdown Editor Classeur
abstract: >
  Classeur is a wonderful markdown editor. This Classeur User Manual is our contribution to the Classeur community. As always, this article is open to anyone. Click the V²Flow button, next click "Edit Article", make changes and commit.
issueNo: 218
readiness:
   - is-complete
   - is-active
contents:
  - name: Using this Manual
    url: using-this-manual
    subitems:
      - name: User Manual Style
        url: user-manual-style
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
      - name: 4 Screens for 4 Modes
        url: screens-for-4-modes
      - name: Dashboard Screen
        url: dashboard-screen
      - name: Settings Screen
        url: settings-screen
      - name: Writing Screen
        url: writing-screen
      - name: Preference Screen
        url: preference-screen
  - name: Setting Up
    url: setting-up
    subitems:
      - name: Preview & Preferences
        url: preview--preferences
      - name: Table of Contents
        url: table-of-contents
  - name: Managing Documents
    url: managing-documents
  - name: Writing
    url: writing
    subitems:
      - name: Markdown Intro
        url: markdown-intro
      - name: Zen Mode
        url: zen-mode
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
      - name: Connect to GitHub
        url: connect-to-github
  - name: Remaining Mysteries
    url: remaining-mysteries
    subitems:
      - name: Export Pandoc TOC
        url: export-pandoc-toc
  - name: Modes
    url: modes
  - name: Improvement Ideas
    url: improvement-ideas
    subitems:
      - name: Setup Classeur
        url: setup-classeur
  - name: Sort In
    url: sort-in
---

[TOC]

# Using this Manual

## User Manual Style

This manual is structured in the order a new user will explore and use Classeur:

1. [Introduction](#introduction) Key purpose and list of capabilities.
2. [Understanding Classeur](#understanding-classeur)
3. [Setting Up](#setting-up) Configuring Classeur for your use.
4. [Managing Documents](#managing-documents)
5. Writing
6. Publishing

# Introduction

## What it Does

### Markdown WYSIWYG

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/intro-classeur.png)

Many authors find writing in markdown more productive than using other authoring tools. In the past it came at the loss of WYSIWYG. Classeur now offer the best of both worlds: The zen style focus and speed of writing in markdown and the intuitive review power of WYSIWYG. 

The snapshot above was taken when I wrote this Classeur Manual in Classeur:

- __Left Pane:__ Markdown Source Code. This is where you write.
- __Middle Pane:__ Live Preview. WYSIWYG. This is where you review.
- __Right Pane:__ Live Table of Contents (ToC). This is where you navigate.

### Single Click Publish

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-single-click.png)

With a single click you can publish your writing. Provided you linked your blog / server accordingly.

### Collaboration

It promises interesting collaboration features. I will document them after I figured out how to use them.


## Capabilities

{:.uk-table.twin-head.twin-blue}

| Feature | ✔ | Note |
|---------:|:--:|:------------|
| Cost | ✔ | Free for 100 files, $3 / month for unlimited files, also has enterprise edition. |
| Customization | ✔ | Rich with intuitive UI. |
| Speed | ✔ | Fast. Complex documents on a PC with Celeron work smooth. |
| Reliability | ✔ | Never lost any writing. Good enough to use in production. It's bugs can be worked around. |
| Support | ✔ | You can search and open [GitHub > Classeur > Issues](https://github.com/classeur/classeur/issues). As of July 2016 they reply swiftly.
| Markdown Editor | ✔ | Works nice. With lots of useful features for beginners & pros. |
| Markdown Preview | ✔ | Works very well. |
| Managing Documents |✔ | Very intuitive UI. Works well and smooth | 
| Export | ✔ | Exceptional Export functionality: Markdown, Plain & styled HTML, PDF, RTF, OpenOffice, Word, EPUB, LaTex, and many more through PanDoc. |
| Cross Platform | ✔ | Runs in browser! |
| Offline Editing | ✔ | Firefox Version available. Windows coming soon |
| User Manual | ⚠ |  This [Classeur > Manual](https://v-squared.github.io/plan/flow/publishing/classeur-manual/) is a community project. It is not complete yet.
| Zen Mode | ⚠ | Nice in use. But complex to turn on. Only work without Preview & ToC. Scheduled to be fixed soon. |
| Table of Contents | ⚠ | Usable, but with bugs requiring workaround.  |
| GitHub Push / Pull | ⚠ | Push is implemented, Pull is not. |
| Image Preview | ⚠ | Works with absolute URL, but not with relative. |
| Share & Collaboration | ? | Sounds very useful. Not explored yet. |
| Publish | ? | Supports: Blogger, Dropbox, GitHub, Tumblr, Wordpress. I will write about them in time. |

### Using in Production

We found Classeur to be complete & stable enough to use it in our production. As you can see in above capabilities list it lacks important features and has bugs. But frankly we have not found a better alternative. It is an open source project on GitHub with friendly and responsive developers. As such we are contributing what we can to fix any open issues.

__Bottom Line:__  We work much faster and have more fun at work with Classeur than without! As such it is highly recommended for anyone implementing a markdown based publishing workflow.

## Classeur Project

- [Classeur > Home](http://classeur.io/) Home Page of Markdown IDE
- [Classeur > App](https://app.classeur.io/) Classeur in browser app
- [Classeur > Support](https://github.com/classeur/classeur/issues) GitHub Issues of Classeur
- [Classeur > Manual](https://v-squared.github.io/plan/flow/publishing/classeur-manual/) Community Manual of Classeur


# Understanding Classeur

## 4 Screens for 4 Modes

Classeur has three screens. Each optimized for:

1. __Dashboard:__ Explorer for your Articles.
2. __Settings:__ Global configurations for Classeur and its connected services.
3. __Writing:__  Get your writing and publishing done.
4. __Writing > Preferences:__ Sub-screen of Writing to adjust your preferences.

## Dashboard Screen

This is the heart of Classeur Navigation. From hear you can go to anywhere. This is also your landing page after closing a *Writing Screen* or *Settings Screen*. This is important to understand to not get lost. Say you go to the *Settings Screen* from within the *Writing Screen* and you close the *Settings Screen*. You will not return to the *Writing Screen* but to this *Dashboard Screen*.

## Settings Screen

### App

### User

### Blogs

### Trash

## Writing Screen

## Preference Screen

# Setting Up

## Preview & Preferences

### Open Menu

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/open-menu.png)

### Adjust Preferences

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/set-up-top-level.png)

All changes are instant (except for Zen Mode). See below for more details:

{:.uk-table.twin-head.twin-blue}

| Setting | Description & Recommendation |
|--------:|:-----------------------------|
| Zoom | Global font size for all Classeur Windows. 
| Side Preview | Real time "what you see is what you get" (WYSIWYG). Most useful. |
| Side Bar | A third pane right to *Side Preview* offering 4 options: Help, Table of Contents (ToC), Discussions, History |
| Status Bar | Delivers documents statistics. We turn it on when needed and off otherwise for benefit of more writing space. |
| Button Bar | Quasi WYSIWYG formatting toolbar. Very useful to beginners. |
| Zen Mode | Dims the UI to let you focus during writing. → [Zen Mode](#zen-mode).|
| Scroll Sync | Synchronizes scrolling of preview pane with the writing pane. If you use *Side Preview* you will want this one to be on! |

## Table of Contents

# Managing Documents






# Writing

## Markdown Intro

Classeur is a markdown editor. If you are not familiar with markdown you will want to read its introduction article → ???

## Zen Mode

### Benefits of Zen Mode

Zen is about you being in the *Zone* as in writing so focused that you forget anything else but your writing. Classeur assists you in entering the *Zone* via the *Zen Mode* which will fade the Classeur UI so all what is left for you to see: Is your writing!

### Turning on Zen Mode:

1.Click Menu, enable the "Zen Mode" button 
2. Turn off Side Preview (if it is on, Zen Mode is disabled)
3. Turn off Side Bar (if it is on, Zen Mode is disabled)
4. Start typing without using the mouse
5. Wait for 5 seconds (during which you can type or not after you began typing)
6. Zen Mode will turn on automatically, by fading out the UI

### Limitations

I am using Classeur over any other text editor because I need the productivity of Live Preview and Live Table of Contents when typing markdown. Ironically turning on these functions turns off Zen Mode. I am contacting the authors to learn if I may have misunderstood the concept or if they will enable Zen Mode during writing with Preview / ToC enabled?



## Current Preview Limitations

### We really like Classeur Preview!

In this section we are going to list limitations of Classeur's preview. Before doing so we want you to know that as it is the preview function is more than usable in production. In fact we enjoy using Classeur. We are a picky bunch, we do not say this very often. Having said that it is important to understand Classeur's preview limitations and the available workarounds:

### No Style Sheets

### No Relative Links for Images

### No Permalinks for Headings


# Publishing

## Publishing Power

Publishing workflows vary wildly. Classeur is very flexible in this regard. It supports a large verity of publishing platforms and data formats.

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

As such it also gives you enough rope to hang yourself. There are simply too many possible workflows to document them all here. Instead we are documenting but one, in the hope that you can use above list of capabilities in combination with the fully described workflow below to create your own publishing workflow.

__Note:__ You should be able to use most of the workflow for your purposes. E.g. it is likely that your publishing system will require a Table of Contents. We show you how to create in the most common formats: HTML, JSON and YAML. We also show you how to link Classeur to GitHub. Once you see how you can link one platform it shall be easy to link to the others.

If you have documented your workflow and like to share it help others than use the V²Flow button to create a fork of this article, add  your workflow and make a pull request so to share it with others.

## GitHub Pages Publishing

## Create ToC

### Export HTML ToC

### HTML ToC → YAML or JSON

### Add ToC to Front Matter 

## Push to GitHub

## Creating Classeur Account

### Open Publishing Preferences

![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/publish-menu-publish.png)



![](https://raw.githubusercontent.com/V-Squared/V-Squared.github.io/master/plan/flow/publishing/classeur-manual/


## Connect to GitHub



# Remaining Mysteries

## Export Pandoc TOC
I found no way to export the TOC. Since we need to export the ToC, this would have been useful. We are now using HTML export and manually copy paste the ToC from the HTML source. A bit crude and a pain to describe in a manual, but works.

# Modes




# Improvement Ideas

## Setup Classeur

- Sections to get titles: This way is easier to refer to a section in the manual
- 

# Sort In

Automatic ToC

- Write in Classeur Manual how to limit ToC to 2 Levels
   - http://classeur.io/help/extensions/
- Automatic Table of Contents Generation #130


Report to Classeur

- Life ToC also respect heading depth
- Create simple document H1, H2, H3 to reproduce
- Show how configured ToC





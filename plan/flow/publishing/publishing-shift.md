---
layout: page
title: Publishing Paradigm Shift
subtitle: Understanding the change in publishing to set correct targets for your publishing workflow.
abstract: >
  The constant and rapid ongoing revolution in publishing has accumulated so big changes that traditional publishing workflows and tools have become misleading, plain wrong, or inefficient. Understanding these changes is paramount to even set correct targets for your publishing system. In turn only correct targets will guide you to make the best choices for workflow and tools.
issueNo: 223
contents:
  - name: Understanding Change
    url: understanding-change
    subitems:
      - name: Limit of old days was Content
        url: limit-of-old-days-was-content
      - name: Cost as Spam Filter
        url: cost-as-spam-filter
      - name: Reader’s Time is new Limit
        url: readers-time-is-new-limit
      - name: Writer’s time is other new Limit
        url: writers-time-is-other-new-limit
      - name: Mobile Support
        url: mobile-support
      - name: Dramatically Increased Contribution
        url: dramatically-increased-contribution
      - name: What does this all mean?
        url: what-does-this-all-mean
  - name: Modern Formats
    url: modern-formats
    subitems:
      - name: V² Readers’ Survey
        url: v²-readers-survey
      - name: V² Authors’ Survey
        url: v²-authors-survey
  - name: Modern Publishing
    url: modern-publishing
    subitems:
      - name: kramdown to the Rescue
        url: kramdown-to-the-rescue
      - name: kramdown Overview
        url: kramdown-overview
      - name: kramdown vs Alternatives
        url: kramdown-vs-alternatives
  - name: Updated Publishing Targets
    url: updated-publishing-targets
    subitems:
      - name: Fast to Read Style Guides
        url: fast-to-read-style-guides
      - name: Faster Publishing Flow
        url: faster-publishing-flow
      - name: Fast Community Contribution
        url: fast-community-contribution
      - name: Separation Format vs. Style
        url: separation-format-vs-style
      - name: One Markup Language!
        url: one-markup-language
  - name: Conclusion
    url: conclusion
readiness:
  - is-complete
  - is-complete
  - is-active
---

# Understanding Change

 Our goal is efficient and effective writing, publication, and contribution. To achieve this in the past we simply applied industry accepted style guides and workflows. We found out that this no longer holds true, as the industry is changing faster than style guides and workflows follow suit. 
 
 In this section we will show just how much publishing has changed in the last 20 years, with the pace of changes ever increasing. We deduce the consequences and the need for a completely new paradigm.

## Limit of old days was Content

When I was young the biggest event in my life was the yearly computer show. We arrived with empty bags and left with as many brochures and catalogues as we could carry: hundreds of them. Within a month I read through them completely cover to cover. The following 11 months were spent waiting for the next show and reading the monthly computer magazines, which kept me busy a few days per month. In other words: Most of the time I was hungrily waiting for content.

Most style guides have been created in — or at the very least are heavily influenced by — the era of print media. In that era space was really expensive. For two reasons:

__Distribution Cost *WAS* expensive:__

If you wonder why that is then remember the costs of printing and sharing content:

1. __Printing Costs:__ 
    1. A single sheet double page brochure project was > $ 1,000 US. Print quantity almost did not matter.
3. __Sharing Costs:__
    1. A mailing list project to 3000 customers was > $ 6,000 US.
    2. 4th cover page on MacWorld Germany with a reach of 50,000 readers was about $ 5,000 US
    3. Fair sized booth on a computer show to spread your brochures: > $ 10,000 US


## Cost as Spam Filter

In the olden days I had no spam problem. In fact I wished for more advertisement! The high distribution cost made any company think more than twice if a mailing to a customer would yield a return of investment. Today it is the total opposite! Distribution cost are almost zero and customers associate advertisement with nuisance.

## Reader's Time is new Limit

Today we are not waiting for content at all. There is more content available on the internet than we could read in a thousand life times. I would wager that even narrowed down to what one person is interested in there is still more available information than they could read in their lifetime. With more content showing up every day. Google makes it easy to find the most suitable content and mobile and tablet devices allow access in all places and circumstances. Yet we do not have enough time to read it all.

__Distribution costs today are irrelevant__

## Writer's time is other new Limit

{:.uk-table.twin-head.twin-blue}

| Ratio † | Year | Yearly Cost | Medium                                         | Limit |
|:-------:|:----:|------------:|:-----------------------------------------------|:-----:|
|   1%    | 1993 |  $ 60,000   | Brochures and Advertisements                   | Cost  |
|   5%    | 1996 | $ 300,000   | Brochures, Advertisements, Web Site, Shows     | Cost  |
|   5%    | 2002 |  $ 20,000   | Web Site, Shows                                | Time  |
|  90%    | 2016 |  $  1,000   | GitHub Pages ‡, GitHub Issues & Google Adwords | Time  |

† Ratio of my written text versus published text. In the early years the bulk of my text was personal notes and emails.
‡ GitHub Pages is a website hosting service based on a kramdown publishing workflow.

The numbers in the above tables are statistics from Village Tronic. It is a small computer company that produced graphics cards and docking stations. I believe the numbers are representative in terms of demonstrating two turning points:

{:.uk-table.twin-head.twin-blue}

| Year |   Turning Point    | Medium / Technology Change |
|:----:|:------------------:|:---------------------|
| 2002 | Cost to Time Limit | Replacing advertisement and shows in magazines with the website |
| 2016 | Move all to GitHub | __1)__ Writing in kramdown is much faster than in HTML<br>__2)__ Switch communication from email to GitHub Issues (100% public)<br>__3)__ Switch from proprietary to Open Source |


## Mobile Support

__Mobile Usage__

What percentage of our readers use mobile to read our web site:

{:.uk-table.twin-head.twin-blue}

| Year |   %   | Comments                                           |
|:----:|------:|:---------------------------------------------------|
| 2006 |    0% | No demand whatsoever                               |
| 2014 |   10% | Complaints about poor mobile support               |
| 2016 | > 50% | Compliments on mobile support. Share still growing |

These numbers speak for themselves: Without good mobile support we would lose half of our readers' time. 

__How it Works__
In order to deliver a quality mobile phone experience for a developer web site we needed to develop our own template and publication tools. This was a huge effort. Now that it is mostly done the writer enjoys the benefit of mobile support being completely transparent. In other words: The author writes in kramdown, focusing only on content. Our template and publishing engine takes care of the nitty gritty details to format content appropriately according to the screen size the user is viewing.

## Dramatically Increased Contribution

{:.uk-table.twin-head.twin-blue}

| Year |     Frequency         | How to get Contribution   | Time to Implement |
|:----:|:---------------------:|:-------------------------:|:-----------------:|
| 1993 |   Few times per Year  | On computer shows         | Weeks             |
| 2010 |   Few times per week  |          Facebook         | Hours to Days     |
| 2016 | Several times per day | GitHub Issues & V² Flow   | Minutes           |


## What does this all mean?

__Need for new Style Guides__
We scoured the internet and did not find a modern style that has taken into account all above changes. Therefore, we are now developing one.

__Need for a new workflows__
In order to achieve the benefits and features we were looking for, we needed to let go of the trusted HTML-centric workflow and create a new series of workflows built around kramdown. We even needed to create a corresponding new mashup of apps, services, and templates. This big one-time effort paid off, when the new kramdown workflow started working. See below:

__kramdown Publishing Works__
This is our third attempt to create efficient and effective writing and publishing workflows. This time it really worked. We reduced costs, increased speed and increased contribution. Our new website looks clean and modern and works well on all screen sizes.


# Modern Formats

## V² Readers' Survey

We asked our readers what format(s) they wanted to see our new website support:

{:.uk-table.twin-head.twin-blue}

| How many need |  Reader's Requested Document Format |
|:---:|:-------------------------------------|
| 70% | __Mobile Phone & Tablet:__ All features usable. Legibility remains high. Fast to use. |
| 60% | __Desktop PC with Big Screen:__ Increased usability by making use of extra space. |
| 10% | Optional PDF documents for our standard section only. Used for offline reading and filing away for reference. |

**Note:** Each reader could tick all offered formats. As such each format can range from 0% ... 100%.

## V² Authors' Survey

We asked our authors & editors what formats they want us to support natively:

{:.uk-table.twin-head.twin-blue}

| Feature | Usage |
|--------:|:------|
| Markdown | Once a writer starts using markdown, he typically uses it during his entire writing workflow from beginning to end. It is compatible with all writing tools, enabling the author to keep using his favorite apps. |
| GFM | GitHub Flavored Markdown is used in GitHub issues. Once you have learned to master its power, you will want to keep using it during the writing workflow. |
| kramdown Input | It has significant feature upgrades over GFM. Without these publishing a web site would be crippled. |
| HTML Input | Occasionally even kramdown can not do everything. HTML extends the capabilities sufficiently. kramdown is powerful enough that only sparingly do we need to fall back to HTML. |
| kramdown & HTML Output | One of our targets is to have our articles quoted or copied with attribution to V²Site. Availability of our articles in both kramdown and HTML will simplify republishing. HTML code needs to be of high quality to allow easy styling by third party sites.|
| PDF Output | Especially for standards our readers have requested PDF version of the standard article for two reasons: 1) To read them offline 2) To archive them.


# Modern Publishing

## kramdown to the Rescue

We tried both Google Drive and Joomla to develop a workflow that somehow supports all file formats as requested by the V² reader and writer and the same time is fast and fun to use. We tried hard and failed. What you see now is our third attempt, which finally was successful. The key ingredient to make it happen is *kramdown*. We describe its use and central function in this section:


## kramdown Overview

For those not familiar with kramdown, it is a super set of markdown by supporting:

- [Original Markdownl](http://daringfireball.net/projects/markdown/syntax) Easy to read and write markup language.
- [GFM aka GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/) GitHub added features to reference people, issues and commits. 
- [kramdown](http://kramdown.gettalong.org/syntax.html) It adds important features lacking in Markdown.

![kramdown Overview](http://kramdown.gettalong.org/overview.png)

As you can see in the info-graphics above: All requested formats are available in all respective directions. The table below explains this in greater detail:

{:.uk-table.twin-head.twin-blue}

|       Format | Dir | Workflow Stage, Purpose & Benefit |
|-------------:|:---:|:----------------------------------|
| Markdown | ➜☐ | __Stage:__ Creation<br>__Purpose:__ Brainstorming, Creating Outline<br>__Benefit:__ Compatible with any writing and management app. Magic of markdown.|
| GFM † | ➜☐ | __Stages:__ Creation, Develop, Beta<br>__Purpose:__ GFM † → GitHub Flavored Markdown, used in GitHub Issues.<br>__Benefits:__ Rich discussions with powerful referencing. |
| HTML | ➜☐ |  __Stages:__ Develop <br>__Purpose:__ Add features kramdown lacks.<br>__Benefits:__ No need to give up features. |
| kramdown | ➜☐ |  __Stages:__ Develop, Beta, Make <br>__Purpose:__ Markup language used to structure our articles. <br>__Benefits:__ Much faster and easier to write and edit than HTML. |
| kramdown | ☐➜ |  __Stages:__ Develop, Beta, Make <br>__Purpose:__ Output of writing. Input to Jekyll / GitHub Pages. <br>__Benefits:__ Much faster and easier to edit than HTML. |
| PDF | ☐➜ |  __Stages:__ Make <br>__Purpose:__ Give developers piece of mind in the standard section. <br>__Benefits:__ Developers are used to standard documents being PDF files. They want to have the standard tucked away on their drive for permanent reference. |
| HTML | ☐➜ |  __Stages:__ Make <br>__Purpose:__ Export HTML for purpose of re-publishing on other sites. <br>__Benefits:__ Be compliant to the standardized HTML workflow.  |

__What's in the Box?__
In the above diagram and table we symbolized input as: ➜☐ and output as: ☐➜. The box after or before the arrow symbolizes the kramdown publishing process. Two tools are used: The kramdown compatible editor: *Classeur* and the *kramdown* aware *V²Site* publishing engine, which is based on GitHub Pages, Jekyll, Liquid, our custom V²Template and our custom AngularJS code.

__How is the quality of the source code?__
One word: __Great!__ As for kramdown source code, it is as good as your style. That said, kramdown does not give you too much rope with which to hang yourself. And in terms of HTML generated from kramdown, it is as good as hand coded and optimized HTML. Easy and clean to apply styles or do further manual edits.

 
## kramdown vs Alternatives

__kramdown vs HTML Publishing__

When publishing HTML documents nowadays you would be using a Content Management System (CMS) such as Wordpress, Joomla, or Dropal. We published for a long time in Joomla. Joomla has a very nice feature called *Front End Editing*. What it does is that after logging in you can browse the web site just like any visitor. But when you find a spot to improve, you click the front end edit button and you are right in the HTML article. 

This is great, except for the important fact that our richly formatted articles are made of significantly more HTML markup than *Copy*. In other words: You are spending a lot of time to find the place to edit. 

In comparison, on the V²Site we also have the front end edit button as part of the *V²Flow* button. We publish our articles directly in kramdown source code. That means that 90% is copy and only 10% is markup. In other words: Editing is fast and fluid. 

As a consequence, we walked away from HTML publishing to kramdown Publishing.

__kramdown vs Google Docs__

We hosted our developer site on Google Docs for quite a while. It was a mixed blessing. We thoroughly enjoyed its innovative features such as simultaneously editing a document with various editors or its simplicity of use. One of the purposes of our developer site was to develop content for our web site. No matter how hard we tried, we could not create an effective workflow to export quality HTML with space efficient graphics from Google Drive. Another problem was the inability to apply a consistent style sheet to all documents. In addition, it lacked full support for responsive design or backup options. 

As a consequence, we walked away from Google Docs Publishing towards kramdown Publishing.

__kramdown vs WYSIWYG tools__

There are three big advantages that stand out:

__1) Stay in the zone:__ Once you are used to writing in markdown you will be more focused when writing versus using a WYSIWYG editor where you need to use keyboard short cuts or mouse clicks to apply your formatting. Somehow it is like constantly shifting gears, ripping you out of the flow. Whereas when typing in markdown you will only feel a constant uninterrupted flow of writing. 

__2) Less conflicts / faster debugging:__ You may think that working with source code nowadays is antiquated. But the fact is that when you build a complex web site you will have conflicts. And when resolving conflicts you will have to look at the source code anyway. Debugging goes much easier when you work with clean and slender handwritten source code versus garbled and convoluted source code from a WYSIWYG editor. 

And we have fewer conflicts since working with hand written kramdown vs HTML generated by the WYSIWYG editor of Joomla.

__3) Markdown is coming:__ Twitter, WordPress and GitHub all use Markdown. It simply jives with the writer's / programmer's mindset.


# Updated Publishing Targets

## Fast to Read Style Guides

### Unlearn Traditional Style Guides

You must forget style guides for print. They are concerned about reducing the distribution limit for the writer and at the same time the available content limit for the reader by means of creating a more compact layout. Since this served both writer and reader, the traditional style guides made sense for everyone and were widely accepted. But it no longer holds true in a time when publishing cost is zero and the reader is overwhelmed with great content.

### The New Style Guide

The new era of free publishing cost and overwhelming amount of content needs new style guides that focus on reducing the reading cost. Reading cost is how fast a reader can scan a document or navigate it. How fast can he ingest its content? How well is it written, how clearly is it structured?

We searched, yet have not found one new style guide ready for modern writing and publishing. As a result, parts of this article series are new style guides, templates, and preflight checks adjusted to the new era.

## Faster Publishing Flow

The new publishing flow switches from HTML-centric to kramdown. As a consequence, writer, editor, and contributor work in one language only. kramdown is significantly easier to read and edit than HTML. Even a contributor who is not aware of HTML or kramdown will be capable of editing a kramdown source file by simply looking at it and applying common sense.

Combine this with the custom template and mashup of V²Site and V²Flow and you end up with more speed, ease of use, and more involvement by your community. Last but not least, work is more intuitive and fun, which leads to increased productivity and creativity.

## Fast Community Contribution

Wikipedia has shown how valuable community contribution is. Adding community contribution increases your speed, increases your communities satisfaction and reduces your cost. New publishing systems (such as V²Publishing) need to have an integrated community workflow that is intuitive and fast to use for both contributor and editor. 

## Separation Format vs. Style

HTML and CSS introduced the separation of content versus style. The resulting time savings to web site operators is history.

Markdown / kramdown is introducing a further separation of formatting versus styling. The time saving becomes apparent when following the life cycle of a published article: The author writes the article. In this process he applies formatting. With current tools this also means he applies his custom styling. In turn a good editor then has to remove such custom styling for the sake of one consist styling of the site.

A modern publishing system (such as V²Publishing) strictly separates content, formatting and styling. A author will apply formatting during writing. But a modern publishing system only allows him to format, not to style. As such the editor is saved from the work to unify the styling of a document.

## One Markup Language!

When operating or last generation of web site we needed to deal with four markup languages:

1. __Markdown:__ Most authors already delivered their writing in markdown, which we converted to HTML.
2. __HTML:__ The markup language of articles in the Joomla CMS is HTML.
3. __BB-Code:__ We ran a forum, which used BB-Code as markup language.
4. __RTF:__ Our customer support system used RTF.

Not only is learning four languages more time consuming than learning one. The real trouble was that we frequently needed to move content from one format to the other, which was simply tedious, time consuming and introduced once in a while some trouble caused by the conversion process.

Instead a modern publishing system (such as V²Publishing) only uses markdown as its only markup language. We now move freely document segments or complete documents between: ticket system, workflow management, articles and forum. It is a matter of copy & paste and be done with it.



# Conclusion

The last decade saw dramatic changes in the publishing and computer industry which invalidated long standing and proven style guides, workflows, and tools.

V²Flow.Publishing starts with a clean slate. It provides updated style guides and workflows which match the requirements of the new era. It comes with complete and consistent documentation to ease the learning curve and reduce the workload of the senior staff when training junior staff.

By switching from HTML-centric workflow to kramdown, the writer, editor, and contributor enjoy the increased legibility and simplicity of edits as well as staying in the zone of writing. kramdown further introduces the separation of formatting and styling, which further unloads the editor by removing the work of unifying styling of an article.

Last but not least, article templates, workflow templates, and preflight checks speed up work and help to keep quality on a consistent high level. 

V²Flow.Publishing is a complete solution, covering the entire ground from understanding, style guides, workflow, references, documentation, templates and preflight checks including tutorials on how to use key apps.






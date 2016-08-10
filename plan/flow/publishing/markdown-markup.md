---
layout: page
title: Markdown Writing
subtitle: How to mark up the article’s structure.
abstract: This is the companion to the Article Template. Whereas the Article Template only presents all structured elements, this article adds additional information and for each structured element shows the markdown source code.
issueNo: 205
readiness:
   - is-active
---



# Magic of Markdown

## Staying in the Zone

Once you're comfortable with its syntax and capabilities Markdown enables you, the author, to write in an environment as free as possible from distractions which disrupt your train-of-thought and pull you out of "the zone". The goal is to maximize your creative potential by minimizing interruptions.

## Markdown vs Markup

Markdown and Markup may sound like polar opposites, but the reality is that their relationship is more like parent/child. The purpose for both is to facilitate the formatting of web documents. Editors of print publications used to physically go through text and annotate (mark up) to indicate where the printers should employ, for example, **bold** or *italic* text. Markup has become the generic term for a language that is used as a shorthand to describe these types of formatting. Markdown, which was initially created by Mark Gruber of Daring Fireball, is one of several specific markup languages, each of which have their own simple syntax. Markdown is the markup language of choice for such sites as [Stack Exchange](http://stackexchange.com/) , [GitHub](https://github.com/), and [reddit](https://www.reddit.com/).

Markdown also enables the administrators of web sites to allow users fairly wide latitude in formatting their own submissions, comments, etc. while limiting the site's vulnerabilities to incursions such as Cross Site Security (XXS) attacks.

## Markdown Dialects

Other dialects of Markdown include Maruku, PHP Markdown Extra and Pandoc. 

### Original Markdown

John Gruber's overarching goal in creating Markdown was to create a tool that would make it "easy to read, write, and edit prose" for the web. He drew the distinction between HTML as a *publishing* format and Markdown as a *writing* format. As a consequence, he limited Markdown's formatting syntax to issues that can be addressed in plain text. 

For any markup that is not covered by the Markdown syntax, you can simply embed HTML tags directly in the text. The only restriction to this is that block-level HTML elements (&lt;form&gt;, &lt;p&gt;, &lt;section&gt;, etc.) must be separated from surrounding content by blank lines, and the start and end tags of the block should not be indented with either tabs or spaces.

### GitHub Flavored Markdown

GitHub Flavored Markdown adds some custom function features to the basic Markdown syntax, such as a Text Formatting Toolbar. These primarily permit the formatting of text without requiring that the user first learn Markdown syntax.

### kramdown

kramdown is a free MIT-licensed Ruby library for parsing and converting a superset of Markdown. kramdown syntax is based on Markdown's syntax, with enhanced features that are available in several other Markdown implementations. For the most part, Markdown documents should parse cleanly with kramdown. The [kramdown Syntax](http://kramdown.gettalong.org/syntax.html) documents all instances where the kramdown syntax differs from that of Markdown.

# Quick Reference Below

Most of the time, a quick reference is all you will need. And as the name promises, it is much faster than searching through the full reference. In this spirit you will find below each kramdown element explained in 3 steps:

1. Description
2. Functionality
3. Example

For those occasions when you need more details, you can find them in the → [kramdown Syntax](http://kramdown.gettalong.org/syntax.html).


# Headers

## Giving an Outline

When writing long text you will need to structure it in order to avoid getting lost and to enhance navigation. This is best managed by the use of headers. Navigation is accomplished by repeating the headers in the table of contents and linking them to their occurrence in the text. The table of contents to the right is such an example. Click on an entry and the page will scroll to it.

## We only use 3 Levels

```markdown
# Header 1

This is the topmost and most prominent level. This is the admiral of headings.

## Header 2

Almost as important as Heading 1. The captain of headings.

### Header 3

The commander of headings. This is still way more important than a paragraph, yet no longer important enough to be listed in the table of contents in our default setting of 2 levels. We chose this setting after consultation with our readers revealed that 3 or more levels are too detailed and one level only was too coarse.

```
And below this is how above source code renders. ??? Note: On final publishing this part need to be removed from the TOC ???

---
# Heading 1

This is the topmost and most prominent level. This is the admiral of headings.

## Heading 2

Almost as important. The captain of headings.

### Heading 3

This is still way more important than a paragraph, yet no longer important enough to be listed in the table of contents in our default setting of 2 levels. We chose this setting after consultation with our readers revealed that 3 or more levels are too detailed and one level only was too coarse.

---


# Lists

## Structure your Info

You get two types of lists to structure your information:

- Unordered list (Such as this one, each line item is equal).
- Ordered list (Recognizable by enumeration)

## Examples

```markdown

__Shopping List:__

- Dairy products
  - Cheese
  - Milk
  - Yoghurt
  - Ice Cream
- Meat
  - Steak
    - Sirloin
    - Filet
  - Lamb chops

__Reading this Article:__

1. Read it top to bottom
2. Read it again and scratch your head: "What were they smoking?"
3. If you need to read a third time, then curse!

```
---

__Shopping List:__

- Dairy products
  - Cheese
  - Milk
  - Yoghurt
  - Ice Cream
- Meat
  - Steak
    - Sirloin
    - Filet
  - Ground Meat

__Reading this Article:__

1. Read it top to bottom
2. Read it again and scratch your head: "What were they smoking?"
3. If you need to read a third time, then curse!

---

# Tables



# Notes



# Footnotes



# Definition Lists





---
layout: page
title: Markdown Writing
subtitle: How to mark up the article’s structure.
abstract: This is the companion to the Article Template. Whereas the Article Template only presents all structured elements, this article adds additional information and for each structured element shows the markdown source code.
issueNo: 205
readiness:
   - is-active
---

# Using this Manual

## 



# Philosophy

## Magic of Markdown

### Staying in the Zone

Once you're comfortable with its syntax and capabilities, Markdown enables you, the author, to write in an environment as free as possible from distractions and train-of-thought interrupting actions that can pull you out of "The Zone". 

### Markdown vs Markup

Markdown and Markup may sound like polar opposites, but the reality is that their relationship is more like parent/child. The purpose for both is to facilitate the formatting of documents. Editors of print publications used to physically go through text and annotate (mark up) to indicate where the printers should employ, for example, **bold** or *italic* text. Markup has become the generic term for a language that is used as a shorthand to describe these types of formatting. Markdown, which was initially created by Mark Gruber of Daring Fireball, is one of several specific markup languages, each of which have their own simple syntax. Markdown is the markup language of choice for such sites as [Stack Exchange](http://stackexchange.com/) , [GitHub](https://github.com/), and [reddit](https://www.reddit.com/).

Markdown also enables the administrators of web sites to allow users fairly wide latitude in formatting their own submissions, comments, etc. while limiting the site's vulnerabilities to incursions such as Cross Site Security (XXS) attacks.

### Markdown Dialects

Other dialects of Markdown include [MultiMarkdown](https://en.wikipedia.org/wiki/MultiMarkdown) , [Markdown Extra](https://en.wikipedia.org/wiki/Markdown_Extra)  and [Pandoc](https://en.wikipedia.org/wiki/Pandoc) . 


#### Original Markdown

John Gruber's overarching goal in creating Markdown was to create a tool that would make it "easy to read, write, and edit prose" for the web. He drew the distinction between HTML as a *publishing* format and Markdown as a *writing* format. As a consequence, he limited Markdown's formatting syntax to issues that can be addressed in plain text. 

For any markup that is not covered by the Markdown syntax, you can simply embed HTML tags directly in the text. The only restriction to this is that block-level HTML elements must be separated from surrounding content by blank lines, and the start and end tags of the block should not be indented with either tabs or spaces.

#### GitHub Flavored Markdown

GitHub Flavored Markdown adds some custom function features to the basic Markdown syntax, such as a Text Formatting Toolbar. These primarily permit the formatting of text without requiring that the user first learn Markdown syntax.

#### kramdown

kramdown is a super-set of Markdown, adding enhanced features. For the most part, Markdown documents should parse cleanly with kramdown. Our articles use kramdown as we take advantage of its added formatting power. Since it is backwards compatible to markdown your writing workflow can begin using any markdown tools and end with publishing your article in V²Publishing using kramdown.


## Reference


Most of the time, a quick reference is all you will need. And as the name promises, it is much faster than searching through the full reference. In our case the quick reference is also more intuitive, as we also show how it will look in the finished article via the *Example Rendered*. In this spirit you will find below each kramdown element briefly explained and the shown to you  explained in 3 steps:

1. __Purpose:__ Why to use it (paragraph directly under the element's heading).
2. __Example Code:__ How to use it.
3. __Example Rendered:__ How it looks.

For those occasions when you need more details, you can find them in the → [kramdown Syntax](http://kramdown.gettalong.org/syntax.html).



## Paragraphs

Consecutive lines of text are considered to be one paragraph. A blank line separates a paragraph from what follows below.

### Example Code

```
This is the first paragraph. I am rattling on and on to make it long enough that your browser will cause a softbreak, that is a linebreak at the right edge of your browser width.

This is the second paragraph. Notice how it is written and rendered both with spacing between the paragraphs.

This is the third paragraph.\\
The double backslash causes a hardbreak within the paragraph.
```

### Example Rendered

<div class="v2-frame">
  <p>This is the first paragraph. I am rattling on and on to make it long enough that your browser will cause a softbreak, that is a linebreak at the right edge of your browser width.</p>
  <p>This is the second paragraph. Notice how it is written and rendered both with spacing between the paragraphs.</p>
  <p>This is the third paragraph.<br />
The double backslash causes a hardbreak within the paragraph.</p>
</div>


## Headings

When writing long text you will need to guide the reader to avoid he is getting lost. You help the reader with __headings__.

In turn headings guide readers with three functions:

1. __Structure:__ Headers are hierarchical, that is all children headings belong to the same topic as their parent heading.
2. __Overview:__  The headings are utilized by the writer to automatically generate the *Table of Contents*, which contains all headings of the document, but without its copy. As such the *Table of Contents* is a complete, yet succinct representation of the whole article. 
3. __Navigation:__ And this is the cool part of *Table of Contents*. Clicking a heading will scroll the document to it, so that you can read all its related copy without the need to scour for it.


{:.v2-note.info}

 1. A heading must always be preceded by a blank line except at the beginning of the document.
 2. A heading must always be followed by blank line (not required in markdown).
 3. The higher the heading hierarchy the shorter it should be written!
 4. How to automatically generate the table of contents is explained in → [Appetizing Articles / Automatic ToC]({{site.baseurl}}/plan/flow/publishing/appetizing/#automatic-toc).

### Example Code

```
# Heading Level 1

This is the highest heading level. The naval ranking equivalent to an admiral!
	
## Heading Level 2
	
Next down is the captain heading level.
	
### Heading Level 3
	
The commander level is typically the smallest level used in articles.

#### Heading Level 4

The ensign level is needed to structure the longer content of books.
```


### Example Rendered

<div class="v2-frame">
	<h1> Heading Level 1</h1>
	<p>This is the highest heading level. The naval ranking equivalent to an admiral!</p>
	<h2> Heading Level 2</h2>
	<p>Next down is the captain heading level.</p>
	<h3> Heading Level 3</h3>
	<p>The commander level is typically the smallest level used in articles.</p>
       <h4> Heading Level 4</h4>
	<p>The ensign level is needed to structure the longer content of books.</p>
</div>


## Block Quotes

Highlight materials from other sources via *Block Quotes*. You can comment within the original quote. The syntax is identical to plain text email:

### Example Code

```
> You mark writing from other sources like done here via block quotes.
>  > The indented quote marks abother person's comment.
> This is how it looks when that writing carries on. 
>  > Yet another comment to same writing. 
>  >  > You even can comment the comment.
```

### Example Rendered

<div class="v2-frame">
	<blockquote>
	  	<p>You mark writing from other sources like done here via block quotes.</p>
	  	<blockquote>
		  	  <p>The indented quote marks abother person's comment.</p>
	  	</blockquote>
	  	<p>This is how it looks when that writing carries on.</p>
	  	<blockquote>
		  	  <p>Yet another comment to same writing.</p>
	  	</blockquote>
	  		  <blockquote>
			  	  <p>You even can comment the comment.</p>
		  	</blockquote>
	</blockquote>
</div>




## Code Blocks

Code blocks allow you to display sections or snippets of source code without that code being parsed (meaning executed). There are many redundant ways to show code blocks. For simplicity we use only the most simple and robust way as shown in the example below:

### Example Code

```
<body>
Content of the document......
</body>
```

### Example Rendered

<div class="v2-frame">
	<pre>
  	<code>
    	&lt;body&gt;
      	Content of the document......
    	&lt;/body&gt;
		</code>
	</pre>
</div>


## Horizontal Rules

For those times when you really have to draw a line in the sand. Start the line with three or more underscores.

### Example Code

```

---

or

-------------------------------------------

```

{:.v2-note.info}

You can use any number of dashes, as long as they are at least three. This way you can make the rule more visible in your markdown source.

### Example Rendered

<div class="v2-frame">
  <br>
  <hr>
  <p>or</p>
  <hr>
  <br>
</div>

## Unordered Lists

An unordered list presents hierarchical information in a visually structured, easy to read fashion.

### Example Code

```
__Shopping List:__

- Vegetables
  - Cucumber
  - Tomatoes
  - Spinach
  - Corn
- Wine
  - Reds
    - Merlot
    - Shiraz
  - Whites
    - Zinfandel
```

### Example Rendered

<div class="v2-frame">
<p><strong>Shopping List:</strong></p>

<ul>
  <li>Vegetables
    <ul>
      <li>Cucumber</li>
      <li>Tomatoes</li>
      <li>Spinach</li>
      <li>Corn</li>
    </ul>
  </li>
  <li>Wine
    <ul>
      <li>Reds
        <ul>
          <li>Merlot</li>
          <li>Shiraz</li>
        </ul>
      </li>
      <li>Whites</li>
    </ul>
  </li>
</ul>
</div>




## Ordered Lists

__Reading this Article:__

1. Read it top to bottom
2. Read it again and scratch your head: "What were they smoking?"
3. If you need to read a third time, then curse!
4. 

__Reading this Article:__

1. Read it top to bottom
2. Read it again and scratch your head: "What were they smoking?"
3. If you need to read a third time, then curse!


## Definition Lists

For when you need to assign definitions to one or more terms.


## Tables

When you need to display simple tabular data.

	|Cats| Dogs |
	|--|--|
	|Singapura| Beagle |
	|Siamese|Collie|

|Cats| Dogs |
|--|--|
|  Singapura| Beagle |
|Siamese|Collie|


## HTML elements



## Block Attributes



## Extensions





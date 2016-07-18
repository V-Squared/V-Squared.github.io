---
layout: page
title: Advanced Article Formatting
subtitle: Expert's guide on formatting articles on V². 
abstract: We give you a tools to add that extra touch making your articles stand out and simply be more fun to read. We show examples of *Super Tables*, *Feature Slideshows*, and *Table of Contents*. All of which are assisting the reader to ingest your information faster. We also show you how to keep your kramdown source code legible.
issueNo: 204
contents:
  - name: Table of Contents
    url: table-of-contents
    subitems:
    - name: Manual vs Automatic
      url: manual-vs-automatic
    - name: Manual ToC
      url: manual-toc
    - name: Automatic ToC
      url: automatic-toc
  - name: Advanced Tables
    url: advanced-table-formatting
    subitems:
      - name: Overview
        url: overview-advanced-tables
      - name: Polish Table
        url: polish-code
      - name: Apply Styling
        url: apply-styling
      - name: Use Graphic Symbols
        url: use-graphic-symbols
  - name: Super Tables
    url: super-table-formatting
    subitems:
      - name: User Story
        url: user-story
      - name: Key Features
        url: super-tables-features
      - name: How it Works
        url: how-it-works
      - name: Images in Tables
        url: images-in-tables
      - name: Workflow Complex Tables
        url: workflow-tables
      - name: Background Colors
        url: ref-background-colors
      - name: Table Styles
        url: ref-table-styles
  - name: SlideShow
    url: slide
    subitems:
      - name: Example
        url: slide-example
  - name: Reference
    url: reference
    subitems:
      - name: Tools
        url: ref-tools
      - name: Symbols used in Tables
        url: graphic-symbols
readiness:
   - is-complete
   - is-complete
   - is-active
 
manual-versus-automatic-toc:
   style: [twin-head,twin-blue]
   name: Manual versus Automatic ToC
   desc: Understanding the features of both ToC types makes it easy to know when to use which.
   head: [Feature, Automatic ToC, Manual ToC]
   rows:
     - data: [Writer's time, none, considerable]
       color: [tp, gn, rd]
     - data: [Permanent Anchors †, — , ✔ ]
       color: [tp, rd, gn]
     - data: [Long Text Heading yet Short ToC Entry ‡,  — , ✔ ]
       color: [tp, rd, gn]
     - data: [Control which Headings to list †3,  — , ✔ ]
       color: [tp, rd, gn]
     - data: [When to use, Create & Develop, Beta & Make]
       color: [tp, tp, tp]
   footer: >
      **†** Automatic ToC generates the anchors from the content of the heading. This is a problem like so: You publish an article. Another site links to a heading in your article and brings traffic. You fix a typo in the heading. The heading breaks. Traffic lost. Manual ToC solves this problem by manually creating permanent anchors that are independant to heading content.<br>
      **‡** In the Table of Content Side Bar there is not much space. Headings need to be short, borderlining to be cryptic. In the Article you have space. Longer, expressive headings are better. Manual ToC gives you both, whereas automatic ToC only allows short headings in both places.<br>
      **†3** Sometimes you do not need or want to list all headings for various reasons. Mostly to not make your ToC too long and scary. In Manual ToC you choose which headings to place in the ToC, whereas in Automatic ToC all headings will be listed in the ToC.

table-vicase-vs-macpro:
   style: [twin-head,twin-blue]
   name: ViCase vs Mac Pro
   desc: Battle of the GPU Goliath' of Workstations
   head: [Features, ViCase-970T, Mac Pro]
   rows:
     - data: [OS, Win 10 Pro, Win 10 Pro]
       color: [tp, gn, gn]
     - data: [CPU, i7-6700 (Gen 6 †), 3.7 GHz Quad (Gen 5) ‡]
       color: [tp, gn, rd]
     - data: [AiO Conversion,✓ †3,―]
       color: [tp, gn, rd]
   footer: >
      **†** Latest CPU Generation. Introducing DDR4 Memory. Important for larger workstation memory and speed.<br>
      **‡** Using an old CPU socket limits upgrading in the future. Still uses DDR memory.<br>
      **†3** This makes a big difference if you need a portable workstation.

table-comparison-all: 
  style: [twin-head,twin-blue]
  name: Workstation Comparison Overview
  desc: All key features in one table for easy over all comparison
  head: [Features,ViPC Pro Workstation,Apple Mac Pro,HP Z240,HP G3,Dell Precision Tower]
  rows: 
    - data: [Price, 100%,218%,132%,136%,126%]
      color: [tp,gn,rd,yw,yw,yw]
    - data: [Similar Performance,✓,✓,✓,✓,✓]
      color: [tp,gn,gn,gn,gn,gn]
    - data: [All In One Conversion,✓,―,―,✓,―]
      color: [tp,gn,rd,rd,gn,rd]
    - data: [3 Chamber Airflow or better,✓,✓,―,―,―]
      color: [tp,gn,gn,rd,rd,rd]
    - data: [Portable,✓,✓,―,―,―]
      color: [tp,gn,gn,rd,rd,rd]
    - data: [Surge Protection,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Clean Desk Cabling,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Intel Generation,6 †,5 ‡,6,6,6]
      color: [tp,gn,yw,gn,gn,gn]
    - data: [Open Configuration,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
    - data: [DIY Option,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
    - data: [I Fixit Option,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Flat Fee Assembly Service,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Flat Fee Repair Service,✓,―,―,―,―]
      color: [tp,gn,rd,rd,rd,rd]
  footer: >
    **†** Latest CPU Generation. Introducing DDR4 Memory. Important for larger workstation memory and speed.<br>
    **‡** Using an old CPU socket limits upgrading in the future. Still uses DDR memory.

table-nc-codes: 
  head: [G-Code,Description]
  style: [twin-head-desc,twin-blue]
  rows:
    - data: ['',
      'Go rapidly (with maximum traverse rate) to the X/Y/Z position. This code is used for position and not for actual machining.<br><b>Format:</b> G00 [X#][Y#][Z#]<br><b>Example:</b> G00 Z100'
      ]
      img: [/plan/flow/mechanical/nc-codes/g00.png,'']
    - data: ['','Travel in a straight line using the programmed feed rate (F). This code is used for machining.<br><b>Format:</b> G01 [X#][Y#][Z#][F#]<br><b>Example:</b> G01 X2.5 Y4.1 F200']
      img: ['/plan/flow/mechanical/nc-codes/g01.png','']
    - data: ['','Exactly like G02 but the circular motion is going counterclockwise.<br><b>Format:</b> G03[X#][Y#][Z#][I#][J#][K#][R#][F#]<br><b>Example:</b> G03 X10 Y10 I10 J0 F200']
      img: ['/plan/flow/mechanical/nc-codes/g03.png','']
    - data: ['','Selects the XY plane for circular movements (see G02 and G03).<br><b>Format:</b> G17<br><b>Example:</b> G17']
      img: ['/plan/flow/mechanical/nc-codes/g17.png','']

table-shaded-colors:
   style: [twin-head,twin-blue]
   name: Shaded Table Colors 
   desc: All Table Background Colors having Shades. These colors are mostly used in comparison tables. Each come with three shades to express variations.
   head: [Color, Light, Standard, Dark]
   rows:
     - data: [gray, ly - light gray, gy - gray, dy - dark gray]
       color: [tp, ly, gy, dy]
     - data: [yellow, lw - light yellow, yw - yellow, dy - dark yellow]
       color: [tp, lw, yw, dw]
     - data: [green, ln - light green, gn - green, dn - dark green]
       color: [tp, ln, gn, dn]
     - data: [red, ld - light red, rd - red, dd - dark red]
       color: [tp, ld, rd, dd]
   footer: >
      **Trick to remember:** First remember the color codes, e.g. gy for **g**ra**y**. Then the variations are easy. Keep last char. First char is either l for light or d for dark.

table-solid-colors:
   style: [no-head,twin-blue]
   name: Solid Table Colors
   desc: These colors are for special purpose.
   rows:
     - data: [or - orange, bl - blue, pp - purple ]
       color: [or, bl, pp]
     - data: [bk - black, wt - white, tp - transparent]
       color: [bk, wt, tp]
   footer: >
      **Note:** Use tp transparent for header columns.

table-style-twin-head:
   style: [twin-head,twin-blue]
   name: Style Twin Headings
   desc: Ideal for Feature Comparison
   head: [Features, Model 1, Model 2]
   rows:
     - data: [Feature 1 , Good, Bad]
       color: [tp, gn, rd]
     - data: [Feature 2,―,✓]
       color: [tp,rd,gn]

table-style-twin-head-desc:
   style: [twin-head-desc,twin-blue]
   name: Style Twin Headings
   desc: Ideal for Term and Definition
   head: [Term, Definition]
   rows:
     - data: [Term 1, Definition 1]
     - data: [Term 2, Definition 2]

table-style-row-head:
   style: [row-head,row-blue]
   name: Style Row Heading
   desc: >
    Some data just need a Row Heading. Typical example: Term & Definition as below.
   rows:
     - data: [Campaign 1, Creating the V²Platform]
       color: [tp, tp]
     - data: [Campaign 2, Community Promotions]
       color: [tp, tp]
     - data: [Campaign 3, Shop and Press Campaign]
       color: [tp, tp]

table-style-col-head:
   style: [col-head,col-blue]
   name: Style Column Heading
   desc: Ideal for straight forward comparison table.
   head: [Campaign 1, Campaign 2, Campaign 3]
   rows:
     - data: [Spring, Summer, Fall]
       color: [ln, gn, dn]
       
table-style-no-head:
   style: [no-head,no-blue]
   name: Style No Headings
   desc: Ideal to just list things. In this example we list useful special characters.
   rows:
     - data: [←, ↑, →, ↓]
       color: [tp, tp, tp, tp]
     - data: [  ⇤  , ⤒ ,  ⇥ , ⤓   ]  
       color: [tp, tp, tp, tp]
     - data: [   ↤ , ↥ ,   ↦ , ↧  ]   
       color: [tp, tp, tp, tp]
     - data: [  ➴ , ➵ ,   ➶ ,    ➽    ]
       color: [tp, tp, tp, tp]
     - data: [ ☐ , ☑  ,  ☒  ,   ☓   ]
       color: [tp, tp, tp, tp] 
     - data: [ ✔ , ✘  ,  ➖ , ✚  ]
       color: [tp, tp, tp, tp]
     - data: [ †  ,  ‡ , †3, †4]
       color: [tp, tp, tp, tp]
     - data: [ ©  ,  ® , µ, V²]
       color: [tp, tp, tp, tp]
     - data: [ ∅  ,  ∆ ,  ❤  ,  ❢ ] 
       color: [tp, tp, tp, tp]
slideshow1:
  slides:
    - img: /images/placeholder_800x400_1.jpg
      title: Title 1
      desc: This is a description 1
    - img: /images/placeholder_800x400_2.jpg
      title: Title 2
      desc: This is a description 2
    - img: /images/placeholder_800x400_3.jpg
      title: Title 3
      desc: This is a description 3
---


# Adding Table of Contents {#table-of-contents}

## Manual versus Automatic ToC {#manual-vs-automatic}

{% include table id="manual-versus-automatic-toc" %}

## Manual ToC {#manual-toc}

### Adding ToC to YML Front Matter

```yml
contents:
  - name: Table of Contents
    url: table-of-contents
    subitems:
    - name: Manual vs Automatic
      url: manual-vs-automatic
    - name: Manual ToC
      url: manual-toc
    - name: Automatic ToC
      url: automatic-toc
  - name: Advanced Tables
    url: advanced-table-formatting
    subitems:
      - name: Key Features
        url: advanced-tables-features
```

### Adding Manual Anchors to Headings

```markdown
# Table of Contents {#table-of-contents}

## Manual versus Automatic ToC {#manual-vs-automatic}

The key difference is ...
```

## Automatic ToC {#automatic-toc}

This feature is not yet available, but it is in our to do list. If you are writing a long article and you need an automatically generated table of contents to keep an overview, you can use th very nice → [Classeur Markdown Editor](http://classeur.io/). It comes with the added bonus of life preview. (You need to enable it as it is off by default).


# Advanced Table Formatting {#advanced-table-formatting}

## Overview {#overview-advanced-tables}

1. Align columns & clean up code
2. Apply Styling
3. Use Graphic Sumbols

## Polish Table Source Code {#polish-code}

The easiest way is to use → [Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables). 

1. It can import existing tables from clipboard, spread sheet and of course the markdown table source code you already have.
2. Select each column and apply alignment (left | center | right ). Repeat for each column.
3. Press Generate Button
4. Copy nicely formatted  markdown source code back to your document

### Source Code after clean up

```markdown
|             Features | ViPC | Apple Mac Pro | HP Z |
|---------------------:|:----:|:-------------:|:----:|
|  Similar Performance |  Yes |      Yes      |  Yes |
| All In One Coversion |  Yes |       No      |  Yes |
|        Quiet Cooling |  Yes |      Yes      |  No  |
|   Open Configuration |  Yes |       No      |  No  |

```

### Rendered Table

|             Features | ViPC | Apple Mac Pro | HP Z |
|---------------------:|:----:|:-------------:|:----:|
|  Similar Performance |  Yes |      Yes      |  Yes |
| All In One Coversion |  Yes |       No      |  Yes |
|        Quiet Cooling |  Yes |      Yes      |  No  |
|   Open Configuration |  Yes |       No      |  No  |


## Apply Styling {#apply-styling}

### Source Code

Please note the first line. This is how you apply the style. **Note:** It is important to leave a blank line between your style and the table.

```markdown
{:.uk-table.twin-head.twin-blue}

|             Features | ViPC | Apple Mac Pro | HP Z |
|---------------------:|:----:|:-------------:|:----:|
|  Similar Performance |  Yes |      Yes      |  Yes |
| All In One Coversion |  Yes |       No      |  Yes |
|        Quiet Cooling |  Yes |      Yes      |  No  |
|   Open Configuration |  Yes |       No      |  No  |
```

### Rendered Table

{:.uk-table.twin-head.twin-blue}

|             Features | ViPC | Apple Mac Pro | HP Z |
|---------------------:|:----:|:-------------:|:----:|
|  Similar Performance |  Yes |      Yes      |  Yes |
| All In One Coversion |  Yes |       No      |  Yes |
|        Quiet Cooling |  Yes |      Yes      |  No  |
|   Open Configuration |  Yes |       No      |  No  |


### More Styles ...

Please refer → [Reference for all Table Styles](https://v-squared.github.io/plan/flow/writing/advanced-formatting/#ref-table-styles) for a list, examples and use cases of four table styles. These styles can be used for both *Advanced Table Formatting* and *Super Table Formatting*.


## Use Graphic Symbols {#use-graphic-symbols}

### Source Code

```markdown
{:.uk-table.twin-head.twin-blue}

|             Features | ViPC | Apple Mac Pro | HP Z |
|---------------------:|:----:|:-------------:|:----:|
|  Similar Performance |   ✓  |       ✓       |   ✓  |
| All In One Coversion |   ✓  |       ―       |   ✓  |
|        Quiet Cooling |   ✓  |       ✓       |   ✓  |
|   Open Configuration |   ✓  |       ―       |   ✓  |
```

### Rendered Table

{:.uk-table.twin-head.twin-blue}

|             Features | ViPC | Apple Mac Pro | HP Z |
|---------------------:|:----:|:-------------:|:----:|
|  Similar Performance |   ✓  |       ✓       |   ✓  |
| All In One Coversion |   ✓  |       ―       |   ✓  |
|        Quiet Cooling |   ✓  |       ✓       |   ✓  |
|   Open Configuration |   ✓  |       ―       |   ✓  |

### More Graphic Symbols

Please refer to → [Graphic Symbols we use in tables](https://v-squared.github.io/plan/flow/writing/advanced-formatting/#graphic-symbols) for a list of useful symbols.


# Super Table Formatting {#super-table-formatting}

## User Story {#user-story}
As a **Reader of your Comparison Review** I very appreciate the colored comparison tables with the intuitive coloring of cell backgrounds: red = bad, yellow = so so , green = good. This speeds up my table reading significantly! And I can see pattern that otherwise I would have overlooked. These pattern proved most helpful in my decision making process. An example is worth a thousand words. Just look at the table below and let it speak for itself:

{% include table id="table-comparison-all" %}

## Key Features {#super-tables-features}

- Keep all data in one place
   - Name
   - Description
   - Table Data
   - Footer (Can use formatting, see examples)
   - Pictures (Background or foreground pictures for cell content)
- Keep Article Text Clean
   - Regular table convolute the article text, making it hard to keep an overview
   - Our tables are removed from the article text and placed in the yml front matter. Keeping article text clean.
- Easy and fast to write table data in front matter yml
   - Same power as HTML tables
   - but much easier and faster to write and edit for the author
   - much higher density than HTML. Much easier to keep the overview
      - If HTML table contain 100% of code and lines, our yml tables are only 20% of lines and 10% of code
- Powerful & consistent table styling
   - Styling via stylesheet: All tables look the same, easy to change appearance of all tables consistently
   - In contrast: We previously published our standards on Google Drive. Each table was individually formatted. It was hard if not impossible to keep a consistent style. A later update of the style would be impossible.
- Table Name: Helps reader to find the right table
- Table Description: Helps reader to quickly understand the table
- Programmable Table Header for four different table styles:
   - Twin Heading
   - Row Heading
   - Column Heading
   - No Heading
- Table Footer
   - Multiple Callouts / Lines per Table in Footer
   - Markdown in Footer
- Cell Background Coloring
   - ideal to make feature comparison table fast to read
- Support Graphics Symbols in table cells
   - Faster to write and easier to read


## How it works {#how-it-works}

### Step 1: Convert Table to YML

```yml
table-vicase-vs-macpro:                                         # Table ID. Needed for Include in the Article
   style: [twin-head,twin-blue]                                 # Define styling of column and row header 
   name: ViCase vs Mac Pro                                      # Table Name (optional)
   desc: Battle of the GPU Goliath' of Workstations             # Table Description (optional)
   head: [Features, ViCase-970T, Mac Pro]                       # Column Header (optional)
   rows:                                                        # Initialize data section of table
     - data: [OS, Win 10 Pro, Win 10 Pro]                       # Row of Table
       color: [tp, gn, gn]                                      # Background Colors of table cells (optional)
     - data: [CPU, i7-6700 (Gen 6 †), 3.7 GHz Quad (Gen 5) ‡]
       color: [tp, gn, rd]
     - data: [AiO Conversion,✓ †3,―]
       color: [tp, gn, rd]
   footer: >                                                    # Footer of Table (optional)
      **†** Latest CPU Generation. Introducing DDR4 Memory. Important for larger workstation memory and speed.<br>
      **‡** Using an old CPU socket limits upgrading in the future. Still uses DDR memory.<br>
      **†3** This makes a big difference if you need a portable workstation.
```

### Step 2: Insert YML Table into Front Matter

```yml
---                                                             # Begin of YML Front Matter
layout: page                                                    # Choose Page Layout Template
title: Advanced Article Formatting                              # Title
subtitle: Geek's Guide on Formatting Articles on V²             # Subtitle
abstract: Your toolbox for formatting Articles                  # Abstract
issueNo: 204                                                    # Number of linked Article Issue
readiness:                                                      # Readiness of Article
   - is-active                                                  #    ... continues
                                                                # empty line is recommended for legibility
# ← ← ← Place your table here, after readiness and before End of YML Front Matter
                                                                # empty line is recommended for legibility
---                                                             # End of YML Front Matter
```


### Step 3: Insert Table with Liquid Include

Place this markdown code in the location of your article where you want to show the table. Note that the "table id" need to match up character for character with the corresponding table is of your YML table. Note further that in the YML table the *table id* must end with a colon, whereas in the include it must **not** have a colon.

```liquid
{% raw %}{% include table id="table-vicase-vs-macpro" %}{% endraw %}
```

### Step 4: Validate YML Syntax

- Press *Preview changes* in the GitHub editor. If your YML front matter shows as text and not as table then you have a YML syntax error. Go back to edit and fix the error.
   - If you can not find your problem, you can use [YML Lint](http://www.yamllint.com/) to find your error.
   - Another method is binary search where you remove half of your YML and go to preview. If the preview is good, your error is in the removed half, if the review is bad it is in the remaining half. Repeat process until you found your error.
- Commit changes. Load article page in browser and check layout of article and table

### Step 5: Enjoy Table

After all is done your completed table shall render in the article like so:

{% include table id="table-vicase-vs-macpro" %}


## Images in Tables {#images-in-tables}

### Table Source

```markdown
table-nc-codes: 
  head: [G-Code,Description]
  style: [twin-head-desc,twin-blue]
  rows:
    - data: ['',
      'Go rapidly (with maximum traverse rate) to the X/Y/Z position. This code is used for position and not for actual machining.<br><b>Format:</b> G00 [X#][Y#][Z#]<br><b>Example:</b> G00 Z100'
      ]
      img: [/plan/flow/mechanical/nc-codes/g00.png,'']
    - data: ['','Travel in a straight line using the programmed feed rate (F). This code is used for machining.<br><b>Format:</b> G01 [X#][Y#][Z#][F#]<br><b>Example:</b> G01 X2.5 Y4.1 F200']
      img: ['/plan/flow/mechanical/nc-codes/g01.png','']
    - data: ['','Exactly like G02 but the circular motion is going counterclockwise.<br><b>Format:</b> G03[X#][Y#][Z#][I#][J#][K#][R#][F#]<br><b>Example:</b> G03 X10 Y10 I10 J0 F200']
      img: ['/plan/flow/mechanical/nc-codes/g03.png','']
    - data: ['','Selects the XY plane for circular movements (see G02 and G03).<br><b>Format:</b> G17<br><b>Example:</b> G17']
      img: ['/plan/flow/mechanical/nc-codes/g17.png','']
```

### Rendered Table

{% include table id="table-nc-codes" %}



## Workflow for Complex Tables {#workflow-tables}

Developing tables with useful content and explessive layout is a lot of work. Like any larger project the grogress is smoother if you cut it into smaller steps. This is my workflow of developing tables as complex as you saw in the example:

1. **Develop in Spreadsheet:** This offers you creative freedom, such as changing order of column or rows with simple drag and drop. Important powerful features during the table development phase.
2. **Convert to Markdown:** Use → [Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables) to convert Excel table to formatted markdown table. Use column alignment to make tables easy to read in markdown source code. **Tip:** Use special characters such as *checkmark*, *cross-out*, *em-dash* to visually express that the cell content is good or bad. Later this message will be expressed with the background color.
3. **Write Article in Markdown Editor:** I am using [Classeur Markdown Editor](http://classeur.io/). This gives you live preview of your articles and your tables during the writing process. You also have a live Table of Contents with active links, which is invaluable to keep an overview and your article structure straight when writing longer articles.
4. **Review Process on V²Site:** We use V²Flow during article review. Feedback can be given as comment in linked issue of article. Complex edits are done in Classeur, small edits in the GitHub source code editor.
5. **Convert table to YML:** This is a manual process. Once you have practice it is quite fast.
6. **YML Debugging:** Sometimes you will make a syntax error in your YML front matter. It shows when you *Preview changes* in the GitHub editor and you YML front matter shows as text and not as table. If you can not find your problem, you can use [YML Lint](http://www.yamllint.com/) to find your error. Another method is binary search where you remove half of your YML and go to preview. If the preview is good, your error is in the removed half, if the review is bad it is in the remaining half. Repeat process until you found your error.
7. **Final Review:** Check that all is as it should be. Fix any bugs. Repeat until all is well.



## Reference of all Background Colors {#ref-background-colors}

{% include table id="table-shaded-colors" %}

<br>

{% include table id="table-solid-colors" %}


## Reference for all Table Styles {#ref-table-styles}

There are five table styles suited for different data types

{:.uk-table.twin-head.twin-blue}

|          Table Style | Data Type             | 
|---------------------:|:----------------------|
|          Column Head | Standard table        |
|            Twin Head | Feature Comparison    |
|Twin Head Description | Terms and Description |
|             Row Head | Item Lists            |
|              No Head | List of Things        |


### Column Head  

{% include table id="table-style-col-head" %}

    style: [col-head,col-blue]

### Twin Head

{% include table id="table-style-twin-head" %}

    style: [twin-head,twin-blue]

### Twin Head Description

{% include table id="table-style-twin-head-desc" %}

    style: [twin-head-desc,twin-blue]

### Row Head

{% include table id="table-style-row-head" %}

    style: [row-head,row-blue]


### No Head 

{% include table id="table-style-no-head" %}

    style: [no-head,no-blue]

# SlideShow {#slide}

The SlideShow like the others, it's in a include. you include the slideshow with ```{% raw %}{% include slideshow id="slideshow1" %}{% endraw %}``` with an id that is referencing the config in the front matter which is :

```yml
slideshow1:
  slides:
    - img: /images/placeholder_800x400_1.jpg
      title: Title 1
      desc: This is a description 1
    - img: /images/placeholder_800x400_2.jpg
      title: Title 2
      desc: This is a description 2
    - img: /images/placeholder_800x400_3.jpg
      title: Title 3
      desc: This is a description 3
```

All the slide is inside the slides object. The properties are:

- img: Url to the image
- title: The ```<h1>``` title of the slide
- description: The ```<p>``` description of the slide

## Example {#slide-example}

{% include slideshow id="slideshow1" %}

# Reference {#reference}

## Tools {#ref-tools}
- [Markdown Tables Generator](http://www.tablesgenerator.com/markdown_tables)
- [Unicode Character / Symbols](https://www.materialui.co/unicode-characters)
- [Material Design Colors](https://www.materialui.co/unicode-characters)
- [YML Lint](http://www.yamllint.com/) (Verify syntax of front matter YML)

## Symbols used in Tables {#graphic-symbols}

{% include table id="table-style-no-head" %}


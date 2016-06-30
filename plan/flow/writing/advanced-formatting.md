---
layout: page
title: Advanced Article Formatting
subtitle: Geek's Guide on Formatting Articles on V² 
abstract: Your toolbox to make your articles easier to read and write even if they have complex content. Examples on powerful formatting that assists the reader in quickly ingest complex information. We also show how to keep your kramdown code legible for yourself.
issueNo: 204
readiness:
   - is-active
table-vicase-vs-macpro:
   style: [twin-head,twin-blue] # Lukas: need to change to: [twin-head,table-blue]
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
      **‡** Using an old CPU socket limits upgrading in the future. Still uses DDR memory.
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
    - data: [Intel Generation,6,5 (*1),6,6,6]
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
   **Note:** Buying a new computer with an old socket will limit if not hamper upgradeability in the future.

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

table-style-row-head:
   style: [row-head,twin-blue]
   name: Style Row Heading
   desc: Some data just need a Row Heading. Like this example
   rows:
     - data: [Campaign 1, Creating the V²Platform]
       color: [tp, tp]
     - data: [Campaign 2, Community Promotions]
       color: [tp, tp]
     - data: [Campaign 3, Shop and Press Campaign]
       color: [tp, tp]

table-style-col-head:
   style: [col-head,twin-blue]
   name: Style Column Heading
   desc: Ideal for Feature Comparison
   head: [Campaign 1, Campaign 2, Campaign 3]
   rows:
     - data: [Spring, Summer, Fall]
       color: [ln, gn, dn]
       
table-style-no-head:
   style: [no-head,twin-blue]
   name: Style No Headings
   desc: Ideal to just list things. In this example we list useful special characters.
   rows:
     - data: [←, ↑, →, ↓]
       color: [tp, tp, tp, tp]
     - data: [ ☐ , ☑  ,  ☒  ,   ☓   ]
       color: [tp, tp, tp, tp] 
     - data: [ ✔ , ✘  , —  , ✚  ]
       color: [tp, tp, tp, tp]
     - data: [ †  ,  ‡ , †3, †4]
       color: [tp, tp, tp, tp]
     - data: [ ©  ,  ® , µ, V²]
       color: [tp, tp, tp, tp]
---


# Advanced Table Formatting

## Key Features

- Keep all data in one place
   - Name
   - Description
   - Table Data
   - Footer
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

## Example of a Comparison Table

{% include table id="table-vicase-vs-macpro" %}


## User Story
As a **Reader of your Comparison Review** I very appreciate the intuitive coloring of cell backgrounds: red = bad, yellow = so so , green = good. This speeds up my table reading significantly! And I can see pattern that otherwise I would have overlooked. These pattern proved most helpful in my decision making process.

## More Complex Example

{% include table id="table-comparison-all" %}

## How it works

### Step 1: Define Table in Front Matter

```yml
---
layout: page
title: Advanced Article Formatting
subtitle: Geek's Guide on Formatting Articles on V² 
abstract: Your toolbox to make your articles easier to read and write.
issueNo: 204
readiness:
   - is-active
table-vicase-vs-macpro: # Table ID. Needed for Include in the Article
   style: [table-detail,detail-blue] # Lukas: need to change to: [twin-head,table-blue]
   caption: >
      # ViPC 1090 vs Mac Pro
      Battle of the GPU Goliath' of Workstations
   head: [Features, ViCase-970T, Mac Pro]
   rows:
     - data: [OS, Win 10 Pro, Win 10 Pro]
       color: [tp, gn, gn]
     - data: [CPU, i7-6700 (Gen 6), 3.7 GHz Quad (Gen 5) (*1)]
       color: [tp, gn, rd]
     - data: [AiO Conversion,✓,―]
       color: [tp, gn, rd]
   footer: (*1) Using an old CPU socket limits upgrading in the future
```


### Step 2: Insert Table with Liquid Include

```liquid
{% raw %}{% include table id="table-vicase-vs-macpro" %}{% endraw %}
```

## Reference of all Background Colors

{% include table id="table-shaded-colors" %}

<br>

{% include table id="table-solid-colors" %}


## Reference for all Table Styles

{% include table id="table-style-twin-head" %}

<br>

{% include table id="table-style-row-head" %}

<br>

{% include table id="table-style-col-head" %}

<br>

{% include table id="table-style-no-head" %}



---
layout: page
title: Advanced Article Formatting
subtitle: Geek's Guide on Formatting Articles on V² 
abstract: Your toolbox to make your articles easier to read and write even if they have complex content. Examples on powerful formatting that assists the reader in quickly ingest complex information. We also show how to keep your kramdown code legible for yourself.
issueNo: 204
readiness:
   - is-active
table-vicase-vs-macpro:
   name: ViCase 970-T vs Mac Pro
   style: [table-detail,detail-blue] # Lukas: need to change to: [twin-head,table-blue]
   caption: >
      # ViCase vs Mac Pro
      Battle of the GPU Goliath' of Workstations
   head: [Features, ViCase-970T, Mac Pro]
   rows:
     - data: [OS, Win 10 Pro, Win 10 Pro]
       color: [tp, gn, gn]
     - data: [CPU, i7-6700 (Gen 6), 3.7 GHz Quad (Gen 5) (*1)]
       color: [tp, gn, rd]
     - data: [AiO Conversion, Yes, No]
       color: [tp, gn, rd]
   footer: (*1) Using an old CPU socket limits upgrading in the future

table-comparison-all: 
  style: [table-detail,detail-blue]
  head: [Features,ViPC Pro Workstation,Apple Mac Pro,HP Z240,HP G3,Dell Precision Tower]
  rows: 
    - data: [Price, 100%,218%,132%,136%,126%]
      color: [tp,gn,rd,yw,yw,yw]
    - data: [Similar Performance,'Yes','Yes','Yes','Yes','Yes']
      color: [tp,gn,gn,gn,gn,gn]
    - data: [All In One Conversion,'Yes','No','No','Yes','No']
      color: [tp,gn,rd,rd,gn,rd]
    - data: [3 Chamber Airflow or better,'Yes','Yes','No','No','No']
      color: [tp,gn,gn,rd,rd,rd]
    - data: [Portable,'Yes','Yes','No','No','No']
      color: [tp,gn,gn,rd,rd,rd]
    - data: [Surge Protection,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Clean Desk Cabling,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Intel Generation,6,5,6,6,6]
      color: [tp,gn,yw,gn,gn,gn]
    - data: [Open Configuration,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
    - data: [DIY Option,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
    - data: [I Fixit Option,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Flat Fee Assembly Service,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
    - data: [Flat Fee Repair Service,'Yes','No','No','No','No']
      color: [tp,gn,rd,rd,rd,rd]
---


# Advanced Table Formatting

## Example of a Comparison Table

{% include table id="table-vicase-vs-macpro" %}


## User Story
As a **Reader of your Comparison Review** I very appreciate the intuitive coloring of cell backgrounds: red = bad, yellow = so so , green = good. This speeds up my table reading significantly! And I can see pattern that otherwise I would have overlooked. These pattern proved most helpful in my decision making process.

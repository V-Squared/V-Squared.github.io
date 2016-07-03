---
layout: page
title: NC Codes
subtitle: Reference of G-Codes and M-Codes used in V²Flow.CAM
abstract: List of G and M Codes that we use in NC files. Basic reference information and links to more detailed articles. By limiting the number of codes is an attempt to reduce effort in testing.
issueNo: 203
readiness:
   - is-active
table: 
  head: [G-code,Explanation]
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
    - data: ['G21','Enforce use of millimeter units.<br><b>Format:</b>G21<br><b>Example:</b> G21']
    - data: ['','Cancel cutter compensation previously activated by G41 or G42.<br><b>Format:</b> G40<br><b>Example:</b> G40']
      img: ['/plan/flow/mechanical/nc-codes/g40.png','']
    - data: ['G64','Normal stop mode (cancels G61)<br><b>Format:</b> G64<br><b>Example:</b> G64']
    - data: ['G80','Cancels any canned cycle. Please note that G00 – G03 also cancels canned cycles.<br><b>Format:</b> G80<b>Example:</b> G80']
    - data: ['','Basic drilling canned cycle. R is starting plane and Z is total depth. Please note that at the end of the cycle, the return position in Z is controlled by G98 and G99.<br><b>Format:</b> G81 [X#][Y#][Z#][R#]<br><b>Example:</b> G81 Z-6 R2']
      img: ['/plan/flow/mechanical/nc-codes/g81.png','']
    - data: ['G90','Absolute programming mode. Distances given will move the tool relative to an absolute zero.<br><b>Format:</b> G90<br><b>Example:</b> G90 G00 X10 Y10']
    - data: ['G91','Incremental programming mode. Distances given will move the tool relative to the current position of the tool.<br><b>Format:</b> G91<br><b>Example:</b> G91 G00 Z5']
    - data: ['','Initial level return at the end of a canned cycle.<br><b>Format:</b> G98<br><b>Example:</b> G81 G98  Z-7 R2']
      img: ['/plan/flow/mechanical/nc-codes/g98.png','']
    
---

{% include table %}

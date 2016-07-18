---
layout: page
title: Adding Articles
subtitle: How to add one article or an article group to V² Site.
abstract: >
  *V² Site* offers a lot of *Automation* for Articles. Such as Navigation Menus, Readiness Ratings and the integration into V²Flow. To benefit from the Automation the article need to be set up correctly. This illustrated tutorial shows how to. No special knowledge to V² Site is required. You must have a GitHub account and at least be able to navigate the web interface of GitHub. If you are not member of the core team (if you have no write privileges to this repository* you still can add articles by **First:** Create a *Fork*, **Second:** Follow these instructions, **Third:** create a *Pull Request*.
issueNo: 185
contents:
  - name: Where to Add Article
    url: where-to-add
  - name: Creating Menu Entry
    url: creating-menu-entry
    subitems:
      - name: Get ready book-bar.yaml
        url: edit-article-yml
      - name: Find where to edit
        url: where-to-edit
      - name: Duplicate Entry
        url: duplicate-entry
      - name: Edit Entry
        url: edit-entry
      - name: Commit your Change
        url: commit-your-change
  - name: Create the Article-Issue
    url: create-article-issue
    subitems: 
      - name: Create new Issue
        url: create-new-issue
      - name: Add Content to Issue
        url: content-article-issue
      - name: Issue Task Template
        url: issue-task-template
      - name: Note Issue Number
        url: note-issue-no
  - name: Create Article File
    url: create-article-file
    subitems:
      - name: Create File
        url: create-file
      - name: Add Content
        url: add-content
      - name: YML Template
        url: yml-template
  - name: Check the Added Article
    url: check-article
  - name: Add Issue Number in Article
    url: add-issue-no
    subitems:
      - name: Hovering V²-Flow-Button
        url: hovering-v2-flow-button
      - name: Clicking V²-Flow-Button
        url: clicking-v2-flow-button
      - name: Linking the Issue
        url: linking-the-issue
  - name: Tip for Article Group
    url: create-article-group
readiness:
  - is-complete
  - is-complete
  - is-complete
  - is-complete
---


# Where to Add the Article {#where-to-add}

![](/plan/flow/publishing/adding-articles/where-to-add.png)

Go to the place where you want to add the article, then identify:

1. What is the *Baord*: Plan
2. What is the *Book*: Flow
3. What is the *Article Group*: Writing Articles
4. Where you want to place the new *Article*: Under "Style Guide"
5. What is the new Article's name: Adding Articles
6. Create *Path*: V² > Plan > Flow > Writing Articles > Adding Articles


# Creating Menu Entry {#creating-menu-entry}

## Get ready to edit book-bar.yaml {#edit-article-yml}

![](/plan/flow/publishing/adding-articles/book-bar-yml.png)

1. Go to [V² > V-Squared.github.io > _data](https://github.com/V-Squared/V-Squared.github.io/tree/master/_data)
   - Note: Make sure it is in the Master Branch
2. Pick the *Board* in which you want to add the *Article*
   - Note: In this example we choose *Plan*
3. Open "book-bar.yml"
4. Click the *Edit* Button
5. Add the Article into the tree structure of this yml document
   - Note: The syntax should be obvious to you after reading this file. If not, please read -> [Wikipedia > YAML](https://en.wikipedia.org/wiki/YAML)
6. Example code change



## Find where to edit {#where-to-edit}

![](/plan/flow/publishing/adding-articles/where-to-edit.png)

1. Remember *Path*: V² > Plan > Flow > Writing Articles > Adding Articles
2. Remember where to place: Under "Style Guide"
3. Find the place to add the Article



## Add Article to book-bar.yaml {#add-to-book-bar}

### Duplicate Entry {#duplicate-entry}

![](/plan/flow/publishing/adding-articles/duplicate-entry.png)

Duplicate an entry of same type as we need.


### Edit Entry {#edit-entry}

![](/plan/flow/publishing/adding-articles/edit-entry.png)

Edit the duplicate to match the article we want to create.


### Commit your Change {#commit-your-change}

![](/plan/flow/publishing/adding-articles/commit-book-bar.png)

1. Enter Commit Message
2. Press Button *Commit Changes*



# Create the Article-Issue {#create-article-issue}

## Create new Issue {#create-new-issue}

![](/plan/flow/publishing/adding-articles/new-issue.png)

1. Go to Issues of [V-Squared/V-Squared.github.io](https://github.com/V-Squared/V-Squared.github.io/issues)
2. Click button: "New issue"


## Add Content to Article Issue {#content-article-issue}

![](/plan/flow/publishing/adding-articles/add-content-issue.png)


1. Paste the *Path* into the *Title* field
2. Paste *Issue Task Template* into the *Leave a comment* field
3. Update Article-Path and Article URL in Reference section of *Issue Task Template*
   - *Note:* You will use this link when you want to open the matching article to this issue.
4. Add: Labels, Milestones, Assignees
   - Note: Labels that start with "m." are mandatory, instead "o." is optional.
5. Tick completed tasks
6. Press: *Submit new issue"


### Issue Task Template {#issue-task-template}

```markdown
# Generic Tasks

- [x] Create Issue
- [ ] Add Link to Article in Reference of this Issue
- [ ] Classify Labels, Milestone & Assignee
- [ ] Create Article
- [ ] Create Title / Subtitle / Abstract
- [ ] Enter Issue No in Article
- [ ] Write Article
- [ ] Add cross references
- [ ] Trigger review
- [ ] Include review feedback


# Reference
- [Article > Path > ???](Article/URL/???/)
```


## Note Issue Number {#note-issue-no}


![](/plan/flow/publishing/adding-articles/note-issue-number.png)

In this case the *Issue Number* is 185. You need it later to link the *Issue* to the *Article*.



# Create Article File {#create-article-file}

## Create File {#create-file}

![](/plan/flow/publishing/adding-articles/new-file.png)

1. Remember *Path*: V² > Plan > Flow > Writing Articles > Adding Articles
2. Go to corresponding folder in <>Code: [V-Squared.github.io/plan/flow/writing/](https://github.com/V-Squared/V-Squared.github.io/tree/master/plan/flow/writing)
3. Click "Create new File* button

## Add Content {#add-content}

![](/plan/flow/publishing/adding-articles/add-content.png)


1. Enter file name: "adding-articles.md"
   - **Note:** If this does not match your entry in book-bar.yml you will get a 404 Error when browsing to this page in the *Article-Bar*.
   - **Note:** Remember to add the extension ".md". This indicates that the file content is of *Markdown* type.
2. Copy Paste the YML Template (see below)
3. Fill out the YML Template
   - **Note 1:** You can use markdown formatting in subtitle and abstract if you use the *greater sign:* ">" in combination with new line and tab indent. See the screen snapshot.
   - **Note 2:** Except for the above you are not allowed to use new line within values.
4. Enter Commit Message
5. Press Button: "Commit new file"


### YML Template {#yml-template}

```yml
---
layout: page
title: 
subtitle: 
abstract: 
issueNo: 
readiness:
   - is-active
---
```


# Check the Added Article {#check-article}

![](/plan/flow/publishing/adding-articles/check-article.png)

1. Reload the Article Page
2. The added article should show up in Article Navigation Bar
3. Click the newly addded article. It should load properly


# Add Issue Number in Article {#add-issue-no}

If the Issue is not yet linked to the Article yet, you can link it like so:

## Hovering V²-Flow-Button {#hovering-v2-flow-button}

![](/plan/flow/publishing/adding-articles/hover-v2-flow-button.png)

Hovering shows you the Tooltip to the V²-Flow-Button with link to its help.


## Clicking V²-Flow-Button {#clicking-v2-flow-button}

![](/plan/flow/publishing/adding-articles/click-v2-flow-button.png)

1. On click the Floating Action Menu of the V²-Flow-Button is shown. Select: "Edit Article".
2. Click the "Edit Article" Button
3. The GitHub text editor opens in a new tab with the mathching markdown file to the article.


## Linking the Issue {#linking-the-issue}

![](/plan/flow/publishing/adding-articles/add-issueNo.png)

1. Enter the Issue Number to the property: "issueNo:**
   *Note 1:* See above on how to find the value of the issue number 
   *Note 2:* Make sure to have a space between the colon and the number


# Tip: Create Article Group {#create-article-group}

## Step 1: Create the Menu Entries

```markdown
- menu: Flow
  url: /flow/
  desc: >
    Workflows on contributing to V² in ready to use quality.
  subitems:
    - menu: Writing Articles
      group: 
        - menu: Intro Writing Articles
          url: /flow/writing/intro/
        - menu: How-To Task-Templates
          url: /flow/writing/how-to/
        - menu: Style Guide
          url: / flow/writing/style-guide/
```

## Step 2: Create Issues & Note Issue Number

```markdown
- menu: Flow
  url: /flow/
  desc: >
    Workflows on contributing to V² in ready to use quality.
  subitems:
    - menu: Writing Articles
      group: 
        - menu: Intro Writing Articles   #176
          url: /flow/writing/intro/
        - menu: How-To Task-Templates #177
          url: /flow/writing/how-to/
        - menu: Style Guide #178
          url: / flow/writing/style-guide/
```

## Step 3: Create Article

The trick is that now you already have the Issue Numbers and can enter them into the yml file. This saves you the step to later link the Article to the Issue.

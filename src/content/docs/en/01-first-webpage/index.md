---
title: Level 1 · Your First Webpage
level: 1
duration: 15 minutes
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, webpage]
---

# Level 1 · Your First Webpage

> Spend 15 minutes making a personal homepage and opening it in a browser.
> Keep the first version simple. It only needs your introduction and contact details.

---

## A common situation

A Lin studies media. She had never made a webpage and was not sure how a webpage differed from a website.

When her club needed a recruitment page, she expected to find someone who could code or spend hours adjusting a template.

Instead, she wrote down the club name, activities, signup method, and colors she liked. AI produced a page she could open in about 20 minutes. After she posted the link in the group chat, 12 people signed up.

She did not write the HTML from scratch, but she still decided what belonged on the page, what visitors should see first, and how it should look.

## What you'll build

A personal homepage with a title, an introduction, a photo or avatar, and your contact information.

Someone opening the page should quickly understand who you are and how to contact you.

## Let's build (15 minutes)

### Step 1: Open Google AI Studio (2 minutes)

Same tool as last level, open it in your browser:

👉 **https://aistudio.google.com**

After signing in, find **"Create Prompt"** in the left menu and enter a new creation workspace.

> 💡 If you're using the Gemini 2.5 Flash model, it can generate webpage code directly. No software to install.

### Step 2: Tell it what you want (3 minutes)

Type this prompt, replacing【】with your info:

```
Make me a personal homepage webpage, just one file called index.html.
Requirements:
1. At the top: my name【Chen Xiaoman】and a short introduction
2. In the middle: an "About Me" section about my interests【photography, hiking, making coffee】
3. Below: my contact info【email chenxiaoman@example.com】
4. Style: clean, modern, slightly warm color palette
5. All text in English
6. Output the complete HTML code
```

> Keep "**Output the complete HTML code**" as the final line. It asks AI for a complete file you can save and test, rather than an explanation of how to make one.

### Step 3: Get the code (3 minutes)

AI will output a long block of code starting with `<html>` and ending with `</html>`.

You do not need to understand every line yet. Check that AI returned the complete code block, then copy all of it.

Find the **"Copy"** button at the top right of the code block and copy the whole thing.

### Step 4: Turn it into a webpage (5 minutes)

Use either method below to preview the code:

**Method A (recommended for beginners): online preview**
1. Open https://htmlpreview.github.io/ or https://codepen.io/pen/
2. Paste the code
3. See your webpage instantly!

**Method B: open it on your own computer**
1. Open Notepad (Windows) or TextEdit (Mac)
2. Paste the code → Save
3. Name the file **`index.html`** (note: .html, not .txt)
4. Double-click the file to open it in your browser

When the page opens, check your name, introduction, and contact information first.

### Step 5: Make it prettier (2 minutes)

Go back to AI Studio and send:

```
The colors are a bit plain. Change the main color to【dark green】,
make the title bigger, and use a【centered】layout.
Output the complete HTML code again.
```

After the revision, copy → preview → compare the two versions.

If AI fixed only part of the problem, point to the exact part that still needs work. For example: "The title is fine now, but make the background darker."

> Remember the three moves from last level: **say clearly → see result → ask for changes.**

## Your creation

Your result is an `index.html` file that opens in a browser.

Send the file to a friend or share the preview link from Method A. Ask them to check the text and contact details.

## Share your creation

Screenshot your webpage and post it to the community:

> "My first webpage opens in a browser! And I didn't write a single line of code 🤯"

If someone asks how you made it, share the prompt as well as the screenshot. That gives them something they can try.

When you're done, move on to the next level: build a tool that's actually useful.

## What you learned

- A simple webpage can live in one `index.html` file and open with a double-click
- AI can generate the first draft; you check the content, preview the result, and request changes
- You can begin without understanding every line of code, but you must test the page after each revision

---

*Next: [Level 2 · Your First Tool](../02-first-tool/)*

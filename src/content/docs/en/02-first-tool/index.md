---
title: Level 2 · Your First Tool
level: 2
duration: 30 minutes
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, tool]
---

# Level 2 · Your First Tool

> Spend 30 minutes building a small tool for one task you repeatedly face.
> This level adds one important step: define the input, the processing, and the output.

---

## A common situation

A Ze is a graduate student in Chinese literature. His weekly reading journal is hardest at the beginning, when the page is still blank.

He made a "reading journal generator". It takes a book title, the author's name, and three keywords from his notes, then produces a draft. A Ze checks it against the book and adds his own interpretation instead of starting from a blank page.

After watching him use it, his roommate asked: "Can I borrow this thing?"

A Ze said: "I made it."

The difference from an ordinary chat is small but useful: the same input rules can run again, and someone else can use them too.

## What you'll build

Build a tool for one problem you know well. Keep the interaction simple:

- Open the page
- Enter a few pieces of info
- Click a button
- Get a result

For example:
- 📝 **Reading journal generator**: enter book + keywords → get a draft
- 🍽️ **Dinner decider**: enter budget + people → get a weekly menu
- 💰 **Pocket money tracker**: enter income/expenses → auto-calculate balance
- 🎁 **Gift recommender**: enter what the person is like → get gift ideas

Choose something you would use yourself. Familiar problems make it easier to judge whether the result is any good.

## Let's build (30 minutes)

### Step 1: Figure out what you'll build (3 minutes)

Ask yourself three questions, write them down:

1. **What repetitive small annoyance do I have?** (e.g., never knowing what to eat each week)
2. **What's the input?** (e.g., budget, number of people, dietary restrictions)
3. **What do I want as output?** (e.g., a weekly menu)

> Write down who will use it, what they enter, and what they should receive. Those answers determine most of the tool before any code exists.

### Step 2: Tell AI your idea (5 minutes)

Go back to Google AI Studio (https://aistudio.google.com), start a new conversation, and enter:

```
Make me a【dinner decider】webpage tool, just one index.html file.
Features:
1. Title at the top: "What should we eat today?"
2. User inputs: budget (in dollars), number of people, dietary restrictions (optional)
3. Clicking the "Decide for me" button randomly generates dinner suggestions for 7 days
4. Each suggestion includes: dish name, approximate cost, a simple description of how to make it
5. Style: cute, warm colors, big buttons
6. All text in English
7. Output the complete HTML code
```

Replace【dinner decider】with your own tool and the feature list with the input/output you defined in Step 1.

> **Key trick:** Keep "**Output the complete HTML code**" at the end so AI returns a file you can save and test.

### Step 3: Have AI build it (10 minutes)

AI will output the complete code. Copy it, then open it with last level's method:

- Online preview: https://htmlpreview.github.io/ or https://codepen.io/pen/
- Or save as `index.html` and double-click

**Test it:**
- Enter budget $100, 3 people, restriction "no spicy" → click the button
- Check if the menu it generates is correct

**Found a problem? Go back to AI Studio:**

```
The menu has spicy dishes but I said no spicy. Remove all spicy dishes and output the complete code again.
```

### Step 4: Make it nicer to use (5 minutes)

Notice anything awkward when you use it, then direct AI to fix it:

```
After clicking the button, scroll the results area to the bottom so I can see the result right away. Output the complete code again.
```

Or:

```
Add a "Shuffle" button that regenerates without refreshing the page. Output the complete code again.
```

After each change: copy the new code → refresh preview → test.

### Step 5: Share it (7 minutes)

Once the tool works on your computer, let someone else try it in one of these ways:

**Simplest way:** send the `index.html` file to a friend. They can double-click it to open the tool.

**Easier to share:** deploy it online and get a link that opens directly.

To deploy (recommended):
- **Vercel** (free): vercel.com → sign up with GitHub or email → New Project → upload your index.html → Deploy → get a URL
- Or **Netlify Drop** (even simpler): https://app.netlify.com/drop → drag your `index.html` in → get a URL

> If deployment gets stuck, send the file first. The current goal is to watch 3 friends use it, not to spend all your time publishing it.

## Your creation

Your result is a tool that completes the flow "input → click button → get result".

Find a friend to try it. Watch where they get stuck, then tell AI to fix it.

## Share your creation

Screenshot your tool + your friend's reaction, post to the community:

> "I made a【dinner decider】. It gives me a weekly menu when I can't decide what to eat. Who wants the link?"

Watch for pauses and mistakes while your friend uses the tool. They usually show what the next revision should address first.

When you're done, move on: build your first AI bot.

## What you learned

- A small tool needs three clear parts: **input + processing + output**
- AI can generate code; you define the function, check the result, and decide what to fix first
- Observe real use before adding more features

---

*Next: [Level 3 · Your First AI Bot](../03-first-bot/)*

---

> 🎉 **The three warm-up levels end here. You should now have three files or conversations you can open and show.**
> Continue to the next level, or bring your work to an offline **BuilderX Builder Day** and revise it with other participants.
> 👉 Follow community announcements / Discord for event info

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

> 30 minutes to build a tool that solves a **real small annoyance** in your life.
> The first two levels were "playing". This one is "using". Finish it and you're a real Builder.

---

## A story first

A Ze is a grad student in Chinese literature. His weekly dread: the "reading journal" he has to submit, and he can never get started.

He had AI build a "reading journal generator": type in the book title, author, and three keywords he noticed — AI produces a complete draft journal entry he can polish and submit.

His roommate was stunned: "Can I borrow this thing?"

A Ze said: "I made it."

**From this level on, you're not just "using AI" — you're "building tools for others to use."**

## What you'll build

A tool that solves **your own real problem**. When it's done, it looks like this:

- Open the page
- Enter a few pieces of info
- Click a button
- Get a result

For example:
- 📝 **Reading journal generator**: enter book + keywords → get a draft
- 🍽️ **Dinner decider**: enter budget + people → get a weekly menu
- 💰 **Pocket money tracker**: enter income/expenses → auto-calculate balance
- 🎁 **Gift recommender**: enter what the person is like → get gift ideas

**Pick one you actually need.** Don't pick something "cool-sounding but useless to you".

## Let's build (30 minutes)

### Step 1: Figure out what you'll build (3 minutes)

Ask yourself three questions, write them down:

1. **What repetitive small annoyance do I have?** (e.g., never knowing what to eat each week)
2. **What's the input?** (e.g., budget, number of people, dietary restrictions)
3. **What do I want as output?** (e.g., a weekly menu)

> This is the first step of being a product manager — not writing code, but **knowing clearly "what problem, for whom".**

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

> **Key trick:** Always end with "**Output the complete HTML code**" so AI gives you the full working code.

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

Now you have something real. Let others use it:

**Simplest way:** send the `index.html` file to a friend — they double-click and it works.

**Better way:** deploy it online (free) and get a link anyone can open.

To deploy (recommended):
- **Vercel** (free): vercel.com → sign up with GitHub or email → New Project → upload your index.html → Deploy → get a URL
- Or **Netlify Drop** (even simpler): https://app.netlify.com/drop → drag your `index.html` in → get a URL

> If deployment gets stuck, don't obsess — **getting 3 friends to use it matters more than deploying it.**

## Your creation

A tool that does "input → click button → get result".

Find a friend to try it. Watch where they get stuck, then tell AI to fix it.

## Share your creation

Screenshot your tool + your friend's reaction, post to the community:

> "I made a【dinner decider】— no more agonizing over what to eat! Who wants the link?"

**Getting others to use your tool is the moment you cross from "learning to play" to "being a real Builder."**

When you're done, move on: build your first AI bot.

## What you learned

- **A tool = input + processing + output.** Figure out those three and you can "build" anything
- You don't build from scratch — **AI writes the code, you're the product manager**
- Real users matter more than anything

---

*Next: [Level 3 · Your First AI Bot](../03-first-bot/)*

---

> 🎉 **Congratulations! You've completed the first three levels and hold three real creations.**
> You can keep going — or join our offline **BuilderX Builder Day** and build your idea bigger with a group of people like you.
> 👉 Follow community announcements / Discord for event info

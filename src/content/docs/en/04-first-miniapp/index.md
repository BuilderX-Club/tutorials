---
title: Level 4 · Your First Mini App (Mobile App)
level: 4
duration: Half a day
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, mini-app, mobile]
---

# Level 4 · Your First Mini App (Mobile App)

> Spend half a day adapting a webpage for use on a phone.
> When it works, people can open it from a link or add it to their home screen.

---

## A common situation

Xiao Yu is a kindergarten teacher. Along with looking after the children, she answers the same questions from parents each day:

"What did my child eat today?" "Did they nap?" "Did they cry today?"

With 30 children in the class, the same information gets repeated many times. She still replies to individual messages after work.

She used AI to make a "daily class report" mini app. Each day she spends 2 minutes selecting the lunch and nap details and adding one note. The page arranges the information into an illustrated report for the parent group.

Parents liked being able to see how the children spent the day. A task Xiao Yu once found burdensome now fits into those 2 minutes. She still checks each report before sending it.

In this tutorial, a "mini app" is a webpage adjusted for a phone screen and touch controls.

## What you'll build

Build a page that works well on a phone. Its buttons should be easy to tap, and users should be able to add it to their home screen.

Use it for one small task that comes up every day.

## Let's build (half a day, or two shorter sessions)

### Step 1: Find an "every day" annoyance (30 minutes)

Ask yourself:

- What do I repeat every day? (forms, records, reports, reminders…)
- What do people ask me every day? (what they ate, what time, how much…)

Examples:
- 👶 **Class daily report**: teacher records food/sleep → generates a report for parents
- 🏠 **Family shopping list**: anyone adds what's missing → shop from the list
- 💊 **Medication reminder**: record which meds the elderly person took today
- 📒 **Daily reflection**: 3 questions before bed → generates today's summary

Pick a situation you will encounter tomorrow. That gives you a chance to test the page immediately.

### Step 2: Have AI generate the mini app (30 minutes)

Open Google AI Studio (https://aistudio.google.com), start a new conversation, and enter:

```
Make me a mobile mini app, just one index.html file.

Features (class daily report):
1. Title at the top: "Class Daily Report", subtitle "Today, how the kids spent their day"
2. Three recording sections:
   - Lunch (multi-select buttons): rice / noodles / dumplings / vegetables / chicken / fish
   - Nap (single-select buttons): napped 1 hour / napped 30 min / didn't nap
   - Highlight of the day (text input): e.g. "Lele helped pick up a friend's toy today"
3. A big "Generate Report" button at the bottom; clicking it generates a message for parents
4. Below the result, a "Copy" button — one tap to copy
5. Designed like a mobile app: vertical layout, big buttons, easy to tap
6. Support "Add to Home Screen" (PWA): has an app icon and title
7. Style: cute, bright, rounded corners
8. All text in English, output the complete HTML code
```

> Replace【class daily report】and the features with your own needs from Step 1.

### Step 3: Test on your computer (30 minutes)

1. Copy the code → preview at https://htmlpreview.github.io/ (or save `index.html` and double-click)
2. Tap a few buttons and check whether the generated report looks right
3. **Key test: shrink your browser window to phone width.** Check whether the buttons are still easy to tap and the text is large enough
4. Not happy? Go back and direct AI:

```
The buttons are too small on a phone. Increase the spacing and font size. Output the complete code again.
```

### Step 4: Deploy to your phone (1 hour)

1. Deploy with free hosting: https://app.netlify.com/drop → drag `index.html` in → get a URL
2. **Open the URL on your phone**
3. In your phone browser's menu, choose **"Add to Home Screen"**
4. An icon appears on your phone's home screen; tap it to open the page

> The page now opens from your home screen and still works through its link. Test it once on your own phone before sending it to anyone else.

### Step 5: Get 3 people using it (1 hour)

Ask one likely user, such as a parent, roommate, or colleague, to try it:

1. Show them how to open the link
2. Watch them use it; note every hesitation or missed tap
3. Fix it, redeploy, send them the new link

> The first version can be simple, but the full task should work. Fix the places where users get stuck before adding features.

## Your creation

Your result is a mini app that opens from a phone's home screen. Continued use will tell you whether it belongs in someone's daily routine.

## Share your creation

Record a short video of it on your phone (or take screenshots) and post to the community:

> "I made a mobile mini app that fixes my daily【form/reply】headache 📱"

## What you learned

- This level's "mini app" is a webpage adapted for phones and added to the home screen
- Make one frequent task easy before adding more features
- A desktop preview cannot replace a phone test; check button size, text size, and spacing on a real device

---

*Next: [Level 5 · Your First Automation](../05-first-automation/)*

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

> Half a day to build a "mini app" that feels like a real app on your phone.
> No App Store, no review process — build it, share a link, done.

---

## A story first

Xiao Yu is a kindergarten teacher. Her daily exhaustion isn't the kids — it's **answering parents' questions**:

"What did my child eat today?" "Did they nap?" "Did they cry today?"

30 parents, 30 repeats. Every evening she replied one by one in the group chat.

She had AI build a "daily class report" mini app: she spends 2 minutes a day tapping a few buttons, and it auto-generates a nice daily report she can copy and send to the parents' group in one tap.

Parents said: "This is great! We can see how our kids are doing every day."

She said: "Before this was a burden. Now it's the most rewarding two minutes of my day."

**A "mini app" isn't mysterious — it's a webpage that's convenient to open and pleasant to use on a phone.**

## What you'll build

A **mobile-friendly mini app**: opens like an app, big enough buttons, operated by tapping, and it can be **added to your home screen**.

It solves a small annoyance in your life that **happens every day**.

## Let's build (half a day — split across two days if you like)

### Step 1: Find an "every day" annoyance (30 minutes)

Ask yourself:

- What do I repeat every day? (forms, records, reports, reminders…)
- What do people ask me every day? (what they ate, what time, how much…)

Examples:
- 👶 **Class daily report**: teacher records food/sleep → generates a report for parents
- 🏠 **Family shopping list**: anyone adds what's missing → shop from the list
- 💊 **Medication reminder**: record which meds the elderly person took today
- 📒 **Daily reflection**: 3 questions before bed → generates today's summary

**Pick one you'll actually use tomorrow.** A tool nobody uses isn't worth building, no matter how pretty.

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
2. Tap a few buttons — does the generated report look right?
3. **Key test: shrink your browser window to phone width** — are the buttons still easy to tap? Is the text big enough?
4. Not happy? Go back and direct AI:

```
The buttons are too small on a phone. Increase the spacing and font size. Output the complete code again.
```

### Step 4: Deploy to your phone (1 hour)

1. Deploy with free hosting: https://app.netlify.com/drop → drag `index.html` in → get a URL
2. **Open the URL on your phone**
3. In your phone browser's menu, choose **"Add to Home Screen"**
4. An icon appears on your phone's home screen — tap it, and it opens like an app

> Congratulations — you now have an app that works without being on any app store. No review, no fees, and anyone in the world with the link can use it.

### Step 5: Get 3 people using it (1 hour)

Bring in the person you most want to serve (a parent, a roommate, a colleague):

1. Show them how to open the link
2. Watch them use it — **wherever they hesitate or mis-tap is what you fix**
3. Fix it, redeploy, send them the new link

> Remember: a rough first version is fine. **People actually using it matters more than anything.**

## Your creation

A mini app that fits "in your phone" — something your family, friends, or customers open every day.

## Share your creation

Record a short video of it on your phone (or take screenshots) and post to the community:

> "I made a mobile mini app that fixes my daily【form/reply】headache 📱"

## What you learned

- **A mini app = a webpage that's good on phones** — no app store, no review, free
- The standard for a good product isn't "lots of features" — it's **"people use it every day"**
- Mobile experience (big buttons, big text, easy tapping) is completely different from desktop — **always test on a real phone**

---

*Next: Level 5 · Your First Automation (half a day)*

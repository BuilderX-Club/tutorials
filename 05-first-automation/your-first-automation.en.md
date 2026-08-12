---
title: Level 5 · Your First Automation
level: 5
duration: Half a day
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, automation]
---

# Level 5 · Your First Automation

> Half a day to let AI **work for you** — without you watching, it runs by itself.
> The earlier levels were "you direct it". This one is "it works on its own". Finish it and you're a Builder.

---

## A story first

Lao Zhou is in charge of compiling weekly reports from every department. Every Friday afternoon, he collects reports from 6 departments, tidies them up, merges them into one master report, and emails it to leadership.

That one task ate an entire afternoon, every week.

He had AI build a "pipeline": every Friday at 5 PM, it automatically grabs all the weekly reports, summarizes the key points, generates a clean master report, and emails it to leadership.

The first time it ran end to end, he said: "They gave me my afternoon back."

**Automation = turning "the repetitive thing you do every week" into "a machine that runs by itself."**

## What you'll build

An **automation pipeline** — you set it up once, and it does the job every time after.

Goal: eliminate one **weekly, highly repetitive** task from your life or work.

## Let's build (half a day)

### Step 1: Find the "every week" task (30 minutes)

Think: **what do you do every week, sighing internally while you do it?**

- 📊 Compiling weekly reports/data (collect → organize → report)
- 📅 Managing your schedule (turning emails/group messages into calendar events)
- 💰 Bookkeeping (reconciling accounts weekly)
- 📣 Content publishing (posting your article/images to 3 platforms every week)
- 📧 Email triage (picking out important emails, archiving the rest)

**Pick the one with the highest "sigh rate".**

### Step 2: Draw your pipeline (30 minutes)

Automation is like an assembly line. Draw the three parts first:

```
【Trigger】When does it start?  →  Every Friday 5 PM
【Actions】What does it do?    →  Collect → Organize → Summarize → Send
【Output】Where does it go?    →  Leadership's inbox / my phone
```

Write it down on paper. **If you can't explain the flow clearly, AI can't either** — this level tests not technology but whether you can describe a process clearly.

### Step 3: Build the pipeline with a free tool (1 hour)

There's a free tool built exactly for this, no coding needed:

👉 **https://n8n.io** (or similar tools available in your region)
- Free community edition (self-host) or cloud free tier
- Or **Google Apps Script** (free, you have it with any Google account — great for Gmail/Sheets/Calendar)

Using "weekly summary" as an example, build it in n8n like this:

```
1. Add a Schedule Trigger: every Friday 5 PM
2. Add a Gmail node: read emails under a specific label
3. Add an AI node (connect Gemini API): summarize the emails into key points
4. Add a Sheets node: write the summary into Google Sheets
5. Add an Email node: send the summary to you / leadership
```

> Stuck? Just ask AI: paste this 5-step description into AI Studio and ask it to translate it into exactly which buttons to click in n8n and what to fill in.

### Step 4: Run it manually first, then automate (1 hour)

**Never let a machine run automatically on its first try.** Two phases:

1. **Trigger it manually once**: click the "Execute" button, check each step for errors, verify the result
2. **Only after it's clean, turn on the "schedule" switch**

If a step errors, copy the error to AI:

```
My automation fails at step 3 with this error: <paste the error here>. How do I fix it?
```

### Step 5: Run it for two weeks, then iterate (30 minutes + two weeks)

- Week 1: it runs on schedule — check the results
- Week 2: look for places where "the machine did it wrong but you didn't notice"
- Fix issues in the pipeline; if it's clean, let it keep running

> ⚠️ The time automation saves you — **don't spend it on more repetitive work.** Spend it on the things only you can do.

## Your creation

A pipeline that runs itself and does your weekly job. **It works while you sleep.**

## Share your creation

Screenshot the pipeline's run history (or show one auto-generated result) and post to the community:

> "I built an automation pipeline — every Friday it handles my【weekly report】for me ⚡"

## What you learned

- **Automation = trigger + actions + output.** Draw the flow clearly and a machine can do it for you
- Run it manually first, then automate — **never let an untested machine run on its own**
- A real Builder hands off the repetitive and keeps the creative

---

*Next: Level 6 · Your First Paid Product (a weekend)*

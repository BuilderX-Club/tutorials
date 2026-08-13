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

> Spend half a day setting up a workflow that runs on a schedule.
> Run it manually first, then enable the schedule and keep checking the results.

---

## A common situation

Lao Zhou compiles weekly reports from every department. Each Friday afternoon, he collects 6 reports, standardizes their formatting, combines them, and emails the final document to leadership.

The steps rarely change, but they take most of Friday afternoon.

He split the work into fixed actions: at 5 PM on Friday, read messages under a specific label, summarize them, write the result into one template, and send it to a specified inbox.

After the workflow ran successfully, he still checked the final report, but no longer copied each department's text by hand.

Automation works best for tasks with stable rules, repeated steps, and results that are easy to check.

## What you'll build

Build an automation pipeline that follows a schedule and a defined set of steps.

Choose one weekly task. You do not need to automate all of it; reliably removing a few repetitive steps is enough for this level.

## Let's build (half a day)

### Step 1: Find the "every week" task (30 minutes)

Think back over the week. Which task follows almost the same sequence every time?

- 📊 Compiling weekly reports/data (collect → organize → report)
- 📅 Managing your schedule (turning emails/group messages into calendar events)
- 💰 Bookkeeping (reconciling accounts weekly)
- 📣 Content publishing (posting your article/images to 3 platforms every week)
- 📧 Email triage (picking out important emails, archiving the rest)

Start with the task whose steps are most stable and whose mistakes are easiest to notice.

### Step 2: Draw your pipeline (30 minutes)

Automation is like an assembly line. Draw the three parts first:

```
【Trigger】When does it start?  →  Every Friday 5 PM
【Actions】What does it do?    →  Collect → Organize → Summarize → Send
【Output】Where does it go?    →  Leadership's inbox / my phone
```

Write the flow on paper. If the trigger, action order, or output is still unclear, settle that before opening an automation tool.

### Step 3: Build the pipeline with a free tool (1 hour)

This level uses n8n, which lets you connect the steps without writing code:

👉 **https://n8n.io** (or similar tools available in your region)
- Free community edition (self-host) or cloud free tier
- Or **Google Apps Script** (included with a Google account and useful for Gmail, Sheets, and Calendar)

Using "weekly summary" as an example, build it in n8n like this:

```
1. Add a Schedule Trigger: every Friday 5 PM
2. Add a Gmail node: read emails under a specific label
3. Add an AI node (connect Gemini API): summarize the emails into key points
4. Add a Sheets node: write the summary into Google Sheets
5. Add an Email node: send the summary to you / leadership
```

> If you do not know how to configure a node, give AI Studio these 5 steps and describe the screen you are on. Ask which node to choose and which fields to fill. Check the permissions and output yourself afterward.

### Step 4: Run it manually first, then automate (1 hour)

Do not enable the schedule on the first attempt. Test it in two stages:

1. **Trigger it manually once**: click the "Execute" button, check each step for errors, verify the result
2. **Turn on the schedule only after every step and the final result are correct**

If a step errors, copy the error to AI:

```
My automation fails at step 3 with this error: <paste the error here>. How do I fix it?
```

### Step 5: Run it for two weeks, then iterate (30 minutes + two weeks)

- Week 1: let it run on schedule, then check the results
- Week 2: look for places where "the machine did it wrong but you didn't notice"
- Fix issues in the pipeline; if it's clean, let it keep running

> ⚠️ Set aside a few minutes each week to inspect the run history. Automation repeats correct steps, but it also repeats configuration mistakes.

## Your creation

Your result is a weekly pipeline and two run records that you have inspected.

## Share your creation

Screenshot the pipeline's run history (or show one auto-generated result) and post to the community:

> "I built an automation pipeline. Every Friday it prepares my【weekly report】for me ⚡"

## What you learned

- An automation workflow consists of a trigger, a sequence of actions, and an output
- Test it manually before scheduling it, then inspect logs and results regularly
- Automate stable steps first and leave work that requires judgment to a person

---

*Next: [Level 6 · Your First Paid Product](../06-first-paid-product/)*

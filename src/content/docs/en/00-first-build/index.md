---
title: Level 0 · Your First "Creation"
level: 0
duration: 10 minutes
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, getting-started]
---

# Level 0 · Your First "Creation"

> Spend 10 minutes on two attempts: ask AI for a first draft, then ask it to revise that draft.
> By the end, you will have an AI conversation you can save and continue editing.

---

## A common situation

Xiao Zhang works in finance and spends much of her day in spreadsheets. She has no coding experience.

One day, she needed to send reimbursement reminders to 30 colleagues. A single message could not cover everyone, but writing 30 versions would take too long.

She opened an AI tool and put the headcount and common situations into one request:

> "Help me write 30 different reimbursement reminders for different situations: some people lost their receipts, some went over budget, some filed duplicates."

AI returned 30 drafts. She checked each one, then added the right name and details. The job she expected to spend a day on took her half an hour.

Xiao Zhang had assumed AI was mainly for programmers. She did not need code for this task; what mattered was explaining the audience, the differences between cases, and what each message needed to do.

You already make requests all day. You add a note to a food order, ask a colleague for a file, or ask a friend to recommend a film. In each case, useful details lead to a more useful answer.

This level applies the same habit to AI, then adds one more step: revise the request after seeing the result.

## What you'll build

Ask AI to complete one small task you can actually use, then have it rewrite the result after a second instruction.

Save the conversation. It should show the original request, the first result, and the change you asked for.

## Let's build (10 minutes)

### Step 1: Open Google AI Studio (2 minutes)

Open your browser and go to:

👉 **https://aistudio.google.com**

Sign in with a Google account (create one for free if you don't have it).

After signing in, you will see a chat interface. Choose the default **Gemini 2.5 Flash** model from the menu on the left.

> 💡 If the page is in English and you prefer another language, you can change it in settings.

### Step 2: Type your first instruction (3 minutes)

Copy this prompt and replace what's in【】with your own details:

```
You are a very creative friend. Help me write a birthday message for my【best friend】.
Make it【funny】, under 100 words, and include a memory we share.
```

Treat the response as a first draft. Read it once and check the tone, length, and details against your request.

### Step 3: Make it follow your changes (3 minutes)

Now type:

```
That's good, but make it【more formal】. Less funny, warmer in tone.
```

Compare the two versions. A small change to the tone can affect the word choice and rhythm throughout the message.

Try once more:

```
Now in English, and make it rhyme.
```

### Step 4: Build something actually useful (2 minutes)

Send this prompt, replacing【】with your real situation:

```
My family【argues every week】about【what to cook for dinner】. Help me make a plan:
list dinner options for all seven days, with a balance of meat and vegetables,
and a budget of【$80 per week】.
```

Once it gives you a weekly menu, check the budget and the mix of meals. Replace anything your household would not eat before using the plan.

## Your creation

After this level, you should have:

1. A personalized birthday message (you can actually send it)
2. A weekly dinner plan (you can actually use it)
3. One complete revision loop: ask → see result → request changes → review the new result

Capture both versions in the screenshot so you can see which instruction changed the result.

## Share your creation

Post your conversation screenshot to the community (Discord / WeChat groups) with one line:

> "My first AI creation! Turns out I already knew how to direct AI 🎉"

If you want to compare approaches, look at how other people phrased their requests. Save any wording you would like to try next time.

When you're done, move on to the next level: build a real webpage.

## What you learned (in plain words)

- AI generates from your written request, but you still need to check whether the result is usable
- Most useful conversations take a few rounds: **say what you want → review the result → point out what should change**
- This level needs no code; the work is making the task, audience, and constraints specific

---

*Next: [Level 1 · Your First Webpage](../01-first-webpage/)*

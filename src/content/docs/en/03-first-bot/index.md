---
title: Level 3 · Your First AI Bot
level: 3
duration: 1 hour
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, bot]
---

# Level 3 · Your First AI Bot

> Spend 1 hour building a webpage that answers common questions.
> You prepare the answers and fallback rules; the bot handles the first pass at repeated questions.

---

## A common situation

Da Peng sells cars. Along with meeting customers, he answers the same few questions every day:

"How much is this car?" "How does financing work?" "Is maintenance expensive?" A question may come up twenty times in one day, and messages continue into the evening.

He spent an evening collecting the most common questions and his standard answers, then used AI to turn them into a "car buying assistant" webpage and posted the link to his social feed.

The bot handles questions already covered in the material and directs anything else to a person. Da Peng still deals with unusual cases, but he no longer starts every basic answer from scratch. He jokes that he gained "an assistant that never clocks out."

The work in this level is organizing reliable answers and deciding what the bot should do when it cannot answer.

## What you'll build

A chat bot webpage. People open the link, type a question, and receive an answer based on the material you provide.

Start with a small group of friends, colleagues, or customers. Check that the bot stays within the scope you set.

## Let's build (1 hour)

### Step 1: Decide what your bot should answer (5 minutes)

Ask yourself: **what questions do you get asked the most?**

Write down 5-10 "most-asked questions" and their answers. Da Peng wrote:

- Q: How much does this car cost out the door? A: From $28,900 including tax; financing with 30% down.
- Q: How much is maintenance? A: Small service $85, major service $220, first service free.
- Q: Can I test drive? A: Yes, book one day ahead; weekends fill up fast.

> These Q&A pairs define what the bot can answer reliably. Specific answers also make it easier to spot mistakes during testing.

### Step 2: Get a free key from Google AI Studio (5 minutes)

Open:

👉 **https://aistudio.google.com/app/apikey**

Sign in with your Google account, click **"Create API key"**, and copy the string (it looks like `AIza...`).

> 🔑 Treat this string like an account key and **do not share it**. Check the page for the current free quota and usage limits.
> If it leaks, return to this page immediately, delete the old key, and create a new one.

### Step 3: Have AI generate the bot webpage (15 minutes)

Back in the AI Studio chat (https://aistudio.google.com), start a new conversation and enter:

```
Make me a chat bot webpage, just one index.html file.
Background: I'm a【car salesperson】and want a bot that answers customers' common questions automatically.

1. Title at the top: "Car Buying Assistant"
2. In the middle: a chat window where users type questions and the bot answers
3. Built-in Q&A (replace【】with your own questions and answers):
   - Q:【How much does this car cost】 A:【From $28,900 including tax, 30% down for financing】
   - Q:【How much is maintenance】 A:【Small service $85, major service $220, first service free】
   - Q:【Can I test drive】 A:【Yes, book one day ahead, weekends fill up fast】
   - For questions it can't answer, the bot politely says "I've noted that — a human will get back to you"
4. A small "Settings" button in the top right; when opened, you can paste the API Key (saved locally in the browser, never uploaded to any server)
5. The bot answers using the Gemini API (model gemini-2.5-flash)
6. Style: clean, trustworthy, blue tones
7. All text in English, output the complete HTML code
```

AI will generate a long block of code. Copy the complete block, then test the behavior with real questions.

### Step 4: Copy code, paste key, test (15 minutes)

1. Copy the complete code AI outputs
2. Open https://htmlpreview.github.io/ and paste to preview (or save as `index.html` and double-click)
3. Click "Settings" in the top right and paste your API Key
4. Test with your question: "How much is this car?" → see how it answers

**Found a problem? Go back and direct AI:**

```
The bot sounds too formal. Change the tone to【chatting like a friend】and output the complete code again.
```

### Step 5: Deploy it (20 minutes)

As in the previous level, use free hosting to give the bot a link:

- **Netlify Drop** (simplest): https://app.netlify.com/drop → drag `index.html` in → get a URL
- Or **Vercel**: vercel.com → sign up → New Project → upload files → Deploy

After deployment, open the link on your phone. Check the input field, send button, and answer area at the smaller screen size.

## Your creation

Your result is a webpage link that can hold a conversation. Send it to a friend:

> "This is a bot I made. Ask it a question and tell me where the answer goes wrong."

Write down questions the bot cannot answer or answers poorly. Use that list when you expand the source material.

## Share your creation

Screenshot your conversation with the bot and post it to the community:

> "I made a bot that saves me from repeating myself every day 🤖"

## What you learned

- A bot is only as reliable as the source material, limits, and fallback rules you give it
- Keep the API Key private; revoke and replace it immediately if it leaks
- Questions from real users reveal gaps in the material and help you choose the next revision

---

*Next: [Level 4 · Your First Mini App](../04-first-miniapp/)*

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

> 1 hour to build a bot that **answers people's questions automatically**.
> From this level on, what you build starts **working for you**.

---

## A story first

Da Peng sells cars. His biggest daily headache isn't selling — it's answering the same questions:

"How much is this car?" "How does financing work?" "Is maintenance expensive?" — the same questions twenty times a day, plus customers texting him at midnight.

He spent one evening building a "car buying assistant" bot with AI: he loaded in all the common questions and answers, made it a webpage link, and posted it to his moments feed.

After that, the bot answered most questions first, and only the rest came to him. He said: "I hired an assistant that never clocks out."

**You don't need to understand "artificial intelligence". You just need to put the answers in your head into a webpage.**

## What you'll build

A **chat bot webpage** — people open the link, type a question, and it answers automatically.

Your friends, colleagues, and customers can all use it. It answers with the content you defined.

## Let's build (1 hour)

### Step 1: Decide what your bot should answer (5 minutes)

Ask yourself: **what questions do you get asked the most?**

Write down 5-10 "most-asked questions" and their answers. Da Peng wrote:

- Q: How much does this car cost out the door? A: From $28,900 including tax; financing with 30% down.
- Q: How much is maintenance? A: Small service $85, major service $220, first service free.
- Q: Can I test drive? A: Yes, book one day ahead; weekends fill up fast.

> These "Q&A pairs" are your bot's brain. The more complete they are, the smarter it is.

### Step 2: Get a free key from Google AI Studio (5 minutes)

Open:

👉 **https://aistudio.google.com/app/apikey**

Sign in with your Google account, click **"Create API key"**, and copy the string (it looks like `AIza...`).

> 🔑 This string is a "key" — **don't share it with anyone.** It's only for you, and the free tier is plenty for personal use.
> If it ever leaks, come back to this page, delete it, and create a new one.

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

AI will generate a longer block of code — that's fine. **You only need to copy and paste.**

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

Same as last level — use free hosting to turn your bot into a link everyone can open:

- **Netlify Drop** (simplest): https://app.netlify.com/drop → drag `index.html` in → get a URL
- Or **Vercel**: vercel.com → sign up → New Project → upload files → Deploy

Once deployed, open the link on your **phone** — your bot is now "pocket-sized".

## Your creation

A talking webpage link. Send it to friends:

> "This is a bot I made — ask it anything and see."

Watch what unexpected questions they ask — **those questions are the upgrade list for your bot's next version.**

## Share your creation

Screenshot your conversation with the bot and post it to the community:

> "I made a bot that saves me from repeating myself every day 🤖"

## What you learned

- **A bot = your knowledge + AI's mouth**: you give it the answers, it speaks for you
- The API Key is a "key": use it yourself, don't share it
- Always give what you build to real people — **the questions they ask are your improvement roadmap**

---

*Next: Level 4 · Your First Mini App (half a day)*

# BuilderX Build Challenge 🚀

**✨ You do not need to finish a theory course before making something with AI.**

BuilderX Build Challenge is a sequence of eight hands-on projects. You begin with one prompt, then build a webpage, a small tool, and a bot before moving on to automation, charging for a product, and finding real users. Every level has a concrete output and steps you can follow.

> 🌐 [Open the tutorial site](https://builderx-tutorials.vercel.app) (built with Astro + Starlight; available in Chinese and English)
>
> 📖 The source lessons are Markdown files in [`src/content/docs/`](src/content/docs/).

> 🇨🇳 中文版：[README.md](README.md)

[🌐 Tutorial site](https://builderx-tutorials.vercel.app) · [🧭 Level map](#-eight-levels-eight-things-to-make) · [🚀 Start here](#-start-with-level-0) · [🤝 Contribute](#-community-and-contributions)

## 🧭 Eight levels, eight things to make

> 💡 **Who it is for:** People trying AI for the first time, or anyone who can chat with AI but has not yet finished a complete project.
>
> ⏱️ **How to use it:** Pick a level, follow the steps, and then change the result with your own content. No programming background is required.

| Level | ⏱️ Estimated time | 🎁 What you will finish with | English | 中文 |
|---|---:|---|---|---|
| 🏁 0 · Your first “creation” | 10 min | An AI conversation you have revised | [Start](src/content/docs/en/00-first-build/index.md) | [开始](src/content/docs/00-first-build/index.md) |
| 🌐 1 · Your first webpage | 15 min | A one-page site you can open and share | [Start](src/content/docs/en/01-first-webpage/index.md) | [开始](src/content/docs/01-first-webpage/index.md) |
| 🛠️ 2 · Your first tool | 30 min | A browser tool that solves one small problem | [Start](src/content/docs/en/02-first-tool/index.md) | [开始](src/content/docs/02-first-tool/index.md) |
| 🤖 3 · Your first AI bot | 1 hour | A bot that answers questions on a chosen topic | [Start](src/content/docs/en/03-first-bot/index.md) | [开始](src/content/docs/03-first-bot/index.md) |
| 📱 4 · Your first mobile app | Half a day | A web app designed for use on a phone | [Start](src/content/docs/en/04-first-miniapp/index.md) | [开始](src/content/docs/04-first-miniapp/index.md) |
| ⚡ 5 · Your first automation | Half a day | A workflow that handles one repetitive task | [Start](src/content/docs/en/05-first-automation/index.md) | [开始](src/content/docs/05-first-automation/index.md) |
| 💰 6 · Your first paid product | A weekend | A plan for pricing, payment, and delivery | [Start](src/content/docs/en/06-first-paid-product/index.md) | [开始](src/content/docs/06-first-paid-product/index.md) |
| 🌱 7 · Your first 100 users | One month | An action plan for finding users and collecting feedback | [Start](src/content/docs/en/07-first-100-users/index.md) | [开始](src/content/docs/07-first-100-users/index.md) |

## 🚀 Start with Level 0

> 🧰 **Before you start:** 🌐 A browser · 🔑 A Google account · ⏱️ 10 minutes

Bring a browser and a Google account, then open [Google AI Studio](https://aistudio.google.com). The early levels mainly use Gemini and do not require a local development setup. Later levels introduce deployment, automation, and payment tools when the project calls for them.

Start with [Level 0 · Your First “Creation”](src/content/docs/en/00-first-build/index.md). At the end, you will have an AI conversation you can save and keep revising.

If you are already comfortable with the command line, you can use Codex (OpenAI) or Claude Code (Anthropic) instead. The instructions use Google AI Studio by default so first-time readers can follow the same screens.

## 🤝 Community and contributions

- 📸 **Share your work:** After finishing a level, post the result and any questions in the BuilderX community (Discord / WeChat groups).
- ✍️ **Improve a lesson:** To fix wording, update an outdated step, or add a level, read the [contribution guide](CONTRIBUTING.md).
- 📄 **Reuse the content:** The tutorials are licensed under [CC BY 4.0](LICENSE). Keep the attribution when sharing or adapting them.

- 🌐 Project website: [builderx.club](https://www.builderx.club/)
- 🛠️ Stack: lessons live in `src/content/docs/`; the site uses [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), and is deployed on Vercel.

## 🔎 Documentation references

This README refactor draws on documentation patterns used by these open-source projects:

- 📚 [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners): a numbered learning path, a lesson index, and a consistent structure for each lesson.
- 🧩 [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning): organizing tutorials around the thing a learner will build.
- 🍳 [openai/openai-cookbook](https://github.com/openai/openai-cookbook): grouping examples by practical task and keeping related resources easy to find.

Only the information structure of the public READMEs informed this refactor; their lesson text and code were not copied into it. BuilderX lessons, examples, and prompts remain available under this repository's [CC BY 4.0](LICENSE), while external projects retain their own licenses.

# Contributing to BuilderX Tutorials

Thanks for wanting to make this project better! 🚀

This repo is the home of **BuilderX 造物挑战 (BuilderX Build Challenge)** — a free, open, beginner-friendly tutorial series that helps complete beginners build their first AI-powered creations.

## What we welcome

- 🆕 **New tutorials** — new levels, new topics, new use cases
- 🌍 **Translations** — especially English, but any language is welcome
- 🐛 **Fixes** — typos, broken links, outdated steps, confusing wording
- 💡 **Ideas** — open an issue before writing a big feature

## Getting started

1. Fork this repository
2. Create a branch: `git checkout -b my-change`
3. Make your changes
4. Commit with a clear message
5. Push and open a Pull Request

## Tutorial conventions

Each tutorial lives in a numbered folder and follows the same structure:

```
NN-first-xxx/
└── your-first-xxx.zh.md      # Chinese version
└── your-first-xxx.en.md      # English version (if translated)
```

### Front matter

Every tutorial starts with YAML front matter:

```yaml
---
title: Level 3 · Your First AI Bot
level: 3
duration: 1 hour
language: en
author: BuilderX Club
created: 2026-08-12
tags: [build-challenge, bot]
---
```

### Structure

Every tutorial should include, in order:

1. **A story** — open with a relatable real person and a concrete win
2. **What you'll build** — one clear deliverable
3. **Step-by-step** — numbered steps with copy-paste prompts
4. **Your creation** — what the reader should have at the end
5. **Share it** — encourage sharing in the community
6. **What you learned** — plain-language takeaways

### Style rules

- **Plain language.** Assume the reader has never written a line of code.
- **Copy-paste prompts.** Every step that asks the user to talk to AI must include an exact prompt they can copy, with `【...】` placeholders they replace.
- **Free and global tools only.** Default to Google AI Studio (Gemini). Avoid tools that require payment or are unavailable in some regions.
- **No marketing-speak.** Write like a friend teaching you, not a company promoting itself.

## Naming

- Chinese: `your-first-xxx.zh.md`
- English: `your-first-xxx.en.md`
- Folder: `NN-first-xxx` (NN = level number, zero-padded)

## License

By contributing, you agree that your contributions are licensed under the same license as the project: **CC BY 4.0** (see [LICENSE](LICENSE)). Anyone can share and adapt the content with attribution.

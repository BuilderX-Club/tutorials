# BuilderX 造物挑战 🚀

**✨ 第一次用 AI 做东西，不必先学完一整套理论。**

BuilderX 造物挑战准备了 8 个循序渐进的小项目。你会从写下第一句提示词开始，做网页、小工具和机器人，再尝试自动化、收费与获取真实用户。每一关都有明确的完成物，也给出了可以直接照着操作的步骤。

> 🌐 [打开在线教程站](https://builderx-tutorials.vercel.app)（使用 Astro + Starlight 构建，支持中英双语）
>
> 📖 教程源文件位于 [`src/content/docs/`](src/content/docs/)，网站由这些 Markdown 文件生成。

> 🌐 English: [README.en.md](README.en.md)

[🌐 在线教程](https://builderx-tutorials.vercel.app) · [🧭 关卡地图](#-8-个关卡8-次动手练习) · [🚀 立即开始](#-从第-0-关开始) · [🤝 参与贡献](#-交流与贡献)

## 🧭 8 个关卡，8 次动手练习

> 💡 **适合谁：** 第一次接触 AI，或者已经会聊天、但还没独立做过完整作品的人。
>
> ⏱️ **怎么学：** 选一关，跟着步骤做完，再用自己的内容修改它。不要求编程基础。

| 关卡 | ⏱️ 预计用时 | 🎁 做完后你会得到 | 中文 | English |
|---|---:|---|---|---|
| 🏁 第 0 关 · 第一次“造物” | 10 分钟 | 一段经过修改的 AI 对话 | [开始](src/content/docs/00-first-build/index.md) | [Start](src/content/docs/en/00-first-build/index.md) |
| 🌐 第 1 关 · 第一个网页 | 15 分钟 | 一个可以打开和分享的单页 | [开始](src/content/docs/01-first-webpage/index.md) | [Start](src/content/docs/en/01-first-webpage/index.md) |
| 🛠️ 第 2 关 · 第一个小工具 | 30 分钟 | 一个解决具体小问题的网页工具 | [开始](src/content/docs/02-first-tool/index.md) | [Start](src/content/docs/en/02-first-tool/index.md) |
| 🤖 第 3 关 · 第一个 AI 机器人 | 1 小时 | 一个能回答指定问题的机器人 | [开始](src/content/docs/03-first-bot/index.md) | [Start](src/content/docs/en/03-first-bot/index.md) |
| 📱 第 4 关 · 第一个手机应用 | 半天 | 一个适合在手机上使用的 Web 应用 | [开始](src/content/docs/04-first-miniapp/index.md) | [Start](src/content/docs/en/04-first-miniapp/index.md) |
| ⚡ 第 5 关 · 第一个自动化 | 半天 | 一条处理重复任务的自动化流程 | [开始](src/content/docs/05-first-automation/index.md) | [Start](src/content/docs/en/05-first-automation/index.md) |
| 💰 第 6 关 · 第一个收费产品 | 一个周末 | 一套定价、收款与交付方案 | [开始](src/content/docs/06-first-paid-product/index.md) | [Start](src/content/docs/en/06-first-paid-product/index.md) |
| 🌱 第 7 关 · 第一个 100 用户 | 一个月 | 一份持续获取反馈和用户的行动计划 | [开始](src/content/docs/07-first-100-users/index.md) | [Start](src/content/docs/en/07-first-100-users/index.md) |

## 🚀 从第 0 关开始

> 🧰 **开始前准备：** 🌐 浏览器 · 🔑 Google 账号 · ⏱️ 10 分钟

准备一个浏览器和 Google 账号，然后打开 [Google AI Studio](https://aistudio.google.com)。前几关主要使用 Gemini，不需要先安装开发环境。后续关卡会按任务需要引入部署、自动化和收款工具。

从[第 0 关 · 你的第一次“造物”](src/content/docs/00-first-build/index.md)开始。完成后，你会得到一段可以保存和继续修改的 AI 对话。

如果你已经习惯使用命令行，也可以改用 Codex（OpenAI）或 Claude Code（Anthropic）。教程默认仍以 Google AI Studio 为例，方便第一次接触 AI 工具的读者跟做。

## 🤝 交流与贡献

- 📸 **晒作品：** 完成一关后，可以把作品和遇到的问题发到 BuilderX 社区（Discord / 微信群）。
- ✍️ **改教程：** 想修正文案、更新失效步骤或补充新关卡，请先阅读[贡献指南](CONTRIBUTING.md)。
- 📄 **用内容：** 教程采用 [CC BY 4.0](LICENSE) 许可；转载或改编时请保留出处。

- 🌐 项目网站：[builderx.club](https://www.builderx.club/)
- 🛠️ 技术栈：教程写在 `src/content/docs/`，站点使用 [Astro](https://astro.build) 与 [Starlight](https://starlight.astro.build) 构建，并部署在 Vercel。

## 🔎 文档设计参考

这次 README 重构参考了以下开源项目的文档组织方式：

- 📚 [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners)：编号式学习路径、关卡索引和统一的单课结构。
- 🧩 [practical-tutorials/project-based-learning](https://github.com/practical-tutorials/project-based-learning)：以“做出一个项目”为入口组织教程。
- 🍳 [openai/openai-cookbook](https://github.com/openai/openai-cookbook)：按实际任务整理示例，并把延伸资料放在清晰的位置。

这里借鉴的是公开 README 的信息组织方式，不是课程正文或代码。BuilderX 的教程内容、示例和提示词继续按本仓库的 [CC BY 4.0](LICENSE) 许可发布；外部项目仍遵循各自的许可。

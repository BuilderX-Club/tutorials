// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://builderx-tutorials.vercel.app',
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    starlight({
      title: {
        'zh-CN': 'BuilderX 造物挑战',
        en: 'BuilderX Build Challenge',
      },
      description: '你的第一个 AI 应用/产品，从这里开始。',
      logo: { src: './src/assets/builderx-logo.svg', alt: 'BuilderX' },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/BuilderX-Club/tutorials' },
      ],
      editLink: {
        baseUrl: 'https://github.com/BuilderX-Club/tutorials/edit/main/src/content/docs/',
      },
      sidebar: [
        {
          label: '开始闯关',
          translations: { en: 'Start the challenge' },
          items: [
            { label: '第 0 关 · 第一次造物', slug: '00-first-build', translations: { en: 'Level 0 · First Creation' } },
            { label: '第 1 关 · 第一个网页', slug: '01-first-webpage', translations: { en: 'Level 1 · First Webpage' } },
            { label: '第 2 关 · 第一个小工具', slug: '02-first-tool', translations: { en: 'Level 2 · First Tool' } },
            { label: '第 3 关 · 第一个 AI 机器人', slug: '03-first-bot', translations: { en: 'Level 3 · First AI Bot' } },
            { label: '第 4 关 · 第一个小程序', slug: '04-first-miniapp', translations: { en: 'Level 4 · First Mini App' } },
            { label: '第 5 关 · 第一个自动化', slug: '05-first-automation', translations: { en: 'Level 5 · First Automation' } },
            { label: '第 6 关 · 第一个收费产品', slug: '06-first-paid-product', translations: { en: 'Level 6 · First Paid Product' } },
            { label: '第 7 关 · 第一个 100 用户', slug: '07-first-100-users', translations: { en: 'Level 7 · First 100 Users' } },
          ],
        },
      ],
    }),
  ],
});

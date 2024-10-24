import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Slacker",
  description: "Slacker Doc",
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
    zh: {
      label: '中文',
      lang: 'zh',
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          text: '',
          items: [
            { text: 'quick start', link: '/quickstart' },
            {
              text: 'concept', items: [
                { text: 'IoC', link: '/concept/ioc.md' },
                { text: 'module', link: '/concept/module.md' }
              ]
            },
            {
              text: 'module list', items: [
                { text: 'configx', link: '/module/configx' },
                { text: 'ginx', link: '/module/ginx' }
              ]
            }
          ]
        }
      ],
      '/zh/': [
        {
          text: '',
          items: [
            { text: '快速开始', link: '/zh/quickstart' },
            {
              text: '概念', items: [
                { text: 'IoC', link: '/zh/concept/ioc.md' },
                { text: '模块', link: '/zh/concept/module.md' }
              ]
            },
            {
              text: '模块列表', items: [
                { text: 'configx', link: '/zh/module/configx' },
                { text: 'ginx', link: '/zh/module/ginx' }
              ]
            }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/goslacker/slacker' }
    ]
  }
})

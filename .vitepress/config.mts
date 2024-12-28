import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "InfoSpace",
  description: "xtyuns's info space",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '技术雷达', link: '/page/radar' }
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: 'Intro', link: '/wiki/intro' }
        ]
      },
      {
        text: '速查表',
        items: [
          { text: 'Bash', link: '/wiki/ref/Bash' },
          { text: 'MySQL', link: '/wiki/ref/MySQL' },
          { text: 'Docker', link: '/wiki/ref/Docker' },
        ]
      },
      {
        text: '快速开始',
        items: [
          { text: 'Spring', link: '/wiki/mirror/site' },
        ]
      },
      {
        text: '最佳实践',
        items: [
          { text: 'Spring', link: '/wiki/mirror/site' },
        ]
      },
      {
        text: '随手笔记',
        items: [
          { text: 'Spring', link: '/wiki/mirror/site' },
        ]
      },
      {
        text: '仓库加速',
        items: [
          { text: '镜像站', link: '/wiki/mirror/site' },
          { text: 'Maven', link: '/wiki/mirror/PyPI' },
          { text: 'apt', link: '/wiki/mirror/PyPI' },
          { text: 'PyPI', link: '/wiki/mirror/PyPI' },
          { text: 'npm', link: '/wiki/mirror/PyPI' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xtyuns' }
    ]
  }
})

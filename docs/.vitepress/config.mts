import { defineConfig } from 'vitepress'

const observationSheet = 'https://docs.qq.com/sheet/DUWhRVURwQ1RrT0dp'

export default defineConfig({
  lang: 'zh-CN',
  title: 'SYSU Game Wiki',
  description: '中山大学游戏设计 / 开发小组的案例库、知识库与项目档案',
  cleanUrls: true,
  head: [
    ['meta', { name: 'theme-color', content: '#10131a' }],
    ['meta', { name: 'color-scheme', content: 'dark light' }],
  ],
  themeConfig: {
    siteTitle: 'SYSU · GAME WIKI',
    logo: '/logo.svg',
    nav: [
      { text: 'Wiki', link: '/wiki/' },
      { text: '聚光灯：涌现', link: '/spotlight/' },
      { text: '活动', link: '/activities/' },
      { text: '项目', link: '/projects/' },
      { text: '加入我们', link: '/join/' },
      { text: '填写观察表 ↗', link: observationSheet },
    ],
    sidebar: {
      '/wiki/': [
        {
          text: '游戏知识库',
          items: [
            { text: '知识库首页', link: '/wiki/' },
            { text: '游戏设计', link: '/wiki/game-design' },
            { text: '游戏开发', link: '/wiki/development' },
            { text: '游戏美术', link: '/wiki/art' },
          ],
        },
      ],
      '/spotlight/': [
        {
          text: '聚光灯 GameJam「涌现」',
          items: [
            { text: '专题首页', link: '/spotlight/' },
            { text: '案例观察库', link: '/spotlight/cases' },
            { text: '涌现设计笔记', link: '/spotlight/notes' },
            { text: '延伸阅读与视频', link: '/spotlight/resources' },
            { text: '讨论记录', link: '/spotlight/discussions' },
            { text: '2D 原型提案', link: '/spotlight/prototype' },
            { text: '最终复盘', link: '/spotlight/retrospective' },
          ],
        },
      ],
      '/activities/': [
        {
          text: '活动记录',
          items: [{ text: '活动首页', link: '/activities/' }],
        },
      ],
      '/projects/': [
        {
          text: '项目与作品',
          items: [{ text: '项目首页', link: '/projects/' }],
        },
      ],
      '/about/': [
        {
          text: '关于我们',
          items: [{ text: '小组介绍', link: '/about/' }],
        },
      ],
      '/join/': [
        {
          text: '加入我们',
          items: [{ text: '加入方式', link: '/join/' }],
        },
      ],
    },
    socialLinks: [],
    footer: {
      message: '由社团成员共同维护 · 让每一次观察都成为下一次创作的起点',
      copyright: 'SYSU Game Wiki',
    },
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
  },
})


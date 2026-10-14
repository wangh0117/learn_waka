import { defineConfig } from 'vitepress'

// 由 SUMMARY.md 迁移而来的目录结构
export default defineConfig({
  lang: 'zh-CN',
  title: '日本和歌初探',
  description: '以一个门外汉为起点，开始学习日本和歌。',
  base: '/learn_waka/',
  // README.md 仅作为 GitHub 仓库首页说明，不参与站点构建
  srcExclude: ['README.md'],
  // 「此页面修订于」——替代原 page-footer-ex 插件
  lastUpdated: true,
  cleanUrls: true,

  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/learn_waka/waka.svg' }]],

  themeConfig: {
    // 右侧大纲导航（替代 anchor-navigation-ex）
    outline: { level: [2, 3], label: '本页目录' },

    // 中文本地搜索（替代 search-pro）
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除查询',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    nav: [
      { text: '首页', link: '/' },
      { text: '序', link: '/chap00/0-1' },
      {
        text: '章节',
        items: [
          { text: '和歌的诞生与三大和歌集', link: '/chap01/1-1' },
          { text: '和歌的爱与抒发', link: '/chap02/2-1' },
          { text: '和歌借鉴', link: '/chap03/3-1' },
          { text: '最爱和歌', link: '/chap04/4-1' }
        ]
      }
    ],

    sidebar: [
      { text: '序', link: '/chap00/0-1' },
      {
        text: '和歌的诞生与三大和歌集',
        collapsed: false,
        items: [
          { text: '从《记·纪》到《万叶集》', link: '/chap01/1-1' },
          { text: '日本本土和歌的崛起', link: '/chap01/1-2' }
        ]
      },
      {
        text: '和歌的爱与抒发',
        collapsed: false,
        items: [
          { text: '和歌中的爱情表达', link: '/chap02/2-1' },
          { text: '和歌中的物哀文化', link: '/chap02/2-2' }
        ]
      },
      {
        text: '和歌借鉴',
        collapsed: false,
        items: [
          { text: '从寂寞流泪开始', link: '/chap03/3-1' },
          { text: '意象之外的意象', link: '/chap03/3-2' }
        ]
      },
      {
        text: '最爱和歌',
        collapsed: false,
        items: [
          { text: '和歌赏析', link: '/chap04/4-1' },
          { text: '和歌仿写', link: '/chap04/4-2' }
        ]
      }
    ],

    // 页脚版权（替代 page-footer-ex）
    footer: {
      message: '使用 知识共享 署名-相同方式共享 4.0 协议发布',
      copyright: 'By 海（wangh0117）'
    },

    // 「编辑此页」（替代 editlink）
    editLink: {
      pattern: 'https://github.com/wangh0117/learn_waka/edit/master/:path',
      text: '在 GitHub 上编辑此页'
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

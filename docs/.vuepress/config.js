const nav = require('./config/nav.js');

module.exports = {
  title: "yyq's blog",
  base: '/Blog/',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
      },
    ],
    ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }], // 百度统计的站长验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    [
      'script',
      {
        'data-ad-client': 'ca-pub-7828333725993554',
        async: 'async',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      },
    ], 
    [
      'script',
      {
        'custom-element': 'amp-ad',
        async: 'async',
        src: 'https://cdn.ampproject.org/v0/amp-ad-0.1.js',
      },
    ],
  ],
  markdown: {
    lineNumbers: true, // 代码行号
  },

  theme: 'vdoing',

  themeConfig: {
    // 主题配置
    nav: nav,
    sidebar: 'structuring',
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo.jpeg', // 导航栏logo
    repo: 'yyq-bit/Blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑',
    author: {
      name: 'YYQI', // 必需
      link: 'https://github.com/yyq-bit',
    },
    blogger: {
      avatar: '/img/avatar.jpeg',
      name: 'Yongqi Yu',
      slogan: '前端小学生',
    },
    social: {
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:174586003@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/yyq-bit',
        },
        {
          iconClass: 'icon-erji',
          title: '听音乐',
          link: 'https://music.163.com/#/playlist?id=909779269',
        },
      ],
    },
    footer: {
      createYear: 2021,
      copyrightInfo:
        'Yongqi Yu | <a href="https://github.com/xugaoyi/vuepress-theme-vdoing/blob/master/LICENSE" target="_blank">MIT License</a>',
    },
  },
  plugins: [
    [
      'thirdparty-search',
      {
        // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [
          {
            title: '在MDN中搜索',
            frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
            behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在Runoob中搜索',
            frontUrl: 'https://www.runoob.com/?s=',
          },
          {
            title: '在Vue API中搜索',
            frontUrl: 'https://cn.vuejs.org/v2/api/#',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q=',
          },
          {
            title: '通过百度搜索本站的',
            frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
          },
        ],
      },
    ],
    'vuepress-plugin-baidu-autopush',
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
    [
      'vuepress-plugin-baidu-tongji', // 百度统计
      {
        hm: '503f098e7e5b3a5b5d8c5fc2938af002',
      },
    ],
    [
      'vuepress-plugin-comment', // 评论
      {
        choosen: 'gitalk',
        options: {
          clientID: 'e5cc0f2094dcb2f6c04c',
          clientSecret: '0fb2a4a94f9839401ed87fff98124231befc0986',
          repo: 'blog-gitalk-comment',
          owner: 'yyq-bit',
          admin: ['yyq-bit'],
          pagerDirection: 'last',
          id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>',
          title: '「评论」<%- frontmatter.title %>',
          labels: ['Gitalk', 'Comment'],
          body:
            '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>',
        },
      },
    ],
    // "上次更新"时间格式
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss')
        },
      },
    ],
    // RSS订阅
    [
      '@vuepress-reco/vuepress-plugin-rss',
      {
        site_url: 'https://blog.kimen.com.cn',
        filter: (frontmatter) => { return [true|false] },
        count: 20
      }
    ]
  ]
}

module.exports = {
  title: 'Miki`s BLOG',
  description: 'Miki的个人博客',
  // head: [
  //   ['link', {rel: 'icon', href: '/images/logo.png'}]
  // ],
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.jpg' }],
    // ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    // ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    // ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    // ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    // ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [ // 导航栏配置
      {text: '指南', link: '/guide/'},
      {text: '百度', link: 'https://baidu.com'}
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 5 // 侧边栏显示2级
  }
}
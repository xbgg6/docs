import { vueFragment, miniProgram, gitOrder, mindMap, Linux } from "./menu1Sidebar";
import mdItCustomAttrs  from 'markdown-it-custom-attrs'

export default {
  base: '/',
  title: "🧠 文章知识库",
  titleTemplate: '爱写代码的小白',
  // 会渲染成<meta>标签，SEO用
  description: '文章知识库',
  //图片预览(图片灯箱远程引入)
  head:[
    [
      "link",
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }
    ],
  ],
  themeConfig: {
      // 展示搜索框
      algolia: {
        appId: '4BG2APT558',
        apiKey: '00ffa62e0b4eeebee8c43041c6aa063b',
        indexName: 'vitepress-blog'
      },
      nav: [
          { text: '思维导图', link: '/思维导图/Git操作.html', activeMatch: '/思维导图/' },
          { text: 'Linux命令手册', link: '/Linux/cd.html', activeMatch: '/Linux/' },
          { text: 'Vue2', link: '/Vue2/浏览器加载进度条.html', activeMatch: '/Vue2/' },
          { text: '小程序', link: '/小程序/webview使用微信JSSDK.html', activeMatch: '/小程序/' },
          { text: 'Git', link: '/Git/常用命令.html', activeMatch: '/Git/' },
	      { text: 'My Blog', link: 'https://www.itwk.cc', activeMatch: '#' },
      ],
      sidebar: {
        '/Vue2/': vueFragment,
        '/小程序/': miniProgram,
        '/Git/': gitOrder,
        '/思维导图/': mindMap,
        '/Linux/': Linux,
      },
      socialLinks: [
          { icon: 'gitee', link: 'https://gitee.com' },

      ],
      outline: 'deep', // 右侧大纲标题层级
      outlineTitle: '目录', // 右侧大纲标题文本配置
      //丝滑滚动
      smoothScroll: true,
      // 启用时间线
      editLinks: true,
      //在git上编辑提示文字
      editLinkText: '在 GitHub 上编辑此页',
      // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
      lastUpdated: '上次更新',
      docFooter: { //上下篇文本
        prev: '上一篇',
        next: '下一篇'
      },

      footer: {
            message: ' ICP备案：<a href="http://www.beian.miit.gov.cn" target="_blank">鲁ICP备202004018号</a>',
          copyright: `Copyright © ${new Date().getFullYear()} <a href="http://www.itwk.cc" target="_blank">爱写代码的小白<br><a href="http://dev.ldoc.cc" target="_blank">杰信网络对象存储</a> &nbsp; | &nbsp;<a href="https://blog.csdn.net/qq_34185638" target="_blank">CSDN</a>`
      },
  },
  markdown:{
    config: (md) => {
      md.use(mdItCustomAttrs, 'image', {
          'data-fancybox': "gallery"
        },
      );
    }
  }
}

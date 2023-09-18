const commonVue = '/Vue2';
const commonMiniProgram = '/小程序';
const commonGit = '/Git';
const commonMindMap = '/思维导图';
const commonJsFragment = '/Linux';


export const vueFragment = [
  {
    text: 'Vue2',
    collapsible: true,
    collapsed: true,
    items: [
      {text: '浏览器加载进度条', link: `${commonVue}/浏览器加载进度条.md`},
      {text: '数字滚动组件', link: `${commonVue}/数字滚动组件.md`},
      {text: '使用百度地图设置中心点', link: `${commonVue}/使用百度地图设置中心点.md`},
      {text: 'Echarts封装思路(二)', link: `${commonVue}/Echarts封装思路(二).md`},
      {text: 'Echarts封装思路', link: `${commonVue}/Echarts封装思路.md`},
      {text: 'vue后台动态控制路由权限', link: `${commonVue}/vue后台动态控制路由权限.md`},
      {text: '管道符的使用', link: `${commonVue}/管道符的使用.md`},
      {text: 'computed计算属性的使用', link: `${commonVue}/computed计算属性的使用.md`},
      {text: 'Math.random()的使用', link: `${commonVue}/Math.random()的使用.md`},
      {text: '接口传值时字段为空不传该字段', link: `${commonVue}/接口传值时字段为空不传该字段.md`},
      {text: 'element-confirm提示Promise版', link: `${commonVue}/element-confirm提示Promise版.md`},
      {text: 'element-table 一行拆分多列', link: `${commonVue}/element-table 一行拆分多列.md`},
      {text: 'element表格动态列排序错乱', link: `${commonVue}/element表格动态列排序错乱.md`},
      {text: 'element表头添加图标,悬浮内容', link: `${commonVue}/element表头添加图标,悬浮内容.md`},
      {text: 'element动态设置日期选择范围', link: `${commonVue}/element动态设置日期选择范围.md`},
      {text: 'element月份选择器隐藏年份', link: `${commonVue}/element月份选择器隐藏年份.md`},
      {text: '修改el-tooltip宽度', link: `${commonVue}/修改el-tooltip宽度.md`},
      {text: 'el-input为number时右侧箭头', link: `${commonVue}/el-input为number时右侧箭头.md`},
      {text: '防止dialog弹窗超出视窗', link: `${commonVue}/防止dialog弹窗超出视窗.md`},
      {text: '滚动条样式美化(不兼容火狐和IE)', link: `${commonVue}/滚动条样式美化(不兼容火狐和IE).md`},
      {text: '输入框自动填充背景色问题', link: `${commonVue}/输入框自动填充背景色问题.md`},
      {text: '侧边栏菜单渐变色', link: `${commonVue}/侧边栏菜单渐变色.md`},
      {text: '后台管理存储获取Cookie', link: `${commonVue}/后台管理存储获取Cookie.md`},
      {text: '父组件调用子组件方法', link: `${commonVue}/父组件调用子组件方法.md`},
      {text: 'Vue页面模版', link: `${commonVue}/Vue页面模版.md`},
    ]
  }
]

export const miniProgram = [
  {
    text: '小程序',
    collapsible: true,
    collapsed: true,
    items: [
      {text: 'webview使用微信JSSDK', link: `${commonMiniProgram}/webview使用微信JSSDK.md`},
      {text: 'websocket简单封装', link: `${commonMiniProgram}/websocket简单封装.md`},
      {text: 'Echarts封装', link: `${commonMiniProgram}/Echarts封装.md`},
      {text: 'wxs的使用', link: `${commonMiniProgram}/wxs的使用.md`},
      {text: '多个请求完成后在取消loading', link: `${commonMiniProgram}/多个请求完成后在取消loading.md`},
      {text: '详情页返回列表页更新某条数据', link: `${commonMiniProgram}/详情页返回列表页更新某条数据.md`},
      {text: 'vant开始结束日期选择器组件', link: `${commonMiniProgram}/vant开始结束日期选择器组件.md`},
      {text: 'vantDialog未通过校验阻止关闭', link: `${commonMiniProgram}/vantDialog未通过校验阻止关闭.md`},
      {text: '全局监听网络状态', link: `${commonMiniProgram}/全局监听网络状态.md`},
      {text: '获取授权和定位封装', link: `${commonMiniProgram}/获取授权和定位封装.md`},
      {text: '腾讯逆解析坐标封装', link: `${commonMiniProgram}/腾讯逆解析坐标封装.md`},
      {text: '预览PDF文档封装', link: `${commonMiniProgram}/预览PDF文档封装.md`},
      {text: 'vant获取手机号按钮组件', link: `${commonMiniProgram}/vant获取手机号按钮组件.md`},
      {text: '苹果手机少数名族姓名(手机)显示', link: `${commonMiniProgram}/苹果手机少数名族姓名(手机)显示.md`},
      {text: '姓名添加特殊字符组件(vant)', link: `${commonMiniProgram}/姓名添加特殊字符组件(vant).md`},
      {text: '小程序page模版', link: `${commonMiniProgram}/小程序page模版.md`},
      {text: '小程序components模板', link: `${commonMiniProgram}/小程序components模板.md`},
    ]
  }
]

export const Linux = [
  {
    text: 'Linux命令手册',
    collapsible: true,
    collapsed: true,
    items: [
      {text: 'cd命令', link: `${commonJsFragment}/cd.md`},
	  {text: 'ls命令', link: `${commonJsFragment}/ls.md`},
	  {text: 'pwd命令', link: `${commonJsFragment}/pwd.md`},
	  {text: 'mkdir命令', link: `${commonJsFragment}/mkdir.md`},
	  {text: 'rmdir命令', link: `${commonJsFragment}/rmdir.md`},
	  {text: 'rm命令', link: `${commonJsFragment}/rm.md`},
    {text: 'cp命令', link: `${commonJsFragment}/cp.md`},
    {text: 'mv命令', link: `${commonJsFragment}/mv.md`},
    {text: 'touch命令', link: `${commonJsFragment}/touch.md`},
    {text: 'ln命令', link: `${commonJsFragment}/ln.md`},
    {text: 'cat命令', link: `${commonJsFragment}/cat.md`},
    {text: 'less/more命令', link: `${commonJsFragment}/less-more.md`},
    {text: 'grep命令', link: `${commonJsFragment}/grep.md`},
    {text: 'find命令', link: `${commonJsFragment}/find.md`},
    {text: 'tar命令', link: `${commonJsFragment}/tar.md`},
    {text: 'zip/unzip命令', link: `${commonJsFragment}/zip.md`},
    {text: 'head/less命令', link: `${commonJsFragment}/head-less.md`},
    {text: 'vi/vim/emacs/nano文本编辑器', link: `${commonJsFragment}/editor.md`},
    {text: 'awk/sed命令', link: `${commonJsFragment}/awk-sed.md`},
    ]
  }
]


export const gitOrder = [
  {
    text: 'Git',
    collapsible: true,
    collapsed: true,
    items: [
      {text: '常用命令', link: `${commonGit}/常用命令.md`},
      {text: '清空git远程仓库', link: `${commonGit}/清空git远程仓库.md`},
      {text: '代码提交', link: `${commonGit}/代码提交.md`},
    ]
  }
]



export const mindMap = [
  {
    text: '思维导图',
    collapsible: true,
    collapsed: true,
    items: [
      {text: 'Git操作', link: `${commonMindMap}/Git操作.md`},
      {text: 'HTTP', link: `${commonMindMap}/HTTP.md`},
      {text: 'head请求头', link: `${commonMindMap}/head请求头.md`},
      {text: 'markdown语法', link: `${commonMindMap}/markdown语法.md`},
      {text: 'regx正则表达式', link: `${commonMindMap}/regx正则表达式.md`},
      {text: '盒模型', link: `${commonMindMap}/盒模型.md`},
      {text: 'css选择器', link: `${commonMindMap}/css选择器.md`},
      {text: 'css变形(transform)', link: `${commonMindMap}/css变形(transform).md`},
      {text: 'Sass', link: `${commonMindMap}/Sass.md`},
      {text: 'Flex布局', link: `${commonMindMap}/Flex布局.md`},
      {text: 'Grid布局', link: `${commonMindMap}/Grid布局.md`},
      {text: 'console技巧', link: `${commonMindMap}/console技巧.md`},
      {text: 'ECMAScript6简介', link: `${commonMindMap}/ECMAScript6简介.md`},
      {text: '编程风格', link: `${commonMindMap}/编程风格.md`},
      {text: '读懂规格', link: `${commonMindMap}/读懂规格.md`},
      {text: 'let和const命令', link: `${commonMindMap}/let和const命令.md`},
      {text: '变量的解构赋值', link: `${commonMindMap}/变量的解构赋值.md`},
      {text: 'Promise对象', link: `${commonMindMap}/Promise对象.md`},
      {text: 'async函数', link: `${commonMindMap}/async函数.md`},
      {text: '扩展运算符', link: `${commonMindMap}/扩展运算符.md`},
      {text: '函数的扩展', link: `${commonMindMap}/函数的扩展.md`},
      {text: '对象的扩展和新增方法', link: `${commonMindMap}/对象的扩展和新增方法.md`},
      {text: '数组的扩展', link: `${commonMindMap}/数组的扩展.md`},
      {text: '数值的扩展', link: `${commonMindMap}/数值的扩展.md`},
      {text: '字符串的扩展和新增方法', link: `${commonMindMap}/字符串的扩展和新增方法.md`},
      {text: '正则的扩展', link: `${commonMindMap}/正则的扩展.md`},
      {text: 'Babel转码器', link: `${commonMindMap}/Babel转码器.md`},
      {text: 'Symbol', link: `${commonMindMap}/Symbol.md`},
      {text: 'Set和Map数据结构', link: `${commonMindMap}/Set和Map数据结构.md`},
      {text: 'Proxy', link: `${commonMindMap}/Proxy.md`},
      {text: 'Reflect', link: `${commonMindMap}/Reflect.md`},
      {text: 'Iterator和for...of 循环', link: `${commonMindMap}/Iterator和for...of 循环.md`},
      {text: 'Generator函数的语法和应用', link: `${commonMindMap}/Generator函数的语法和应用.md`},
      {text: 'Class的继承', link: `${commonMindMap}/Class的继承.md`},
      {text: 'Module的语法', link: `${commonMindMap}/Module的语法.md`},
      {text: 'Module的加载实现', link: `${commonMindMap}/Module的加载实现.md`},
      {text: '异步遍历器', link: `${commonMindMap}/异步遍历器.md`},
      {text: 'ArrayBuffer', link: `${commonMindMap}/ArrayBuffer.md`},
      {text: 'Decorator', link: `${commonMindMap}/Decorator.md`},
      {text: '应用实例和组件实例', link: `${commonMindMap}/应用实例和组件实例.md`},
      {text: '模板语法', link: `${commonMindMap}/模板语法.md`},
      {text: '计算属性和监听器', link: `${commonMindMap}/计算属性和监听器.md`},
      {text: '绑定class和style', link: `${commonMindMap}/绑定class和style.md`},
      {text: '条件渲染', link: `${commonMindMap}/条件渲染.md`},
      {text: '列表渲染v-for', link: `${commonMindMap}/列表渲染v-for.md`},
      {text: '事件处理', link: `${commonMindMap}/事件处理.md`},
      {text: 'v-model及其修饰符', link: `${commonMindMap}/v-model及其修饰符.md`},
      {text: '组件的基本使用', link: `${commonMindMap}/组件的基本使用.md`},
      {text: '注册组件', link: `${commonMindMap}/注册组件.md`},
      {text: '组件Props', link: `${commonMindMap}/组件Props.md`},
      {text: '动态组件和异步组件', link: `${commonMindMap}/动态组件和异步组件.md`},
      {text: '深入组件', link: `${commonMindMap}/深入组件.md`},
      {text: '非属性特性', link: `${commonMindMap}/非属性特性.md`},
      {text: '自定义事件', link: `${commonMindMap}/自定义事件.md`},
      {text: '插槽slot', link: `${commonMindMap}/插槽slot.md`},
      {text: '依赖注入：Provide和Inject', link: `${commonMindMap}/依赖注入：Provide和Inject.md`},
      {text: '模板引用和控制更新', link: `${commonMindMap}/模板引用和控制更新.md`},
      {text: '配置选项', link: `${commonMindMap}/配置选项.md`},
    ]
  }
]

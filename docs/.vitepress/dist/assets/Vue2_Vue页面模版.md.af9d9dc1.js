import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const A=JSON.parse('{"title":"生成Vue页面模版","description":"","frontmatter":{"title":"生成Vue页面模版"},"headers":[],"relativePath":"Vue2/Vue页面模版.md","filePath":"Vue2/Vue页面模版.md","lastUpdated":1694660988000}'),p={name:"Vue2/Vue页面模版.md"},o=l(`<h1 id="生成vue页面模版" tabindex="-1">生成Vue页面模版 <a class="header-anchor" href="#生成vue页面模版" aria-label="Permalink to &quot;生成Vue页面模版&quot;">​</a></h1><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">&gt;\${</span><span style="color:#79B8FF;">COMPONENT_NAME</span><span style="color:#E1E4E8;">}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）</span></span>
<span class="line"><span style="color:#E1E4E8;">// 例如：import 《组件名称》 from &#39;《组件路径》&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 组件名，keep-alive时，可搭配组件name进行缓存过滤</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;\${COMPONENT_NAME}&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 局部注册组件，import引入的组件需要注入到对象中才能使用</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 分发 Vue 组件中可复用功能</span></span>
<span class="line"><span style="color:#E1E4E8;">  mixins: [],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 这里存放数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义</span></span>
<span class="line"><span style="color:#E1E4E8;">  computed: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 监控data中的数据变化，一般用于监控路由、input输入框的值特殊处理等等，比较适合的场景是一个数据影响多个数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 方法集合</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 创建完成（可以访问当前this实例）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">created</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 挂载完成（可以访问DOM元素）</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 创建之前</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">beforeCreate</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 挂载之前</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">beforeMount</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 更新之前</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">beforeUpdate</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 更新之后</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">updated</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 销毁之前</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">beforeDestroy</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生命周期 - 销毁完成</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">destroyed</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 如果页面有keep-alive缓存功能，这个函数会触发</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">activated</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;less&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">// 需提前安装less依赖</span></span>
<span class="line"><span style="color:#E1E4E8;">// 可引入公共样式</span></span>
<span class="line"><span style="color:#E1E4E8;">// 例如：@import &quot;../../css/table.less&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">&gt;\${</span><span style="color:#005CC5;">COMPONENT_NAME</span><span style="color:#24292E;">}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）</span></span>
<span class="line"><span style="color:#24292E;">// 例如：import 《组件名称》 from &#39;《组件路径》&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 组件名，keep-alive时，可搭配组件name进行缓存过滤</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;\${COMPONENT_NAME}&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 局部注册组件，import引入的组件需要注入到对象中才能使用</span></span>
<span class="line"><span style="color:#24292E;">  components: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 分发 Vue 组件中可复用功能</span></span>
<span class="line"><span style="color:#24292E;">  mixins: [],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 这里存放数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义</span></span>
<span class="line"><span style="color:#24292E;">  computed: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 监控data中的数据变化，一般用于监控路由、input输入框的值特殊处理等等，比较适合的场景是一个数据影响多个数据</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 方法集合</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 创建完成（可以访问当前this实例）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">created</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 挂载完成（可以访问DOM元素）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 创建之前</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">beforeCreate</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 挂载之前</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">beforeMount</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 更新之前</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">beforeUpdate</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 更新之后</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">updated</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 销毁之前</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">beforeDestroy</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生命周期 - 销毁完成</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">destroyed</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 如果页面有keep-alive缓存功能，这个函数会触发</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">activated</span><span style="color:#24292E;"> () {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;less&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">// 需提前安装less依赖</span></span>
<span class="line"><span style="color:#24292E;">// 可引入公共样式</span></span>
<span class="line"><span style="color:#24292E;">// 例如：@import &quot;../../css/table.less&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,2),e=[o];function c(t,E,r,y,i,d){return n(),a("div",null,e)}const D=s(p,[["render",c]]);export{A as __pageData,D as default};

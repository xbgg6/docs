import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const p="/小程序/小程序Echarts封装.jpg",d=JSON.parse('{"title":"小程序Echarts封装","description":"","frontmatter":{"title":"小程序Echarts封装"},"headers":[],"relativePath":"小程序/Echarts封装.md","filePath":"小程序/Echarts封装.md","lastUpdated":1694660988000}'),o={name:"小程序/Echarts封装.md"},e=l('<h1 id="小程序echarts封装" tabindex="-1">小程序Echarts封装 <a class="header-anchor" href="#小程序echarts封装" aria-label="Permalink to &quot;小程序Echarts封装&quot;">​</a></h1><ul><li>封装公共的柱状图组件，并在需要的页面引入使用。要求一个页面中有多个饼图，动态渲染不同的数据。</li></ul><p><img src="'+p+`" alt="" data-fancybox="gallery"></p><h2 id="_1-下载-github-上的-ecomfe-echarts-for-weixin-项目-echarts微信版。" tabindex="-1">1. 下载 GitHub 上的 ecomfe/echarts-for-weixin 项目，Echarts微信版。 <a class="header-anchor" href="#_1-下载-github-上的-ecomfe-echarts-for-weixin-项目-echarts微信版。" aria-label="Permalink to &quot;1. 下载 GitHub 上的 ecomfe/echarts-for-weixin 项目，Echarts微信版。&quot;">​</a></h2><p>地址：<a href="https://github.com/ecomfe/echarts-for-weixin" target="_blank" rel="noreferrer">https://github.com/ecomfe/echarts-for-weixin</a></p><h2 id="_2-将-ec-canvas-文件放置到小程序分包后的文件夹中" tabindex="-1">2. 将 ec-canvas 文件放置到小程序分包后的文件夹中 <a class="header-anchor" href="#_2-将-ec-canvas-文件放置到小程序分包后的文件夹中" aria-label="Permalink to &quot;2. 将 ec-canvas 文件放置到小程序分包后的文件夹中&quot;">​</a></h2><h2 id="_3-封装柱状图公共组件" tabindex="-1">3. 封装柱状图公共组件 <a class="header-anchor" href="#_3-封装柱状图公共组件" aria-label="Permalink to &quot;3. 封装柱状图公共组件&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// ec-bar</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;canvas-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ec-canvas</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;echarts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">canvas-id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;echarts&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">week</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{week}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">weekData</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{weekData}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ec</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{ ec }}&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">ec-canvas</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// ec-bar</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;canvas-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">ec-canvas</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;echarts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">canvas-id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;echarts&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">week</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{week}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">weekData</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{weekData}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ec</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{ ec }}&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">ec-canvas</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> echarts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;../ec-canvas/echarts&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> chart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表函数</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">initChart</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">canvas</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">width</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">height</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">dpr</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">week</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">weekData</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  chart </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> echarts.</span><span style="color:#B392F0;">init</span><span style="color:#E1E4E8;">(canvas, </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: width,</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: height,</span></span>
<span class="line"><span style="color:#E1E4E8;">    devicePixelRatio: dpr</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  canvas.</span><span style="color:#B392F0;">setChart</span><span style="color:#E1E4E8;">(chart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> option </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    grid: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      left: </span><span style="color:#9ECBFF;">&quot;3%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      right: </span><span style="color:#9ECBFF;">&quot;4%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      bottom: </span><span style="color:#9ECBFF;">&quot;3%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      top: </span><span style="color:#9ECBFF;">&quot;13%&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      containLabel: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    xAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;category&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: week,</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisTick: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&quot;dotted&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    yAxis: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;value&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      axisLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&quot;#ccc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      splitLine: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        lineStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          type: </span><span style="color:#9ECBFF;">&quot;dashed&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    series: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        barWidth: </span><span style="color:#79B8FF;">15</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        data: weekData,</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#9ECBFF;">&#39;bar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        label: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          show: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          position: </span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          textStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            color: </span><span style="color:#9ECBFF;">&quot;#000&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        itemStyle: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          color: </span><span style="color:#9ECBFF;">&#39;#52cee7&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  chart.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  chart.</span><span style="color:#B392F0;">setOption</span><span style="color:#E1E4E8;">(option);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> chart;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 接收页面传递过来的柱状图数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  properties: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    week: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    weekData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Array</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    ec: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      onInit: initChart</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> echarts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;../ec-canvas/echarts&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> chart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 初始化图表函数</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">initChart</span><span style="color:#24292E;">(</span><span style="color:#E36209;">canvas</span><span style="color:#24292E;">, </span><span style="color:#E36209;">width</span><span style="color:#24292E;">, </span><span style="color:#E36209;">height</span><span style="color:#24292E;">, </span><span style="color:#E36209;">dpr</span><span style="color:#24292E;">, </span><span style="color:#E36209;">week</span><span style="color:#24292E;">, </span><span style="color:#E36209;">weekData</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  chart </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> echarts.</span><span style="color:#6F42C1;">init</span><span style="color:#24292E;">(canvas, </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">    width: width,</span></span>
<span class="line"><span style="color:#24292E;">    height: height,</span></span>
<span class="line"><span style="color:#24292E;">    devicePixelRatio: dpr</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  canvas.</span><span style="color:#6F42C1;">setChart</span><span style="color:#24292E;">(chart)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> option </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    grid: {</span></span>
<span class="line"><span style="color:#24292E;">      left: </span><span style="color:#032F62;">&quot;3%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      right: </span><span style="color:#032F62;">&quot;4%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      bottom: </span><span style="color:#032F62;">&quot;3%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      top: </span><span style="color:#032F62;">&quot;13%&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      containLabel: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    xAxis: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;category&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      data: week,</span></span>
<span class="line"><span style="color:#24292E;">      axisTick: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&quot;dotted&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    yAxis: {</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;value&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      axisLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&quot;#ccc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      splitLine: {</span></span>
<span class="line"><span style="color:#24292E;">        show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        lineStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          type: </span><span style="color:#032F62;">&quot;dashed&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    series: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        barWidth: </span><span style="color:#005CC5;">15</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        data: weekData,</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#032F62;">&#39;bar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        label: {</span></span>
<span class="line"><span style="color:#24292E;">          show: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          position: </span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          textStyle: {</span></span>
<span class="line"><span style="color:#24292E;">            color: </span><span style="color:#032F62;">&quot;#000&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        itemStyle: {</span></span>
<span class="line"><span style="color:#24292E;">          color: </span><span style="color:#032F62;">&#39;#52cee7&#39;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  chart.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  chart.</span><span style="color:#6F42C1;">setOption</span><span style="color:#24292E;">(option);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> chart;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 接收页面传递过来的柱状图数据</span></span>
<span class="line"><span style="color:#24292E;">  properties: {</span></span>
<span class="line"><span style="color:#24292E;">    week: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    weekData: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Array</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  data: {</span></span>
<span class="line"><span style="color:#24292E;">    ec: {</span></span>
<span class="line"><span style="color:#24292E;">      onInit: initChart</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;usingComponents&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ec-canvas&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;../ec-canvas/ec-canvas&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;usingComponents&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ec-canvas&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;../ec-canvas/ec-canvas&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_4-父组件页遍历-ec-bar-柱状图组件-并传过去需要的数据" tabindex="-1">4. 父组件页遍历 ec-bar 柱状图组件，并传过去需要的数据 <a class="header-anchor" href="#_4-父组件页遍历-ec-bar-柱状图组件-并传过去需要的数据" aria-label="Permalink to &quot;4. 父组件页遍历 ec-bar 柱状图组件，并传过去需要的数据&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;</span><span style="color:#E1E4E8;">--父组件--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;card-item&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{item.data}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;i&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:for-item</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;i&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">ec-bar</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">week</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{i.week}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">weekData</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{i.weekData}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">wx:if</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{i.diyRemarkCnt &gt; 0}}&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">ec-bar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;font-style:italic;">&lt;</span><span style="color:#24292E;">--父组件--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;card-item&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{item.data}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;i&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:for-item</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;i&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">ec-bar</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">week</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{i.week}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">weekData</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{i.weekData}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">wx:if</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{i.diyRemarkCnt &gt; 0}}&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">ec-bar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;usingComponents&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ec-bar&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;../../components/ec-bar/index&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;usingComponents&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ec-bar&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;../../components/ec-bar/index&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,13),t=[e];function c(E,r,y,i,u,F){return n(),a("div",null,t)}const q=s(o,[["render",c]]);export{d as __pageData,q as default};

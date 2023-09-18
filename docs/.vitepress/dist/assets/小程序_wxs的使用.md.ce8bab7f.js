import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b637c96f.js";const F=JSON.parse('{"title":"wxs的使用","description":"","frontmatter":{"title":"wxs的使用"},"headers":[],"relativePath":"小程序/wxs的使用.md","filePath":"小程序/wxs的使用.md","lastUpdated":1694660988000}'),p={name:"小程序/wxs的使用.md"},o=l(`<h1 id="wxs的使用" tabindex="-1">wxs的使用 <a class="header-anchor" href="#wxs的使用" aria-label="Permalink to &quot;wxs的使用&quot;">​</a></h1><h2 id="在wxml页面中引入wxs文件" tabindex="-1">在wxml页面中引入wxs文件 <a class="header-anchor" href="#在wxml页面中引入wxs文件" aria-label="Permalink to &quot;在wxml页面中引入wxs文件&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">wxs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;filters&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../../utils/addmul.wxs&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#FDAEB7;font-style:italic;">wxs</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">wxs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;filters&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../../utils/addmul.wxs&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#B31D28;font-style:italic;">wxs</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="保留两位小数" tabindex="-1">保留两位小数 <a class="header-anchor" href="#保留两位小数" aria-label="Permalink to &quot;保留两位小数&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{filters.toFix2(money)}}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{filters.toFix2(money)}}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="保留一位小数" tabindex="-1">保留一位小数 <a class="header-anchor" href="#保留一位小数" aria-label="Permalink to &quot;保留一位小数&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{filters.toFix1(money)}}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{filters.toFix1(money)}}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="保留整数" tabindex="-1">保留整数 <a class="header-anchor" href="#保留整数" aria-label="Permalink to &quot;保留整数&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;{{filters.toFix(money)}}&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;{{filters.toFix(money)}}&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="addmul-wxs" tabindex="-1">addmul.wxs <a class="header-anchor" href="#addmul-wxs" aria-label="Permalink to &quot;addmul.wxs&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> filters </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">toFix2</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(value).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//此处2为保留两位小数</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">toFix1</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(value).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//此处1为保留一位小数</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">toFix</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(value).</span><span style="color:#B392F0;">toFixed</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)</span><span style="color:#6A737D;">//此处0为取整数</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  toFix2: filters.toFix2,</span></span>
<span class="line"><span style="color:#E1E4E8;">  toFix1: filters.toFix1,</span></span>
<span class="line"><span style="color:#E1E4E8;">  toFix: filters.toFix</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> filters </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">toFix2</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(value).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//此处2为保留两位小数</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">toFix1</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(value).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//此处1为保留一位小数</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">toFix</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">value</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(value).</span><span style="color:#6F42C1;">toFixed</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)</span><span style="color:#6A737D;">//此处0为取整数</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  toFix2: filters.toFix2,</span></span>
<span class="line"><span style="color:#24292E;">  toFix1: filters.toFix1,</span></span>
<span class="line"><span style="color:#24292E;">  toFix: filters.toFix</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="当前页面使用wxs语法" tabindex="-1">当前页面使用wxs语法 <a class="header-anchor" href="#当前页面使用wxs语法" aria-label="Permalink to &quot;当前页面使用wxs语法&quot;">​</a></h2><h3 id="截取时间" tabindex="-1">截取时间 <a class="header-anchor" href="#截取时间" aria-label="Permalink to &quot;截取时间&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;{{time.sub(beginDate,5,10)}}至{{time.sub(endDate,5,10)}}&lt;/</span><span style="color:#FDAEB7;font-style:italic;">view</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">wxs</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">module</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;time&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  module.exports = {</span></span>
<span class="line"><span style="color:#E1E4E8;">    sub: function (val, start, end) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      if (val === undefined || val === &#39;&#39; || val == null) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        return;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      if (val.length &gt;= end) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        return val.substring(start, end);</span></span>
<span class="line"><span style="color:#E1E4E8;">      } else {</span></span>
<span class="line"><span style="color:#E1E4E8;">        return val;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#FDAEB7;font-style:italic;">wxs</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;{{time.sub(beginDate,5,10)}}至{{time.sub(endDate,5,10)}}&lt;/</span><span style="color:#B31D28;font-style:italic;">view</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">wxs</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">module</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;time&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  module.exports = {</span></span>
<span class="line"><span style="color:#24292E;">    sub: function (val, start, end) {</span></span>
<span class="line"><span style="color:#24292E;">      if (val === undefined || val === &#39;&#39; || val == null) {</span></span>
<span class="line"><span style="color:#24292E;">        return;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      if (val.length &gt;= end) {</span></span>
<span class="line"><span style="color:#24292E;">        return val.substring(start, end);</span></span>
<span class="line"><span style="color:#24292E;">      } else {</span></span>
<span class="line"><span style="color:#24292E;">        return val;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#B31D28;font-style:italic;">wxs</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,14),t=[o];function e(c,r,E,i,y,d){return a(),n("div",null,t)}const h=s(p,[["render",e]]);export{F as __pageData,h as default};

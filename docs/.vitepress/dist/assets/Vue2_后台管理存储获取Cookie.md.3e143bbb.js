import{_ as s,o as n,c as a,Q as o}from"./chunks/framework.b637c96f.js";const C=JSON.parse('{"title":"后台管理存储获取Cookie","description":"","frontmatter":{"title":"后台管理存储获取Cookie"},"headers":[],"relativePath":"Vue2/后台管理存储获取Cookie.md","filePath":"Vue2/后台管理存储获取Cookie.md","lastUpdated":1694660988000}'),l={name:"Vue2/后台管理存储获取Cookie.md"},p=o(`<h1 id="后台管理存储获取cookie" tabindex="-1">后台管理存储获取Cookie <a class="header-anchor" href="#后台管理存储获取cookie" aria-label="Permalink to &quot;后台管理存储获取Cookie&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">js-cookie</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">js-cookie</span></span></code></pre></div><h2 id="封装" tabindex="-1">封装 <a class="header-anchor" href="#封装" aria-label="Permalink to &quot;封装&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// utils/auth.js</span></span>
<span class="line"><span style="color:#6A737D;">// 引入 js-cookie包</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Cookies </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;js-cookie&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置Cookie</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setCookie</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">TokenKey</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (time) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(TokenKey, value, { expires: </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Date</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">getTime</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> time) })</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(TokenKey, value)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取Cookie</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCookie</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">TokenKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(TokenKey)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除Cookie</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">removeCookie</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">TokenKey</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> Cookies.</span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;">(TokenKey)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// utils/auth.js</span></span>
<span class="line"><span style="color:#6A737D;">// 引入 js-cookie包</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Cookies </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;js-cookie&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置Cookie</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setCookie</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">TokenKey</span><span style="color:#24292E;">, </span><span style="color:#E36209;">value</span><span style="color:#24292E;">, </span><span style="color:#E36209;">time</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (time) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(TokenKey, value, { expires: </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Date</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">getTime</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> time) })</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(TokenKey, value)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取Cookie</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCookie</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">TokenKey</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(TokenKey)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 移除Cookie</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">removeCookie</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">TokenKey</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> Cookies.</span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;">(TokenKey)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="调用" tabindex="-1">调用 <a class="header-anchor" href="#调用" aria-label="Permalink to &quot;调用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 其他页面调用</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { setCookie, getCookie, removeCookie } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/auth&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取Cookie</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Token</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCookie</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;sddatok&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置Cookie</span></span>
<span class="line"><span style="color:#B392F0;">setCookie</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">,data.refresh_token)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 清除Cookie</span></span>
<span class="line"><span style="color:#B392F0;">logout</span><span style="color:#E1E4E8;"> ({ commit, rootState }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">removeCookie</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Token&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">resetRouter</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 其他页面调用</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { setCookie, getCookie, removeCookie } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/auth&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取Cookie</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Token</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCookie</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;sddatok&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 设置Cookie</span></span>
<span class="line"><span style="color:#6F42C1;">setCookie</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;token&#39;</span><span style="color:#24292E;">,data.refresh_token)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 清除Cookie</span></span>
<span class="line"><span style="color:#6F42C1;">logout</span><span style="color:#24292E;"> ({ commit, rootState }) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">removeCookie</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Token&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">resetRouter</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,6),e=[p];function t(c,r,y,E,i,k){return n(),a("div",null,e)}const d=s(l,[["render",t]]);export{C as __pageData,d as default};

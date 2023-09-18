import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.b637c96f.js";const l="/Vue2/浏览器加载进度条.gif",u=JSON.parse('{"title":"浏览器加载进度条","description":"","frontmatter":{"title":"浏览器加载进度条"},"headers":[],"relativePath":"Vue2/浏览器加载进度条.md","filePath":"Vue2/浏览器加载进度条.md","lastUpdated":1694660988000}'),o={name:"Vue2/浏览器加载进度条.md"},e=p('<h1 id="浏览器加载进度条" tabindex="-1">浏览器加载进度条 <a class="header-anchor" href="#浏览器加载进度条" aria-label="Permalink to &quot;浏览器加载进度条&quot;">​</a></h1><p><img src="'+l+`" alt="" data-fancybox="gallery"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;nprogress.js&#39;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">rel</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;stylesheet&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">href</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&#39;nprogress.css&#39;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;nprogress.js&#39;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">rel</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;stylesheet&#39;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">href</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&#39;nprogress.css&#39;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><p>或</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--save</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nprogress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--save</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nprogress</span></span></code></pre></div><h2 id="引用" tabindex="-1">引用 <a class="header-anchor" href="#引用" aria-label="Permalink to &quot;引用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NProgress </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Progress 进度条</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress/nprogress.css&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// Progress 进度条样式</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NProgress </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Progress 进度条</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress/nprogress.css&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// Progress 进度条样式</span></span></code></pre></div><h2 id="全局引用" tabindex="-1">全局引用 <a class="header-anchor" href="#全局引用" aria-label="Permalink to &quot;全局引用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//引入nprogress 进度条插件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NProgress </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress/nprogress.css&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 配置进度条参数 showSpinner：进度环，minimum：最小百分比，ease：动画和速度，trickleRate：每次步进增长多少</span></span>
<span class="line"><span style="color:#E1E4E8;">NProgress.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({ showSpinner: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, minimum: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, easeing: </span><span style="color:#9ECBFF;">&#39;swing&#39;</span><span style="color:#E1E4E8;">, speed: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, trickleRate: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;"> })</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">//引入nprogress 进度条插件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NProgress </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress/nprogress.css&#39;</span></span>
<span class="line"><span style="color:#6A737D;">// 配置进度条参数 showSpinner：进度环，minimum：最小百分比，ease：动画和速度，trickleRate：每次步进增长多少</span></span>
<span class="line"><span style="color:#24292E;">NProgress.</span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">({ showSpinner: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, minimum: </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">, easeing: </span><span style="color:#032F62;">&#39;swing&#39;</span><span style="color:#24292E;">, speed: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, trickleRate: </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;"> })</span></span></code></pre></div><h2 id="进度条颜色" tabindex="-1">进度条颜色 <a class="header-anchor" href="#进度条颜色" aria-label="Permalink to &quot;进度条颜色&quot;">​</a></h2><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">// APP</span><span style="color:#B392F0;">.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 顶部进度条颜色</span></span>
<span class="line"><span style="color:#B392F0;">#nprogress</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">.bar</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">background</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">#2d9</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!important</span><span style="color:#E1E4E8;">; }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">// APP</span><span style="color:#6F42C1;">.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 顶部进度条颜色</span></span>
<span class="line"><span style="color:#6F42C1;">#nprogress</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">.bar</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">background</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">#2d9</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!important</span><span style="color:#24292E;">; }</span></span></code></pre></div><h2 id="调用接口时使用" tabindex="-1">调用接口时使用 <a class="header-anchor" href="#调用接口时使用" aria-label="Permalink to &quot;调用接口时使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// api/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NProgress </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress/nprogress.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置进度条参数 showSpinner：进度环，minimum：最小百分比，ease：动画和速度，trickleRate：每次步进增长多少</span></span>
<span class="line"><span style="color:#E1E4E8;">NProgress.</span><span style="color:#B392F0;">configure</span><span style="color:#E1E4E8;">({ showSpinner: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, minimum: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;">, easeing: </span><span style="color:#9ECBFF;">&#39;swing&#39;</span><span style="color:#E1E4E8;">, speed: </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">, trickleRate: </span><span style="color:#79B8FF;">0.2</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 防止多次请求进度条重复加载</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> loadingNum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">startLoading</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (loadingNum </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    NProgress.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  loadingNum</span><span style="color:#F97583;">++</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">endLoading</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  loadingNum</span><span style="color:#F97583;">--</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (loadingNum </span><span style="color:#F97583;">&lt;=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    NProgress.</span><span style="color:#B392F0;">done</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建axios实例</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">service</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    baseURL: p<wbr>rocess.env.</span><span style="color:#79B8FF;">VUE_APP_BASE_API</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//URL地址   环境变量文件</span></span>
<span class="line"><span style="color:#E1E4E8;">    timeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;"> ,</span><span style="color:#6A737D;">//超时</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求拦截器</span></span>
<span class="line"><span style="color:#E1E4E8;">service.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#6A737D;">// 开启进度条</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">startLoading</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应拦截器</span></span>
<span class="line"><span style="color:#E1E4E8;">service.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 关闭进度条</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">endLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    	</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(response)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 关闭进度条</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">endLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> service;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// api/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NProgress </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress/nprogress.css&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 配置进度条参数 showSpinner：进度环，minimum：最小百分比，ease：动画和速度，trickleRate：每次步进增长多少</span></span>
<span class="line"><span style="color:#24292E;">NProgress.</span><span style="color:#6F42C1;">configure</span><span style="color:#24292E;">({ showSpinner: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, minimum: </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;">, easeing: </span><span style="color:#032F62;">&#39;swing&#39;</span><span style="color:#24292E;">, speed: </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">, trickleRate: </span><span style="color:#005CC5;">0.2</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 防止多次请求进度条重复加载</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> loadingNum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">startLoading</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (loadingNum </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    NProgress.</span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  loadingNum</span><span style="color:#D73A49;">++</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">endLoading</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  loadingNum</span><span style="color:#D73A49;">--</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (loadingNum </span><span style="color:#D73A49;">&lt;=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    NProgress.</span><span style="color:#6F42C1;">done</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建axios实例</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">service</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    baseURL: p<wbr>rocess.env.</span><span style="color:#005CC5;">VUE_APP_BASE_API</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//URL地址   环境变量文件</span></span>
<span class="line"><span style="color:#24292E;">    timeout: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;"> ,</span><span style="color:#6A737D;">//超时</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求拦截器</span></span>
<span class="line"><span style="color:#24292E;">service.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#6A737D;">// 开启进度条</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">startLoading</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应拦截器</span></span>
<span class="line"><span style="color:#24292E;">service.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">response</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 关闭进度条</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">endLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    	</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(response)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">error</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 关闭进度条</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">endLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> service;</span></span></code></pre></div><h2 id="在路由切换中使用" tabindex="-1">在路由切换中使用 <a class="header-anchor" href="#在路由切换中使用" aria-label="Permalink to &quot;在路由切换中使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> VueRouter </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> NProgress </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nprogress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Vue.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(VueRouter);</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">constRouter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;/login&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/login/Login&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">VueRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    mode: </span><span style="color:#9ECBFF;">&#39;history&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: p<wbr>rocess.env.</span><span style="color:#79B8FF;">BASE_URL</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    routes: constRouter</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 页面路由刚开始切换的时候</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">beforeEach</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">next</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 开启进度条</span></span>
<span class="line"><span style="color:#E1E4E8;">    NProgress.</span><span style="color:#B392F0;">start</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 页面路由切换完毕的时候</span></span>
<span class="line"><span style="color:#E1E4E8;">router.</span><span style="color:#B392F0;">afterEach</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 关闭进度条</span></span>
<span class="line"><span style="color:#E1E4E8;">    NProgress.</span><span style="color:#B392F0;">done</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> VueRouter </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> NProgress </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nprogress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Vue.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(VueRouter);</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">constRouter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/login/Login&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">VueRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    mode: </span><span style="color:#032F62;">&#39;history&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    base: p<wbr>rocess.env.</span><span style="color:#005CC5;">BASE_URL</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    routes: constRouter</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 页面路由刚开始切换的时候</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">to</span><span style="color:#24292E;">,</span><span style="color:#E36209;">from</span><span style="color:#24292E;">,</span><span style="color:#E36209;">next</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 开启进度条</span></span>
<span class="line"><span style="color:#24292E;">    NProgress.</span><span style="color:#6F42C1;">start</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#6A737D;">// 页面路由切换完毕的时候</span></span>
<span class="line"><span style="color:#24292E;">router.</span><span style="color:#6F42C1;">afterEach</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 关闭进度条</span></span>
<span class="line"><span style="color:#24292E;">    NProgress.</span><span style="color:#6F42C1;">done</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router</span></span></code></pre></div>`,16),r=[e];function c(t,E,y,i,F,g){return n(),a("div",null,r)}const h=s(o,[["render",c]]);export{u as __pageData,h as default};

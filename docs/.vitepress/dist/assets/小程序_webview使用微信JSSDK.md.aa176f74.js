import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const d=JSON.parse('{"title":"webview使用微信JSSDK","description":"","frontmatter":{"title":"webview使用微信JSSDK"},"headers":[],"relativePath":"小程序/webview使用微信JSSDK.md","filePath":"小程序/webview使用微信JSSDK.md","lastUpdated":1694660988000}'),p={name:"小程序/webview使用微信JSSDK.md"},o=l(`<h1 id="webview使用微信jssdk" tabindex="-1">webview使用微信JSSDK <a class="header-anchor" href="#webview使用微信jssdk" aria-label="Permalink to &quot;webview使用微信JSSDK&quot;">​</a></h1><ul><li>在小程序webview中使用微信JSSDK -- 初始化配置与获取定位例子</li><li>wx.getLocation()</li><li>微信小程序必须是企业认证的</li></ul><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><ul><li><p>ios调用wx.config时当前域名最好是跳转到 webview 时的链接地址，不能有任何改变，否则会报错invalid url domain</p></li><li><p>安卓则需要使用当前的实际路由作为链接，所以需要在当前页面的 created 中调用 wx.config</p></li></ul><h2 id="步骤一" tabindex="-1">步骤一 <a class="header-anchor" href="#步骤一" aria-label="Permalink to &quot;步骤一&quot;">​</a></h2><ul><li>绑定域名</li></ul><p>首先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。</p><h2 id="步骤二" tabindex="-1">步骤二 <a class="header-anchor" href="#步骤二" aria-label="Permalink to &quot;步骤二&quot;">​</a></h2><ul><li>引入JS文件</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">weixin-js-sdk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">//</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">在你所需页面的代码里导入</span></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;weixin-js-sdk&quot;</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">weixin-js-sdk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">//</span><span style="color:#24292E;"> </span><span style="color:#032F62;">在你所需页面的代码里导入</span></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;weixin-js-sdk&quot;</span><span style="color:#24292E;">;</span></span></code></pre></div><h2 id="步骤三" tabindex="-1">步骤三 <a class="header-anchor" href="#步骤三" aria-label="Permalink to &quot;步骤三&quot;">​</a></h2><ul><li>通过 config 接口注入权限验证配置</li><li>出于安全考虑，开发者必须在服务端实现签名逻辑，所以在前端人员开发过程中，不需要去关心这3个字段怎么来的，只需要去调用接口获取。</li><li>timestamp、nonceStr、signature</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 配置说明</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化config</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> async </span><span style="color:#B392F0;">goWxConfig</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;执行注册微信config&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">try</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> res </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getJsSdkSignatureApi</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      appid: </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">..,</span></span>
<span class="line"><span style="color:#E1E4E8;">      url: </span><span style="color:#B392F0;">encodeURIComponent</span><span style="color:#E1E4E8;">(window.location.href.</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#&#39;</span><span style="color:#E1E4E8;">)[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">]) </span><span style="color:#6A737D;">// 一定要处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (res.result) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      wx.</span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        debug: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。</span></span>
<span class="line"><span style="color:#E1E4E8;">        appId: </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">.., </span><span style="color:#6A737D;">// 必填，公众号的唯一标识</span></span>
<span class="line"><span style="color:#E1E4E8;">        timestamp: res.result.timeStamp, </span><span style="color:#6A737D;">// 必填，生成签名的时间戳</span></span>
<span class="line"><span style="color:#E1E4E8;">        nonceStr: res.result.noncestr, </span><span style="color:#6A737D;">// 必填，生成签名的随机串</span></span>
<span class="line"><span style="color:#E1E4E8;">        signature: res.result.signature, </span><span style="color:#6A737D;">// 必填，签名</span></span>
<span class="line"><span style="color:#E1E4E8;">        jsApiList: [</span><span style="color:#9ECBFF;">&quot;getLocation&quot;</span><span style="color:#E1E4E8;">] </span><span style="color:#6A737D;">// 必填，需要使用的JS接口列表</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">ready</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;wx ready&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;wx error&quot;</span><span style="color:#E1E4E8;">, err);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// config信息验证失败会执行 error 函数，如签名过期导致验证失败，具体错误信息可以打开 config 的debug模式查看，也可以在返回的 res 参数中查看，对于 SPA 可以在这里更新签名。</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#F97583;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">warn</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;微信config报错：&quot;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 配置说明</span></span>
<span class="line"><span style="color:#6A737D;">// 初始化config</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> async </span><span style="color:#6F42C1;">goWxConfig</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;执行注册微信config&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">try</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> res </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getJsSdkSignatureApi</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      appid: </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">..,</span></span>
<span class="line"><span style="color:#24292E;">      url: </span><span style="color:#6F42C1;">encodeURIComponent</span><span style="color:#24292E;">(window.location.href.</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#&#39;</span><span style="color:#24292E;">)[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">]) </span><span style="color:#6A737D;">// 一定要处理</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (res.result) {</span></span>
<span class="line"><span style="color:#24292E;">      wx.</span><span style="color:#6F42C1;">config</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        debug: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。</span></span>
<span class="line"><span style="color:#24292E;">        appId: </span><span style="color:#D73A49;">...</span><span style="color:#24292E;">.., </span><span style="color:#6A737D;">// 必填，公众号的唯一标识</span></span>
<span class="line"><span style="color:#24292E;">        timestamp: res.result.timeStamp, </span><span style="color:#6A737D;">// 必填，生成签名的时间戳</span></span>
<span class="line"><span style="color:#24292E;">        nonceStr: res.result.noncestr, </span><span style="color:#6A737D;">// 必填，生成签名的随机串</span></span>
<span class="line"><span style="color:#24292E;">        signature: res.result.signature, </span><span style="color:#6A737D;">// 必填，签名</span></span>
<span class="line"><span style="color:#24292E;">        jsApiList: [</span><span style="color:#032F62;">&quot;getLocation&quot;</span><span style="color:#24292E;">] </span><span style="color:#6A737D;">// 必填，需要使用的JS接口列表</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">ready</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;wx ready&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;wx error&quot;</span><span style="color:#24292E;">, err);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// config信息验证失败会执行 error 函数，如签名过期导致验证失败，具体错误信息可以打开 config 的debug模式查看，也可以在返回的 res 参数中查看，对于 SPA 可以在这里更新签名。</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#D73A49;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">warn</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;微信config报错：&quot;</span><span style="color:#24292E;">, error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h1 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h1><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 获取定位</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;执行微信定位api&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config是一个客户端的异步操作</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// wx.ready(function () {});</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">resolve</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">reject</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: </span><span style="color:#9ECBFF;">&#39;wgs84&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入&#39;gcj02&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// var speed = res.speed; // 速度，以米/每秒计</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// var accuracy = res.accuracy; // 位置精度</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;成功获取定位数据：&quot;</span><span style="color:#E1E4E8;">, res);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(res);</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;获取定位位置信息失败：&quot;</span><span style="color:#E1E4E8;">, err);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">Toast</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;获取定位位置信息失败：&quot;</span><span style="color:#E1E4E8;">, err);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">cancel</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;用户拒绝授权获取地理位置：&#39;</span><span style="color:#E1E4E8;">, err);</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 获取定位</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;执行微信定位api&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// config信息验证后会执行 ready 方法，所有接口调用都必须在 config 接口获得结果之后，config是一个客户端的异步操作</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 所以如果需要在页面加载时就调用相关接口，则须把相关接口放在 ready 函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在 ready 函数中。</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// wx.ready(function () {});</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">((</span><span style="color:#E36209;">resolve</span><span style="color:#24292E;">, </span><span style="color:#E36209;">reject</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      type: </span><span style="color:#032F62;">&#39;wgs84&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 默认为wgs84的 gps 坐标，如果要返回直接给 openLocation 用的火星坐标，可传入&#39;gcj02&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// var speed = res.speed; // 速度，以米/每秒计</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// var accuracy = res.accuracy; // 位置精度</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;成功获取定位数据：&quot;</span><span style="color:#24292E;">, res);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(res);</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;获取定位位置信息失败：&quot;</span><span style="color:#24292E;">, err);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">Toast</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;获取定位位置信息失败：&quot;</span><span style="color:#24292E;">, err);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">cancel</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;用户拒绝授权获取地理位置：&#39;</span><span style="color:#24292E;">, err);</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><ul><li>在vue页面调用</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 页面vue文件中中使用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">ua</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> window.navigator.userAgent.</span><span style="color:#B392F0;">toLowerCase</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#9ECBFF;">/</span><span style="color:#DBEDFF;">iphone</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ipad</span><span style="color:#F97583;">|</span><span style="color:#DBEDFF;">ipod</span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(ua)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 执行后续代码</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">    .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 报错</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">} </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">goWxConfig</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">// 执行wx.config</span></span>
<span class="line"><span style="color:#E1E4E8;">  wx.</span><span style="color:#B392F0;">ready</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getLocation</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 执行后续代码</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 报错</span></span>
<span class="line"><span style="color:#E1E4E8;">        });</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 页面vue文件中中使用</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">ua</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> window.navigator.userAgent.</span><span style="color:#6F42C1;">toLowerCase</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">/iphone</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ipad</span><span style="color:#D73A49;">|</span><span style="color:#032F62;">ipod/</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(ua)) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 执行后续代码</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">    .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 报错</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">} </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">goWxConfig</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">// 执行wx.config</span></span>
<span class="line"><span style="color:#24292E;">  wx.</span><span style="color:#6F42C1;">ready</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getLocation</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 执行后续代码</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 报错</span></span>
<span class="line"><span style="color:#24292E;">        });</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,17),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const g=s(p,[["render",c]]);export{d as __pageData,g as default};

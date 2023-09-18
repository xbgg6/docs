import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const p="/小程序/websocket封装.png",C=JSON.parse('{"title":"websocket简单封装","description":"","frontmatter":{"title":"websocket简单封装"},"headers":[],"relativePath":"小程序/websocket简单封装.md","filePath":"小程序/websocket简单封装.md","lastUpdated":1694660988000}'),o={name:"小程序/websocket简单封装.md"},e=l('<h1 id="websocket简单封装" tabindex="-1">websocket简单封装 <a class="header-anchor" href="#websocket简单封装" aria-label="Permalink to &quot;websocket简单封装&quot;">​</a></h1><ul><li>封装websocket,创建websocket.js</li></ul><h2 id="微信公众平台设置websocket生产地址" tabindex="-1">微信公众平台设置websocket生产地址 <a class="header-anchor" href="#微信公众平台设置websocket生产地址" aria-label="Permalink to &quot;微信公众平台设置websocket生产地址&quot;">​</a></h2><p><img src="'+p+`" alt="" data-fancybox="gallery"></p><h2 id="app-js" tabindex="-1">app.js <a class="header-anchor" href="#app-js" aria-label="Permalink to &quot;app.js&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// app.js</span></span>
<span class="line"><span style="color:#B392F0;">App</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  globalData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 是否连接过webSocket</span></span>
<span class="line"><span style="color:#E1E4E8;">    socketOpen: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// app.js</span></span>
<span class="line"><span style="color:#6F42C1;">App</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  globalData: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 是否连接过webSocket</span></span>
<span class="line"><span style="color:#24292E;">    socketOpen: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="utils-websocket-js" tabindex="-1">utils/websocket.js <a class="header-anchor" href="#utils-websocket-js" aria-label="Permalink to &quot;utils/websocket.js&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// utils/websocket.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getApp</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#6A737D;">//websocket服务器baseUrl</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> webSocketUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">env</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> __wxConfig.envVersion;</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(env </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;release&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 生产地址 （注意域名规则！！！）</span></span>
<span class="line"><span style="color:#E1E4E8;">  webSocketUrl </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;wss://xxxxxxx.cn/ws&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> SocketTask </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#F97583;">@param</span><span style="color:#6A737D;"> </span><span style="color:#E1E4E8;">reMsg</span><span style="color:#6A737D;">: 传入一个函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ws_connect</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">reMsg</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  SocketTask </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> wx.</span><span style="color:#B392F0;">connectSocket</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">\`\${</span><span style="color:#E1E4E8;">webSocketUrl</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    header: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;content-type&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">  wx.</span><span style="color:#B392F0;">showLoading</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;连接中&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 开启连接</span></span>
<span class="line"><span style="color:#E1E4E8;">  SocketTask.</span><span style="color:#B392F0;">onOpen</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.globalData.socketOpen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebSocket连接已打开&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 关闭连接</span></span>
<span class="line"><span style="color:#E1E4E8;">  SocketTask.</span><span style="color:#B392F0;">onClose</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">onClose</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.globalData.socketOpen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebSocket连接已关闭。&#39;</span><span style="color:#E1E4E8;">, onClose)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(onClose?.code </span><span style="color:#F97583;">!==</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;WebSocket连接已关闭&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        content: </span><span style="color:#9ECBFF;">\`错误码\${</span><span style="color:#E1E4E8;">onClose</span><span style="color:#9ECBFF;">?.</span><span style="color:#E1E4E8;">code</span><span style="color:#9ECBFF;"> </span><span style="color:#F97583;">||</span><span style="color:#9ECBFF;"> </span><span style="color:#E1E4E8;">onClose</span><span style="color:#9ECBFF;">?.</span><span style="color:#E1E4E8;">reason</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        showCancel: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        confirmColor: </span><span style="color:#9ECBFF;">&#39;#1dceb2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(res.confirm) {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">successCallback</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 报错</span></span>
<span class="line"><span style="color:#E1E4E8;">  SocketTask.</span><span style="color:#B392F0;">onError</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">onError</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.globalData.socketOpen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    wx.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;WebSocket错误&#39;</span><span style="color:#E1E4E8;">, onError)</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 收到消息</span></span>
<span class="line"><span style="color:#E1E4E8;">  SocketTask.</span><span style="color:#B392F0;">onMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">onMessage</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">parse</span><span style="color:#E1E4E8;">(onMessage.data)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">reMsg</span><span style="color:#E1E4E8;">(data);</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sendMsg</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">msg</span><span style="color:#E1E4E8;">,</span><span style="color:#FFAB70;">success</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (app.globalData.socketOpen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;通过 WebSocket 连接发送数据&#39;</span><span style="color:#E1E4E8;">, msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">    SocketTask.</span><span style="color:#B392F0;">send</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      data: </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(msg)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }, </span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(res)</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 关闭连接</span></span>
<span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">closeWebSocket</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(app.globalData.socketOpen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SocketTask.</span><span style="color:#B392F0;">close</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    SocketTask </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span></span>
<span class="line"><span style="color:#E1E4E8;">    app.globalData.socketOpen </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.ws_connect </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> ws_connect;</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.sendMsg </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sendMsg;</span></span>
<span class="line"><span style="color:#79B8FF;">module</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">exports</span><span style="color:#E1E4E8;">.closeWebSocket </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> closeWebSocket;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// utils/websocket.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getApp</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#6A737D;">//websocket服务器baseUrl</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> webSocketUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">env</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> __wxConfig.envVersion;</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(env </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;release&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 生产地址 （注意域名规则！！！）</span></span>
<span class="line"><span style="color:#24292E;">  webSocketUrl </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;wss://xxxxxxx.cn/ws&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> SocketTask </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;"> * </span><span style="color:#D73A49;">@param</span><span style="color:#6A737D;"> </span><span style="color:#24292E;">reMsg</span><span style="color:#6A737D;">: 传入一个函数</span></span>
<span class="line"><span style="color:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ws_connect</span><span style="color:#24292E;">(</span><span style="color:#E36209;">reMsg</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  SocketTask </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> wx.</span><span style="color:#6F42C1;">connectSocket</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">\`\${</span><span style="color:#24292E;">webSocketUrl</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    header: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;content-type&#39;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;application/json&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">  wx.</span><span style="color:#6F42C1;">showLoading</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;连接中&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 开启连接</span></span>
<span class="line"><span style="color:#24292E;">  SocketTask.</span><span style="color:#6F42C1;">onOpen</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    app.globalData.socketOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;WebSocket连接已打开&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 关闭连接</span></span>
<span class="line"><span style="color:#24292E;">  SocketTask.</span><span style="color:#6F42C1;">onClose</span><span style="color:#24292E;">(</span><span style="color:#E36209;">onClose</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    app.globalData.socketOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;WebSocket连接已关闭。&#39;</span><span style="color:#24292E;">, onClose)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(onClose?.code </span><span style="color:#D73A49;">!==</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      wx.</span><span style="color:#6F42C1;">showModal</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;WebSocket连接已关闭&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        content: </span><span style="color:#032F62;">\`错误码\${</span><span style="color:#24292E;">onClose</span><span style="color:#032F62;">?.</span><span style="color:#24292E;">code</span><span style="color:#032F62;"> </span><span style="color:#D73A49;">||</span><span style="color:#032F62;"> </span><span style="color:#24292E;">onClose</span><span style="color:#032F62;">?.</span><span style="color:#24292E;">reason</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        showCancel: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        confirmColor: </span><span style="color:#032F62;">&#39;#1dceb2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(res.confirm) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">successCallback</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 报错</span></span>
<span class="line"><span style="color:#24292E;">  SocketTask.</span><span style="color:#6F42C1;">onError</span><span style="color:#24292E;">(</span><span style="color:#E36209;">onError</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    app.globalData.socketOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    wx.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;WebSocket错误&#39;</span><span style="color:#24292E;">, onError)</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 收到消息</span></span>
<span class="line"><span style="color:#24292E;">  SocketTask.</span><span style="color:#6F42C1;">onMessage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">onMessage</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">parse</span><span style="color:#24292E;">(onMessage.data)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">reMsg</span><span style="color:#24292E;">(data);</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 发送</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sendMsg</span><span style="color:#24292E;">(</span><span style="color:#E36209;">msg</span><span style="color:#24292E;">,</span><span style="color:#E36209;">success</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (app.globalData.socketOpen) {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;通过 WebSocket 连接发送数据&#39;</span><span style="color:#24292E;">, msg)</span></span>
<span class="line"><span style="color:#24292E;">    SocketTask.</span><span style="color:#6F42C1;">send</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      data: </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(msg)</span></span>
<span class="line"><span style="color:#24292E;">    }, </span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(res)</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 关闭连接</span></span>
<span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">closeWebSocket</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(app.globalData.socketOpen) {</span></span>
<span class="line"><span style="color:#24292E;">    SocketTask.</span><span style="color:#6F42C1;">close</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    SocketTask </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span></span>
<span class="line"><span style="color:#24292E;">    app.globalData.socketOpen </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.ws_connect </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> ws_connect;</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.sendMsg </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sendMsg;</span></span>
<span class="line"><span style="color:#005CC5;">module</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">exports</span><span style="color:#24292E;">.closeWebSocket </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> closeWebSocket;</span></span></code></pre></div><h2 id="其他页面调用" tabindex="-1">其他页面调用 <a class="header-anchor" href="#其他页面调用" aria-label="Permalink to &quot;其他页面调用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 引入封装的websocket.js</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">websocket</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../../utils/websocket&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 连接WebSocket</span></span>
<span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">app.globalData.socketOpen) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    websocket.</span><span style="color:#B392F0;">ws_connect</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(data </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;连接成功&#39;</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">//websocket发送消息</span></span>
<span class="line"><span style="color:#E1E4E8;">            websocket.</span><span style="color:#B392F0;">sendMsg</span><span style="color:#E1E4E8;">(res, (</span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {})</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结束WebSocket连接</span></span>
<span class="line"><span style="color:#E1E4E8;">websocket.</span><span style="color:#B392F0;">closeWebSocket</span><span style="color:#E1E4E8;">()</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// index.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 引入封装的websocket.js</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">websocket</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../../utils/websocket&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 连接WebSocket</span></span>
<span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">app.globalData.socketOpen) {</span></span>
<span class="line"><span style="color:#24292E;">    websocket.</span><span style="color:#6F42C1;">ws_connect</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(data </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;连接成功&#39;</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">//websocket发送消息</span></span>
<span class="line"><span style="color:#24292E;">            websocket.</span><span style="color:#6F42C1;">sendMsg</span><span style="color:#24292E;">(res, (</span><span style="color:#E36209;">data</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {})</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 结束WebSocket连接</span></span>
<span class="line"><span style="color:#24292E;">websocket.</span><span style="color:#6F42C1;">closeWebSocket</span><span style="color:#24292E;">()</span></span></code></pre></div>`,10),c=[e];function t(r,E,y,i,F,k){return n(),a("div",null,c)}const b=s(o,[["render",t]]);export{C as __pageData,b as default};

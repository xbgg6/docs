import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const p="/小程序/vant获取手机号按钮组件.png",h=JSON.parse('{"title":"vant获取手机号按钮封装","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":":","6":"v","7":"a","8":"n","9":"t","10":"获","11":"取","12":"手","13":"机","14":"号","15":"按","16":"钮","17":"封","18":"装"},"headers":[],"relativePath":"小程序/vant获取手机号按钮组件.md","filePath":"小程序/vant获取手机号按钮组件.md","lastUpdated":1694660988000}'),o={name:"小程序/vant获取手机号按钮组件.md"},e=l('<h1 id="vant获取手机号按钮封装" tabindex="-1">vant获取手机号按钮封装 <a class="header-anchor" href="#vant获取手机号按钮封装" aria-label="Permalink to &quot;vant获取手机号按钮封装&quot;">​</a></h1><p><img src="'+p+`" alt="" data-fancybox="gallery"></p><h2 id="组件封装" tabindex="-1">组件封装 <a class="header-anchor" href="#组件封装" aria-label="Permalink to &quot;组件封装&quot;">​</a></h2><h3 id="index-wxml" tabindex="-1">index.wxml <a class="header-anchor" href="#index-wxml" aria-label="Permalink to &quot;index.wxml&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;</span><span style="color:#E1E4E8;">-- index.wxml --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">van-button</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;#09b492&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">custom-style</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;width:170rpx;height:68rpx;font-weight:500;font-size:32rpx&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">open-type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getPhoneNumber&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">bind:getphonenumber</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getPhoneNumber&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;自动获取</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">van-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;font-style:italic;">&lt;</span><span style="color:#24292E;">-- index.wxml --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">van-button</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;#09b492&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">custom-style</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;width:170rpx;height:68rpx;font-weight:500;font-size:32rpx&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">open-type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getPhoneNumber&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">bind:getphonenumber</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getPhoneNumber&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;自动获取</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">van-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="index-js" tabindex="-1">index.js <a class="header-anchor" href="#index-js" aria-label="Permalink to &quot;index.js&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// index.js</span></span>
<span class="line"><span style="color:#B392F0;">Component</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//组件的属性列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  properties: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//组件的初始数据</span></span>
<span class="line"><span style="color:#E1E4E8;">  data: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    code: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    pending: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    mobile: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  lifetimes: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 在组件实例进入页面节点树时执行</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">attached</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      wx.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            code: res.code,</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//组件的方法列表</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">getPhoneNumber</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.pending) </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      wx.</span><span style="color:#B392F0;">showLoading</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;加载中&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        mask: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({pending: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">encryptedData</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">iv</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> e.detail</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          encryptedData,</span></span>
<span class="line"><span style="color:#E1E4E8;">          iv,</span></span>
<span class="line"><span style="color:#E1E4E8;">          code: </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.code,</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//此处的request请求经过封装</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">request</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/api/xxxxxxxx&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;GET&#39;</span><span style="color:#E1E4E8;">, params)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({pending: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;">(res </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> res.data.success) {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              mobile: res.data.data.phoneNumber,</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">triggerEvent</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;getMobile&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.data.mobile)</span></span>
<span class="line"><span style="color:#E1E4E8;">          } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            wx.</span><span style="color:#B392F0;">login</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">                  code: res.code,</span></span>
<span class="line"><span style="color:#E1E4E8;">                })</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.getPhoneNumber</span></span>
<span class="line"><span style="color:#E1E4E8;">              },</span></span>
<span class="line"><span style="color:#E1E4E8;">            })</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.request</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.</span><span style="color:#B392F0;">hideLoading</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({pending: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#E1E4E8;">          wx.</span><span style="color:#B392F0;">showModal</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">            title: </span><span style="color:#9ECBFF;">&#39;提示&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            content: </span><span style="color:#9ECBFF;">&#39;手机号获取失败&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            showCancel:</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            confirmColor: </span><span style="color:#9ECBFF;">&#39;#1dceb2&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// index.js</span></span>
<span class="line"><span style="color:#6F42C1;">Component</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//组件的属性列表</span></span>
<span class="line"><span style="color:#24292E;">  properties: {},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//组件的初始数据</span></span>
<span class="line"><span style="color:#24292E;">  data: {</span></span>
<span class="line"><span style="color:#24292E;">    code: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    pending: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    mobile: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  lifetimes: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 在组件实例进入页面节点树时执行</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">attached</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      wx.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            code: res.code,</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//组件的方法列表</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">getPhoneNumber</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data.pending) </span><span style="color:#D73A49;">return</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      wx.</span><span style="color:#6F42C1;">showLoading</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;加载中&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        mask: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({pending: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">encryptedData</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">iv</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> e.detail</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          encryptedData,</span></span>
<span class="line"><span style="color:#24292E;">          iv,</span></span>
<span class="line"><span style="color:#24292E;">          code: </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data.code,</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//此处的request请求经过封装</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">request</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/api/xxxxxxxx&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;GET&#39;</span><span style="color:#24292E;">, params)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          wx.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({pending: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#D73A49;">if</span><span style="color:#24292E;">(res </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> res.data.success) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">              mobile: res.data.data.phoneNumber,</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">triggerEvent</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;getMobile&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.data.mobile)</span></span>
<span class="line"><span style="color:#24292E;">          } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            wx.</span><span style="color:#6F42C1;">login</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">                  code: res.code,</span></span>
<span class="line"><span style="color:#24292E;">                })</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.getPhoneNumber</span></span>
<span class="line"><span style="color:#24292E;">              },</span></span>
<span class="line"><span style="color:#24292E;">            })</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">          wx.request</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;">(</span><span style="color:#E36209;">err</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">          wx.</span><span style="color:#6F42C1;">hideLoading</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({pending: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#24292E;">          wx.</span><span style="color:#6F42C1;">showModal</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">            title: </span><span style="color:#032F62;">&#39;提示&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            content: </span><span style="color:#032F62;">&#39;手机号获取失败&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            showCancel:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            confirmColor: </span><span style="color:#032F62;">&#39;#1dceb2&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">        })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h3 id="index-json" tabindex="-1">index.json <a class="header-anchor" href="#index-json" aria-label="Permalink to &quot;index.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// index.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;component&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;usingComponents&quot;</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// index.json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;component&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;usingComponents&quot;</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="调用" tabindex="-1">调用 <a class="header-anchor" href="#调用" aria-label="Permalink to &quot;调用&quot;">​</a></h2><h3 id="index-html" tabindex="-1">index.html <a class="header-anchor" href="#index-html" aria-label="Permalink to &quot;index.html&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;</span><span style="color:#E1E4E8;">--index.html--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">van-field</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{form.mobile}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">input-align</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;手机号&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">placeholder</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;请输入手机号&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;number&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">maxlength</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{{11}}&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">use-button-slot</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">get-mobile</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">bind:getMobile</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;getMobile&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">get-mobile</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">van-field</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#B31D28;font-style:italic;">&lt;</span><span style="color:#24292E;">--index.html--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">van-field</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{form.mobile}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">input-align</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;手机号&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">placeholder</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;请输入手机号&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;number&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">maxlength</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{{11}}&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">use-button-slot</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">get-mobile</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">bind:getMobile</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;getMobile&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">get-mobile</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">van-field</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="index-js-1" tabindex="-1">index.js <a class="header-anchor" href="#index-js-1" aria-label="Permalink to &quot;index.js&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">form</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">mobile</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//获取手机号</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">getMobile</span><span style="color:#E1E4E8;">(e) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">setData</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;form.mobile&#39;</span><span style="color:#E1E4E8;">: e.detail</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">data</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">form</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">mobile</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//获取手机号</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">getMobile</span><span style="color:#24292E;">(e) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">setData</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;form.mobile&#39;</span><span style="color:#24292E;">: e.detail</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span></code></pre></div><h3 id="index-json-1" tabindex="-1">index.json <a class="header-anchor" href="#index-json-1" aria-label="Permalink to &quot;index.json&quot;">​</a></h3><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// index.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;navigationStyle&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;custom&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;usingComponents&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;get-mobile&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;../../components/getMobile/index&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// index.json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;navigationStyle&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;custom&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;usingComponents&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;get-mobile&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;../../components/getMobile/index&quot;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,16),t=[e];function c(E,r,y,i,F,d){return n(),a("div",null,t)}const C=s(o,[["render",c]]);export{h as __pageData,C as default};

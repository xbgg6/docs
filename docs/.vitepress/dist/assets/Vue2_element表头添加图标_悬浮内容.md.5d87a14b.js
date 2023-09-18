import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const p="/Vue2/element表头添加图标,悬浮内容.png",x=JSON.parse('{"title":"element表头添加图标,悬浮内容","description":"","frontmatter":{"title":"element表头添加图标,悬浮内容"},"headers":[],"relativePath":"Vue2/element表头添加图标,悬浮内容.md","filePath":"Vue2/element表头添加图标,悬浮内容.md","lastUpdated":1694660988000}'),o={name:"Vue2/element表头添加图标,悬浮内容.md"},e=l('<h1 id="element表头添加图标-悬浮内容" tabindex="-1">element表头添加图标,悬浮内容 <a class="header-anchor" href="#element表头添加图标-悬浮内容" aria-label="Permalink to &quot;element表头添加图标,悬浮内容&quot;">​</a></h1><p><img src="'+p+`" alt="" data-fancybox="gallery"></p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">el-table-column</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxxx内容1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">show-overflow-tooltip</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">prop</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxxx数据&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">:render-header=&quot;renderHeader&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">el-table-column</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">label</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxxx内容2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">show-overflow-tooltip</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">prop</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;xxxx数据&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">:render-header=&quot;renderHeader&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#79B8FF;">el-table-column</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 表头icon提示</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">renderHeader</span><span style="color:#E1E4E8;"> (h, { column }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">nianZongShouTaiLvContent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          slot: </span><span style="color:#9ECBFF;">&#39;content&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          style: </span><span style="color:#9ECBFF;">&#39;margin-bottom:5px&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;xxxxx悬浮提示内容1&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pingJunDongJingShuContent</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        slot: </span><span style="color:#9ECBFF;">&#39;content&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;贷款 = 券后价 * 数量&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    )</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;div&#39;</span><span style="color:#E1E4E8;">, [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;span&#39;</span><span style="color:#E1E4E8;">, column.label),</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;el-tooltip&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            placement: </span><span style="color:#9ECBFF;">&#39;top&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        [</span></span>
<span class="line"><span style="color:#E1E4E8;">          column.label </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;xxxx内容1&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">?</span><span style="color:#E1E4E8;"> nianZongShouTaiLvContent </span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> pingJunDongJingShuContent,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">h</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;i&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">            class: </span><span style="color:#9ECBFF;">&#39;el-icon-question&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            style: </span><span style="color:#9ECBFF;">&#39;color:red;margin-left:5px;font-size:16px;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">          })</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      )</span></span>
<span class="line"><span style="color:#E1E4E8;">    ])</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">el-table-column</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">label</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxxx内容1&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">show-overflow-tooltip</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">prop</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxxx数据&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">:render-header=&quot;renderHeader&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">el-table-column</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">label</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxxx内容2&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">show-overflow-tooltip</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">prop</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;xxxx数据&quot;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">:render-header=&quot;renderHeader&quot;</span></span>
<span class="line"><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#005CC5;">el-table-column</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 表头icon提示</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">renderHeader</span><span style="color:#24292E;"> (h, { column }) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">nianZongShouTaiLvContent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          slot: </span><span style="color:#032F62;">&#39;content&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          style: </span><span style="color:#032F62;">&#39;margin-bottom:5px&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;xxxxx悬浮提示内容1&#39;</span></span>
<span class="line"><span style="color:#24292E;">      )</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pingJunDongJingShuContent</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        slot: </span><span style="color:#032F62;">&#39;content&#39;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;贷款 = 券后价 * 数量&#39;</span></span>
<span class="line"><span style="color:#24292E;">    )</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;div&#39;</span><span style="color:#24292E;">, [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;span&#39;</span><span style="color:#24292E;">, column.label),</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;el-tooltip&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          props: {</span></span>
<span class="line"><span style="color:#24292E;">            placement: </span><span style="color:#032F62;">&#39;top&#39;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        [</span></span>
<span class="line"><span style="color:#24292E;">          column.label </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;xxxx内容1&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">?</span><span style="color:#24292E;"> nianZongShouTaiLvContent </span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> pingJunDongJingShuContent,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">h</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;i&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">            class: </span><span style="color:#032F62;">&#39;el-icon-question&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            style: </span><span style="color:#032F62;">&#39;color:red;margin-left:5px;font-size:16px;&#39;</span></span>
<span class="line"><span style="color:#24292E;">          })</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      )</span></span>
<span class="line"><span style="color:#24292E;">    ])</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,3),t=[e];function c(r,E,y,i,F,u){return n(),a("div",null,t)}const C=s(o,[["render",c]]);export{x as __pageData,C as default};

import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.b637c96f.js";const p="/Vue2/数字滚动组件.gif",D=JSON.parse('{"title":"数字滚动组件","description":"","frontmatter":{"title":"数字滚动组件"},"headers":[],"relativePath":"Vue2/数字滚动组件.md","filePath":"Vue2/数字滚动组件.md","lastUpdated":1694660988000}'),o={name:"Vue2/数字滚动组件.md"},e=l('<h1 id="数字滚动组件" tabindex="-1">数字滚动组件 <a class="header-anchor" href="#数字滚动组件" aria-label="Permalink to &quot;数字滚动组件&quot;">​</a></h1><p><img src="'+p+`" alt="" data-fancybox="gallery"></p><h2 id="公共组件" tabindex="-1">公共组件 <a class="header-anchor" href="#公共组件" aria-label="Permalink to &quot;公共组件&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// src/components/NumberScroll.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;number-scroll-container&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">li</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-for</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;(number, index) in numberList&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">:key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">:class=&quot;{</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;number-item&#39;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">!isNaN(number),</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;mark-item&#39;</span><span style="color:#FDAEB7;font-style:italic;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">isNaN(number)</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-if</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;!isNaN(number)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;numbers&quot;</span><span style="color:#E1E4E8;">&gt;0123456789&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-else</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        {{ number }}</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">export default {</span></span>
<span class="line"><span style="color:#E1E4E8;">  props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    value: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    time: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      type: Number,</span></span>
<span class="line"><span style="color:#E1E4E8;">      default: </span><span style="color:#79B8FF;">1</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 逗号分隔</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// numberList: [&#39;0&#39;, &#39;0&#39;, &#39;,&#39;, &#39;0&#39;, &#39;0&#39;, &#39;0&#39;, &#39;,&#39;, &#39;0&#39;, &#39;0&#39;, &#39;0&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">numberList</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;0&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  watch: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">newValue</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">formatNumber</span><span style="color:#E1E4E8;">(newValue)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">increaseNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.time)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">    this.formatNumber(this.value)</span></span>
<span class="line"><span style="color:#E1E4E8;">    this.increaseNumber(this.time)</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 定时增长数字</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">increaseNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">time</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">setTimeout</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">numberScroll</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      }, time </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 设置文字滚动</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">numberScroll</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">numbers</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.numbers</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">numberList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.numberList.</span><span style="color:#B392F0;">filter</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">item</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">!</span><span style="color:#B392F0;">isNaN</span><span style="color:#E1E4E8;">(item))</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> index </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">; index </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;"> numbers.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">; index</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">element</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> numbers[index]</span></span>
<span class="line"><span style="color:#E1E4E8;">        element.style.transform </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`translate(0, -\${</span><span style="color:#E1E4E8;">numberList</span><span style="color:#9ECBFF;">[</span><span style="color:#E1E4E8;">index</span><span style="color:#9ECBFF;">] </span><span style="color:#F97583;">*</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">10</span><span style="color:#9ECBFF;">}%)\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 给数字加入逗号分隔(可有可无)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">toThousands</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      number </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (number </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// while (number.length &gt; 3) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   result = &#39;,&#39; + number.slice(-3) + result</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   number = number.slice(0, number.length - 3)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (number) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        result </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> number </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> result</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 处理传过来的数字</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">formatNumber</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">number</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.numberList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">toThousands</span><span style="color:#E1E4E8;">(number).</span><span style="color:#B392F0;">split</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;scss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">.number-scroll-container {</span></span>
<span class="line"><span style="color:#E1E4E8;">  padding:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  margin:</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  list</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">style: none;</span></span>
<span class="line"><span style="color:#E1E4E8;">  display: flex;</span></span>
<span class="line"><span style="color:#E1E4E8;">  align</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">items: center;</span></span>
<span class="line"><span style="color:#E1E4E8;">  overflow: hidden;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  li {</span></span>
<span class="line"><span style="color:#E1E4E8;">    writing-mode: vertical</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">lr;</span></span>
<span class="line"><span style="color:#E1E4E8;">    text</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">orientation: upright;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//line-height: 17px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: 16px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    width: 11px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    font</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">size: 16px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    font</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">weight: bold;</span></span>
<span class="line"><span style="color:#E1E4E8;">    text</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">shadow: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> 2px #f1e735;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/*文字禁止编辑*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">moz</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">user</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">select: none; </span><span style="color:#6A737D;">/*火狐*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">webkit</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">user</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">select: none; </span><span style="color:#6A737D;">/*webkit浏览器*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">ms</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">user</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">select: none; </span><span style="color:#6A737D;">/*IE10*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">khtml</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">user</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">select: none; </span><span style="color:#6A737D;">/*早期浏览器*/</span></span>
<span class="line"><span style="color:#E1E4E8;">    user</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">select: none;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  .number</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">item {</span></span>
<span class="line"><span style="color:#E1E4E8;">    span {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">position</span><span style="color:#E1E4E8;">: relative;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">%</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      writing</span><span style="color:#F97583;">-</span><span style="color:#B392F0;">mode</span><span style="color:#E1E4E8;">: vertical</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">rl;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">/*letter-spacing: 1px;*/</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">transition</span><span style="color:#E1E4E8;">: transform 1s ease</span><span style="color:#F97583;">-in-</span><span style="color:#E1E4E8;">out;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  .mark</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">item {</span></span>
<span class="line"><span style="color:#E1E4E8;">    line-height: 10px;</span></span>
<span class="line"><span style="color:#E1E4E8;">    height: 10px;</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// src/components/NumberScroll.vue</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;number-scroll-container&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">li</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-for</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;(number, index) in numberList&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">:key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">:class=&quot;{</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;number-item&#39;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">!isNaN(number),</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;mark-item&#39;</span><span style="color:#B31D28;font-style:italic;">:</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">isNaN(number)</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}&quot;</span></span>
<span class="line"><span style="color:#24292E;">    &gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-if</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;!isNaN(number)&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;numbers&quot;</span><span style="color:#24292E;">&gt;0123456789&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-else</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        {{ number }}</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">export default {</span></span>
<span class="line"><span style="color:#24292E;">  props: {</span></span>
<span class="line"><span style="color:#24292E;">    value: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    time: {</span></span>
<span class="line"><span style="color:#24292E;">      type: Number,</span></span>
<span class="line"><span style="color:#24292E;">      default: </span><span style="color:#005CC5;">1</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    return {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 逗号分隔</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// numberList: [&#39;0&#39;, &#39;0&#39;, &#39;,&#39;, &#39;0&#39;, &#39;0&#39;, &#39;0&#39;, &#39;,&#39;, &#39;0&#39;, &#39;0&#39;, &#39;0&#39;]</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">numberList</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  watch: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">(</span><span style="color:#E36209;">newValue</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">formatNumber</span><span style="color:#24292E;">(newValue)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">increaseNumber</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.time)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">    this.formatNumber(this.value)</span></span>
<span class="line"><span style="color:#24292E;">    this.increaseNumber(this.time)</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  methods: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 定时增长数字</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">increaseNumber</span><span style="color:#24292E;">(</span><span style="color:#E36209;">time</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">setTimeout</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">numberScroll</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      }, time </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 设置文字滚动</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">numberScroll</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">numbers</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.numbers</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">numberList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.numberList.</span><span style="color:#6F42C1;">filter</span><span style="color:#24292E;">(</span><span style="color:#E36209;">item</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">isNaN</span><span style="color:#24292E;">(item))</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> index </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">; index </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;"> numbers.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">; index</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">element</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> numbers[index]</span></span>
<span class="line"><span style="color:#24292E;">        element.style.transform </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`translate(0, -\${</span><span style="color:#24292E;">numberList</span><span style="color:#032F62;">[</span><span style="color:#24292E;">index</span><span style="color:#032F62;">] </span><span style="color:#D73A49;">*</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">10</span><span style="color:#032F62;">}%)\`</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 给数字加入逗号分隔(可有可无)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">toThousands</span><span style="color:#24292E;">(</span><span style="color:#E36209;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      number </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (number </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">let</span><span style="color:#24292E;"> result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// while (number.length &gt; 3) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   result = &#39;,&#39; + number.slice(-3) + result</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   number = number.slice(0, number.length - 3)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (number) {</span></span>
<span class="line"><span style="color:#24292E;">        result </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> number </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> result</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 处理传过来的数字</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">formatNumber</span><span style="color:#24292E;">(</span><span style="color:#E36209;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.numberList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">toThousands</span><span style="color:#24292E;">(number).</span><span style="color:#6F42C1;">split</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;scss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">.number-scroll-container {</span></span>
<span class="line"><span style="color:#24292E;">  padding:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  margin:</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  list</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">style: none;</span></span>
<span class="line"><span style="color:#24292E;">  display: flex;</span></span>
<span class="line"><span style="color:#24292E;">  align</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">items: center;</span></span>
<span class="line"><span style="color:#24292E;">  overflow: hidden;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  li {</span></span>
<span class="line"><span style="color:#24292E;">    writing-mode: vertical</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">lr;</span></span>
<span class="line"><span style="color:#24292E;">    text</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">orientation: upright;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//line-height: 17px;</span></span>
<span class="line"><span style="color:#24292E;">    height: 16px;</span></span>
<span class="line"><span style="color:#24292E;">    width: 11px;</span></span>
<span class="line"><span style="color:#24292E;">    font</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">size: 16px;</span></span>
<span class="line"><span style="color:#24292E;">    font</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">weight: bold;</span></span>
<span class="line"><span style="color:#24292E;">    text</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">shadow: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> 2px #f1e735;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/*文字禁止编辑*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">moz</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">user</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">select: none; </span><span style="color:#6A737D;">/*火狐*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">webkit</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">user</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">select: none; </span><span style="color:#6A737D;">/*webkit浏览器*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">ms</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">user</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">select: none; </span><span style="color:#6A737D;">/*IE10*/</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;">khtml</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">user</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">select: none; </span><span style="color:#6A737D;">/*早期浏览器*/</span></span>
<span class="line"><span style="color:#24292E;">    user</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">select: none;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  .number</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">item {</span></span>
<span class="line"><span style="color:#24292E;">    span {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">position</span><span style="color:#24292E;">: relative;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      writing</span><span style="color:#D73A49;">-</span><span style="color:#6F42C1;">mode</span><span style="color:#24292E;">: vertical</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">rl;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">/*letter-spacing: 1px;*/</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">transition</span><span style="color:#24292E;">: transform 1s ease</span><span style="color:#D73A49;">-in-</span><span style="color:#24292E;">out;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  .mark</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">item {</span></span>
<span class="line"><span style="color:#24292E;">    line-height: 10px;</span></span>
<span class="line"><span style="color:#24292E;">    height: 10px;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="使用组件" tabindex="-1">使用组件 <a class="header-anchor" href="#使用组件" aria-label="Permalink to &quot;使用组件&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#FDAEB7;font-style:italic;">Number</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;value&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:time</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0.0001&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Number </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/components/NumberScroll.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        components: { Number },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">                value: </span><span style="color:#79B8FF;">1600</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#B31D28;font-style:italic;">Number</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;value&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:time</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0.0001&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Number </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/components/NumberScroll.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        components: { Number },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">                value: </span><span style="color:#005CC5;">1600</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,6),t=[e];function c(r,E,y,i,F,u){return n(),a("div",null,t)}const A=s(o,[["render",c]]);export{D as __pageData,A as default};

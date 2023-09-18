import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.b637c96f.js";const u=JSON.parse('{"title":"接口传值时字段为空不传该字段","description":"","frontmatter":{"title":"接口传值时字段为空不传该字段"},"headers":[],"relativePath":"Vue2/接口传值时字段为空不传该字段.md","filePath":"Vue2/接口传值时字段为空不传该字段.md","lastUpdated":1694660988000}'),l={name:"Vue2/接口传值时字段为空不传该字段.md"},o=p(`<h1 id="接口传值时字段为空不传该字段" tabindex="-1">接口传值时字段为空不传该字段 <a class="header-anchor" href="#接口传值时字段为空不传该字段" aria-label="Permalink to &quot;接口传值时字段为空不传该字段&quot;">​</a></h1><ul><li>如果新建和编辑是同一个页面，那么就可以使用如下的方法</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">:record.id</span><span style="color:#F97583;">||</span><span style="color:#79B8FF;">undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">id</span><span style="color:#24292E;">:record.id</span><span style="color:#D73A49;">||</span><span style="color:#005CC5;">undefined</span></span></code></pre></div><ul><li>第二种</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 如果为空删除属性</span></span>
<span class="line"><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">key</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> params) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (params[key] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> params[key] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> params[key] </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">delete</span><span style="color:#E1E4E8;"> params[key]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 如果为空删除属性</span></span>
<span class="line"><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">key</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> params) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (params[key] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> params[key] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> params[key] </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">delete</span><span style="color:#24292E;"> params[key]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div>`,5),e=[o];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};

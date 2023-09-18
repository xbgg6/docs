import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b637c96f.js";const _=JSON.parse('{"title":"清空git远程仓库并重新提交","description":"","frontmatter":{"0":"t","1":"i","2":"t","3":"l","4":"e","5":":","6":"清","7":"空","8":"g","9":"i","10":"t","11":"远","12":"程","13":"仓","14":"库","15":"并","16":"重","17":"新","18":"提","19":"交"},"headers":[],"relativePath":"Git/清空git远程仓库.md","filePath":"Git/清空git远程仓库.md","lastUpdated":1694660988000}'),p={name:"Git/清空git远程仓库.md"},o=l(`<h1 id="清空git远程仓库并重新提交" tabindex="-1">清空git远程仓库并重新提交 <a class="header-anchor" href="#清空git远程仓库并重新提交" aria-label="Permalink to &quot;清空git远程仓库并重新提交&quot;">​</a></h1><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#克隆远程仓库到本地</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> [远程仓库地址]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#在 git bash 中删除当前目录下所有文件</span></span>
<span class="line"><span style="color:#B392F0;">rm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-rf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./</span><span style="color:#79B8FF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#修改提交</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-a</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;delete old files&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#推送到远程仓库</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#克隆远程仓库到本地</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> [远程仓库地址]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#在 git bash 中删除当前目录下所有文件</span></span>
<span class="line"><span style="color:#6F42C1;">rm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-rf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span><span style="color:#005CC5;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#修改提交</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-a</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;delete old files&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">#推送到远程仓库</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span></span></code></pre></div>`,2),e=[o];function t(c,r,i,y,E,d){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{_ as __pageData,g as default};

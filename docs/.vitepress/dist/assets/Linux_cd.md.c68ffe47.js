import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.b637c96f.js";const h=JSON.parse('{"title":"cd命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/cd.md","filePath":"Linux/cd.md","lastUpdated":1694800248000}'),p={name:"Linux/cd.md"},o=l(`<h1 id="cd命令" tabindex="-1">cd命令 <a class="header-anchor" href="#cd命令" aria-label="Permalink to &quot;cd命令&quot;">​</a></h1><h2 id="主要用途" tabindex="-1">主要用途 <a class="header-anchor" href="#主要用途" aria-label="Permalink to &quot;主要用途&quot;">​</a></h2><ul><li>切换工作目录至<code>dir</code>。其中<code>dir</code>的表示法可以是绝对路径或相对路径。</li><li>若参数<code>dir</code>省略，则默认为使用者的shell变量<code>HOME</code>。</li><li>如果<code>dir</code>指定为<code>~</code>时表示为使用者的shell变量<code>HOME</code>，<code>.</code>表示当前目录，<code>..</code>表示当前目录的上一级目录。</li><li>环境变量<code>CDPATH</code>是由冒号分割的一到多个目录，你可以将常去的目录的上一级加入到<code>CDPATH</code>以便方便访问它们；如果<code>dir</code>以<code>/</code>开头那么<code>CDPATH</code>不会被使用。</li><li>当<code>shopt</code>选项<code>cdable_vars</code>打开时，如果<code>dir</code>在<code>CDPATH</code>及当前目录下均不存在，那么会把它当作变量，读取它的值作为要进入的目录。</li></ul><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> [目录]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> [目录]</span></span></code></pre></div><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">-P：强制</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">命令解析符号链接（symbolic</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">link）后进入实际的物理路径。默认情况下，cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">命令会跟随符号链接进入链接指向的路径。使用</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-P</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">选项可以确保进入的是链接所指向的实际路径。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">-L：默认行为。cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">命令跟随符号链接进入链接指向的路径。这是</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">命令的默认行为，如果不使用任何选项，cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">命令将按照此方式操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">-e：如果目标路径不存在，则不执行</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">操作，并返回非零退出状态。这个选项可以用于检查目标路径是否存在，以便在脚本中进行条件操作。。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">-P：强制</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">命令解析符号链接（symbolic</span><span style="color:#24292E;"> </span><span style="color:#032F62;">link）后进入实际的物理路径。默认情况下，cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">命令会跟随符号链接进入链接指向的路径。使用</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-P</span><span style="color:#24292E;"> </span><span style="color:#032F62;">选项可以确保进入的是链接所指向的实际路径。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">-L：默认行为。cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">命令跟随符号链接进入链接指向的路径。这是</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">命令的默认行为，如果不使用任何选项，cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">命令将按照此方式操作。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">-e：如果目标路径不存在，则不执行</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">操作，并返回非零退出状态。这个选项可以用于检查目标路径是否存在，以便在脚本中进行条件操作。。</span></span></code></pre></div><h2 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-label="Permalink to &quot;返回值&quot;">​</a></h2><p>返回状态为成功除非无法进入指定的目录。</p><h2 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 进入用户主目录；</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 进入根目录</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 进入用户主目录；</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">..</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 返回上级目录（若当前目录为“/“，则执行完后还在“/&quot;；&quot;..&quot;为上级目录的意思）；</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">../..</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 返回上两级目录；</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">!</span><span style="color:#E1E4E8;">$  </span><span style="color:#6A737D;"># 把上个命令的参数作为cd参数使用。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 进入用户主目录；</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 进入根目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 进入用户主目录；</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">..</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 返回上级目录（若当前目录为“/“，则执行完后还在“/&quot;；&quot;..&quot;为上级目录的意思）；</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">../..</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 返回上两级目录；</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">!</span><span style="color:#24292E;">$  </span><span style="color:#6A737D;"># 把上个命令的参数作为cd参数使用。</span></span></code></pre></div><p>关于切换到上一个工作目录的说明</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">-</span></span>
<span class="line"><span style="color:#6A737D;"># 命令会首先显示要切换到的目标目录，然后再进入。</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> \${OLDPWD}</span></span>
<span class="line"><span style="color:#6A737D;"># 命令会直接切换到上一个工作目录。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">-</span></span>
<span class="line"><span style="color:#6A737D;"># 命令会首先显示要切换到的目标目录，然后再进入。</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> \${OLDPWD}</span></span>
<span class="line"><span style="color:#6A737D;"># 命令会直接切换到上一个工作目录。</span></span></code></pre></div><p>关于<code>CDPATH</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 设置桌面文件夹作为CDPATH的值。</span></span>
<span class="line"><span style="color:#E1E4E8;">CDPATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;~/Desktop&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 假设我们接下来要演示涉及到的路径~和~/Desktop下没有test3文件夹，现在新建它们。</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/test3</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/Desktop/test3</span></span>
<span class="line"><span style="color:#6A737D;"># 进入~目录。</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span></span>
<span class="line"><span style="color:#6A737D;"># 进入test3目录。</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test3</span></span>
<span class="line"><span style="color:#6A737D;"># 执行后显示~/Desktop/test3并进入该目录，而不是~目录的test3目录。</span></span>
<span class="line"><span style="color:#6A737D;"># 如果CDPATH存在值，那么优先在CDPATH中查找并进入第一个匹配成功的，如果全部失败那么最后尝试当前目录。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 设置桌面文件夹作为CDPATH的值。</span></span>
<span class="line"><span style="color:#24292E;">CDPATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;~/Desktop&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 假设我们接下来要演示涉及到的路径~和~/Desktop下没有test3文件夹，现在新建它们。</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/test3</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/Desktop/test3</span></span>
<span class="line"><span style="color:#6A737D;"># 进入~目录。</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span></span>
<span class="line"><span style="color:#6A737D;"># 进入test3目录。</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test3</span></span>
<span class="line"><span style="color:#6A737D;"># 执行后显示~/Desktop/test3并进入该目录，而不是~目录的test3目录。</span></span>
<span class="line"><span style="color:#6A737D;"># 如果CDPATH存在值，那么优先在CDPATH中查找并进入第一个匹配成功的，如果全部失败那么最后尝试当前目录。</span></span></code></pre></div><p>关于<code>cdable_vars</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 打开选项。</span></span>
<span class="line"><span style="color:#B392F0;">shopt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cdable_vars</span></span>
<span class="line"><span style="color:#6A737D;"># 假设当前路径以及CDPATH没有名为new_var的目录。</span></span>
<span class="line"><span style="color:#E1E4E8;">new_var</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;~/Desktop&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 尝试进入。</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">new_var</span></span>
<span class="line"><span style="color:#6A737D;"># 关闭选项。</span></span>
<span class="line"><span style="color:#B392F0;">shopt</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-u</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cdable_vars</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 打开选项。</span></span>
<span class="line"><span style="color:#6F42C1;">shopt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-s</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cdable_vars</span></span>
<span class="line"><span style="color:#6A737D;"># 假设当前路径以及CDPATH没有名为new_var的目录。</span></span>
<span class="line"><span style="color:#24292E;">new_var</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;~/Desktop&#39;</span></span>
<span class="line"><span style="color:#6A737D;"># 尝试进入。</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">new_var</span></span>
<span class="line"><span style="color:#6A737D;"># 关闭选项。</span></span>
<span class="line"><span style="color:#6F42C1;">shopt</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-u</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cdable_vars</span></span></code></pre></div><h3 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h3><ol><li>该命令是bash内建命令，相关的帮助信息请查看<code>help</code>命令。</li><li>建议您在编写脚本的过程中如有必要使用<code>cd</code>命令时，请增加必要的注释以用于提醒阅读者当前工作目录，以免出现诸如<code>找不到文件</code>这类问题的发生。</li></ol>`,19),e=[o];function c(t,r,y,d,i,E){return a(),n("div",null,e)}const C=s(p,[["render",c]]);export{h as __pageData,C as default};

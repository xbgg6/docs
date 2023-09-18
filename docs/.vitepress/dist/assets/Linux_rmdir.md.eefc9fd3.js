import{_ as e,o as a,c as s,Q as o}from"./chunks/framework.b637c96f.js";const g=JSON.parse('{"title":"rmdir命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/rmdir.md","filePath":"Linux/rmdir.md","lastUpdated":1694800248000}'),i={name:"Linux/rmdir.md"},d=o('<h1 id="rmdir命令" tabindex="-1">rmdir命令 <a class="header-anchor" href="#rmdir命令" aria-label="Permalink to &quot;rmdir命令&quot;">​</a></h1><blockquote><p><code>rmdir</code>命令用于删除空目录。如果目录中包含文件或其他子目录，则无法直接使用<code>rmdir</code>命令删除。</p></blockquote><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rmdir [选项] 目录...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rmdir [选项] 目录...</span></span></code></pre></div><h3 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h3><ul><li><code>-p</code>或<code>--parents</code>：如果删除目录后其上层目录为空，则一并删除上层目录。</li><li><code>-v</code>或<code>--verbose</code>：显示详细的删除信息。</li><li><code>--ignore-fail-on-non-empty</code>：忽略非空目录的错误，继续删除其他空目录。</li></ul><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li>目录：指定要删除的空目录列表，可以同时删除多个目录，各个目录之间用空格分隔。</li></ul><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li><p>删除空目录<code>test</code>：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rmdir test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rmdir test</span></span></code></pre></div></li><li><p>删除空目录<code>dir1</code>和<code>dir2</code>，并显示详细的删除信息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rmdir -v dir1 dir2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rmdir -v dir1 dir2</span></span></code></pre></div></li><li><p>删除空目录<code>dir3</code>，如果删除后其上层目录为空，则一并删除上层目录：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">rmdir -p dir3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">rmdir -p dir3</span></span></code></pre></div></li></ol><p><strong>注意，<code>rmdir</code>命令只能删除空目录。如果目录中包含文件或其他子目录，将无法直接使用<code>rmdir</code>命令删除。在删除目录之前，请确保目录是空的，或者使用其他命令（如<code>rm -r</code>）来删除非空目录。</strong></p>',11),r=[d];function l(c,t,n,p,h,u){return a(),s("div",null,r)}const v=e(i,[["render",l]]);export{g as __pageData,v as default};
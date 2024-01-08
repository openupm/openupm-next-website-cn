import{_ as n,o as a,c as s,a as e}from"./app-d7543051.js";const t={},c=e(`<h3 id="命令行工具入门-可选的" tabindex="-1"><a class="header-anchor" href="#命令行工具入门-可选的" aria-hidden="true">#</a> 命令行工具入门（可选的）</h3><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 从NPM安装 openupm-cli</span>
$ <span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> openupm-cli
<span class="token comment"># 或者使用Yarn</span>
$ <span class="token function">yarn</span> global <span class="token function">add</span> openupm-cli

<span class="token comment"># 进入Unity工程目录</span>
$ <span class="token builtin class-name">cd</span> YOUR_UNITY_PROJECT_FOLDER

<span class="token comment"># 搜索软件包</span>
$ openupm-cn search addressable-importer
┌──────────────────────────────────────────┬────────────────────┬────────────┐
│ Name                                     │ Version            │ Date       │
├──────────────────────────────────────────┼────────────────────┼────────────┤
│ com.littlebigfun.addressable-importer    │ <span class="token number">0.16</span>.1             │ <span class="token number">2023</span>-02-08 │
└──────────────────────────────────────────┴────────────────────┴────────────┘

<span class="token comment"># 安装软件包</span>
$ openupm-cn <span class="token function">add</span> com.littlebigfun.addressable-importer
added: com.littlebigfun.addressable-importer@0.4.1
manifest updated, please <span class="token function">open</span> unity project to apply changes
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">免责声明</p><p>OpenUPM 是一个独立的开源服务，与 Unity Technologies Inc. 没有关联。</p></div>`,3),o=[c];function p(l,i){return a(),s("div",null,o)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};

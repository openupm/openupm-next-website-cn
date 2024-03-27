import{_ as n,o as e,c as t,a}from"./app-D_mlLpjO.js";const s={},o=a(`<h3 id="命令行工具入门-可选的" tabindex="-1"><a class="header-anchor" href="#命令行工具入门-可选的"><span>命令行工具入门（可选的）</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 从NPM安装 openupm-cli</span>
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
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">免责声明</p><p>OpenUPM 是一个独立的开源服务，与 Unity Technologies Inc. 没有关联。</p></div>`,3),p=[o];function c(i,l){return e(),t("div",null,p)}const m=n(s,[["render",c],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/","title":"Unity开源软件包仓库","lang":"zh-CN","frontmatter":{"layout":"HomeLayout","editLink":false,"title":"Unity开源软件包仓库","description":"OpenUPM是一个托管的开源UPM包管理器，提供了自动化的构建服务。","heroText":"Unity开源软件包仓库","features":[{"title":"开源软件包","desc":"托管由社区精心挑选的超过 <%= package_count %> 个开源软件包。"},{"title":"自动化版本发布","desc":"自动跟踪 Git 标签以简化发布流程，确保软件包保持更新。"},{"title":"命令行界面","desc":"通过 OpenUPM-CLI 工具赋予命令行爱好者高效的 UPM registry交互能力。"}],"head":[["link",{"rel":"canonical","href":"https://openupm.cn/"}],["meta",{"property":"og:url","content":"https://openupm.cn/"}],["meta",{"property":"og:site_name","content":"OpenUPM中文网"}],["meta",{"property":"og:title","content":"Unity开源软件包仓库"}],["meta",{"property":"og:description","content":"OpenUPM是一个托管的开源UPM包管理器，提供了自动化的构建服务。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://openupm.cn/images/openupm-twitter.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Unity开源软件包仓库"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Unity开源软件包仓库\\",\\"image\\":[\\"https://openupm.cn/images/openupm-twitter.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"命令行工具入门（可选的）","slug":"命令行工具入门-可选的","link":"#命令行工具入门-可选的","children":[]}],"filePathRelative":"index.md"}');export{m as comp,d as data};

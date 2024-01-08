import{_ as s}from"./getting-started-install-package-c97a22b8.js";import{_ as i,r,o as p,c as l,e,f as t,b as n,a as o}from"./app-d7543051.js";const c={},d=e("h1",{id:"getting-started-with-openupm-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started-with-openupm-cli","aria-hidden":"true"},"#"),t(" Getting Started with OpenUPM-CLI")],-1),u=e("p",null,"This article is a step-by-step tutorial on how to install openupm-cli and manipulate the package manifest file in the terminal. It can work with various shells:",-1),m=e("li",null,"Bash for Mac/Linux",-1),h={href:"https://gitforwindows.org/",target:"_blank",rel:"noopener noreferrer"},g=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"Not a fan of a command-line tool?"),e("p",null,"If you are unfamiliar with the command-line, you can still use other installation options available on the package page.")],-1),f=e("h2",{id:"installing-openupm-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installing-openupm-cli","aria-hidden":"true"},"#"),t(" Installing OpenUPM-CLI")],-1),b={href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"},_=o(`<p>Let&#39;s verify the Node.js installation by printing the npm version (the node package manager where UPM is inspired from).</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ npm -v
6.13.4
</code></pre></div><p>It is recommended to install the openupm-cli globally so you can use it from any path.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ npm install -g openupm-cli
C:\\Users\\openupm\\AppData\\Roaming\\npm\\openupm -&gt; C:\\Users\\openupm\\AppData\\Roaming\\npm\\node_modules\\openupm-cli\\bin\\openupm + openupm-cli@1.1.0
updated 2 packages in 12.177s
</code></pre></div><p>Let&#39;s verify the openupm-cli installation by printing the version.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ openupm --version
1.1.0
</code></pre></div><h2 id="installing-a-upm-package" tabindex="-1"><a class="header-anchor" href="#installing-a-upm-package" aria-hidden="true">#</a> Installing a UPM Package</h2><p>The next step is creating a new Unity project, located at the path <code>~/Document/projects/hello-openupm</code>.</p>`,8),x={href:"https://github.com/favoyang/unity-addressable-importer",target:"_blank",rel:"noopener noreferrer"},k=o(`<div class="language-text" data-ext="text"><pre class="language-text"><code># go to the unity project folder
$ cd ~/Document/projects/hello-openupm

# search package by keyword
$ openupm search addressable
┌──────────────────────────────────────────┬────────────────────┬────────────┐
│ Name                                     │ Version            │ Date       │
├──────────────────────────────────────────┼────────────────────┼────────────┤
│ com.littlebigfun.addressable-importer    │ 0.16.1             │ 2023-02-08 │
└──────────────────────────────────────────┴────────────────────┴────────────┘
</code></pre></div><p>It returns the package name <code>com.littlebigfun.addressable-importer</code>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can directly copy the <em>install command</em> from the <a href="/packages/com.littlebigfun.addressable-importer">package detail page</a> of the openupm website.</p></div><p>Let&#39;s install the package via the <code>add</code> command.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ openupm add com.littlebigfun.addressable-importer
added: com.littlebigfun.addressable-importer@0.16.1
manifest updated, please open the Unity project to apply changes
</code></pre></div><p>It returns that the package version 0.16.1 was added to the manifest file.</p><p>Go back to the Unity editor, wait for the package manager to resolve package changes. Then you shall see the <code>com.littlebigfun.addressable-importer</code> appears in the package manager window.</p><p><img src="`+s+`" alt="Install package"></p><h2 id="understanding-manifest-changes" tabindex="-1"><a class="header-anchor" href="#understanding-manifest-changes" aria-hidden="true">#</a> Understanding Manifest Changes</h2><p>To understand the underlying changes of the manifest file, let&#39;s print the JSON content of <code>Packages/manifest.json</code>.</p><div class="language-text" data-ext="text"><pre class="language-text"><code>$ cat Packages/manifest.json
{
  &quot;dependencies&quot;: {
    ...
    &quot;com.littlebigfun.addressable-importer&quot;: &quot;0.16.1&quot;
  },
  &quot;scopedRegistries&quot;: [
    {
      &quot;name&quot;: &quot;package.openupm.com&quot;,
      &quot;url&quot;: &quot;https://package.openupm.com&quot;,
      &quot;scopes&quot;: [
        &quot;com.littlebigfun.addressable-importer&quot;,
        &quot;com.openupm&quot;
      ]
    }
  ]
}
</code></pre></div><p>The openupm-cli adds <code>com.littlebigfun.addressable-importer</code> to dependencies. It also modified the scopedRegistries to link the <code>com.littlebigfun.addressable-importer</code> namespace with the openupm registry.</p>`,12),v={href:"https://github.com/openupm/openupm-cli#openupm-cli",target:"_blank",rel:"noopener noreferrer"};function y(q,w){const a=r("ExternalLinkIcon");return p(),l("div",null,[d,u,e("ul",null,[m,e("li",null,[e("a",h,[t("Git-Bash"),n(a)]),t(", CMD, or PowerShell for Windows.")])]),g,f,e("p",null,[t("OpenUPM-CLI requires "),e("a",b,[t("Node.js 14.18 or above"),n(a)]),t(".")]),_,e("p",null,[t("Let's install "),e("a",x,[t("Unity Addressable Importer"),n(a)]),t(", a helper package to manage addressable assets. First, you need to identify the package name.")]),k,e("p",null,[t("Please visit the "),e("a",v,[t("openupm-cli readme"),n(a)]),t(" for more usages.")])])}const P=i(c,[["render",y],["__file","getting-started-cli.html.vue"]]);export{P as default};

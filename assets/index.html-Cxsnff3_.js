import{_ as o,r as i,o as r,c as p,b as t,e,d as a,a as s}from"./app-D_mlLpjO.js";const l={},u=t("h1",{id:"nuget-packages",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nuget-packages"},[t("span",null,"NuGet Packages")])],-1),c=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"Experiments"),t("p",null,"The UnityNuGet uplink is an experimental feature.")],-1),g={href:"https://docs.microsoft.com/en-us/nuget/what-is-nuget",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/xoofx/UnityNuGet",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/xoofx/UnityNuGet/blob/master/registry.json",target:"_blank",rel:"noopener noreferrer"},y={href:"https://unitynuget-registry.azurewebsites.net",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"org.nuget",-1),m={href:"https://verdaccio.org/docs/en/uplinks",target:"_blank",rel:"noopener noreferrer"},f=s('<ul><li>OpenUPM registry syncs with the UnityNuGet registry hourly.</li><li>Cached tarballs are hosted on CDN as well.</li><li>You can view package details via openupm-cli <code>openupm view org.nuget.some-package</code>.</li></ul><p>The integration comes with a few limitations.</p><ul><li>NuGet packages are not searchable or browsable on the OpenUPM website.</li><li>Searching for NuGet packages via the OpenUPM registry&#39;s search endpoint will result in &quot;404 packages not found&quot;. This affects both openupm-cli&#39;s search command and Unity Package Manager&#39;s search feature. As a side-effect of this issue, <ul><li>NuGet packages will be invisible in Unity Package Manager&#39;s &quot;My Registries&quot; section, but still visible in the &quot;In Project&quot; section.</li><li>Unity console will warn &quot;Error searching for packages&quot; the first time you open the Package Manager.</li><li>The search issue may be resolved with improved search endpoint behavior in the future.</li></ul></li></ul><h2 id="using-uplinked-unitynuget" tabindex="-1"><a class="header-anchor" href="#using-uplinked-unitynuget"><span>Using Uplinked UnityNuGet</span></a></h2>',4),b={href:"https://github.com/favoyang/com.example.nuget-consumer",target:"_blank",rel:"noopener noreferrer"},N=s(`<ul><li>Installing an OpenUPM package that depends on UnityNuGet.</li><li>Solving potential assembly conflicts by disabling &quot;Assembly Version Validation&quot;.</li></ul><h2 id="using-unitynuget-directly" tabindex="-1"><a class="header-anchor" href="#using-unitynuget-directly"><span>Using UnityNuGet Directly</span></a></h2><p>To use UnityNuGet directly in your Unity project, you need to add it to your scoped registries with the appropriate scopes. Follow these steps to include UnityNuGet in your project&#39;s <code>manifest.json</code>:</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scopedRegistries&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Unity NuGet&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://unitynuget-registry.azurewebsites.net&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;org.nuget&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ... (other scoped registries)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="list-all-unitynuget-packages" tabindex="-1"><a class="header-anchor" href="#list-all-unitynuget-packages"><span>List all UnityNuGet Packages</span></a></h2>`,5),_={href:"https://github.com/xoofx/UnityNuGet/blob/master/registry.json",target:"_blank",rel:"noopener noreferrer"},G={href:"https://unitynuget-registry.azurewebsites.net/-/all",target:"_blank",rel:"noopener noreferrer"},U=t("code",null,"/-/all",-1),v=s(`<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-s</span> https://unitynuget-registry.azurewebsites.net/-/all <span class="token operator">|</span> json <span class="token parameter variable">-k</span>
</code></pre></div><p>Choose the method that best suits your needs to explore and discover UnityNuGet packages for your Unity projects.</p>`,2);function x(w,P){const n=i("ExternalLinkIcon");return r(),p("div",null,[u,c,t("p",null,[t("a",g,[e("NuGet"),a(n)]),e(" is the package manager for .NET, designed to enable developers to share fundamental reusable code. Many UPM packages use NuGet packages as embedded DLLs. This practice can become troublesome when two packages include the same DLL or different versions of one NuGet package. The solution is to create a shared NuGet package that everyone can depend on.")]),t("p",null,[e("Thanks to xoofx's "),t("a",h,[e("UnityNuGet"),a(n)]),e(", which is a project that provides a service to bundle NuGet packages into the UPM format. Similar to OpenUPM, UnityNuGet maintains a "),t("a",d,[e("curated list"),a(n)]),e(" of NuGet packages. All packages listed there should be available on a registry at "),t("a",y,[e("https://unitynuget-registry.azurewebsites.net"),a(n)]),e(". The NuGet Registry takes care of packaging up these NuGet packages in a consistent, automated way, using proper package naming under the "),k,e(" scope.")]),t("p",null,[e("The OpenUPM registry "),t("a",m,[e("uplinks"),a(n)]),e(" to the UnityNuGet registry to make it easier to use a NuGet package.")]),f,t("p",null,[e("See the demo project at "),t("a",b,[e("https://github.com/favoyang/com.example.nuget-consumer"),a(n)]),e(" that includes:")]),N,t("p",null,[e("You can browse the curated list of UnityNuGet packages on the "),t("a",_,[e("UnityNuGet GitHub repository"),a(n)]),e(". This list contains details about various UnityNuGet packages.")]),t("p",null,[e("To programmatically access information about all available UnityNuGet packages, you can use the "),t("a",G,[U,e(" API endpoint"),a(n)]),e(". This API endpoint provides a JSON response with comprehensive data on the packages.")]),v])}const T=o(l,[["render",x],["__file","index.html.vue"]]),j=JSON.parse('{"path":"/nuget/","title":"NuGet Packages","lang":"zh-CN","frontmatter":{"pageClass":"page-nuget","description":"NuGet Packages Experiments The UnityNuGet uplink is an experimental feature. NuGet is the package manager for .NET, designed to enable developers to share fundamental reusable c...","head":[["link",{"rel":"canonical","href":"https://openupm.cn/nuget/"}],["meta",{"property":"og:url","content":"https://openupm.cn/nuget/"}],["meta",{"property":"og:site_name","content":"OpenUPM中文网"}],["meta",{"property":"og:title","content":"NuGet Packages"}],["meta",{"property":"og:description","content":"NuGet Packages Experiments The UnityNuGet uplink is an experimental feature. NuGet is the package manager for .NET, designed to enable developers to share fundamental reusable c..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://openupm.cn/images/openupm-twitter.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"NuGet Packages"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NuGet Packages\\",\\"image\\":[\\"https://openupm.cn/images/openupm-twitter.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Using Uplinked UnityNuGet","slug":"using-uplinked-unitynuget","link":"#using-uplinked-unitynuget","children":[]},{"level":2,"title":"Using UnityNuGet Directly","slug":"using-unitynuget-directly","link":"#using-unitynuget-directly","children":[]},{"level":2,"title":"List all UnityNuGet Packages","slug":"list-all-unitynuget-packages","link":"#list-all-unitynuget-packages","children":[]}],"filePathRelative":"nuget/index.md","autoDesc":true}');export{T as comp,j as data};

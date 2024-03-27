import{_ as l,r,o as c,c as p,b as e,e as a,d as t,w as s,a as i}from"./app-D_mlLpjO.js";const d="/assets/package-add-form-v2-CoaDnadM.png",u="/assets/fork-repository-FnuK1zfa.png",h={},g=e("h1",{id:"adding-upm-package",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#adding-upm-package"},[e("span",null,"Adding UPM Package")])],-1),m=e("h2",{id:"upm-package-criteria",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upm-package-criteria"},[e("span",null,"UPM Package Criteria")])],-1),k=e("p",null,"OpenUPM requires packages to meet the following criteria:",-1),f=e("strong",null,"Package Name:",-1),y={href:"https://docs.unity3d.com/Manual/cus-naming.html",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"com.yourname.package-name",-1),_=e("code",null,"package.json",-1),w=e("code",null,"com.unity",-1),P=e("code",null,"com.github",-1),v=e("code",null,"com.example",-1),U=e("strong",null,"Unity Terms and Package Guidelines:",-1),M={href:"https://unity3d.com/legal/terms-of-service/software",target:"_blank",rel:"noopener noreferrer"},T={href:"https://unity.com/legal/terms-of-service/software/package-guidelines",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"Open-Source and GitHub Hosting:",-1),G={href:"https://spdx.org/licenses",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[e("p",null,[e("strong",null,"Functionality and Usefulness:"),a(" The package should be functional and useful. Test packages are not accepted due to limited resources. It's advised to import your package via Git URL and test it before submission.")])],-1),L=e("strong",null,"Semantic Versioning:",-1),F={href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"},I=e("code",null,"1.1.0",-1),O=e("code",null,"1.1.1-preview",-1),H=e("code",null,"v1.1.2",-1),C={href:"https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository#creating-a-release",target:"_blank",rel:"noopener noreferrer"},R={href:"https://medium.com/openupm/how-to-maintain-upm-package-part-2-f352fbf5f87c",target:"_blank",rel:"noopener noreferrer"},q=i("<li><p><strong>Package Size:</strong> The package size should be under 512MB due to limited resources. If OpenUPM receives more funding in the future, we may increase this limit.</p></li><li><p><strong>Legal Compliance:</strong> The package must conform to local laws and regulations, ensuring that it does not promote hate speech, discrimination, or any harmful content. Additionally, it should not infringe upon intellectual property rights or violate any copyrights, trademarks, or patents.</p></li><li><p><strong>Forked Repositories:</strong> If you&#39;re submitting a forked package with the original package name, please make only minimal changes to add UPM support (convert the C# project into UPM format by adding necessary files) to avoid confusion. If you plan to significantly modify the original package, change its name to your own package name, like <code>com.yourname.original-package-name</code>.</p></li><li><p><strong>Unity Packages:</strong> Please be aware that Unity publishes its own packages on the Unity registry or GitHub. You can only publish a package to OpenUPM if it is not already available on the Unity registry. This ensures that OpenUPM serves as a platform for packages that are not part of Unity&#39;s official offerings.</p></li>",4),N=e("strong",null,"Uplinked NuGet Packages:",-1),S=e("code",null,"com.yourname.nuget-package-name",-1),z=i(`<p>By adhering to these guidelines, package maintainers can contribute to a thriving ecosystem of Unity packages on OpenUPM, benefiting developers and users alike. Packages that do not meet these criteria will be rejected or removed from the OpenUPM platform.</p><ol start="11"><li><strong>Package Retention Policy</strong>: The package should have at least one release within 3 months of being submitted to OpenUPM. Otherwise, it will be removed from the service.</li></ol><h2 id="repository-folder-structures" tabindex="-1"><a class="header-anchor" href="#repository-folder-structures"><span>Repository Folder Structures</span></a></h2><p>There are two typical folder structures for UPM repositories, and OpenUPM build pipelines can handle both of them:</p><ul><li>UPM package at the root path.</li><li>UPM package in a sub-folder, such as <code>Assets/package-name</code> or <code>Packages/com.namespace.package-name</code>.</li></ul><p>Regardless of where the <code>package.json</code> is located, the build pipelines will detect it and handle it correctly.</p><h2 id="package-metadata-yaml-file" tabindex="-1"><a class="header-anchor" href="#package-metadata-yaml-file"><span>Package Metadata YAML File</span></a></h2><p>OpenUPM utilizes a YAML file to store package information. Below is an example of such a YAML file. The build pipelines continuously monitor all package metadata YAML files and identify new Git tags to build as new versions.</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># The package name</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> com.namespace.unitypackageexample
<span class="token comment"># The package display name</span>
<span class="token key atrule">displayName</span><span class="token punctuation">:</span> Unity Package Example
<span class="token comment"># The short package description</span>
<span class="token key atrule">description</span><span class="token punctuation">:</span> An unity package example
<span class="token comment"># The repository url</span>
<span class="token key atrule">repoUrl</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/author/reponame&#39;</span>
<span class="token comment"># The forked repository url</span>
<span class="token key atrule">parentRepoUrl</span><span class="token punctuation">:</span> <span class="token null important">null</span>
<span class="token comment"># The Software Package Data Exchange® (SPDX®) license id</span>
<span class="token key atrule">licenseSpdxId</span><span class="token punctuation">:</span> MIT
<span class="token comment"># The license name</span>
<span class="token key atrule">licenseName</span><span class="token punctuation">:</span> MIT License
<span class="token comment"># A list of topic slugs. See all options at https://github.com/openupm/openupm/blob/master/data/topics.yml</span>
<span class="token key atrule">topics</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> utilities
<span class="token comment"># Filtering Git tags based on their prefix (this is not a regular expression).</span>
<span class="token comment"># It’s particularly useful for monorepos to distinguish between Git tags. i.e. &#39;com.example.foo/&#39;.</span>
<span class="token key atrule">gitTagPrefix</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
<span class="token comment"># The regular expression that specifies intentionally untracked Git tags that should be ignored</span>
<span class="token key atrule">gitTagIgnore</span><span class="token punctuation">:</span> <span class="token string">&#39;-master$&#39;</span>
<span class="token comment"># The minimal version to build. Leave it blank to build all versions.</span>
<span class="token key atrule">minVersion</span><span class="token punctuation">:</span> <span class="token string">&#39;1.0.5&#39;</span>
<span class="token comment"># The featured image URL. It should point to a valid image URL instead of a web page that presents the image.</span>
<span class="token comment"># Leave it blank to use the generated default image.</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/author/reponame/raw/master/path-of-img.png&#39;</span>
<span class="token comment"># The featured image fit mode: cover (default) or contain. Learn more at https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit</span>
<span class="token key atrule">imageFit</span><span class="token punctuation">:</span> cover
<span class="token comment"># The README.md file path (branchname:filename)</span>
<span class="token key atrule">readme</span><span class="token punctuation">:</span> <span class="token string">&#39;main:README.md&#39;</span>
<span class="token comment"># The package hunter&#39;s GitHub username</span>
<span class="token key atrule">hunter</span><span class="token punctuation">:</span> author
</code></pre></div><h2 id="using-the-package-add-form" tabindex="-1"><a class="header-anchor" href="#using-the-package-add-form"><span>Using the Package Add Form</span></a></h2>`,10),Y=e("p",null,[e("img",{src:d,alt:"Package Add Form"})],-1),E=e("p",null,"For users new to this repository, you will first be prompted to fork it in order to submit a pull request.",-1),j=e("p",null,[e("img",{src:u,alt:"Fork repository"})],-1),B=e("p",null,[a("Please adhere to one of the specified pull request title formats: either "),e("code",null,"Create <package-name>.yml"),a(" or "),e("code",null,"chore(data): new package <package-name>"),a(". With this format, the pull request will be automatically merged. The CI system will run a test to verify the submitted file, update the website, and trigger the build pipelines. It's worth noting that first-time contributors who are new to GitHub will require moderator approval for the pull request to initiate the test. We aim to approve such requests within 24 hours.")],-1),D=e("code",null,"https://openupm.com/packages/com.your-org.package-name",-1),W=e("strong",null,"version history",-1),V=e("strong",null,"build issues",-1),J={href:"https://discord.gg/FnUgWEP",target:"_blank",rel:"noopener noreferrer"},K=e("h2",{id:"troubleshooting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#troubleshooting"},[e("span",null,"Troubleshooting")])],-1),X=e("h3",{id:"handling-a-repository-without-git-tag",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#handling-a-repository-without-git-tag"},[e("span",null,"Handling a Repository without Git Tag")])],-1),$={href:"https://medium.com/openupm/how-to-maintain-upm-package-part-2-f352fbf5f87c",target:"_blank",rel:"noopener noreferrer"},Q=i(`<h3 id="handling-prefixed-git-tags" tabindex="-1"><a class="header-anchor" href="#handling-prefixed-git-tags"><span>Handling Prefixed Git Tags</span></a></h3><p>Some repositories use different content for different tags, for example, <code>1.0.0</code> for the main branch and <code>upm/1.0.0</code> for the UPM branch. In such cases, you need to specify the <code>gitTagPrefix</code> field in the package YAML file. For instance, set <code>gitTagPrefix: &quot;upm/&quot;</code> to prevent confusion in the build pipelines due to duplicated version tags. Without specifying a prefix, the build pipelines will treat <code>1.0.0</code> and <code>upm/1.0.0</code> as the same version tag and only build one of them. By default, a tag name with the prefix <code>upm/</code> takes higher priority. For example, <code>1.0.0</code> and <code>upm/1.1.0</code> will result in building only <code>upm/1.1.0</code>.</p><h3 id="handling-monorepo" tabindex="-1"><a class="header-anchor" href="#handling-monorepo"><span>Handling Monorepo</span></a></h3><p>Monorepo is a practice that organizes multiple packages in a single repository, usually laid out as follows:</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Packages/
  com.namespace.foo/
    package.json
  com.namespace.bar/
    package.json
</code></pre></div><p>For monorepos, multiple package submissions are required. You need to submit packages one by one to the OpenUPM platform. If you submit more than one package metadata YAML file in a single pull request, the CI system will not merge it automatically but will wait for a moderator to review and merge it manually.</p><p>There are two strategies to manage monorepo versions:</p><ol><li>Synchronize all packages to the same version. This means that when you update <code>com.namespace.foo</code> to <code>1.0.1</code>, you need to update <code>com.namespace.bar</code> to <code>1.0.1</code> as well. Then you can create one Git tag <code>1.0.1</code> for both packages. The build pipelines will detect the tag and build both packages under their own package names.</li><li>Use different versions for each package. This means that when you update <code>com.namespace.foo</code> to <code>1.0.1</code>, you can keep <code>com.namespace.bar</code> at <code>0.1.0</code>. Then you need to create two Git tags with different prefixes, <code>com.namespace.foo/1.0.0</code> and <code>com.namespace.bar/0.1.0</code>. The build pipelines will detect the tags based on the <code>gitTagPrefix</code> field in the package YAML file.</li></ol><p>Each approach has its pros and cons, so please choose the one that best suits your needs.</p><h3 id="handling-custom-build-tasks" tabindex="-1"><a class="header-anchor" href="#handling-custom-build-tasks"><span>Handling Custom Build Tasks</span></a></h3><p>OpenUPM does not support custom build tasks. As a workaround, we suggest delegating this task to CI systems like GitHub Actions.</p><ul><li>For minimal customizations, such as relocating the sample folder, you can build the content into an <code>upm</code> branch (a build branch) and then tag the <code>upm</code> branch as a versioned Git tag for OpenUPM to utilize.</li><li>For more complex customizations, like building DLLs, you can push the build content into a separate (build) repository and then submit that build repository to OpenUPM.</li></ul>`,12),Z={href:"https://github.com/openupm/openupm/discussions",target:"_blank",rel:"noopener noreferrer"},ee=e("h2",{id:"conclusion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#conclusion"},[e("span",null,"Conclusion")])],-1);function ae(te,ne){const n=r("ExternalLinkIcon"),o=r("RouteLink");return c(),p("div",null,[g,m,k,e("ol",null,[e("li",null,[e("p",null,[f,a(" The package name must adhere to the "),e("a",y,[a("Unity Package Manager naming convention"),t(n)]),a(' by using "reverse domain name notation" with at least three segments, like '),b,a(". Please make sure the package name matches the name in the "),_,a(" file. Avoid using a scope that might cause confusion for others. For instance, do not use the "),w,a(" scope unless you are affiliated with Unity Technologies. The same applies to scopes like "),P,a(" and other well-known scopes. Additionally, refrain from using the "),v,a(" scope, as it is reserved for internal testing purposes.")])]),e("li",null,[e("p",null,[U,a(" The package should comply with "),e("a",M,[a("Unity Terms"),t(n)]),a(" and "),e("a",T,[a("Package Guidelines"),t(n)]),a(".")])]),e("li",null,[e("p",null,[x,a(" The package must be open-source and hosted on GitHub. It is recommended to select a license from the "),e("a",G,[a("spdx license list"),t(n)]),a(". If the package uses dual licenses or has other constraints, ensure that these are clearly presented to the user.")])]),A,e("li",null,[e("p",null,[L,a(" The package should use "),e("a",F,[a("semantic versioning (semver)"),t(n)]),a(". For example, "),I,a(", "),O,a(", "),H,a(". You can create Git tags using the "),e("a",C,[a("GitHub release"),t(n)]),a(" feature or automate the process using "),e("a",R,[a("GitHub actions"),t(n)]),a(".")])]),q,e("li",null,[e("p",null,[N,a(" We strongly encourage you to submit NuGet packages to "),t(o,{to:"/nuget/"},{default:s(()=>[a("UnityNuGet")]),_:1}),a(" that have been uplinked by the OpenUPM registry. However, if you have a specific need to publish a NuGet package directly on OpenUPM, please use your own scope, such as "),S,a(".")])])]),z,e("p",null,[a("Package hunters can utilize the "),t(o,{to:"/packages/add/"},{default:s(()=>[a("package add form")]),_:1}),a(" to simplify the preparation of the package metadata YAML file. This form will guide you through the process of filling in the necessary information, generate the YAML file, and enable you to submit it as a pull request on GitHub through your browser.")]),Y,E,j,B,e("p",null,[a("After a brief pause, during which the build pipelines complete their tasks (usually ranging from 15 minutes to half an hour, depending on the size of your repository), you can access the package's detailed page at the URL "),D,a(" and review the build results in the "),W,a(" and "),V,a(" sections. You can also search for your package name on the homepage to locate it. If you encounter any issues, please leave a comment on the pull request, and we'll do our best to assist you. If you prefer a chat, feel free to join our Discord server via this link: "),e("a",J,[a("https://discord.gg/FnUgWEP"),t(n)]),a(".")]),K,X,e("p",null,[a("The repository you submitted must have at least one versioned Git tag to trigger the build pipelines. Therefore, submissions without a Git tag for an extended period will be removed from the OpenUPM list. If you wish to add such a repository, please create an issue on the author's repository to request the addition of a Git tag. For guidance on automating the release process with GitHub actions, you can refer to "),e("a",$,[a("this tutorial"),t(n)]),a(".")]),Q,e("p",null,[a("While this approach may not be perfect, it is the best solution we can offer at this time. If you have a better idea, please share it with us on "),e("a",Z,[a("GitHub Discussions"),t(n)]),a(".")]),ee,e("p",null,[a("We hope this guide has helped you understand how to add a UPM package to OpenUPM. To learn more about how to handle a failed build, please continue reading the "),t(o,{to:"/docs/troubleshooting-build-errors.html"},{default:s(()=>[a("Troubleshooting Build Errors")]),_:1}),a(" guide.")])])}const se=l(h,[["render",ae],["__file","adding-upm-package.html.vue"]]),ie=JSON.parse('{"path":"/docs/adding-upm-package.html","title":"Adding UPM Package","lang":"zh-CN","frontmatter":{"description":"Adding UPM Package UPM Package Criteria OpenUPM requires packages to meet the following criteria: Package Name: The package name must adhere to the Unity Package Manager naming ...","head":[["link",{"rel":"canonical","href":"https://openupm.cn/docs/adding-upm-package.html"}],["meta",{"property":"og:url","content":"https://openupm.cn/docs/adding-upm-package.html"}],["meta",{"property":"og:site_name","content":"OpenUPM中文网"}],["meta",{"property":"og:title","content":"Adding UPM Package"}],["meta",{"property":"og:description","content":"Adding UPM Package UPM Package Criteria OpenUPM requires packages to meet the following criteria: Package Name: The package name must adhere to the Unity Package Manager naming ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://openupm.cn/images/openupm-twitter.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Adding UPM Package"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Adding UPM Package\\",\\"image\\":[\\"https://openupm.cn/images/openupm-twitter.png\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"UPM Package Criteria","slug":"upm-package-criteria","link":"#upm-package-criteria","children":[]},{"level":2,"title":"Repository Folder Structures","slug":"repository-folder-structures","link":"#repository-folder-structures","children":[]},{"level":2,"title":"Package Metadata YAML File","slug":"package-metadata-yaml-file","link":"#package-metadata-yaml-file","children":[]},{"level":2,"title":"Using the Package Add Form","slug":"using-the-package-add-form","link":"#using-the-package-add-form","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[{"level":3,"title":"Handling a Repository without Git Tag","slug":"handling-a-repository-without-git-tag","link":"#handling-a-repository-without-git-tag","children":[]},{"level":3,"title":"Handling Prefixed Git Tags","slug":"handling-prefixed-git-tags","link":"#handling-prefixed-git-tags","children":[]},{"level":3,"title":"Handling Monorepo","slug":"handling-monorepo","link":"#handling-monorepo","children":[]},{"level":3,"title":"Handling Custom Build Tasks","slug":"handling-custom-build-tasks","link":"#handling-custom-build-tasks","children":[]}]},{"level":2,"title":"Conclusion","slug":"conclusion","link":"#conclusion","children":[]}],"filePathRelative":"docs/adding-upm-package.md","autoDesc":true}');export{se as comp,ie as data};

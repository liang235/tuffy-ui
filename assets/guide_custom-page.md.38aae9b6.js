import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.31073e25.js";const m=JSON.parse('{"title":"自定义页面","description":"","frontmatter":{},"headers":[],"relativePath":"guide/custom-page.md","filePath":"guide/custom-page.md"}'),l={name:"guide/custom-page.md"},t=p(`<h1 id="自定义页面" tabindex="-1">自定义页面 <a class="header-anchor" href="#自定义页面" aria-label="Permalink to &quot;自定义页面&quot;">​</a></h1><p>有些时候，后端生成的页面不能满足当前需求时，就需要自定义手动画页面</p><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">tu-container</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:is-show</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isShow&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@page-show</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageShowHandler&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">tu-page</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;page&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;auth&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:server</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;server&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:is-link</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isLink&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:pageid</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageid&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:params</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;params&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:page-path</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pagePath&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">@page-after-auth-refresh</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageAfterAuthRefresh&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">            &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;在这里写自定义内容即可&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">tu-page</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">tu-container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		isShow: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		pageid: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		isLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		pagePath: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			server: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		};</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// 组件方法</span></span>
<span class="line"><span style="color:#E1E4E8;">	methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 页面显示</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">pageShowHandler</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 针对自定义页面加载完成后事件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">pageAfterAuthRefresh</span><span style="color:#E1E4E8;">() { },</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">tu-container</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:is-show</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isShow&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@page-show</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageShowHandler&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">tu-page</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;page&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;auth&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:server</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;server&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:is-link</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isLink&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:pageid</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageid&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:params</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;params&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:page-path</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pagePath&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">@page-after-auth-refresh</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageAfterAuthRefresh&quot;</span></span>
<span class="line"><span style="color:#24292E;">		&gt;</span></span>
<span class="line"><span style="color:#24292E;">            &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;在这里写自定义内容即可&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">tu-page</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">tu-container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	props: {</span></span>
<span class="line"><span style="color:#24292E;">		isShow: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		pageid: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		isLink: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		params: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Object,</span></span>
<span class="line"><span style="color:#24292E;">			default: {},</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		pagePath: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			server: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		};</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// 组件方法</span></span>
<span class="line"><span style="color:#24292E;">	methods: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 页面显示</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">pageShowHandler</span><span style="color:#24292E;">() { },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 针对自定义页面加载完成后事件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">pageAfterAuthRefresh</span><span style="color:#24292E;">() { },</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div>`,3),e=[t];function o(c,r,E,y,i,u){return n(),a("div",null,e)}const F=s(l,[["render",o]]);export{m as __pageData,F as default};

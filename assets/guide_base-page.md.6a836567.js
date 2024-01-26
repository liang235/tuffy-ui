import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.31073e25.js";const d=JSON.parse('{"title":"基础页面","description":"","frontmatter":{},"headers":[],"relativePath":"guide/base-page.md","filePath":"guide/base-page.md"}'),p={name:"guide/base-page.md"},t=l(`<h1 id="基础页面" tabindex="-1">基础页面 <a class="header-anchor" href="#基础页面" aria-label="Permalink to &quot;基础页面&quot;">​</a></h1><p>除 <code>template</code> 部分是固定代码，其他部分都与 <code>vue</code> 写法一样，卡片/列表页面的钩子都在 <code>tu-container</code> 或 <code>tu-page</code> 上配置即可，方法在 <code>methods</code> 中写入即可</p><h2 id="页面结构" tabindex="-1">页面结构 <a class="header-anchor" href="#页面结构" aria-label="Permalink to &quot;页面结构&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">tu-container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">tu-page</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;page&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:server</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;server&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;type || $tu.constant.SERVER_TYPE.LIST&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:params</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;params&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:page-path</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pagePath&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:pageid</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageid&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:readonly</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;readonly&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:query-data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;queryData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:is-link</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isLink&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;id&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:resetRowDblclick</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:is-add</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isAdd&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:send-refresh</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sendRefresh&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">@page-row-btn</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageRowBtnHandler&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">@page-list-btn</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;pageListBtnHandler&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">tu-page</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">tu-container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	name: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		type: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		pagePath: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		pageid: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		readonly: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		isAdd: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		sendRefresh: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		id: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		isLink: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Boolean,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">		queryData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">			default: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			server: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">		};</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 列表按钮事件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">pageListBtnHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">btn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (btn.code) { }</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 行内按钮事件</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">pageRowBtnHandler</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">btn</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">index</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">switch</span><span style="color:#E1E4E8;"> (btn.code) { }</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">tu-container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">tu-page</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;page&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:server</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;server&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;type || $tu.constant.SERVER_TYPE.LIST&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:params</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;params&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:page-path</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pagePath&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:pageid</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageid&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:readonly</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;readonly&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:query-data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;queryData&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:is-link</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isLink&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;id&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:resetRowDblclick</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:is-add</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isAdd&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:send-refresh</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sendRefresh&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">@page-row-btn</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageRowBtnHandler&quot;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">@page-list-btn</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;pageListBtnHandler&quot;</span></span>
<span class="line"><span style="color:#24292E;">		&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">tu-page</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">tu-container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	name: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	props: {</span></span>
<span class="line"><span style="color:#24292E;">		type: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		pagePath: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		params: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Object,</span></span>
<span class="line"><span style="color:#24292E;">			default: {},</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		pageid: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		readonly: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		isAdd: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		sendRefresh: {</span></span>
<span class="line"><span style="color:#24292E;">			type: String,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		id: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		isLink: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Boolean,</span></span>
<span class="line"><span style="color:#24292E;">			default: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">		queryData: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Object,</span></span>
<span class="line"><span style="color:#24292E;">			default: {},</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			server: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">		};</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	methods: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 列表按钮事件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">pageListBtnHandler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">btn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (btn.code) { }</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 行内按钮事件</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">pageRowBtnHandler</span><span style="color:#24292E;">(</span><span style="color:#E36209;">btn</span><span style="color:#24292E;">, </span><span style="color:#E36209;">index</span><span style="color:#24292E;">, </span><span style="color:#E36209;">row</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">switch</span><span style="color:#24292E;"> (btn.code) { }</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br></div></div>`,4),e=[t];function o(c,r,E,y,i,u){return n(),a("div",null,e)}const F=s(p,[["render",o]]);export{d as __pageData,F as default};

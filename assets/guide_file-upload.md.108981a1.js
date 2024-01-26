import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.31073e25.js";const F=JSON.parse('{"title":"附件操作","description":"","frontmatter":{},"headers":[],"relativePath":"guide/file-upload.md","filePath":"guide/file-upload.md"}'),p={name:"guide/file-upload.md"},e=l(`<h1 id="附件操作" tabindex="-1">附件操作 <a class="header-anchor" href="#附件操作" aria-label="Permalink to &quot;附件操作&quot;">​</a></h1><p>附件的上传/下载/预览操作</p><h2 id="上传附件" tabindex="-1">上传附件 <a class="header-anchor" href="#上传附件" aria-label="Permalink to &quot;上传附件&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-T5QE4" id="tab-1lCAdHL" checked="checked"><label for="tab-1lCAdHL">tu-input</label><input type="radio" name="group-T5QE4" id="tab-pNKKdjD"><label for="tab-pNKKdjD">el-upload</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- :params=&quot;{ primaryValue: byid.ID }&quot; 如果是在列表上传承，需传列表行的ID --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">tu-input</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ele&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$tu.constant.INPUT_TYPE.FILE&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">accept</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">keyset</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FUJIAN&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:server</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;server&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;byid.ID&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:params</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ primaryValue: byid.ID }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fileList&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">@success</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handlerAnnexSuccess&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			server: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">			fileList: [], </span><span style="color:#6A737D;">// 上传的文件列表</span></span>
<span class="line"><span style="color:#E1E4E8;">			byid: {}, </span><span style="color:#6A737D;">// 表单数据</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 获取表单 byid 数据</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">getByid</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$api.</span><span style="color:#B392F0;">byid</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.server).</span><span style="color:#B392F0;">then</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.byid </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> res;</span></span>
<span class="line"><span style="color:#E1E4E8;">			});</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 文件上传成功</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handlerAnnexSuccess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) { }</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 获取表单详情数据</span></span>
<span class="line"><span style="color:#E1E4E8;">byid(handler, server, _PK_ = &#39;&#39;) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#E1E4E8;">		url: \`/\${server}.byid.do\`,</span></span>
<span class="line"><span style="color:#E1E4E8;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			server,</span></span>
<span class="line"><span style="color:#E1E4E8;">			_PK_,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- :params=&quot;{ primaryValue: byid.ID }&quot; 如果是在列表上传承，需传列表行的ID --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">tu-input</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ele&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$tu.constant.INPUT_TYPE.FILE&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">accept</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;*&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">keyset</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FUJIAN&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:server</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;server&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;byid.ID&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:params</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ primaryValue: byid.ID }&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fileList&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">@success</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handlerAnnexSuccess&quot;</span></span>
<span class="line"><span style="color:#24292E;">	/&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			server: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 服务</span></span>
<span class="line"><span style="color:#24292E;">			fileList: [], </span><span style="color:#6A737D;">// 上传的文件列表</span></span>
<span class="line"><span style="color:#24292E;">			byid: {}, </span><span style="color:#6A737D;">// 表单数据</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	methods: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 获取表单 byid 数据</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">getByid</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$api.</span><span style="color:#6F42C1;">byid</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.server).</span><span style="color:#6F42C1;">then</span><span style="color:#24292E;">((</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.byid </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> res;</span></span>
<span class="line"><span style="color:#24292E;">			});</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 文件上传成功</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handlerAnnexSuccess</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) { }</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 获取表单详情数据</span></span>
<span class="line"><span style="color:#24292E;">byid(handler, server, _PK_ = &#39;&#39;) {</span></span>
<span class="line"><span style="color:#24292E;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#24292E;">		url: \`/\${server}.byid.do\`,</span></span>
<span class="line"><span style="color:#24292E;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		params: {</span></span>
<span class="line"><span style="color:#24292E;">			server,</span></span>
<span class="line"><span style="color:#24292E;">			_PK_,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;btns&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot-scope</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scope&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">el-upload</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ele&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:action</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$tu.utils.server.getDefaultUploadUrl()&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:headers</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$tu.utils.server.getDefaultUploadHeaders()&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:multiple</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:file-list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fileList&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:show-file-list</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:data</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;uploadData&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:on-success</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handlerAnnexSuccess&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">:before-upload</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;handlerBeforeUpload&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;autoUpload(scope.row)&quot;</span><span style="color:#E1E4E8;">&gt;上传&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">el-upload</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			server: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 服务</span></span>
<span class="line"><span style="color:#E1E4E8;">			fileList: [], </span><span style="color:#6A737D;">// 上传的文件列表</span></span>
<span class="line"><span style="color:#E1E4E8;">			uploadData: {</span></span>
<span class="line"><span style="color:#E1E4E8;">				SERV_ID: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 服务ID</span></span>
<span class="line"><span style="color:#E1E4E8;">				FILE_CAT: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 用来区分1个ID不同类型的附件</span></span>
<span class="line"><span style="color:#E1E4E8;">				DATA_ID: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 需要跟当前页面的ID相同</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">			currentList: {}, </span><span style="color:#6A737D;">// 点击上传当前列表的数据</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">	methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">autoUpload</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">row</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentList </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.uploadData.</span><span style="color:#79B8FF;">DATA_ID</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> row.</span><span style="color:#79B8FF;">ID</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.uploadData.</span><span style="color:#79B8FF;">FILE_CAT</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;FUJIAN&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 上传文件之前的钩子</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">handlerBeforeUpload</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">result</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$api.</span><span style="color:#B392F0;">systemTemplateQueryFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentList._PK_);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// 判断是否已有附件</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (result._DATA_.</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$api.</span><span style="color:#B392F0;">systemTemplateDeleteFile</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.currentList._PK_);</span></span>
<span class="line"><span style="color:#E1E4E8;">			}</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 文件上传成功</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#B392F0;">handlerAnnexSuccess</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) { }</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 获取系统模板 - 查询附件 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">systemTemplateQueryFile(handler, _PK_) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#E1E4E8;">		url: &#39;/SY_COMM_FILE.finds.do&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			SERV_ID: &#39;DJH_GSZL_EXP_WORD_MODEL&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">			DATA_ID: _PK_</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;btns&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot-scope</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scope&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">el-upload</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ele&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:action</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$tu.utils.server.getDefaultUploadUrl()&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:headers</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$tu.utils.server.getDefaultUploadHeaders()&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:multiple</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:file-list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fileList&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:show-file-list</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;false&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:data</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;uploadData&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:on-success</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handlerAnnexSuccess&quot;</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">:before-upload</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;handlerBeforeUpload&quot;</span></span>
<span class="line"><span style="color:#24292E;">	&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;autoUpload(scope.row)&quot;</span><span style="color:#24292E;">&gt;上传&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">el-upload</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			server: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 服务</span></span>
<span class="line"><span style="color:#24292E;">			fileList: [], </span><span style="color:#6A737D;">// 上传的文件列表</span></span>
<span class="line"><span style="color:#24292E;">			uploadData: {</span></span>
<span class="line"><span style="color:#24292E;">				SERV_ID: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 服务ID</span></span>
<span class="line"><span style="color:#24292E;">				FILE_CAT: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 用来区分1个ID不同类型的附件</span></span>
<span class="line"><span style="color:#24292E;">				DATA_ID: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 需要跟当前页面的ID相同</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">			currentList: {}, </span><span style="color:#6A737D;">// 点击上传当前列表的数据</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">	methods: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">autoUpload</span><span style="color:#24292E;">(</span><span style="color:#E36209;">row</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentList </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> row;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.uploadData.</span><span style="color:#005CC5;">DATA_ID</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> row.</span><span style="color:#005CC5;">ID</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.uploadData.</span><span style="color:#005CC5;">FILE_CAT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;FUJIAN&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 上传文件之前的钩子</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">handlerBeforeUpload</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">result</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$api.</span><span style="color:#6F42C1;">systemTemplateQueryFile</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentList._PK_);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// 判断是否已有附件</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (result._DATA_.</span><span style="color:#005CC5;">length</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$api.</span><span style="color:#6F42C1;">systemTemplateDeleteFile</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.currentList._PK_);</span></span>
<span class="line"><span style="color:#24292E;">			}</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 文件上传成功</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6F42C1;">handlerAnnexSuccess</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) { }</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 获取系统模板 - 查询附件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">systemTemplateQueryFile(handler, _PK_) {</span></span>
<span class="line"><span style="color:#24292E;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#24292E;">		url: &#39;/SY_COMM_FILE.finds.do&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		params: {</span></span>
<span class="line"><span style="color:#24292E;">			SERV_ID: &#39;DJH_GSZL_EXP_WORD_MODEL&#39;,</span></span>
<span class="line"><span style="color:#24292E;">			DATA_ID: _PK_</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br></div></div></div></div><h2 id="下载附件" tabindex="-1">下载附件 <a class="header-anchor" href="#下载附件" aria-label="Permalink to &quot;下载附件&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;btns&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">slot-scope</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;scope&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#79B8FF;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;autoDownload(scope.row)&quot;&gt;下载&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 下载附件</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">autoDownload(row)</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">if</span><span style="color:#E1E4E8;"> (row.</span><span style="color:#79B8FF;">FILE_ID</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		this.$tu.utils.server.download(row.FILE_ID);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} else {</span></span>
<span class="line"><span style="color:#E1E4E8;">		this.$message.warning(</span><span style="color:#9ECBFF;">&#39;暂无附件&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 也可以先判断是否存在附件</span></span>
<span class="line"><span style="color:#E1E4E8;">async autoDownload(row) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	const result = await this.$api.systemTemplateQueryFile(this, row._PK_);</span></span>
<span class="line"><span style="color:#E1E4E8;">	if (result._DATA_ &amp;&amp; result._DATA_[0]) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		const url = result._DATA_[0].FILE_ID;</span></span>
<span class="line"><span style="color:#E1E4E8;">		this.$tu.utils.server.download(url);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取系统模板 - 查询附件</span></span>
<span class="line"><span style="color:#E1E4E8;">systemTemplateQueryFile(handler, _PK_) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#E1E4E8;">        url: </span><span style="color:#9ECBFF;">&#39;/SY_COMM_FILE.finds.do&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        method: </span><span style="color:#9ECBFF;">&#39;post&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            SERV_ID: </span><span style="color:#9ECBFF;">&#39;DJH_GSZL_EXP_WORD_MODEL&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            DATA_ID: _PK_</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#FDAEB7;font-style:italic;">,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;btns&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">slot-scope</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;scope&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#005CC5;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;autoDownload(scope.row)&quot;&gt;下载&lt;/el-button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 下载附件</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">autoDownload(row)</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">if</span><span style="color:#24292E;"> (row.</span><span style="color:#005CC5;">FILE_ID</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">		this.$tu.utils.server.download(row.FILE_ID);</span></span>
<span class="line"><span style="color:#24292E;">	} else {</span></span>
<span class="line"><span style="color:#24292E;">		this.$message.warning(</span><span style="color:#032F62;">&#39;暂无附件&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 也可以先判断是否存在附件</span></span>
<span class="line"><span style="color:#24292E;">async autoDownload(row) {</span></span>
<span class="line"><span style="color:#24292E;">	const result = await this.$api.systemTemplateQueryFile(this, row._PK_);</span></span>
<span class="line"><span style="color:#24292E;">	if (result._DATA_ &amp;&amp; result._DATA_[0]) {</span></span>
<span class="line"><span style="color:#24292E;">		const url = result._DATA_[0].FILE_ID;</span></span>
<span class="line"><span style="color:#24292E;">		this.$tu.utils.server.download(url);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 获取系统模板 - 查询附件</span></span>
<span class="line"><span style="color:#24292E;">systemTemplateQueryFile(handler, _PK_) {</span></span>
<span class="line"><span style="color:#24292E;">    return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#24292E;">        url: </span><span style="color:#032F62;">&#39;/SY_COMM_FILE.finds.do&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        method: </span><span style="color:#032F62;">&#39;post&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        params: {</span></span>
<span class="line"><span style="color:#24292E;">            SERV_ID: </span><span style="color:#032F62;">&#39;DJH_GSZL_EXP_WORD_MODEL&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            DATA_ID: _PK_</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#B31D28;font-style:italic;">,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="预览附件" tabindex="-1">预览附件 <a class="header-anchor" href="#预览附件" aria-label="Permalink to &quot;预览附件&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-n2tIe" id="tab-YMPat-C" checked="checked"><label for="tab-YMPat-C">卡片页 和 tu-input 预览</label><input type="radio" name="group-n2tIe" id="tab-NTqdn2T"><label for="tab-NTqdn2T">el-input 预览</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">tu-container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;</span><span style="color:#85E89D;">tu-page</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">:page-handler-options</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">				...pageHandlerOptions,</span></span>
<span class="line"><span style="color:#9ECBFF;">				previewFile,</span></span>
<span class="line"><span style="color:#9ECBFF;">			}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">		&lt;/</span><span style="color:#85E89D;">tu-page</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;/</span><span style="color:#85E89D;">tu-container</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	props: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		pageHandlerOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {};</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#B392F0;">previewFile</span><span style="color:#E1E4E8;">: (</span><span style="color:#FFAB70;">options</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">				</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">previewFileHandler</span><span style="color:#E1E4E8;">(options);</span></span>
<span class="line"><span style="color:#E1E4E8;">			},</span></span>
<span class="line"><span style="color:#E1E4E8;">		};</span></span>
<span class="line"><span style="color:#E1E4E8;">	},</span></span>
<span class="line"><span style="color:#E1E4E8;">	methods: {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// 文件预览</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">previewFileHandler</span><span style="color:#E1E4E8;">({ </span><span style="color:#FFAB70;">handler</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">file</span><span style="color:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// file.response 是新上传的附件</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#6A737D;">// file.FILE_ID 是详情页获取的附件</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> file.response </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> [];</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">FILE_ID</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (res[</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> {}).</span><span style="color:#79B8FF;">FILE_ID</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> file.</span><span style="color:#79B8FF;">FILE_ID</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">			</span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">resUrl</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$api.</span><span style="color:#B392F0;">viewFiles</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">FILE_ID</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">			window.</span><span style="color:#B392F0;">open</span><span style="color:#E1E4E8;">(resUrl.</span><span style="color:#79B8FF;">URL</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// http://test-www.cic.inter:9007/OA_USER_WATERMARKER.createFileUrl.do</span></span>
<span class="line"><span style="color:#E1E4E8;">// 查看附件</span></span>
<span class="line"><span style="color:#E1E4E8;">viewFiles(handler, fileId) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#E1E4E8;">		url: &#39;/OA_USER_WATERMARKER.createFileUrl.do&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			fileId</span></span>
<span class="line"><span style="color:#E1E4E8;">		}</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">tu-container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;</span><span style="color:#22863A;">tu-page</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">:page-handler-options</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">				...pageHandlerOptions,</span></span>
<span class="line"><span style="color:#032F62;">				previewFile,</span></span>
<span class="line"><span style="color:#032F62;">			}&quot;</span></span>
<span class="line"><span style="color:#24292E;">		&gt;</span></span>
<span class="line"><span style="color:#24292E;">		&lt;/</span><span style="color:#22863A;">tu-page</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;/</span><span style="color:#22863A;">tu-container</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	props: {</span></span>
<span class="line"><span style="color:#24292E;">		pageHandlerOptions: {</span></span>
<span class="line"><span style="color:#24292E;">			type: Object,</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {};</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">data</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6F42C1;">previewFile</span><span style="color:#24292E;">: (</span><span style="color:#E36209;">options</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">				</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">previewFileHandler</span><span style="color:#24292E;">(options);</span></span>
<span class="line"><span style="color:#24292E;">			},</span></span>
<span class="line"><span style="color:#24292E;">		};</span></span>
<span class="line"><span style="color:#24292E;">	},</span></span>
<span class="line"><span style="color:#24292E;">	methods: {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// 文件预览</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">previewFileHandler</span><span style="color:#24292E;">({ </span><span style="color:#E36209;">handler</span><span style="color:#24292E;">, </span><span style="color:#E36209;">file</span><span style="color:#24292E;"> }) {</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// file.response 是新上传的附件</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#6A737D;">// file.FILE_ID 是详情页获取的附件</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> file.response </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> [];</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">FILE_ID</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (res[</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> {}).</span><span style="color:#005CC5;">FILE_ID</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> file.</span><span style="color:#005CC5;">FILE_ID</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">			</span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">resUrl</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$api.</span><span style="color:#6F42C1;">viewFiles</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">FILE_ID</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">			window.</span><span style="color:#6F42C1;">open</span><span style="color:#24292E;">(resUrl.</span><span style="color:#005CC5;">URL</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// http://test-www.cic.inter:9007/OA_USER_WATERMARKER.createFileUrl.do</span></span>
<span class="line"><span style="color:#24292E;">// 查看附件</span></span>
<span class="line"><span style="color:#24292E;">viewFiles(handler, fileId) {</span></span>
<span class="line"><span style="color:#24292E;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#24292E;">		url: &#39;/OA_USER_WATERMARKER.createFileUrl.do&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		params: {</span></span>
<span class="line"><span style="color:#24292E;">			fileId</span></span>
<span class="line"><span style="color:#24292E;">		}</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">viewFile</span><span style="color:#E1E4E8;">(scope.row)</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;预览&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 预览附件</span></span>
<span class="line"><span style="color:#E1E4E8;">async viewFile(row) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	if (row.FILE_ID) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		const resUrl = await this.$api.viewFiles(this, row.FILE_ID);</span></span>
<span class="line"><span style="color:#E1E4E8;">		window.open(resUrl.URL);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} else {</span></span>
<span class="line"><span style="color:#E1E4E8;">		this.$message.warning(&#39;暂无附件&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> @</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">viewFile</span><span style="color:#24292E;">(scope.row)</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;预览&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 预览附件</span></span>
<span class="line"><span style="color:#24292E;">async viewFile(row) {</span></span>
<span class="line"><span style="color:#24292E;">	if (row.FILE_ID) {</span></span>
<span class="line"><span style="color:#24292E;">		const resUrl = await this.$api.viewFiles(this, row.FILE_ID);</span></span>
<span class="line"><span style="color:#24292E;">		window.open(resUrl.URL);</span></span>
<span class="line"><span style="color:#24292E;">	} else {</span></span>
<span class="line"><span style="color:#24292E;">		this.$message.warning(&#39;暂无附件&#39;);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div></div></div><h2 id="删除附件" tabindex="-1">删除附件 <a class="header-anchor" href="#删除附件" aria-label="Permalink to &quot;删除附件&quot;">​</a></h2><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;small&quot;</span><span style="color:#E1E4E8;"> @</span><span style="color:#B392F0;">click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">deleteFile</span><span style="color:#E1E4E8;">(scope.row)</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;删除&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">// 删除附件</span></span>
<span class="line"><span style="color:#E1E4E8;">deleteFile(row) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	if (row.FILE_ID) {</span></span>
<span class="line"><span style="color:#E1E4E8;">		this.$api.deleteFile(this, this.server , this.params.row.ID, row.FILE_ID);</span></span>
<span class="line"><span style="color:#E1E4E8;">	} else {</span></span>
<span class="line"><span style="color:#E1E4E8;">		this.$message.warning(&#39;暂无附件&#39;);</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">/**</span></span>
<span class="line"><span style="color:#E1E4E8;"> * 删除附件</span></span>
<span class="line"><span style="color:#E1E4E8;"> * @param {*} handler</span></span>
<span class="line"><span style="color:#E1E4E8;"> * @returns</span></span>
<span class="line"><span style="color:#E1E4E8;"> */</span></span>
<span class="line"><span style="color:#E1E4E8;">deleteFile(handler, SERV_ID, DATA_ID, FILE_ID) {</span></span>
<span class="line"><span style="color:#E1E4E8;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#E1E4E8;">		url: &#39;/SY_COMM_FILE.delete.do&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">		params: {</span></span>
<span class="line"><span style="color:#E1E4E8;">			SERV_ID,</span></span>
<span class="line"><span style="color:#E1E4E8;">			DATA_ID,</span></span>
<span class="line"><span style="color:#E1E4E8;">			FILE_ID,</span></span>
<span class="line"><span style="color:#E1E4E8;">		},</span></span>
<span class="line"><span style="color:#E1E4E8;">	});</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;small&quot;</span><span style="color:#24292E;"> @</span><span style="color:#6F42C1;">click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">deleteFile</span><span style="color:#24292E;">(scope.row)</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;删除&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">// 删除附件</span></span>
<span class="line"><span style="color:#24292E;">deleteFile(row) {</span></span>
<span class="line"><span style="color:#24292E;">	if (row.FILE_ID) {</span></span>
<span class="line"><span style="color:#24292E;">		this.$api.deleteFile(this, this.server , this.params.row.ID, row.FILE_ID);</span></span>
<span class="line"><span style="color:#24292E;">	} else {</span></span>
<span class="line"><span style="color:#24292E;">		this.$message.warning(&#39;暂无附件&#39;);</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">/**</span></span>
<span class="line"><span style="color:#24292E;"> * 删除附件</span></span>
<span class="line"><span style="color:#24292E;"> * @param {*} handler</span></span>
<span class="line"><span style="color:#24292E;"> * @returns</span></span>
<span class="line"><span style="color:#24292E;"> */</span></span>
<span class="line"><span style="color:#24292E;">deleteFile(handler, SERV_ID, DATA_ID, FILE_ID) {</span></span>
<span class="line"><span style="color:#24292E;">	return handler.$tu.utils.request.http({</span></span>
<span class="line"><span style="color:#24292E;">		url: &#39;/SY_COMM_FILE.delete.do&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		method: &#39;post&#39;,</span></span>
<span class="line"><span style="color:#24292E;">		params: {</span></span>
<span class="line"><span style="color:#24292E;">			SERV_ID,</span></span>
<span class="line"><span style="color:#24292E;">			DATA_ID,</span></span>
<span class="line"><span style="color:#24292E;">			FILE_ID,</span></span>
<span class="line"><span style="color:#24292E;">		},</span></span>
<span class="line"><span style="color:#24292E;">	});</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,10),o=[e];function t(c,r,E,y,i,u){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{F as __pageData,m as default};

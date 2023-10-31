# 附件操作
附件的上传/下载/预览操作

## 上传附件
::: code-group
```vue [tu-input]
<!-- :params="{ primaryValue: byid.ID }" 如果是在列表上传承，需传列表行的ID -->
<template>
	<tu-input
		ref="ele"
		:type="$tu.constant.INPUT_TYPE.FILE"
		accept="*"
		keyset="FUJIAN"
		:server="server"
		:id="byid.ID"
		:params="{ primaryValue: byid.ID }"
		v-model="fileList"
		@success="handlerAnnexSuccess"
	/>
</template>

<script>
export default {
	data() {
		return {
			server: '', // 服务
			fileList: [], // 上传的文件列表
			byid: {}, // 表单数据
		}
	}
	methods: {
		// 获取表单 byid 数据
		getByid() {
			this.$api.byid(this, this.server).then((res) => {
				this.byid = res;
			});
		},

		// 文件上传成功
		handlerAnnexSuccess(res) { }
	}
}
</script>

// 获取表单详情数据
byid(handler, server, _PK_ = '') {
	return handler.$tu.utils.request.http({
		url: `/${server}.byid.do`,
		method: 'post',
		params: {
			server,
			_PK_,
		},
	});
},
```

```vue [el-upload]
<template slot="btns" slot-scope="scope">
	<el-upload
		ref="ele"
		:action="$tu.utils.server.getDefaultUploadUrl()"
		:headers="$tu.utils.server.getDefaultUploadHeaders()"
		:multiple="false"
		:file-list="fileList"
		:show-file-list="false"
		:data="uploadData"
		:on-success="handlerAnnexSuccess"
		:before-upload="handlerBeforeUpload"
	>
		<el-button size="small" type="text" @click="autoUpload(scope.row)">上传</el-button>
	</el-upload>
</template>

<script>
export default {
	data() {
		return {
			server: '', // 服务
			fileList: [], // 上传的文件列表
			uploadData: {
				SERV_ID: '', // 服务ID
				FILE_CAT: 'FUJIAN', // 字段ID
				DATA_ID: '', // 需要跟当前页面的ID相同
			},
			currentList: {}, // 点击上传当前列表的数据
		}
	}
	methods: {
		autoUpload(row) {
			this.currentList = row;
			this.uploadData.DATA_ID = row.ID;
		},

		// 上传文件之前的钩子
		async handlerBeforeUpload() {
			const result = await this.$api.systemTemplateQueryFile(this, this.currentList._PK_);

			// 判断是否已有附件
			if (result._DATA_.length > 0) {
				this.$api.systemTemplateDeleteFile(this, this.currentList._PK_);
			}
		},

		// 文件上传成功
		handlerAnnexSuccess(res) { }
	}
}
</script>

<!-- 获取系统模板 - 查询附件 -->
systemTemplateQueryFile(handler, _PK_) {
	return handler.$tu.utils.request.http({
		url: '/SY_COMM_FILE.finds.do',
		method: 'post',
		params: {
			SERV_ID: 'DJH_GSZL_EXP_WORD_MODEL',
			DATA_ID: _PK_
		}
	});
},
```
:::


## 下载附件
```js
<template slot="btns" slot-scope="scope">
	<el-button type="text" @click="autoDownload(scope.row)">下载</el-button>
</template>

// 点击列表行上的附件
autoDownload(row) {
	if (row.FILE_ID) {
		this.$tu.utils.server.download(row.FILE_ID);
	} else {
		this.$message.warning('暂无附件');
	}
},

// 也可以先判断是否存在附件
async autoDownload(row) {
	const result = await this.$api.systemTemplateQueryFile(this, row._PK_);
	if (result._DATA_ && result._DATA_[0]) {
		const url = result._DATA_[0].FILE_ID;
		this.$tu.utils.server.download(url);
	}
},

// 获取系统模板 - 查询附件
systemTemplateQueryFile(handler, _PK_) {
    return handler.$tu.utils.request.http({
        url: '/SY_COMM_FILE.finds.do',
        method: 'post',
        params: {
            SERV_ID: 'DJH_GSZL_EXP_WORD_MODEL',
            DATA_ID: _PK_
        }
    });
},
```

## 预览附件
::: code-group
```vue [卡片页 和 tu-input 预览]
<template>
	<tu-container>
		<tu-page
			:page-handler-options="{
				...pageHandlerOptions,
				previewFile,
			}"
		>
		</tu-page>
	</tu-container>
</template>

<script>
export default {
	props: {
		pageHandlerOptions: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			previewFile: (options) => {
				return this.previewFileHandler(options);
			},
		};
	},
	methods: {
		// 文件预览
		async previewFileHandler({ handler, file }) {
			// file.response 是新上传的附件
			// file.FILE_ID 是详情页获取的附件
			const res = file.response || [];
			const FILE_ID = (res[0] || {}).FILE_ID || file.FILE_ID;
			const resUrl = await this.$api.viewFiles(this, FILE_ID);
			window.open(resUrl.URL);
		},
	}
}
</script>

// http://test-www.cic.inter:9007/OA_USER_WATERMARKER.createFileUrl.do
// 查看附件
viewFiles(handler, fileId) {
	return handler.$tu.utils.request.http({
		url: '/OA_USER_WATERMARKER.createFileUrl.do',
		method: 'post',
		params: {
			fileId
		}
	});
},
```

```vue [el-input 预览]

```

:::

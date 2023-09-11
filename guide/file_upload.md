# 上传下载
附件的上传及下载

## 上传附件
::: code-group

```vue [tu-input]
<template>
	<tu-input
		ref="ele"
		:type="$tu.constant.INPUT_TYPE.FILE"
		accept="*"
		keyset="FUJIAN"
		:server="server"
		:id="primary_ID"
		:params="{ primaryValue: primary_ID }"
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
			primary_ID: '', // 默认页面ID
		}
	}
	methods: {
		// 获取页面ID
		async getFormByid() {
			const res = await this.$api.getFormByid(this, this.server);
			if (res._MSG_ === '') {
				this.primary_ID = res.ID;
			}
		},

		// 文件上传成功
		handlerAnnexSuccess(res) { }
	}
}
</script>


// 获取表单ID
getFormByid(handler, server) {
    return handler.$tu.utils.request.http({
        url: `/${server}.byid.do?server=${server}&_PK_=`,
        method: 'get',
    });
}
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
				SERV_ID: this.server, // 服务ID
				FILE_CAT: 'FUJIAN', // 字段ID
				DATA_ID: '', // 需要跟当前页面的ID相同
			},
			currentList: {}, // 点击上传当前列表的数据
		}
	}
	methods: {
		autoUpload(row) {
			this.currentList = row;
			this.AnnexForm.DATA_ID = row.ID;
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
```

:::


## 下载附件
```js
<template slot="btns" slot-scope="scope">
	<el-button type="text" @click="autoDownload(scope.row)">下载</el-button>
</template>

async autoDownload(row) {
	const result = await this.$api.systemTemplateQueryFile(this, row._PK_);
	if (result._DATA_ && result._DATA_[0]) {
		const url = result._DATA_[0].FILE_ID;
		this.$tu.utils.server.download(url);
	}
},

/**
 * 获取系统模板 - 查询附件
 * SERV_ID 按项目自定义
 * @param {*} handler
 * @returns
 */
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
# 基础页面
除 `template` 部分是固定代码，其他部分都与 `vue` 写法一样，卡片/列表页面的钩子都在 `tu-container` 或 `tu-page` 上配置即可，方法在 `methods` 中写入即可

## 页面结构
```vue
<template>
	<tu-container>
		<tu-page
			ref="page"
			:server="server"
			:type="type || $tu.constant.SERVER_TYPE.LIST"
			:params="params"
			:page-path="pagePath"
			:pageid="pageid"
			:readonly="readonly"
			:query-data="queryData"
			:is-link="isLink"
			:id="id"
			:resetRowDblclick="true"
			:is-add="isAdd"
			:send-refresh="sendRefresh"
			@page-row-btn="pageRowBtnHandler"
			@page-list-btn="pageListBtnHandler"
		>
		</tu-page>
	</tu-container>
</template>

<script>
export default {
	name: '',
	props: {
		type: {
			type: String,
			default: null,
		},
		pagePath: {
			type: String,
			default: null,
		},
		params: {
			type: Object,
			default: {},
		},
		pageid: {
			type: String,
			default: null,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		isAdd: {
			type: Boolean,
			default: false,
		},
		sendRefresh: {
			type: String,
			default: null,
		},
		id: null,
		isLink: {
			type: Boolean,
			default: false,
		},
		queryData: {
			type: Object,
			default: {},
		},
	},
	data() {
		return {
			server: '',
		};
	},
	methods: {
		// 列表按钮事件
		pageListBtnHandler(btn, index) {
			switch (btn.code) { }
		},

		// 行内按钮事件
		pageRowBtnHandler(btn, index, row) {
			switch (btn.code) { }
		},
	},
};
</script>

<style scoped></style>
```

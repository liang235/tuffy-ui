# 基础页面
除 `template` 部分是固定代码，其他部分都与 `vue` 写法一样，卡片/列表页面的钩子都在 `tu-container` 或 `tu-page` 上配置即可，方法在 `methods` 中写入即可

## 页面结构
```vue
<!--
 * @Description: 董事会专委会议档案
-->
<template>
	<tu-container>
		<tu-page
			ref="page"
			:server="server || 'GSZL_DSZW_MEETING_ARCHIVES'"
			:type="type || $tu.constant.SERVER_TYPE.LIST"
			:params="params"
			:page-path="pagePath"
			:pageid="pageid"
			:readonly="readonly"
			:is-link="isLink"
			:query-data="queryData"
			:id="id"
			:resetRowDblclick="true"
			:is-add="isAdd"
			:send-refresh="sendRefresh"
		>
		</tu-page>
	</tu-container>
</template>

<script>
export default {
	name: 'GSZL_DSZW_MEETING_ARCHIVES',
	props: {
		type: {
			type: String,
			default: null,
		},
		server: {
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
		parent: {
			type: Object,
			default() {
				return this;
			},
		},
		queryData: {
			type: Object,
			default: {},
		},
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style scoped></style>
```

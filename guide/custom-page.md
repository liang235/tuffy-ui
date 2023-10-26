# 自定义页面
有些时候，后端生成的页面不能满足当前需求时，就需要自定义手动画页面

```vue
<template>
	<tu-container :is-show="isShow" @page-show="pageShowHandler">
		<tu-page
			ref="page"
			type="auth"
			:server="server"
			:is-link="isLink"
			:pageid="pageid"
			:params="params"
			:page-path="pagePath"
			@page-after-auth-refresh="pageAfterAuthRefresh"
		>
            <div>在这里写自定义内容即可</div>
		</tu-page>
	</tu-container>
</template>

<script>
export default {
	name: '',
	props: {
		isShow: {
			type: Boolean,
			default: false,
		},
		pageid: {
			type: String,
			default: null,
		},
		isLink: {
			type: Boolean,
			default: false,
		},
		params: {
			type: Object,
			default: {},
		},
		pagePath: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			server: '',
		};
	},
	// 组件方法
	methods: {
		// 页面显示
		pageShowHandler() { },

		// 针对自定义页面加载完成后事件
		pageAfterAuthRefresh() { },
	},
};
</script>

<style scoped></style>

```
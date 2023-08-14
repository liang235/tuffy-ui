# 基础页面
除 `template` 部分是固定代码，其他部分都与 `vue` 写法一样，卡片/列表页面的钩子都在 `tu-container` 或 `tu-page` 上配置即可，方法在 `methods` 中写入即可

## 页面结构
```vue
<template>
	<tu-container>
		<tu-page ref="page"></tu-page>
	</tu-container>
</template>

<script>
export default {
    name: '',
    methods: {}
}
</script>

<style lang="scss" scoped></style>
```

## [页面属性](./attributes)
- `tu-container` 和 `tu-page` 都可以配置不同的属性，用作不同的场景
- `server` 是很重要的一个属性，如果配置的为后端生成页面 `server` 必须要有
```vue
<template>
	<tu-container>
		<tu-page
			ref="page"
			:server="server || 'xxx'"
			:type="type || $tu.constant.SERVER_TYPE.LIST"
			:readonly="readonly"
			@page-list-btn="pageListBtnHandler"
		>
		</tu-page>
	</tu-container>
</template>

<script>
export default {
	name: 'xxx',
	props: {
		type: {
			type: String,
			default: null,
		},
		server: {
			type: String,
			default: null,
		},
		params: {
			type: Object,
			default: {},
		},
		readonly: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		// 列表按钮事件
		pageListBtnHandler(btn, index) {
			const that = this;

			switch (btn.code) {
				// 发布
				case 'addAuth':
					console.log('发布按钮')
					break;
			}
		}
	},
};
</script>
```
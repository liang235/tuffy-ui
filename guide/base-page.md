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
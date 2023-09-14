# 页面插槽
目前只对列表页起作用

## 基础示例
```vue
<template>
	<tu-container>
		<tu-page ref="page" :server="server">
			<template slot="ZMCL" slot-scope="scope">
				{{ scope.row.ZMCL }}
			</template>
		</tu-page>
	</tu-container>
</template>
```
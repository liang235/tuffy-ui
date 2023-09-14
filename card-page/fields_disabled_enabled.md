# 字段禁用/解禁
根据某一个字段值的变化，来禁用/解禁另一个字段值

## 示例
```js
// @page-form-change="pageFormChange
pageFormChange(ele){
	const pageHandler = this.$refs.page;
	const { key, value } = ele;

	switch (key) {
		// 是否现任
		case 'ISXR':
			const disabledList = ['DS_QUITDATE'];
			if (value == '2') {
				pageHandler.enabledItems(disabledList);
			} else {
				pageHandler.disabledItems(disabledList);
			}
			break;
	}
}

```
# 模板引用
`$refs.page` 可以获取当前页面的组件实例，`pageHandler` 中有些封装的方法可供调用
```js
<tu-page ref="page"></tu-page>

const pageHandler = this.$refs.page;

// 获取页面表单数据
pageHandler.getFormData()
```

## 卡片方法
| 方法          | 说明             | 参数               |
| :------------ | :--------------- | :----------------- |
| getFormData   | 获取表单数据     | —                  |
| getCardBtns   | 获取页面按钮数组 | —                  |
| disabledItems | 禁用字段         | ['字段1', '字段2'] |
| enabledItems  | 解禁字段         | ['字段1', '字段2'] |

## 列表方法
| 方法                 | 说明             | 参数 |
| :------------------- | :--------------- | :--- |
| getListData          | 获取列表数据     | —    |
| getListBtns          | 获取页面按钮数组 | —    |
| getListSelectionData | 获取选中的数据   | —    |
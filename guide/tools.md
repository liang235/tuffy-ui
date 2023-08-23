# tools 工具
`tools` 属于 `$tu.utils` 下的工具类

## copyObject 复制对象
```js
const pageHandler = this.$refs.page;
const formData = this.$tu.utils.tools.copyObject(pageHandler.getFormData());
```

## copyArray 复制数组
```js
const pageHandler = this.$refs.page;
const cardBtns = this.$tu.utils.tools.copyArray(pageHandler.getCardBtns());
```
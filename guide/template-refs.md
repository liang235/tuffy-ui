# 模板引用
`$refs.page` 可以获取当前页面的组件实例，`pageHandler` 中有些封装的方法可供调用
```js
<tu-page ref="page"></tu-page>

const that = this;
const pageHandler = that.$refs.page;
```

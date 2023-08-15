# utils 工具类
`utils` 中有一些封装的方法，可以直接调用

## tools 工具

### copyObject 复制对象
```js
const that = this;
const pageHandler = that.$refs.page;
const formData = that.$tu.utils.tools.copyObject(pageHandler.getFormData());
```
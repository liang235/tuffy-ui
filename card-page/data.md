# 表单数据

## 获取表单数据
``` js
const that = this;
const pageHandler = that.$refs.page;
const formData = pageHandler.getFormData();
```

## 修改表单数据
```js
const that = this;
const pageHandler = that.$refs.page;
const formData = that.$tu.utils.tools.copyObject(pageHandler.getFormData());

formData.AGE = 20;
// 修改完数据之后，还需要重新设置下 formData
pageHandler.setAuthFormData(formData);
```
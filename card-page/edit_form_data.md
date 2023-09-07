# 修改表单数据
监听表单字段数据并修改的时候使用

```js
// @page-form-change="formChangeHandler"
formChangeHandler(ele) {
    const pageHandler = this.$refs.page; // 当前页面 ref
    const key = ele.key; // 字段名称
    const getFormData = pageHandler.getFormData(); // 表单数据
    const formData = this.$tu.utils.tools.copyObject(getFormData);

    switch (key) {
        case 'AGE':
            formData.AGE = 20;
            // 修改完数据之后，还需要重新设置下 formData
            pageHandler.setAuthFormData(formData);
            break;
    }
},
```
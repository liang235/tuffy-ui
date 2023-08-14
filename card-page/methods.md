# 钩子方法
卡片页面的方法函数，对应各种 `按钮` 事件，默认都是在 `tu-page` 上的钩子

## 保存前
`:before-save="beforeSave"`
```js
/**
 * 保存前事件
 * data 是需要保存的数据
*/
beforeSave(data) {
    // info 部分按需求自定义修改
    let info = Object.assign({}, data);
    info.S_MTIME = this.$tu.utils.tools.formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss:S'); // 随机时间戳

    // Promise 这部分是固定的
    return new Promise((resolve, reject) => {
        resolve(info);
    }).catch((e) => reject(e));
},
```

## 保存后
`@page-after-save="pageAfterSave"`
```js
/**
 * 保存成功后事件
 * cardData 保存后的新数据
 * oldCardData 保存前的数据
*/
pageAfterSave(cardData, oldCardData) {
    // 按需求自定义修改
},
```

## 监听表单字段数据
`@page-form-change="formChangeHandler"`
```js
// 字段变化
formChangeHandler(ele) {
    const that = this;
    const pageHandler = that.$refs.page; // 当前页面 ref
    const key = ele.key; // 字段名称
    const value = ele.value; // 字段值
    const formData = that.$tu.utils.tools.copyObject(pageHandler.getFormData());

    switch (key) {
        case 'AGE':
            formData.AGE = 20;
            // 修改完数据之后，还需要重新设置下 formData
            pageHandler.setAuthFormData(formData);
            break;
    }
},
```
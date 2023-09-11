# 保存前修改数据
保存前需要修改数据的时候时候

```js
// :before-save="beforeSave"
beforeSave(data) {
    // info 部分按需求自定义修改
    const info = Object.assign({}, data);
    info.S_MTIME = this.$tu.utils.tools.formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss:S'); // 随机时间戳

    // Promise 这部分是固定的
    return new Promise((resolve, reject) => {
        resolve(info);
    }).catch((e) => reject(e));
},
```
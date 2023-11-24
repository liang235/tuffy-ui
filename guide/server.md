# server
`server` 属于 `$tu.utils` 下的工具类

## 系统方法

### 获取表单数据
```js
/**
 * @param {*} this 当前上下文对象
 * @param {*} this.server 当前页面服务
 * @param {*} ID 当前表单主键
 * @returns
 */
this.$api.byid(this, this.server, this.params.ID);
```

### 批量保存
```js
/**
 * @param {*} this 当前上下文对象
 * @param {*} this.server 当前页面服务
 * @param {*} batchData 保存的数组对象
 * @param {*} false 不显示提示消息
 * @returns
 */
this.$tu.utils.server.batchSave(this, this.server, false);
```

## openPage 跳转页面
一般在卡片/列表页面按钮点击的时候使用
```js
data() {
    return {
        server: 'DJH_GSZL_DS_APPRAISE',
    };
},

// 行内按钮事件
pageRowBtnHandler(btn, index, row) {
    switch (btn.code) {
        case 'list_update':
            this.openPageFun(btn, row, false);
            break;
    }
},

// 跳转页面
openPageFun(btn, row = {}, isAdd = true) {
    const title = `履职评价档案·${btn.label}`;
    const server = `views/pages/${this.server}_DETAIL.vue`;

    const data = {
        data: {
            title,
            server,
            pageServer: this.server,
        },
        query: { isAdd, row }, // 子页面根据 props.params 参数接收
    };

    this.$tu.utils.server.openPage(this, data, true);
},
```
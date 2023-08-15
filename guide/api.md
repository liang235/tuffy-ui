# API 接口
直接在 `src/api/index.js` 中封装接口即可
```js
// api 接口封装
getDictionary(handler, info) {
    return handler.$tu.utils.request.http({
        url: '/SY_COMM_INFO.dict.do',
        method: 'post',
        params: info,
    });
},
```

## 获取数据字典
```js
// 获取字典中的数据
queryDictionary(type) {
    const that = this;
    const info = {
        DICT_ID: type,
    };
    that.$api.getDictionary(that, info).then((data) => {
        if (data.DICT_ID) {
            switch (type) {
                // 出席状态
                case 'DS_CXZT':
                    that.tableCxztData = data.CHILD;
                    break;
            }
        }
    });
},

// 调用方法获取字典
that.queryDictionary('DS_CXZT');
```
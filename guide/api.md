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
data() {
    return {
        DJH_JS_MEET_TYPE: [],
        DJH_JS_MEET_ZKFS: [],
    };
},
methods: {
    // 初始化数据字典
    async initDictionary() {
        const dictionaryTypes = ['DJH_JS_MEET_TYPE', 'DJH_JS_MEET_ZKFS'];
        await Promise.all(dictionaryTypes.map(type => this.queryDictionary(type)));
    },

    // 获取数据字典
    async queryDictionary(type) {
        const info = { DICT_ID: type };
        const { CHILD, DICT_ID } = await this.$api.getDictionary(this, info);
        if (DICT_ID) {
            this[type] = CHILD;
        }
    },
}
```
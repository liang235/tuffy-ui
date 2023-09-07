# 页面属性方法
包含页面的方法事件和属性，都是在 `tu-page` 上的参数方法

## 通用方法
| 类型               | 说明                 | 默认值 |
| :----------------- | :------------------- | :----- |
| reset-row-dblclick | 是否禁用页面双击事件 | false  |
| use-list-show-back | 是否添加返回按钮     | false  |
| is-link-readonly   | 关联服务是否为只读   | false  |
| @page-after-auth-refresh   | 针对自定义页面加载完成后事件   | —  |
| @page-before-query   | 页面数据加载之前   | —  |

## 卡片页面
| 类型           | 说明         | 回调参数   |
| :------------- | :----------- | :--------- |
| :before-save | 保存前事件 | data |
| @page-after-save | 保存后事件 | cardData, oldCardData |
| @page-card-btn | 卡片按钮事件 | btn, index |
| @page-form-change | 监听表单字段 | ele |

## 列表页面
| 类型           | 说明         | 回调参数   |
| :------------- | :----------- | :--------- |
| @page-list-btn   | 列表按钮事件   | btn, index |
| @page-row-btn   | 行内按钮事件   | btn, index, row |
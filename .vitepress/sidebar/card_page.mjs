/*
 * @Description: 卡片页面
 */
const commonPath = '/card-page' // 根路径

export default [
	{
		text: '卡片页面',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '什么是卡片页面', link: `${commonPath}/index.md` },
			{ text: '保存前修改', link: `${commonPath}/before_save.md` },
			{ text: '修改表单数据', link: `${commonPath}/edit_form_data.md` },
			{ text: '字段禁用/解禁', link: `${commonPath}/fields_disabled_enabled.md` },
		],
	},
]

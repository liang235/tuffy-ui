/*
 * @Description: 列表页面
 */
const commonPath = '/list-page' // 根路径

export default [
	{
		text: '列表页面',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '什么是列表页面', link: `${commonPath}/index.md` },
		],
	},
]

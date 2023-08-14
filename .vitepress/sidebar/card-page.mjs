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
			{ text: '介绍', link: `${commonPath}/index.md` },
			{ text: 'methods', link: `${commonPath}/methods.md` },
		],
	},
]

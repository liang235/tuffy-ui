/*
 * @Description: 页面指南
 */
const commonPath = '/guide' // 根路径

export default [
	{
		text: '指引',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '基础页面', link: `${commonPath}/base-page` },
			{ text: '自定义页面', link: `${commonPath}/custom-page` },
			{ text: '页面属性', link: `${commonPath}/attributes`},
			{ text: '模板引用', link: `${commonPath}/template-refs`},
			{ text: '日期工具', link: `${commonPath}/date` },
			{ text: 'utils 工具类', link: `${commonPath}/utils` },
		],
	},
]
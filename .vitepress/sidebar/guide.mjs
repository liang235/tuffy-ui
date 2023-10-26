/*
 * @Description: 页面指南
 */
const commonPath = '/guide' // 根路径

export default [
	{
		text: '指南',
		collapsible: false, // 是否可折叠的侧边栏组
		collapsed: false, // 是否展开侧边栏组，默认展开，设置为 true 为隐藏
		items: [
			{ text: '基础页面', link: `${commonPath}/base-page.md` },
			{ text: '自定义页面', link: `${commonPath}/custom-page.md` },
			{ text: '页面属性方法', link: `${commonPath}/attributes.md`},
			{ text: '模板引用', link: `${commonPath}/template-refs.md`},
			{ text: '页面插槽', link: `${commonPath}/slots.md`},
			{ text: 'API 接口', link: `${commonPath}/api.md` },
			{ text: 'utils', link: `${commonPath}/utils.md` },
			{ text: 'tools', link: `${commonPath}/tools.md` },
			{ text: 'server', link: `${commonPath}/server.md` },
			{ text: '日期工具', link: `${commonPath}/date.md` },
			{ text: '附件操作', link: `${commonPath}/file-upload.md` },
		],
	},
]
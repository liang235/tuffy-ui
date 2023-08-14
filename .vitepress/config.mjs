import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs' // 侧边栏
import nav from './navbar.mjs' // 头部导航

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "tuffy-ui",
	description: "tuffy-ui 文档",
	lang: 'zh-cn', // 语言
	base: '/tuffy-ui/', // 基础路径
	head: [  ['link', { rel: 'icon', href: '/vitepress-logo-mini.svg' }]],

	// https://vitepress.dev/reference/default-theme-config
	themeConfig: {
		logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },

		// 多个侧边栏，根据页面路径显示不同的侧边栏
		sidebar,

		// 头部导航
		nav,

		outline: 'deep',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		],

		// https://vitepress.qzxdp.cn/reference/default-theme-search.html
		search: {
			provider: 'local',
			options: {
				translations: {
					button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
					modal: {
						noResultsText: '无法找到相关结果',
						resetButtonTitle: '清除查询条件',
						footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' },
					},
				},
			},
		},
	},

	markdown: {
		lineNumbers: true, // 代码块显示行号
	},
})

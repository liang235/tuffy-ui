import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mjs' // 侧边栏
import nav from './navbar.mjs' // 头部导航

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "tuffy-ui",
	description: "tuffy-ui 文档",
	lang: 'zh-cn', // 语言
	base: '/tuffy-ui/', // 基础路径
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config

		// 多个侧边栏，根据页面路径显示不同的侧边栏
		sidebar,

		// 头部导航
		nav,

		outline: 'deep',

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }
		]
	}
})

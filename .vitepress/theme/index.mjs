import Theme from 'vitepress/theme' // 主题方案
import ZoomImg from './components/ZoomImg.vue' // 图片缩放组件

export default {
	...Theme,
	enhanceApp({ app }) {
		app.component('ZoomImg', ZoomImg)
	},
}
// import plugin from 'portal-vue'
import DefaultTheme from 'vitepress/theme'
import { install } from '@elwinvaneede/vue-lib-test'
export default {
	...DefaultTheme,
	enhanceApp({ app }) {
		app.use(install)
	},
}

module.exports = {
	title: 'VueMonoRepoLib', //TODO: CHANGE_ME
	description: 'Replace this descriptions with something nice!',
	themeConfig: {
		editLink: {
			pattern:
				'https://github.com/elwinvaneede/vue-lib-monorepo-test/edit/main/docs/:path',
			text: 'Edit this page on GitHub',
		},
		lastUpdated: 'Last Updated',
		nav: [
			{ text: 'Installation', link: '/guide/installation' },
			{
				text: 'Guide',
				link: '/guide/getting-started',
			},
			{
				text: 'API',
				link: '/api',
			},
		],
		sidebar: {
			'/guide/': getGuideSidebar(),
			'/api/': getApiSidebar(),
		},
	},
}

function getGuideSidebar() {
	return [{ text: 'Getting Started', link: '/guide/getting-started' }]
}
function getApiSidebar() {
	return []
}

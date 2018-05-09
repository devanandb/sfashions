const webpack = require('webpack');
module.exports = {
	/*
	** Headers of the page
	*/
	head: {
		title: 'sfashions',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'eCommerce site for corporate products and jewelry.' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans:400,700'}
		],
		script: [
			{src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'},
			{src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.42/js/uikit.min.js'}
		]
	},
	env: {
		categories: []
	},
	css: [
		// node.js module but we specify the pre-processor
		
		{ src: '~/assets/scss/base.scss', lang: 'scss' }
	],
	plugins: [
		{ src: '~plugins/ga.js', ssr: false }
	],
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#3B8070' },
	/*
	** Build configuration
	*/
	build: {
		/*
		** Run ESLint on save
		*/
		vendor: ['axios', 'lodash', 'jquery', 'uikit'],
		plugins: [
	      // set shortcuts as global for bootstrap
	      new webpack.ProvidePlugin({
	        $: 'jquery',
	        jQuery: 'jquery',
	        'window.jQuery': 'jquery'
	      })
	    ],

		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		},
	}
}

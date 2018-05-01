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
			{src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.42/js/uikit.min.js'},
			{src: '//downloads.mailchimp.com/js/signup-forms/popup/embed.js'}
		]
	},
	env: {
		categories: [
			{
				"id": 1,
				"name": "Bangles",
				"slug": "bangles",
				"code": "SFB001",
				"description": "Bangles: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
				"image": "bangles.jpg",
				"order": 1,
				"published": 1,
				"created_at": "2018-02-09 00:37:30",
				"updated_at": "2018-02-09 00:37:30",
				"deleted_at": null,
				"popular": true,
				"products": [
					{
						"id": 1,
						"name": "",
						"code": "SFB001",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB001.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					},
					{
						"id": 2,
						"name": "",
						"code": "SFB002",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB001.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					},
					{
						"id": 3,
						"name": "",
						"code": "SFB003",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB003.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, porro!",
						"colors": []
					},
					{
						"id": 4,
						"name": "",
						"code": "SFB004",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB004.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					},
					{
						"id": 5,
						"name": "",
						"code": "SFB005",
						"sizes": [
							{
								"title": "2.0",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.2",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB003.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					},
					{
						"id": 6,
						"name": "",
						"code": "SFB006",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB006.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					},
					{
						"id": 7,
						"name": "",
						"code": "SFB007",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB003.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					},
					{
						"id": 8,
						"name": "",
						"code": "SFB008A",
						"sizes": [
							{
								"title": "2.4",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.6",
								"unit": "",
								"help": ""
							},
							{
								"title": "2.8",
								"unit": "",
								"help": ""
							}
						],
						"images": [
							{
								"src": "SFB008.jpg",
								"alt": "",
								"filename": ""
							}
						],
						"cost": 200.00,
						"description": "Gold Plated Bangles - Set of 8",
						"colors": []
					}
				]
			},
			{
				"id": 2,
				"name": "Oxidised Earrings",
				"slug": "oxidised-earrings",
				"code": "OXE",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
				"image": "oxidised_e.jpg",
				"order": 2,
				"published": 1,
				"created_at": "2018-02-09 00:37:30",
				"updated_at": "2018-02-09 00:37:30",
				"deleted_at": null,
				"popular": true
			}, {
			"id": 3,
			"name": "Oxidised Thread Jewelry",
			"slug": "oxidised-thread-jewelry",
			"code": "OXTJ",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "oxidised_tj.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": false
		}, {
			"id": 4,
			"name": "Fashion Jewelry",
			"slug": "fashion-jewelry",
			"code": "FSJ",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "fashion_j.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": false
		}, {
			"id": 5,
			"name": "Traditional Jewelry",
			"slug": "traditional-jewelry",
			"code": "TJ",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "traditional_j.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": false
		}, {
			"id": 6,
			"name": "Bracelets\/ Bangles",
			"slug": "bracelets-bangles",
			"code": "OXE",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "bangles.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": false
		}, {
			"id": 7,
			"name": "Anklets",
			"slug": "anklets",
			"code": "AK",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "anklets.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": true
		}, {
			"id": 8,
			"name": "Maang Tika",
			"slug": "maang-tika",
			"code": "MNT",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "maang_t.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": false
		}, {
			"id": 9,
			"name": "Bracelets\/ Bangles",
			"slug": "bracelets-bangles",
			"code": "OXE",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "bangles.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": true
		}, {
			"id": 10,
			"name": "Anklets",
			"slug": "anklets",
			"code": "AK",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
			"image": "anklets.jpg",
			"order": 2,
			"published": 1,
			"created_at": "2018-02-09 00:37:30",
			"updated_at": "2018-02-09 00:37:30",
			"deleted_at": null,
			"popular": false
		}
		]
	},
	css: [
		// node.js module but we specify the pre-processor
		
		{ src: '~/assets/scss/base.scss', lang: 'scss' }
	],
	plugins: [
		// { src: '~/plugins/uikit.js'}
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

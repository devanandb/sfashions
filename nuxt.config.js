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
		]
	},
	env: {
		categories:[
				{
				"id": 1,
				"name": "Oxidised Jewelry",
				"slug": "oxidised-jewelry",
				"code": "OXJ",
				"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, sequi.",
				"image": "oxidized_j.jpg",
				"order": 1,
				"published": 1,
				"created_at": "2018-02-09 00:37:30",
				"updated_at": "2018-02-09 00:37:30",
				"deleted_at": null
			}, {
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
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
				"deleted_at": null
			}
		]
	},
	css: [
		// node.js module but we specify the pre-processor
		{ src: '~/assets/scss/override.scss', lang: 'scss' },
		{ src: '~/assets/scss/base.scss', lang: 'scss' },
		{ src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
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
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	}
}

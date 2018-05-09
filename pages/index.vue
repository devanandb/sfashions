<template>
	<div>
		<section class="hero">
			<!-- <img src="/img/topskew.svg" width="100%" alt=""> -->
			<div class="uk-container">
				<div class="hero-blk">
					<div class="uk-grid">
						<div class="uk-width-3-4@m">
							<h1 class="uk-dark">Flaunt your style</h1>
							<p>Samiksha Fashions is a leading vendor for women's jewelery needs, be it for everyday or a special occassion!</p>
						</div>
					</div>
					<div class="column">
						<div class="text-blk">
							
						</div>
					</div>
					<div class="column">
						<div class="img-blk">
							
						</div>
					</div>
					
				</div>
			</div>
		</section>

		<section class="popular">
			<div class="uk-container">
				<div class="uk-container">
					<div class="uk-grid">
						<!-- <div class="uk-width-2-5@m">
							<div v-if="popularView" class="column is-two-fifths">
								<h2 class="title is-2">Popular</h2>
								<p>Checkout our most popular collections. Numquam quis vel doloremque perferendis nam deserunt officiis.</p>
								<br>
								<br>
								<br>
								<a v-on:click="toggleView('all')" class="arrow-link">View all</a>
							</div>
							<div v-if="!popularView" class="column is-two-fifths">
								<h2 class="title is-2">All categories</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quis vel doloremque perferendis nam deserunt officiis.</p>
								<br>
								<br>
								<br>
								<a v-on:click="toggleView('popular')" class="arrow-link">View popular</a>
							</div>
						</div> -->
						<div class="uk-width-3-5@m">
							<div uk-grid uk-height-match="target: .card">
						
								<div class="uk-width-1-2@m" v-for="category in categories" :key="category.id">
									<category-card :category="category"></category-card>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="about">
			sdfsdf
		</section>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import CategoryCard from '~/components/CategoryCard.vue';
import axios from 'axios';
import _ from 'lodash';
import { mapState } from 'vuex';


import store from '~/store/categories';

export default {
	fetch({ store }) {
		store.commit('getCategories')
	},
	computed: mapState([
		'categories'
	]),
	components: {
		AppLogo, CategoryCard
	},
	head () {
		return {
			title: 'Home | Samiksha Fashions',
			meta: [
				{ hid: 'description', name: 'description', content: 'Samiksha Fashions is a leading vendor for women\'s jewelery needs, be it for day to day or a special occassion!' }
			]
		}
	},
	methods: {
		// toggleView: function(view) {
		// 	this.filteredCategories = [];
		// 	console.log(view);
		// 	if (view === 'popular') {
		// 		this.filteredCategories = _.chunk(_.filter(process.env.categories, function(o) { return o.popular; }), 4);
		// 		this.popularView = true;
		// 	} else {
		// 		this.filteredCategories = _.chunk(process.env.categories, 4);
		// 		this.popularView = false;
		// 	}
			
		// }
	}
}
</script>

<style lang="scss">
	.hero {
		// background-color: #ff5543;
		background-image: url(~/img/justskew.png);
		background-size: cover;
		color: #fff;
		background-position: bottom;
		background-repeat: no-repeat;
		// padding-top: 200px;
		background-color: #f6f6f6;
		img {
			position: absolute;
			z-index: 0;
		}
	}
	.hero-blk {
		padding: 120px 0px 250px;
		position: relative;
		z-index: 1;
		h1 {
			font-size: 44px;
			line-height: 60px;
			font-weight: 700;
			color: #fff;
		}
		p {
			font-size: 20px;
			margin-top: 20px;
		}
	}

	.arrow-link {
		display: inline-block;
		color: #ff5543;
		font-weight: 600;
		&:after {
			content: ' ›';
			font-size: 18px;
		}
		&:hover {
			// margin-right: 4px;
			color: #ff5543;
		}
	}


	.is-catlink {
		font-size: 14px;
		line-height: 20px;
	}

	.about, .popular {
		padding: 150px 0px 200px;
		// background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHgxPSIuNSIgeTE9IjEiIHgyPSIuNSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMWUydjFlMkgweiIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=);
	 //    background-size: 100%;
	 //    background-image: -webkit-gradient(linear,50% 100%,50% 0%,color-stop(0%,#f6f6f6),color-stop(100%,#ffffff));
	 //    background-image: -moz-linear-gradient(bottom,#f6f6f6 0%,#ffffff 100%);
	 //    background-image: -webkit-linear-gradient(bottom,#f6f6f6 0%,#ffffff 100%);
	 //    background-image: linear-gradient(to top,#f6f6f6 0%,#ffffff 100%);
		background-color: #f6f6f6;
	}
</style>

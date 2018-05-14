<template>
	<div>
		<section class="category-hero">
			<div class="uk-container">
				<!-- <h1 class="is-h1">{{ currcategory.name }}</h1> -->
				<!-- <p>{{ currcategory.description }}</p> -->
			</div>
		</section>
		<section class="category-blk">
			<div class="uk-container">
				<div class="" uk-grid>
					<div class="uk-width-3-4@m">
						<div class=" is-multiline is-mobile" uk-grid>
							<!-- <div class="uk-width-1-3@m" v-for="product in currcategory.products" :key="product.id">
								<product-card :product="product"></product-card>
							</div> -->
						</div>
					</div>

					<div class="uk-width-1-4@m">
						<ul class="uk-list">
							<li class="each-link" v-for="category in $store.state.categories" :key="category.id">
								<nuxt-link :to="'/category/'+category.slug" >{{category.name}}</nuxt-link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios';
import ProductCard from '~/components/ProductCard.vue';
import store from '~/store/store';
import { mapState } from 'vuex'

export default {
	// asyncData({store, params}) {
	// 	let allcategories = store.state.categories;
	// 	// let category = allcategories;
	// 	// const category = allcategories.find((category) => String(category.slug) === params.index);
	// 	// let cslug = params.index;
	// 	return {category: allcategories}
	// },
	// data: function() {
	// 	return {
	// 		categories: this.$store.state.categories
	// 	}
	// },
	fetch({ store }) {
	    // store.commit('increment')
	    console.log(categories);
	},
	computed: mapState([
	    'categories'
	]),
	components: {
		ProductCard
	},
	head () {
		return {
			// title: this.currcategory.name + ' | Samiksha Fashions',
			meta: [
				// { hid: 'description', name: 'description', content: this.currcategory.description }
			]
		}
	}
}
</script>

<style lang="scss">
	.category-hero {
		// background-color: #ff5543;
		// color: #fff;
		padding: 60px 0px 30px;
		h1 {
			font-size: 40px;
			line-height: 60px;
			font-weight: 700;
		}
		p {
			font-size: 20px;
			margin-top: 20px;
		}
	}
	.hero-blk {
		padding: 200px 0px;
		h1 {
			font-size: 44px;
			line-height: 60px;
			font-weight: 700;
		}
		p {
			font-size: 20px;
			margin-top: 20px;
		}
	}

	.category-blk {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHgxPSIuNSIgeTE9IjEiIHgyPSIuNSIgeTI9IjAiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Y2ZjZmNiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMWUydjFlMkgweiIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=);
	    background-size: 100%;
	    background-image: -webkit-gradient(linear,50% 100%,50% 0%,color-stop(0%,#f6f6f6),color-stop(100%,#ffffff));
	    background-image: -moz-linear-gradient(bottom,#f6f6f6 0%,#ffffff 100%);
	    background-image: -webkit-linear-gradient(bottom,#f6f6f6 0%,#ffffff 100%);
	    background-image: linear-gradient(to top,#f6f6f6 0%,#ffffff 100%);
	    padding-bottom: 100px;
	}
</style>

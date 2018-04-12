<template>
	<div>
		<section class="hero">
			<div class="container">
				<div class="columns hero-blk">
					<div class="column">
						<div class="text-blk">
							<h1 class="is-h1">Flaunt your style</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae esse alias suscipit ut, minus consequuntur.</p>
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
			<ul>
				<li v-for="category in categories" :key="category.id">
					<nuxt-link name="category" :to="'/category/'+category.slug">{{ category.name }}</nuxt-link>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import axios from 'axios';

export default {
	asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    	return axios.get('http://localhost:3002/categories.json')
		.then((res) => {
			return { categories: res.data }
		})
	},
	components: {
		AppLogo
	},
	head () {
		return {
			title: 'Home | Samiksha Fashions',
			meta: [
				{ hid: 'description', name: 'description', content: 'Samiksha Fashions is a leading vendor for women\'s jewellery needs, be it for day to day or a special occassion!' }
			]
		}
	}
}
</script>

<style lang="scss">
	.hero {
		background-color: #ff5543;
		color: #fff;
	}
	.hero-blk {
		padding: 150px 0px 200px;
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
</style>

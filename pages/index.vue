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
			<div class="container">
				<div class="columns">
					<div class="column is-one-third">
						<h2 class="title is-2">Popular</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, consectetur.</p>
					</div>
					<div class="column">
						<div class="columns">
							<div class="column" v-for="n in 3" :key="n">
								<div class="card">
									<div class="card-image">
										<figure class="image is-4by3">
											<img :src="'/img/' + categories[n].image" :alt="categories[n].name">
										</figure>
									</div>
									<div class="card-content">
										<div class="content">
											<p class="title is-6">{{categories[n].name}}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ul>
					<li v-for="category in categories" :key="category.id">
						<nuxt-link name="category" :to="'/category/'+category.slug">{{ category.name }}</nuxt-link>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';
import axios from 'axios';

export default {
	asyncData({ req, env, params }) {
		return { categories: env.categories }
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

	.popular {
		padding: 150px 0px 200px;
	}
</style>

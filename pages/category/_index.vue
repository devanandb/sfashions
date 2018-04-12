<template>
	<div>
		<section>
			{{name}}
		</section>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	asyncData({ params, env, error }) {
		const category = env.categories.find((category) => String(category.slug) === params.index);
		if (!category) {
		  return error({ message: 'Category not found', statusCode: 404 });
		}
		return category;
	},
	components: {
		
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
</style>

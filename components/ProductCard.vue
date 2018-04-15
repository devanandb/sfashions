<template>
	<div class="card" name="product" >
		<div class="card-image">
			<figure class="image is-1by1">
				<img :src="'/img/' + product.code + '.jpg'" :alt="product.name">
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<p class="title is-prodname">{{product.name ? product.name : product.code }}</p>
				<p class="is-proddesc">{{ product.description }}</p>
				<div class="columns">
					<div class="column is-three-quarters">
						<div class="is-size isvcentered" v-for="size in product.sizes" :key="size.title">
							{{ size.title }}
						</div>
					</div>
					<div class="column">
						<div class="is-pulled-right is-cost">&#8377;{{ product.cost }}</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		props: ['product']
	}
</script>
<style lang="scss">
	
	.card {
		position: relative;
	    display: block;
	    background-color: #fff;
	    margin-bottom: 10px;
	    cursor: pointer;
	    -moz-box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    -webkit-box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    transition: all .2s ease-in-out 0s;
	    transform: translateY(0)!important;
	    .card-content {
	    	min-height: 100px;
	    	.is-prodname {
	    		font-size: 18px;
	    	}
	    	.is-proddesc {
	    		font-size: 14px;
	    		color: #888;
	    	}

	    	.is-size {
				text-align: center;
				background-color: lighten(#5FC26C, 35%);
				font-weight: 600;
				color: #666;
				font-size: 18px;
				line-height: 45px;
				display: inline-block;
				padding: 0px 10px;
				margin-right: 10px;
	    	}

	    	.is-cost {
	    		font-weight: 600;
	    		font-size: 28px;
	    		color: #5FC26C;
	    	}
	    }
	    .card-image {
	    	padding: 10px;
	    	border-bottom: 1px solid #eee;
	    }
	    &:hover {
	    	-moz-box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    -webkit-box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    transform: translateY(-8px)!important;
    	    .is-catlink {
    	    	// color: #ff5543;
    	    }
	    }
	}
</style>

<template>
	<div class="card" name="product" >
		<div class="card-image" uk-lightbox>
			<a :href="'/img/' + product.code + '.jpg'">
				<img :src="'/img/' + product.code + '.jpg'" :alt="product.name">
			</a>
		</div>
		<div class="card-content">
			<div class="content">
				<p class="title is-prodname">{{product.name ? product.name : product.code }}</p>
				<p class="is-proddesc">{{ product.description }}</p>
				<div class="xxxs">
					<div class="" uk-grid>
						<div class="uk-width-3-4@m">
							<div class="is-size" v-for="size in product.sizes" :key="size.title">
								{{ size.title }}
							</div>
						</div>
						<div class="uk-width-1-4@m">
							<div class="is-cost">

								{{ product.cost }}
							</div>
						</div>
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
	    	padding: 10px;
	    	.is-prodname {
	    		font-size: 18px;
	    		font-weight: 600;
	    	}
	    	.is-proddesc {
	    		font-size: 14px;
	    		color: #888;
	    	}

	    	.is-size {
				text-align: center;
				background-color: lighten(#5FC26C, 35%);
				font-weight: 400;
				color: #999;
				font-size: 14px;
				line-height: 20px;
				display: inline-block;
				padding: 0px 10px;
				margin-right: 8px;
				margin-bottom: 8px;
	    	}

	    	.is-cost {
	    		font-weight: 400;
	    		font-size: 22px;
	    		color: #666;
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
    	    
	    }
	}
</style>

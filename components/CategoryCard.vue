<template>
	<nuxt-link class="card" name="category" :to="'/category/'+category.slug">
		<div class="card-image">
			<figure class="image">
				<img :src="'/img/' + category.image" :alt="category.name">
			</figure>
		</div>
		<div class="card-content">
			<div class="content">
				<p class="title is-catlink">{{category.name}}</p>
			</div>
		</div>
	</nuxt-link>
</template>

<script>
	export default {
		props: ['category']
	}
</script>
<style lang="scss">
	
	.card {
		position: relative;
	    display: block;
	    background-color: #fff;
	    // margin-bottom: 10px;
	    cursor: pointer;
	    -moz-box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    -webkit-box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    transition: all .2s ease-in-out 0s;
	    transform: translateY(0)!important;
	    border-radius: 6px;
	    padding: 15px;
	    .card-image {
	    	// margin: 15px !important;

	    	img {
	    		width: 100%;
	    		border-radius: 6px;
	    		border: 1px solid #f6f6f6;
	    		max-height: 300px;
	    	}
	    }
	    .card-content {
	    	min-height: 20px;
	    	.is-catlink {
	    		color: #333;
	    		font-size: 16px;
	    		text-transform: uppercase;
	    		font-weight: bold;
	    		text-align: center;
	    	}
	    }
	    &:hover {
	    	-moz-box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    -webkit-box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    transform: translateY(-8px)!important;
    	    text-decoration: none;
    	    .is-catlink {
    	    	color: #154696;
    	    	// font-size: 16px;
    	    	text-decoration: none;
    	    }
	    }
	}
</style>

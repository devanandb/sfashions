<template>
	<nuxt-link class="card" name="category" :to="'/category/'+category.slug">
		<div class="card-image">
			<figure class="image is-1by1">
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
	    margin-bottom: 10px;
	    cursor: pointer;
	    -moz-box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    -webkit-box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    box-shadow: rgba(1,2,2,.08) 0 1px 1.96px .04px;
	    transition: all .2s ease-in-out 0s;
	    transform: translateY(0)!important;
	    .card-content {
	    	min-height: 100px;
	    }
	    &:hover {
	    	-moz-box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    -webkit-box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    box-shadow: 0 10px 35px 5px rgba(0,0,0,.2);
    	    transform: translateY(-8px)!important;
    	    .is-catlink {
    	    	color: #ff5543;
    	    }
	    }
	}
</style>

<template>
	<div>
		<header>
			<global-header></global-header>
		</header>
		<div class="wrapper">
			<nuxt/>
		</div>
		<footer>
			<global-footer></global-footer>
		</footer>
	</div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import GlobalHeader from '~/components/GlobalHeader.vue'
import GlobalFooter from '~/components/GlobalFooter.vue'
import store from '~/store/store'

export default {
	store,
  	components: {
    	AppLogo, GlobalHeader, GlobalFooter
  	},
  	mounted: function () {
      	this.$store.dispatch('getCategories');
    }
}
</script>

<style>

</style>

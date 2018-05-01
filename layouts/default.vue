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

export default {
  components: {
    AppLogo, GlobalHeader, GlobalFooter
  }
}
</script>

<style>

</style>

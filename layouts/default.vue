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
require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us18.list-manage.com","uuid":"9f72be7843eb934dcf896f4d7","lid":"14bc92624a"}) });
</script>


<style>

</style>

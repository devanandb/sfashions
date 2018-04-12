<template>
	<div class="container">
		<nav class="navbar is-transparent">
			<div class="navbar-brand">
				<a class="navbar-item" href="/">
					<strong>Samiksha Fashions</strong>
				</a>
				<div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		
			<div id="" class="navbar-menu">
				<div class="navbar-start">
					<nuxt-link class="navbar-item" to="/">Home</nuxt-link>
					<nuxt-link class="navbar-item" to="/category">Categories</nuxt-link>
				</div>
		
				<div class="navbar-end">
					<div class="navbar-item">
						<div class="field is-grouped">
							<p class="control">
								<a class="bd-tw-button button" data-social-network="Facebook" data-social-action="tweet" data-social-target="https://www.facebook.com/Samikshafashionjewellery" target="_blank" href="https://www.facebook.com/Samikshafashionjewellery">
									<span class="icon">
										<i class="fa fa-facebook"></i>
									</span>
									<span>
										Facebook
									</span>
								</a>
							</p>
							<p class="control">
								<a class="button is-secondary" href="https://github.com/jgthms/bulma/releases/download/0.6.2/bulma-0.6.2.zip">
									<span class="icon">
										<i class="fa fa-download"></i>
									</span>
									<span>Download</span>
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<style lang="scss">
header {
	padding-top: 20px;
	background-color: #ff5543;
	color: #fff;
	.navbar {
		background-color: transparent;
		min-height: 5rem;
	}

	.navbar-brand a {
		color: #fff;
		font-size: 24px;
		margin-right: 20px;
	}

	.navbar-item, .navbar-link {
		color: #fff;
		font-size: 16px;
	}
	.navbar-dropdown .navbar-item {
		color: #666;
	}
}
</style>

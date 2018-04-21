<template>
	<header>
		<div class="uk-container">
			<nav class="uk-navbar-container uk-margin uk-navbar-transparent" uk-navbar>
			    <div class="uk-navbar-left">
		
			        <a class="uk-navbar-item uk-logo" href="#">Samiksha Fashions</a>
		
			        <ul class="uk-navbar-nav">
			            <li>
			                <a href="#">
			                	Categories
			                </a>
			            </li>
			        </ul>
			    </div>
			</nav>
		</div>
	</header>
</template>

<style lang="scss">
header {
	// padding-top: 20px;
	background-color: #ff5543;
	.uk-navbar {
		background: transparent;
		color: #fff;
		// min-height: 5rem;
	}

	.uk-logo {
		color: #efefef;
		font-size: 24px;
		margin-right: 20px;
		font-family: 'Noto Sans', sans-serif !important;
		font-weight: 600;
		padding-left: 0px;
		&:hover {
			color: #fff;
		}
	}

	.uk-navbar-nav > li > a {
		color: #fff;
		font-size: 16px;
	}
}
</style>

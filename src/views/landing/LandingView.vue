<template>
	<div class="LandingView">
		<div class="HeroContainer">
			<div class="IntroductionContainer">
				<h1 class="Hero IntroductionTitle">Welcome to the NEO competitor area</h1>
				<h2 class="IntroductionTagline">The central place to get your team on track.</h2>
			</div>
		</div>
		<!-- TODO:L Create better text and entry point for user. -->
		<div class="IntroductionTextWrapper">
			<p>Team managers can manager their teams on this platform. The team manager has to create an account or login in order to manage team and entry.</p>
			<p class="TextDevelopment">
				<em>This platform is currently in developement. If you have any questions or feedback, don't hesitate to contact us.</em>
			</p>
		</div>
	</div>
</template>

<script lang="ts" src="./LandingView.ts"></script>
<style lang="scss" scoped>
@import "../../styles/abstracts/Variables";

.HeroContainer {
	background: url("../../assets/hero-background.jpg") center;

	.IntroductionContainer {
		color: $White;
		text-align: center;

		.IntroductionTitle {
			font-weight: $Bold;
		}

		.IntroductionTagline {
			font-weight: $Regular;
			font-size: 1.3rem;
		}
	}
}
</style>

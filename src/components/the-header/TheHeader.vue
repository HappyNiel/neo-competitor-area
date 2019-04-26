<template>
	<header class="HeaderComponent">
		<div class="Container HeaderContainer">
			<div class="LogoContainer">
				<router-link to="/">
					<img
						class="Logo"
						src="@/assets/neo-endurance-logo.png"
						alt="NEO Endurance">
				</router-link>
			</div>
			<nav class="NavigationContainer">
				<login-component></login-component>
			</nav>
		</div>
	</header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginComponent from "@/components/login/LoginComponent.vue";

@Component({
	components: {
		LoginComponent
	}
})
export default class TheHeader extends Vue {

}
</script>


<style lang="scss" scoped src="./TheHeader.scss"></style>


<template>
	<div class="LoginComponent">
		<button 
			v-if="isUserLoggedIn()" 
			@click="onLogoutButtonPressed"
			class="Button Ghost">
			Logout, {{ displayUserName() }}
		</button>
		<button 
			v-else 
			@click="onLoginButtonPressed"
			class="Button Ghost">
			Login
		</button>
	</div>
</template>

<script lang="ts">
import store from "@/core/store";
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";
import UserModule from "../../core/store/modules/User.module";
import { getModule } from "vuex-module-decorators";
import AuthService from "../../core/services/Authentication.service";

const userState = getModule(UserModule);

@Component
export default class LoginComponent extends Vue {

	public onLogoutButtonPressed(): void {
		AuthService.logoutUser();
	}

	public onLoginButtonPressed(): void {
		router.push("login");
	}

	public displayUserName(): string {
		return userState.email;
	}

	public isUserLoggedIn(): boolean {
		return userState.isLoggedIn;
	}
}
</script>
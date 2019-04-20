<template>
	<div>
		<button @click="onLoginButtonPressed">Login</button>
		<p>Hello, {{ displayUserName() }}</p>
	</div>
</template>

<script lang="ts">
import store from "@/core/store";
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component
export default class LoginComponent extends Vue {
	public userName: string = "";

	public constructor() {
		super();
	}

	public onLoginButtonPressed(): void {
		router.push("login");
	}

	public displayUserName(): string {
		console.log("displayUserName() is called");
		return store.getters.email;
	}
}
</script>
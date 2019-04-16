<template>
	<button @click="onLoginButtonPressed">Login</button>	
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import router from "@/router";

@Component
export default class LoginComponent extends Vue {
	public onLoginButtonPressed(): void {
		router.push("login");
	}
}
</script>
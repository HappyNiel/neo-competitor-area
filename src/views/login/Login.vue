<template>
	<div class="LoginView">
		<h1>Login now</h1>
		<input v-model="email" type="text" name="email" id="Email" placeholder="Email">
		<input v-model="password" type="password" name="password" id="Password" placeholder="Password">
		
		<button @click="onLoginClicked()">Log in</button>

		<p>Don't have an account yet? <router-link to="/register">Create one</router-link>.</p>
	</div>
</template>

<script lang="ts" src="./Login.ts"></script>
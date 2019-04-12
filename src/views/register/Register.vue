<template>
	<div class="RegisterView">
		<h1>Register now</h1>
		<input v-model="email" type="text" name="email" id="Email" placeholder="Email">
		<input v-model="password" type="password" name="password" id="Password" placeholder="Password">
		
		<button @click="onRegistrationClicked()">Create account</button>

		<p>Already have an account yet? <router-link to="/login">Login here</router-link>.</p>
	</div>
</template>

<script lang="ts" src="./Register.ts"></script>
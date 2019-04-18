<template>
	<div class="home">
		<button @click="onLogoutPressed()">Log out</button>
		<img alt="Vue logo" src="../../assets/logo.png">
		
		<h1>Hello {{ currentUser.email }}</h1>
	</div>
</template>

<script lang="ts" src="./HomeView.ts"></script>

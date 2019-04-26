<template>
<div class="RegisterView">
	<div class="HeroContainer">
		<form class="Form RegistrationForm">
			<h1>Team manager registration</h1>
			<div class="FormInputContainer">
				<section>
					<label for="Email">Email</label>
					<input
						v-model="email"
						type="text"
						name="email"
						id="Email">
				</section>
				<section>
					<label for="Password">Password</label>
					<input
						v-model="password"
						type="password"
						name="password"
						id="Password">
					<p class="GoToLogin">Already have an account? <router-link to="/login">Login here</router-link>.</p>
				</section>
			</div>
			<button 
				@click="onRegistrationClicked()"
				class="Button SubmitButton">Create account</button>
		</form>
	</div>
</div>
</template>

<script lang="ts" src="./RegisterView.ts"></script>
<style lang="scss" scoped src="./RegisterView.scss"></style>

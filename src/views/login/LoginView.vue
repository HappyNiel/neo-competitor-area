<template>
<div class="LoginView">
    <div class="HeroContainer">
        <form class="Form LoginForm">
            <h1>Team manager login</h1>
            <div class="FormInputContainer">
                <section>
                    <label for="Email">Email</label>
                    <input
                        v-model.trim="email"
                        type="text"
                        name="email"
                        id="Email"
                        placeholder="email@example.com"
                    >
                </section>
                <section>
                    <label for="Password">Password</label>
                    <input
                        v-model.trim="password"
                        type="password"
                        name="password"
                        id="Password"
                    >
                    <p class="ForgotPassword">
                        <router-link to="/register">Forgot your password?</router-link>
                    </p>
                </section>
            </div>
            <button @click.prevent="onLoginClicked()" class="Button SubmitButton">Log in</button>
        </form>
    </div>
</div>
</template>

<script lang="ts" src="./LoginView.ts"></script>
<style lang="scss" scoped src="./LoginView.scss"></style>

<template>
<div class='RegisterView'>
    <div class='HeroContainer'>
        <form class='Form RegistrationForm'>
            <h1>Reset your password</h1>
            <div class='FormInputContainer'>
                <section>
                    <label for='Email'>Email</label>
                    <input v-model='email' type='text' name='email' id='Email' class='AuthInputField'>
                    <p class='GoToLogin'>
                        Already have an account?
                        <router-link to='/login'>Login here</router-link>.
                    </p>
                </section>
            </div>
            <button @click.prevent='onResetPasswordClicked()' class='Button SubmitButton'>Change password</button>
        </form>
    </div>
</div>
</template>

<script lang='ts' src='./ResetPasswordView.ts'></script>
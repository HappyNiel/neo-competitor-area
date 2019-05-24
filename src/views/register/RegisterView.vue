<template>
<div class='RegisterView'>
    <div class='HeroContainer'>
        <form class='Form RegistrationForm'>
            <h1>Team manager registration</h1>
            <div class='FormInputContainer'>
                <section>
                    <label for='FirstName'>First name:</label>
                    <input v-model='firstName' type='text' name='FirstName' id='FirstName' class='AuthInputField'>
                </section>
                <section>
                    <label for='LastName'>Last name:</label>
                    <input v-model='lastName' type='text' name='LastName' id='LastName' class='AuthInputField'>
                </section>
                <section>
                    <label for='Email'>Email</label>
                    <input v-model='email' type='text' name='email' id='Email' class='AuthInputField'>
                </section>
                <section>
                    <label for='Password'>Password</label>
                    <input v-model='password' type='password' name='password' id='Password' class='AuthInputField'>
                    <p class='GoToLogin'>
                        Already have an account?
                        <router-link to='/login'>Login here</router-link>.
                    </p>
                </section>
            </div>
            <button @click.prevent='onRegistrationClicked()' class='Button SubmitButton'>Create account</button>
        </form>
    </div>
</div>
</template>

<script lang='ts' src='./RegisterView.ts'></script>
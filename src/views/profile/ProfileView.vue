<template>
<div class="ProfileView">
    <b-container>
        <h1>My profile</h1>
        <div class="ProfileContainer">
            <h2>Profile information</h2>
            <form class="Form">
                <section>
                    <label for='FirstName'>First name:</label>
                    <input v-model='userProfile.firstName' type='text' name='FirstName' id='FirstName' class='AuthInputField'>
                </section>
                <section>
                    <label for='LastName'>Last name:</label>
                    <input v-model='userProfile.lastName' type='text' name='LastName' id='LastName' class='AuthInputField'>
                </section>
                <section>
                    <label for='DiscordTag'>Discord user tag:</label>
                    <input v-model='userProfile.discordTag' type='text' name='DiscordTag' id='DiscordTag' placeholder="Username#1234" class='AuthInputField'>
                </section>
                <button @click.prevent='onUpdateProfileClicked()' class='Button SubmitButton'>Update profile</button>
            </form>
        </div>
        <div class="UserAuthContainer">
            <h2>Account information</h2>
            <form class="Form">
                <section>
                    <label for='Email'>Email address:</label>
                    <input v-model='email' type='text' name='Email' id='Email' class='AuthInputField'>
                </section>
                <section>
                    <button @click.prevent='onResetPasswordClicked()' class='Button Ghost'>Reset password</button>
                </section>
            </form>
        </div>
    </b-container>
</div>
</template>

<script lang='ts' src='./ProfileView.ts'></script>

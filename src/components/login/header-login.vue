<template>
<div class='HeaderLogin'>
    <button
        v-if='isUserLoggedIn()'
        @click='onLogoutButtonPressed'
        class='Button Ghost HeaderButton'
    >Logout, {{ displayUserName() }}</button>
    <button v-else @click='onLoginButtonPressed' class='Button Ghost'>Login</button>
    <button
        v-if='!isUserLoggedIn()'
        @click='onSignUpButtonPressed'
        class='Button HeaderButton'
    >Sign up</button>
</div>
</template>

<script lang='ts'>
import { globalStore } from '@/store';
import router from '@/router';
import { Component, Vue } from 'vue-property-decorator';
import AuthService from '@/infrastructure/services/authentication.service';

@Component
export default class HeaderLogin extends Vue {
    public onLogoutButtonPressed(): void {
        AuthService.logoutUser();
    }

    public onLoginButtonPressed(): void {
        router.push('login');
    }

    public onSignUpButtonPressed(): void {
        router.push('register');
    }

    public displayUserName(): string {
        return globalStore.user.firstName;
    }

    public isUserLoggedIn(): boolean {
        return globalStore.user.isLoggedIn;
    }
}
</script>
<style lang='scss' scoped>
.HeaderButton {
    margin-left: 1rem;
}
</style>

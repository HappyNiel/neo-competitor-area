<template>
    <b-navbar
    class="HeaderComponent">
        <b-container
        class="HeaderContainer"
        fluid>
            <b-navbar-brand 
            class="LogoContainer"
            to="/">
                <img 
                class="Logo" 
                src="@/assets/neo-endurance-logo.png" 
                alt="NEO Endurance"/>
            </b-navbar-brand>
            <b-navbar-nav>
                <b-nav-item
                href="https://regulations.neo-endurance.com/#/"
                target="_blank">
                    Regulations
                </b-nav-item>
                <b-nav-item-dropdown 
                v-if="isUserLoggedIn()"
                text="User"
                right>
                    <b-dropdown-item to="dashboard">Dashboard</b-dropdown-item>
                    <b-dropdown-item to="profile">My profile</b-dropdown-item>
                    <b-dropdown-item @click="onLogoutButtonPressed">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item
                v-if="!isUserLoggedIn()"
                to="login">
                    Login
                </b-nav-item>
                <b-nav-item
                v-if="!isUserLoggedIn()"
                to="register">
                    Sign up
                </b-nav-item>
            </b-navbar-nav>
        </b-container>
    </b-navbar>
</template>

<script lang="ts">
import { globalStore } from '@/store';
import router from '@/router';
import AuthService from '@/infrastructure/services/authentication.service';
import { Component, Vue } from 'vue-property-decorator';
import HeaderLogin from '@/components/login/header-login.vue';

@Component
export default class TheHeader extends Vue {
    public onLogoutButtonPressed(): void {
        AuthService.logoutUser();
    }

    public displayUserName(): string {
        return globalStore.user.firstName;
    }

    public isUserLoggedIn(): boolean {
        return globalStore.user.isLoggedIn;
    }
}
</script>

<style lang="scss" scoped src="./the-header.scss"></style>

<template>
    <b-navbar
    sticky
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
                :text="displayUserName()"
                right>
                    <b-dropdown-item to="dashboard">Dashboard</b-dropdown-item>
                    <b-dropdown-item to="profile">My profile</b-dropdown-item>
                    <b-dropdown-item @click="onLogoutButtonPressed">Logout</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-button
                v-if="!isUserLoggedIn()"
                variant="outline-primary"
                to="login">
                    Login
                </b-button>
                <b-button
                v-if="!isUserLoggedIn()"
                variant="primary"
                to="register">
                    Sign up
                </b-button>
            </b-navbar-nav>
        </b-container>
    </b-navbar>
</template>

<script lang="ts" src="./the-header.ts"></script>
<style lang="scss" scoped src="./the-header.scss"></style>

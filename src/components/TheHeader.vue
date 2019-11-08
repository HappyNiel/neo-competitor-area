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

<script lang="ts">
import { globalStore } from '@/store';
import AuthService from '@/infrastructure/services/authentication.service';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheHeader extends Vue {
    public onLogoutButtonPressed(): void {
        AuthService.logoutUser();
    }

    public displayUserName(): string {
        return `Hello, ${globalStore.user.firstName}`;
    }

    public isUserLoggedIn(): boolean {
        return globalStore.user.isLoggedIn;
    }
}

</script>

<style lang="scss" scoped>
@import '../styles/abstracts/variables';

.HeaderComponent {
    width: 100%;
    height: 80px;
    background-color: $White;
    border-bottom: 1px solid $Grey;

    .HeaderContainer {
        width: 92%;

        .navbar-nav {
            .nav-item, .btn {
                margin: 0 0.25rem;
            }
        }
    }
}

.LogoContainer {
    padding: 1rem 0 0.7rem 0;

    .Logo {
        width: 135px;
    }
}

.NavigationContainer {
    align-self: center;
}
</style>

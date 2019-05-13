<template>
<div class="HeaderLogin">
    <button
        v-if="isUserLoggedIn()"
        @click="onLogoutButtonPressed"
        class="Button Ghost HeaderButton"
    >Logout, {{ displayUserName() }}</button>
    <button v-else @click="onLoginButtonPressed" class="Button Ghost">Login</button>
    <button
        v-if="!isUserLoggedIn()"
        @click="onSignUpButtonPressed"
        class="Button HeaderButton"
    >Sign up</button>
</div>
</template>

<script lang="ts">
import store from "@/store";
import router from "@/router";
import { Component, Vue } from "vue-property-decorator";
import UserModule from "@/store/modules/User.module";
import { getModule } from "vuex-module-decorators";
import AuthService from "@/services/authentication.service";

const userState = getModule(UserModule);

@Component
export default class HeaderLogin extends Vue {
    public onLogoutButtonPressed(): void {
        AuthService.logoutUser();
    }

    public onLoginButtonPressed(): void {
        router.push("login");
    }

    public onSignUpButtonPressed(): void {
        router.push("register");
    }

    public displayUserName(): string {
        return userState.email;
    }

    public isUserLoggedIn(): boolean {
        return userState.isLoggedIn;
    }
}
</script>
<style lang="scss" scoped>
.HeaderButton {
    margin-left: 1rem;
}
</style>

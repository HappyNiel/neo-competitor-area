<template>
<header class="HeaderComponent">
    <div class="Container HeaderContainer">
        <div class="LogoContainer">
            <router-link to="/">
                <img class="Logo" src="@/assets/neo-endurance-logo.png" alt="NEO Endurance">
            </router-link>
        </div>
        <nav class="NavigationContainer">
            <header-login></header-login>
        </nav>
    </div>
</header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeaderLogin from "@/components/login/header-login.vue";

@Component({
    components: {
        HeaderLogin
    }
})
export default class TheHeader extends Vue {}
</script>


<style lang="scss" scoped src="./the-header.scss"></style>


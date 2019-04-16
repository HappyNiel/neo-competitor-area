<template>
	<header class="HeaderComponent">
		<login-component></login-component>
	</header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginComponent from "@/components/login/LoginComponent.vue";

@Component({
	components: {
		LoginComponent
	}
})
export default class TheHeader extends Vue {

}
</script>


<style lang="scss" scoped>
	.HeaderComponent{
		width: 100%;
		height: 80px;
		background-color: lightgray;
	}
</style>


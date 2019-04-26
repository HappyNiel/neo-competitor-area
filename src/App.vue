<template>
	<div id="app">
		<the-header></the-header>
		<div id="nav">
			<!-- <router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> | -->
			<!-- <router-link to="/login">Login</router-link> -->
		</div>
		<router-view/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TheHeader from "@/components/the-header/TheHeader.vue";

@Component({
	components: {
		TheHeader
	}
})
export default class App extends Vue {

}
</script>


<style lang="scss" src="./styles/main.scss">
// #app {
// 	font-family: "Avenir", Helvetica, Arial, sans-serif;
// 	-webkit-font-smoothing: antialiased;
// 	-moz-osx-font-smoothing: grayscale;
// 	text-align: center;
// 	color: #2c3e50;
// }
// #nav {
// 	padding: 30px;
// 	a {
// 		font-weight: bold;
// 		color: #2c3e50;
// 		&.router-link-exact-active {
// 			color: #42b983;
// 		}
// 	}
// }
</style>

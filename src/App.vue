<template>
	<div id='app'>
		<the-header></the-header>
        <b-container>
		    <router-view/>
        </b-container>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/the-header/the-header.vue';

@Component({
    components: {
        TheHeader
    }
})
export default class App extends Vue {

}
</script>


<style lang='scss' src='./styles/main.scss'></style>

<template>
	<div id='app'>
        <div class="content">
            <the-header></the-header>
            <router-view/>
        </div>
        <the-footer></the-footer>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/the-header/the-header';
import TheFooter from '@/components/the-footer/the-footer';

@Component({
    components: {
        TheHeader,
        TheFooter
    }
})
export default class App extends Vue {

}
</script>
<style lang='scss' src='./styles/main.scss'></style>

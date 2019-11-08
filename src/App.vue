<template>
	<div id='app'>
        <div class="content">
            <TheHeader></TheHeader>
            <Alerts></Alerts>
            <router-view/>
        </div>
        <TheFooter></TheFooter>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import Alerts from '@/components/alerts/Alerts.vue';

@Component({
    components: {
        TheHeader,
        TheFooter,
        Alerts
    }
})
export default class App extends Vue {

}
</script>
<style lang='scss' src='./styles/main.scss'></style>

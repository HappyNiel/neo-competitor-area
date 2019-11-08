<template>
	<div id='app'>
        <div class="content">
            <TheHeader></TheHeader>
            <router-view/>
        </div>
        <TheFooter></TheFooter>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

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

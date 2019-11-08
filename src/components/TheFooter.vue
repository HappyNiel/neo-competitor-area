<template>
    <div id="TheFooter">&copy; {{ currentYear }} NEO Endurance - Developed by Niel Hekkens</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {
    public currentYear: string = '2019';

    public mounted(): void {
        this.getCurrentYear();
    }

    private getCurrentYear(): void {
        const currentDate = new Date();
        const year = currentDate.getFullYear();

        this.currentYear = year.toString();
    }
}
</script>

<template>
    <div class="AlertsContainer">
        <b-alert
            :show="isSuccessAlertDisplayed"
            dismissible>
            Success!
        </b-alert>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { globalStore } from '../../store';
import EventBus from '@/infrastructure/event-bus';

@Component
export default class Alerts extends Vue {
    public isSuccessAlertDisplayed: boolean = false;

    public mounted(): void {
        EventBus.$on('UserProfileUpdateSuccess', () => this.displaySuccessAlert());
    }

    private displaySuccessAlert(): void {
        this.isSuccessAlertDisplayed = true;
        setTimeout(this.hideSuccessAlert, 3000);
    }

    private hideSuccessAlert(): void {
        this.isSuccessAlertDisplayed = false;
    }
}
</script>
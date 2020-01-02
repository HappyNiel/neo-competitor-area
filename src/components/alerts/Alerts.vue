<template>
    <div class="AlertsContainer">
        <b-alert
            class="SuccessAlert"
            :show="isSuccessAlertDisplayed"
            variant="success"
            dismissible>
            Success!
        </b-alert>
        <b-alert
            class="FailureAlert"
            :show="isFailAlertDisplayed"
            variant="danger"
            dismissible>
            Something went wrong.
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
    public isFailAlertDisplayed: boolean = false;

    public mounted(): void {
        EventBus.$on('UserProfileUpdateSuccess', () => this.displaySuccessAlert());
        EventBus.$on('EntryCreatedSuccess', () => this.displaySuccessAlert());
        EventBus.$on('UserProfileUpdateFailure', () => this.displayFailureAlert());
    }

    private displaySuccessAlert(): void {
        this.isSuccessAlertDisplayed = true;
        setTimeout(this.hideSuccessAlert, 4000);
    }

    private displayFailureAlert(): void {
        this.isFailAlertDisplayed = true;
        setTimeout(this.hideFailureAlert, 4000);
    }

    private hideSuccessAlert(): void {
        this.isSuccessAlertDisplayed = false;
    }

    private hideFailureAlert(): void {
        this.isSuccessAlertDisplayed = false;
    }
}
</script>
<template>
    <div class="AlertsContainer">
        <b-alert
            :show="eventBus.isSuccess"
            dismissible>
            Success!
        </b-alert>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { globalStore } from '../../store';

@Component
export default class Alerts extends Vue {
    public get eventBus() {
        return globalStore.eventBus;
    }
}
</script>
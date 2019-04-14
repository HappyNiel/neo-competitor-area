<template>
	<div class="NoAccessView">
		<h1>You have no access.</h1>
		<p>Go back to where you came from.</p>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NoAccess extends Vue {

}
</script>

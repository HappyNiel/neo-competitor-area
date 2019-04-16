<template>
	<div class="NoAccessView">
		<h1>This is not the page you are looking for.</h1>
		<p>Go back to where you came from.</p>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NotFoundView extends Vue {

}
</script>
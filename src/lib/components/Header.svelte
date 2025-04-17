<script lang="ts">
	import Back from './Back.svelte';

	interface Props {
		title?: string;
		back?: boolean;
	}

	const { title = '', back = true }: Props = $props();
</script>

<div class="bg-konsu-dark-01 absolute top-0 left-0 z-0 h-[4em] w-full"></div>

<div class="relative z-10 mb-8 grid min-h-12 w-full items-center px-3">
	{#if back}
		<Back class="absolute p-4" />
	{/if}

	<h1 class="w-full text-center text-3xl font-bold">{title ?? 'Welcome back traveller!'}</h1>
</div>

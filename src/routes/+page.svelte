<script lang="ts">
	import { goto } from '$app/navigation';
	import { Loading } from '$lib/components';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => goto('/login'), 3_000);
	});
</script>

<Loading />

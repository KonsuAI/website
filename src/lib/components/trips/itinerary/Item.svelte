<script lang="ts">
	import { goto } from '$app/navigation';

	let { imageUrl, title, meta }: { imageUrl: string; title: string; meta: string } = $props();
	let loaded = $state(false);
</script>

<button
	class="relative h-full w-84 cursor-pointer snap-center overflow-hidden rounded-3xl text-left"
	onclick={() => goto('/app/journey')}
>
	<img
		class="h-full w-full object-cover"
		src={imageUrl}
		alt={title}
		onload={() => (loaded = true)}
	/>
	{#if loaded}
		<div class="bg-konsu-dark-00/35 absolute top-0 left-0 h-full w-full">
			<div class="grid h-full grid-cols-1 p-4">
				<div class="self-end">
					<h3 class="text-2xl font-bold">{title}</h3>
					<div class="meta">{meta}</div>
				</div>
			</div>
		</div>
	{/if}
</button>

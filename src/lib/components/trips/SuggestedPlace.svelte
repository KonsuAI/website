<script lang="ts">
	let { imageUrl, title, meta }: { imageUrl: string; title: string; meta: string } = $props();
	let loaded = $state(false);
</script>

<div class="relative aspect-[2/1] w-full overflow-hidden rounded-3xl">
	<img
		class="absolute top-0 left-0 h-full w-full object-cover"
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
</div>

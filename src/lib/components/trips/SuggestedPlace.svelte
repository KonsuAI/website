<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let {
		imageUrl,
		title,
		meta,
		class: className
	}: { imageUrl: string; title: string; meta: string; class?: string } = $props();
	let loaded = $state(false);
</script>

<div class={twMerge('relative w-fit min-w-48 overflow-hidden rounded-3xl text-2xl ', className)}>
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
					<h3 class="font-bold">{title}</h3>
					<div class="meta">{meta}</div>
				</div>
			</div>
		</div>
	{/if}
</div>

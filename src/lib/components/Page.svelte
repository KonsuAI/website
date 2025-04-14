<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		title?: string;
		class?: string;
		children: Snippet;
	}

	const { children, class: classList, title }: Props = $props();
</script>

<div class="flex h-screen w-screen overflow-hidden">
	<div class={twMerge('m-4 my-2 w-sm md:mx-auto', classList)}>
		<div class="mb-8 w-full">
			<h1 class="w-full text-center text-3xl font-bold">{title ?? 'Welcome back traveller!'}</h1>
		</div>
		{@render children()}
	</div>
</div>

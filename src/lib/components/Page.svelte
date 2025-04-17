<script lang="ts">
	import type { Snippet } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import Header from './Header.svelte';

	interface Props {
		title?: string;
		back?: boolean;
		class?: string;
		children: Snippet;
		header?: Snippet;
	}

	const { children, class: classList, title, back, header }: Props = $props();
</script>

<div class="flex h-screen max-h-screen w-screen max-w-screen overflow-hidden">
	<div class={twMerge('m-4 my-2 w-sm md:mx-auto', classList)}>
		{#if header}{@render header()}{:else}<Header {title} {back} />{/if}

		{@render children()}
	</div>
</div>

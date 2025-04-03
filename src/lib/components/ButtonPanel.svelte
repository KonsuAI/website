<script lang="ts">
	import type { Component, Snippet } from 'svelte';
	import Right, {
		type ChevronRightProps
	} from 'svelte-google-materialdesign-icons/Chevron_right.svelte';
	let {
		class: className = '',
		textClass = '',
		iconContainerClass = '',
		icon: Icon = undefined,
		iconProps = {},
		label,
		onclick = () => {}
	}: {
		class?: string;
		textClass?: string;
		iconContainerClass?: string;
		icon?: any;
		iconProps?: Partial<ChevronRightProps>;
		label: string;
		onclick?: () => void;
	} = $props();

	const ICON_SIZE = '2em';
</script>

<button
	type="button"
	class="{className} drop-shadow-box grid cursor-pointer grid-cols-[1fr_auto] rounded-4xl p-4 text-left md:p-8"
	{onclick}
>
	<div class="text-konsu-text-dark col-span-2 text-3xl font-bold {textClass}">{label}</div>
	{#if Icon !== undefined}
		<div
			class="bg-konsu-text-dark/20 aspect-square w-fit self-end rounded-full p-3 {iconContainerClass}"
		>
			<Icon size={ICON_SIZE} variation="filled" color="#1D1B20" {...iconProps} />
		</div>
	{:else}
		<div></div>
	{/if}
	<div class="self-end p-3">
		<Right ariaLabel="Go" size={ICON_SIZE} color="#1D1B20" {...iconProps} />
	</div>
</button>

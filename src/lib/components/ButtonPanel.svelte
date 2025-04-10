<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import Right from '~icons/mdi/arrow-right-thick';

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
		iconProps?: Partial<SVGAttributes<SVGElement>>;
		label: string;
		onclick?: () => void;
	} = $props();

	const ICON_SIZE = '1.78rem';
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
			<Icon width={ICON_SIZE} height={ICON_SIZE} color="#1D1B20" {...iconProps} />
		</div>
	{:else}
		<div></div>
	{/if}
	<div class="self-end p-3">
		<Right width={ICON_SIZE} height={ICON_SIZE} color="#1D1B20" {...iconProps} />
	</div>
</button>

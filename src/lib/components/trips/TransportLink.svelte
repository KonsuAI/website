<script lang="ts">
	import { getTransportIcon, type TransportType } from '$lib/transport';
	import type { Snippet } from 'svelte';
	import ArrowRight from '~icons/mdi/arrow-right';
	import ChevronDown from '~icons/mdi/chevron-down';
	import ChevronUp from '~icons/mdi/chevron-up';
	import { DateTime } from 'luxon';

	interface Props {
		start: DateTime;
		end: DateTime;
		type: TransportType;
		org?: Snippet;
		from: string;
		to: string;
		children: Snippet;
	}

	const { start, end, from, to, org, type, children }: Props = $props();

	let hidden = $state(true);

	const Icon = getTransportIcon(type);
</script>

<div class="rounded-3xl border border-[#8D8D8D]">
	<button onclick={() => (hidden = !hidden)} class="w-full cursor-pointer">
		<div
			class="m-4 grid grid-cols-[max-content_1fr_max-content_1fr_max-content] grid-rows-2 place-items-center"
		>
			<div class="row-span-2 mr-4 size-18 rounded-full bg-[#4C5B71] p-2">
				<Icon class="size-full" />
			</div>

			<div class="text-3xl font-bold">
				<span>{start.toLocaleString(DateTime.TIME_24_SIMPLE)}</span>
			</div>

			<ArrowRight class="row-span-2 mx-2 size-8 place-self-center" />

			<div class="text-3xl font-bold">
				<span>{end.toLocaleString(DateTime.TIME_24_SIMPLE)}</span>
			</div>

			{#if hidden}
				<ChevronDown class="row-span-2 size-8 h-full" />
			{:else}
				<ChevronUp class="row-span-2 size-8 h-full" />
			{/if}

			<!-- <div class="ml-8 grid grid-cols-2 place-items-center text-2xl"> -->
			<div class="grid grid-cols-[max-content_max-content] place-items-center gap-2 text-lg">
				{@render org?.()}
				<span>{from}</span>
			</div>
			<span class="text-lg">{to}</span>
		</div>
	</button>
	<div class={`${hidden ? 'hidden' : ''} border-t border-[#8D8D8D] p-4`}>
		{@render children()}
	</div>
</div>

<script lang="ts">
	import { getTransportIcon, type TransportType } from '$lib/transport';
	import type { Snippet } from 'svelte';
	import ArrowRight from 'svelte-material-icons/ArrowRight.svelte';
	import ChevronDown from 'svelte-material-icons/ChevronDown.svelte';
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

	const Icon = getTransportIcon(type);
</script>

<div class="rounded-xl border border-[#8D8D8D] p-4">
	<div class="grid grid-cols-[max-content_1fr_max-content] grid-rows-2">
		<div class="row-span-2 aspect-square h-full rounded-full bg-[#4C5B71] p-2">
			<Icon class="size-full" />
		</div>
		<div class="ml-8 grid grid-cols-[1fr_max-content_1fr] justify-items-center text-2xl font-bold">
			<span>{start.toLocaleString(DateTime.TIME_24_SIMPLE)}</span>
			<ArrowRight class="mx-2 size-8" />
			<span>{end.toLocaleString(DateTime.TIME_24_SIMPLE)}</span>
		</div>
		<ChevronDown class="row-span-2 size-5 h-full justify-self-center" />
		<div class="ml-8 grid grid-cols-2 justify-items-center text-sm">
			<div class="grid grid-cols-[max-content_max-content]">
				{@render org?.()}
				<span>{from}</span>
			</div>
			<span>{to}</span>
		</div>
	</div>
	<div class="hidden">{@render children()}</div>
</div>

<script lang="ts">
	import type { TransportStop } from '$lib/transport';
	import { DateTime } from 'luxon';
	import CircleOutline from '~icons/mdi/checkbox-blank-circle-outline';
	import CircleFull from '~icons/mdi/checkbox-blank-circle';

	interface Props {
		stops: TransportStop[];
		pos: number;
		to?: string;
	}

	let { stops, pos, to }: Props = $props();
</script>

{#if to}
	<p class="w-full text-center">{to}</p>
{/if}
<div class="mt-4 grid grid-flow-row auto-rows-auto grid-cols-[max-content_1fr]">
	{#each stops as stop, i (i)}
		{@const isLast = i == stops.length - 1}
		{@const isEdge = i == 0 || isLast}
		{@const textSize = isEdge ? 'text-2xl' : 'text-xl'}
		{@const delayed = stop.expected && !stop.planned.equals(stop.expected)}

		<div class="grid grid-rows-[max-content_1fr]">
			<div class="bg-green mx-auto items-center rounded-full p-2 text-lg text-white">
				<span class="size-10 w-full text-center text-white">
					{#if pos > i}
						<CircleFull class="text-green-600" />
					{:else}
						<CircleOutline class="text-gray-600" />
					{/if}
				</span>
			</div>
			{#if !isLast}
				<div class="mx-auto w-2.5 rounded-full bg-gray-600">
					<div
						class="w-full rounded-full bg-green-600"
						style={`height: ${100 * Math.min(Math.max(pos - i, 0), 1)}%`}
					></div>
				</div>
			{/if}
		</div>

		<div
			class={`grid min-h-16 grid-cols-[max-content_1fr] gap-2 ${textSize == 'text-xl' ? 'mt-1' : ''}`}
		>
			<div>
				<h3 class={`${textSize} font-bold ${delayed ? 'text-gray-600 line-through' : ''}`}>
					{stop.planned.toLocaleString(DateTime.TIME_24_SIMPLE)}
				</h3>
				{#if delayed}
					<h3 class={`${textSize} font-bold text-red-700`}>
						{stop.expected?.toLocaleString(DateTime.TIME_24_SIMPLE)}
					</h3>
				{/if}
			</div>
			<div>
				<h3 class={textSize}>{stop.name}</h3>
				{#if isEdge && stop.platform}
					<small class="text-lg text-gray-600">{stop.platform}</small>
				{/if}
			</div>
		</div>
	{/each}
</div>

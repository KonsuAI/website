<script lang="ts">
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import TransportItinerary from '$lib/components/trips/TransportItinerary.svelte';
	import TransportLink from '$lib/components/trips/TransportLink.svelte';
	import { TransportType } from '$lib/transport';
	// import Ryanair from '../../../assets/org/Ryanair.svg?component';
	import NationalRail from '../../../assets/org/NationalRail.svg?component';
	import { DateTime } from 'luxon';

	const basics = { second: 0, millisecond: 0 };
</script>

<Page
	class="grid h-screen max-h-screen grid-rows-[max-content_1fr_max-content]"
	title="Welcome back, traveller"
>
	<div class="flex w-full flex-col gap-4">
		<TransportLink
			start={DateTime.now().set({ hour: 9, minute: 6 })}
			end={DateTime.now().set({ hour: 10, minute: 51 })}
			type={TransportType.Train}
			from="BTH"
			to="PAD"
		>
			{#snippet org()}
				<NationalRail class="size-9" />
			{/snippet}

			<button class="bg-konsu-light-01 mb-4 w-full rounded-xl p-4 text-xl font-bold">Ticket</button>

			<TransportItinerary
				pos={1.75}
				to="Train to London Paddington"
				stops={[
					{
						name: 'Bath Spa',
						planned: DateTime.now().set({ hour: 9, minute: 6, ...basics }),
						expected: DateTime.now().set({ hour: 9, minute: 8, ...basics }),
						platform: 'Platform 1'
					},
					{
						name: 'Troughbridge',
						planned: DateTime.now().set({ hour: 9, minute: 52, ...basics }),
						expected: DateTime.now().set({ hour: 9, minute: 52, ...basics })
					},
					{
						name: 'Reading',
						planned: DateTime.now().set({ hour: 10, minute: 6, ...basics }),
						expected: DateTime.now().set({ hour: 10, minute: 6, ...basics })
					},
					{
						name: 'London Paddington',
						planned: DateTime.now().set({ hour: 10, minute: 51, ...basics }),
						expected: DateTime.now().set({ hour: 10, minute: 51, ...basics }),
						platform: 'Platform 10'
					}
				]}
			/>
		</TransportLink>
		<div class="my-4 h-0 w-full"></div>
	</div>

	<AiInput
		placeholder="Something unexpected occur? Don't worry, tell me!"
		onsubmit={function (e) {
			e.preventDefault();
			console.log(this);
		}}
	/>
</Page>

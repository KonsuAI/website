<script lang="ts">
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import TransportItinerary from '$lib/components/trips/TransportItinerary.svelte';
	import TransportLink from '$lib/components/trips/TransportLink.svelte';
	import { TransportType } from '$lib/transport';
	import Ryanair from '../../../assets/org/Ryanair.svg?component';
	import ElizabethLine from '../../../assets/org/ElizabethLine.svg?component';
	import NationalRail from '../../../assets/org/NationalRail.svg?component';
	import { DateTime } from 'luxon';

	const basics = { second: 0, millisecond: 0 };
</script>

<Page
	class="grid h-screen max-h-screen grid-rows-[max-content_1fr_max-content]"
	title="Your Travel Plan"
>
	<div class="flex w-full flex-col gap-4 overflow-y-scroll">
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

			<button class="bg-konsu-light-01 mb-4 w-full cursor-pointer rounded-xl p-4 text-xl font-bold"
				>Ticket</button
			>

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
						planned: DateTime.now().set({ hour: 9, minute: 52 })
					},
					{
						name: 'Reading',
						planned: DateTime.now().set({ hour: 10, minute: 6 })
					},
					{
						name: 'London Paddington',
						planned: DateTime.now().set({ hour: 10, minute: 51 }),
						platform: 'Platform 10'
					}
				]}
			/>
		</TransportLink>

		<TransportLink
			start={DateTime.now().set({ hour: 11, minute: 0 })}
			end={DateTime.now().set({ hour: 11, minute: 11 })}
			type={TransportType.Subway}
			from="PAD"
			to="LST"
		>
			{#snippet org()}
				<ElizabethLine class="size-9" />
			{/snippet}

			<button class="bg-konsu-light-01 mb-4 w-full cursor-pointer rounded-xl p-4 text-xl font-bold"
				>Ticket</button
			>

			<TransportItinerary
				pos={0}
				to="Elizabeth line to Abbey Wood"
				stops={[
					{
						name: 'London Paddington',
						planned: DateTime.now().set({ hour: 11, minute: 0 })
					},
					{
						name: 'Bond Street',
						planned: DateTime.now().set({ hour: 11, minute: 3 })
					},
					{
						name: 'Tottenham Court Road',
						planned: DateTime.now().set({ hour: 11, minute: 5 })
					},
					{
						name: 'Farringdon',
						planned: DateTime.now().set({ hour: 11, minute: 8 })
					},
					{
						name: 'London Liverpool Street',
						planned: DateTime.now().set({ hour: 11, minute: 11 })
					}
				]}
			/>
		</TransportLink>

		<TransportLink
			start={DateTime.now().set({ hour: 11, minute: 25 })}
			end={DateTime.now().set({ hour: 12, minute: 11 })}
			type={TransportType.Train}
			from="LST"
			to="SSD"
		>
			{#snippet org()}
				<NationalRail class="size-9" />
			{/snippet}

			<button class="bg-konsu-light-01 mb-4 w-full cursor-pointer rounded-xl p-4 text-xl font-bold"
				>Ticket</button
			>

			<TransportItinerary
				pos={0}
				to="Train to Stansted Airport"
				stops={[
					{
						name: 'London Liverpool Street',
						planned: DateTime.now().set({ hour: 11, minute: 25 }),
						platform: 'Platform 1'
					},
					{
						name: 'Tottenham Hale',
						planned: DateTime.now().set({ hour: 11, minute: 37 })
					},
					{
						name: 'Harlow Town',
						planned: DateTime.now().set({ hour: 11, minute: 54 })
					},
					{
						name: 'Stansted Airport',
						planned: DateTime.now().set({ hour: 12, minute: 11 }),
						platform: 'Platform 3'
					}
				]}
			/>
		</TransportLink>

		<TransportLink
			start={DateTime.now().set({ hour: 14, minute: 30 })}
			end={DateTime.now().set({ hour: 17, minute: 5 })}
			type={TransportType.Plane}
			from="STN"
			to="TRS"
		>
			{#snippet org()}
				<Ryanair class="size-9" />
			{/snippet}

			<button class="bg-konsu-light-01 mb-4 w-full cursor-pointer rounded-xl p-4 text-xl font-bold"
				>Ticket</button
			>

			<TransportItinerary
				pos={0}
				to="Ryanair flight to Friuli Venezia Giulia Airport"
				stops={[
					{
						name: 'Stansted Airport',
						planned: DateTime.now().set({ hour: 14, minute: 30 }),
						platform: 'Gate 14'
					},
					{
						name: 'Friuli Venezia Giulia Airport',
						planned: DateTime.now().set({ hour: 17, minute: 5 })
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

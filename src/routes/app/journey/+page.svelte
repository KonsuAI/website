<script lang="ts">
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import TransportLink from '$lib/components/trips/TransportLink.svelte';
	import { TransportType } from '$lib/transport';
	import Ryanair from '../../../assets/org/Ryanair.svg?component';
	import NationalRail from '../../../assets/org/NationalRail.svg?component';
	import { DateTime } from 'luxon';
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
			to="PAD">Hi there</TransportLink
		>
		{#snippet org()}
			<NationalRail class="size-4" />
		{/snippet}
		<div class="my-4 h-0 w-full"></div>
	</div>

	<AiInput
		onsubmit={function (e) {
			e.preventDefault();
			console.log(this);
		}}
	/>
</Page>

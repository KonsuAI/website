<script lang="ts">
	import { goto } from '$app/navigation';
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import SuggestedPlace from '$lib/components/trips/SuggestedPlace.svelte';
</script>

<Page title="Upcoming" class="grid grid-rows-[max-content_1fr_max-content]">
	<div class="overflow-y-scroll">
		<button class="w-full cursor-pointer text-left" onclick={() => goto('/app/itinerary')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Amalfi Coast"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
				meta="1st to 6th June"
			/>
		</button>
	</div>

	<AiInput
		placeholder="Wanna book another?"
		onsubmit={function (e) {
			e.preventDefault();
			goto('/app/new');
		}}
	/>
</Page>

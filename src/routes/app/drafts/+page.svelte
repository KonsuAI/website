<script lang="ts">
	import { goto } from '$app/navigation';
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import SuggestedPlace from '$lib/components/trips/SuggestedPlace.svelte';
</script>

<Page title="Drafts" class="grid grid-rows-[max-content_1fr_max-content]">
	<div class="overflow-y-scroll">
		<button class="w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Amalfi Coast"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
				meta="5 Nights · £200/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Stockholm"
				imageUrl="https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F2018-07-05_041957-146932_IBSweb.jpg&w=1980&q=75"
				meta="2 Nights · £77/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Amalfi Coast"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
				meta="5 Nights · £200/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Stockholm"
				imageUrl="https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F2018-07-05_041957-146932_IBSweb.jpg&w=1980&q=75"
				meta="2 Nights · £77/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Amalfi Coast"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
				meta="5 Nights · £200/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Stockholm"
				imageUrl="https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F2018-07-05_041957-146932_IBSweb.jpg&w=1980&q=75"
				meta="2 Nights · £77/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Amalfi Coast"
				imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg/1920px-Costiera_amalfitana_-mix-_2019_by-RaBoe_599.jpg"
				meta="5 Nights · £200/pp"
			/>
		</button>

		<button class="mt-3 w-full cursor-pointer text-left" onclick={() => goto('/app/new')}>
			<SuggestedPlace
				class="aspect-[2/1] w-full"
				title="Stockholm"
				imageUrl="https://visitsweden.com/_next/image/?url=https%3A%2F%2Fs3-eu-north-1.amazonaws.com%3A443%2Fpy3.visitsweden.com%2Foriginal_images%2F2018-07-05_041957-146932_IBSweb.jpg&w=1980&q=75"
				meta="2 Nights · £77/pp"
			/>
		</button>
	</div>

	<AiInput
		placeholder="Want something new?"
		onsubmit={function (e) {
			e.preventDefault();
			goto('/app/new');
		}}
	/>
</Page>

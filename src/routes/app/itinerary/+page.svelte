<script lang="ts">
	import { goto } from '$app/navigation';
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import Item from '$lib/components/trips/itinerary/Item.svelte';
</script>

<Page class="grid grid-rows-[max-content_1fr_max-content]" title="Here's your plan!">
	<div
		class="grid snap-x snap-mandatory auto-cols-[calc(100%-3em)] grid-flow-col gap-4 overflow-x-scroll rounded-3xl"
	>
		<Item
			title="Your Holiday to Friuli-Venezia Giulia, Italy"
			imageUrl="https://s3-alpha-sig.figma.com/img/17bf/c79b/0ead6ea4d0eb12198e00da2862767ce8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lkFdhtGFY6dZkNL3aiK1r7J6rWPea0AAcGhm98v0jJiQ-K0uSIARM9zo-v~~S9VWssgOMz5OlaTd183-6tl0hg9w0PAXzaO9W6hbx3gLikbHQwDv79VUtXC26mtu7ogS1JfdQkm2PkO2~94pGG8PHvkRyqay66qTmr8Xgq-kJg6TnAzqdeT2rW93XXAEaSZgH4V4t9niQ5HIlvb4gAYMamVyqbgHffo52NcPzT5krNJcdKeOZTMOIhL2h~1i1dm~ev4KQauNaxA4CdNd88Bhu-IhDHFdR9qTK1MtdLKqghZwptQmAFdhg5MLuNXqdMEDsgNicKNtyR0Blwsv2Dbs3g__"
			meta="Swipe left for Day 1."
			onclick={() => goto('/app/journey')}
		/>

		<Item
			title="Day one: Visiting the castle"
			imageUrl="https://s3-alpha-sig.figma.com/img/c93f/e9b5/5678309fc5488cb3881824f2fa39b63d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kj3rr5C-Ce9jrtDM8ytCwejY9VCLFz2fIZv0TaYzMgku1uxxW4KRGMffAD1t16SpUfkQV0PdEgXn3eS9-V8EnfKfnh0GRiOSMQpHN9pXWz0pxmSSyAFniQ1s2Cr~FBp~a8s2sCQ~wBsYhWYXP1-3pD9qptgjxwwFS6k5BYb~UgYQsNwlrlpJx3u~D6HHSj3JiBAdGLrLiRz8bNmc0kgZUgW3wb5rdvp8In5RlbLAlNbZsvVT-jfOzJl6-v8fqc-J6fvZVqZ4F7HkGPjz91ay4TlJrJ-vziQukrm1BeXjv~b7W4Vp7RkzOd-9IwF~0Ae8h2zIiKv9WnXbgDbA6f2RDA__"
			meta="Explore the beauty of Castello di Udine after dropping your bags off at the hotel, with Wine tasting in the evening at Vineria La Botte"
			onclick={() => goto('/app/journey')}
		/>

		<Item
			title="Day two: Explore the wilds"
			imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/68/0a/37/caption.jpg"
			meta="Packing in the morning for a beautiful day trip to the Nation Park"
			onclick={() => goto('/app/journey')}
		/>

		<Item
			title="Day three: Take a breath"
			imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/69/2e/a8/caption.jpg"
			meta="Leaving your hotel in the morning and enjoying your last day by strolling around the city before coming home!"
			onclick={() => goto('/app/journey')}
		/>
	</div>

	<AiInput
		placeholder="Wanna change something?"
		onsubmit={function (e) {
			e.preventDefault();
			console.log(this);
		}}
	/>
</Page>

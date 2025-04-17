<script lang="ts">
	import { goto } from '$app/navigation';
	import AiInput from '$lib/components/AiInput.svelte';
	import Page from '$lib/components/Page.svelte';
	import Item from '$lib/components/trips/itinerary/Item.svelte';
</script>

<Page class="grid grid-rows-[max-content_1fr_max-content]" title="Explore">
	<div
		class="grid-row-auto grid h-full w-full snap-y snap-mandatory auto-rows-[calc(100%-4em)] gap-4 overflow-y-scroll rounded-3xl"
	>
		<Item
			title="Friuli-Venezia Giulia, Italy"
			imageUrl="https://s3-alpha-sig.figma.com/img/17bf/c79b/0ead6ea4d0eb12198e00da2862767ce8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lkFdhtGFY6dZkNL3aiK1r7J6rWPea0AAcGhm98v0jJiQ-K0uSIARM9zo-v~~S9VWssgOMz5OlaTd183-6tl0hg9w0PAXzaO9W6hbx3gLikbHQwDv79VUtXC26mtu7ogS1JfdQkm2PkO2~94pGG8PHvkRyqay66qTmr8Xgq-kJg6TnAzqdeT2rW93XXAEaSZgH4V4t9niQ5HIlvb4gAYMamVyqbgHffo52NcPzT5krNJcdKeOZTMOIhL2h~1i1dm~ev4KQauNaxA4CdNd88Bhu-IhDHFdR9qTK1MtdLKqghZwptQmAFdhg5MLuNXqdMEDsgNicKNtyR0Blwsv2Dbs3g__"
			meta="Get to know the culture and explore the land"
			onclick={() => goto('/app/itinerary')}
		/>

		<Item
			title="Castle trip!"
			imageUrl="https://s3-alpha-sig.figma.com/img/c93f/e9b5/5678309fc5488cb3881824f2fa39b63d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kj3rr5C-Ce9jrtDM8ytCwejY9VCLFz2fIZv0TaYzMgku1uxxW4KRGMffAD1t16SpUfkQV0PdEgXn3eS9-V8EnfKfnh0GRiOSMQpHN9pXWz0pxmSSyAFniQ1s2Cr~FBp~a8s2sCQ~wBsYhWYXP1-3pD9qptgjxwwFS6k5BYb~UgYQsNwlrlpJx3u~D6HHSj3JiBAdGLrLiRz8bNmc0kgZUgW3wb5rdvp8In5RlbLAlNbZsvVT-jfOzJl6-v8fqc-J6fvZVqZ4F7HkGPjz91ay4TlJrJ-vziQukrm1BeXjv~b7W4Vp7RkzOd-9IwF~0Ae8h2zIiKv9WnXbgDbA6f2RDA__"
			meta="Explore the beauty of Castello di Udine and get to know the surrounding areas"
			onclick={() => goto('/app/itinerary')}
		/>

		<Item
			title="Unlock your wild side"
			imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/68/0a/37/caption.jpg"
			meta="A beautiful camping trip to the Nation Park"
			onclick={() => goto('/app/itinerary')}
		/>

		<Item
			title="I just want to relax!"
			imageUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/69/2e/a8/caption.jpg"
			meta="Just have some time to stroll around the city, with plenty of time to just sip a glass of wine"
			onclick={() => goto('/app/itinerary')}
		/>
	</div>

	<AiInput
		placeholder="Got some ideas?"
		onsubmit={function (e) {
			e.preventDefault();
			goto('/app/new');
		}}
	/>
</Page>

<script lang="ts">
	import { goto } from '$app/navigation';
	import ButtonPanel from '$lib/components/ButtonPanel.svelte';
	import Page from '$lib/components/Page.svelte';

	import Calendar from '~icons/mdi/calendar-clock';
	import Edit from '~icons/mdi/file-document-edit';
	import Archive from '~icons/mdi/archive';
	import StickyNote from '~icons/mdi/sticker-emoji';
	import AddCircle from '~icons/mdi/add-circle-outline';
</script>

<Page title="Welcome traveller!" class="grid grid-rows-[1fr_max-content]">
	{#snippet header()}
		<div class="place-self-center">
			<h1 class="text-center text-5xl">Welcome back, traveller</h1>
		</div>
	{/snippet}

	<div class="mb-4 grid grid-cols-2 gap-4">
		<ButtonPanel
			label="Plan a trip"
			class="col-start-1 col-end-3 aspect-[2/1] bg-[#65558F]"
			icon={AddCircle}
			iconContainerClass="bg-white/20"
			textClass="text-white"
			iconProps={{ color: 'white' }}
			onclick={() => goto('/app/new')}
		/>
		<ButtonPanel
			label="Up-coming"
			class="aspect-square bg-[#CBA35A]"
			icon={Calendar}
			onclick={() => goto('/app/upcoming')}
		/>
		<ButtonPanel
			label="Drafts"
			class="aspect-square bg-[#72E881]"
			icon={Edit}
			onclick={() => goto('/app/drafts')}
		/>
		<ButtonPanel
			label="Past Trips"
			class="aspect-square bg-[#72D4E8]"
			icon={Archive}
			onclick={() => goto('/app/archive')}
		/>
		<ButtonPanel
			label="Explore"
			class="aspect-square bg-[#E87293]"
			icon={StickyNote}
			onclick={() => goto('/app/explore')}
		/>
	</div>
</Page>

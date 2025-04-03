<script lang="ts">
	import { goto } from '$app/navigation';
	import ButtonPanel from '$lib/components/ButtonPanel.svelte';

	import Calendar from 'svelte-google-materialdesign-icons/Calendar_today.svelte';
	import Edit from 'svelte-google-materialdesign-icons/Edit.svelte';
	import Archive from 'svelte-google-materialdesign-icons/Archive.svelte';
	import StickyNote from 'svelte-google-materialdesign-icons/Sticky_note_2.svelte';
	import AddCircle from 'svelte-google-materialdesign-icons/Add_circle_outline.svelte';
</script>

<div class="h-[100dvh] w-[100dvw] overflow-hidden">
	<div class="mx-4 my-2 flex flex-col items-center md:mx-0">
		<strong class="mb-8 text-3xl">Welcome back, traveler!</strong>
		<div class="grid max-w-xl grid-cols-2 gap-4">
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
	</div>
</div>

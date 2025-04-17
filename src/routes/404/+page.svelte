<script lang="ts">
	import { goto } from '$app/navigation';

	import Logo from '../../assets/Logo.svg?component';
	import Page from '$lib/components/Page.svelte';
</script>

<Page class="grid grid-rows-[1fr_max-content]">
	{#snippet header()}
		<div class="place-self-center">
			<Logo class="mx-auto mt-16" />
			<h1 class="font-title text-konsu-light-00 mx-auto mt-4 w-min text-[48pt]">Konsu</h1>
			<h1 class="text-konsu-light-00 mx-auto w-max text-3xl">
				<span class="font-title">404</span>: Not Found
			</h1>
		</div>
	{/snippet}

	<div class="mx-auto mb-8 w-full">
		<button
			type="button"
			onclick={() => goto('/')}
			class="drop-shadow-box mt-8 w-full cursor-pointer rounded-full bg-slate-500 p-2 text-xl font-bold"
			>Return to the safe path</button
		>
	</div>
</Page>

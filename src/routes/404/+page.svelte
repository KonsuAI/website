<script lang="ts">
	import { goto } from '$app/navigation';

	import Logo from '../../assets/Logo.svg?component';
	import Page from '$lib/components/Page.svelte';
</script>

<Page title="" class="flex flex-col place-content-center">
	<Logo class="mx-auto" />
	<div>
		<h1 class="font-title text-konsu-light-00 mx-auto w-min text-[48pt]">Konsu</h1>
	</div>

	<div class="mx-auto mt-8 w-min">
		<h1 class="text-konsu-light-00 mx-auto w-max text-3xl">
			<span class="font-title">404</span>: Not Found
		</h1>

		<button
			type="button"
			onclick={() => goto('/')}
			class="drop-shadow-box mt-8 min-w-100 cursor-pointer rounded-full bg-slate-500 p-2 text-xl font-bold"
			>Return to the safe path</button
		>
	</div>
</Page>

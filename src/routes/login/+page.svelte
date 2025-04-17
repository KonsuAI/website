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
		</div>
	{/snippet}

	<div class="mx-auto mb-8 w-full">
		<button
			type="button"
			onclick={() => goto('/app')}
			class="drop-shadow-box mt-16 w-full cursor-pointer rounded-full bg-slate-500 p-2 text-xl font-bold"
			>Login</button
		>

		<button
			type="button"
			onclick={() => goto('/register')}
			class="drop-shadow-box mt-4 w-full cursor-pointer rounded-full bg-indigo-500 p-2 text-xl font-bold"
			>Register</button
		>
	</div>
</Page>

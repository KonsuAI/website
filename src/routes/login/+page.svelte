<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '../../assets/Logo.svg?component';
	import Page from '$lib/components/Page.svelte';
</script>

<Page title="Welcome!">
	<Logo class="mx-auto" />
	<div>
		<h1 class="font-title text-konsu-light-00 mx-auto w-min text-[48pt]">Konsu</h1>
	</div>

	<div class="mx-auto w-min">
		<button
			type="button"
			onclick={() => goto('/app')}
			class="drop-shadow-box mt-16 min-w-100 cursor-pointer rounded-full bg-slate-500 p-2 text-xl font-bold"
			>Login</button
		>

		<button
			type="button"
			onclick={() => goto('/register')}
			class="drop-shadow-box mt-4 min-w-100 cursor-pointer rounded-full bg-indigo-500 p-2 text-xl font-bold"
			>Register</button
		>
	</div>
</Page>

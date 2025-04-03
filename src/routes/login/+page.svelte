<script lang="ts">
	import { goto } from '$app/navigation';
	import Logo from '$lib/components/Logo.svelte';
</script>

<div class="flex h-[100dvh] flex-col items-center justify-center">
	<div class="flex h-[60dvh] flex-col items-center justify-between">
		<strong class="self-center text-3xl">Welcome!</strong>
		<Logo />
		<div class="font-title text-konsu-light-00 text-[48pt]">Konsu</div>

		<button
			type="button"
			onclick={() => goto('/app')}
			class="drop-shadow-box min-w-100 cursor-pointer rounded-full bg-slate-500 p-2 text-xl font-bold"
			>Login</button
		>

		<button
			type="button"
			onclick={() => goto('/register')}
			class="drop-shadow-box min-w-100 cursor-pointer rounded-full bg-indigo-500 p-2 text-xl font-bold"
			>Register</button
		>
	</div>
</div>

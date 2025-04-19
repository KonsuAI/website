import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";
import svg from "@poppanator/sveltekit-svg";

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), Icons({ compiler: "svelte" }), svg()],
	build: {
		target: "ES6",
	},
});

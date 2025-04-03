import { writable } from "svelte/store";
import Loading from "./MainLoading.svelte";
export { Loading };

export const isGoingBack = writable(false);
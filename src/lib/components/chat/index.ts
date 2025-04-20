import type { MarkedExtension } from "marked";
import * as ChatFilter from "./ChatFilter.svelte";
import * as Slideshow from "./Slideshow.svelte";

import type { Component } from "svelte";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface LlmEmbed<Props extends Record<string, any>> {
    SYNTAX: MarkedExtension;
    TAG_NAME: string;
    extract: (el: Element) => Props;
    default: Component<Props>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function as_embed<Props extends Record<string, any>>(
    raw: LlmEmbed<Props>,
): LlmEmbed<Record<string, unknown>> {
    return raw as unknown as LlmEmbed<Record<string, unknown>>;
}

export const EMBEDS: LlmEmbed<Record<string, unknown>>[] = [
    as_embed(ChatFilter),
    as_embed(Slideshow),
];

export type Embed = Slideshow.SlideshowEmbed;

export interface EmbedContext {
    embeds: Embed[];
    current_index: number;
}

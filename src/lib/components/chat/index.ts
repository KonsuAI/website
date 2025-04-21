/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MarkedExtension } from "marked";
import * as ChatFilter from "./ChatFilter.svelte";
import * as Slideshow from "./Slideshow.svelte";

import type { Component } from "svelte";

interface LlmEmbed<Props extends Record<string, any>, Payload> {
    SYNTAX: MarkedExtension;
    TAG_NAME: string;
    extract: (el: Element) => Props;
    HAS_PAYLOAD: Payload extends {} ? true : false;
    default: Component<Props & { payload: Payload }>;
}

function as_embed<Props extends Record<string, any>, P>(
    raw: LlmEmbed<Props, P>,
): LlmEmbed<Record<string, unknown>, any> {
    return raw as unknown as LlmEmbed<
        Record<string, unknown>,
        any
    >;
}

export const EMBEDS: LlmEmbed<Record<string, any>, any>[] = [
    as_embed(ChatFilter),
    as_embed(Slideshow),
];

export type Embed = Slideshow.SlideshowEmbed;

export interface EmbedContext {
    embeds: Embed[];
    main: HTMLElement;
}

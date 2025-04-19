import { type _SSEvent, SSE } from "sse.js";

export const BASE_URL = "https://api.konsu.ai";

type Ctx = Record<string, unknown>;
export class Chat {
    ctx: Ctx;
    session_id: string;

    private constructor(ctx: Ctx, session_id: string) {
        this.ctx = ctx;
        this.session_id = session_id;
    }

    send(
        contents: { prompt: string },
        fragment: (
            response: string,
        ) => void,
    ): Promise<void> {
        return new Promise((resolve, reject) => {
            const events = new SSE(`${BASE_URL}/chat/${this.session_id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                payload: JSON.stringify(contents),
            });
            events.addEventListener("message", (ev: _SSEvent) => {
                const response = JSON.parse(ev.data);
                fragment(response);
            });
            events.addEventListener("turn_complete", () => resolve());
            events.addEventListener("error", (err: unknown) => reject(err));
        });
    }

    static async new(): Promise<Chat> {
        const ctx = {};
        const { session_id } = await fetch(`${BASE_URL}/chat/new`).then((res) =>
            res.json()
        ) as { session_id: string };

        console.log({ session_id });

        return new Chat(ctx, session_id);
    }
}

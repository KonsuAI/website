/* eslint-disable @typescript-eslint/no-namespace */

export const BASE_URL = "wss://api.konsu.ai";

type Ctx = Record<string, unknown>;
export class Conversation {
    ctx: Ctx;
    socket: WebSocket;

    private constructor(ctx: Ctx, socket: WebSocket) {
        this.ctx = ctx;
        this.socket = socket;
    }

    send(
        contents: { prompt: string },
        fragment: (
            response: { message: string } | { turn_complete: boolean },
        ) => void,
    ): Promise<unknown> {
        const { promise, resolve, reject } = Promise.withResolvers();

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const that = this;
        this.socket.addEventListener(
            "message",
            function (this: WebSocket, msg) {
                if (msg.data?.turn_complete) {
                    that.socket.removeEventListener("message", this);
                    return resolve(void 0);
                }

                const data = JSON.parse(msg.data);
                fragment(data);
            },
        );
        this.socket.addEventListener("error", reject, { once: true });
        this.socket.send(JSON.stringify(contents));
        return promise;
    }

    static async new(session_id: string): Promise<Conversation> {
        const ctx = {};
        const socket = new WebSocket(
            `${BASE_URL}/ws/conversation/${session_id}`,
        );

        // Wait to connect...
        const { promise, resolve, reject } = Promise.withResolvers();
        socket.addEventListener("open", resolve, { once: true });
        socket.addEventListener("error", reject, { once: true });
        await promise;

        return new Conversation(ctx, socket);
    }
}

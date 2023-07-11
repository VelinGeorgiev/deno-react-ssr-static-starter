import { serve } from "https://deno.land/std@0.126.0/http/server.ts";
import { renderToReadableStream } from "https://esm.run/react-dom/server";
import React from "https://esm.run/react";

const App = () => (
    <html lang="en">
        <head>
            <title>My Deno Static Site</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
)

async function handler(req: Request) {
    return new Response(await renderToReadableStream(<App />, {
        status: 200,
        headers: {
            "Content-Type": "text/html",
            "Cache-Control": "no-transform",
        }
    }))
}

serve(handler, { port: 3000 });
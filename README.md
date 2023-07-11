# deno-react-ssr-static-starter
Using Deno http server and React to render a static page. No react hydration included when page loaded to keep the site static but fast

## How to run it

`deno run --allow-net server.tsx`

## How to run it in dev mode

`deno run --allow-net --watch=server.tsx server.tsx`

## Why no react hydration on the front end?

This is my personal preference to keep the site blazing fast. 
I'd like to run a static site backed by react as a backend server rendering engine.
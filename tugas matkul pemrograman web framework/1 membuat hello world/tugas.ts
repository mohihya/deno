import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
app.use((ctx) => {
  ctx.response.body = "Hello World! my name is ihya nim 1120000494";
});

console.log("Service bejalan di port 8000");
await app.listen({ port: 8000 });

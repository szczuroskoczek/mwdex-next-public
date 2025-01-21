import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const token = createCookie("token", {
  maxAge: 3600 // 1 hour
});

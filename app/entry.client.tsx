/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import PiwikPro from "@piwikpro/react-piwik-pro";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});

PiwikPro.initialize(
  "491d1c8d-c6ce-4e26-91b0-eeff26cc18cd",
  "https://mwdex.piwik.pro",
  {
    dataLayerName:
      process.env.NODE_ENV === "production" ? "dataLayer" : "dataLayerDev",
  }
);

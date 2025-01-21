import { MetaFunction } from "@remix-run/react";

export const makeMeta =
  ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): MetaFunction =>
  ({ location }) => {
    return [
      { title: `${title} | MWD` },
      { name: "description", content: description },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { charset: "UTF-8" },
      { name: "author", content: "MWD Krystian Mikołajczyk" },
      {
        name: "keywords",
        content:
          "MWD, Krystian Mikołajczyk, usługi developerskie, web development, programowanie, aplikacje webowe, strony internetowe, React, TypeScript, Node.js, frontend, backend, fullstack, Polska, IT consulting",
      },
      { property: "og:title", content: `${title} | MWD` },
      { property: "og:description", content: description },
      { property: "og:url", content: `https://mwdex.pl${location.pathname}` },
      { property: "og:image", content: "https://mwdex.pl/og.png" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${title} | MWD` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: "https://mwdex.pl/og.png" },
      //   { name: "twitter:site", content: "@YourHandle" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#9C1203" },
    ];
  };

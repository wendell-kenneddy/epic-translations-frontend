import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Epic Translations",
    short_name: "Epic",
    description: "Traduções de todas as canções de Epic.",
    id: "epic-translations",
    orientation: "portrait-primary",
    lang: "pt-br",
    start_url: "/",
    display: "standalone",
    background_color: "#020617",
    theme_color: "#0f172a",
    scope: "/",
    icons: [
      {
        src: "/icon72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/icon96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/icon128.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icon152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        src: "/icon384.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "/icon512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

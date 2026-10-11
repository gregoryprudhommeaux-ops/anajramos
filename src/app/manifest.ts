import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ana Ramos",
    short_name: "Ana Ramos",
    icons: [
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    display: "browser",
    background_color: "#0F1E36",
    theme_color: "#0F1E36",
  };
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "TractionFlo",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/icon?v=2",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon?v=2",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

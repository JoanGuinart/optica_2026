// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath, URL } from "node:url";
import vercelAdapter from "@astrojs/vercel";

/** @param {string} p */
const alias = (p) => fileURLToPath(new URL(p, import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://opticaguinart.com",
  devToolbar: { enabled: false },
  // Totes les pàgines es generen en el build: es serveixen directament des del CDN.
  // (El formulari de contacte envia a formsubmit.co, no necessita servidor.)
  output: "static",
  adapter: vercelAdapter(),
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro internal and @tailwindcss/vite
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": alias("./src"),
        "@components": alias("./src/components"),
        "@layouts": alias("./src/layouts"),
        "@pages": alias("./src/pages"),
        "@utils": alias("./src/utils"),
        "@styles": alias("./src/styles"),
        "@assets": alias("./src/assets"),
        "@data": alias("./src/data"),
        "@scripts": alias("./src/scripts"),
      },
    },
  },
  integrations: [sitemap()],
});

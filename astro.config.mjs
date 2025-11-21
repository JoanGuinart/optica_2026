// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { fileURLToPath, URL } from "node:url";
import react from "@astrojs/react";
import vercelAdapter from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  // Dominio principal del sitio para generar URLs canónicas y metadata absoluta
  site: "https://opticaguinart.com",
  devToolbar: {
    enabled: false,
  },
  build: {
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  vite: {
    // @ts-ignore - Vite plugin type mismatch between Astro internal and @tailwindcss/vite
    plugins: [tailwindcss()],
    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          dead_code: true,
          unused: true,
        },
        mangle: {
          safari10: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
          },
        },
      },
      assetsInlineLimit: 4096,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@lib": fileURLToPath(new URL("./src/lib", import.meta.url)),
        "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@types": fileURLToPath(new URL("./src/types", import.meta.url)),
        "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
        "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
        "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
      },
    },
  },
  integrations: [react(), sitemap()],
  output: "server", // 🔹 Cambiado a SSR
  adapter: vercelAdapter(), // 🔹 Adaptador SSR para Vercel
});

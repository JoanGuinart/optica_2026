// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { fileURLToPath, URL } from "node:url";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // Domain principal del sitio para generar URLs canónicas y metadata absoluta
  // TODO: Sustituir si el dominio final es diferente
  site: 'https://opticaguinart.com',
  devToolbar: {
    enabled: false,
  },
  build: {
    // Optimizaciones de minificación y compresión
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Configuración avanzada de minificación
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true, // Eliminar console.log en producción
          drop_debugger: true,
          dead_code: true,
          unused: true,
        },
        mangle: {
          safari10: true,
        },
      },
      // Optimización de chunks para mejor caching
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          },
        },
      },
      // Compresión y optimización de assets
      assetsInlineLimit: 4096, // Inline small assets
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
  integrations: [react()],
});

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Mejorar el tree-shaking y code splitting
        manualChunks: (id) => {
          // Separar vendors grandes
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('tailwindcss')) {
              return 'tailwind-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    // Configuración de minificación más agresiva
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
        dead_code: true,
        unused: true,
        // Optimizaciones adicionales
        arrows: true,
        arguments: true,
        booleans: true,
        collapse_vars: true,
        comparisons: true,
        computed_props: true,
        hoist_funs: true,
        hoist_props: true,
        hoist_vars: false,
        if_return: true,
        inline: true,
        join_vars: true,
        loops: true,
        negate_iife: true,
        properties: true,
        reduce_vars: true,
        sequences: true,
        side_effects: true,
        switches: true,
        top_retain: null,
        typeofs: true,
      },
      mangle: {
        safari10: true,
        properties: false,
      },
      format: {
        comments: false,
      },
    },
  },
});
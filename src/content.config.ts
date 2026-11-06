import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Guies: articles en Markdown a src/content/guies/{ca,es}/.
 * Per afegir-ne una, copia un fitxer existent i canvia'n el text.
 * `ref` ha de ser igual a les dues versions (ca i es) d'una mateixa guia.
 */
const guies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guies" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(170),
    lang: z.enum(["ca", "es"]),
    slug: z.string(),
    ref: z.string(),
    category: z.enum(["optica", "audiologia"]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { guies };

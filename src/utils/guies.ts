import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "./i18n";

export type Guia = CollectionEntry<"guies">;

/** Carpeta de les guies a cada idioma */
export const guiesBase: Record<Locale, string> = { ca: "/guies/", es: "/es/guias/" };

export const guiaUrl = (g: Guia) => `${guiesBase[g.data.lang]}${g.data.slug}/`;

/** Guies d'un idioma, de la més nova a la més antiga */
export async function getGuies(locale: Locale): Promise<Guia[]> {
  const all = await getCollection("guies", (g) => g.data.lang === locale);
  return all.sort((a, b) => +(b.data.updated ?? b.data.date) - +(a.data.updated ?? a.data.date));
}

/** URL de la mateixa guia en cada idioma (per al canvi d'idioma i hreflang) */
export async function guiaAlternates(g: Guia): Promise<{ ca: string; es: string }> {
  const all = await getCollection("guies", (x) => x.data.ref === g.data.ref);
  const find = (l: Locale) => all.find((x) => x.data.lang === l);
  const ca = find("ca");
  const es = find("es");
  return { ca: ca ? guiaUrl(ca) : guiesBase.ca, es: es ? guiaUrl(es) : guiesBase.es };
}

/** Minuts de lectura aproximats (200 paraules/minut) */
export const minutsLectura = (g: Guia) => Math.max(1, Math.round((g.body ?? "").split(/\s+/).length / 200));

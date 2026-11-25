import promo from "../data/promo-black-friday.json";
import type { Locale } from "./i18n";

/**
 * Temporary promo (Black Friday): which products, the discount and the dates.
 * Shown only while it's on: hidden at build time once it has ended, and the
 * browser removes it by itself when the end date passes (see PromoTemporal).
 */

export type PromoTexts = (typeof promo)["ca"];

export interface PromoProduct {
  name: string;
  src: string;
  was: string;
  now: string;
}

/** "149€", "1.299,50 €" → 149 / 1299.5; null if it isn't a price. */
function parseEuro(s: string): number | null {
  let t = s.replace(/€|\s/g, "");
  if (t.includes(",")) t = t.replace(/\./g, "").replace(",", ".");
  else if (/^\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, "");
  if (!/^\d+(\.\d+)?$/.test(t)) return null;
  return Number(t);
}

/** 74.5 → "74,50€", 75 → "75€". */
function formatEuro(n: number): string {
  const [whole, decimals] = (Math.round(n * 100) / 100).toFixed(2).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return decimals === "00" ? `${grouped}€` : `${grouped},${decimals}€`;
}

export const PROMO = { id: promo.id, start: promo.start, end: promo.end, percent: promo.percent };

/** Is the promo on at this moment (build time on the server)? */
export function promoActive(now = new Date()): boolean {
  return now >= new Date(promo.start) && now <= new Date(promo.end);
}

export function promoTexts(locale: Locale): PromoTexts {
  return promo[locale];
}

/** Discounted price for a product src, or null when it isn't in the promo or has no price. */
export function promoPrice(src: string, price: string | undefined): { was: string; now: string } | null {
  if (!promo.products.includes(src) || !price) return null;
  const was = parseEuro(price);
  if (was === null) return null;
  return { was: formatEuro(was), now: formatEuro((was * (100 - promo.percent)) / 100) };
}

/** Products in the promo, in the promo's order, with both prices. */
export function promoProducts(all: Array<{ name: string; src: string; price?: string }>): PromoProduct[] {
  return promo.products.flatMap((src) => {
    const p = all.find((x) => x.src === src);
    const prices = p && promoPrice(src, p.price);
    return p && prices ? [{ name: p.name, src, ...prices }] : [];
  });
}

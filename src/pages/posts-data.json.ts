import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import offersHomeCa from "@data/ca/offers-home.json";
import offersProductsCa from "@data/ca/offers-products.json";
import productsCa from "@data/ca/products.json";
import servicesCa from "@data/ca/services.json";
import offersHomeEs from "@data/offers-home.json";
import offersProductsEs from "@data/offers-products.json";
import productsEs from "@data/products.json";
import servicesEs from "@data/services.json";

/**
 * Dades per al generador de posts d'Instagram (eina local, repo a part).
 * Es genera en el build com un fitxer estàtic: /posts-data.json
 * Només conté el que ja es publica a la web. Si canvies l'estructura dels
 * JSON de src/data, revisa que aquest fitxer continuï traient els mateixos camps.
 */

type Rec = Record<string, unknown>;

const pick = (items: unknown, keys: string[]) =>
  (Array.isArray(items) ? (items as Rec[]) : []).map((item) =>
    Object.fromEntries(keys.filter((k) => item[k] !== undefined).map((k) => [k, item[k]])),
  );

const PRODUCT = ["id", "name", "description", "src"];
const OFFER = ["badge", "title", "description", "price_from", "price_or_gift", "subtitle", "conditions"];
const SERVICE = ["id", "title", "description", "price"];

// Fotos de la botiga: Astro les publica amb un nom amb hash; aquí en donem la URL final.
const shopPhotos = import.meta.glob<{ default: ImageMetadata }>("../assets/fotos/*.{webp,jpg,jpeg,png}", { eager: true });

export const GET: APIRoute = async () => {
  const guides = await getCollection("guies");

  const data = {
    version: 1,
    products: {
      ca: pick(productsCa.featuredProducts.products, PRODUCT),
      es: pick(productsEs.featuredProducts.products, PRODUCT),
    },
    offersHome: { ca: pick(offersHomeCa.offers, OFFER), es: pick(offersHomeEs.offers, OFFER) },
    offersProducts: { ca: pick(offersProductsCa.offers, OFFER), es: pick(offersProductsEs.offers, OFFER) },
    services: { ca: pick(servicesCa.services, SERVICE), es: pick(servicesEs.services, SERVICE) },
    guides: guides.map((g) => ({
      lang: g.data.lang,
      ref: g.data.ref,
      category: g.data.category,
      title: g.data.title,
      description: g.data.description,
      body: g.body ?? "",
    })),
    shopPhotos: Object.entries(shopPhotos).map(([path, mod]) => ({
      file: path.split("/").pop() ?? path,
      url: mod.default.src,
    })),
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};

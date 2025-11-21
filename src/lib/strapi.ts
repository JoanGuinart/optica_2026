const API_URL = import.meta.env.PUBLIC_API_URL;

if (!API_URL) {
  console.warn("⚠️ PUBLIC_API_URL not set in environment variables");
}

/**
 * Fetch the Strapi entry for ofertas
 */
async function fetchOfertasEntry() {
  try {
    const res = await fetch(`${API_URL}/api/ofertas?populate=*`);
    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText}`);
      return null;
    }

    const json = await res.json();
    return json.data?.[0] || null;
  } catch (error) {
    console.error("Failed to fetch ofertas from Strapi:", error);
    return null;
  }
}

/**
 * Get special offers for portada
 */
export async function getSpecialOffersPortada() {
  const entry = await fetchOfertasEntry();
  return entry?.ofertas_especiales_portada || ['empty array'];
}

/**
 * Get special offers for productos
 */
export async function getSpecialOffersProducts() {
  const entry = await fetchOfertasEntry();
  return entry?.ofertas_especiales_productos || ['empty array'];
}

/**
 * Get main product offer
 */
export async function getPrincipalOfferProducts() {
  const entry = await fetchOfertasEntry();
  return entry?.oferta_principal_productos || null;
}

/**
 * Type definitions
 */
export interface StrapiOferta {
  id: number;
  title: string;
  description: string;
  subtitle?: string;
  imagen?: any;
  badge?: string;
  badge_color?: string;
  button_text?: string;
  url?: string;
  price_from?: string;
  price_or_gift?: string;
  link?: string;
  image?: any;
  [key: string]: any;
}

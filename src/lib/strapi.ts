const API_URL = import.meta.env.PUBLIC_API_URL;

if (!API_URL) {
  console.warn("⚠️ PUBLIC_API_URL not set in environment variables");
}

// Cache para evitar múltiples llamadas durante el build
let cachedData: any = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1 minuto de caché

/**
 * Fetch con timeout para evitar peticiones colgadas
 */
async function fetchWithTimeout(url: string, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

/**
 * Fetch the Strapi entry for ofertas con caché y timeout
 */
async function fetchOfertasEntry() {
  // Si hay caché válido, devolverlo
  const now = Date.now();
  if (cachedData && (now - cacheTime) < CACHE_DURATION) {
    return cachedData;
  }

  try {
    const res = await fetchWithTimeout(`${API_URL}/api/ofertas?populate=*`, 5000);
    if (!res.ok) {
      console.error(`Strapi API error: ${res.status} ${res.statusText}`);
      return cachedData || null; // Devolver caché antiguo si existe
    }

    const json = await res.json();
    const data = json.data?.[0] || null;
    
    // Actualizar caché
    cachedData = data;
    cacheTime = now;
    
    return data;
  } catch (error) {
    console.error("Failed to fetch ofertas from Strapi:", error);
    return cachedData || null; // Devolver caché antiguo si existe
  }
}

/**
 * Get special offers for portada
 */
export async function getSpecialOffersPortada() {
  const entry = await fetchOfertasEntry();
  return entry?.ofertas_especiales_portada || [];
}

/**
 * Get special offers for productos
 */
export async function getSpecialOffersProducts() {
  const entry = await fetchOfertasEntry();
  return entry?.ofertas_especiales_productos || [];
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

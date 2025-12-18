const API_URL = "https://healing-bracelet-5345b353cb.strapiapp.com";
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
async function getSpecialOffersPortada() {
  const entry = await fetchOfertasEntry();
  return entry?.ofertas_especiales_portada || ["empty array"];
}
async function getSpecialOffersProducts() {
  const entry = await fetchOfertasEntry();
  return entry?.ofertas_especiales_productos || ["empty array"];
}
async function getPrincipalOfferProducts() {
  const entry = await fetchOfertasEntry();
  return entry?.oferta_principal_productos || null;
}

export { getSpecialOffersProducts as a, getSpecialOffersPortada as b, getPrincipalOfferProducts as g };

/**
 * Verifica si el sitio debe mostrar la página "en construcción"
 * @returns true si debe mostrar construcción, false si debe mostrar el sitio normal
 */
export function isUnderConstruction(): boolean {
  // En Astro, las variables públicas están disponibles en import.meta.env
  const underConstruction = import.meta.env.PUBLIC_UNDER_CONSTRUCTION;
  
  // Verificar si estamos en un preview deployment de Vercel
  // Los preview deployments tienen URLs como: https://proyecto-git-rama-usuario.vercel.app
  if (typeof window !== 'undefined') {
    const url = window.location.hostname;
    // Si la URL contiene "git-preview" es un preview deployment
    if (url.includes('git-preview')) {
      return false; // Mostrar sitio completo en preview
    }
  }
  
  // Primero verificar la variable de entorno específica
  if (underConstruction === "true") {
    return true;
  }

  // Si está explícitamente desactivada, no mostrar construcción
  if (underConstruction === "false") {
    return false;
  }

  // Por defecto en producción, mostrar construcción (a menos que esté explícitamente desactivada)
  return import.meta.env.MODE === "production";
}

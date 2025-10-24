// Dark mode toggle functionality
export function initDarkMode() {
  // Verificar si hay una configuración forzada
  const forceTheme = import.meta.env.PUBLIC_FORCE_THEME;
  
  // Si hay tema forzado, aplicarlo directamente
  if (forceTheme === 'light') {
    document.documentElement.classList.remove('dark');
    return;
  }
  
  if (forceTheme === 'dark') {
    document.documentElement.classList.add('dark');
    return;
  }
  
  // Si es "auto" o no está definido, usar lógica normal
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function toggleDarkMode() {
  // Verificar si hay tema forzado
  const forceTheme = import.meta.env.PUBLIC_FORCE_THEME;
  
  // Si hay tema forzado, no permitir cambios
  if (forceTheme === 'light' || forceTheme === 'dark') {
    console.log(`Tema forzado a: ${forceTheme}. No se puede cambiar.`);
    return;
  }
  
  // Solo permitir toggle si está en modo automático
  const isDark = document.documentElement.classList.contains('dark');
  
  if (isDark) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}

// Función para verificar si el tema está forzado
export function isThemeForced() {
  const forceTheme = import.meta.env.PUBLIC_FORCE_THEME;
  return forceTheme === 'light' || forceTheme === 'dark';
}
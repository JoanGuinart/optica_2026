import { useEffect, useState, useCallback } from "react";
import { toggleDarkMode, isThemeForced } from "@/lib/theme";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [themeForced, setThemeForced] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains('dark'));
    setThemeForced(isThemeForced());
  }, []);

  const handleToggle = useCallback(() => {
    if (!themeForced) {
      toggleDarkMode();
      setIsDark(document.documentElement.classList.contains('dark'));
    }
  }, [themeForced]);

  // No mostrar el botón si el tema está forzado
  if (themeForced) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      className="relative w-10 h-10 bg-emerald-600/20 dark:bg-emerald-500/20 hover:bg-emerald-600/30 dark:hover:bg-emerald-500/30 rounded-xl border border-emerald-500/40 dark:border-emerald-400/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        // Sun icon for light mode
        <svg className="w-5 h-5 text-slate-700 dark:text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg className="w-5 h-5 text-slate-700 dark:text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
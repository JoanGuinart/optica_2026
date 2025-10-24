import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import { isUnderConstruction } from "@/lib/under-construction";
import { initDarkMode } from "@/lib/theme";
import navbarData from "@data/navbar.json";

// Lazy load del ThemeToggle
const ThemeToggle = lazy(() => import("./ThemeToggle"));

const NavbarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    
    // Forzar inicialización del tema cuando React se monta
    initDarkMode();
    
    // Check initial theme después de la inicialización
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);
    
    // Back/forward cache optimization
    const handlePageShow = (event) => {
      // Re-initialize theme when page is restored from cache
      if (event.persisted) {
        initDarkMode();
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };
    
    const handlePageHide = () => {
      // Cleanup for back/forward cache
      document.body.style.overflow = "auto";
    };
    
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("pagehide", handlePageHide);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }
    
    // Cleanup function para back/forward cache
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen((o) => !o), []);

  const toggleTheme = useCallback(() => {
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
      // Cambiar a modo claro
      localStorage.theme = 'light';
    } else {
      // Cambiar a modo oscuro
      localStorage.theme = 'dark';
    }
    
    // Aplicar la implementación oficial de Tailwind v4
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
    );
    
    // Actualizar el estado de React
    const isDarkNow = document.documentElement.classList.contains('dark');
    setIsDark(isDarkNow);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-black/80 backdrop-blur-lg border-b border-emerald-500/30 dark:border-emerald-400/20 shadow-2xl' 
        : 'bg-white/60 dark:bg-black/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox={navbarData.logo.icon.viewBox}>
                  {navbarData.logo.icon.paths.map((path, index) => (
                    <path key={index} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                  ))}
                </svg>
              </div>
              <span className={`text-xl font-black ${
                isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-white'
              } tracking-wide group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors duration-300`}>
                {navbarData.logo.text} <span className="text-emerald-700 dark:text-emerald-300">{navbarData.logo.highlight}</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navbarData.navigation.desktop.map(({ href, label }) => {
              const underConstruction = isUnderConstruction();
              
              return (
                <div key={href} className="relative group">
                  {underConstruction ? (
                    <span 
                      className={`${
                        isScrolled ? 'text-slate-600 dark:text-white/90' : 'text-slate-500 dark:text-white/80'
                      } hover:text-emerald-700 dark:hover:text-emerald-300 font-medium tracking-wide cursor-not-allowed opacity-70 transition-all duration-300`}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(navbarData.messages.underConstruction);
                      }}
                    >
                      {label}
                    </span>
                  ) : (
                    <a 
                      href={href} 
                      className={`${
                        isScrolled ? 'text-slate-800 dark:text-gray-100' : 'text-slate-700 dark:text-white'
                      } hover:text-emerald-700 dark:hover:text-emerald-300 font-medium tracking-wide transition-all duration-300 relative`}
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Theme toggle and Mobile menu buttons */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle - Desktop */}
            <div className="hidden lg:block">
              <Suspense fallback={<div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse"></div>}>
                <ThemeToggle />
              </Suspense>
            </div>
            
            {/* Theme Toggle - Mobile */}
            <div className="lg:hidden">
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 bg-emerald-600/20 dark:bg-emerald-500/20 hover:bg-emerald-600/30 dark:hover:bg-emerald-500/30 rounded-xl border border-emerald-500/40 dark:border-emerald-400/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
                aria-label={navbarData.theme.ariaLabel}
              >
                {isDark ? (
                  // Sun icon for light mode
                  <svg className="w-5 h-5 text-slate-700 dark:text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox={navbarData.theme.icons.sun.viewBox}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navbarData.theme.icons.sun.path} />
                  </svg>
                ) : (
                  // Moon icon for dark mode
                  <svg className="w-5 h-5 text-slate-700 dark:text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox={navbarData.theme.icons.moon.viewBox}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navbarData.theme.icons.moon.path} />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 bg-emerald-600/20 dark:bg-emerald-500/20 hover:bg-emerald-600/30 dark:hover:bg-emerald-500/30 rounded-xl border border-emerald-500/40 dark:border-emerald-400/30 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
              >
                <div className="flex flex-col space-y-1.5">
                  <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-slate-700 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <nav className="bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-emerald-500/30 dark:border-emerald-400/20 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navbarData.navigation.mobile.map(({ href, label }) => {
                  const underConstruction = isUnderConstruction();
                  
                  return (
                    <div key={href} className="group">
                      {underConstruction ? (
                        <span 
                          className={`block w-full text-left py-3 px-4 ${
                            isScrolled ? 'text-slate-700 dark:text-white/90' : 'text-slate-600 dark:text-white/80'
                          } font-medium tracking-wide cursor-not-allowed opacity-70 bg-slate-100 dark:bg-white/5 rounded-lg`}
                          onClick={(e) => {
                            e.preventDefault();
                            alert(navbarData.messages.underConstruction);
                          }}
                        >
                          {label}
                        </span>
                      ) : (
                        <a 
                          href={href} 
                          onClick={() => setIsMenuOpen(false)}
                          className={`block w-full text-left py-3 px-4 ${
                            isScrolled ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-white'
                          } hover:text-emerald-700 dark:hover:text-emerald-300 font-medium tracking-wide bg-slate-100 dark:bg-white/5 hover:bg-emerald-100 dark:hover:bg-emerald-500/10 rounded-lg transition-all duration-300 border border-transparent hover:border-emerald-600/50 dark:hover:border-emerald-300/40`}
                        >
                          {label}
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarClient;

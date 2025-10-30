import { useEffect, useState, useCallback } from "react";
import { isUnderConstruction } from "@/lib/under-construction";
import navbarData from "@data/navbar.json";

const NavbarClient = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", onResize);
    
    // Back/forward cache optimization
    const handlePageShow = (event) => {
      // Re-initialize when page is restored from cache
      if (event.persisted) {
        // No theme functionality needed
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



  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-emerald-500/30 shadow-2xl' 
        : 'bg-white/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox={navbarData.logo.icon.viewBox}>
                  {navbarData.logo.icon.paths.map((path, index) => (
                    <path key={index} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
                  ))}
                </svg>
              </div>
              <span className={`text-xl font-black ${
                isScrolled ? 'text-slate-900' : 'text-slate-800'
              } tracking-wide group-hover:text-emerald-700 transition-colors duration-300`}>
                {navbarData.logo.text} <span className="text-emerald-700">{navbarData.logo.highlight}</span>
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
                        isScrolled ? 'text-slate-600' : 'text-slate-500'
                      } hover:text-emerald-700 font-medium tracking-wide cursor-not-allowed opacity-70 transition-all duration-300`}
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
                        isScrolled ? 'text-slate-800' : 'text-slate-700'
                      } hover:text-emerald-700 font-medium tracking-wide transition-all duration-300 relative`}
                    >
                      {label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 bg-emerald-600/20 hover:bg-emerald-600/30 rounded-xl border border-emerald-500/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group"
              >
                <div className="flex flex-col space-y-1.5">
                  <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
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
          <nav className="bg-white/95 backdrop-blur-xl border-t border-emerald-500/30 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-4">
                {navbarData.navigation.mobile.map(({ href, label }) => {
                  const underConstruction = isUnderConstruction();
                  
                  return (
                    <div key={href} className="group">
                      {underConstruction ? (
                        <span 
                          className={`block w-full text-left py-3 px-4 ${
                            isScrolled ? 'text-slate-700' : 'text-slate-600'
                          } font-medium tracking-wide cursor-not-allowed opacity-70 bg-slate-100 rounded-lg`}
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
                            isScrolled ? 'text-slate-900' : 'text-slate-800'
                          } hover:text-emerald-700 font-medium tracking-wide bg-slate-100 hover:bg-emerald-100 rounded-lg transition-all duration-300 border border-transparent hover:border-emerald-600/50`}
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

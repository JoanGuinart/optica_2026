import { a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, c as createAstro, r as renderComponent, n as renderSlot, o as renderHead, u as unescapeHTML, p as Fragment } from './astro/server_Bigw0NEF.mjs';
import 'piccolore';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect, useCallback } from 'react';
import 'clsx';
/* empty css                         */

const logo = {"text":"Òptica","highlight":"Guinart","icon":{"viewBox":"0 0 24 24","paths":["M15 12a3 3 0 11-6 0 3 3 0 016 0z","M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"]}};
const navigation = {"desktop":[{"href":"/products","label":"Productos"},{"href":"/services","label":"Servicios"},{"href":"/audiologia-barcelona","label":"Audiología"},{"href":"/contact","label":"Contacto"},{"href":"/faq","label":"Preguntas frecuentes"}],"mobile":[{"href":"/products","label":"Productos"},{"href":"/services","label":"Servicios"},{"href":"/audiologia-barcelona","label":"Audiología"},{"href":"/contact","label":"Contacto"},{"href":"/faq","label":"Preguntas frecuentes"}]};
const navbarData = {
  logo,
  navigation,
};

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
    const handlePageShow = (event) => {
      if (event.persisted) ;
    };
    const handlePageHide = () => {
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
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  const toggleMenu = useCallback(() => setIsMenuOpen((o) => !o), []);
  return /* @__PURE__ */ jsx("header", { className: `fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 backdrop-blur-lg border-b border-emerald-500/30 shadow-2xl" : "bg-white/60 backdrop-blur-sm"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-20", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center space-x-2 group", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white", fill: "none", stroke: "currentColor", viewBox: navbarData.logo.icon.viewBox, children: navbarData.logo.icon.paths.map((path, index) => /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: path }, index)) }) }),
        /* @__PURE__ */ jsxs("span", { className: `text-xl font-black ${isScrolled ? "text-slate-900" : "text-slate-800"} tracking-wide group-hover:text-emerald-700 transition-colors duration-300`, children: [
          navbarData.logo.text,
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-emerald-700", children: navbarData.logo.highlight })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex lg:items-center lg:space-x-8", children: navbarData.navigation.desktop.map(({ href, label }) => /* @__PURE__ */ jsx("div", { className: "relative group", children: /* @__PURE__ */ jsxs(
        "a",
        {
          href,
          className: `${isScrolled ? "text-slate-800" : "text-slate-700"} hover:text-emerald-700 font-medium tracking-wide transition-all duration-300 relative`,
          children: [
            label,
            /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300" })
          ]
        }
      ) }, href)) }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: toggleMenu,
          className: "relative w-10 h-10 bg-emerald-600/20 hover:bg-emerald-600/30 rounded-xl border border-emerald-500/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center group",
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: `block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: `block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}` }),
            /* @__PURE__ */ jsx("span", { className: `block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}` })
          ] })
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `lg:hidden absolute top-full left-0 w-full transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`, children: /* @__PURE__ */ jsx("nav", { className: "bg-white/95 backdrop-blur-xl border-t border-emerald-500/30 shadow-2xl", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 py-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: navbarData.navigation.mobile.map(({ href, label }) => /* @__PURE__ */ jsx("div", { className: "group", children: /* @__PURE__ */ jsx(
      "a",
      {
        href,
        onClick: () => setIsMenuOpen(false),
        className: `block w-full text-left py-3 px-4 ${isScrolled ? "text-slate-900" : "text-slate-800"} hover:text-emerald-700 font-medium tracking-wide bg-slate-100 hover:bg-emerald-100 rounded-lg transition-all duration-300 border border-transparent hover:border-emerald-600/50`,
        children: label
      }
    ) }, href)) }) }) }) })
  ] }) });
};

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  const whatsappNumber = "34682502960";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  return renderTemplate`<!-- Botón flotante WhatsApp (solo móvil) -->${maybeRenderHead()}<a${addAttribute(whatsappUrl, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 md:hidden" aria-label="Contactar por WhatsApp"> <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"></path> </svg> <!-- Indicador de pulso animado --> <span class="absolute top-0 right-0 -mt-1 -mr-1 flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span> </a>`;
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/components/WhatsAppButton.astro", void 0);

const seo = {"title":"Contacto | Òptica y Audiología Guinart Sant Andreu","description":"¿Tienes dudas? Contáctanos: teléfono, WhatsApp, email y dirección en Sant Andreu (Barcelona). Citas para revisiones, audiometrías y adaptación de audífonos.","ogImage":"/portada/portada_compressed_2.webp"};
const hero = {"title":{"main":"Ponte en","highlight":"Contacto"},"subtitle":"Estamos aquí para ayudarte con cualquier consulta sobre tu salud visual y auditiva. ¡Contáctanos!","badge":{"text":"Respuesta rápida"}};
const contactInfo = {"phone":{"display":"+34 933 118 706"},"email":{"address":"opticaguinartsantandreu@gmail.com"},"address":{"street":"Carrer Gran de Sant Andreu, 308","city":"08030 Barcelona, San Andrés de Palomar","country":"España","googleMaps":"https://maps.google.com/?q=41.43713194467858,2.1896759669114636"},"hours":{"weekdays":"Lunes a Viernes: 9:30 - 13:30, 17:00 - 20:30","saturday":"Sábado: 10:00 - 13:30","sunday":"Domingo: Cerrado"}};
const socialMedia = {"whatsapp":{"url":"https://wa.me/34682502960","text":"Contactar por WhatsApp"},"instagram":{"url":"https://instagram.com/optica_guinart","text":"@opticaguinart"},"facebook":{"url":"https://facebook.com/opticaguinart","text":"Òptica Guinart"},"google":{"url":"https://g.page/opticaguinart","text":"Reseñas en Google"}};
const form = {"title":"Envíanos un mensaje","subtitle":"Completa el formulario y te responderemos lo antes posible","fields":{"name":{"label":"Nombre completo","placeholder":"Tu nombre y apellidos"},"email":{"label":"Correo electrónico","placeholder":"tu@email.com"},"phone":{"label":"Teléfono","placeholder":"+34 xxx xxx xxx"},"subject":{"label":"Asunto","placeholder":"¿En qué podemos ayudarte?"},"message":{"label":"Mensaje","placeholder":"Cuéntanos tu consulta..."}},"button":{"text":"Enviar mensaje"}};
const features = [{"id":1,"title":"Respuesta Rápida","description":"Te respondemos en menos de 24 horas","icon":"clock","iconPath":"M12 6v6l4 2"},{"id":2,"title":"Atención Personalizada","description":"Cada consulta recibe atención individual","icon":"user","iconPath":"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"},{"id":3,"title":"Múltiples Canales","description":"Contáctanos por el medio que prefieras","icon":"chat","iconPath":"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"}];
const contactData = {
  seo,
  hero,
  contactInfo,
  socialMedia,
  form,
  features,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b;
const $$Astro = createAstro("https://opticaguinart.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const defaultTitle = "\xD3ptica y Audiolog\xEDa Guinart \xB7 Gran de Sant Andreu 308, Barcelona";
  const defaultDescription = "\xD3ptica y audiolog\xEDa en Gran de Sant Andreu, 308 (Barcelona). Revisiones visuales, gafas graduadas, lentillas y adaptaci\xF3n de aud\xEDfonos con m\xE1s de 25 a\xF1os de experiencia en Sant Andreu.";
  const defaultImage = "/portada/portada_compressed_2.webp";
  const {
    title = defaultTitle,
    description = defaultDescription,
    ogImage = defaultImage,
    noindex = false
  } = Astro2.props;
  const siteName = "\xD3ptica Guinart";
  const fullTitle = title && title !== defaultTitle ? `${title} | ${siteName}` : title;
  const ogImageUrl = Astro2.site && typeof ogImage === "string" && ogImage.startsWith("/") ? new URL(ogImage, Astro2.site).toString() : ogImage;
  const ogImageDims = ogImageUrl?.includes("portada_compressed_2.webp") ? { width: 1526, height: 994 } : null;
  const sameAs = [
    contactData?.socialMedia?.instagram?.url,
    contactData?.socialMedia?.facebook?.url,
    contactData?.socialMedia?.google?.url
  ].filter(Boolean);
  const canonical = Astro2.site ? new URL(Astro2.url.pathname.replace(/index\.html$/, ""), Astro2.site).toString().replace(/\/$/, Astro2.url.pathname.endsWith("/") ? "/" : "") : Astro2.url;
  const robotsContent = noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
  const googleMapsUrl = contactData?.contactInfo?.address?.googleMaps;
  const siteRoot = Astro2.site ? new URL("/", Astro2.site).toString() : typeof canonical === "string" ? canonical : String(canonical);
  const path = Astro2.url.pathname.replace(/\/$/, "");
  const segments = path === "" || path === "/" ? [] : path.split("/").filter(Boolean);
  const breadcrumbs = [
    { name: "Inicio", url: siteRoot },
    ...segments.map((seg, i) => {
      const name = decodeURIComponent(seg).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
      const url = new URL(
        "/" + segments.slice(0, i + 1).join("/") + "/",
        siteRoot
      ).toString();
      return { name, url };
    })
  ];
  return renderTemplate(_b || (_b = __template(['<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', `><!-- Aunque 'keywords' ya no es determinante, mantenemos una lista sem\xE1ntica para buscadores secundarios --><meta name="keywords" content="optica, \xF3ptica, audiologia, audiolog\xEDa, guinart, \xF3ptica barcelona, \xF3ptica sant andreu, gafas graduadas, lentillas, audifonos, aud\xEDfonos, revisi\xF3n visual, examen vista, adaptaci\xF3n aud\xEDfonos"><meta name="author" content="\xD3ptica Guinart"><meta name="robots"`, '><meta name="language" content="es"><meta name="distribution" content="global"><meta name="geo.region" content="ES-B"><meta name="geo.placename" content="Barcelona"><meta name="geo.position" content="41.4372;2.1896"><meta name="ICBM" content="41.4372, 2.1896"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', ">", '<meta property="og:site_name" content="\xD3ptica Guinart"><meta property="og:locale" content="es_ES"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', "><!-- Twitter site/creator (si se dispone) -->", '<!-- Canonical URL --><link rel="canonical"', '><!-- Favicon y otros --><!-- A\xF1adimos un par\xE1metro de versi\xF3n para forzar actualizaci\xF3n en cach\xE9s (Google favicon cache) --><!-- Favicon principal (SVG) --><link rel="icon" type="image/svg+xml" href="/favicon.ico"><!-- Apple / Safari pinned tab --><link rel="mask-icon" href="/favicon.ico" color="#065f46"><!-- Manifest PWA --><link rel="manifest" href="/manifest.webmanifest?v=4"><meta name="theme-color" content="#065f46"><meta name="generator"', '><meta name="theme-color" content="#065f46"><meta name="format-detection" content="telephone=no,address=no,email=no"><link rel="alternate" hreflang="es-ES"', '><!-- Preload critical resources --><link rel="preload" href="/portada/portada_compressed_2.webp" as="image" fetchpriority="high"><!-- Preload critical JavaScript modules --><!-- Los nombres de archivos se generan din\xE1micamente en desarrollo --><!-- DNS prefetch y preconnect para recursos externos --><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Web App Manifest & Icons --><link rel="manifest" href="/manifest.webmanifest"><link rel="apple-touch-icon" href="/icons/apple-touch-icon.png"><link rel="icon" sizes="192x192" href="/icons/icon-192.png"><link rel="icon" sizes="512x512" href="/icons/icon-512.png"><!-- CSS cr\xEDtico optimizado - Astro maneja el resto autom\xE1ticamente --><!-- Solo CSS cr\xEDtico m\xEDnimo inline --><!-- Structured Data (JSON-LD) din\xE1mico usando contactData --><script type="application/ld+json">', '<\/script><!-- Structured Data (WebSite + SearchAction) --><script type="application/ld+json">', "<\/script><!-- BreadcrumbList Structured Data -->", "", '</head> <body class="bg-white text-slate-900 transition-colors duration-300" data-astro-cid-sckkx6r4> <!-- Navbar cr\xEDtico carga inmediatamente para LCP --> ', " ", " <main data-astro-cid-sckkx6r4> ", " </main> <!-- Bot\xF3n flotante WhatsApp (solo m\xF3vil) --> ", " </body></html>"])), fullTitle, addAttribute(description, "content"), addAttribute(robotsContent, "content"), addAttribute(canonical, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), ogImageDims && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-sckkx6r4": true }, { "default": ($$result2) => renderTemplate`<meta property="og:image:width"${addAttribute(String(ogImageDims.width), "content")}><meta property="og:image:height"${addAttribute(String(ogImageDims.height), "content")}><meta name="twitter:image:width"${addAttribute(String(ogImageDims.width), "content")}><meta name="twitter:image:height"${addAttribute(String(ogImageDims.height), "content")}>` })}`, addAttribute(canonical, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImageUrl, "content"), renderTemplate`<meta name="twitter:creator"${addAttribute(contactData.socialMedia.instagram.text, "content")}>`, addAttribute(canonical, "href"), addAttribute(Astro2.generator, "content"), addAttribute(canonical, "href"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Optician",
    name: "\xD3ptica y Audiolog\xEDa Guinart",
    description,
    image: ogImageUrl,
    url: canonical,
    "@id": canonical,
    telephone: contactData.contactInfo.phone.display.replace(/\s+/g, "").replace(/^\+34/, "+34 "),
    email: contactData.contactInfo.email.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactData.contactInfo.address.street,
      addressLocality: "Barcelona",
      addressRegion: "Catalu\xF1a",
      postalCode: "08030",
      addressCountry: "ES"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.4372,
      longitude: 2.1896
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "13:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "17:00",
        closes: "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "13:30"
      }
    ],
    sameAs,
    priceRange: "\u20AC\u20AC",
    areaServed: { "@type": "City", name: "Barcelona" },
    hasMap: googleMapsUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+" + (contactData.socialMedia.whatsapp.url.match(
          /wa\.me\/(\d+)/
        )?.[1] || contactData.contactInfo.phone.display.replace(/\D/g, "")),
        contactType: "customer service",
        areaServed: "ES",
        availableLanguage: ["es"]
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteRoot.replace(/\/$/, "") + "#website",
    url: siteRoot,
    name: "\xD3ptica Guinart",
    potentialAction: {
      "@type": "SearchAction",
      target: siteRoot.replace(/\/$/, "") + "/products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  })), breadcrumbs.length > 1 && renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((b, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: b.name,
      item: b.url
    }))
  }))), renderHead(), renderComponent($$result, "NavbarClient", NavbarClient, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/NavbarClient", "client:component-export": "default", "data-astro-cid-sckkx6r4": true }), breadcrumbs.length > 1 && renderTemplate`<nav aria-label="Breadcrumb" class="px-4 py-2 text-sm text-slate-600" data-astro-cid-sckkx6r4> <ol class="flex flex-wrap gap-1" data-astro-cid-sckkx6r4> ${breadcrumbs.map((b, i) => renderTemplate`<li class="flex items-center" typeof="ListItem" property="itemListElement" data-astro-cid-sckkx6r4> <a${addAttribute(b.url, "href")} class="hover:text-emerald-700 font-medium" property="item" typeof="WebPage" data-astro-cid-sckkx6r4> <span property="name" data-astro-cid-sckkx6r4>${b.name}</span> </a> <meta property="position"${addAttribute(String(i + 1), "content")}> ${i < breadcrumbs.length - 1 && renderTemplate`<span class="mx-1" data-astro-cid-sckkx6r4>/</span>`} </li>`)} </ol> </nav>`, renderSlot($$result, $$slots["default"]), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, { "data-astro-cid-sckkx6r4": true }));
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/layouts/Layout.astro", void 0);

export { $$Layout as $, contactData as c };

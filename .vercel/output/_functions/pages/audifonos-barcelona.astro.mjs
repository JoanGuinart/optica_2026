import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bigw0NEF.mjs';
import 'piccolore';
import { $ as $$Layout, c as contactData } from '../chunks/Layout_Cza0hYEJ.mjs';
export { renderers } from '../renderers.mjs';

const seo = {"title":"Audífonos Barcelona | Adaptación y Audiometría | Òptica Guinart","description":"Audífonos digitales en Barcelona: adaptación personalizada, modelos invisibles, recargables y Bluetooth. Audiometría gratuita y seguimiento profesional en Sant Andreu.","ogImage":"/portada/portada_compressed_2.webp"};
const hero = {"badge":"Audífonos digitales en Barcelona","title":{"main":"Audífonos","highlight":"Barcelona"},"subtitle":"Modelos invisibles, recargables y con conectividad Bluetooth. Audiometría gratuita y adaptación profesional personalizada."};
const tipos = [{"nombre":"Invisibles (CIC / IIC)","desc":"Diseñados para quedar totalmente dentro del canal auditivo: máxima discreción y sonido natural.","iconPath":"M12 8a4 4 0 110 8 4 4 0 010-8 M12 2v3 M12 19v3","beneficios":["Total discreción","Reducción de ruido viento","Sujeción estable"]},{"nombre":"Recargables","desc":"Batería integrada de larga duración. Olvídate de cambiar pilas y disfruta de autonomía todo el día.","iconPath":"M12 2a10 10 0 100 20 10 10 0 000-20m-1 5h2v6l4 2","beneficios":["Sin pilas","Carga rápida","Uso intensivo"]},{"nombre":"Bluetooth / Conectividad","desc":"Conecta tu audífono al móvil, TV o llamadas. Control y ajuste desde la app.","iconPath":"M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6 8a6 6 0 1112 0","beneficios":["Streaming directo","Control por app","Compatibilidad amplia"]},{"nombre":"Ruido / Profesionales","desc":"Protección y amplificación equilibrada para entornos laborales ruidosos o músicos.","iconPath":"M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3","beneficios":["Diseño robusto","Filtros específicos","Ajuste de frecuencias"]}];
const proceso = [{"paso":1,"titulo":"Audiometría completa","texto":"Evaluamos tu audición (tono puro, discriminación verbal, timpanometría) para determinar el grado y tipo de pérdida."},{"paso":2,"titulo":"Selección del modelo","texto":"Recomendamos el tipo de audífono ideal según tu pérdida, estilo de vida, destreza y presupuesto."},{"paso":3,"titulo":"Adaptación inicial","texto":"Ajuste digital (programación) y verificación in situ. Explicamos uso y mantenimiento."},{"paso":4,"titulo":"Revisión y optimización","texto":"Seguimiento en las primeras semanas: ajustes finos de ganancia, compresión y ruido."},{"paso":5,"titulo":"Mantenimiento continuo","texto":"Limpieza profesional, cambio de filtros y reevaluación auditiva periódica."}];
const benefits = ["Audiometría gratuita","Modelos discretos","Conectividad avanzada","Seguimiento profesional"];
const sections = {"tipos":{"title":"Tipos de Audífonos","subtitle":"Seleccionamos el modelo que mejor se adapta a tu pérdida auditiva y estilo de vida."},"proceso":{"title":"Proceso de Adaptación","subtitle":"Seguimos un protocolo profesional para garantizar comodidad y rendimiento óptimo."},"benefits":{"title":"Beneficios","subtitle":"Más allá de la amplificación: confort, claridad y conectividad."},"faqs":{"title":"Preguntas Frecuentes","subtitle":"Resolvemos dudas habituales sobre audífonos"}};
const faqs = [{"q":"¿La prueba auditiva es realmente gratuita?","a":"Sí. La audiometría básica y valoración inicial no tiene coste ni compromiso."},{"q":"¿Cuánto dura la adaptación inicial?","a":"Entre 30 y 60 minutos dependiendo del tipo de audífono y ajustes necesarios."},{"q":"¿Cada cuánto debo revisar los audífonos?","a":"Recomendamos revisión cada 6 meses y limpieza preventiva profesional."},{"q":"¿Los recargables duran todo el día?","a":"Sí, los modelos actuales ofrecen hasta 16–24 horas según uso de streaming."},{"q":"¿Puedo financiar la compra?","a":"Sí, disponemos de opciones de financiación flexible. Consúltanos en tienda."},{"q":"¿Qué pasa si no me adapto?","a":"Realizamos ajustes sucesivos. Si el modelo no es adecuado, buscamos alternativa dentro del periodo inicial."}];
const cta = {"title":"Recupera tu calidad auditiva","subtitle":"Pide tu audiometría gratuita y descubre el audífono ideal para ti","primary":"Pedir cita gratuita","secondary":"Llamar ahora"};
const pageData = {
  seo,
  hero,
  tipos,
  proceso,
  benefits,
  sections,
  faqs,
  cta,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://opticaguinart.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = pageData.seo.title;
  const pageDescription = pageData.seo.description;
  const pageOgImage = pageData.seo.ogImage;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site).toString() : Astro2.url;
  const tipos = pageData.tipos;
  const proceso = pageData.proceso;
  const faqs = pageData.faqs;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "ogImage": pageOgImage }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="min-h-screen"> <!-- Hero --> <section class="relative py-20 sm:py-28 bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden"> <div class="absolute inset-0 opacity-5"> <div class="absolute top-24 left-8 w-80 h-80 bg-emerald-500 rounded-full blur-3xl"></div> <div class="absolute bottom-24 right-10 w-[28rem] h-[28rem] bg-blue-600 rounded-full blur-3xl"></div> </div> <div class="relative max-w-7xl mx-auto px-6 text-center"> <div class="inline-flex items-center px-4 py-2 bg-emerald-600/10 text-emerald-700 rounded-full text-sm font-semibold mb-8 border border-emerald-600/20"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path></svg> ', ' </div> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight"> ', ' <span class="text-emerald-600">', '</span> </h1> <p class="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed"> ', ' </p> <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12"> <a', ' target="_blank" class="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all hover:shadow-xl hover:scale-105"> <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"></path></svg> ', " </a> <a", ' class="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg border-2 border-slate-200 transition-all hover:shadow-xl"> <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> ', ' </a> </div> </div> </section> <!-- Tipos de aud\xEDfonos --> <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4">', '</h2> <p class="text-lg text-slate-600 max-w-2xl mx-auto">', '</p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"> ', ' </div> </div> </section> <!-- Proceso de adaptaci\xF3n --> <section class="py-16 bg-gradient-to-br from-blue-50 to-emerald-50"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4">', '</h2> <p class="text-lg text-slate-600 max-w-2xl mx-auto">', '</p> </div> <div class="grid md:grid-cols-3 gap-8"> ', ' </div> </div> </section> <!-- Beneficios clave --> <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4">', '</h2> <p class="text-lg text-slate-600 max-w-2xl mx-auto">', '</p> </div> <div class="grid md:grid-cols-4 gap-6"> ', ' </div> </div> </section> <!-- FAQs --> <section class="py-16 bg-slate-50"> <div class="max-w-4xl mx-auto px-6"> <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-4">', '</h2> <p class="text-lg text-slate-600">', '</p> </div> <div class="space-y-4"> ', ' </div> </div> </section> <!-- CTA Final --> <section class="py-16 bg-gradient-to-r from-emerald-600 to-blue-600"> <div class="max-w-4xl mx-auto px-6 text-center text-white"> <h2 class="text-3xl sm:text-4xl font-black mb-6">', '</h2> <p class="text-xl mb-8 opacity-90">', '</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a', ' target="_blank" class="inline-flex items-center justify-center bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-slate-50 transition-all"> <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"></path></svg> ', " </a> <a", ' class="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 transition-all"> <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> ', ' </a> </div> </div> </section> <!-- JSON-LD: Breadcrumbs --> <script type="application/ld+json">', '<\/script> <!-- JSON-LD: Service Aud\xEDfonos --> <script type="application/ld+json">', "<\/script> </main> "])), maybeRenderHead(), pageData.hero.badge, pageData.hero.title.main, pageData.hero.title.highlight, pageData.hero.subtitle, addAttribute(contactData.socialMedia.whatsapp.url, "href"), pageData.cta.primary, addAttribute(`tel:${contactData.contactInfo.phone.display.replace(/\s+/g, "")}`, "href"), pageData.cta.secondary, pageData.sections.tipos.title, pageData.sections.tipos.subtitle, tipos.map((t) => renderTemplate`<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col"> <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-4 shadow-lg"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(t.iconPath, "d")}></path></svg> </div> <h3 class="text-lg font-bold text-slate-900 mb-2">${t.nombre}</h3> <p class="text-slate-600 text-sm mb-4 leading-relaxed">${t.desc}</p> <ul class="text-sm text-emerald-700 space-y-1 mb-4"> ${t.beneficios.map((b) => renderTemplate`<li class="flex items-center"><span class="mr-2">✓</span>${b}</li>`)} </ul> <a${addAttribute(contactData.socialMedia.whatsapp.url, "href")} target="_blank" class="mt-auto inline-block text-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Más información</a> </div>`), pageData.sections.proceso.title, pageData.sections.proceso.subtitle, proceso.map((p) => renderTemplate`<div class="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-all"> <div class="w-12 h-12 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold mb-4">${p.paso}</div> <h3 class="text-lg font-bold text-slate-900 mb-2">${p.titulo}</h3> <p class="text-slate-600 text-sm leading-relaxed">${p.texto}</p> </div>`), pageData.sections.benefits.title, pageData.sections.benefits.subtitle, pageData.benefits.map((b) => renderTemplate`<div class="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 text-center shadow-sm"> <div class="text-3xl mb-3">🔊</div> <p class="font-semibold text-slate-800 text-sm">${b}</p> </div>`), pageData.sections.faqs.title, pageData.sections.faqs.subtitle, faqs.map((f) => renderTemplate`<div class="bg-white rounded-xl shadow-md border border-slate-200"> <details class="group"> <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 rounded-xl transition-colors"> <h3 class="text-lg font-semibold text-slate-900 pr-4">${f.q}</h3> <svg class="w-5 h-5 text-emerald-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </summary> <div class="px-6 pb-6"> <p class="text-slate-600 leading-relaxed text-sm">${f.a}</p> </div> </details> </div>`), pageData.cta.title, pageData.cta.subtitle, addAttribute(contactData.socialMedia.whatsapp.url, "href"), pageData.cta.primary, addAttribute(`tel:${contactData.contactInfo.phone.display.replace(/\s+/g, "")}`, "href"), pageData.cta.secondary, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: Astro2.site ? new URL("/", Astro2.site).toString() : "/" },
      { "@type": "ListItem", position: 2, name: "Aud\xEDfonos Barcelona", item: canonical }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": canonical + "#audifonos",
    name: "Aud\xEDfonos Barcelona - \xD3ptica Guinart",
    description: pageDescription,
    url: canonical,
    telephone: contactData.contactInfo.phone.display.replace(/\s+/g, "").replace(/^\+34/, "+34 "),
    address: {
      "@type": "PostalAddress",
      streetAddress: contactData.contactInfo.address.street,
      addressLocality: "Barcelona",
      postalCode: "08030",
      addressCountry: "ES"
    },
    areaServed: [{ "@type": "City", name: "Barcelona" }, { "@type": "City", name: "Sant Andreu" }],
    hasMap: contactData.contactInfo.address.googleMaps,
    medicalSpecialty: "Audiolog\xEDa",
    serviceType: "Adaptaci\xF3n de aud\xEDfonos digitales",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:30", closes: "20:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "13:30" }
    ],
    offers: {
      "@type": "Offer",
      price: "600-2500",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock"
    }
  }))) })}`;
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/audifonos-barcelona/index.astro", void 0);

const $$file = "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/audifonos-barcelona/index.astro";
const $$url = "/audifonos-barcelona";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

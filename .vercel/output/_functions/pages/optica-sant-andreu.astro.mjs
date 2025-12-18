import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bigw0NEF.mjs';
import 'piccolore';
import { c as contactData, $ as $$Layout } from '../chunks/Layout_Cza0hYEJ.mjs';
export { renderers } from '../renderers.mjs';

const seo = {"title":"Óptica en Sant Andreu (Barcelona) | Òptica Guinart","description":"Óptica y audiología en Sant Andreu (Barcelona). Revisiones visuales, gafas, lentillas y adaptación de audífonos. Más de 25 años de experiencia en el barrio.","ogImage":"/portada/portada_compressed_2.webp"};
const hero = {"badge":"Tu óptica de confianza en Sant Andreu","title":{"main":"Óptica en","highlight":"Sant Andreu","suffix":" (Barcelona)"},"subtitle":"Revisiones visuales, gafas, lentillas y audiología. Atención cercana y profesional con más de 25 años de experiencia en el barrio."};
const sections = {"servicesTitle":"Servicios en Sant Andreu","napTitle":"Cómo encontrarnos","faqTitle":"Preguntas frecuentes"};
const services = [{"title":"Revisión y salud visual","description":"Examen visual completo, control de miopía, astigmatismo, presbicia y asesoramiento personalizado.","iconPath":"M12 8v4l3 2"},{"title":"Gafas graduadas y de sol","description":"Monturas actuales y lentes de calidad para uso diario, trabajo y deporte.","iconPath":"M2 12s3-4 10-4 10 4 10 4-3 4-10 4S2 12 2 12z"},{"title":"Lentillas y adaptación","description":"Adaptación segura y seguimiento, con formación de uso y mantenimiento.","iconPath":"M12 4a8 8 0 100 16 8 8 0 000-16z"},{"title":"Audiología y audífonos","description":"Audiometría, adaptación de audífonos discretos y mantenimiento profesional.","iconPath":"M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14"}];
const faqs = [{"q":"¿Dónde estamos?","a":"Carrer Gran de Sant Andreu, 308, Barcelona"},{"q":"¿Horario?","a":"Lunes a viernes: 9:30-13:30 y 17:00-20:30. Sábado: 10:00-13:30."},{"q":"¿Cita previa?","a":"Recomendable para revisiones visuales y audiometrías. Para compras rápidas, puedes venir sin cita."}];
const pageData = {
  seo,
  hero,
  sections,
  services,
  faqs,
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
  const services = pageData.services;
  const faqs = pageData.faqs.map((f) => {
    if (f.q.startsWith("\xBFHorario")) {
      return { ...f, a: `${contactData.contactInfo.hours.weekdays}. ${contactData.contactInfo.hours.saturday}.` };
    }
    if (f.q.startsWith("\xBFD\xF3nde")) {
      return { ...f, a: `${contactData.contactInfo.address.street}, Barcelona` };
    }
    return f;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "ogImage": pageOgImage }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="min-h-screen"> <!-- Hero local --> <section class="relative py-20 sm:py-28 bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden"> <div class="relative max-w-7xl mx-auto px-6 text-center"> <div class="inline-flex items-center px-4 py-2 bg-emerald-600/10 text-emerald-700 rounded-full text-sm font-semibold mb-8 border border-emerald-600/20"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path></svg> ', ' </div> <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight"> ', ' <span class="text-emerald-600">', "</span>", ' </h1> <p class="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"> ', ' </p> <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> <a', ' target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg">', "</a> <a", ' target="_blank" class="border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg">C\xF3mo llegar</a> </div> </div> </section> <!-- Servicios locales destacados --> <section class="py-16 bg-white"> <div class="max-w-7xl mx-auto px-6"> <h2 class="text-3xl sm:text-4xl font-black text-slate-900 mb-10 text-center">', '</h2> <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"> ', ' </div> </div> </section> <!-- NAP + Mapa --> <section class="py-16 bg-slate-50 border-t border-emerald-500/20"> <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"> <div> <h2 class="text-2xl font-black text-slate-900 mb-4">', '</h2> <div class="text-slate-700 space-y-2"> <p><strong>Direcci\xF3n:</strong> ', ", Barcelona</p> <p><strong>Tel\xE9fono:</strong> ", "</p> <p><strong>Email:</strong> ", "</p> <p><strong>Horario:</strong> ", " \xB7 ", '</p> </div> <div class="mt-6 flex gap-3"> <a', ' target="_blank" class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold">', "</a> <a", ' target="_blank" class="border-2 border-emerald-600 hover:bg-emerald-50 text-emerald-700 px-6 py-3 rounded-lg font-semibold">Abrir en Google Maps</a> </div> </div> <div class="w-full h-80 rounded-2xl overflow-hidden border border-emerald-500/20 shadow-lg bg-white flex items-center justify-center p-4"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4567890123!2d2.1896759669114636!3d41.43713194467858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcae7e4f1234%3A0x567890abcdef1234!2sCarrer%20Gran%20de%20Sant%20Andreu%2C%20308%2C%2008030%20Barcelona!5e0!3m2!1ses!2ses!4v1698067890123" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicaci\xF3n de \xD2ptica Guinart - Carrer Gran de Sant Andreu, 308, Barcelona" class="w-full h-full">\n      </iframe> </div> </div> </section> <!-- FAQs locales --> <section class="py-16 bg-white"> <div class="max-w-4xl mx-auto px-6"> <h2 class="text-2xl font-black text-slate-900 mb-6">', '</h2> <div class="space-y-4"> ', ' </div> </div> </section> <!-- JSON-LD: Breadcrumbs + Service --> <script type="application/ld+json">', '<\/script> <script type="application/ld+json">', "<\/script> </main> "])), maybeRenderHead(), pageData.hero.badge, pageData.hero.title.main, pageData.hero.title.highlight, pageData.hero.title.suffix, pageData.hero.subtitle, addAttribute(contactData.socialMedia.whatsapp.url, "href"), contactData.socialMedia.whatsapp.text, addAttribute(contactData.contactInfo.address.googleMaps, "href"), pageData.sections.servicesTitle, services.map((s) => renderTemplate`<div class="group bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-emerald-500/20 hover:shadow-2xl transition-all duration-300"> <div class="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg mb-4"> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(s.iconPath, "d")}></path></svg> </div> <h3 class="text-xl font-bold text-slate-900 mb-2">${s.title}</h3> <p class="text-slate-600">${s.description}</p> </div>`), pageData.sections.napTitle, contactData.contactInfo.address.street, contactData.contactInfo.phone.display, contactData.contactInfo.email.address, contactData.contactInfo.hours.weekdays, contactData.contactInfo.hours.saturday, addAttribute(contactData.socialMedia.whatsapp.url, "href"), contactData.socialMedia.whatsapp.text, addAttribute(contactData.contactInfo.address.googleMaps, "href"), pageData.sections.faqTitle, faqs.map((f) => renderTemplate`<details class="group bg-white rounded-xl shadow border border-slate-200"> <summary class="flex justify-between items-center p-5 cursor-pointer hover:bg-slate-50"> <span class="font-semibold text-slate-900">${f.q}</span> <svg class="w-5 h-5 text-emerald-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> </summary> <div class="px-5 pb-5 text-slate-700">${f.a}</div> </details>`), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: Astro2.site ? new URL("/", Astro2.site).toString() : "/" },
      { "@type": "ListItem", position: 2, name: "\xD3ptica en Sant Andreu", item: canonical }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "\xD3ptica en Sant Andreu (Barcelona)",
    provider: {
      "@type": "Optician",
      name: "\xD2ptica y Audiolog\xEDa Guinart",
      telephone: contactData.contactInfo.phone.display.replace(/\s+/g, "").replace(/^\+34/, "+34 "),
      address: {
        "@type": "PostalAddress",
        streetAddress: contactData.contactInfo.address.street,
        addressLocality: "Barcelona",
        postalCode: "08030",
        addressCountry: "ES"
      },
      areaServed: { "@type": "City", name: "Barcelona" }
    },
    areaServed: "Sant Andreu, Barcelona",
    url: canonical
  }))) })}`;
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/optica-sant-andreu/index.astro", void 0);

const $$file = "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/optica-sant-andreu/index.astro";
const $$url = "/optica-sant-andreu";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

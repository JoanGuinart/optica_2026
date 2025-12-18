import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bigw0NEF.mjs';
import 'piccolore';
import { $ as $$Layout, c as contactData } from '../chunks/Layout_Cza0hYEJ.mjs';
import { u as ui } from '../chunks/ui_CoScT6KI.mjs';
export { renderers } from '../renderers.mjs';

const seo = {"title":"Servicios - Òptica Guinart","description":"Servicios de óptica y audiología en Sant Andreu (Barcelona): optometría, audiología, adaptación de audífonos, lentillas y taller de reparación.","ogImage":"/portada/portada_compressed_2.webp"};
const hero = {"title":{"main":"Nuestros","highlight":"Servicios"},"subtitle":"Cuidamos tu salud visual y auditiva con la tecnología más avanzada y el mejor servicio profesional","badge":{"text":"Profesionales cualificados"}};
const services = [{"id":1,"title":"Optometría","description":"Revisión visual gratuita con aparatología Zeiss de última generación para cuidar tu salud ocular.","icon":"eye","iconPath":"M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z","color":"emerald","price":"gratuito"},{"id":2,"title":"Contactología","description":"Adaptación y control de lentes de contacto para todo tipo de necesidades visuales.","icon":"contact","iconPath":"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z","color":"emerald"},{"id":3,"title":"Presión Ocular","description":"Medición precisa de la presión intraocular para la detección temprana de glaucoma y otras patologías.","icon":"pressure","iconPath":"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707","color":"emerald","price":"1€"},{"id":4,"title":"Audiología","description":"Revisión gratuita de la audición: audiometría, timpanometría, valoración del reflejo estapedial y otoscopia con videotoscopio Zeiss. Realización de todo tipo de audífonos y moldes a medida para protección contra el sonido o el agua.","icon":"ear","iconPath":"M6 8a6 6 0 1112 0c0 2.761-1.239 3.333-2 5a3 3 0 11-6 0 M10 10a2 2 0 114 0","color":"emerald","price":"gratuito"},{"id":5,"title":"Taller propio y reparaciones","description":"Montaje profesional, ajustes y reparaciones de gafas en nuestro propio taller especializado.","icon":"wrench","iconPath":"M12 8a4 4 0 110 8 4 4 0 010-8 M12 2v3 M12 19v3 M2 12h3 M19 12h3 M4.22 4.22l2.12 2.12 M17.66 17.66l2.12 2.12 M19.78 4.22l-2.12 2.12 M6.34 17.66l-2.12 2.12","color":"emerald"}];
const benefits = {"title":"¿Por qué elegirnos?","items":[{"id":1,"title":"Equipamiento Avanzado","description":"Utilizamos la tecnología más moderna para garantizar diagnósticos precisos","icon":"technology","iconPath":"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"},{"id":2,"title":"Profesionales cualificados","description":"Nuestro equipo cuenta con más de 25 años de experiencia en el sector","icon":"award","iconPath":"M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"},{"id":3,"title":"Garantía Total","description":"Todos nuestros servicios incluyen garantía de calidad y satisfación","icon":"shield","iconPath":"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}]};
const cta = {"title":"¿Necesitas algún servicio?","subtitle":"Reserva tu cita y cuida tu salud visual y auditiva con nosotros","buttons":[{"id":1,"text":"Reservar cita","type":"primary","action":"booking"},{"id":2,"text":"Llamar ahora","type":"secondary","action":"call"}]};
const notes = {"free":"*Gratuito con la compra de gafas graduadas","included":"**Incluido en el precio de las gafas"};
const servicesData = {
  seo,
  hero,
  services,
  benefits,
  cta,
  notes,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://opticaguinart.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = servicesData.seo?.title;
  const pageDescription = servicesData.seo?.description;
  const pageOgImage = servicesData.seo?.ogImage;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site).toString() : new URL(Astro2.url.pathname, "http://localhost").toString();
  const services = servicesData.services;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "ogImage": pageOgImage }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 min-h-screen pt-20 sm:pt-24 lg:pt-28">  <div class="py-16 px-4 sm:px-8 lg:px-12"> <div class="max-w-7xl mx-auto"> <div class="text-center mb-16"> <div class="inline-flex items-center bg-emerald-500/20 text-emerald-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> ', ' </div> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6 tracking-tight drop-shadow-lg"> ', ' <span class="text-emerald-600">', '</span> </h1> <p class="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"> ', ' </p> </div>  <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">\nNuestros Servicios\n</h2> <p class="text-center text-slate-600 mb-4">\xBFBuscas una \xF3ptica de confianza en Sant Andreu (Barcelona)? Conoce nuestra <a href="/optica-sant-andreu" class="text-emerald-700 font-semibold hover:underline">\xF3ptica en Sant Andreu</a> con atenci\xF3n cercana y servicios completos de visi\xF3n y audiolog\xEDa.</p> <p class="text-center text-slate-600 mb-4">Especialistas en <a href="/audiologia-barcelona" class="text-blue-700 font-semibold hover:underline">audiolog\xEDa en Barcelona</a>: audiometr\xEDas gratuitas, adaptaci\xF3n de aud\xEDfonos digitales y revisiones auditivas profesionales.</p> <p class="text-center text-slate-600 mb-8">\xBFInteresado en modelos, tipos y precios? Visita <a href="/audifonos-barcelona" class="text-emerald-700 font-semibold hover:underline">aud\xEDfonos en Barcelona</a>.</p>  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16"> ', ' </div>  <div class="bg-white/70 backdrop-blur-md rounded-xl p-6 mb-16 border border-emerald-500/20"> <div class="text-sm text-slate-600 space-y-1"> <p>', "</p> <p>", '</p> </div> </div>  <div class="mb-16"> <div class="text-center mb-12"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 mb-4 tracking-tight drop-shadow-lg"> ', ' </h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ', ' </div> </div>  <div class="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-emerald-500/40"> <div class="text-center"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight drop-shadow-lg"> ', ' </h2> <p class="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed"> ', ' </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ', ' </div> </div> </div> </div> </div> </section>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), servicesData.hero.badge.text, servicesData.hero.title.main, servicesData.hero.title.highlight, servicesData.hero.subtitle, services.map((service, index) => {
    const iconBg = "bg-emerald-600";
    const priceColor = "text-emerald-600";
    const checkColor = "text-emerald-600";
    const buttonStyle = "bg-emerald-600 hover:bg-emerald-700";
    return renderTemplate`<div class="group"> <div class="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-500/20 overflow-hidden hover:bg-white h-full flex flex-col">  <div class="flex items-start justify-between mb-6"> <div${addAttribute(`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center shadow-lg`, "class")}> <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(service.iconPath, "d")}></path> </svg> </div> ${(service.price || service.duration) && renderTemplate`<div class="text-right"> ${service.price && renderTemplate`<div${addAttribute(`text-2xl font-black ${priceColor} mb-1`, "class")}> ${service.price} </div>`} ${service.duration && renderTemplate`<div class="text-sm text-slate-500"> ${service.duration} </div>`} </div>`} </div>  <div class="flex-grow"> <h3 class="text-2xl font-bold text-slate-800 mb-3"> ${service.title} </h3> <p class="text-slate-600 mb-6 leading-relaxed"> ${service.description} </p>  ${service.features && service.features.length > 0 && renderTemplate`<div class="space-y-2 mb-6"> ${service.features.map((feature) => renderTemplate`<div class="flex items-center text-sm"> <svg${addAttribute(`w-4 h-4 ${checkColor} mr-3 flex-shrink-0`, "class")} fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span class="text-slate-600">${feature}</span> </div>`)} </div>`} </div>  <a${addAttribute(
      "https://wa.me/34682502960?text=" + encodeURIComponent(
        `solicito informaci\xF3n sobre el servicio: ${service.title}`
      ),
      "href"
    )} target="_blank" rel="noopener noreferrer"${addAttribute(`w-full mt-auto ${buttonStyle} text-white py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg text-center inline-block`, "class")}> ${ui.cta.solicitarServicio} </a> </div> </div>`;
  }), servicesData.notes.free, servicesData.notes.included, servicesData.benefits.title, servicesData.benefits.items.map((benefit) => renderTemplate`<div class="text-center group"> <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300"> <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(benefit.iconPath, "d")}></path> </svg> </div> <h3 class="text-xl font-bold text-slate-800 mb-3"> ${benefit.title} </h3> <p class="text-slate-600 leading-relaxed"> ${benefit.description} </p> </div>`), servicesData.cta.title, servicesData.cta.subtitle, servicesData.cta.buttons.map(
    (button) => button.type === "primary" ? renderTemplate`<a${addAttribute(
      "https://wa.me/34682502960?text=" + encodeURIComponent("reservar cita"),
      "href"
    )} target="_blank" rel="noopener noreferrer"${addAttribute(`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl bg-white text-emerald-700 hover:bg-gray-100 border border-gray-300`, "class")}> ${button.text} </a>` : renderTemplate`<a href="tel:933118706"${addAttribute(`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl bg-slate-900 border-2 border-white text-white hover:bg-slate-800`, "class")}> ${button.text} </a>`
  ), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: Astro2.site ? new URL("/", Astro2.site).toString() : "/" },
      { "@type": "ListItem", position: 2, name: "Servicios", item: canonical }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@graph": services.map((s) => {
      const match = typeof s.price === "string" ? s.price.replace(/\./g, "").match(/(\d+)/) : null;
      const numPrice = match ? match[1] : null;
      return {
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: {
          "@type": "LocalBusiness",
          name: "\xD2ptica Guinart",
          address: {
            "@type": "PostalAddress",
            streetAddress: contactData.contactInfo.address.street,
            addressLocality: contactData.contactInfo.address.city,
            addressCountry: contactData.contactInfo.address.country
          },
          telephone: contactData.contactInfo.phone.display
        },
        areaServed: { "@type": "AdministrativeArea", name: "Barcelona" },
        ...numPrice ? { offers: {
          "@type": "Offer",
          price: numPrice,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStoreOnly"
        } } : {}
      };
    })
  }))) })}`;
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/services/index.astro", void 0);

const $$file = "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/services/index.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

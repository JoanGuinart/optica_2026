import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_Bigw0NEF.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_Cza0hYEJ.mjs';
import { g as getPrincipalOfferProducts, a as getSpecialOffersProducts } from '../chunks/strapi_BAVlI8cj.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BIZZuAfC.mjs';
export { renderers } from '../renderers.mjs';

const hero = {"title":{"main":"Ray-Ban","highlight":"Stories"},"buttons":[{"text":"Descubrir más","type":"primary"},{"text":"Ver demo","type":"secondary"}]};
const seo = {"title":"Productos - Òptica Guinart","description":"Catálogo de productos: gafas de sol, graduadas, lentillas y gafas inteligentes en Óptica Guinart. Consulta precios y disponibilidad en Sant Andreu, Barcelona.","ogImage":"/portada/portada_compressed_2.webp"};
const featuredProducts = {"title":{"main":"Productos","highlight":"Destacados"},"subtitle":"Nuestra selección de las mejores gafas y lentes para ti","products":[{"id":1,"name":"Ray-Ban Meta","description":"Gafas inteligentes con tecnología Meta, captura fotos y videos con estilo icónico Ray-Ban","price":"149€","src":"/productos/rayban-meta.webp","buttonText":"Saber más"},{"id":2,"name":"Silhouette Escondido","description":"Ultraligeras sin montura austríacas, máxima comodidad y tecnología sin tornillos","price":"179€","src":"/productos/silhouette-escondido.webp","buttonText":"Saber más"},{"id":3,"name":"Maui Jim Paluna","description":"Tecnología PolarizedPlus2® hawaiana, colores vibrantes y protección superior","price":"299€","src":"/productos/maui-jim-paluna.webp","buttonText":"Saber más"},{"id":4,"name":"Yalea SYA053V","description":"Artesanía italiana en acetato de alta calidad, diseños únicos hechos a mano","price":"219€","src":"/productos/yalea-SYA053V.webp","buttonText":"Saber más"},{"id":5,"name":"Tous Daisy","description":"Diseño barcelonés con detalles de osito icónico y elegancia mediterránea","price":"199€","src":"/productos/tous-daisy.webp","buttonText":"Saber más"},{"id":6,"name":"Vogue V05582S","description":"Estilo y glamour con diseños femeninos únicos","price":"169€","src":"/productos/vogue-V05582S.webp","buttonText":"Saber más"},{"id":7,"name":"Ray-Ban Wayfarer","description":"Icónicas gafas con estilo clásico y protección superior","price":"189€","src":"/productos/rayban-wayfarer.webp","buttonText":"Saber más"},{"id":8,"name":"Zadig & Voltaire ZV23H5","description":"Diseño rebelde y sofisticado con acabados premium","price":"249€","src":"/productos/zadig-voltaire-ZV23H5.webp","buttonText":"Saber más"},{"id":9,"name":"Furla-VFU718-09MA","description":"Elegancia italiana con detalles artesanales exclusivos","price":"229€","src":"/productos/furla-VFU718-09MA.webp","buttonText":"Saber más"},{"id":10,"name":"Pertegaz-55178550","description":"Tradición española en moda y complementos de lujo","price":"159€","src":"/productos/pertegaz-55178550.webp","buttonText":"Saber más"},{"id":11,"name":"Polo Ralph Lauren ph2211","description":"Estilo clásico americano con sofisticación atemporal","price":"219€","src":"/productos/polo-ralph-lauren-ph2211.webp","buttonText":"Saber más"},{"id":12,"name":"Ralph by Ralph Lauren","description":"Deportividad y elegancia en diseños versátiles","price":"179€","src":"/productos/ralph-by-ralph-lauren.webp","buttonText":"Saber más"},{"id":13,"name":"Arnette Hot Shot AN4182-2149/81","description":"Gafas juveniles con actitud urbana y deportiva","price":"129€","src":"/productos/arnette-hot-shot-an4182-214981.webp","buttonText":"Saber más"},{"id":14,"name":"Lacoste L2912-301","description":"Espíritu deportivo francés con elegancia casual","price":"199€","src":"/productos/lacoste-L2912-301.webp","buttonText":"Saber más"},{"id":15,"name":"Police x Mercedes AMG Petronas SPLR50 R22B","description":"Diseños audaces con personalidad urbana distintiva","price":"149€","src":"/productos/police-x-mercedes-amg-petronas-splr50-r22b.webp","buttonText":"Saber más"}]};
const specialOffers = {"title":{"main":"Ofertas","highlight":"Especiales"},"subtitle":"Aprovecha nuestros descuentos limitados","offers":[{"buttonText":"Saber más","details":"Incluye montura y lentes con tratamiento antirreflejante o lentes de sol."},{"buttonText":"Ver condiciones","details":"Pack con lentes monofocales antirreflejantes. Revisa las condiciones.","conditions":"*Esfera hasta ±6.00 y cilindro hasta -4.00"},{"buttonText":"Ver audífonos"},{"buttonText":"Consultar oferta"}]};
const contact = {"title":{"main":"¿Buscas algo","highlight":"específico?"},"subtitle":"Tenemos una amplia selección de marcas y modelos en nuestra tienda física. Ven a visitarnos o contáctanos para encontrar exactamente lo que necesitas.","contactMethods":[{"id":1,"name":"WhatsApp","description":"Consulta rápida por mensaje","value":"+34 682 502 960","url":"https://wa.me/34682502960","icon":"whatsapp","color":"green"},{"id":2,"name":"Email","description":"Consultas detalladas","value":"opticaguinartsantandreu@gmail.com","url":"mailto:opticaguinartsantandreu@gmail.com","icon":"email","color":"blue"},{"id":3,"name":"Nuestra Tienda","description":"Visítanos en persona","value":"Ver en Maps","url":"https://www.google.com/maps/dir//Carrer+Gran+de+Sant+Andreu,+308,+Sant+Andreu,+08030+Barcelona/@41.4370855,2.1072775,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bcdc240241cf:0xa4b5922d46c1e48d!2m2!1d2.1896783!2d41.4371149?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D","icon":"location","color":"red"}],"mainButton":"Visitar tienda física"};
const productsData = {
  hero,
  seo,
  featuredProducts,
  specialOffers,
  contact,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://opticaguinart.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = productsData.seo?.title;
  const pageDescription = productsData.seo?.description;
  const pageOgImage = productsData.seo?.ogImage;
  const canonical = Astro2.site ? new URL(Astro2.url.pathname, Astro2.site).toString() : new URL(Astro2.url.pathname, "http://localhost").toString();
  const ofertaPrincipal = await getPrincipalOfferProducts();
  const apiProductsOffers = await getSpecialOffersProducts();
  const productsOffers = apiProductsOffers.map((apiOffer, index) => {
    const staticConfig = productsData.specialOffers.offers[index] || productsData.specialOffers.offers[0];
    return {
      ...apiOffer,
      buttonText: staticConfig.buttonText,
      conditions: staticConfig.conditions,
      details: staticConfig.details
    };
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "ogImage": pageOgImage }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="bg-gradient-to-b from-slate-100 via-gray-50 to-slate-100 min-h-screen pt-20 sm:pt-24 lg:pt-28">  <div class="py-16 px-4 sm:px-8 lg:px-12"> <div class="max-w-7xl mx-auto"> <div class="relative bg-gradient-to-r from-white to-gray-50 rounded-3xl overflow-hidden shadow-2xl mb-20 border border-gray-200"> <div class="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-transparent to-blue-50/50"></div> <div class="relative z-10 px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"> <div> <div class="inline-flex items-center bg-emerald-500/10 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-emerald-200"> <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> ', ' </div> <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-tight"> ', ' <!-- <span class="text-emerald-600"\n                    >{productsData.hero.title.highlight}</span\n                  > --> </h1> <p class="text-xl text-gray-600 mb-8 leading-relaxed"> ', ' </p> <div class="flex flex-col sm:flex-row gap-4"> ', ' </div> </div> <div class="relative"> <div class="w-full h-80 sm:h-96 bg-white rounded-2xl border border-gray-200 flex items-center justify-center relative overflow-hidden shadow-inner">  <div class="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div> <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)]"></div>  <div class="relative z-10 transform hover:scale-105 transition-transform duration-500 ease-out"> <div class="relative">  <div class="absolute inset-0 bg-gray-300/30 blur-xl scale-110 rounded-xl"></div> ', '  <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-lg pointer-events-none"></div> </div> </div>  <div class="absolute top-4 right-6 w-2 h-2 bg-emerald-500 rounded-full opacity-40 animate-pulse"></div> <div class="absolute bottom-8 left-8 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-ping"></div> <div class="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-gray-400/50 rounded-full opacity-30"></div> </div> </div> </div> </div> </div>  <div class="mb-20"> <div class="text-center mb-12"> <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-4 tracking-tight drop-shadow-lg"> ', ' <span class="text-emerald-600">', '</span> </h2> <p class="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium"> ', ' </p> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> ', ' </div> </div>  <div class="mb-20"> <div class="text-center mb-12"> <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-800 mb-4 tracking-tight drop-shadow-lg"> ', ' <span class="text-red-600">', '</span> </h2> <p class="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-medium"> ', ' </p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"> ', ' </div> </div>  <div id="offer-modal" class="fixed inset-0 z-50 hidden"> <div id="offer-modal-overlay" class="absolute inset-0 bg-black/40"></div> <div class="relative mx-auto mt-24 max-w-lg bg-white rounded-2xl p-6 shadow-2xl border border-emerald-200"> <button id="offer-modal-close" class="absolute top-3 right-3 text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full w-8 h-8 grid place-items-center" aria-label="Cerrar"> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg> </button> <h3 class="text-xl font-bold text-slate-800 mb-3">\nInformaci\xF3n de la oferta\n</h3> <p id="offer-modal-content" class="text-slate-600 leading-relaxed"></p> </div> </div> <script src="/scripts/offer-modal.js" defer><\/script>  <div class="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 border border-emerald-100"> <div class="text-center mb-12"> <h2 class="text-4xl sm:text-5xl font-black text-slate-800 mb-4 tracking-tight"> ', ' <span class="text-emerald-600">', '</span> </h2> <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"> ', ' </p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> ', ' </div> <div class="text-center"> <a href="https://www.google.com/maps/dir//Carrer+Gran+de+Sant+Andreu,+308,+Sant+Andreu,+08030+Barcelona/@41.4370855,2.1072775,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x12a4bcdc240241cf:0xa4b5922d46c1e48d!2m2!1d2.1896783!2d41.4371149?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D" target="_blank" class="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"> ', ' </a> </div> </div> </div> </div> </section>  <script type="application/ld+json">', '<\/script>  <script type="application/ld+json">', "<\/script> "])), maybeRenderHead(), ofertaPrincipal.badge, ofertaPrincipal.title, ofertaPrincipal.description, productsData.hero.buttons.map(
    (button) => button.type === "primary" ? renderTemplate`<a${addAttribute(
      "https://wa.me/34682502960?text=" + encodeURIComponent(
        `quiero informacion sobre el producto: ${productsData.hero.title.main} ${productsData.hero.title.highlight}`
      ),
      "href"
    )} target="_blank" class="text-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"> ${button.text} </a>` : renderTemplate`<a${addAttribute(ofertaPrincipal.link, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-600 hover:text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"> <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path> </svg> ${button.text} </a>`
  ), renderComponent($$result2, "Image", $$Image, { "src": "/productos/rayban-meta.webp", "alt": "Ray-Ban Meta Smart Glasses - Inteligencia Artificial", "width": 400, "height": 217, "priority": true, "class": "relative z-10 drop-shadow-lg filter brightness-100 contrast-105 saturate-105 rounded-lg" }), productsData.featuredProducts.title.main, productsData.featuredProducts.title.highlight, productsData.featuredProducts.subtitle, productsData.featuredProducts.products.map((product) => renderTemplate`<div class="group"> <div class="flex flex-col bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-emerald-500/20 overflow-hidden hover:bg-white h-full"> <div class="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl mb-4 flex items-center justify- p-2"> ${renderComponent($$result2, "Image", $$Image, { "src": product.src, "alt": product.name, "width": 360, "height": 360, "class": "mix-blend-multiply max-w-full max-h-full object-contain transition-transform duration-200 group-hover:scale-105 rotate-y-180" })} </div> <h3 class="text-xl font-bold text-slate-800 mb-2"> ${product.name} </h3> <p class="text-slate-600 text-sm mb-4"> ${product.description} </p>  <a${addAttribute(
    "https://wa.me/34682502960?text=" + encodeURIComponent(
      `quiero informacion sobre el producto: ${product.name}`
    ),
    "href"
  )} target="_blank" class="w-full mt-auto text-center bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-lg font-semibold transition-colors duration-300"> ${product.buttonText} </a> </div> </div>`), productsData.specialOffers.title.main, productsData.specialOffers.title.highlight, productsData.specialOffers.subtitle, productsOffers.map((offer, index) => renderTemplate`<div class="relative group h-full"> <div class="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-500 overflow-hidden hover:bg-white h-full flex flex-col"> <div class="absolute top-4 sm:right-4 w-fit sm:left-auto left-4 right-auto bg-emerald-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg"> ${offer.badge} </div> <div class="flex items-center gap-6 flex-grow"> <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"> <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </div> <div class="flex-grow flex flex-col justify-between"> <h3 class="text-2xl font-bold text-slate-800 mb-2"> ${offer.title} </h3> <p class="text-slate-600 mb-4">${offer.description}</p> <div class="flex items-center gap-3 mb-4"> <span class="text-3xl font-black text-emerald-600"> ${offer.price_or_gift} </span> </div> ${index === 0 || index === 3 ? renderTemplate`<a${addAttribute(
    index === 0 ? "https://wa.me/34682502960?text=" + encodeURIComponent(
      "saber mas: oferta montura + lentes graduadas"
    ) : "https://wa.me/34682502960?text=" + encodeURIComponent(
      "consultar oferta lentes progressivas 2x1"
    ),
    "href"
  )} target="_blank" rel="noopener noreferrer" class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg hover:shadow-xl text-center inline-block"> ${offer.buttonText} </a>` : renderTemplate`<button class="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300 shadow-lg hover:shadow-xl"${addAttribute(
    index === 2 ? "Esta secci\xF3n estar\xE1 disponible muy pronto." : index === 1 ? offer.conditions || offer.details || offer.description : offer.details || offer.description,
    "data-offer-content"
  )}> ${offer.buttonText} </button>`} </div> </div> </div> </div>`), productsData.contact.title.main, productsData.contact.title.highlight, productsData.contact.subtitle, productsData.contact.contactMethods.map((method) => renderTemplate`<div class="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-200/50 hover:border-emerald-300"> ${method.color === "green" && renderTemplate`<div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"> <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"></path> </svg> </div>`} ${method.color === "blue" && renderTemplate`<div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div>`} ${method.color === "red" && renderTemplate`<div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg"> <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div>`} <h3 class="text-xl font-bold text-slate-800 mb-2"> ${method.name} </h3> <p class="text-slate-600 mb-4">${method.description}</p> ${method.url ? renderTemplate`<a${addAttribute(method.url, "href")} target="_blank" rel="noopener noreferrer" class="text-emerald-700 font-semibold underline decoration-emerald-400 underline-offset-4 hover:text-emerald-800"> ${method.value} </a>` : renderTemplate`<div class="text-emerald-600 font-semibold"> ${method.value} </div>`} </div>`), productsData.contact.mainButton, unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: Astro2.site ? new URL("/", Astro2.site).toString() : "/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Productos",
        item: canonical
      }
    ]
  })), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      // Productos destacados como Product
      ...productsData.featuredProducts.products.map((p) => {
        const match = typeof p.price === "string" ? p.price.replace(/\./g, "").match(/(\d+)/) : null;
        const numPrice = match ? match[1] : null;
        const imageUrl = Astro2.site ? new URL(p.src, Astro2.site).toString() : p.src;
        return {
          "@type": "Product",
          name: p.name,
          description: p.description,
          image: imageUrl,
          brand: { "@type": "Brand", name: "\xD2ptica Guinart" },
          ...numPrice ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              price: numPrice,
              availability: "https://schema.org/InStoreOnly",
              url: canonical
            }
          } : {}
        };
      }),
      // Ofertas especiales como Offer individuales
      ...productsOffers.map((o) => {
        const match = typeof o.price_or_gift === "string" ? o.price_or_gift.replace(/\./g, "").match(/(\d+)/) : null;
        const numPrice = match ? match[1] : null;
        return {
          "@type": "Offer",
          name: o.title,
          description: o.description,
          ...numPrice ? { price: numPrice, priceCurrency: "EUR" } : {},
          availability: "https://schema.org/InStoreOnly",
          url: canonical
        };
      })
    ]
  }))) })}`;
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/products/index.astro", void 0);

const $$file = "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

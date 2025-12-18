import { a as createComponent, r as renderComponent, b as renderTemplate, d as addAttribute, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_Bigw0NEF.mjs';
import 'piccolore';
import { $ as $$Layout, c as contactData } from '../chunks/Layout_Cza0hYEJ.mjs';
export { renderers } from '../renderers.mjs';

const seo = {"title":"Preguntas frecuentes | Óptica y Audiología en Sant Andreu","description":"Resuelve dudas sobre óptica, audiometría, gafas, lentillas y audífonos en Òptica Guinart (Sant Andreu, Barcelona). Revisiones, servicios y garantías.","ogImage":"/portada/portada_compressed_2.webp"};
const page$1 = {"title":"Preguntas Frecuentes","subtitle":"Resolvemos tus dudas sobre óptica, audiometría y nuestros servicios","cta":{"contact":"Contactar","call":"Llamar ahora","noAnswerTitle":"¿No encuentras tu respuesta?","noAnswerText":"Nuestro equipo estará encantado de resolver cualquier duda adicional que tengas"}};
const optica = [{"question":"¿Con qué frecuencia debo revisar mi vista?","answer":"Se recomienda una revisión anual para adultos. Para niños y personas mayores de 60 años, es aconsejable cada 6 meses. Si tienes síntomas como dolor de cabeza, visión borrosa o fatiga ocular, consulta inmediatamente."},{"question":"¿Cómo sé si necesito gafas?","answer":"Algunos síntomas comunes incluyen: visión borrosa de cerca o de lejos, dolor de cabeza frecuente, fatiga ocular, dificultad para ver de noche, o entrecerrar los ojos para enfocar. Una revisión visual completa confirmará si necesitas corrección."},{"question":"¿Qué diferencia hay entre gafas progresivas y bifocales?","answer":"Las gafas bifocales tienen dos zonas definidas: una para cerca y otra para lejos. Las progresivas ofrecen una transición gradual entre todas las distancias (cerca, intermedia y lejos) sin líneas visibles, proporcionando una visión más natural."},{"question":"¿Cuánto tiempo tarda en estar lista mi graduación?","answer":"Las gafas estándar suelen estar listas en 7-10 días laborables. Las lentes especiales (progresivas, antirreflejantes especiales, etc.) pueden requerir 10-15 días. Las lentes de contacto graduadas normalmente están disponibles en 3-5 días."},{"question":"¿Las lentes de contacto son seguras?","answer":"Sí, son muy seguras cuando se usan correctamente. Es fundamental seguir las indicaciones de higiene, tiempo de uso y reemplazo. Ofrecemos una consulta completa para determinar si eres candidato y te enseñamos el uso y cuidado adecuado."},{"question":"¿Qué son los tratamientos antirreflejantes?","answer":"Son recubrimientos especiales que eliminan los reflejos molestos en las lentes, mejoran la transparencia, reducen la fatiga ocular y proporcionan mejor visión nocturna. También facilitan la limpieza y protegen contra rayones."}];
const audiometria = [{"question":"¿Qué es una audiometría?","answer":"Es una prueba que evalúa tu capacidad auditiva midiendo cómo percibes diferentes sonidos y frecuencias. Es indolora y dura aproximadamente 20-30 minutos. Nos permite detectar cualquier pérdida auditiva y su grado."},{"question":"¿Cuándo debo hacerme una audiometría?","answer":"Se recomienda una revisión anual después de los 50 años, o antes si notas: dificultad para entender conversaciones, necesidad de subir el volumen de TV/radio, zumbidos en los oídos, o sensación de oídos tapados frecuentemente."},{"question":"¿Cómo me preparo para una audiometría?","answer":"Evita exposición a ruidos fuertes 24 horas antes de la prueba. Si tienes cera en los oídos, limpia suavemente el exterior. No uses bastoncillos. Informa sobre medicamentos que tomas y cualquier síntoma auditivo reciente."},{"question":"¿Los audífonos son muy visibles?","answer":"Los audífonos modernos son muy discretos. Tenemos modelos intrauriculares prácticamente invisibles y retroauriculares muy pequeños. La tecnología actual prioriza tanto la estética como la funcionalidad."},{"question":"¿Cuánto duran los audífonos?","answer":"Con el cuidado adecuado, los audífonos suelen durar 5-7 años. Ofrecemos servicio de mantenimiento, limpieza profesional y garantía. También proporcionamos formación completa sobre su uso y cuidado."},{"question":"¿Los audífonos necesitan mantenimiento?","answer":"Sí, requieren limpieza diaria básica y revisiones profesionales periódicas. Proporcionamos kit de limpieza, instrucciones detalladas y servicios de mantenimiento. Un buen cuidado garantiza mejor rendimiento y mayor durabilidad."}];
const general = [{"question":"¿Aceptan seguros médicos?","answer":"Actualmente no trabajamos con seguros médicos. Ofrecemos facilidades de pago y financiación para tratamientos y productos. Consulta con nosotros para más información."},{"question":"¿Ofrecen garantía en sus productos?","answer":"Sí, todos nuestros productos tienen garantía. La duración y condiciones dependen del producto específico. Consulta con nosotros para información detallada sobre garantías de monturas, lentes, audífonos y otros productos."},{"question":"¿Hacen reparaciones?","answer":"Realizamos reparaciones de gafas en el momento para ajustes, cambio de tornillos y reparaciones menores. Para reparaciones complejas o audífonos, tenemos servicio técnico especializado."},{"question":"¿Necesito cita previa?","answer":"Para revisiones visuales y audiometrías es recomendable cita previa para garantizar atención personalizada. Para compras o consultas rápidas puedes venir sin cita, aunque podrías esperar un poco."}];
const faqData = {
  seo,
  page: page$1,
  optica,
  audiometria,
  general,
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = faqData.seo?.title;
  const pageDescription = faqData.seo?.description;
  const pageOgImage = faqData.seo?.ogImage;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "ogImage": pageOgImage }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"> <!-- FAQPage Structured Data --> <script type="application/ld+json">', '<\/script> <!-- Hero Section --> <section class="py-20 px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6"> ', ' </h1> <p class="text-xl text-gray-600 mb-8"> ', ' </p> <div class="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div> </div> </section> <!-- FAQ Content --> <section class="pb-20 px-4"> <div class="max-w-4xl mx-auto"> <!-- \xD2ptica FAQ --> <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900 mb-8 flex items-center"> <svg class="w-8 h-8 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path> </svg>\n\xD2ptica y Visi\xF3n\n</h2> <div class="space-y-4"> ', ' </div> </div> <!-- Audiometr\xEDa FAQ --> <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900  mb-8 flex items-center"> <svg class="w-8 h-8 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path> </svg>\nAudiometr\xEDa y Audici\xF3n\n</h2> <div class="space-y-4"> ', ' </div> </div> <!-- General FAQ --> <div class="mb-16"> <h2 class="text-3xl font-bold text-gray-900  mb-8 flex items-center"> <svg class="w-8 h-8 mr-3 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path> </svg>\nInformaci\xF3n General\n</h2> <div class="space-y-4"> ', ' </div> </div> <!-- Contact CTA --> <div class="bg-emerald-500 rounded-2xl p-8 text-center text-white"> <h3 class="text-2xl font-bold mb-4">', '</h3> <p class="text-emerald-100 mb-6"> ', ' </p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a href="/contact" class="bg-white text-emerald-500 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"> ', " </a> <a", ' class="bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors border border-emerald-400"> ', " </a> </div> </div> </div> </section> </main> "])), maybeRenderHead(), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      ...faqData.optica.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      })),
      ...faqData.audiometria.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      })),
      ...faqData.general.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    ]
  })), faqData.page.title, faqData.page.subtitle, faqData.optica.map((faq, index) => renderTemplate`<div class="bg-white  rounded-xl shadow-lg border border-gray-200 "> <details class="group"> <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50  rounded-xl transition-colors"> <h3 class="text-lg font-semibold text-gray-900  pr-4"> ${faq.question} </h3> <svg class="w-5 h-5 text-emerald-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="px-6 pb-6"> <p class="text-gray-600  leading-relaxed"> ${faq.answer} </p> </div> </details> </div>`), faqData.audiometria.map((faq, index) => renderTemplate`<div class="bg-white  rounded-xl shadow-lg border border-gray-200 "> <details class="group"> <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50  rounded-xl transition-colors"> <h3 class="text-lg font-semibold text-gray-900  pr-4"> ${faq.question} </h3> <svg class="w-5 h-5 text-emerald-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="px-6 pb-6"> <p class="text-gray-600  leading-relaxed"> ${faq.answer} </p> </div> </details> </div>`), faqData.general.map((faq, index) => renderTemplate`<div class="bg-white  rounded-xl shadow-lg border border-gray-200 "> <details class="group"> <summary class="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50  rounded-xl transition-colors"> <h3 class="text-lg font-semibold text-gray-900  pr-4"> ${faq.question} </h3> <svg class="w-5 h-5 text-emerald-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </summary> <div class="px-6 pb-6"> <p class="text-gray-600  leading-relaxed"> ${faq.answer} </p> </div> </details> </div>`), faqData.page.cta.noAnswerTitle, faqData.page.cta.noAnswerText, faqData.page.cta.contact, addAttribute(`tel:${contactData.contactInfo.phone.display.replace(/\s+/g, "")}`, "href"), faqData.page.cta.call) })}`;
}, "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/faq/index.astro", void 0);

const $$file = "C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/faq/index.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

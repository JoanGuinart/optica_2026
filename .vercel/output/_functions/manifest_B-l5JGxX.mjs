import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_Bigw0NEF.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DjQWyu6D.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/","cacheDir":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/node_modules/.astro/","outDir":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/dist/","srcDir":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/","publicDir":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/public/","buildClientDir":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/dist/client/","buildServerDir":"file:///C:/Users/guina/OneDrive/Escritorio/optica-web-2026/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/audifonos-barcelona","isIndex":true,"type":"page","pattern":"^\\/audifonos-barcelona\\/?$","segments":[[{"content":"audifonos-barcelona","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/audifonos-barcelona/index.astro","pathname":"/audifonos-barcelona","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/audiologia-barcelona","isIndex":true,"type":"page","pattern":"^\\/audiologia-barcelona\\/?$","segments":[[{"content":"audiologia-barcelona","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/audiologia-barcelona/index.astro","pathname":"/audiologia-barcelona","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/faq","isIndex":true,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq/index.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/optica-sant-andreu","isIndex":true,"type":"page","pattern":"^\\/optica-sant-andreu\\/?$","segments":[[{"content":"optica-sant-andreu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/optica-sant-andreu/index.astro","pathname":"/optica-sant-andreu","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/products","isIndex":true,"type":"page","pattern":"^\\/products\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/products/index.astro","pathname":"/products","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DRP6Krar.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://opticaguinart.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/audifonos-barcelona/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/audiologia-barcelona/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/faq/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/optica-sant-andreu/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/products/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/services/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/audifonos-barcelona/index@_@astro":"pages/audifonos-barcelona.astro.mjs","\u0000@astro-page:src/pages/audiologia-barcelona/index@_@astro":"pages/audiologia-barcelona.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq/index@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/optica-sant-andreu/index@_@astro":"pages/optica-sant-andreu.astro.mjs","\u0000@astro-page:src/pages/products/index@_@astro":"pages/products.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_B-l5JGxX.mjs","C:/Users/guina/OneDrive/Escritorio/optica-web-2026/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DDNNQtiR.mjs","@/components/NavbarClient":"_astro/NavbarClient.DdTMJlCu.js","@astrojs/react/client.js":"_astro/client.9xuxGf9-.js","C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/contact/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CkT0gvdg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/guina/OneDrive/Escritorio/optica-web-2026/src/pages/contact/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"form-next\");if(e instanceof HTMLInputElement)try{e.value=`${location.origin}/contact?sent=1`}catch(t){}if(\"1\"===new URLSearchParams(location.search).get(\"sent\")){const e=document.getElementById(\"form-success\");e&&e.classList.remove(\"hidden\")}});"]],"assets":["/_astro/index.DRP6Krar.css","/favicon.ico","/favicon.svg","/manifest.webmanifest","/robots.txt","/icons/apple-touch-icon.png","/icons/icon-192.png","/icons/icon-512.png","/productos/arnette-hot-shot-an4182-214981.webp","/productos/furla-VFU718-09MA.webp","/productos/lacoste-L2912-301.webp","/productos/maui-jim-paluna.webp","/productos/pertegaz-55178550.webp","/productos/police-x-mercedes-amg-petronas-splr50-r22b.webp","/productos/polo-ralph-lauren-ph2211.webp","/productos/ralph-by-ralph-lauren.webp","/productos/rayban-meta.webp","/productos/rayban-wayfarer.webp","/productos/silhouette-escondido.webp","/productos/tous-daisy.webp","/productos/vogue-V05582S.webp","/productos/yalea-SYA053V.webp","/productos/zadig-voltaire-ZV23H5.webp","/portada/portada_compressed_2.webp","/scripts/offer-modal.js","/_astro/client.9xuxGf9-.js","/_astro/index.Dt5TeE8z.js","/_astro/NavbarClient.DdTMJlCu.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"KXYNIQAmQCFo8Efeiu0r3nSpqdGcmIH0XhtaynHHUys="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

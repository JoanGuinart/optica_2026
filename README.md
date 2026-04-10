# Òptica & Audiología Guinart Web

Sitio web construido con [Astro](https://astro.build) para la óptica y centro de audiología. El contenido textual principal está desacoplado en ficheros JSON dentro de `src/data` para facilitar su edición sin tocar las plantillas.

## 🗂️ Estructura principal

```text
src/
	components/          Componentes Astro/JSX reutilizables
	layouts/             Layout base
	pages/               Rutas del sitio (.astro)
	data/                Fuente de datos en JSON (textos y configuración)
	styles/              CSS global y crítico
```

### Datos en `src/data`

| Archivo | Uso |
|---------|-----|
| `navbar.json` | Items del menú de navegación |
| `portada.json` | Contenido del hero de la portada |
| `main-content.json` | Bloques informativos de la home |
| `offers-home.json` | Ofertas especiales mostradas en la home |
| `contact.json` | Información de contacto (NAP, redes, horarios) |
| `faq.json` | Preguntas frecuentes globales |
| `products.json` | Datos de productos y ofertas |
| `offers-products.json` | Oferta principal y ofertas especiales de la página de productos |
| `services.json` | Listado de servicios y beneficios |
| `audifonos-barcelona.json` | Contenido landing audífonos |
| `audiologia-barcelona.json` | Contenido landing audiología |
| `optica-sant-andreu.json` | Contenido landing óptica local |
| `home.json` | Sección de landings locales en la página de inicio |

Para añadir o editar textos sólo actualiza el JSON correspondiente (mantén la estructura de claves). Las páginas importan los datos con alias `@data/...` gracias a la configuración de rutas en `tsconfig.json`.

## ✨ Flujo para añadir una nueva landing
1. Crear `src/data/nueva-landing.json` con campos `seo`, `hero`, bloques (ej: `services`, `faqs`, etc.).
2. Importar el JSON en `src/pages/nueva-landing/index.astro` y mapear los arrays en el markup.
3. Añadir entrada opcional en `home.json` para que aparezca en la portada.
4. Ejecutar `npm run build` para verificar que todo compila.

## 🧞 Comandos

| Comando | Acción |
|---------|--------|
| `npm install` | Instala dependencias |
| `npm run dev` | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera la versión estática en `dist/` |
| `npm run preview` | Previsualiza el build antes de desplegar |

## 🔍 Buenas prácticas de contenido
- Mantén frases concisas en los JSON para favorecer el SEO y la reutilización.
- Evita HTML dentro de los valores; usa marcado en la plantilla si necesitas énfasis.
- Para números de teléfono usa siempre formato internacional (+34) y deja la presentación (espacios) a la vista.
- Cuando un texto depende de datos dinámicos (ej. dirección u horario) construye la cadena en la plantilla como se hace en `optica-sant-andreu`.

## 🚀 Despliegue
El resultado tras `npm run build` es totalmente estático. Puedes desplegar en cualquier hosting de contenido estático (Netlify, Vercel, GitHub Pages, etc.).

## 🤝 Contribuir
1. Crea rama (`git checkout -b feature/nueva-seccion`).
2. Realiza cambios en JSON y páginas.
3. Ejecuta `npm run build` y revisa.
4. Abre Pull Request.

---
## 📈 SEO y Metadatos

El proyecto usa un enfoque centralizado para SEO y datos estructurados.

### 1. Bloques `seo` en JSON
Cada fichero de contenido relevante incluye un bloque:

```json
"seo": {
	"title": "Título único de la página",
	"description": "Descripción persuasiva (≤160 caracteres recomendados)",
	"ogImage": "/portada/portada_compressed_2.webp"
}
```

Uso en la página Astro:

```astro
---
import Layout from "@/layouts/Layout.astro";
import pageData from "@data/products.json";
const pageTitle = pageData.seo?.title;
const pageDescription = pageData.seo?.description;
const pageOgImage = pageData.seo?.ogImage;
---
<Layout title={pageTitle} description={pageDescription} ogImage={pageOgImage}>
	<!-- contenido -->
</Layout>
```

### 2. Layout central (`Layout.astro`)
Genera automáticamente:
- `<title>` con plantilla.
- `<meta name="description">`.
- Etiquetas Open Graph y Twitter.
- `canonical` usando `Astro.site`.
- JSON-LD base (`WebSite`, `LocalBusiness` / Optician y `SearchAction`).

### 3. JSON-LD por página
Se añaden scripts inline para enriquecer resultados (rich snippets):
- `BreadcrumbList` en páginas internas.
- `FAQPage` en la página de preguntas frecuentes.
- `Product` y `Offer` en `products/index.astro`.
- `Service` en `services/index.astro`.

Patrón general:

```astro
<script type="application/ld+json" is:inline set:html={JSON.stringify({...})}></script>
```

### 4. Buenas prácticas aplicadas
- Fallback de `alt` para imágenes (`product.imagePlaceholder || product.name`).
- Precio numérico extraído para Schema (se limpia `€` y puntos para `price`).
- Uso de `InStoreOnly` para ofertas sin venta online.
- Redirección 301 de `www` → dominio raíz para evitar contenido duplicado.

### 5. Cómo añadir nuevo Schema
1. Identifica el tipo (`Article`, `Event`, etc.).
2. Añade campos necesarios al JSON fuente.
3. Inserta bloque `<script type="application/ld+json">` en la página.
4. Valida con Rich Results Test de Google.

### 6. Validación rápida
```powershell
npm run build
# Abrir dist/pagina/index.html y buscar "application/ld+json"
```

## 🌐 Canonical y redirecciones
Se fuerza la versión sin `www` mediante configuración de despliegue (ej. `vercel.json`) para consolidar señales SEO.

## 🧪 Checklist antes de desplegar
- [ ] Cada página tiene bloque `seo`.
- [ ] Descripciones ≤160 caracteres y sin duplicados.
- [ ] Imágenes usadas como `og:image` servidas en WebP.
- [ ] JSON-LD válido (sin campos vacíos). 
- [ ] Build sin errores: `npm run build`.

## 🧩 Futuras mejoras sugeridas
- Añadir `AggregateRating` si hay reseñas.
- Implementar página de detalle de producto con `Product` + `Offer` extensos.
- Sitemap de imágenes si el catálogo crece.

---
Si necesitas añadir nuevos tipos de contenido estructurado (Schema.org) sigue el patrón de los scripts existentes y alimenta `description`, `name`, etc. desde los JSON para mantener consistencia.

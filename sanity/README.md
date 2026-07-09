# Plantillas de Sanity para inmoinversión

Estos archivos son **esquemas listos para copiar y pegar** en tu Sanity Studio.
Con ellos podrás editar desde Sanity toda la información que se muestra en la web.

## Qué incluye

- `schemaTypes/property.ts` → **Propiedad / Vivienda**. Contiene todos los campos
  que aparecen en la web:
  - Información principal: título, slug (URL), referencia, tipo, estado
    (disponible / próximamente / reservada), fecha de disponibilidad,
    descripción y marcado de "destacada".
  - Características: dormitorios, baños, superficie (m²), año, amueblada,
    certificación energética, lista de características y puntos destacados.
  - **Imágenes y vídeo**: imagen principal, galería de imágenes y **enlace de
    vídeo de YouTube**.
  - **Ubicación y mapa**: dirección, ciudad, provincia y **coordenadas
    (latitud/longitud)** para el mapa de OpenStreetMap.
  - Propietario: nombre, WhatsApp y email.

- `schemaTypes/siteSettings.ts` → **Ajustes del sitio** (singleton). Datos
  globales editables: teléfono, WhatsApp, email, dirección de la oficina,
  horario y redes sociales.

- `schemaTypes/index.ts` → junta ambos esquemas.

## Cómo usarlo

1. Copia los archivos de `sanity/schemaTypes/` dentro de tu proyecto de Sanity
   Studio (carpeta `schemaTypes/`).
2. En tu `schemaTypes/index.ts` exporta ambos, por ejemplo:

   ```ts
   import { property } from "./property";
   import { siteSettings } from "./siteSettings";

   export const schemaTypes = [property, siteSettings];
   ```

3. Despliega el Studio y empieza a crear propiedades y a rellenar los ajustes
   del sitio.

## Siguiente paso (integración en la web)

Cuando quieras conectar la web a Sanity para que lea estos datos en lugar de los
datos de ejemplo (`src/data/properties.ts`), avísame: instalaré `@sanity/client`
y `@sanity/image-url`, y sustituiré la fuente de datos por consultas a Sanity.

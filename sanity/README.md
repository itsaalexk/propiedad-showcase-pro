# Sanity + inmoinversión — guía de integración

Esta carpeta contiene los esquemas listos para copiar en tu Sanity Studio.

## 1. Crear el Studio

```bash
npm create sanity@latest -- --template clean --typescript
```

Copia la carpeta `schemaTypes/` de este repo dentro de tu Studio y registra los esquemas
en `sanity.config.ts`:

```ts
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  projectId: "TU_PROJECT_ID",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
```

Esquemas incluidos:

| Documento | Para qué sirve |
|---|---|
| `investment` (Inversión) | Título, slug, tipo (participaciones / alquiler / flipping / otros proyectos), precio **opcional**, descripción en **texto enriquecido** (negrita, listas, enlaces, imágenes y vídeos de YouTube insertados), imagen principal, galería ilimitada, vídeos de YouTube, ubicación y **coordenadas** para el mapa. |
| `siteSettings` (Ajustes del sitio) | Teléfono, WhatsApp, email, horario, oficina y redes sociales (Instagram, Facebook, YouTube, LinkedIn) con **interruptor** para activarlas/desactivarlas en el footer. Crea **un único** documento. |
| `contactRequest` (Solicitud de contacto) | Aquí se guardan automáticamente los envíos del formulario de contacto de la web. |

## 2. Permitir el acceso desde el frontal (CORS)

En [sanity.io/manage](https://sanity.io/manage) → tu proyecto → **API** → **CORS origins**,
añade `http://localhost:8080` (y tu dominio de producción). Marca *Allow credentials*
solo si vas a usar token.

## 3. Variables de entorno del frontal

Crea un archivo `.env.local` en la raíz de este proyecto (ver `.env.example`):

```
VITE_SANITY_PROJECT_ID=tu_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
VITE_SANITY_USE_CDN=true
# Token con permisos de escritura, solo si quieres guardar en Sanity
# las solicitudes del formulario de contacto:
VITE_SANITY_WRITE_TOKEN=sk...
```

Arranca el proyecto (`npm run dev`) y la web leerá automáticamente las inversiones y los
ajustes desde Sanity. **Si no defines `VITE_SANITY_PROJECT_ID`, la web sigue funcionando
con los datos de ejemplo locales.**

> Nota de seguridad: el token de escritura queda expuesto en el bundle del navegador.
> Crea un token con permiso mínimo (rol *Contributor* / solo `create`) y úsalo únicamente
> para el formulario de contacto. Para producción lo ideal es mover ese envío a una
> función de servidor.

## 4. Dataset público

El dataset debe ser **público** (`production` lo es por defecto) para leer sin token.
Si es privado, necesitarás un token de lectura.

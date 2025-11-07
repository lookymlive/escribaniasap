# 📘 Guía 06: Configurar SEO y Analytics

## Objetivo

Optimizar el sitio para motores de búsqueda y configurar herramientas de análisis para entender el comportamiento de los visitantes.

---

## ⏱️ Tiempo estimado: 30 minutos

---

## Parte 1: Google Analytics 4

### Paso 1: Crear Cuenta de Google Analytics

#### 1.1 Acceder a Google Analytics

1. Ve a [https://analytics.google.com](https://analytics.google.com)
2. Inicia sesión con tu cuenta de Google
3. Click en **"Empezar a medir"** o **"Crear cuenta"**

#### 1.2 Configurar Cuenta

**Nombre de la cuenta**: Tu Escribanía Analytics

**Configuración de datos compartidos**: Selecciona las opciones que prefieras

Click **"Siguiente"**

#### 1.3 Crear Propiedad

**Nombre de la propiedad**: Sitio Web Tu Escribanía

**Zona horaria**: Argentina (GMT-3)

**Moneda**: Peso argentino (ARS)

Click **"Siguiente"**

#### 1.4 Información del Negocio

**Sector**: Servicios profesionales

**Tamaño de la empresa**: Pequeña (1-10 empleados)

**Objetivos**:

- Generar clientes potenciales
- Medir la interacción con el contenido

Click **"Crear"**

Acepta los términos de servicio.

### Paso 2: Configurar Flujo de Datos

#### 2.1 Crear Flujo de Datos Web

1. Selecciona **"Web"**
2. Completa:
   - **URL del sitio web**: `https://tuescribania.com`
   - **Nombre del flujo**: Sitio Web Principal
3. Click **"Crear flujo"**

#### 2.2 Copiar Measurement ID

Verás un **Measurement ID** con formato: `G-XXXXXXXXXX`

⚠️ **Copia este ID**, lo necesitarás en el siguiente paso.

### Paso 3: Agregar Google Analytics al Sitio

#### 3.1 Actualizar Variables de Entorno

Abre `.env.local` y agrega:

```env
# GOOGLE ANALYTICS
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Reemplaza `G-XXXXXXXXXX` con tu Measurement ID real.

#### 3.2 Crear Componente de Google Analytics

Crea el archivo `components/google-analytics.tsx`:

```typescript
"use client";

import Script from "next/script";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
}
```

#### 3.3 Agregar al Layout

Abre `app/layout.tsx` y agrega:

```typescript
import { GoogleAnalytics } from "@/components/google-analytics";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```

#### 3.4 Verificar Instalación

1. Reinicia el servidor: `pnpm dev`
2. Abre tu sitio en el navegador
3. Ve a Google Analytics
4. En **Informes** > **Tiempo real**
5. Deberías ver tu visita en tiempo real

✅ Si ves actividad, ¡funciona correctamente!

---

## Parte 2: Google Search Console

### Paso 1: Agregar Sitio a Search Console

#### 1.1 Acceder a Search Console

1. Ve a [https://search.google.com/search-console](https://search.google.com/search-console)
2. Inicia sesión con tu cuenta de Google
3. Click en **"Agregar propiedad"**

#### 1.2 Elegir Tipo de Propiedad

**Opción recomendada**: Prefijo de URL

Ingresa: `https://tuescribania.com`

Click **"Continuar"**

#### 1.3 Verificar Propiedad

**Método recomendado**: Etiqueta HTML

1. Copia el código de verificación
2. Abre `app/layout.tsx`
3. Agrega en el `<head>`:

```typescript
export const metadata: Metadata = {
  // ... otras configuraciones
  verification: {
    google: "tu-codigo-de-verificacion-aqui",
  },
};
```

4. Deploy los cambios
5. Vuelve a Search Console y click **"Verificar"**

### Paso 2: Enviar Sitemap

#### 2.1 Verificar Sitemap

Tu sitio ya tiene un sitemap automático en:
`https://tuescribania.com/sitemap.xml`

Verifica que funcione visitando esa URL.

#### 2.2 Enviar a Google

1. En Search Console, ve a **Sitemaps**
2. Ingresa: `sitemap.xml`
3. Click **"Enviar"**

Google comenzará a indexar tu sitio (puede tomar días).

---

## Parte 3: Optimización SEO

### Paso 1: Meta Tags por Página

#### 1.1 Homepage

Abre `app/page.tsx` y agrega:

```typescript
export const metadata: Metadata = {
  title: "Inicio - Servicios Notariales Profesionales",
  description:
    "Escribanía profesional en [Ciudad]. Más de [X] años de experiencia en derecho corporativo, inmobiliario, sucesiones y escrituración.",
  openGraph: {
    title: "Tu Escribanía - Servicios Notariales",
    description: "Servicios notariales profesionales en [Ciudad]",
    images: ["/og-image.jpg"],
  },
};
```

#### 1.2 Página de Servicios

Abre `app/servicios/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Servicios Notariales",
  description:
    "Ofrecemos servicios de derecho corporativo, inmobiliario, sucesiones, escrituración y asesoramiento legal profesional.",
};
```

#### 1.3 Página de Contacto

Abre `app/contacto/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos para una consulta profesional. Estamos en [dirección], [ciudad]. Teléfono: [número].",
};
```

### Paso 2: Schema.org Markup

#### 2.1 Agregar LocalBusiness Schema

Crea `components/schema-markup.tsx`:

```typescript
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Tu Escribanía",
    image: "https://tuescribania.com/logo.png",
    "@id": "https://tuescribania.com",
    url: "https://tuescribania.com",
    telephone: "+54-341-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Principal 1234",
      addressLocality: "Tu Ciudad",
      addressRegion: "Provincia",
      postalCode: "2000",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.9442,
      longitude: -60.6505,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://facebook.com/tuescribania",
      "https://instagram.com/tuescribania",
      "https://linkedin.com/company/tuescribania",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

#### 2.2 Agregar al Layout

En `app/layout.tsx`:

```typescript
import { LocalBusinessSchema } from "@/components/schema-markup";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <LocalBusinessSchema />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Paso 3: Optimizar Imágenes

#### 3.1 Agregar Alt Text

Revisa todas las imágenes y agrega texto alternativo descriptivo:

```typescript
<Image
  src="/team/juan-perez.jpg"
  alt="Dr. Juan Pérez, Escribano Titular especializado en derecho inmobiliario"
  width={800}
  height={800}
/>
```

#### 3.2 Crear Imagen Open Graph

1. Crea una imagen de 1200x630px
2. Incluye tu logo y nombre
3. Guárdala como `public/og-image.jpg`

---

## Parte 4: Configurar Eventos Personalizados

### Paso 1: Trackear Formulario de Contacto

Abre `components/contact-form.tsx`:

```typescript
"use client";

import { useEffect } from "react";

export function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ... tu lógica de envío

    // Trackear evento en GA4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        form_name: "contact_form",
        form_location: "contact_page",
      });
    }
  };

  return <form onSubmit={handleSubmit}>{/* ... tu formulario */}</form>;
}
```

### Paso 2: Trackear Clics en WhatsApp

```typescript
<a
  href={`https://wa.me/${SITE_WHATSAPP}`}
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "contact",
        event_label: "whatsapp",
      });
    }
  }}
>
  Contactar por WhatsApp
</a>
```

### Paso 3: Trackear Clics en Teléfono

```typescript
<a
  href={`tel:${SITE_PHONE}`}
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "contact",
        event_label: "phone",
      });
    }
  }}
>
  {SITE_PHONE}
</a>
```

---

## Parte 5: Banner de Cookies (GDPR)

### Paso 1: Crear Componente de Cookies

Crea `components/cookie-consent.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700">
          Utilizamos cookies para mejorar tu experiencia. Al continuar
          navegando, aceptas nuestra{" "}
          <a href="/privacidad" className="underline">
            Política de Privacidad
          </a>
          .
        </p>
        <div className="flex gap-2">
          <Button onClick={rejectCookies} variant="outline">
            Rechazar
          </Button>
          <Button onClick={acceptCookies}>Aceptar</Button>
        </div>
      </div>
    </div>
  );
}
```

### Paso 2: Agregar al Layout

En `app/layout.tsx`:

```typescript
import { CookieConsent } from "@/components/cookie-consent";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```

---

## ✅ Checklist de Verificación

- [ ] Google Analytics configurado y funcionando
- [ ] Search Console verificado
- [ ] Sitemap enviado a Google
- [ ] Meta tags optimizados en todas las páginas
- [ ] Schema.org markup agregado
- [ ] Alt text en todas las imágenes
- [ ] Eventos personalizados configurados
- [ ] Banner de cookies implementado
- [ ] Imagen Open Graph creada

---

## 🎯 Próximos Pasos

**📘 Guía 07: Gestionar Blog y Contenido**

---

## 💡 Tips Profesionales

1. **Paciencia**: SEO toma tiempo (3-6 meses para ver resultados)
2. **Contenido**: Publica contenido regularmente en el blog
3. **Keywords**: Usa palabras clave relevantes naturalmente
4. **Local SEO**: Optimiza para búsquedas locales
5. **Monitoreo**: Revisa Analytics semanalmente

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

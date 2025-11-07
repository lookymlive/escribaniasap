# 📘 Guía 05: Personalizar Contenido y Branding

## Objetivo

Personalizar el sitio web con tu propia información, colores, y contenido para que refleje tu marca profesional.

---

## ⏱️ Tiempo estimado: 20 minutos

---

## Paso 1: Cambiar Información de Contacto

### 1.1 Abrir Archivo de Constantes

Abre el archivo `lib/constants.ts` en tu editor de código.

### 1.2 Actualizar Información Básica

```typescript
// lib/constants.ts

// Cambia el nombre de tu escribanía
export const SITE_NAME = "Tu Escribanía Profesional";

// Cambia la descripción (importante para SEO)
export const SITE_DESCRIPTION =
  "Servicios notariales profesionales en [Tu Ciudad]. Especializados en derecho corporativo, inmobiliario, sucesiones y escrituración.";

// Actualiza tu email
export const SITE_EMAIL = "contacto@tuescribania.com";

// Actualiza tu teléfono (formato internacional)
export const SITE_PHONE = "+54 341 123-4567";

// Actualiza tu WhatsApp (sin espacios ni guiones)
export const SITE_WHATSAPP = "+5493411234567";

// Actualiza tu dirección completa
export const SITE_ADDRESS = "Calle Principal 1234, Ciudad, Provincia";

// Actualiza tu ubicación
export const SITE_LOCATION = "Ciudad, Provincia, Argentina";
```

### 1.3 Guardar y Verificar

1. Guarda el archivo (Ctrl + S)
2. Ve a [http://localhost:3000/contacto](http://localhost:3000/contacto)
3. Verifica que la información se actualizó

---

## Paso 2: Cambiar Colores y Branding

### 2.1 Actualizar Paleta de Colores

En el mismo archivo `lib/constants.ts`:

```typescript
export const COLORS = {
  primary: "#003366", // Color principal (azul profundo)
  secondary: "#D4A574", // Color secundario (dorado)
  accent: "#2D5016", // Color de acento (verde)
  neutral_light: "#F5F1E8", // Fondo claro (crema)
  neutral_dark: "#2C2C2C", // Texto oscuro (gris)
};
```

**Cómo elegir colores**:

- **Primary**: Color principal de tu marca (botones, links)
- **Secondary**: Color complementario (destacados, badges)
- **Accent**: Color de énfasis (CTAs importantes)

**Herramientas útiles**:

- [Coolors.co](https://coolors.co/) - Generador de paletas
- [Adobe Color](https://color.adobe.com/) - Rueda de colores
- [Paletton](https://paletton.com/) - Esquemas de color

### 2.2 Actualizar Información del Equipo

```typescript
export const TEAM_INFO = {
  name: "Tu Escribanía",
  founded: 2010, // Año de fundación
  experience: "15+", // Años de experiencia
  professionals: 3, // Número de profesionales
  location: "Tu Ciudad, Provincia, Argentina",
  website: "https://tuescribania.com",
};
```

### 2.3 Actualizar Redes Sociales

```typescript
export const SOCIAL_MEDIA = {
  linkedin: "https://linkedin.com/company/tu-escribania",
  instagram: "https://instagram.com/tuescribania",
  facebook: "https://facebook.com/tuescribania",
};
```

Si no tienes alguna red social, déjala con el valor por defecto o elimínala.

---

## Paso 3: Personalizar Servicios

### 3.1 Acceder a Supabase

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Selecciona tu proyecto
3. Ve a **Table Editor**
4. Selecciona la tabla **services**

### 3.2 Editar Servicios Existentes

Para cada servicio, puedes editar:

- **name**: Nombre del servicio
- **description**: Descripción detallada
- **slug**: URL amigable (ej: "derecho-corporativo")
- **order_number**: Orden de aparición (1, 2, 3...)

**Ejemplo**:

```
name: Derecho Corporativo
slug: derecho-corporativo
description: Asesoramiento legal integral para empresas, incluyendo constitución de sociedades, contratos comerciales, y fusiones.
order_number: 1
```

### 3.3 Agregar Nuevo Servicio

Click en **Insert row** y completa:

```sql
-- O usa SQL Editor
INSERT INTO services (name, slug, description, order_number) VALUES
  ('Mediación', 'mediacion', 'Resolución alternativa de conflictos mediante mediación profesional.', 6);
```

### 3.4 Eliminar Servicio

Si no ofreces algún servicio:

1. Selecciona la fila
2. Click en el icono de basura
3. Confirma la eliminación

---

## Paso 4: Actualizar Miembros del Equipo

### 4.1 Editar Información de Miembros

En Supabase, ve a la tabla **team_members**:

```sql
-- Actualizar información de un miembro
UPDATE team_members
SET
  name = 'Dr. Juan Pérez',
  title = 'Escribano Titular',
  specialty = 'Derecho Inmobiliario',
  bio = 'Más de 20 años de experiencia en escrituración y derecho inmobiliario.',
  email = 'juan@tuescribania.com'
WHERE id = 'id-del-miembro';
```

### 4.2 Agregar Nuevo Miembro

```sql
INSERT INTO team_members (
  name,
  title,
  specialty,
  bio,
  image_url,
  email,
  order_number
) VALUES (
  'Dra. María González',
  'Abogada Asociada',
  'Derecho Corporativo',
  'Especialista en derecho societario y contratos comerciales.',
  '/team/maria-gonzalez.jpg',
  'maria@tuescribania.com',
  2
);
```

### 4.3 Reordenar Miembros

Cambia el `order_number` para cambiar el orden de aparición:

```sql
-- Poner a María primero
UPDATE team_members SET order_number = 1 WHERE name = 'Dra. María González';
UPDATE team_members SET order_number = 2 WHERE name = 'Dr. Juan Pérez';
```

---

## Paso 5: Personalizar Página "Nosotros"

### 5.1 Editar Contenido

Abre `app/nosotros/page.tsx` y personaliza:

```typescript
// Cambia el título principal
<h1>Sobre Nuestra Escribanía</h1>

// Cambia la descripción
<p>
  Desde [año], brindamos servicios notariales de excelencia en [ciudad].
  Nuestro compromiso es ofrecer asesoramiento legal profesional con
  calidez humana y atención personalizada.
</p>

// Actualiza la misión
<h2>Nuestra Misión</h2>
<p>
  Proporcionar servicios legales de la más alta calidad, garantizando
  seguridad jurídica y tranquilidad a nuestros clientes.
</p>

// Actualiza los valores
<h2>Nuestros Valores</h2>
<ul>
  <li>Integridad profesional</li>
  <li>Excelencia en el servicio</li>
  <li>Compromiso con el cliente</li>
  <li>Actualización constante</li>
</ul>
```

---

## Paso 6: Personalizar Página de Inicio

### 6.1 Editar Hero Section

Abre `components/hero-section.tsx`:

```typescript
// Cambia el título principal
<h1>Tu Escribanía de Confianza en [Ciudad]</h1>

// Cambia el subtítulo
<p>
  Más de [X] años brindando servicios notariales profesionales
  con excelencia y compromiso.
</p>

// Cambia el texto del botón
<Button>Solicitar Consulta</Button>
```

### 6.2 Actualizar Estadísticas

En `app/page.tsx`, busca la sección de estadísticas:

```typescript
const stats = [
  { value: "25+", label: "Años de Experiencia" },
  { value: "5000+", label: "Clientes Satisfechos" },
  { value: "10000+", label: "Documentos Procesados" },
  { value: "5", label: "Profesionales" },
];
```

Actualiza con tus propios números.

---

## Paso 7: Cambiar Logo e Imágenes

### 7.1 Preparar tu Logo

**Requisitos**:

- Formato: PNG con fondo transparente
- Tamaño: 200x60px (aproximado)
- Peso: Menos de 50KB

### 7.2 Agregar Logo

1. Guarda tu logo en `public/logo.png`
2. Abre `components/header.tsx`
3. Actualiza la referencia:

```typescript
<Image src="/logo.png" alt="Tu Escribanía" width={200} height={60} />
```

### 7.3 Cambiar Imagen Hero

1. Guarda tu imagen en `public/hero/`
2. Nombre sugerido: `hero-office.jpg`
3. Actualiza en `components/hero-section.tsx`

---

## Paso 8: Actualizar Meta Tags (SEO)

### 8.1 Editar Layout Principal

Abre `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Tu Escribanía - Servicios Notariales en [Ciudad]",
    template: `%s | Tu Escribanía`,
  },
  description:
    "Servicios notariales profesionales en [Ciudad]. Especializados en derecho corporativo, inmobiliario, sucesiones y escrituración.",
  keywords: [
    "Escribano [Ciudad]",
    "Notario [Ciudad]",
    "Servicios Notariales",
    "Escrituración",
    "Derecho Inmobiliario",
    // Agrega más keywords relevantes
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://tuescribania.com",
    title: "Tu Escribanía",
    description: "Servicios notariales profesionales en [Ciudad]",
  },
};
```

---

## ✅ Checklist de Verificación

Antes de continuar, verifica:

- [ ] Información de contacto actualizada
- [ ] Colores de marca configurados
- [ ] Servicios personalizados
- [ ] Miembros del equipo actualizados
- [ ] Página "Nosotros" personalizada
- [ ] Hero section actualizado
- [ ] Logo agregado
- [ ] Meta tags actualizados
- [ ] Todo se ve bien en el navegador

---

## 🎯 Próximos Pasos

**📘 Guía 06: Configurar SEO y Analytics**

En la siguiente guía aprenderás a:

- Configurar Google Analytics
- Optimizar meta tags
- Mejorar posicionamiento en buscadores
- Configurar Search Console

---

## 💡 Tips Profesionales

1. **Consistencia**: Usa los mismos colores en todo el sitio
2. **Profesionalismo**: Usa fotos de alta calidad
3. **Claridad**: Escribe descripciones claras y concisas
4. **Actualización**: Mantén la información siempre actualizada
5. **Testimonios**: Agrega testimonios reales de clientes (con permiso)

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

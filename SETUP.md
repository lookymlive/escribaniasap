# 🚀 Guía de Configuración - Plataforma Internacional de Escribanía

Esta guía te llevará paso a paso para configurar la plataforma desde cero.

## 📋 Pre-requisitos

- Node.js 18+ instalado
- Cuenta en Supabase (gratis)
- Cuenta en Resend (gratis hasta 3,000 emails/mes)
- Git instalado

## 📚 Documentación Completa

Para guías detalladas paso a paso, consulta la carpeta **`docs/`**:

👉 **[Ver Documentación Completa](./docs/README.md)**

Las guías incluyen:

1. Configuración Inicial del Proyecto
2. Configurar Supabase (Base de Datos)
3. Configurar Resend (Sistema de Emails)
4. Agregar Fotos del Equipo
5. Y mucho más...

## ⚡ Configuración Rápida (15 minutos)

### Paso 1: Clonar y Instalar Dependencias

```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd <nombre-proyecto>

# Instalar dependencias
pnpm install
# o
npm install
```

### Paso 2: Configurar Supabase

#### 2.1 Crear Proyecto en Supabase

1. Ve a [https://app.supabase.com](https://app.supabase.com)
2. Click en "New Project"
3. Completa:
   - **Name**: escribania-sebastian-paz (o tu nombre)
   - **Database Password**: Guarda esta contraseña de forma segura
   - **Region**: South America (São Paulo) - más cercano a Argentina
4. Click "Create new project" (toma ~2 minutos)

#### 2.2 Obtener las API Keys

1. En tu proyecto, ve a **Settings** (⚙️) > **API**
2. Copia estos valores:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon/public key**: `eyJhbGc...` (key larga)
   - **service_role key**: `eyJhbGc...` (otra key larga)

#### 2.3 Ejecutar Scripts de Base de Datos

1. En Supabase, ve a **SQL Editor**
2. Click "New Query"
3. Copia y pega el contenido de `scripts/001_create_schema.sql`
4. Click "Run" (▶️)
5. Repite para:
   - `scripts/002_seed_data.sql`
   - `scripts/003_seed_blog_posts.sql`
   - `scripts/004_create_webhook_functions.sql`

### Paso 3: Configurar Resend (Email)

#### 3.1 Crear Cuenta

1. Ve a [https://resend.com](https://resend.com)
2. Sign up con tu email
3. Verifica tu email

#### 3.2 Obtener API Key

1. En el dashboard, ve a **API Keys**
2. Click "Create API Key"
3. Nombre: "Escribania Production"
4. Click "Create"
5. **Copia la key inmediatamente** (solo se muestra una vez)

#### 3.3 Verificar Dominio (Opcional pero recomendado)

Para producción, verifica tu dominio:

1. Ve a **Domains**
2. Click "Add Domain"
3. Ingresa tu dominio: `escribanosebastianpaz.ar`
4. Agrega los registros DNS que te proporciona Resend
5. Espera verificación (~10 minutos)

### Paso 4: Crear Archivo .env.local

```bash
# Copiar el template
cp .env.example .env.local
```

Edita `.env.local` con tus valores reales:

```env
# SUPABASE (REQUERIDO)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# RESEND (REQUERIDO)
RESEND_API_KEY=re_123456789...
EMAIL_FROM=noreply@escribanosebastianpaz.ar
EMAIL_TO_ADMIN=escribanosebastianpaz@gmail.com

# SITE CONFIG
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Paso 5: Probar Localmente

```bash
# Iniciar servidor de desarrollo
pnpm dev
# o
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Paso 6: Agregar Fotos del Equipo

```bash
# Mover tus fotos a la carpeta correcta
# Las fotos deben estar en formato JPG o PNG
# Tamaño recomendado: 800x800px o 1000x1000px

# Ejemplo:
# Sebastian Ariel Paz.png -> public/team/sebastian-paz.jpg
```

Actualiza la base de datos con las URLs correctas:

```sql
-- En Supabase SQL Editor
UPDATE team_members
SET image_url = '/team/sebastian-paz.jpg'
WHERE name = 'Sebastián Ariel Paz';
```

## 🌐 Deploy a Producción

La aplicación es compatible con múltiples servicios de hosting.

**Tú manejarás el deployment por tu cuenta.**

Servicios compatibles:

- Vercel
- Netlify
- Railway
- Render
- AWS Amplify
- Servidor propio con Docker

Para instrucciones detalladas, consulta la documentación en `docs/`

## 🎨 Personalización

### Cambiar Colores y Branding

Edita `lib/constants.ts`:

```typescript
export const COLORS = {
  primary: "#003366", // Tu color primario
  secondary: "#D4A574", // Tu color secundario
  accent: "#2D5016", // Tu color de acento
};
```

### Cambiar Información de Contacto

Edita `lib/constants.ts`:

```typescript
export const SITE_NAME = "Tu Escribanía";
export const SITE_EMAIL = "tu@email.com";
export const SITE_PHONE = "+54 xxx xxx-xxxx";
export const SITE_ADDRESS = "Tu Dirección";
```

### Agregar/Editar Servicios

1. Ve a Supabase Dashboard
2. Abre **Table Editor** > **services**
3. Edita o agrega nuevos servicios

### Agregar Miembros del Equipo

1. Ve a Supabase Dashboard
2. Abre **Table Editor** > **team_members**
3. Agrega nuevos miembros con sus fotos

## 📊 Configurar Analytics (Opcional)

### Google Analytics 4

1. Ve a [https://analytics.google.com](https://analytics.google.com)
2. Crea una propiedad GA4
3. Copia el Measurement ID (G-XXXXXXXXXX)
4. Agrégalo a `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 🔒 Seguridad

### Checklist de Seguridad

- [ ] `.env.local` está en `.gitignore`
- [ ] Service role key nunca se expone en el cliente
- [ ] Row Level Security (RLS) está habilitado en Supabase
- [ ] Dominio verificado en Resend
- [ ] HTTPS habilitado en producción
- [ ] Variables de entorno configuradas en tu servicio de hosting

## 🐛 Troubleshooting

### Error: "Supabase client not initialized"

**Solución**: Verifica que las variables `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY` estén correctamente configuradas.

### Error: "Failed to send email"

**Solución**:

1. Verifica que `RESEND_API_KEY` sea correcta
2. Verifica que el dominio esté verificado en Resend
3. Revisa los logs en Resend dashboard

### Las imágenes no se muestran

**Solución**:

1. Verifica que las imágenes estén en `/public/`
2. Verifica que las URLs en la BD sean correctas
3. Reinicia el servidor de desarrollo

### Error de build en producción

**Solución**:

1. Verifica que todas las variables de entorno estén configuradas
2. Revisa los logs de build en tu servicio de hosting
3. Asegúrate de que `pnpm-lock.yaml` esté commiteado

## 📞 Soporte

Si tienes problemas:

1. Revisa la documentación en `README.md`
2. Revisa los logs de error
3. Verifica que todas las variables de entorno estén configuradas
4. Contacta al desarrollador

## ✅ Checklist Final

Antes de lanzar a producción:

- [ ] Base de datos configurada y poblada
- [ ] Todas las variables de entorno configuradas
- [ ] Fotos del equipo subidas y optimizadas
- [ ] Información de contacto actualizada
- [ ] Servicios configurados correctamente
- [ ] Formulario de contacto probado
- [ ] Emails funcionando correctamente
- [ ] SEO configurado (meta tags, sitemap)
- [ ] Analytics configurado
- [ ] Dominio personalizado configurado
- [ ] SSL/HTTPS habilitado
- [ ] Pruebas en móvil realizadas
- [ ] Pruebas de rendimiento realizadas

## 🎉 ¡Listo!

Tu plataforma está configurada y lista para usar. Ahora puedes:

1. Personalizar el contenido
2. Agregar más servicios
3. Publicar artículos en el blog
4. Recibir consultas de clientes
5. Replicar para otros escribanos

---

**Tiempo estimado de setup**: 15-30 minutos
**Nivel de dificultad**: Principiante-Intermedio

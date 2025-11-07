# 📘 Guía 02: Configurar Supabase (Base de Datos)

## Objetivo

Crear y configurar tu base de datos en Supabase con todas las tablas necesarias para la plataforma.

---

## ⏱️ Tiempo estimado: 15 minutos

---

## ¿Qué es Supabase?

Supabase es una plataforma que nos proporciona:

- 🗄️ Base de datos PostgreSQL
- 🔐 Sistema de autenticación
- 📦 Almacenamiento de archivos
- 🔒 Seguridad integrada

**Plan Gratuito**: Perfecto para empezar, incluye:

- 500 MB de base de datos
- 1 GB de almacenamiento de archivos
- 50,000 usuarios activos mensuales

---

## Paso 1: Crear Cuenta en Supabase

1. Ve a [https://supabase.com](https://supabase.com)
2. Click en **"Start your project"**
3. Elige una opción para registrarte:
   - GitHub (recomendado)
   - Google
   - Email

![Supabase Sign Up](https://supabase.com/images/index/products/database.svg)

---

## Paso 2: Crear un Nuevo Proyecto

1. Una vez dentro, click en **"New Project"**
2. Completa el formulario:

   **Name**: `escribania-sebastian-paz` (o el nombre que prefieras)

   **Database Password**:

   - Usa el generador automático o crea una contraseña fuerte
   - ⚠️ **GUARDA ESTA CONTRASEÑA** en un lugar seguro (la necesitarás después)

   **Region**: Selecciona **"South America (São Paulo)"**

   - Es la región más cercana a Argentina
   - Mejor rendimiento y menor latencia

   **Pricing Plan**: Selecciona **"Free"**

3. Click en **"Create new project"**

⏳ La creación del proyecto toma aproximadamente 2 minutos.

---

## Paso 3: Obtener las Claves de API

Una vez que el proyecto esté listo:

1. En el menú lateral, ve a **Settings** (⚙️)
2. Click en **API**
3. Verás una pantalla con varias claves

### 3.1 Copiar Project URL

En la sección **"Project URL"**, copia la URL completa:

```
https://abcdefghijklmnop.supabase.co
```

### 3.2 Copiar Anon/Public Key

En la sección **"Project API keys"**, busca **"anon" "public"** y copia la clave:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4NzI4MCwiZXhwIjoxOTU1MTYzMjgwfQ...
```

Esta clave es segura para usar en el navegador.

### 3.3 Copiar Service Role Key

En la misma sección, busca **"service_role"** y copia la clave:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NTg3MjgwLCJleHAiOjE5NTUxNjMyODB9...
```

⚠️ **IMPORTANTE**: Esta clave es SECRETA. Nunca la compartas ni la subas a Git.

---

## Paso 4: Configurar Variables de Entorno

Abre tu archivo `.env.local` y reemplaza los valores:

```env
# SUPABASE (REQUERIDO)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key-aqui
```

**Ejemplo real** (con datos ficticios):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xyzabcdefg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emFiY2RlZmciLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTU4NzI4MCwiZXhwIjoxOTU1MTYzMjgwfQ.abc123
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emFiY2RlZmciLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NTg3MjgwLCJleHAiOjE5NTUxNjMyODB9.xyz789
```

Guarda el archivo.

---

## Paso 5: Crear las Tablas de la Base de Datos

Ahora vamos a crear todas las tablas necesarias para la plataforma.

### 5.1 Abrir SQL Editor

1. En Supabase, ve al menú lateral
2. Click en **SQL Editor** (icono de código)
3. Click en **"New Query"**

### 5.2 Ejecutar Script de Creación de Esquema

1. Abre el archivo `scripts/001_create_schema.sql` de tu proyecto
2. Copia TODO el contenido
3. Pégalo en el SQL Editor de Supabase
4. Click en **"Run"** (▶️) en la esquina inferior derecha

✅ Deberías ver: **"Success. No rows returned"**

Esto creó las siguientes tablas:

- `profiles` - Perfiles de usuarios
- `services` - Servicios ofrecidos
- `team_members` - Miembros del equipo
- `blog_posts` - Artículos del blog
- `consultation_requests` - Consultas de clientes

### 5.3 Ejecutar Script de Datos Iniciales

1. Click en **"New Query"** nuevamente
2. Abre el archivo `scripts/002_seed_data.sql`
3. Copia y pega el contenido
4. Click en **"Run"** (▶️)

✅ Esto agregó datos de ejemplo para servicios y equipo.

### 5.4 Ejecutar Script de Blog Posts

1. Click en **"New Query"**
2. Abre el archivo `scripts/003_seed_blog_posts.sql`
3. Copia y pega el contenido
4. Click en **"Run"** (▶️)

✅ Esto agregó artículos de ejemplo al blog.

### 5.5 Ejecutar Script de Funciones (Opcional)

1. Click en **"New Query"**
2. Abre el archivo `scripts/004_create_webhook_functions.sql`
3. Copia y pega el contenido
4. Click en **"Run"** (▶️)

✅ Esto creó funciones para webhooks y notificaciones.

---

## Paso 6: Verificar las Tablas

1. En Supabase, ve a **Table Editor** (icono de tabla)
2. Deberías ver todas las tablas creadas:

   - profiles
   - services
   - team_members
   - blog_posts
   - consultation_requests

3. Click en cada tabla para ver los datos de ejemplo

---

## Paso 7: Probar la Conexión

Vuelve a tu proyecto y arranca el servidor:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000)

✅ **Si ves el sitio sin errores en la consola**, ¡la conexión funciona!

---

## Paso 8: Verificar Datos en el Sitio

1. Ve a [http://localhost:3000/servicios](http://localhost:3000/servicios)

   - Deberías ver los servicios cargados desde la base de datos

2. Ve a [http://localhost:3000/equipo](http://localhost:3000/equipo)

   - Deberías ver los miembros del equipo

3. Ve a [http://localhost:3000/blog](http://localhost:3000/blog)
   - Deberías ver los artículos del blog

---

## ✅ Checklist de Verificación

Antes de continuar, verifica:

- [ ] Proyecto creado en Supabase
- [ ] Las 3 claves copiadas a `.env.local`
- [ ] Los 4 scripts SQL ejecutados sin errores
- [ ] Las tablas visibles en Table Editor
- [ ] El sitio carga sin errores de Supabase
- [ ] Los datos se muestran en el sitio

---

## 🎯 Próximos Pasos

**📘 Guía 03: Configurar Resend (Sistema de Emails)**

En la siguiente guía aprenderás a:

- Crear cuenta en Resend
- Obtener API key
- Configurar emails transaccionales
- Probar el formulario de contacto

---

## 🆘 Problemas Comunes

### Error: "Invalid API key"

**Solución**:

- Verifica que copiaste las claves completas (son muy largas)
- Asegúrate de no tener espacios al inicio o final
- Reinicia el servidor después de cambiar `.env.local`

### Error: "relation does not exist"

**Solución**:

- Verifica que ejecutaste todos los scripts SQL
- Revisa que no haya errores en el SQL Editor
- Ejecuta los scripts en orden (001, 002, 003, 004)

### No veo datos en el sitio

**Solución**:

- Verifica en Table Editor que las tablas tengan datos
- Revisa la consola del navegador (F12) para ver errores
- Verifica que las políticas RLS estén configuradas correctamente

### Error: "Failed to fetch"

**Solución**:

- Verifica que la URL de Supabase sea correcta
- Verifica tu conexión a internet
- Intenta refrescar la página

---

## 📚 Recursos Adicionales

- [Documentación de Supabase](https://supabase.com/docs)
- [Guía de SQL para principiantes](https://supabase.com/docs/guides/database)
- [Row Level Security (RLS)](https://supabase.com/docs/guides/auth/row-level-security)

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

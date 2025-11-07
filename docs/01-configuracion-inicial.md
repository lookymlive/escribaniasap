# 📘 Guía 01: Configuración Inicial del Proyecto

## Objetivo

Configurar el proyecto desde cero con todas las dependencias y servicios necesarios.

---

## ⏱️ Tiempo estimado: 20 minutos

---

## 📋 Pre-requisitos

Antes de comenzar, asegúrate de tener instalado:

- ✅ Node.js 18 o superior ([Descargar](https://nodejs.org/))
- ✅ pnpm, npm o yarn
- ✅ Git ([Descargar](https://git-scm.com/))
- ✅ Editor de código (VS Code recomendado)

---

## Paso 1: Clonar o Descargar el Proyecto

### Opción A: Si tienes el proyecto en Git

```bash
git clone <url-de-tu-repositorio>
cd <nombre-del-proyecto>
```

### Opción B: Si tienes el proyecto localmente

```bash
cd ruta/a/tu/proyecto
```

---

## Paso 2: Instalar Dependencias

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Si usas pnpm (recomendado)
pnpm install

# Si usas npm
npm install

# Si usas yarn
yarn install
```

⏳ Esto tomará unos minutos. Verás muchas líneas de texto, es normal.

---

## Paso 3: Verificar la Instalación

Después de la instalación, verifica que todo esté correcto:

```bash
# Listar las dependencias instaladas
pnpm list --depth=0

# O con npm
npm list --depth=0
```

Deberías ver una lista de paquetes instalados sin errores.

---

## Paso 4: Revisar la Estructura del Proyecto

Tu proyecto debería tener esta estructura:

```
tu-proyecto/
├── app/                    # Páginas de la aplicación
├── components/             # Componentes reutilizables
├── lib/                    # Utilidades y configuración
├── public/                 # Archivos estáticos (imágenes, etc.)
├── scripts/                # Scripts SQL para la base de datos
├── docs/                   # Documentación (estás aquí)
├── .env.example            # Ejemplo de variables de entorno
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación principal
```

---

## Paso 5: Crear Archivo de Variables de Entorno

Las variables de entorno son configuraciones secretas que no se suben a Git.

```bash
# Copiar el archivo de ejemplo
cp .env.example .env.local
```

En Windows (CMD):

```cmd
copy .env.example .env.local
```

En Windows (PowerShell):

```powershell
Copy-Item .env.example .env.local
```

---

## Paso 6: Abrir el Archivo .env.local

Abre `.env.local` con tu editor de código. Verás algo como esto:

```env
# SUPABASE (REQUERIDO)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# RESEND (REQUERIDO)
RESEND_API_KEY=re_123456789...
EMAIL_FROM=noreply@tudominio.com
EMAIL_TO_ADMIN=tu@email.com

# SITE CONFIG
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

⚠️ **NO MODIFIQUES NADA TODAVÍA**. En las siguientes guías configuraremos cada servicio.

---

## Paso 7: Verificar que Git Ignore el Archivo .env.local

Es **CRÍTICO** que `.env.local` no se suba a Git porque contiene información sensible.

Abre `.gitignore` y verifica que contenga:

```
# local env files
.env*.local
.env.local
```

Si no está, agrégalo.

---

## Paso 8: Probar que el Proyecto Arranca (Sin Configurar)

Aunque no tenemos las variables configuradas, podemos verificar que el proyecto compile:

```bash
pnpm dev
```

Verás algo como:

```
▲ Next.js 16.0.0
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

🎉 **¡Perfecto!** El proyecto está instalado correctamente.

⚠️ **Nota**: Verás errores en la consola sobre Supabase. Es normal, los configuraremos en la siguiente guía.

---

## Paso 9: Detener el Servidor

Presiona `Ctrl + C` en la terminal para detener el servidor.

---

## ✅ Checklist de Verificación

Antes de continuar a la siguiente guía, verifica:

- [ ] Node.js instalado (versión 18+)
- [ ] Dependencias instaladas sin errores
- [ ] Archivo `.env.local` creado
- [ ] Archivo `.env.local` está en `.gitignore`
- [ ] El proyecto arranca con `pnpm dev`

---

## 🎯 Próximos Pasos

Ahora que el proyecto está instalado, continuaremos con:

**📘 Guía 02: Configurar Supabase (Base de Datos)**

En la siguiente guía aprenderás a:

- Crear una cuenta en Supabase
- Crear tu base de datos
- Obtener las claves de API
- Configurar las tablas necesarias

---

## 🆘 Problemas Comunes

### Error: "command not found: pnpm"

**Solución**: Instala pnpm globalmente:

```bash
npm install -g pnpm
```

### Error: "Node version too old"

**Solución**: Actualiza Node.js a la versión 18 o superior desde [nodejs.org](https://nodejs.org/)

### Error: "Cannot find module"

**Solución**: Borra `node_modules` y reinstala:

```bash
rm -rf node_modules
pnpm install
```

### El puerto 3000 está ocupado

**Solución**: Usa otro puerto:

```bash
pnpm dev -p 3001
```

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas con esta guía:

1. Revisa los errores en la terminal
2. Verifica que cumples todos los pre-requisitos
3. Consulta la sección de problemas comunes
4. Continúa con la siguiente guía, algunos errores se resolverán al configurar los servicios

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

# Guía de Deploy - Escribanía Sebastián Ariel Paz

## Requisitos Previos

1. Cuenta en Vercel (gratis en vercel.com)
2. Cuenta en GitHub
3. Cuenta en Supabase (gratis en supabase.com)
4. Dominio personalizado (opcional - escribanosebastianpaz.ar)

## Paso 1: Preparar Supabase

### 1.1 Crear Proyecto en Supabase
- Ir a supabase.com y crear una cuenta
- Crear un nuevo proyecto
- Copiar la URL y las claves (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY)

### 1.2 Ejecutar Scripts de Base de Datos
En la consola SQL de Supabase, ejecutar en orden:
1. `scripts/001_create_schema.sql` - Crear tablas
2. `scripts/002_seed_data.sql` - Insertar datos iniciales
3. `scripts/003_seed_blog_posts.sql` - Artículos del blog

## Paso 2: Deploy a Vercel

### 2.1 Conectar Repositorio GitHub
\`\`\`bash
# 1. Inicializar repositorio local
git init
git add .
git commit -m "Initial commit: Professional law firm website"

# 2. Crear repositorio en GitHub
# Ir a github.com, crear nuevo repositorio "escribania-web"

# 3. Push a GitHub
git remote add origin https://github.com/username/escribania-web.git
git branch -M main
git push -u origin main
\`\`\`

### 2.2 Deploy a Vercel
1. Ir a vercel.com y conectar con GitHub
2. Importar el repositorio "escribania-web"
3. Configurar variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (solo para server-side)
4. Deploy automático

## Paso 3: Configurar Dominio Personalizado

### 3.1 En Vercel
1. Ir a Project Settings > Domains
2. Agregar dominio personalizado: `escribanosebastianpaz.ar`
3. Seguir instrucciones para configurar DNS

### 3.2 En el Registrador de Dominio
Actualizar registros DNS según instrucciones de Vercel:
\`\`\`
CNAME: www -> cname.vercel-dns.com
A: 76.76.19.163
AAAA: 2610:7d0:0:0:0:0:0:1
\`\`\`

## Paso 4: Configuración Post-Deploy

### 4.1 Actualizar Información
Editar `/lib/constants.ts`:
\`\`\`ts
export const SITE_EMAIL = "escribanosebastianpaz@gmail.com"
export const SITE_PHONE = "+54 341 617-7159"
export const SITE_WHATSAPP = "+5493416177159"
export const SITE_ADDRESS = "Mendoza 7199, S2008 Rosario, Santa Fe"
\`\`\`

### 4.2 Reemplazar Fotos del Equipo
1. Crear carpeta `/public/team/`
2. Agregar fotos reales en lugar de ficticias:
   - `team-sebastian.jpg`
   - `team-mariana.jpg`
   - `team-carlos.jpg`
   - `team-laura.jpg`
   - `team-roberto.jpg`

### 4.3 Actualizar Contenido del Blog
Editar `/app/blog/page.tsx` con artículos reales o conectar con Supabase

### 4.4 Configurar Analytics
1. Ir a Vercel Analytics
2. Habilitar Web Analytics
3. Google Analytics: Agregar GA4 tag en `app/layout.tsx`

## Paso 5: Configurar Email de Contacto

### 5.1 Opción A: Resend (Recomendado)
\`\`\`bash
npm install resend
\`\`\`

Editar `/app/api/contact/route.ts`:
\`\`\`ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
// Implementar envío de emails
\`\`\`

### 5.2 Opción B: SendGrid
\`\`\`bash
npm install @sendgrid/mail
\`\`\`

## Paso 6: Monitoreo y Mantenimiento

### Verificar
- https://escribanosebastianpaz.ar carga correctamente
- Todas las páginas son accesibles
- Formulario de contacto funciona
- WhatsApp link funciona (+5493416177159)
- Email link funciona (escribanosebastianpaz@gmail.com)
- Mapa de Google funciona

### Actualización Semanal
- Revisar nuevas consultas en Supabase
- Actualizar blog con nuevos artículos
- Monitorear performance en Vercel Analytics

## Troubleshooting

### El sitio no carga
- Verificar variables de entorno en Vercel
- Revisar logs de Vercel (Deployments > Logs)
- Verificar conexión a Supabase

### Formulario de contacto no funciona
- Verificar API route en `/app/api/contact/route.ts`
- Configurar Resend/SendGrid API keys
- Revisar logs de servidor

### Emails no llegan
- Verificar RESEND_API_KEY está configurado
- Revisar spam/junk folder
- Confirmar dominios en Resend

## Próximas Mejoras Sugeridas

1. **Blog Dinámico**: Conectar blog a Supabase en lugar de datos hardcodeados
2. **Sistema de Citas**: Integrar calendly.com para agendar consultas
3. **Chatbot**: Agregar Intercom o similar para soporte automático
4. **Pagos**: Integrar Stripe para pagos de servicios
5. **CRM**: Sincronizar consultas con CRM externo

## Soporte

Para ayuda:
- Documentación Next.js: https://nextjs.org/docs
- Documentación Supabase: https://supabase.com/docs
- Documentación Vercel: https://vercel.com/docs

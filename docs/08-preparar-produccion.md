# 📘 Guía 08: Preparar para Producción

## Objetivo

Preparar tu sitio web para el lanzamiento público, asegurando que todo funcione correctamente y esté optimizado.

---

## ⏱️ Tiempo estimado: 45 minutos

---

## Paso 1: Checklist Pre-Lanzamiento

### 1.1 Contenido

- [ ] Toda la información de contacto es correcta
- [ ] Todas las fotos del equipo están subidas
- [ ] Todos los servicios están configurados
- [ ] Al menos 3 artículos publicados en el blog
- [ ] Página "Nosotros" personalizada
- [ ] Términos y condiciones actualizados
- [ ] Política de privacidad actualizada

### 1.2 Funcionalidad

- [ ] Formulario de contacto funciona
- [ ] Emails se envían correctamente
- [ ] Todas las páginas cargan sin errores
- [ ] Todos los links funcionan
- [ ] Imágenes se muestran correctamente
- [ ] Navegación funciona en móvil

### 1.3 SEO y Analytics

- [ ] Google Analytics configurado
- [ ] Search Console verificado
- [ ] Sitemap enviado
- [ ] Meta tags en todas las páginas
- [ ] Alt text en todas las imágenes
- [ ] Schema.org markup agregado

### 1.4 Performance

- [ ] Lighthouse score > 90
- [ ] Imágenes optimizadas
- [ ] Tiempo de carga < 3 segundos
- [ ] Sin errores en consola

---

## Paso 2: Pruebas en Diferentes Dispositivos

### 2.1 Desktop

Prueba en:

- [ ] Chrome
- [ ] Firefox
- [ ] Safari (si tienes Mac)
- [ ] Edge

### 2.2 Mobile

Prueba en:

- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] Tablet

### 2.3 Herramientas de Testing

**Responsive Design**:

1. Abre Chrome DevTools (F12)
2. Click en el icono de dispositivo móvil
3. Prueba diferentes tamaños:
   - iPhone 12 Pro
   - iPad
   - Galaxy S20

**BrowserStack** (opcional):

- [https://www.browserstack.com](https://www.browserstack.com)
- Prueba gratis en múltiples dispositivos

---

## Paso 3: Optimización de Performance

### 3.1 Ejecutar Lighthouse

1. Abre Chrome DevTools (F12)
2. Ve a la pestaña **Lighthouse**
3. Selecciona:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
4. Click **"Analyze page load"**

**Objetivos**:

- Performance: > 90
- Accessibility: > 90
- Best Practices: > 90
- SEO: > 90

### 3.2 Corregir Issues Comunes

**Performance**:

- Optimizar imágenes (WebP, compresión)
- Eliminar JavaScript no usado
- Minimizar CSS

**Accessibility**:

- Agregar alt text a imágenes
- Mejorar contraste de colores
- Agregar labels a formularios

**SEO**:

- Agregar meta descriptions
- Mejorar títulos de página
- Corregir links rotos

### 3.3 Optimizar Imágenes

**Herramientas**:

- [TinyPNG](https://tinypng.com/) - Compresión
- [Squoosh](https://squoosh.app/) - Conversión a WebP

**Proceso**:

1. Comprime todas las imágenes
2. Convierte a WebP cuando sea posible
3. Reemplaza en `public/`

---

## Paso 4: Configurar Variables de Producción

### 4.1 Revisar .env.local

Asegúrate de tener todas las variables:

```env
# SUPABASE (REQUERIDO)
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# RESEND (REQUERIDO)
RESEND_API_KEY=re_...
EMAIL_FROM=noreply@tuescribania.com
EMAIL_TO_ADMIN=contacto@tuescribania.com

# SITE CONFIG
NEXT_PUBLIC_SITE_URL=https://tuescribania.com

# GOOGLE ANALYTICS
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 4.2 Verificar Dominio en Resend

Si usas tu propio dominio para emails:

1. Ve a [Resend Dashboard](https://resend.com/domains)
2. Verifica que tu dominio esté verificado (✅ verde)
3. Si no, agrega los registros DNS necesarios

---

## Paso 5: Configurar Dominio

### 5.1 Comprar Dominio

**Proveedores recomendados**:

- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Google Domains](https://domains.google)

**Sugerencias de dominio**:

- `tuescribania.com`
- `escribano[tunombre].com`
- `notaria[tunombre].com.ar`

### 5.2 Configurar DNS

Depende de dónde hagas el deployment (lo harás por tu cuenta).

**Ejemplo para deployment genérico**:

Agrega estos registros DNS:

| Type  | Name | Value             |
| ----- | ---- | ----------------- |
| A     | @    | IP de tu servidor |
| CNAME | www  | tu-dominio.com    |

---

## Paso 6: Build de Producción

### 6.1 Crear Build Local

Prueba que el build funcione:

```bash
# Crear build de producción
pnpm build

# Probar build localmente
pnpm start
```

Abre [http://localhost:3000](http://localhost:3000) y verifica que todo funcione.

### 6.2 Verificar Errores

Si hay errores en el build:

- Lee los mensajes de error cuidadosamente
- Corrige los problemas
- Vuelve a intentar

**Errores comunes**:

- Variables de entorno faltantes
- Imports incorrectos
- TypeScript errors

---

## Paso 7: Configurar HTTPS

### 7.1 Obtener Certificado SSL

**Opciones**:

1. **Let's Encrypt** (Gratis):

   - [https://letsencrypt.org](https://letsencrypt.org)
   - Certificado gratuito y automático

2. **Cloudflare** (Gratis):

   - [https://www.cloudflare.com](https://www.cloudflare.com)
   - SSL + CDN incluido

3. **Tu hosting**:
   - Muchos hostings incluyen SSL gratis

### 7.2 Forzar HTTPS

En tu configuración de servidor o hosting, fuerza HTTPS:

- Redirige HTTP → HTTPS
- Usa HSTS headers

---

## Paso 8: Configurar Backups

### 8.1 Backup de Base de Datos

**Supabase** hace backups automáticos, pero también:

1. Ve a Supabase Dashboard
2. Settings > Database
3. Descarga backup manual
4. Guárdalo en lugar seguro

**Frecuencia recomendada**:

- Antes de cambios importantes
- Semanalmente (automático)

### 8.2 Backup de Código

```bash
# Asegúrate de que todo esté en Git
git add .
git commit -m "Pre-production backup"
git push origin main

# Crear tag de versión
git tag -a v1.0.0 -m "Production release v1.0.0"
git push origin v1.0.0
```

### 8.3 Backup de Archivos

Copia la carpeta `public/` a un lugar seguro:

- Google Drive
- Dropbox
- Disco externo

---

## Paso 9: Monitoreo y Alertas

### 9.1 Uptime Monitoring

**UptimeRobot** (Gratis):

1. Ve a [https://uptimerobot.com](https://uptimerobot.com)
2. Crea cuenta
3. Agrega tu sitio
4. Configura alertas por email

**Configuración**:

- Intervalo: 5 minutos
- Alerta si: Down por 2 minutos
- Notificar a: tu email

### 9.2 Error Tracking (Opcional)

**Sentry** (Gratis hasta 5,000 eventos/mes):

1. Ve a [https://sentry.io](https://sentry.io)
2. Crea proyecto Next.js
3. Sigue instrucciones de instalación

---

## Paso 10: Lanzamiento

### 10.1 Checklist Final

- [ ] Build de producción funciona
- [ ] Dominio configurado
- [ ] HTTPS habilitado
- [ ] Variables de entorno configuradas
- [ ] Backups realizados
- [ ] Monitoreo configurado
- [ ] Google Analytics funcionando
- [ ] Formulario de contacto probado

### 10.2 Deployment

**Tú manejarás el deployment por tu cuenta.**

Opciones populares:

- Vercel
- Netlify
- Railway
- Render
- Servidor propio con Docker

### 10.3 Verificación Post-Deployment

Después del deployment:

1. **Verifica el sitio**:

   - Abre tu dominio
   - Navega por todas las páginas
   - Prueba el formulario de contacto

2. **Verifica Analytics**:

   - Ve a Google Analytics
   - Verifica que esté trackeando visitas

3. **Verifica Search Console**:
   - Envía sitemap nuevamente
   - Solicita indexación

---

## Paso 11: Anunciar el Lanzamiento

### 11.1 Redes Sociales

Publica en:

- Facebook
- Instagram
- LinkedIn
- WhatsApp Status

**Ejemplo de post**:

```
🎉 ¡Estrenamos sitio web!

Ahora puedes:
✅ Conocer nuestros servicios
✅ Agendar consultas online
✅ Contactarnos fácilmente

Visítanos: tuescribania.com

#Escribanía #ServiciosLegales #[TuCiudad]
```

### 11.2 Email

Envía email a:

- Clientes anteriores
- Contactos profesionales
- Lista de prospectos

### 11.3 Google My Business

Actualiza tu perfil:

- Agrega el nuevo sitio web
- Publica actualización
- Agrega fotos

---

## Paso 12: Mantenimiento Continuo

### 12.1 Tareas Semanales

- [ ] Revisar Google Analytics
- [ ] Responder consultas del formulario
- [ ] Revisar uptime monitoring

### 12.2 Tareas Mensuales

- [ ] Publicar artículo en blog
- [ ] Revisar Search Console
- [ ] Actualizar contenido si es necesario
- [ ] Backup manual de base de datos

### 12.3 Tareas Trimestrales

- [ ] Ejecutar Lighthouse audit
- [ ] Actualizar dependencias
- [ ] Revisar y actualizar precios/servicios
- [ ] Analizar métricas y ajustar estrategia

---

## ✅ Checklist Completo de Producción

### Contenido

- [ ] Información de contacto correcta
- [ ] Fotos del equipo subidas
- [ ] Servicios configurados
- [ ] Blog con artículos
- [ ] Páginas legales actualizadas

### Funcionalidad

- [ ] Formulario funciona
- [ ] Emails se envían
- [ ] Sin errores en consola
- [ ] Responsive en móvil

### SEO

- [ ] Google Analytics
- [ ] Search Console
- [ ] Meta tags
- [ ] Sitemap

### Performance

- [ ] Lighthouse > 90
- [ ] Imágenes optimizadas
- [ ] Carga < 3s

### Seguridad

- [ ] HTTPS habilitado
- [ ] Variables de entorno seguras
- [ ] Backups configurados

### Deployment

- [ ] Build funciona
- [ ] Dominio configurado
- [ ] Monitoreo activo

---

## 🎉 ¡Felicitaciones!

Tu sitio web está listo para producción. Ahora puedes:

1. ✅ Recibir consultas de clientes
2. ✅ Mostrar tu profesionalismo
3. ✅ Mejorar tu presencia online
4. ✅ Generar más negocios

---

## 📞 Soporte Post-Lanzamiento

Si encuentras problemas:

1. Revisa los logs de error
2. Consulta la documentación
3. Revisa las guías anteriores
4. Contacta soporte de tu hosting

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

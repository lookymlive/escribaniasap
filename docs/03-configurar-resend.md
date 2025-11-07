# 📘 Guía 03: Configurar Resend (Sistema de Emails)

## Objetivo

Configurar el servicio de emails transaccionales para que el formulario de contacto funcione correctamente.

---

## ⏱️ Tiempo estimado: 10 minutos

---

## ¿Qué es Resend?

Resend es un servicio moderno de emails transaccionales que nos permite:

- 📧 Enviar emails desde nuestra aplicación
- ✅ Confirmaciones automáticas a clientes
- 📬 Notificaciones al administrador
- 📊 Seguimiento de entregas

**Plan Gratuito**:

- 3,000 emails por mes
- 100 emails por día
- Perfecto para empezar

---

## Paso 1: Crear Cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Click en **"Sign Up"** (esquina superior derecha)
3. Elige una opción para registrarte:

   - GitHub (recomendado)
   - Google
   - Email

4. Completa el registro y verifica tu email

---

## Paso 2: Crear API Key

Una vez dentro del dashboard:

1. En el menú lateral, click en **"API Keys"**
2. Click en **"Create API Key"**
3. Completa el formulario:

   **Name**: `Escribania Production` (o el nombre que prefieras)

   **Permission**: Selecciona **"Sending access"**

   **Domain**: Deja en blanco por ahora (lo configuraremos después)

4. Click en **"Create"**

5. ⚠️ **IMPORTANTE**: Copia la API key inmediatamente
   - Se muestra solo UNA VEZ
   - Tiene formato: `re_123abc456def789...`
   - Si la pierdes, tendrás que crear una nueva

---

## Paso 3: Configurar Variables de Entorno

Abre tu archivo `.env.local` y agrega/actualiza:

```env
# RESEND (REQUERIDO)
RESEND_API_KEY=re_tu_api_key_aqui
EMAIL_FROM=noreply@escribanosebastianpaz.ar
EMAIL_TO_ADMIN=escribanosebastianpaz@gmail.com
```

**Explicación**:

- `RESEND_API_KEY`: La clave que acabas de copiar
- `EMAIL_FROM`: Email desde el cual se enviarán los mensajes
- `EMAIL_TO_ADMIN`: Tu email donde recibirás las consultas

**Ejemplo real**:

```env
RESEND_API_KEY=re_abc123def456ghi789jkl012mno345pqr678
EMAIL_FROM=noreply@escribanosebastianpaz.ar
EMAIL_TO_ADMIN=escribanosebastianpaz@gmail.com
```

Guarda el archivo.

---

## Paso 4: Probar con Email de Prueba (Desarrollo)

Para desarrollo, Resend permite usar emails de prueba sin verificar dominio.

### 4.1 Modificar Temporalmente EMAIL_FROM

Para pruebas iniciales, usa:

```env
EMAIL_FROM=onboarding@resend.dev
```

Este es un email especial de Resend para pruebas.

### 4.2 Reiniciar el Servidor

```bash
# Detén el servidor (Ctrl + C)
# Inicia nuevamente
pnpm dev
```

### 4.3 Probar el Formulario de Contacto

1. Ve a [http://localhost:3000/contacto](http://localhost:3000/contacto)
2. Completa el formulario:

   - Nombre: Tu Nombre
   - Email: tu@email.com
   - Teléfono: +54 341 123-4567
   - Servicio: Cualquiera
   - Mensaje: "Prueba de formulario"

3. Click en **"Enviar Consulta"**

4. Deberías ver un mensaje de éxito

### 4.4 Verificar en Resend Dashboard

1. Ve a Resend Dashboard
2. Click en **"Emails"** en el menú lateral
3. Deberías ver el email enviado con estado **"Delivered"**

✅ Si ves el email, ¡funciona correctamente!

---

## Paso 5: Verificar tu Dominio (Producción)

Para usar tu propio dominio en producción (ej: `noreply@escribanosebastianpaz.ar`), necesitas verificarlo.

### 5.1 Agregar Dominio en Resend

1. En Resend, ve a **"Domains"**
2. Click en **"Add Domain"**
3. Ingresa tu dominio: `escribanosebastianpaz.ar`
4. Click en **"Add"**

### 5.2 Configurar Registros DNS

Resend te mostrará registros DNS que debes agregar:

**Ejemplo de registros**:

| Type | Name               | Value                           |
| ---- | ------------------ | ------------------------------- |
| TXT  | @                  | `resend-verification=abc123...` |
| MX   | @                  | `feedback-smtp.resend.com`      |
| TXT  | resend.\_domainkey | `p=MIGfMA0GCSqGSIb3...`         |

### 5.3 Agregar Registros en tu Proveedor de Dominio

Dependiendo de dónde compraste tu dominio:

**Si usas Cloudflare**:

1. Ve a tu dashboard de Cloudflare
2. Selecciona tu dominio
3. Ve a **DNS** > **Records**
4. Click **"Add record"**
5. Agrega cada registro de la tabla

**Si usas GoDaddy, Namecheap, etc.**:

1. Busca la sección de DNS Management
2. Agrega los registros proporcionados por Resend

### 5.4 Verificar el Dominio

1. Vuelve a Resend
2. Click en **"Verify"** junto a tu dominio
3. Espera unos minutos (puede tomar hasta 48 horas)
4. Cuando esté verificado, verás un ✅ verde

### 5.5 Actualizar EMAIL_FROM

Una vez verificado, actualiza `.env.local`:

```env
EMAIL_FROM=noreply@escribanosebastianpaz.ar
```

---

## Paso 6: Personalizar Templates de Email (Opcional)

Puedes personalizar los emails que se envían.

### 6.1 Ubicación de Templates

Los templates están en: `app/api/contact/route.ts`

### 6.2 Ejemplo de Personalización

Busca la sección de email y modifica:

```typescript
// Email al cliente
const clientEmail = {
  from: process.env.EMAIL_FROM,
  to: email,
  subject: "✅ Consulta Recibida - Escribanía Sebastián Ariel Paz",
  html: `
    <h2>Gracias por contactarnos</h2>
    <p>Hola ${name},</p>
    <p>Hemos recibido tu consulta y te responderemos a la brevedad.</p>
    <p><strong>Detalles de tu consulta:</strong></p>
    <ul>
      <li>Servicio: ${serviceType}</li>
      <li>Mensaje: ${message}</li>
    </ul>
    <p>Saludos,<br>Escribanía Sebastián Ariel Paz</p>
  `,
};
```

---

## ✅ Checklist de Verificación

Antes de continuar, verifica:

- [ ] Cuenta creada en Resend
- [ ] API Key copiada y guardada en `.env.local`
- [ ] Emails de prueba funcionando
- [ ] Formulario de contacto envía emails correctamente
- [ ] Recibes notificaciones en tu email
- [ ] (Opcional) Dominio verificado para producción

---

## 🎯 Próximos Pasos

**📘 Guía 04: Agregar Fotos del Equipo**

En la siguiente guía aprenderás a:

- Organizar las fotos profesionales
- Optimizar imágenes para web
- Actualizar la base de datos con las fotos
- Mostrar las fotos en el sitio

---

## 🆘 Problemas Comunes

### Error: "Invalid API key"

**Solución**:

- Verifica que copiaste la key completa
- Asegúrate de que empiece con `re_`
- Reinicia el servidor después de cambiar `.env.local`

### Error: "Failed to send email"

**Solución**:

- Verifica que la API key sea correcta
- Usa `onboarding@resend.dev` para pruebas
- Revisa los logs en Resend Dashboard

### No recibo los emails

**Solución**:

- Revisa tu carpeta de spam
- Verifica que `EMAIL_TO_ADMIN` sea correcto
- Revisa el estado en Resend Dashboard > Emails

### Error: "Domain not verified"

**Solución**:

- Usa `onboarding@resend.dev` para desarrollo
- Verifica que agregaste todos los registros DNS
- Espera hasta 48 horas para propagación DNS
- Usa herramientas como [MXToolbox](https://mxtoolbox.com/) para verificar DNS

### Los emails van a spam

**Solución**:

- Verifica tu dominio en Resend
- Agrega registros SPF, DKIM y DMARC
- Usa un dominio profesional (no Gmail/Hotmail)
- Evita palabras spam en el asunto

---

## 📚 Recursos Adicionales

- [Documentación de Resend](https://resend.com/docs)
- [Verificación de Dominio](https://resend.com/docs/dashboard/domains/introduction)
- [Templates de Email](https://resend.com/docs/send-with-nextjs)
- [Mejores Prácticas de Email](https://resend.com/docs/knowledge-base/deliverability)

---

## 💡 Tips Profesionales

1. **Usa un dominio profesional**: `noreply@tudominio.com` en lugar de Gmail
2. **Personaliza los emails**: Agrega tu logo y colores de marca
3. **Monitorea las entregas**: Revisa regularmente el dashboard de Resend
4. **Configura webhooks**: Para recibir notificaciones de bounces y quejas
5. **Respeta las leyes**: Incluye opción de unsubscribe en emails marketing

---

**Autor**: Tu Nombre  
**Última actualización**: 2025-11-07  
**Versión**: 1.0

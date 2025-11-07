# Checklist de Actualización de Contenido

## Información de la Empresa

- [ ] Actualizar nombre: `/lib/constants.ts` - SITE_NAME
- [ ] Actualizar email: `/lib/constants.ts` - SITE_EMAIL
- [ ] Actualizar teléfono: `/lib/constants.ts` - SITE_PHONE
- [ ] Actualizar WhatsApp: `/lib/constants.ts` - SITE_WHATSAPP
- [ ] Actualizar dirección: `/lib/constants.ts` - SITE_ADDRESS
- [ ] Actualizar descripción: `/lib/constants.ts` - SITE_DESCRIPTION
- [ ] Actualizar años de experiencia: `/app/page.tsx` y `/lib/constants.ts`

## Fotos del Equipo

### Reemplazar en `/public/`
- [ ] `team-sebastian.jpg` - Foto de Sebastián Ariel Paz
- [ ] `team-mariana.jpg` - Foto de Mariana González
- [ ] `team-carlos.jpg` - Foto de Carlos Mendez
- [ ] `team-laura.jpg` - Foto de Laura Fernández
- [ ] `team-roberto.jpg` - Foto de Roberto Silva
- [ ] `hero-office.jpg` - Foto de la oficina

### Requisitos de Fotos
- Formato: JPG o PNG
- Tamaño: Mínimo 400x500px para equipos, 1200x800px para hero
- Estilo: Profesional, fondo uniforme claro

## Información del Equipo

Editar `/app/equipo/page.tsx`:
- [ ] Actualizar nombre y foto de cada profesional
- [ ] Actualizar título/rol
- [ ] Actualizar especialidad
- [ ] Actualizar biografía

Editar en Supabase tabla `team_members`:
\`\`\`sql
UPDATE team_members SET 
  name = 'Nombre Real',
  title = 'Cargo',
  specialty = 'Especialidad',
  bio = 'Biografía'
WHERE id = 'uuid';
\`\`\`

## Servicios Ofrecidos

Revisar `/app/servicios/page.tsx` y `/components/services-preview.tsx`:
- [ ] Validar 5 servicios principales
- [ ] Agregar/eliminar servicios según necesidad
- [ ] Actualizar descripciones
- [ ] Actualizar emojis de servicios

En Supabase tabla `services`:
\`\`\`sql
UPDATE services SET
  description = 'Descripción actualizada'
WHERE slug = 'derecho-corporativo';
\`\`\`

## Blog y Artículos

### Crear nuevos artículos
Editar `/app/blog/page.tsx`:
1. Agregar objeto a `blogPosts` array
2. Incluir: título, excerpt, fecha, autor, categoría

Alternativa - En Supabase tabla `blog_posts`:
\`\`\`sql
INSERT INTO blog_posts (title, slug, content, excerpt, author_id, published)
VALUES ('Título', 'slug-url', 'Contenido HTML', 'Excerpt', NULL, true);
\`\`\`

Artículos recomendados:
- [ ] Guía de constitución de empresas
- [ ] Recomendaciones para compra de inmuebles
- [ ] Importancia de testamentos
- [ ] Derechos del locatario
- [ ] Contratos laborales

## Página "Nosotros"

Editar `/app/nosotros/page.tsx`:
- [ ] Actualizar historia de la firma
- [ ] Actualizar misión
- [ ] Actualizar visión
- [ ] Actualizar valores
- [ ] Actualizar certificaciones/membresías

## Página de Contacto

Editar `/app/contacto/page.tsx`:
- [ ] Verificar ubicación correcta
- [ ] Actualizar horarios de atención
- [ ] Verificar mapa de Google (embed)
- [ ] Configurar email destino del formulario

## SEO y Metadata

Editar `/app/layout.tsx`:
- [ ] Actualizar meta description
- [ ] Actualizar keywords
- [ ] Agregar Open Graph image
- [ ] Configurar canonical URL

Para cada página:
- [ ] Actualizar títulos (H1)
- [ ] Agregar meta descriptions
- [ ] Optimizar keywords naturales

## Redes Sociales

Editar `/lib/constants.ts` y footer:
- [ ] LinkedIn URL
- [ ] Instagram URL
- [ ] Facebook URL
- [ ] WhatsApp link
- [ ] Agreguen en footer y header

## Términos y Condiciones

Editar `/app/terminos/page.tsx`:
- [ ] Revisar y actualizar términos legales
- [ ] Agregar cláusulas específicas según jurisdicción
- [ ] Consultar con asesor legal

## Política de Privacidad

Editar `/app/privacidad/page.tsx`:
- [ ] Actualizar datos de contacto del responsable
- [ ] Revisar políticas de protección de datos
- [ ] Cumplir con RGPD/LGPD si aplica
- [ ] Consultar con especialista en privacidad

## Integraciones

### Email de Contacto
- [ ] Configurar Resend API key
- [ ] Prueba de envío de email
- [ ] Verificar emails lleguen a bandeja entrada

### WhatsApp
- [ ] Validar número de WhatsApp
- [ ] Probar link en dispositivo móvil
- [ ] Configurar mensaje automático en WhatsApp

### Google Analytics
- [ ] Crear propiedad en GA4
- [ ] Agregar Tracking ID en app
- [ ] Verificar datos se registran

### Google Maps
- [ ] Verificar embed de mapa funciona
- [ ] Actualizar ubicación si cambió

## Testing Final

- [ ] Verificar en desktop (Chrome, Firefox, Safari)
- [ ] Verificar en tablet (iPad)
- [ ] Verificar en mobile (iOS, Android)
- [ ] Probar todos los links funcionan
- [ ] Probar formulario de contacto
- [ ] Probar que las imágenes cargan correctamente
- [ ] Verificar que los videos (si aplica) funcionan
- [ ] Prueba de velocidad en Lighthouse (>90)

## Performance

- [ ] Ejecutar Lighthouse audit
- [ ] Optimizar imágenes grandes
- [ ] Revisar Core Web Vitals
- [ ] Verificar cache headers

## Backup y Seguridad

- [ ] Configurar backups automáticos en Supabase
- [ ] Revisar Row Level Security (RLS) en tablas
- [ ] Verificar HTTPS está habilitado
- [ ] Configurar firewall de aplicación (WAF)

## Documentación

- [ ] Actualizar README.md
- [ ] Documentar cambios realizados
- [ ] Crear backups de versiones anteriores
- [ ] Documentar credenciales en lugar seguro

---

**Última revisión**: 2025-11-07

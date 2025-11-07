# Implementation Plan

## Overview

Este plan de implementación desglosa el diseño en tareas concretas y ejecutables. Cada tarea está diseñada para ser completada de forma incremental, construyendo sobre las tareas anteriores.

## Task List

- [ ] 1. Configurar variables de entorno y validación

  - Crear sistema de validación de variables de entorno
  - Implementar función getEnvConfig() con tipos seguros
  - Agregar validación al inicio de la aplicación
  - Documentar todas las variables en .env.example
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [ ] 2. Implementar sistema de gestión de imágenes del equipo

  - [ ] 2.1 Crear estructura de carpetas para imágenes

    - Crear carpeta public/team/ si no existe
    - Crear carpeta public/services/ si no existe
    - Crear carpeta public/hero/ si no existe
    - _Requirements: 2.1, 3.1_

  - [ ] 2.2 Implementar servicio de optimización de imágenes

    - Crear lib/services/image.service.ts
    - Implementar función uploadTeamPhoto()
    - Implementar función optimizeImage()
    - Implementar función getImageUrl()
    - _Requirements: 2.2, 2.3, 2.4_

  - [ ] 2.3 Crear script para mover fotos existentes

    - Detectar fotos en raíz del proyecto
    - Mover a public/team/ con nombres normalizados
    - Actualizar base de datos con nuevas URLs
    - _Requirements: 2.1, 2.4_

  - [ ]\* 2.4 Agregar tests para servicio de imágenes
    - Test de upload de fotos
    - Test de optimización
    - Test de generación de URLs
    - _Requirements: 2.2, 2.3, 2.4_

- [ ] 3. Organizar estructura de proyecto escalable

  - [ ] 3.1 Crear estructura de carpetas

    - Crear lib/config/ para configuraciones
    - Crear lib/services/ para lógica de negocio
    - Crear lib/hooks/ para custom hooks
    - Crear components/shared/ para componentes compartidos
    - Crear components/features/ para componentes específicos
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ] 3.2 Mover componentes existentes a nueva estructura

    - Mover componentes compartidos a components/shared/
    - Organizar componentes por feature
    - Actualizar imports en toda la aplicación
    - _Requirements: 3.2, 3.3_

  - [ ] 3.3 Crear archivo de configuración de sitio
    - Crear lib/config/site.ts
    - Migrar constantes de lib/constants.ts
    - Implementar función getSiteConfig()
    - _Requirements: 3.2, 3.5_

- [ ] 4. Implementar sistema de internacionalización (i18n)

  - [ ] 4.1 Configurar estructura de traducciones

    - Crear carpeta locales/ con subcarpetas es/, en/, pt/
    - Crear archivos common.json, services.json, forms.json para cada idioma
    - Definir estructura de claves de traducción
    - _Requirements: 4.1, 4.2, 4.5_

  - [ ] 4.2 Implementar sistema de traducciones

    - Crear lib/config/i18n.ts
    - Implementar hook useTranslation()
    - Implementar función getTranslations()
    - Implementar detección de idioma del navegador
    - _Requirements: 4.1, 4.2, 4.3_

  - [ ] 4.3 Crear componente de selector de idioma

    - Crear components/shared/language-switcher.tsx
    - Implementar persistencia de preferencia en cookies
    - Agregar al header del sitio
    - _Requirements: 4.2, 4.3_

  - [ ] 4.4 Traducir contenido estático existente

    - Traducir navegación y botones
    - Traducir formularios y validaciones
    - Traducir mensajes de error y éxito
    - _Requirements: 4.1, 4.5_

  - [ ] 4.5 Implementar traducciones dinámicas en base de datos
    - Crear tabla translations en Supabase
    - Implementar función getTranslatedContent()
    - Agregar traducciones para servicios
    - Agregar traducciones para miembros del equipo
    - _Requirements: 4.5_

- [ ] 5. Mejorar sistema de emails con Resend

  - [ ] 5.1 Crear servicio de emails

    - Crear lib/services/email.service.ts
    - Implementar sendContactConfirmation()
    - Implementar sendAdminNotification()
    - Implementar manejo de errores
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ] 5.2 Crear templates HTML profesionales

    - Diseñar template de confirmación para cliente
    - Diseñar template de notificación para admin
    - Agregar branding (colores, logo)
    - Hacer templates responsive
    - _Requirements: 6.3_

  - [ ] 5.3 Actualizar API route de contacto

    - Actualizar app/api/contact/route.ts
    - Usar nuevo servicio de emails
    - Agregar validación con Zod
    - Mejorar manejo de errores
    - _Requirements: 6.1, 6.2, 6.5_

  - [ ]\* 5.4 Agregar tests para servicio de emails
    - Test de envío de confirmación
    - Test de envío de notificación
    - Test de manejo de errores
    - _Requirements: 6.1, 6.2, 6.5_

- [ ] 6. Implementar Google Analytics y tracking

  - [ ] 6.1 Configurar Google Analytics 4

    - Agregar variable NEXT_PUBLIC_GA_MEASUREMENT_ID
    - Crear componente GoogleAnalytics
    - Agregar script de GA4 al layout
    - _Requirements: 7.1, 7.2_

  - [ ] 6.2 Implementar tracking de eventos

    - Trackear envío de formulario de contacto
    - Trackear clics en WhatsApp
    - Trackear clics en teléfono
    - Trackear navegación entre páginas
    - _Requirements: 7.2_

  - [ ] 6.3 Crear banner de consentimiento de cookies

    - Crear componente CookieConsent
    - Implementar lógica de aceptación/rechazo
    - Persistir preferencia en localStorage
    - Cumplir con GDPR
    - _Requirements: 7.3_

  - [ ] 6.4 Crear dashboard de métricas básico
    - Crear página /admin/analytics
    - Mostrar métricas clave (visitas, conversiones)
    - Agregar gráficos con recharts
    - _Requirements: 7.4, 7.5_

- [ ] 7. Optimizar SEO y meta tags

  - [ ] 7.1 Mejorar meta tags existentes

    - Actualizar Open Graph tags
    - Agregar Twitter Card tags
    - Agregar Schema.org markup (LocalBusiness)
    - Agregar Schema.org markup (LegalService)
    - _Requirements: 8.3, 8.4_

  - [ ] 7.2 Optimizar sitemap y robots.txt

    - Verificar sitemap.xml incluye todas las páginas
    - Optimizar robots.txt
    - Agregar sitemap a Google Search Console
    - _Requirements: 8.1, 8.2_

  - [ ] 7.3 Optimizar imágenes para SEO

    - Agregar alt text descriptivo a todas las imágenes
    - Implementar lazy loading
    - Convertir imágenes a formato WebP
    - _Requirements: 8.5_

  - [ ] 7.4 Agregar hreflang tags para i18n
    - Implementar tags hreflang en layout
    - Configurar URLs canónicas por idioma
    - _Requirements: 8.3_

- [ ] 8. Crear documentación completa

  - [ ] 8.1 Completar guías en docs/

    - Crear docs/05-personalizar-contenido.md
    - Crear docs/06-configurar-seo-analytics.md
    - Crear docs/07-gestionar-blog.md
    - Crear docs/08-preparar-produccion.md
    - _Requirements: 9.1, 9.3, 9.5_

  - [ ] 8.2 Actualizar README.md principal

    - Agregar badges (build status, version)
    - Mejorar sección de features
    - Agregar screenshots
    - Actualizar instrucciones de instalación
    - _Requirements: 9.1, 9.5_

  - [ ] 8.3 Crear guía de personalización
    - Documentar cómo cambiar colores
    - Documentar cómo cambiar contenido
    - Documentar cómo agregar servicios
    - Documentar cómo agregar miembros del equipo
    - _Requirements: 9.5_

- [ ] 9. Implementar sistema de citas online (Fase 1)

  - [ ] 9.1 Crear tabla de appointments en Supabase

    - Ejecutar script SQL para crear tabla
    - Configurar RLS policies
    - Agregar índices para performance
    - _Requirements: 10.1, 10.2_

  - [ ] 9.2 Crear servicio de appointments

    - Crear lib/services/appointment.service.ts
    - Implementar función createAppointment()
    - Implementar función getAvailableSlots()
    - Implementar validación de disponibilidad
    - _Requirements: 10.1, 10.2_

  - [ ] 9.3 Crear componente de calendario

    - Crear components/features/appointment-calendar.tsx
    - Implementar selección de fecha
    - Implementar selección de hora
    - Mostrar slots disponibles
    - _Requirements: 10.1_

  - [ ] 9.4 Crear página de reserva de citas

    - Crear app/citas/page.tsx
    - Integrar calendario
    - Agregar formulario de datos del cliente
    - Implementar confirmación
    - _Requirements: 10.1, 10.2_

  - [ ] 9.5 Implementar emails de confirmación de citas

    - Agregar sendAppointmentConfirmation() al email service
    - Crear template de email de confirmación
    - Enviar email al cliente
    - Enviar notificación al admin
    - _Requirements: 10.3_

  - [ ] 9.6 Implementar recordatorios automáticos

    - Agregar sendAppointmentReminder() al email service
    - Crear función para enviar recordatorios 24h antes
    - Configurar cron job o webhook
    - _Requirements: 10.4_

  - [ ] 9.7 Agregar gestión de citas al admin panel
    - Crear página /admin/appointments
    - Mostrar lista de citas
    - Permitir confirmar/cancelar citas
    - Agregar filtros y búsqueda
    - _Requirements: 10.5_

- [ ] 10. Implementar portal de clientes (Fase 1)

  - [ ] 10.1 Configurar autenticación con Supabase Auth

    - Configurar email/password auth
    - Crear páginas de login y registro
    - Implementar recuperación de contraseña
    - Configurar middleware de autenticación
    - _Requirements: 11.1, 11.2_

  - [ ] 10.2 Crear tabla de documents en Supabase

    - Ejecutar script SQL para crear tabla
    - Crear tabla document_access_log
    - Configurar RLS policies
    - Configurar Supabase Storage bucket
    - _Requirements: 11.2, 11.4_

  - [ ] 10.3 Crear servicio de documentos

    - Crear lib/services/document.service.ts
    - Implementar función uploadDocument()
    - Implementar función getClientDocuments()
    - Implementar función logDocumentAccess()
    - _Requirements: 11.2, 11.3, 11.4_

  - [ ] 10.4 Crear dashboard del portal de clientes

    - Crear app/portal/page.tsx
    - Mostrar documentos disponibles
    - Mostrar próximas citas
    - Agregar navegación del portal
    - _Requirements: 11.1, 11.2_

  - [ ] 10.5 Implementar descarga segura de documentos

    - Crear API route /api/documents/[id]/download
    - Verificar autenticación y autorización
    - Registrar acceso en audit log
    - Generar URL temporal de descarga
    - _Requirements: 11.3, 11.4_

  - [ ] 10.6 Implementar notificaciones de nuevos documentos
    - Agregar función sendDocumentAvailableNotification()
    - Enviar email cuando se sube nuevo documento
    - Incluir link directo al portal
    - _Requirements: 11.5_

- [ ] 11. Implementar panel de administración mejorado

  - [ ] 11.1 Crear layout del admin panel

    - Crear app/admin/layout.tsx
    - Agregar sidebar de navegación
    - Implementar protección de rutas
    - Agregar breadcrumbs
    - _Requirements: 5.1, 5.2_

  - [ ] 11.2 Crear dashboard con métricas

    - Crear app/admin/page.tsx
    - Mostrar total de consultas
    - Mostrar citas pendientes
    - Mostrar posts publicados
    - Mostrar actividad reciente
    - _Requirements: 5.2_

  - [ ] 11.3 Crear gestión de miembros del equipo

    - Crear app/admin/team/page.tsx
    - Listar miembros del equipo
    - Agregar formulario de creación/edición
    - Implementar upload de fotos
    - Permitir reordenar miembros
    - _Requirements: 5.3, 5.4_

  - [ ] 11.4 Crear gestión de servicios

    - Crear app/admin/services/page.tsx
    - Listar servicios
    - Agregar formulario de creación/edición
    - Permitir reordenar servicios
    - _Requirements: 5.3, 5.4_

  - [ ] 11.5 Crear gestión de blog

    - Crear app/admin/blog/page.tsx
    - Listar posts
    - Agregar editor WYSIWYG (TipTap)
    - Implementar preview en tiempo real
    - Permitir publicar/despublicar
    - _Requirements: 5.3, 5.4_

  - [ ] 11.6 Crear gestión de consultas

    - Crear app/admin/consultations/page.tsx
    - Listar consultas recibidas
    - Mostrar detalles de cada consulta
    - Permitir cambiar estado (pendiente/contactado/cerrado)
    - Agregar filtros y búsqueda
    - _Requirements: 5.2, 5.4_

  - [ ] 11.7 Crear página de configuración
    - Crear app/admin/settings/page.tsx
    - Permitir editar información de contacto
    - Permitir editar colores de branding
    - Permitir configurar features habilitadas
    - _Requirements: 5.5_

- [ ] 12. Implementar base para multi-tenancy

  - [ ] 12.1 Crear tabla de tenants

    - Ejecutar script SQL para crear tabla tenants
    - Crear tabla site_settings
    - Configurar RLS policies
    - _Requirements: 12.1, 12.2_

  - [ ] 12.2 Agregar tenant_id a tablas existentes

    - Agregar columna tenant_id a services
    - Agregar columna tenant_id a team_members
    - Agregar columna tenant_id a blog_posts
    - Actualizar RLS policies para aislamiento
    - _Requirements: 12.1, 12.3, 12.4_

  - [ ] 12.3 Crear sistema de configuración por tenant

    - Crear lib/config/tenant.ts
    - Implementar función getTenantConfig()
    - Implementar hook useTenant()
    - Crear TenantContext
    - _Requirements: 12.2, 12.3_

  - [ ] 12.4 Implementar middleware de identificación de tenant

    - Crear middleware.ts para detectar tenant
    - Soportar subdomain-based tenancy
    - Soportar path-based tenancy
    - Agregar tenant_id a headers de request
    - _Requirements: 12.1, 12.2_

  - [ ] 12.5 Crear super admin panel básico
    - Crear app/super-admin/page.tsx
    - Listar todos los tenants
    - Permitir crear nuevo tenant
    - Permitir editar configuración de tenant
    - Implementar tenant impersonation
    - _Requirements: 12.5_

- [ ] 13. Optimización y mejoras de performance

  - [ ] 13.1 Implementar caching estratégico

    - Agregar revalidate a páginas estáticas
    - Implementar unstable_cache para queries frecuentes
    - Configurar cache headers apropiados
    - _Requirements: 8.5_

  - [ ] 13.2 Optimizar imágenes

    - Convertir todas las imágenes a WebP
    - Implementar responsive images con srcset
    - Agregar blur placeholders
    - Optimizar tamaño de imágenes
    - _Requirements: 8.5_

  - [ ] 13.3 Agregar índices a base de datos

    - Crear índices para queries frecuentes
    - Analizar query performance
    - Optimizar queries lentas
    - _Requirements: Performance optimization_

  - [ ] 13.4 Implementar lazy loading

    - Lazy load componentes pesados
    - Lazy load imágenes below the fold
    - Lazy load admin panel
    - _Requirements: Performance optimization_

  - [ ]\* 13.5 Configurar bundle analyzer
    - Instalar @next/bundle-analyzer
    - Analizar tamaño de bundles
    - Identificar dependencias pesadas
    - Optimizar imports
    - _Requirements: Performance optimization_

- [ ] 14. Testing y validación

  - [ ]\* 14.1 Configurar Jest y React Testing Library

    - Instalar dependencias de testing
    - Configurar jest.config.js
    - Crear setup files
    - _Requirements: Testing strategy_

  - [ ]\* 14.2 Escribir tests unitarios críticos

    - Tests para email service
    - Tests para appointment service
    - Tests para document service
    - Tests para componentes de formularios
    - _Requirements: Testing strategy_

  - [ ]\* 14.3 Escribir tests de integración

    - Test de API route de contacto
    - Test de API route de appointments
    - Test de API route de documents
    - _Requirements: Testing strategy_

  - [ ]\* 14.4 Configurar Playwright para E2E
    - Instalar Playwright
    - Configurar playwright.config.ts
    - Escribir test de flujo de contacto
    - Escribir test de flujo de citas
    - _Requirements: Testing strategy_

- [ ] 15. Preparación para producción

  - [ ] 15.1 Crear checklist de pre-lanzamiento

    - Verificar todas las variables de entorno
    - Verificar configuración de Supabase
    - Verificar configuración de Resend
    - Verificar dominio y DNS
    - _Requirements: 9.1, 9.2_

  - [ ] 15.2 Configurar monitoreo y alertas

    - Configurar uptime monitoring
    - Configurar error tracking (Sentry)
    - Configurar alertas por email
    - _Requirements: Monitoring_

  - [ ] 15.3 Implementar backups automáticos

    - Configurar backups de Supabase
    - Documentar proceso de restore
    - Probar restore de backup
    - _Requirements: Backup strategy_

  - [ ] 15.4 Optimizar para Lighthouse

    - Ejecutar Lighthouse audit
    - Corregir issues de performance
    - Corregir issues de accesibilidad
    - Corregir issues de SEO
    - Alcanzar score > 90 en todas las categorías
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

  - [ ] 15.5 Crear documentación de deployment
    - Documentar proceso de deployment
    - Documentar configuración de dominio
    - Documentar troubleshooting común
    - _Requirements: 9.3_

## Task Execution Guidelines

### Priority Levels

**High Priority (Must Have)**:

- Tasks 1-8: Core functionality and configuration
- Task 15: Production readiness

**Medium Priority (Should Have)**:

- Task 9: Appointment system
- Task 10: Client portal
- Task 11: Admin panel improvements

**Low Priority (Nice to Have)**:

- Task 12: Multi-tenancy foundation
- Task 13: Performance optimizations
- Task 14: Testing (marked as optional)

### Execution Order

**Phase 1 - Foundation (Week 1-2)**:

1. Task 1: Environment configuration
2. Task 2: Image management
3. Task 3: Project structure
4. Task 8: Documentation

**Phase 2 - Core Features (Week 3-4)**: 5. Task 4: Internationalization 6. Task 5: Email improvements 7. Task 6: Analytics 8. Task 7: SEO optimization

**Phase 3 - Advanced Features (Week 5-8)**: 9. Task 9: Appointment system 10. Task 10: Client portal 11. Task 11: Admin panel

**Phase 4 - Scaling (Week 9-12)**: 12. Task 12: Multi-tenancy 13. Task 13: Performance 14. Task 14: Testing (optional) 15. Task 15: Production prep

### Notes

- Tasks marked with `*` are optional (primarily testing tasks)
- Each task should be completed and tested before moving to the next
- Sub-tasks can be executed in parallel when there are no dependencies
- Always commit code after completing each sub-task
- Update this document as tasks are completed

### Success Criteria

A task is considered complete when:

- [ ] All code is written and working
- [ ] Code follows project conventions
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Changes are committed to git
- [ ] Documentation is updated if needed
- [ ] Manual testing is performed

### Getting Help

If you encounter issues:

1. Check the design document for context
2. Review the requirements document
3. Check the documentation in `/docs`
4. Review error messages carefully
5. Search for similar issues online
6. Ask for help with specific error messages

---

**Total Estimated Time**: 8-12 weeks for full implementation
**Minimum Viable Product**: Tasks 1-8 (2-4 weeks)
**Full Featured Platform**: Tasks 1-15 (8-12 weeks)

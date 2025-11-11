# Escribanía SAP - Plataforma Web Profesional

Sitio web profesional y moderno para Escribanía S A P en Rosario, Argentina.

## Características Principales

### Páginas Implementadas
- **Homepage**: Hero section, servicios destacados, estadísticas, testimonios, CTAs
- **Servicios**: Página de servicios con 5 categorías (Corporativo, Inmobiliario, Sucesiones, Escrituración, Asesoramiento)
- **Equipo**: Galería de profesionales con roles y especialidades
- **Blog**: Sistema de artículos con destacado y grid de publicaciones recientes
- **Contacto**: Formulario de contacto + información de ubicación + mapa
- **Nosotros**: Información de la firma, misión y valores
- **Legal**: Términos, condiciones y política de privacidad

### Tecnologías Utilizadas
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + Design Tokens
- **Database**: Supabase (PostgreSQL)
- **UI Components**: shadcn/ui
- **Deployment**: Vercel

### Estructura de Base de Datos

Tablas disponibles para futuro desarrollo:
- `profiles`: Perfiles de usuarios
- `services`: Servicios ofrecidos
- `team_members`: Equipo profesional
- `blog_posts`: Artículos del blog
- `consultation_requests`: Consultas de clientes

## Inicio Rápido

\`\`\`bash
npm install
npm run dev
\`\`\`

El sitio estará disponible en `http://localhost:3000`

## Estructura de Carpetas

\`\`\`
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Layout principal
│   ├── globals.css              # Estilos globales
│   ├── servicios/               # Páginas de servicios
│   ├── equipo/                  # Página del equipo
│   ├── blog/                    # Páginas del blog
│   ├── contacto/                # Página de contacto
│   ├── nosotros/                # Página de nosotros
│   ├── terminos/                # Términos y condiciones
│   ├── privacidad/              # Política de privacidad
│   ├── api/                     # API routes
│   ├── robots.ts                # Robots.txt dinámico
│   └── sitemap.ts               # Sitemap dinámico
├── components/
│   ├── header.tsx               # Header/Navegación
│   ├── footer.tsx               # Footer
│   ├── hero-section.tsx         # Hero section
│   ├── services-preview.tsx     # Previsualización de servicios
│   ├── contact-form.tsx         # Formulario de contacto
│   ├── team-card.tsx            # Card de equipo
│   └── ui/                      # Componentes shadcn/ui
├── lib/
│   ├── constants.ts             # Constantes de sitio
│   ├── supabase/
│   │   ├── client.ts            # Cliente de Supabase (browser)
│   │   └── server.ts            # Cliente de Supabase (server)
├── public/
│   ├── hero-office.jpg          # Imagen hero
│   ├── team-*.jpg               # Fotos del equipo
│   └── *-*.jpg                  # Imágenes de servicios
└── scripts/
    ├── 001_create_schema.sql    # Crear esquema de BD
    ├── 002_seed_data.sql        # Datos iniciales
    ├── 003_seed_blog_posts.sql  # Artículos del blog
    └── 004_create_webhook_functions.sql
\`\`\`

## Diseño Visual

### Paleta de Colores
- **Primario**: Azul Profundo (#003366) - Confianza y profesionalismo
- **Secundario**: Dorado (#D4A574) - Prestige y autoridad
- **Acento**: Verde Oscuro (#2D5016) - Estabilidad y crecimiento
- **Neutrales**: Blanco, Grises, Crema - Claridad y espacio

### Tipografía
- **Headings**: Geist (moderna y profesional)
- **Body**: Geist Mono (legible y técnica)

## Funcionalidades Actuales

✅ Sitio web responsivo (mobile-first)
✅ Navegación intuitiva
✅ Formulario de contacto funcional
✅ Información de ubicación con mapa
✅ Blog con múltiples artículos
✅ SEO optimizado (meta tags, sitemap, robots.txt)
✅ Diseño profesional y moderno
✅ WhatsApp integrado
✅ Email de contacto

## Próximos Pasos (Funcionalidades Futuras)

1. **Sistema de Autenticación**: Login de usuarios con Supabase Auth
2. **Portal de Clientes**: Acceso a expedientes y documentos
3. **Calendario de Consultas**: Reserva automática de citas
4. **Sistema de Pagos**: Integración con Stripe/MercadoPago
5. **Notificaciones**: Email y SMS de seguimiento
6. **Analytics Avanzado**: Seguimiento de conversiones
7. **Chatbot IA**: Asistente virtual para preguntas frecuentes

## Información de Contacto

**Escribanía  Ariel Paz**
- Ubicación: S2008 Rosario, Santa Fe
- Teléfono: +54 341 6711760
- Email: lookymlive@gmail.com
- WhatsApp: +5493416711760

## Notas Importantes

- Las fotos del equipo son ficticias profesionales (placeholder)
- Los artículos del blog contienen contenido de ejemplo
- La base de datos requiere ejecutar los scripts SQL en Supabase
- El sitio está optimizado para Vercel (ambiente Next.js)
- Todos los assets están optimizados para web

## Actualización de Información

Para actualizar la información del sitio:
1. Modificar `/lib/constants.ts` para datos de contacto
2. Actualizar fotos en `/public/` 
3. Editar contenido en componentes correspondientes
4. Ejecutar scripts SQL en Supabase para datos de BD

## Deploy a Producción

\`\`\`bash
# Push a GitHub
git push origin main

# Deploy automático a Vercel
# El sitio se desplegará automáticamente
\`\`\`

---

**Versión**: 1.0.0  
**Última actualización**: 2025-11-07

# Design Document

## Overview

Este documento describe el diseño técnico y arquitectónico para transformar la aplicación actual de Escribanía Sebastián Ariel Paz en una plataforma internacional escalable y replicable para múltiples escribanos y notarios profesionales.

La plataforma se construirá sobre la base existente de Next.js 16, Supabase y Tailwind CSS, agregando capacidades de multi-tenancy, internacionalización, gestión avanzada de contenido y características empresariales.

### Objetivos del Diseño

1. **Escalabilidad**: Soportar múltiples escribanías sin duplicar código
2. **Internacionalización**: Operar en múltiples idiomas (ES, EN, PT)
3. **Mantenibilidad**: Código organizado y documentado
4. **Performance**: Carga rápida y optimizada
5. **Seguridad**: Protección de datos sensibles
6. **Usabilidad**: Interfaces intuitivas para administradores y clientes

### Principios de Diseño

- **Convention over Configuration**: Configuración mínima, convenciones claras
- **Progressive Enhancement**: Funcionalidad básica primero, mejoras después
- **Mobile-First**: Diseño responsive desde el inicio
- **API-First**: Separación clara entre frontend y backend
- **Security by Default**: Seguridad integrada en cada capa

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Browser    │  │    Mobile    │  │   Tablet     │      │
│  │  (Desktop)   │  │              │  │              │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Next.js Application                       │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              App Router (Pages)                       │  │
│  │  /          /servicios    /equipo    /blog           │  │
│  │  /contacto  /nosotros     /admin     /portal         │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              API Routes                               │  │
│  │  /api/contact  /api/appointments  /api/documents     │  │
│  └──────────────────────────────────────────────────────┘  │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Components Layer                         │  │
│  │  Shared Components  │  Feature Components            │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Services Layer                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Supabase   │  │    Resend    │  │   Storage    │      │
│  │  (Database)  │  │   (Email)    │  │   (Files)    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

**Frontend**:

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui components

**Backend**:

- Supabase (PostgreSQL + Auth + Storage)
- Next.js API Routes
- Resend (Email service)

**Development**:

- pnpm (Package manager)
- ESLint (Linting)
- Git (Version control)

## Components and Interfaces

### Directory Structure

```
project-root/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Internationalization routes
│   │   ├── page.tsx              # Homepage
│   │   ├── servicios/            # Services pages
│   │   ├── equipo/               # Team pages
│   │   ├── blog/                 # Blog pages
│   │   ├── contacto/             # Contact page
│   │   ├── nosotros/             # About page
│   │   ├── admin/                # Admin panel (protected)
│   │   └── portal/               # Client portal (protected)
│   ├── api/                      # API routes
│   │   ├── contact/              # Contact form handler
│   │   ├── appointments/         # Appointment booking
│   │   ├── documents/            # Document management
│   │   └── webhooks/             # External webhooks
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   ├── shared/                   # Shared components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navigation.tsx
│   │   └── language-switcher.tsx
│   ├── features/                 # Feature-specific components
│   │   ├── contact-form.tsx
│   │   ├── appointment-calendar.tsx
│   │   ├── document-viewer.tsx
│   │   └── admin-dashboard.tsx
│   └── layouts/                  # Layout components
│       ├── public-layout.tsx
│       ├── admin-layout.tsx
│       └── portal-layout.tsx
├── lib/                          # Utilities and configuration
│   ├── supabase/                 # Supabase clients
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── middleware.ts         # Auth middleware
│   ├── config/                   # Configuration
│   │   ├── site.ts               # Site configuration
│   │   ├── tenant.ts             # Multi-tenant config
│   │   └── i18n.ts               # Internationalization
│   ├── services/                 # Business logic
│   │   ├── email.service.ts
│   │   ├── appointment.service.ts
│   │   └── document.service.ts
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-auth.ts
│   │   ├── use-locale.ts
│   │   └── use-tenant.ts
│   ├── utils.ts                  # Utility functions
│   └── constants.ts              # Constants
├── public/                       # Static assets
│   ├── team/                     # Team photos
│   ├── services/                 # Service images
│   ├── hero/                     # Hero images
│   └── documents/                # Public documents
├── locales/                      # Translation files
│   ├── es/                       # Spanish
│   │   ├── common.json
│   │   ├── services.json
│   │   └── legal.json
│   ├── en/                       # English
│   └── pt/                       # Portuguese
├── scripts/                      # Database scripts
│   ├── 001_create_schema.sql
│   ├── 002_seed_data.sql
│   └── migrations/               # Database migrations
├── docs/                         # Documentation
│   ├── README.md
│   ├── 01-configuracion-inicial.md
│   └── ...
├── .env.example                  # Environment variables template
├── .env.local                    # Local environment (gitignored)
├── package.json
└── README.md
```

### Key Components

#### 1. Environment Configuration System

**Purpose**: Manage all environment variables and configuration

**Location**: `lib/config/env.ts`

**Interface**:

```typescript
interface EnvironmentConfig {
  supabase: {
    url: string;
    anonKey: string;
    serviceRoleKey: string;
  };
  resend: {
    apiKey: string;
    fromEmail: string;
    toAdmin: string;
  };
  site: {
    url: string;
    name: string;
    locale: string;
  };
  analytics: {
    googleAnalyticsId?: string;
  };
}

export function getEnvConfig(): EnvironmentConfig;
export function validateEnv(): boolean;
```

**Responsibilities**:

- Load and validate environment variables
- Provide type-safe access to configuration
- Throw errors for missing required variables
- Support development and production modes

#### 2. Image Management System

**Purpose**: Handle team photos and other images

**Location**: `lib/services/image.service.ts`

**Interface**:

```typescript
interface ImageMetadata {
  path: string;
  url: string;
  width: number;
  height: number;
  format: string;
  size: number;
}

export async function uploadTeamPhoto(
  file: File,
  memberId: string
): Promise<ImageMetadata>;

export async function optimizeImage(
  sourcePath: string,
  options: OptimizeOptions
): Promise<string>;

export function getImageUrl(path: string): string;
```

**Responsibilities**:

- Upload images to Supabase Storage
- Optimize images (resize, compress, convert to WebP)
- Generate responsive image URLs
- Update database with image paths

#### 3. Internationalization (i18n) System

**Purpose**: Support multiple languages

**Location**: `lib/config/i18n.ts`

**Interface**:

```typescript
type Locale = "es" | "en" | "pt";

interface I18nConfig {
  defaultLocale: Locale;
  locales: Locale[];
  namespaces: string[];
}

export function useTranslation(namespace: string): {
  t: (key: string, params?: Record<string, any>) => string;
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export function getTranslations(
  locale: Locale,
  namespace: string
): Record<string, string>;
```

**Translation File Structure**:

```json
// locales/es/common.json
{
  "nav.home": "Inicio",
  "nav.services": "Servicios",
  "nav.team": "Equipo",
  "nav.blog": "Blog",
  "nav.contact": "Contacto",
  "button.submit": "Enviar",
  "button.cancel": "Cancelar"
}
```

**Responsibilities**:

- Load translations from JSON files
- Provide translation function with interpolation
- Detect browser language
- Persist language preference in cookies
- Support dynamic content translation from database

#### 4. Email Service

**Purpose**: Send transactional emails

**Location**: `lib/services/email.service.ts`

**Interface**:

```typescript
interface EmailTemplate {
  subject: string;
  html: string;
  text?: string;
}

interface SendEmailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendContactConfirmation(
  data: ContactFormData
): Promise<void>;

export async function sendAdminNotification(
  data: ContactFormData
): Promise<void>;

export async function sendAppointmentConfirmation(
  appointment: Appointment
): Promise<void>;

export async function sendAppointmentReminder(
  appointment: Appointment
): Promise<void>;
```

**Email Templates**:

- Contact form confirmation (client)
- Contact form notification (admin)
- Appointment confirmation
- Appointment reminder (24h before)
- Document available notification
- Password reset

**Responsibilities**:

- Send emails via Resend API
- Use branded HTML templates
- Handle email errors gracefully
- Log email delivery status
- Support attachments

#### 5. Admin Panel

**Purpose**: Content management interface

**Location**: `app/admin/`

**Pages**:

- `/admin` - Dashboard with metrics
- `/admin/team` - Manage team members
- `/admin/services` - Manage services
- `/admin/blog` - Manage blog posts
- `/admin/appointments` - View and manage appointments
- `/admin/consultations` - View consultation requests
- `/admin/settings` - Site configuration

**Interface**:

```typescript
interface AdminDashboardMetrics {
  totalConsultations: number;
  pendingAppointments: number;
  publishedPosts: number;
  teamMembers: number;
  recentActivity: Activity[];
}

interface TeamMemberForm {
  name: string;
  title: string;
  specialty: string;
  bio: string;
  email: string;
  photo: File | null;
  orderNumber: number;
}
```

**Features**:

- WYSIWYG editor for blog posts (TipTap or similar)
- Drag-and-drop image upload
- Real-time preview
- Bulk actions
- Search and filters
- Export data to CSV

**Responsibilities**:

- Authenticate admin users
- Provide intuitive content management
- Validate input data
- Show success/error notifications
- Track changes for audit

#### 6. Client Portal

**Purpose**: Secure area for clients to access documents

**Location**: `app/portal/`

**Pages**:

- `/portal` - Dashboard with documents
- `/portal/documents` - List of available documents
- `/portal/appointments` - Upcoming appointments
- `/portal/profile` - User profile settings

**Interface**:

```typescript
interface ClientDocument {
  id: string;
  title: string;
  type: "escritura" | "contrato" | "certificado" | "otro";
  uploadDate: Date;
  fileUrl: string;
  fileSize: number;
  status: "available" | "pending" | "expired";
}

interface ClientAppointment {
  id: string;
  date: Date;
  time: string;
  service: string;
  status: "confirmed" | "pending" | "cancelled";
  notes?: string;
}
```

**Features**:

- Secure authentication (Supabase Auth)
- Document download with audit trail
- Appointment management
- Email notifications
- Mobile-responsive

**Responsibilities**:

- Authenticate clients
- Display available documents
- Track document access
- Allow appointment rescheduling
- Send notifications

## Data Models

### Database Schema

#### Extended Schema (New Tables)

```sql
-- Tenants table (for multi-tenancy)
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  domain TEXT UNIQUE,
  config JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Appointments table
CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  client_email TEXT NOT NULL,
  client_phone TEXT,
  service_id UUID REFERENCES services(id),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Documents table (for client portal)
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id UUID REFERENCES auth.users(id),
  title TEXT NOT NULL,
  description TEXT,
  document_type TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  status TEXT DEFAULT 'available',
  uploaded_by UUID REFERENCES auth.users(id),
  uploaded_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ
);

-- Document access log (audit trail)
CREATE TABLE document_access_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID REFERENCES documents(id),
  user_id UUID REFERENCES auth.users(id),
  action TEXT NOT NULL,
  ip_address TEXT,
  user_agent TEXT,
  accessed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Translations table (for dynamic content)
CREATE TABLE translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  entity_type TEXT NOT NULL,
  entity_id UUID NOT NULL,
  field_name TEXT NOT NULL,
  locale TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(entity_type, entity_id, field_name, locale)
);

-- Site settings table
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  key TEXT NOT NULL,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(tenant_id, key)
);
```

### TypeScript Interfaces

```typescript
// Core entities
interface Tenant {
  id: string;
  name: string;
  slug: string;
  domain?: string;
  config: TenantConfig;
  createdAt: Date;
  updatedAt: Date;
}

interface TenantConfig {
  branding: {
    primaryColor: string;
    secondaryColor: string;
    logo: string;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    whatsapp: string;
  };
  features: {
    appointments: boolean;
    clientPortal: boolean;
    blog: boolean;
    multiLanguage: boolean;
  };
}

interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  iconUrl?: string;
  orderNumber: number;
  translations?: Record<string, ServiceTranslation>;
}

interface ServiceTranslation {
  name: string;
  description: string;
}

interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty?: string;
  bio?: string;
  imageUrl?: string;
  email?: string;
  orderNumber: number;
  translations?: Record<string, TeamMemberTranslation>;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  authorId: string;
  featuredImageUrl?: string;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  translations?: Record<string, BlogPostTranslation>;
}

interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  serviceId: string;
  appointmentDate: Date;
  appointmentTime: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Document {
  id: string;
  clientId: string;
  title: string;
  description?: string;
  documentType: string;
  filePath: string;
  fileSize: number;
  status: "available" | "pending" | "expired";
  uploadedBy: string;
  uploadedAt: Date;
  expiresAt?: Date;
}

interface ConsultationRequest {
  id: string;
  name: string;
  email: string;
  phone?: string;
  serviceType?: string;
  message: string;
  status: "pending" | "contacted" | "closed";
  createdAt: Date;
}
```

## Error Handling

### Error Handling Strategy

#### Client-Side Errors

**React Error Boundaries**:

```typescript
// components/error-boundary.tsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log to error tracking service
    logError(error, errorInfo);
    // Show user-friendly error message
    this.setState({ hasError: true });
  }
}
```

**API Error Handling**:

```typescript
// lib/api/client.ts
async function apiCall<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new ApiError(response.status, await response.text());
    }
    return response.json();
  } catch (error) {
    if (error instanceof ApiError) {
      // Handle API errors
      showNotification(error.message, "error");
    } else {
      // Handle network errors
      showNotification("Error de conexión", "error");
    }
    throw error;
  }
}
```

#### Server-Side Errors

**API Route Error Handling**:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Validate input
    const validated = contactSchema.parse(data);

    // Process request
    await sendEmail(validated);

    return Response.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        { error: "Datos inválidos", details: error.errors },
        { status: 400 }
      );
    }

    // Log error
    console.error("Contact form error:", error);

    return Response.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
```

### Error Types

```typescript
class ApiError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
  }
}

class AuthenticationError extends Error {
  constructor(message = "No autenticado") {
    super(message);
  }
}

class AuthorizationError extends Error {
  constructor(message = "No autorizado") {
    super(message);
  }
}
```

### User-Facing Error Messages

**Spanish (Primary)**:

- "Error de conexión. Por favor, intenta nuevamente."
- "Los datos ingresados no son válidos."
- "No tienes permisos para realizar esta acción."
- "El documento no está disponible."
- "Error al enviar el formulario. Verifica los datos."

**English**:

- "Connection error. Please try again."
- "The entered data is invalid."
- "You don't have permission to perform this action."
- "The document is not available."
- "Error submitting form. Please check your data."

## Testing Strategy

### Testing Pyramid

```
                    ▲
                   ╱ ╲
                  ╱ E2E╲           (Few)
                 ╱───────╲
                ╱         ╲
               ╱Integration╲       (Some)
              ╱─────────────╲
             ╱               ╲
            ╱  Unit Tests     ╲   (Many)
           ╱___________________╲
```

### Unit Tests

**Focus**: Individual functions and components

**Tools**: Jest, React Testing Library

**Coverage Target**: 70%+ for critical business logic

**Examples**:

```typescript
// lib/services/email.service.test.ts
describe("EmailService", () => {
  it("should send contact confirmation email", async () => {
    const data = {
      name: "Juan Pérez",
      email: "juan@example.com",
      message: "Consulta sobre escrituración",
    };

    await sendContactConfirmation(data);

    expect(mockResend.send).toHaveBeenCalledWith(
      expect.objectContaining({
        to: "juan@example.com",
        subject: expect.stringContaining("Consulta Recibida"),
      })
    );
  });
});

// components/contact-form.test.tsx
describe("ContactForm", () => {
  it("should validate required fields", async () => {
    render(<ContactForm />);

    const submitButton = screen.getByRole("button", { name: /enviar/i });
    fireEvent.click(submitButton);

    expect(await screen.findByText(/nombre es requerido/i)).toBeInTheDocument();
  });
});
```

### Integration Tests

**Focus**: API routes and database interactions

**Tools**: Jest, Supertest

**Examples**:

```typescript
// app/api/contact/route.test.ts
describe("POST /api/contact", () => {
  it("should create consultation request", async () => {
    const response = await request(app).post("/api/contact").send({
      name: "María García",
      email: "maria@example.com",
      phone: "+54 341 123-4567",
      serviceType: "Escrituración",
      message: "Necesito información",
    });

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);

    // Verify database entry
    const consultation = await supabase
      .from("consultation_requests")
      .select()
      .eq("email", "maria@example.com")
      .single();

    expect(consultation.data).toBeDefined();
  });
});
```

### End-to-End Tests

**Focus**: Critical user flows

**Tools**: Playwright or Cypress

**Scenarios**:

1. User submits contact form
2. Admin logs in and views consultations
3. Client logs in and downloads document
4. User books an appointment

**Example**:

```typescript
// e2e/contact-form.spec.ts
test("user can submit contact form", async ({ page }) => {
  await page.goto("http://localhost:3000/contacto");

  await page.fill('[name="name"]', "Pedro López");
  await page.fill('[name="email"]', "pedro@example.com");
  await page.fill('[name="message"]', "Consulta de prueba");

  await page.click('button[type="submit"]');

  await expect(page.locator(".success-message")).toBeVisible();
});
```

### Manual Testing Checklist

**Before Each Release**:

- [ ] Test contact form on desktop and mobile
- [ ] Verify email delivery (confirmation and notification)
- [ ] Test admin login and dashboard
- [ ] Verify image uploads work correctly
- [ ] Test all navigation links
- [ ] Verify responsive design on multiple devices
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Verify SEO meta tags
- [ ] Test performance with Lighthouse
- [ ] Verify accessibility with screen reader

## Security Considerations

### Authentication & Authorization

**Supabase Auth**:

- Email/password authentication
- Magic link authentication (passwordless)
- OAuth providers (Google, GitHub) - optional
- JWT-based sessions
- Row Level Security (RLS) policies

**Role-Based Access Control**:

```typescript
enum UserRole {
  SUPER_ADMIN = "super_admin", // Manages multiple tenants
  ADMIN = "admin", // Manages single tenant
  CLIENT = "client", // Access to portal
  PUBLIC = "public", // No authentication
}

interface User {
  id: string;
  email: string;
  role: UserRole;
  tenantId?: string;
}
```

**RLS Policies**:

```sql
-- Clients can only see their own documents
CREATE POLICY "clients_view_own_documents"
  ON documents FOR SELECT
  USING (auth.uid() = client_id);

-- Admins can view all documents in their tenant
CREATE POLICY "admins_view_tenant_documents"
  ON documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
      AND profiles.tenant_id = documents.tenant_id
    )
  );
```

### Data Protection

**Sensitive Data**:

- Passwords: Hashed by Supabase Auth (bcrypt)
- API Keys: Stored in environment variables, never in code
- Client documents: Encrypted at rest in Supabase Storage
- Personal data: Comply with GDPR/LGPD

**Input Validation**:

```typescript
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-()]+$/)
    .optional(),
  message: z.string().min(10).max(1000),
});

// Validate before processing
const validated = contactFormSchema.parse(formData);
```

**SQL Injection Prevention**:

- Use Supabase client (parameterized queries)
- Never concatenate user input into SQL
- Use TypeScript for type safety

**XSS Prevention**:

- React escapes output by default
- Sanitize HTML content (use DOMPurify for rich text)
- Set Content Security Policy headers

**CSRF Prevention**:

- Use SameSite cookies
- Verify origin headers
- Use CSRF tokens for sensitive actions

### Rate Limiting

**API Routes**:

```typescript
// lib/middleware/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});

export async function rateLimit(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return new Response("Too Many Requests", { status: 429 });
  }
}
```

**Contact Form**: 5 submissions per hour per IP
**Login Attempts**: 5 attempts per 15 minutes
**API Calls**: 100 requests per minute per user

### Environment Variables Security

**Never Commit**:

- `.env.local` in `.gitignore`
- Use `.env.example` for documentation
- Rotate keys regularly

**Production Secrets**:

- Use hosting platform's secret management
- Different keys for dev/staging/production
- Audit access to secrets

### HTTPS & Headers

**Security Headers**:

```typescript
// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
```

## Performance Optimization

### Frontend Performance

**Code Splitting**:

- Automatic route-based splitting (Next.js App Router)
- Dynamic imports for heavy components
- Lazy load admin panel and portal

```typescript
// Lazy load admin components
const AdminDashboard = dynamic(() => import("@/components/admin/dashboard"), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});
```

**Image Optimization**:

- Use Next.js Image component
- Serve WebP format with fallbacks
- Lazy load images below the fold
- Responsive images with srcset

```typescript
import Image from "next/image";

<Image
  src="/team/sebastian-paz.jpg"
  alt="Sebastián Ariel Paz"
  width={800}
  height={800}
  loading="lazy"
  placeholder="blur"
/>;
```

**Font Optimization**:

- Use next/font for automatic optimization
- Subset fonts to include only needed characters
- Preload critical fonts

**Bundle Size**:

- Target: < 200KB initial bundle
- Use tree-shaking
- Analyze bundle with `@next/bundle-analyzer`
- Remove unused dependencies

### Backend Performance

**Database Optimization**:

```sql
-- Add indexes for common queries
CREATE INDEX idx_blog_posts_published ON blog_posts(published, created_at DESC);
CREATE INDEX idx_team_members_order ON team_members(order_number);
CREATE INDEX idx_appointments_date ON appointments(appointment_date, appointment_time);
CREATE INDEX idx_documents_client ON documents(client_id, status);
```

**Caching Strategy**:

```typescript
// Cache static content
export const revalidate = 3600; // 1 hour

// Cache API responses
import { unstable_cache } from "next/cache";

const getServices = unstable_cache(
  async () => {
    return await supabase.from("services").select();
  },
  ["services"],
  { revalidate: 3600 }
);
```

**API Response Optimization**:

- Use pagination for large datasets
- Return only needed fields
- Compress responses (gzip/brotli)
- Use ETags for conditional requests

### Monitoring & Metrics

**Core Web Vitals Targets**:

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**Performance Budget**:

- Initial page load: < 3s on 3G
- Time to Interactive: < 5s
- Total page weight: < 1MB

**Monitoring Tools**:

- Google Analytics 4 (Core Web Vitals)
- Lighthouse CI in deployment pipeline
- Real User Monitoring (RUM)

## Deployment Architecture

### Environment Strategy

**Three Environments**:

1. **Development** (`localhost:3000`)

   - Local development
   - Hot reload enabled
   - Debug mode on
   - Test data

2. **Staging** (optional)

   - Pre-production testing
   - Production-like data
   - Client review
   - Performance testing

3. **Production**
   - Live site
   - Real data
   - Monitoring enabled
   - Backups configured

### Deployment Options

#### Option 1: Vercel (Recommended for Next.js)

**Pros**:

- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Preview deployments
- Built-in analytics

**Setup**:

1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically on push

#### Option 2: Self-Hosted (Docker)

**Pros**:

- Full control
- Cost-effective for multiple sites
- Custom infrastructure

**Docker Setup**:

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

**Docker Compose**:

```yaml
version: "3.8"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SUPABASE_URL=${NEXT_PUBLIC_SUPABASE_URL}
      - NEXT_PUBLIC_SUPABASE_ANON_KEY=${NEXT_PUBLIC_SUPABASE_ANON_KEY}
      - SUPABASE_SERVICE_ROLE_KEY=${SUPABASE_SERVICE_ROLE_KEY}
      - RESEND_API_KEY=${RESEND_API_KEY}
    restart: unless-stopped
```

#### Option 3: Other Platforms

- **Netlify**: Similar to Vercel
- **Railway**: Simple deployment with databases
- **Render**: Free tier available
- **AWS Amplify**: AWS integration

### CI/CD Pipeline

**GitHub Actions Example**:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}

      - name: Deploy
        run: npm run deploy
```

### Backup Strategy

**Database Backups**:

- Supabase automatic daily backups (included)
- Manual backups before major changes
- Export critical data weekly

**File Backups**:

- Supabase Storage automatic backups
- Sync to external storage (S3, Google Cloud)

**Code Backups**:

- Git repository (GitHub/GitLab)
- Tagged releases for each deployment

### Monitoring & Alerts

**Health Checks**:

- Uptime monitoring (UptimeRobot, Pingdom)
- API endpoint monitoring
- Database connection checks

**Error Tracking**:

- Sentry or similar service
- Email alerts for critical errors
- Slack notifications

**Performance Monitoring**:

- Google Analytics
- Custom metrics dashboard
- Weekly performance reports

## Multi-Tenancy Design

### Architecture Approach

**Shared Database, Isolated Data**:

- Single application instance
- Single database with tenant_id column
- Row Level Security for data isolation
- Shared code, separate configuration

### Tenant Identification

**Methods**:

1. **Subdomain** (Recommended)

   - `sebastian-paz.plataforma.com`
   - `maria-lopez.plataforma.com`
   - Easy to manage
   - Professional appearance

2. **Path-based**

   - `plataforma.com/sebastian-paz`
   - `plataforma.com/maria-lopez`
   - Single domain
   - Simpler SSL

3. **Custom Domain**
   - `escribanosebastianpaz.ar`
   - `escribaniamaria.com`
   - Most professional
   - Requires DNS configuration

**Implementation**:

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host");

  // Extract tenant from subdomain
  const tenant = hostname?.split(".")[0];

  // Or from path
  const pathTenant = request.nextUrl.pathname.split("/")[1];

  // Load tenant configuration
  const tenantConfig = await getTenantConfig(tenant);

  // Add to request headers
  request.headers.set("x-tenant-id", tenantConfig.id);

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
}
```

### Tenant Configuration

**Database Structure**:

```sql
CREATE TABLE tenants (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  domain TEXT UNIQUE,
  config JSONB DEFAULT '{
    "branding": {
      "primaryColor": "#003366",
      "secondaryColor": "#D4A574",
      "logo": "/logo.png"
    },
    "contact": {
      "email": "info@example.com",
      "phone": "+54 341 123-4567",
      "address": "Dirección",
      "whatsapp": "+5493411234567"
    },
    "features": {
      "appointments": true,
      "clientPortal": true,
      "blog": true,
      "multiLanguage": false
    },
    "locale": {
      "default": "es",
      "available": ["es"]
    }
  }'
);
```

**Configuration Access**:

```typescript
// lib/config/tenant.ts
export async function getTenantConfig(
  tenantSlug: string
): Promise<TenantConfig> {
  const { data } = await supabase
    .from("tenants")
    .select("config")
    .eq("slug", tenantSlug)
    .single();

  return data.config;
}

export function useTenant() {
  const tenantId = useContext(TenantContext);
  const [config, setConfig] = useState<TenantConfig>();

  useEffect(() => {
    loadTenantConfig(tenantId).then(setConfig);
  }, [tenantId]);

  return config;
}
```

### Data Isolation

**RLS Policies**:

```sql
-- All tables include tenant_id
ALTER TABLE services ADD COLUMN tenant_id UUID REFERENCES tenants(id);
ALTER TABLE team_members ADD COLUMN tenant_id UUID REFERENCES tenants(id);
ALTER TABLE blog_posts ADD COLUMN tenant_id UUID REFERENCES tenants(id);

-- RLS policy for tenant isolation
CREATE POLICY "tenant_isolation"
  ON services FOR ALL
  USING (tenant_id = current_setting('app.tenant_id')::UUID);
```

**Application-Level Filtering**:

```typescript
// Always filter by tenant
const services = await supabase
  .from("services")
  .select()
  .eq("tenant_id", tenantId);
```

### Super Admin Panel

**Features**:

- Create/edit/delete tenants
- View all tenants' data
- Manage billing (future)
- System-wide analytics
- Tenant impersonation for support

**Access**:

```typescript
// Only super admins can access
if (user.role !== "super_admin") {
  return redirect("/admin");
}
```

## Internationalization (i18n) Implementation

### Translation System

**Library**: next-intl or custom solution

**Supported Languages**:

- Spanish (es) - Primary
- English (en)
- Portuguese (pt)

### Static Content Translation

**File Structure**:

```
locales/
├── es/
│   ├── common.json       # Navigation, buttons, etc.
│   ├── services.json     # Service descriptions
│   ├── forms.json        # Form labels and validation
│   └── legal.json        # Terms, privacy policy
├── en/
│   ├── common.json
│   ├── services.json
│   ├── forms.json
│   └── legal.json
└── pt/
    ├── common.json
    ├── services.json
    ├── forms.json
    └── legal.json
```

**Example Translation File**:

```json
// locales/es/common.json
{
  "nav": {
    "home": "Inicio",
    "services": "Servicios",
    "team": "Equipo",
    "blog": "Blog",
    "contact": "Contacto",
    "about": "Nosotros"
  },
  "buttons": {
    "submit": "Enviar",
    "cancel": "Cancelar",
    "save": "Guardar",
    "delete": "Eliminar",
    "edit": "Editar"
  },
  "messages": {
    "success": "Operación exitosa",
    "error": "Ocurrió un error",
    "loading": "Cargando..."
  }
}
```

### Dynamic Content Translation

**Database Approach**:

```sql
-- Translations table for dynamic content
CREATE TABLE translations (
  id UUID PRIMARY KEY,
  entity_type TEXT NOT NULL,  -- 'service', 'blog_post', 'team_member'
  entity_id UUID NOT NULL,
  field_name TEXT NOT NULL,   -- 'name', 'description', 'bio'
  locale TEXT NOT NULL,       -- 'es', 'en', 'pt'
  value TEXT NOT NULL,
  UNIQUE(entity_type, entity_id, field_name, locale)
);

-- Example: Service translations
INSERT INTO translations VALUES
  (gen_random_uuid(), 'service', 'service-id-123', 'name', 'en', 'Corporate Law'),
  (gen_random_uuid(), 'service', 'service-id-123', 'description', 'en', 'Legal services for companies'),
  (gen_random_uuid(), 'service', 'service-id-123', 'name', 'pt', 'Direito Corporativo'),
  (gen_random_uuid(), 'service', 'service-id-123', 'description', 'pt', 'Serviços jurídicos para empresas');
```

**Helper Function**:

```typescript
// lib/i18n/translate.ts
export async function getTranslatedContent<T>(
  entityType: string,
  entityId: string,
  locale: string,
  defaultContent: T
): Promise<T> {
  const { data } = await supabase
    .from("translations")
    .select("field_name, value")
    .eq("entity_type", entityType)
    .eq("entity_id", entityId)
    .eq("locale", locale);

  if (!data || data.length === 0) {
    return defaultContent;
  }

  const translated = { ...defaultContent };
  data.forEach(({ field_name, value }) => {
    translated[field_name] = value;
  });

  return translated;
}
```

### Language Detection & Switching

**Detection Priority**:

1. User preference (cookie/localStorage)
2. URL parameter (?lang=en)
3. Browser language (Accept-Language header)
4. Default language (es)

**Language Switcher Component**:

```typescript
// components/language-switcher.tsx
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <Select value={locale} onValueChange={setLocale}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="es">🇦🇷 Español</SelectItem>
        <SelectItem value="en">🇺🇸 English</SelectItem>
        <SelectItem value="pt">🇧🇷 Português</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

### SEO for Multiple Languages

**URL Structure**:

- `escribanosebastianpaz.ar/` (Spanish - default)
- `escribanosebastianpaz.ar/en` (English)
- `escribanosebastianpaz.ar/pt` (Portuguese)

**Hreflang Tags**:

```typescript
// app/[locale]/layout.tsx
export function generateMetadata({ params }) {
  return {
    alternates: {
      canonical: `https://escribanosebastianpaz.ar/${params.locale}`,
      languages: {
        es: "https://escribanosebastianpaz.ar/",
        en: "https://escribanosebastianpaz.ar/en",
        pt: "https://escribanosebastianpaz.ar/pt",
      },
    },
  };
}
```

## Design Decisions & Rationale

### Why Next.js 16?

**Reasons**:

- App Router for better performance and DX
- Built-in API routes (no separate backend needed)
- Excellent SEO support (SSR/SSG)
- Image optimization out of the box
- Large ecosystem and community
- Easy deployment options

**Alternatives Considered**:

- Remix: Good but smaller ecosystem
- Astro: Great for static sites, less dynamic
- SvelteKit: Smaller community, less mature

### Why Supabase?

**Reasons**:

- PostgreSQL (powerful, reliable)
- Built-in authentication
- Row Level Security for multi-tenancy
- Real-time capabilities (future features)
- File storage included
- Generous free tier
- Great DX with TypeScript

**Alternatives Considered**:

- Firebase: NoSQL not ideal for relational data
- PlanetScale: MySQL, no built-in auth
- Custom PostgreSQL: More setup and maintenance

### Why Resend?

**Reasons**:

- Modern API, great DX
- Excellent deliverability
- React email templates support
- Generous free tier (3,000 emails/month)
- Good documentation
- Domain verification included

**Alternatives Considered**:

- SendGrid: More complex, older API
- Mailgun: Good but more expensive
- AWS SES: Requires more setup

### Why Tailwind CSS?

**Reasons**:

- Utility-first approach (fast development)
- Excellent with shadcn/ui components
- Small bundle size (purged CSS)
- Consistent design system
- Great documentation
- Large community

**Alternatives Considered**:

- CSS Modules: More boilerplate
- Styled Components: Runtime overhead
- Vanilla CSS: Harder to maintain

### Why TypeScript?

**Reasons**:

- Type safety prevents bugs
- Better IDE support (autocomplete)
- Self-documenting code
- Easier refactoring
- Industry standard for modern apps

**Alternatives Considered**:

- JavaScript: Less safe, more runtime errors
- Flow: Smaller community, less support

### Architecture Patterns

**Why Server Components?**:

- Better performance (less JavaScript to client)
- Direct database access (no API layer needed)
- Automatic code splitting
- SEO-friendly by default

**Why API Routes for Mutations?**:

- Clear separation of concerns
- Easier to secure
- Can be called from client components
- Reusable across different frontends

**Why Row Level Security?**:

- Security at database level
- Prevents data leaks even if app has bugs
- Perfect for multi-tenancy
- Reduces application code

## Future Enhancements

### Phase 2 Features (3-6 months)

**1. Advanced Appointment System**

- Calendar integration (Google Calendar, Outlook)
- Video call integration (Zoom, Google Meet)
- Automated reminders (SMS via Twilio)
- Recurring appointments
- Waitlist management

**2. Payment Integration**

- Stripe for international payments
- MercadoPago for Argentina
- Invoice generation
- Payment history
- Subscription billing for multi-tenant

**3. Document Generation**

- Template-based document creation
- Fill-in forms for common documents
- Digital signatures (DocuSign integration)
- Automated document workflows

**4. Advanced Analytics**

- Custom dashboards
- Conversion tracking
- Client behavior analysis
- Revenue reports
- Appointment analytics

### Phase 3 Features (6-12 months)

**1. Mobile Apps**

- React Native apps (iOS/Android)
- Push notifications
- Offline document access
- Mobile document scanning

**2. AI Features**

- Chatbot for common questions
- Document analysis
- Automated appointment scheduling
- Smart search

**3. CRM Integration**

- HubSpot integration
- Salesforce integration
- Lead management
- Email campaigns

**4. Advanced Multi-Tenancy**

- White-label solution
- Tenant marketplace
- Billing automation
- Usage analytics per tenant

### Technical Debt & Improvements

**Code Quality**:

- Increase test coverage to 80%+
- Add E2E tests for critical flows
- Implement code review process
- Set up automated code quality checks

**Performance**:

- Implement Redis caching
- Add CDN for static assets
- Optimize database queries
- Implement lazy loading everywhere

**Security**:

- Regular security audits
- Penetration testing
- Automated vulnerability scanning
- GDPR compliance audit

**Documentation**:

- API documentation (OpenAPI/Swagger)
- Component storybook
- Video tutorials
- Admin user guide

## Conclusion

This design document provides a comprehensive blueprint for transforming the current Escribanía Sebastián Ariel Paz website into a scalable, international platform for notaries and legal professionals.

### Key Takeaways

1. **Scalable Architecture**: Multi-tenant design allows serving multiple clients from a single codebase
2. **Modern Stack**: Next.js 16, Supabase, and Tailwind CSS provide excellent DX and performance
3. **Security First**: RLS, authentication, and input validation protect sensitive data
4. **International Ready**: i18n support for Spanish, English, and Portuguese
5. **Well Documented**: Comprehensive guides in `/docs` for easy onboarding

### Success Metrics

**Technical**:

- Page load time < 3s
- Lighthouse score > 90
- Zero critical security vulnerabilities
- 70%+ test coverage

**Business**:

- Support 10+ tenants within 6 months
- 99.9% uptime
- < 1% error rate
- Positive user feedback

### Next Steps

1. Review and approve this design document
2. Create implementation task list
3. Set up development environment
4. Begin Phase 1 implementation
5. Iterate based on feedback

---

**Document Version**: 1.0  
**Last Updated**: 2025-11-07  
**Status**: Ready for Review

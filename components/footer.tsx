import { SITE_NAME, SITE_EMAIL, SITE_PHONE, SITE_WHATSAPP, SITE_ADDRESS } from "@/lib/constants"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">{SITE_NAME}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Servicios legales profesionales en Rosario. Más de 25 años de excelencia y confianza.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/servicios/corporativo"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Derecho Corporativo
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/inmobiliario"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Derecho Inmobiliario
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/sucesiones"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sucesiones
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/escrituracion"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Escrituración
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/equipo" className="text-muted-foreground hover:text-primary transition-colors">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${SITE_PHONE}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {SITE_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_WHATSAPP.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {SITE_EMAIL}
                </a>
              </li>
              <li className="text-xs text-muted-foreground">{SITE_ADDRESS}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2025 {SITE_NAME}. Todos los derechos reservados.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

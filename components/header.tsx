"use client"

import Link from "next/link"
import { SITE_NAME } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm">
            SP
          </div>
          <span className="font-bold text-lg text-foreground hidden sm:inline group-hover:text-primary transition-colors">
            {SITE_NAME}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/servicios"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link
            href="/equipo"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Equipo
          </Link>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Blog
          </Link>
          <Link
            href="/contacto"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contacto
          </Link>
        </div>

        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-200">
          Consulta Gratuita
        </Button>
      </nav>
    </header>
  )
}

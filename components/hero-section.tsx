"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="/hero-notary-professional.jpg"
          alt="Profesional joven en ambiente de escribanía"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/50 rounded-full text-sm font-semibold text-accent">
              Asesoramiento Jurídico Premium
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white text-balance leading-tight">
              Excelencia Legal
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                en Rosario
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 text-balance max-w-3xl leading-relaxed">
              25+ años transformando desafíos legales en oportunidades. Confianza, profesionalismo y resultados
              comprobados.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Solicitar Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white/30 hover:bg-white/10 font-semibold text-lg px-8 py-6 rounded-lg backdrop-blur-sm transition-all duration-200 bg-transparent"
            >
              Explorar Servicios
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-primary">25+</div>
              <p className="text-sm text-gray-300">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">1000+</div>
              <p className="text-sm text-gray-300">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">500+</div>
              <p className="text-sm text-gray-300">Trámites Anuales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

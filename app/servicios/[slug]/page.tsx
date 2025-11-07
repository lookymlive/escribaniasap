import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const serviceDetails: Record<string, any> = {
  corporativo: {
    title: "Derecho Corporativo",
    description: "Asesoramiento integral en derecho corporativo y empresarial",
    features: [
      "Constitución y modificación de sociedades",
      "Fusiones y adquisiciones de empresas",
      "Restructuraciones empresariales",
      "Asesoramiento a directorios",
      "Cumplimiento normativo",
      "Contratos comerciales",
    ],
    process: [
      "Análisis inicial de tu situación empresarial",
      "Asesoramiento sobre estructura óptima",
      "Redacción de documentación requerida",
      "Gestión de trámites administrativos",
      "Seguimiento y asesoramiento continuo",
    ],
  },
  inmobiliario: {
    title: "Derecho Inmobiliario",
    description: "Servicios especializados en compraventa y alquiler de inmuebles",
    features: [
      "Compraventa de inmuebles",
      "Contratos de alquiler y locación",
      "Resolución de conflictos de propiedad",
      "Propiedad horizontal",
      "Hipotecas y préstamos inmobiliarios",
      "Inspecciones y valuaciones",
    ],
    process: [
      "Revisión y negociación de términos",
      "Verificación de documentación del inmueble",
      "Redacción de contratos",
      "Trámites ante organismos públicos",
      "Cierre de operación",
    ],
  },
  sucesiones: {
    title: "Sucesiones",
    description: "Asesoramiento completo en procesos sucesorios",
    features: [
      "Redacción de testamentos",
      "Tramitación de testamentarías",
      "Inventarios y tasaciones",
      "Particiones de bienes",
      "Resolución de conflictos hereditarios",
      "Asesoramiento fiscal",
    ],
    process: [
      "Consulta inicial sobre situación familiar",
      "Análisis de patrimonio",
      "Redacción de documentos",
      "Gestión de trámites judiciales",
      "Distribución de bienes",
    ],
  },
  escrituracion: {
    title: "Escrituración",
    description: "Servicios notariales y legalización de documentos",
    features: [
      "Escrituración de actos",
      "Legalización de firmas",
      "Traducciones certificadas",
      "Constitución de hipotecas",
      "Poder notarial",
      "Autorización de documentos",
    ],
    process: [
      "Asesoramiento sobre documentación requerida",
      "Preparación de redacción",
      "Tramitación notarial",
      "Otorgamiento de escritura",
      "Entrega de copias certificadas",
    ],
  },
  asesoramiento: {
    title: "Asesoramiento Legal",
    description: "Consultoría jurídica preventiva y continua",
    features: [
      "Análisis legal de contratos",
      "Asesoramiento preventivo",
      "Interpretación de normativas",
      "Resolución de conflictos",
      "Representación en negociaciones",
      "Capacitaciones jurídicas",
    ],
    process: [
      "Evaluación de tu situación legal",
      "Identificación de riesgos",
      "Elaboración de estrategia",
      "Implementación de soluciones",
      "Monitoreo y seguimiento",
    ],
  },
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const service = serviceDetails[params.slug]

  if (!service) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Servicio no encontrado</h1>
            <Link href="/servicios">
              <Button className="mt-4">Volver a Servicios</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/servicios" className="text-blue-100 hover:text-white mb-4 inline-block">
              ← Volver a Servicios
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            <p className="text-lg text-blue-100">{service.description}</p>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Qué incluye este servicio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Nuestro proceso</h2>
            <div className="space-y-4">
              {service.process.map((step: string, i: number) => (
                <Card key={i} className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Necesitas nuestro servicio?</h2>
            <p className="text-lg text-muted-foreground mb-8">Contactanos para una consulta inicial sin compromiso</p>
            <Link href="/contacto">
              <Button className="bg-primary hover:bg-primary/90 text-white text-lg px-8">Solicitar Consulta</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

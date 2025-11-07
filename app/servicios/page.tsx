import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    slug: "corporativo",
    title: "Derecho Corporativo",
    description: "Constitución, modificación y disolución de sociedades",
    image: "/corporate-law-office.jpg",
  },
  {
    slug: "inmobiliario",
    title: "Derecho Inmobiliario",
    description: "Compraventa de inmuebles, alquileres y propiedad horizontal",
    image: "/real-estate-contracts.jpg",
  },
  {
    slug: "sucesiones",
    title: "Sucesiones",
    description: "Testamentarías, inventarios y particiones de bienes",
    image: "/inheritance-documents.jpg",
  },
  {
    slug: "escrituracion",
    title: "Escrituración",
    description: "Trámites notariales y legalización de documentos",
    image: "/notarial-documents.jpg",
  },
  {
    slug: "asesoramiento",
    title: "Asesoramiento Legal",
    description: "Consultoría jurídica preventiva para empresas y personas",
    image: "/legal-consulting.jpg",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestros Servicios</h1>
            <p className="text-lg text-blue-100">Soluciones legales integrales adaptadas a tus necesidades</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.slug} href={`/servicios/${service.slug}`} className="group">
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-4xl">📋</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition">
                        Ver más →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿No encontraste lo que buscas?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactanos para consultar sobre otros servicios legales
            </p>
            <Link href="/contacto">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8">Solicitar Consulta</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

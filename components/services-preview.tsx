import { Card } from "@/components/ui/card"

const services = [
  {
    icon: "💼",
    title: "Derecho Corporativo",
    description: "Constitución, modificación y disolución de sociedades. Fusiones y adquisiciones.",
  },
  {
    icon: "🏠",
    title: "Derecho Inmobiliario",
    description: "Compraventa de inmuebles, contratos de alquiler y propiedad horizontal.",
  },
  {
    icon: "👥",
    title: "Sucesiones",
    description: "Testamentarías, inventarios y particiones de bienes.",
  },
  {
    icon: "📄",
    title: "Escrituración",
    description: "Trámites notariales y legalización de documentos.",
  },
  {
    icon: "🛡️",
    title: "Asesoramiento Legal",
    description: "Consultoría jurídica preventiva para empresas y personas.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-gray-600">Soluciones legales integrales para sus necesidades</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <Card key={i} className="p-6 hover:shadow-lg transition cursor-pointer">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

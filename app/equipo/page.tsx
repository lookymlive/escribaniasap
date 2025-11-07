import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamCard } from "@/components/team-card"

const teamMembers = [
  {
    name: "Sebastián Ariel Paz",
    title: "Escribano Titular",
    specialty: "Derecho Corporativo e Inmobiliario",
    image: "/team-sebastian.jpg",
  },
  {
    name: "Mariana González",
    title: "Abogada",
    specialty: "Derecho Inmobiliario y Sucesiones",
    image: "/team-mariana.jpg",
  },
  {
    name: "Carlos Mendez",
    title: "Abogado",
    specialty: "Derecho Corporativo",
    image: "/team-carlos.jpg",
  },
  {
    name: "Laura Fernández",
    title: "Asistente Legal",
    specialty: "Gestión de Trámites",
    image: "/team-laura.jpg",
  },
  {
    name: "Roberto Silva",
    title: "Gestor Administrativo",
    specialty: "Atención al Cliente",
    image: "/team-roberto.jpg",
  },
]

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestro Equipo</h1>
            <p className="text-lg text-blue-100">
              Profesionales altamente capacitados con más de 20 años de experiencia
            </p>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Integridad</h3>
                <p className="text-muted-foreground">Actuamos con transparencia y ética en todos nuestros asuntos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Excelencia</h3>
                <p className="text-muted-foreground">Buscamos la mejor solución para cada caso que nos presentan</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Confianza</h3>
                <p className="text-muted-foreground">
                  Confidencialidad y discreción garantizada en todas nuestras actuaciones
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

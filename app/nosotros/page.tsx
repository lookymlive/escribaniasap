import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Nosotros</h1>
            <p className="text-lg text-blue-100">Una firma de abogados con más de 25 años de experiencia en Rosario</p>
          </div>
        </section>

        {/* History */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Escribanía Sebastián Ariel Paz fue fundada en 1995 con el objetivo de proporcionar servicios jurídicos
                de excelencia a empresas y personas de Rosario y alrededores.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                A lo largo de más de dos décadas, hemos construido una reputación sólida basada en la confianza, la
                integridad y la excelencia profesional. Nuestro equipo ha acompañado a cientos de clientes en momentos
                cruciales de sus vidas y negocios.
              </p>
              <p className="text-lg text-muted-foreground">
                Hoy, continuamos especializándonos en proporcionar soluciones jurídicas personalizadas y actualizadas
                con las últimas normativas legales.
              </p>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nuestros Logros</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Años en actividad</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-muted-foreground">Clientes satisfechos</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Casos exitosos anuales</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">Profesionales expertos</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Misión</h3>
                <p className="text-muted-foreground">
                  Proporcionar servicios jurídicos de excelencia, personalizados e innovadores, que satisfagan las
                  necesidades legales de nuestros clientes con integridad, profesionalismo y ética.
                </p>
              </Card>
              <Card className="p-8 bg-secondary/5 border-secondary/20">
                <h3 className="text-2xl font-bold text-foreground mb-4">Visión</h3>
                <p className="text-muted-foreground">
                  Ser la firma jurídica de referencia en la región, reconocida por la excelencia, confiabilidad y
                  capacidad de proporcionar soluciones legales efectivas y duraderas.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />

        <ServicesPreview />

        {/* Premium Stats Section - Dark Mode */}
        <section className="py-20 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  25+
                </div>
                <p className="text-lg text-muted-foreground">Años de Experiencia</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  1000+
                </div>
                <p className="text-lg text-muted-foreground">Clientes Satisfechos</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                  500+
                </div>
                <p className="text-lg text-muted-foreground">Trámites Anuales</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section - Premium Dark Mode */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                    Por qué somos tu mejor opción
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Combinamos expertise legal con un enfoque centrado en el cliente para resolver tus desafíos
                    jurídicos.
                  </p>
                </div>

                <ul className="space-y-4">
                  {[
                    {
                      title: "Profesionales Certificados",
                      desc: "Equipo especializado con acreditaciones internacionales",
                    },
                    { title: "Atención Personalizada", desc: "Soluciones adaptadas a tus necesidades específicas" },
                    { title: "Respuesta Rápida", desc: "Tiempos de resolución ágiles y eficientes" },
                    { title: "Confidencialidad Total", desc: "Máxima discreción en todos tus trámites" },
                    { title: "Transparencia", desc: "Honorarios claros sin cargos ocultos" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        ✓
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <Card className="p-8 lg:p-10 border-border/50 bg-gradient-to-br from-card via-card to-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">Solicita tu consulta</h3>
                    <p className="text-muted-foreground mt-2">
                      Cuéntanos sobre tu situación legal y recibe asesoramiento profesional sin costo.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>✓ Primera consulta completamente gratuita</p>
                    <p>✓ Sin compromiso de contratación</p>
                    <p>✓ Evaluación de tu caso en 24hs</p>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-lg transition-all duration-200">
                    Agendar Consulta Gratuita
                  </Button>

                  <div className="flex gap-2 text-xs text-muted-foreground">
                    <span>📞</span>
                    <span>
                      También puedes contactarnos al{" "}
                      <a href="tel:+5493416177159" className="text-primary hover:underline">
                        +54 341 617-7159
                      </a>
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                Resuelve tus desafíos legales hoy
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Nuestro equipo de expertos está listo para asesorarte en cada paso del camino
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-lg"
              >
                Contactar por Email
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-semibold py-6 text-lg rounded-lg bg-transparent"
              >
                Enviar WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { SITE_PHONE, SITE_EMAIL, SITE_ADDRESS } from "@/lib/constants"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contactanos</h1>
            <p className="text-lg text-blue-100">Estamos aquí para ayudarte con tus consultas legales</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📍</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                      <p className="text-muted-foreground">{SITE_ADDRESS}</p>
                      <p className="text-sm text-muted-foreground mt-1">Rosario, Santa Fe</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📞</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                      <a href={`tel:${SITE_PHONE}`} className="text-muted-foreground hover:text-primary transition">
                        {SITE_PHONE}
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">✉️</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href={`mailto:${SITE_EMAIL}`} className="text-muted-foreground hover:text-primary transition">
                        {SITE_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🕒</span>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                      <p className="text-muted-foreground">Lunes a Viernes</p>
                      <p className="text-muted-foreground">9:00 AM - 18:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.2747146895566!2d-60.63899!3d-32.93837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7aa7b6b7b6b6d%3A0x6b6b6b6b6b6b6b6b!2sMendoza%207199%2C%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  )
}

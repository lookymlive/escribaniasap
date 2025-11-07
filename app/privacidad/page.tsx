import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white">Política de Privacidad</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <h2>1. Información que Recopilamos</h2>
            <p>Recopilamos información que usted proporciona voluntariamente a través de formularios de contacto.</p>

            <h2>2. Uso de la Información</h2>
            <p>Utilizamos la información para responder a sus consultas y mejorar nuestros servicios.</p>

            <h2>3. Protección de Datos</h2>
            <p>Implementamos medidas de seguridad para proteger su información personal contra acceso no autorizado.</p>

            <h2>4. Cookies</h2>
            <p>
              Este sitio web utiliza cookies para mejorar la experiencia del usuario. Puede deshabilitarlas en su
              navegador.
            </p>

            <h2>5. Derechos del Usuario</h2>
            <p>Tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento.</p>

            <h2>6. Contacto</h2>
            <p>
              Si tiene preguntas sobre esta política de privacidad, contáctenos a través de nuestro formulario de
              contacto.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

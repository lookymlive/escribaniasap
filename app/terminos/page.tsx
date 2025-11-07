import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-white">Términos y Condiciones</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
            <h2>1. Aceptación de Términos</h2>
            <p>Al acceder y utilizar este sitio web, usted acepta cumplir con estos términos y condiciones.</p>

            <h2>2. Uso del Sitio Web</h2>
            <p>
              Este sitio web es de propiedad de Escribanía Sebastián Ariel Paz. Usted acepta utilizar este sitio solo
              para fines legales.
            </p>

            <h2>3. Renuncia de Responsabilidad</h2>
            <p>
              La información en este sitio web se proporciona tal como está. No hacemos representaciones o garantías de
              ningún tipo.
            </p>

            <h2>4. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso Escribanía Sebastián Ariel Paz será responsable por daños directos, indirectos o
              incidentales.
            </p>

            <h2>5. Modificaciones</h2>
            <p>Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

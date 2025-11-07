import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, User, Share2 } from "lucide-react"

const blogPosts: Record<string, any> = {
  "constitucion-sociedad-paso-a-paso": {
    title: "Cómo constituir una sociedad paso a paso",
    author: "Sebastián Ariel Paz",
    date: "2025-11-07",
    category: "Derecho Corporativo",
    content: `
      <h2>Introducción</h2>
      <p>La constitución de una sociedad es uno de los trámites más importantes para formalizar un emprendimiento empresarial. En este artículo te guiaremos paso a paso.</p>

      <h2>Paso 1: Elección del tipo de sociedad</h2>
      <p>Lo primero es decidir qué tipo de sociedad constituirás. Las opciones más comunes son:</p>
      <ul>
        <li>Sociedad Anónima (SA)</li>
        <li>Sociedad de Responsabilidad Limitada (SRL)</li>
        <li>Sociedad Colectiva</li>
        <li>Sociedad en Comandita</li>
      </ul>

      <h2>Paso 2: Preparación de documentos</h2>
      <p>Necesitarás preparar varios documentos como DNI de los socios, domicilio de constitución, entre otros.</p>

      <h2>Paso 3: Constitución ante escribano</h2>
      <p>La constitución debe realizarse ante un escribano público que labrará la escritura constitutiva.</p>

      <h2>Paso 4: Inscripción en el Registro</h2>
      <p>Una vez otorgada la escritura, debe inscribirse en el Registro Público de Comercio.</p>

      <h2>Conclusión</h2>
      <p>Seguir estos pasos correctamente asegura que tu sociedad esté legalmente constituida y operativa.</p>
    `,
  },
  "compraventa-inmuebles-recomendaciones": {
    title: "Recomendaciones al comprar un inmueble",
    author: "Mariana González",
    date: "2025-11-05",
    category: "Derecho Inmobiliario",
    content: `
      <h2>Aspectos clave en la compraventa</h2>
      <p>Comprar un inmueble es una decisión importante. Aquí te damos recomendaciones para hacerlo seguro.</p>
    `,
  },
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
            <Link href="/blog">
              <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg">Volver al Blog</button>
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
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="text-blue-100 hover:text-white mb-4 inline-block">
              ← Volver al Blog
            </Link>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
            <div className="flex items-center gap-6 text-blue-100 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("es-AR")}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} className="space-y-6 text-muted-foreground" />
            </article>

            {/* Share */}
            <Card className="mt-12 p-6 bg-gray-50">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-foreground">Comparte este artículo</span>
                <div className="flex items-center gap-4">
                  <button className="p-2 hover:bg-white rounded-full transition">
                    <Share2 className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-foreground mb-2">Otro artículo</h3>
                <p className="text-sm text-muted-foreground">Descripción del artículo relacionado...</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition">
                <h3 className="font-semibold text-foreground mb-2">Otro artículo</h3>
                <p className="text-sm text-muted-foreground">Descripción del artículo relacionado...</p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

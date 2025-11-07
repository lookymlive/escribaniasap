import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "constitucion-sociedad-paso-a-paso",
    title: "Cómo constituir una sociedad paso a paso",
    excerpt:
      "Guía completa sobre los requisitos y pasos necesarios para constituir una sociedad mercantil en Argentina.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Sebastián Ariel Paz",
    date: "2025-11-07",
    category: "Derecho Corporativo",
  },
  {
    id: 2,
    slug: "compraventa-inmuebles-recomendaciones",
    title: "Recomendaciones al comprar un inmueble",
    excerpt: "Consejos prácticos para realizar una compraventa de inmuebles segura y sin complicaciones.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Mariana González",
    date: "2025-11-05",
    category: "Derecho Inmobiliario",
  },
  {
    id: 3,
    slug: "importancia-testamento",
    title: "La importancia de hacer un testamento",
    excerpt: "Por qué es fundamental contar con un testamento actualizado y qué sucede si no lo tienes.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Carlos Mendez",
    date: "2025-11-01",
    category: "Sucesiones",
  },
  {
    id: 4,
    slug: "documentos-notariales-requisitos",
    title: "Documentos notariales: qué requisitos necesitas",
    excerpt: "Información sobre los diferentes tipos de documentos notariales y requisitos para su otorgamiento.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Sebastián Ariel Paz",
    date: "2025-10-28",
    category: "Escrituración",
  },
  {
    id: 5,
    slug: "derechos-inquilino-locador",
    title: "Derechos y obligaciones del inquilino y locador",
    excerpt: "Análisis detallado de los derechos y obligaciones en una relación de alquiler.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Mariana González",
    date: "2025-10-25",
    category: "Derecho Inmobiliario",
  },
  {
    id: 6,
    slug: "aspectos-legales-emprendimientos",
    title: "Aspectos legales a considerar en emprendimientos",
    excerpt: "Guía de aspectos legales fundamentales para emprendedores y startups en Argentina.",
    content: "Lorem ipsum dolor sit amet...",
    author: "Carlos Mendez",
    date: "2025-10-20",
    category: "Asesoramiento Legal",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog Legal</h1>
            <p className="text-lg text-blue-100">Artículos, guías y noticias sobre temas jurídicos de interés</p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${blogPosts[0].slug}`}>
              <Card className="overflow-hidden hover:shadow-lg transition cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-auto bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <span className="text-6xl">📰</span>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {blogPosts[0].category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{blogPosts[0].title}</h2>
                    <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span>👤</span>
                        {blogPosts[0].author}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📅</span>
                        {new Date(blogPosts[0].date).toLocaleDateString("es-AR")}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8">Artículos Recientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:shadow-lg transition cursor-pointer overflow-hidden">
                    <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <span className="text-4xl">📄</span>
                    </div>
                    <div className="p-6">
                      <div className="inline-flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-xs text-muted-foreground">
                          {new Date(post.date).toLocaleDateString("es-AR")}
                        </div>
                        <span className="text-primary">→</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Mantente Actualizado</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Suscribete a nuestro newsletter para recibir artículos y novedades legales
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

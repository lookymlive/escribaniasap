import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  generator: "v0.app",
  keywords: [
    "Abogado Rosario",
    "Escribanía",
    "Derecho Corporativo",
    "Derecho Inmobiliario",
    "Sucesiones",
    "Escrituración",
    "Asesoramiento Legal",
  ],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://escribanosebastianpaz.ar",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}

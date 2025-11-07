"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col">
            <Link href="/servicios" className="px-4 py-3 border-b text-gray-700 hover:bg-gray-50">
              Servicios
            </Link>
            <Link href="/equipo" className="px-4 py-3 border-b text-gray-700 hover:bg-gray-50">
              Equipo
            </Link>
            <Link href="/blog" className="px-4 py-3 border-b text-gray-700 hover:bg-gray-50">
              Blog
            </Link>
            <Link href="/contacto" className="px-4 py-3 text-gray-700 hover:bg-gray-50">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

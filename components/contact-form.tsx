"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service_type: formData.get("service_type"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">Nombre completo</Label>
          <Input id="name" name="name" placeholder="Tu nombre" required className="mt-2" />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="tu@email.com" required className="mt-2" />
        </div>

        <div>
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+54 341 XXXX-XXXX" className="mt-2" />
        </div>

        <div>
          <Label htmlFor="service">Tipo de servicio</Label>
          <Select name="service_type">
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corporativo">Derecho Corporativo</SelectItem>
              <SelectItem value="inmobiliario">Derecho Inmobiliario</SelectItem>
              <SelectItem value="sucesiones">Sucesiones</SelectItem>
              <SelectItem value="escrituracion">Escrituración</SelectItem>
              <SelectItem value="asesoramiento">Asesoramiento Legal</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message">Mensaje</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Cuéntanos sobre tu situación jurídica..."
            rows={5}
            className="mt-2"
          />
        </div>

        <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
          {isLoading ? "Enviando..." : "Enviar consulta"}
        </Button>

        {submitted && (
          <div className="p-4 bg-green-50 text-green-800 rounded-lg text-sm">
            Gracias por tu consulta. Nos contactaremos pronto.
          </div>
        )}
      </form>
    </Card>
  )
}

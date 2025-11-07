import { Card } from "@/components/ui/card"
import Image from "next/image"

interface TeamCardProps {
  name: string
  title: string
  specialty: string
  image: string
}

export function TeamCard({ name, title, specialty, image }: TeamCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-64">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-lg text-foreground">{name}</h3>
        <p className="text-sm font-medium text-primary mb-2">{title}</p>
        <p className="text-sm text-muted-foreground">{specialty}</p>
      </div>
    </Card>
  )
}

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ItemCardProps {
  title: string
  description: string
  image: string
  price: number
}

export function ItemCard({ title, description, image, price }: ItemCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{title}</h3>
        <p className="text-sm text-muted-foreground truncate">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium">${price}</span>
        </div>
      </CardContent>
    </Card>
  )
}

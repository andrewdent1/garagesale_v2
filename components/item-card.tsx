import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ItemCardProps {
  title: string
  description: string
  image: string
  price: number
  seller: {
    name: string
    avatar: string
  }
}

export function ItemCard({ title, description, image, price, seller }: ItemCardProps) {
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
          <Avatar className="h-6 w-6">
            <AvatarImage src={seller.avatar} />
            <AvatarFallback>{seller.name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </CardContent>
    </Card>
  )
}

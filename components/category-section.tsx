"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ItemCard } from "./item-card"

interface CategorySectionProps {
  title: string
  items: Array<{
    id: string
    title: string
    description: string
    image: string
    price: number
  }>
}

export function CategorySection({ title, items }: CategorySectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -400 : 400
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-[280px] snap-start">
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </section>
  )
}

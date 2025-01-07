"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const categories = [
  "Electronics",
  "Furniture",
  "Clothing",
  "Books",
  "Sports",
  "Art",
  "Toys",
  "Garden",
]

export function PopularCategories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = direction === "left" ? -300 : 300
    container.scrollBy({ left: scrollAmount, behavior: "smooth" })
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-slate-800">Popular categories</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("left")}
              className="hidden md:flex"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll("right")}
              className="hidden md:flex"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {categories.map((category) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              className="flex-shrink-0 w-[200px] aspect-square bg-white rounded-lg shadow-sm overflow-hidden snap-start hover:shadow-md transition-shadow"
            >
              <div className="w-full h-full bg-gray-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

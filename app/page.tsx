import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { CategorySection } from "@/components/category-section"

// Generate 10 items for each category
function generateItems(category: string) {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `${category}-${i + 1}`,
    title: `${category} Item ${i + 1}`,
    description: `High-quality ${category.toLowerCase()} item for sale`,
    image: `/placeholder.svg?height=400&width=400&text=${category}+${i + 1}`,
    price: Math.floor(Math.random() * 900) + 100,
  }))
}

const categories = [
  "Electronics",
  "Home & Garden",
  "Clothing & Shoes",
  "Baby & Kids",
  "Vehicles",
  "Toys & Games",
  "Health & Beauty",
  "Pet Supplies",
  "Sports & Outdoors",
]

export default function CategoriesPage() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 pl-72">
          {categories.map((category) => (
            <CategorySection 
              key={category}
              title={category} 
              items={generateItems(category)} 
            />
          ))}
        </main>
      </div>
    </div>
  )
}

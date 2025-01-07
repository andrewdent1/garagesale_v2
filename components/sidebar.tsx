import Link from "next/link"
import { Baby, Car, Gamepad2, Heart, Home, PawPrint, Shirt, ShoppingBag, Smartphone } from 'lucide-react'

const categories = [
  { name: "Electronics", icon: Smartphone },
  { name: "Home & Garden", icon: Home },
  { name: "Clothing & Shoes", icon: Shirt },
  { name: "Baby & Kids", icon: Baby },
  { name: "Vehicles", icon: Car },
  { name: "Toys & Games", icon: Gamepad2 },
  { name: "Health & Beauty", icon: Heart },
  { name: "Pet Supplies", icon: PawPrint },
  { name: "Sports & Outdoors", icon: ShoppingBag },
]

const footerLinks = [
  "Sell an Item",
  "About",
  "Help",
  "Privacy Policy",
  "Terms of Service",
]

export function Sidebar() {
  return (
    <div className="w-64 border-r h-screen overflow-y-auto fixed left-0 top-16 p-4">
      <nav className="space-y-2">
        <div className="font-medium px-2 py-1.5">Browse All</div>
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/category/${category.name.toLowerCase().replace(/ & /g, "-")}`}
            className="flex items-center gap-2 px-2 py-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
          >
            <category.icon className="h-4 w-4" />
            {category.name}
          </Link>
        ))}
      </nav>
      <div className="mt-8 space-y-2">
        {footerLinks.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase().replace(/ /g, "-")}`}
            className="block px-2 py-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  )
}

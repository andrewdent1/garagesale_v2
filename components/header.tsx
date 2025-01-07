import { Search, Settings } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-[#2D3748] text-white">
      <div className="flex h-16 items-center px-4 gap-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-semibold text-xl">
          <div className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          GarageSale
        </Link>
        <div className="flex-1 flex justify-center">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search items..."
              className="pl-8 w-full bg-white/10 border-transparent placeholder:text-gray-400 focus-visible:bg-white focus-visible:text-gray-900"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="text-white hover:text-white border-white/20 hover:bg-white/10">
            Log in
          </Button>
        </div>
      </div>
    </header>
  )
}

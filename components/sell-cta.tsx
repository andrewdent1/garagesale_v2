import { Button } from "@/components/ui/button"

export function SellCTA() {
  return (
    <section className="bg-[#2D3748] text-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Looking to sell?</h2>
        <p className="text-lg text-gray-300 mb-8 font-mono">
          List items _______, _______, <br className="md:hidden" />
          and _______.
        </p>
        <Button 
          size="lg" 
          variant="outline" 
          className="text-white border-white/20 hover:bg-white/10 rounded-full px-8"
        >
          Get Started
        </Button>
      </div>
    </section>
  )
}

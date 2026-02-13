import { ShoppingBag, Star, Zap } from "lucide-react";
import { NeoButton } from "./NeoButton";

function App() {
  return (
    <div className="min-h-screen bg-neo-white text-neo-black overflow-x-hidden font-body">
      
      <nav className="border-b-4 border-black p-6 flex justify-between items-center bg-neo-yellow sticky top-0 z-50">
        <h1 className="text-3xl font-display italic">RADICAL_X</h1>
        <div className="hidden md:flex gap-6 font-bold text-lg">
          <a href="#" className="hover:underline decoration-4 decoration-neo-pink">DECKS</a>
          <a href="#" className="hover:underline decoration-4 decoration-neo-pink">WHEELS</a>
          <a href="#" className="hover:underline decoration-4 decoration-neo-pink">CLOTHING</a>
        </div>
        <div className="flex gap-4">
          <button className="p-2 border-2 border-black bg-white shadow-neo hover:translate-y-1 transition-all">
            <ShoppingBag size={24} />
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-8">
            <div className="inline-block bg-neo-pink text-white font-bold px-4 py-2 border-2 border-black shadow-neo -rotate-2">
              NEW COLLECTION 2026
            </div>

            <h2 className="text-7xl md:text-9xl font-display leading-[0.9]">SKATE <br/> OR <span className="text-neo-blue text-stroke-black">DIE</span>
            </h2>

            <p className="text-xl font-bold border-l-8 border-black pl-6 py-2 bg-gray-100 max-w-md">
              The most aggressive collection of the year. Indestructible shapes for those who aren't afraid of the asphalt.
            </p>

            <div className="flex gap-4 flex-wrap">
              <NeoButton text="BUY NOW" color="yellow" />
              <NeoButton text="VIEW LOOKBOOK" color="white" />
            </div>
          </div>

          <div className="relative">
            <Star size={180} fill="#FFDE00" strokeWidth={1.5} />
          </div>

          <div className="bg-white border-4 border-black p-8 shadow-neo-lg rotate-3 hover:rotate-0 transition-all duration-300">
            <div className="bg-gray-200 h-96 w-full border-2 border-black mb-6 flex items-center justify-center relative overflow-hidden group">

              <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-2 py-1 border-2 border-black z-10">
                -20% OFF
              </div>

              <img
                src="https://images.unsplash.com/photo-1520045822784-3d14212ef76e?q=80&w=1000&auto=format&fit=crop"
                alt="Skate Deck"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />

              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-display uppercase">Toxic City</h3>
                  <p className="font-bold text-gray-500">Pro Model 8.0</p>
                </div>
                <div className="text-4xl font-black text-neo-pink">
                  $59
                </div>

                <div className="absolute -bottom-6 -left-6 bg-neo-blue border-4 border-black p-4 rounded-full shadow-neo flex items-center gap-2 font-bold -rotate-12">
                  <Zap fill="black" /> FAST SHIPPING
                </div>
              </div>
            </div>

            <div className="mt-24 border-y-4 border-black bg-neo-yellow overflow-hidden py-4 -mx-4 md:-mx-20 rotate-1">
              <div className="whitespace-nowrap font-display text-4xl animate-marquee">
                SKATEBOARDING IS NOT A CRIME • FREE SHIPPING WORLDWIDE • NO POSERS ALLOWED •
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
import { Star } from "lucide-react"

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-stone-800 mb-16">O que dizem os clientes</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#FAF9F6] p-8 rounded-2xl relative reveal hover-float" style={{ transitionDelay: `0ms` }}>
            <div className="absolute -top-4 left-8 bg-rose-200 text-rose-700 p-2 rounded-lg">
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-stone-600 italic mb-6">"A melhor gestão de redes sociais que já vi. Amo seu trabalho. Obrigada!"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center text-stone-500 font-bold text-xs">D</div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Dray</h4>
                <p className="text-xs text-rose-500">@draymodas</p>
              </div>
            </div>
          </div>
          <div className="bg-[#FAF9F6] p-8 rounded-2xl relative reveal hover-float" style={{ transitionDelay: `140ms` }}>
            <div className="absolute -top-4 left-8 bg-rose-200 text-rose-700 p-2 rounded-lg">
              <Star size={20} fill="currentColor" />
            </div>
            <p className="text-stone-600 italic mb-6">"Eu amo seu trabalho, aprendo muito e tenho resultados muito positivos com suas ideias."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center text-stone-500 font-bold text-xs">E</div>
              <div>
                <h4 className="font-bold text-stone-800 text-sm">Eliana Chic Modas</h4>
                <p className="text-xs text-rose-500">@elianachicmodas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

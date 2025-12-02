import { Check } from "lucide-react"
import Link from "next/link"

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight: boolean;
}

interface PlanosProps {
  whatsappLink: string;
  packages: Package[];
}

export default function Planos({ whatsappLink, packages }: PlanosProps) {
  return (
    <section id="planos" className="py-24 bg-[#FAF9F6] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">Investimento</h2>
          <p className="text-stone-500">Escolha o plano ideal para o momento da sua empresa.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl flex flex-col ${
                pkg.highlight ? "border-rose-200 shadow-lg scale-105 z-10" : "border-stone-100 hover:border-stone-200"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full">
                  Mais Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-stone-800 mb-2">{pkg.name}</h3>
                <p className="text-sm text-stone-500 h-10">{pkg.description}</p>
              </div>
              <div className="mb-8 flex items-baseline">
                <span className="text-sm text-stone-500 mr-1">R$</span>
                <span className="text-4xl font-serif font-bold text-stone-800">{pkg.price}</span>
                <span className="text-stone-400 text-sm">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                    <Check size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-xl font-medium text-center transition-colors ${
                  pkg.highlight ? "bg-stone-800 text-white hover:bg-rose-500" : "bg-stone-100 text-stone-800 hover:bg-stone-200"
                }`}
              >
                Contratar Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Instagram } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  whatsappLink: string;
  instagramLink: string;
}

export default function Header({ whatsappLink, instagramLink }: HeaderProps) {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60" />
      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-xs font-bold tracking-widest uppercase mb-6">Social Media Strategy</span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-800 mb-6 leading-tight">
          Eduarda <span className="italic text-rose-500">Mendonça</span>
        </h1>
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Facilito sua vida cuidando do digital com estratégia, dados e foco em resultados reais. O Instagram pode ser um lugar leve e fácil de trabalhar.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#planos" className="px-8 py-4 bg-stone-800 text-white rounded-full font-medium hover:bg-rose-500 transition-all duration-300 shadow-xl shadow-stone-200">Ver Planos</Link>
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-stone-800 border border-stone-200 rounded-full font-medium hover:border-rose-300 hover:text-rose-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Instagram size={20} />
            @EMendonadigital
          </a>
        </div>
      </div>
    </header>
  )
}
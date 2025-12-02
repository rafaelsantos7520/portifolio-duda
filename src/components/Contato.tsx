import { Smartphone } from "lucide-react"

interface ContatoProps {
  whatsappLink: string;
}

export default function Contato({ whatsappLink }: ContatoProps) {
  return (
    <section className="py-20 bg-stone-900 text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Vamos fechar uma parceria?</h2>
        <p className="text-stone-400 mb-10 text-lg">Leve sua empresa para o próximo nível no digital.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-rose-500 text-white rounded-full font-bold hover:bg-rose-600 transition-all transform hover:scale-105 shadow-lg shadow-rose-900/50"
        >
          <Smartphone size={20} />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}

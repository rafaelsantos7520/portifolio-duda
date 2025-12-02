import Image from "next/image"
import { BarChart, Heart, Users } from "lucide-react"

export default function Proposito() {
  return (
    <section id="proposito" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-stone-100 rounded-tl-[5rem] rounded-br-[5rem] rotate-3" />
            <div className="relative rounded-tl-[5rem] rounded-br-[5rem] shadow-2xl w-full h-96 lg:h-[500px] overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Foto de perfil"
                fill
                className="object-cover object-top transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-stone-800">
              Transforme seguidores em <span className="text-rose-500">fãs e clientes</span>.
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Meu propósito é tirar o peso das redes sociais das suas costas. Eu cuido do planejamento,
              da estratégia e da execução, para que você possa focar no que faz de melhor: gerir o seu negócio.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="p-2 bg-rose-50 rounded-full text-rose-500 mt-1"><BarChart size={18} /></div>
                <div>
                  <h4 className="font-bold text-stone-800">Estratégico</h4>
                  <p className="text-sm text-stone-500">Conteúdo pensado para converter.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-rose-50 rounded-full text-rose-500 mt-1"><Heart size={18} /></div>
                <div>
                  <h4 className="font-bold text-stone-800">Personalizado</h4>
                  <p className="text-sm text-stone-500">A essência da sua marca em cada post.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-2 bg-rose-50 rounded-full text-rose-500 mt-1"><Users size={18} /></div>
                <div>
                  <h4 className="font-bold text-stone-800">Bem Posicionado</h4>
                  <p className="text-sm text-stone-500">Autoridade e reconhecimento no seu nicho.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
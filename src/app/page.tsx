"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Instagram, Smartphone, Check, Star, Menu, X, Heart, BarChart, Users } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const whatsappNumber = "5527998114944"
  const whatsappMessage = encodeURIComponent("Olá Eduarda! Vi seu site e gostaria de saber mais sobre a consultoria.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const instagramLink = "https://instagram.com/EMendonadigital"

  const packages = [
    {
      name: "Básico",
      price: "300",
      description: "Para quem está começando e precisa de constância.",
      features: [
        "4 Reels por mês (1 por semana)",
        "8 Posts por mês (2 por semana)",
        "60 Stories por mês (2 por dia útil)",
        "Relatório simples mensal",
      ],
      highlight: false,
    },
    {
      name: "Intermediário",
      price: "500",
      description: "O equilíbrio ideal entre conteúdo e tráfego pago.",
      features: [
        "12 Reels por mês (3 por semana)",
        "24 Posts por mês (6 por semana)",
        "120 Stories por mês (4 por dia útil)",
        "1 Campanha de tráfego pago/semana",
        "Relatório mensal completo",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "700",
      description: "Estratégia total com foco em crescimento acelerado.",
      features: [
        "16 Reels por mês (4 por semana)",
        "30 Posts por mês (7-8 por semana)",
        "160 Stories por mês (Bastidores/Vendas)",
        "2 Campanhas de tráfego pago/semana",
        "Reunião estratégica mensal + Relatório detalhado",
      ],
      highlight: false,
    },
  ]

  return (
    <div className="font-sans text-stone-800 bg-[#FAF9F6] selection:bg-rose-200">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
        aria-label="Navegação principal"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter text-stone-700">
            EM<span className="text-rose-400">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#proposito" className="hover:text-rose-500 transition-colors">Propósito</a>
            <a href="#servicos" className="hover:text-rose-500 transition-colors">Serviços</a>
            <a href="#planos" className="hover:text-rose-500 transition-colors">Planos</a>
            <a href="#depoimentos" className="hover:text-rose-500 transition-colors">Depoimentos</a>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-6 py-2 bg-stone-800 text-white rounded-full text-sm font-medium hover:bg-rose-500 transition-all duration-300 shadow-lg hover:shadow-rose-200"
          >
            Fale Comigo
          </a>
          <button className="md:hidden text-stone-600" onClick={toggleMenu} aria-label="Abrir menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-100 p-6 flex flex-col space-y-4 shadow-xl">
            <a href="#proposito" onClick={toggleMenu} className="text-stone-600 font-medium">Propósito</a>
            <a href="#servicos" onClick={toggleMenu} className="text-stone-600 font-medium">Serviços</a>
            <a href="#planos" onClick={toggleMenu} className="text-stone-600 font-medium">Planos</a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer" onClick={toggleMenu} className="text-rose-500 font-bold">Instagram</a>
            <a href={whatsappLink} className="text-rose-500 font-bold">Entrar em contato</a>
          </div>
        )}
      </nav>

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
            <a href="#planos" className="px-8 py-4 bg-stone-800 text-white rounded-full font-medium hover:bg-rose-500 transition-all duration-300 shadow-xl shadow-stone-200">Ver Planos</a>
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

      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-center text-stone-800 mb-16">O que dizem os clientes</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#FAF9F6] p-8 rounded-2xl relative">
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
            <div className="bg-[#FAF9F6] p-8 rounded-2xl relative">
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

      <footer className="bg-stone-950 text-stone-500 py-10 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold tracking-tighter text-stone-200">
            EM<span className="text-rose-500">.</span>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Eduarda Mendonça. Todos os direitos reservados.</div>
          <div className="flex gap-4">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-500 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">
              <Smartphone size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

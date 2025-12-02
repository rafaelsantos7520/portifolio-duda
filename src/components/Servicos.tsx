"use client"
import { CalendarCheck2, FileText, MessageCircle, BarChart3 } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Servicos() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onScroll = () => {
      const cards = el.querySelectorAll<HTMLElement>('[data-serv-card]')
      const vh = window.innerHeight
      cards.forEach((c) => {
        const rect = c.getBoundingClientRect()
        const fromCenter = (rect.top + rect.height / 2) - (vh / 2)
        const translate = Math.max(-6, Math.min(6, fromCenter / 40))
        c.style.transform = `translateY(${translate}px)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const items = [
    { icon: <FileText size={18} />, title: "Conteúdo que vende", desc: "Roteiro, criação e copy alinhados à estratégia." },
    { icon: <MessageCircle size={18} />, title: "Gestão de comunidade", desc: "Comentários e DMs com atenção e voz da marca." },
    { icon: <BarChart3 size={18} />, title: "Relatórios e métricas", desc: "Acompanhamento de resultados e otimizações constantes." },
    { icon: <CalendarCheck2 size={18} />, title: "Planejamento mensal", desc: "Calendário editorial e execução sem dor de cabeça." },
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div ref={containerRef} className="container mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800">Serviços</h2>
          <p className="text-stone-500 mt-2">O que colocamos em prática para posicionar sua marca.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} data-serv-card className="reveal rounded-2xl border border-stone-100 bg-[#FAF9F6] p-6 hover:shadow-xl transition-all hover-float" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="p-2 bg-rose-50 rounded-full text-rose-500 w-fit mb-4">{it.icon}</div>
              <h3 className="font-bold text-stone-800 mb-1">{it.title}</h3>
              <p className="text-sm text-stone-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

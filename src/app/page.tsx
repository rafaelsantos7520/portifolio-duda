"use client"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Proposito from "../components/Proposito"
import Servicos from "../components/Servicos"
import Planos from "../components/Planos"
import Depoimentos from "../components/Depoimentos"
import Contato from "../components/Contato"
import Footer from "../components/Footer"

import { useEffect } from "react"

export default function Home() {
  const whatsappNumber = "5527998114944"
  const whatsappMessage = encodeURIComponent("Olá Eduarda! Vi seu site e gostaria de saber mais sobre a consultoria.")
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
  const instagramLink = "https://instagram.com/emmendoncadigital"

  const packages = [
    {
      name: "Básico",
      price: "300",
      description: "Para quem está começando e precisa de constância.",
      features: [
        "3 Reels por mês (1 por semana)",
        "8 Posts por mês (2 por semana)",
        "60 Stories por mês (2 por dia útil)",
        "Relatório simples mensal (principais números e prints)",
      ],
      highlight: false,
    },
    {
      name: "Intermediário",
      price: "500",
      description: "O equilíbrio ideal entre conteúdo e tráfego pago.",
      features: [
        "8 Reels por mês (2 por semana)",
        "20 Posts por mês (5 por semana entre foto e carrossel)",
        "120 Stories por mês (4 por dia útil)",
        "1 Campanha de tráfego pago/semana",
        "Relatório mensal completo (crescimento, alcance e vendas/WhatsApp)",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "750",
      description: "Estratégia total com foco em crescimento acelerado.",
      features: [
        "12 Reels por mês (3 por semana, com testes de criativos)",
        "30 Posts por mês (7-8 por semana)",
        "160 Stories por mês (bastidores, lançamentos e ofertas)",
        "2 Campanhas de tráfego pago/semana (ativa + promoção/inauguração)",
        "Relatório detalhado + 1 reunião rápida/mês (online)",
      ],
      highlight: false,
    },
  ]

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right"))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })

    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="font-sans text-stone-800 bg-[#FAF9F6] selection:bg-rose-200">
      <Navbar whatsappLink={whatsappLink} instagramLink={instagramLink} />

      <Header whatsappLink={whatsappLink} instagramLink={instagramLink} />

      <Proposito />

      <Servicos />

      <Planos whatsappLink={whatsappLink} packages={packages} />

      <Depoimentos />

      <Contato whatsappLink={whatsappLink} />

      <Footer instagramLink={instagramLink} whatsappLink={whatsappLink} />
    </div>
  )
}

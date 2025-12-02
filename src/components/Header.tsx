"use client"
import { Instagram } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface HeaderProps {
  whatsappLink: string;
  instagramLink: string;
}

export default function Header({ whatsappLink, instagramLink }: HeaderProps) {
  const topRef = useRef<HTMLDivElement>(null)
  const botRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0
        const top = topRef.current
        const bot = botRef.current
        const t1 = Math.min(40, y * 0.06)
        const t2 = Math.min(40, y * 0.04)
        if (top) top.style.transform = `translate3d(${t1}px, ${-t1}px, 0)`
        if (bot) bot.style.transform = `translate3d(${-t2}px, ${t2}px, 0)`
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  return (
    <header className="relative min-h-[85vh] lg:min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-100 rounded-full blur-3xl opacity-50"
        style={{ animation: "floatSlow 24s ease-in-out infinite" }}
        ref={topRef}
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60"
        style={{ animation: "floatAlt 26s ease-in-out infinite" }}
        ref={botRef}
      />
      <div className="container mx-auto px-6 relative z-10 text-center reveal">
        <span className="inline-block py-1 px-3 rounded-full bg-rose-50 text-rose-600 text-xs font-bold tracking-widest uppercase mb-6">Social Media Strategy</span>
        <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-stone-800 mb-6 leading-tight tracking-tight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}>
          {"Eduarda".split("").map((ch, i) => (
            <motion.span key={`e-${i}`} className="title-char" style={{ animationDelay: `${i * 60}ms` }}>{ch}</motion.span>
          ))}
          {" "}
          <span className="italic whitespace-nowrap">
            {"Mendonça".split("").map((ch, i) => (
              <motion.span key={`m-${i}`} className="title-char text-shimmer" style={{ animationDelay: `${i * 60 + 400}ms` }}>{ch}</motion.span>
            ))}
          </span>
        </motion.h1>
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

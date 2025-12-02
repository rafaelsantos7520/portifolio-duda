"use client"
import React, { useEffect, useState } from "react"
import { Instagram, Smartphone, Menu, X } from "lucide-react"
import Link from "next/link"

interface NavbarProps {
  whatsappLink: string;
  instagramLink: string;
}

export default function Navbar({ whatsappLink, instagramLink }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
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
  )
}

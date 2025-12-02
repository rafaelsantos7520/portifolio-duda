import { Instagram, Smartphone } from "lucide-react"

interface FooterProps {
  instagramLink: string;
  whatsappLink: string;
}

export default function Footer({ instagramLink, whatsappLink }: FooterProps) {
  return (
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
  )
}

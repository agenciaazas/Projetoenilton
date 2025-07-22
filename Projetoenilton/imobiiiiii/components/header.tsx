"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-white">
              Elite<span className="text-yellow-500">Imóveis</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-yellow-500 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-white hover:text-yellow-500 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-white hover:text-yellow-500 transition-colors">
              Serviços
            </a>
            <a href="#equipe" className="text-white hover:text-yellow-500 transition-colors">
              Equipe
            </a>
            <a href="#parceiros" className="text-white hover:text-yellow-500 transition-colors">
              Parceiros
            </a>
            <a href="#contato" className="text-white hover:text-yellow-500 transition-colors">
              Contato
            </a>
          </nav>

          <Button className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            Fale Conosco
          </Button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white hover:text-yellow-500">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-yellow-500/20">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#inicio" className="text-white hover:text-yellow-500 transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-white hover:text-yellow-500 transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-white hover:text-yellow-500 transition-colors">
                Serviços
              </a>
              <a href="#equipe" className="text-white hover:text-yellow-500 transition-colors">
                Equipe
              </a>
              <a href="#parceiros" className="text-white hover:text-yellow-500 transition-colors">
                Parceiros
              </a>
              <a href="#contato" className="text-white hover:text-yellow-500 transition-colors">
                Contato
              </a>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-full">
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

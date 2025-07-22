import { Home, Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Home className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold">
                Elite<span className="text-yellow-500">Imóveis</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sua parceira de confiança no mercado imobiliário. Conectamos pessoas aos seus sonhos através do imóvel
              ideal.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Facebook className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Instagram className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-black" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Youtube className="h-5 w-5 text-black" />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#parceiros" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Parceiros
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Compra de Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Venda de Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Locação
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Avaliação Gratuita
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Consultoria
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  Documentação
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Av. Paulista, 1000 - Sala 1501</p>
                  <p className="text-gray-300">Bela Vista, São Paulo - SP</p>
                  <p className="text-gray-300">CEP: 01310-100</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <div>
                  <p className="text-gray-300">(11) 3000-0000</p>
                  <p className="text-gray-300">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-yellow-500 mr-3" />
                <p className="text-gray-300">contato@eliteimoveis.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Elite Imóveis. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Building } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-500 rounded-full text-sm font-semibold border border-yellow-500/30">
              #1 Corretor de Imóveis da Região
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Encontre o<span className="text-yellow-500 block">Imóvel Perfeito</span>
            para Você
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Com mais de 15 anos de experiência no mercado imobiliário, oferecemos as melhores oportunidades de compra,
            venda e locação de imóveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
              Ver Imóveis Disponíveis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 text-lg bg-transparent"
            >
              Agendar Consulta
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300">Imóveis Vendidos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-3xl font-bold text-white">1000+</span>
              </div>
              <p className="text-gray-300">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-3xl font-bold text-white">15+</span>
              </div>
              <p className="text-gray-300">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

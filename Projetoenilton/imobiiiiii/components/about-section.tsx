import { Button } from "@/components/ui/button"
import { Award, Shield, Heart, TrendingUp } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <span className="text-yellow-500 font-semibold text-lg">Sobre Nós</span>
              <h2 className="text-4xl font-bold text-black mt-2 mb-4">
                Sua Confiança é Nossa
                <span className="text-yellow-500"> Prioridade</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos uma empresa especializada em consultoria imobiliária, com foco em proporcionar as melhores
              experiências para nossos clientes. Nossa missão é conectar pessoas aos seus sonhos através do imóvel
              ideal.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Com uma equipe altamente qualificada e tecnologia de ponta, garantimos transparência, agilidade e
              segurança em todas as transações.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <Award className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-black">Premiados</h4>
                  <p className="text-gray-600 text-sm">Melhor Imobiliária 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-black">Segurança</h4>
                  <p className="text-gray-600 text-sm">100% Garantida</p>
                </div>
              </div>
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-black">Atendimento</h4>
                  <p className="text-gray-600 text-sm">Personalizado</p>
                </div>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-yellow-500 mr-3" />
                <div>
                  <h4 className="font-semibold text-black">Resultados</h4>
                  <p className="text-gray-600 text-sm">Comprovados</p>
                </div>
              </div>
            </div>

            <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">Conheça Nossa História</Button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl p-8 transform rotate-3">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Sobre a empresa"
                className="w-full h-80 object-cover rounded-lg transform -rotate-3"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-500">15+</h3>
              <p className="text-sm">Anos no Mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

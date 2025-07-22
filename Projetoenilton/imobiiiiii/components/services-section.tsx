import { Card, CardContent } from "@/components/ui/card"
import { Home, Key, Calculator, FileText, Users, Handshake } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Compra de Imóveis",
      description: "Encontramos o imóvel perfeito para você com as melhores condições do mercado.",
    },
    {
      icon: Key,
      title: "Venda de Imóveis",
      description: "Vendemos seu imóvel pelo melhor preço com estratégias personalizadas.",
    },
    {
      icon: Calculator,
      title: "Avaliação Gratuita",
      description: "Avaliamos seu imóvel gratuitamente com base no mercado atual.",
    },
    {
      icon: FileText,
      title: "Documentação",
      description: "Cuidamos de toda documentação necessária para sua transação.",
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Oferecemos consultoria especializada para investimentos imobiliários.",
    },
    {
      icon: Handshake,
      title: "Locação",
      description: "Administramos locações com total segurança para proprietários e inquilinos.",
    },
  ]

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-lg">Nossos Serviços</span>
          <h2 className="text-4xl font-bold text-black mt-2 mb-4">
            Soluções Completas em
            <span className="text-yellow-500"> Imóveis</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços imobiliários para atender todas as suas necessidades com excelência
            e profissionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-black hover:text-white"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-yellow-500/10 group-hover:bg-yellow-500 rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-yellow-500 group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

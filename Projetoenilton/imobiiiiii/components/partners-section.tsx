import { Card, CardContent } from "@/components/ui/card"

export default function PartnersSection() {
  const partners = [
    {
      name: "Imobiliária Premium",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Parceria estratégica em imóveis de luxo",
    },
    {
      name: "Construtora Elite",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Lançamentos exclusivos e empreendimentos",
    },
    {
      name: "Banco Financeiro",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Melhores condições de financiamento",
    },
    {
      name: "Seguradora Confiança",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Seguros residenciais e comerciais",
    },
    {
      name: "Advocacia Jurídica",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Assessoria jurídica especializada",
    },
    {
      name: "Avaliações Técnicas",
      logo: "/placeholder.svg?height=100&width=200",
      description: "Laudos e avaliações profissionais",
    },
  ]

  return (
    <section id="parceiros" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-lg">Nossos Parceiros</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            Rede de
            <span className="text-yellow-500"> Confiança</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Trabalhamos com os melhores parceiros do mercado para oferecer soluções completas e integradas para nossos
            clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-yellow-500 transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    className="h-16 mx-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

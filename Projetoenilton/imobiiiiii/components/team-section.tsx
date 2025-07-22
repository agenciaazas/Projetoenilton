import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Phone } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Carlos Silva",
      role: "Diretor Geral",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista em mercado imobiliário com mais de 20 anos de experiência.",
      linkedin: "#",
      email: "carlos@eliteimoveis.com",
      phone: "(11) 99999-9999",
    },
    {
      name: "Ana Santos",
      role: "Corretora Senior",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especializada em imóveis residenciais de alto padrão.",
      linkedin: "#",
      email: "ana@eliteimoveis.com",
      phone: "(11) 88888-8888",
    },
    {
      name: "Roberto Lima",
      role: "Corretor Comercial",
      image: "/placeholder.svg?height=300&width=300",
      description: "Focado em imóveis comerciais e investimentos corporativos.",
      linkedin: "#",
      email: "roberto@eliteimoveis.com",
      phone: "(11) 77777-7777",
    },
    {
      name: "Marina Costa",
      role: "Consultora de Locação",
      image: "/placeholder.svg?height=300&width=300",
      description: "Especialista em locações residenciais e comerciais.",
      linkedin: "#",
      email: "marina@eliteimoveis.com",
      phone: "(11) 66666-6666",
    },
  ]

  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-lg">Nossa Equipe</span>
          <h2 className="text-4xl font-bold text-black mt-2 mb-4">
            Profissionais
            <span className="text-yellow-500"> Especializados</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça nossa equipe de corretores experientes, prontos para ajudar você a encontrar o imóvel dos seus
            sonhos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
              <div className="relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={member.linkedin}
                      className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-black" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-black" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors"
                    >
                      <Phone className="h-4 w-4 text-black" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-black mb-1">{member.name}</h3>
                <p className="text-yellow-500 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

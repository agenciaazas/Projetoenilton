"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "João Pereira",
      role: "Empresário",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Excelente atendimento! Encontrei minha casa dos sonhos em apenas 2 semanas. A equipe foi muito profissional e atenciosa durante todo o processo.",
    },
    {
      name: "Maria Oliveira",
      role: "Arquiteta",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Vendi meu apartamento pelo melhor preço do mercado. O trabalho de marketing e divulgação foi excepcional. Recomendo para todos!",
    },
    {
      name: "Pedro Santos",
      role: "Investidor",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Consultoria de investimento imobiliário de primeira qualidade. Me ajudaram a montar um portfólio rentável e seguro.",
    },
    {
      name: "Ana Costa",
      role: "Médica",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Processo de compra muito tranquilo e transparente. Toda documentação foi cuidada com perfeição. Equipe nota 10!",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-semibold text-lg">Depoimentos</span>
          <h2 className="text-4xl font-bold text-black mt-2 mb-4">
            O que Nossos
            <span className="text-yellow-500"> Clientes Dizem</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12">
              <div className="text-center">
                <Quote className="h-12 w-12 text-yellow-500 mx-auto mb-6" />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center justify-center mb-8">
                  <img
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-black text-lg">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>

                <div className="flex justify-center items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentTestimonial ? "bg-yellow-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black bg-transparent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileNav = document.getElementById("mobileNav")

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active")
  const icon = mobileMenuBtn.querySelector("i")
  if (mobileNav.classList.contains("active")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")
  } else {
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  }
})

// Close mobile menu when clicking on links
const mobileNavLinks = mobileNav.querySelectorAll("a")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active")
    const icon = mobileMenuBtn.querySelector("i")
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  })
})

// Testimonials Carousel
const testimonials = [
  {
    text: "Excelente atendimento! Encontrei minha casa dos sonhos em apenas 2 semanas. A equipe foi muito profissional e atenciosa durante todo o processo.",
    author: "João Pereira",
    role: "Empresário",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    text: "Vendi meu apartamento pelo melhor preço do mercado. O trabalho de marketing e divulgação foi excepcional. Recomendo para todos!",
    author: "Maria Oliveira",
    role: "Arquiteta",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    text: "Consultoria de investimento imobiliário de primeira qualidade. Me ajudaram a montar um portfólio rentável e seguro.",
    author: "Pedro Santos",
    role: "Investidor",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    text: "Processo de compra muito tranquilo e transparente. Toda documentação foi cuidada com perfeição. Equipe nota 10!",
    author: "Ana Costa",
    role: "Médica",
    image: "/placeholder.svg?height=100&width=100",
  },
]

let currentTestimonial = 0

function updateTestimonial() {
  const testimonialCard = document.querySelector(".testimonial-card")
  const testimonial = testimonials[currentTestimonial]

  testimonialCard.innerHTML = `
        <i class="fas fa-quote-left"></i>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <p class="testimonial-text">"${testimonial.text}"</p>
        <div class="testimonial-author">
            <img src="${testimonial.image}" alt="${testimonial.author}">
            <div>
                <h4>${testimonial.author}</h4>
                <p>${testimonial.role}</p>
            </div>
        </div>
    `

  // Update dots
  const dots = document.querySelectorAll(".dot")
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentTestimonial)
  })
}

// Next testimonial
document.getElementById("nextTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  updateTestimonial()
})

// Previous testimonial
document.getElementById("prevTestimonial").addEventListener("click", () => {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
  updateTestimonial()
})

// Dot navigation
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentTestimonial = index
    updateTestimonial()
  })
})

// Auto-advance testimonials
setInterval(() => {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length
  updateTestimonial()
}, 5000)

// Contact Form
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form data
  const formData = new FormData(contactForm)
  const data = Object.fromEntries(formData)

  // Simulate form submission
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")

  // Reset form
  contactForm.reset()

  // In a real application, you would send the data to your server
  console.log("Form data:", data)
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.background = "rgba(0, 0, 0, 0.98)"
  } else {
    header.style.background = "rgba(0, 0, 0, 0.95)"
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".service-card, .team-card, .partner-card").forEach((el) => {
  observer.observe(el)
})

// Initialize testimonials
updateTestimonial()

// Phone number formatting
const phoneInput = document.getElementById("phone")
phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "")
  if (value.length >= 11) {
    value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
  } else if (value.length >= 7) {
    value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3")
  } else if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2")
  }
  e.target.value = value
})

// Add loading states to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.type === "submit") {
      const originalText = this.textContent
      this.textContent = "Enviando..."
      this.disabled = true

      setTimeout(() => {
        this.textContent = originalText
        this.disabled = false
      }, 2000)
    }
  })
})

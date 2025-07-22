// Sample properties data
const sampleProperties = [
  {
    id: 1,
    title: "Apartamento Moderno no Centro",
    price: 450000,
    location: "Centro, São Paulo - SP",
    type: "apartamento",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Garagem", "Elevador", "Portaria 24h"],
    description: "Apartamento moderno com acabamento de primeira qualidade...",
    isNew: true,
  },
  {
    id: 2,
    title: "Casa com Piscina e Jardim",
    price: 750000,
    location: "Vila Madalena, São Paulo - SP",
    type: "casa",
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Piscina", "Jardim", "Churrasqueira", "Garagem"],
    description: "Linda casa com área de lazer completa...",
    isNew: false,
  },
  {
    id: 3,
    title: "Cobertura Duplex com Vista",
    price: 1200000,
    location: "Ipanema, Rio de Janeiro - RJ",
    type: "cobertura",
    bedrooms: 4,
    bathrooms: 4,
    area: 250,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Vista para o mar", "Varanda", "Elevador", "Portaria 24h"],
    description: "Cobertura duplex com vista deslumbrante para o mar...",
    isNew: false,
  },
  {
    id: 4,
    title: "Sobrado Familiar Espaçoso",
    price: 680000,
    location: "Moema, São Paulo - SP",
    type: "sobrado",
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Jardim", "Garagem", "Churrasqueira"],
    description: "Sobrado ideal para famílias grandes...",
    isNew: false,
  },
  {
    id: 5,
    title: "Apartamento Studio Moderno",
    price: 280000,
    location: "Bela Vista, São Paulo - SP",
    type: "apartamento",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Elevador", "Portaria 24h", "Academia"],
    description: "Studio moderno perfeito para jovens profissionais...",
    isNew: true,
  },
  {
    id: 6,
    title: "Casa de Campo com Área Rural",
    price: 950000,
    location: "Campos do Jordão, SP",
    type: "casa",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    image: "/placeholder.svg?height=250&width=350",
    features: ["Piscina", "Jardim", "Churrasqueira", "Vista para montanha"],
    description: "Casa de campo com vista deslumbrante...",
    isNew: false,
  },
]

let currentProperties = [...sampleProperties]
let currentFilters = {}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  renderProperties(currentProperties)
  initializeFilters()
  initializeSearch()
  initializeModal()
  updateResultsCount()
})

// Render properties
function renderProperties(properties) {
  const grid = document.getElementById("propertiesGrid")

  if (properties.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <h3>Nenhum imóvel encontrado</h3>
        <p>Tente ajustar os filtros de busca</p>
      </div>
    `
    return
  }

  grid.innerHTML = properties
    .map(
      (property) => `
    <div class="property-card" data-id="${property.id}">
      <div class="property-image">
        <img src="${property.image}" alt="${property.title}">
        ${property.isNew ? '<div class="property-badge">Novo</div>' : ""}
        <button class="property-favorite" data-id="${property.id}">
          <i class="far fa-heart"></i>
        </button>
      </div>
      <div class="property-info">
        <div class="property-price">R$ ${formatPrice(property.price)}</div>
        <h3 class="property-title">${property.title}</h3>
        <div class="property-location">
          <i class="fas fa-map-marker-alt"></i>
          ${property.location}
        </div>
        <div class="property-features">
          <div class="feature-item">
            <i class="fas fa-bed"></i>
            <span>${property.bedrooms} quartos</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-bath"></i>
            <span>${property.bathrooms} banheiros</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-ruler-combined"></i>
            <span>${property.area}m²</span>
          </div>
        </div>
        <div class="property-actions">
          <button class="btn-contact" onclick="openRequestModal(${property.id})">
            <i class="fas fa-heart"></i>
            Tenho Interesse
          </button>
          <button class="btn-details" onclick="viewDetails(${property.id})">
            <i class="fas fa-eye"></i>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("")

  // Add favorite functionality
  document.querySelectorAll(".property-favorite").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.stopPropagation()
      this.classList.toggle("active")
      const icon = this.querySelector("i")
      if (this.classList.contains("active")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
      }
    })
  })
}

// Format price
function formatPrice(price) {
  return price.toLocaleString("pt-BR")
}

// Initialize filters
function initializeFilters() {
  const applyBtn = document.getElementById("applyFilters")
  const clearBtn = document.getElementById("clearFilters")

  applyBtn.addEventListener("click", applyFilters)
  clearBtn.addEventListener("click", clearFilters)

  // Price input formatting
  const priceInputs = document.querySelectorAll(".price-input")
  priceInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      let value = e.target.value.replace(/\D/g, "")
      if (value) {
        value = Number.parseInt(value).toLocaleString("pt-BR")
        e.target.value = "R$ " + value
      }
    })
  })
}

// Apply filters
function applyFilters() {
  const filters = {
    type: document.getElementById("propertyType").value,
    city: document.getElementById("city").value,
    bedrooms: document.getElementById("bedrooms").value,
    minPrice: parsePrice(document.getElementById("minPrice").value),
    maxPrice: parsePrice(document.getElementById("maxPrice").value),
  }

  currentFilters = filters

  const filtered = sampleProperties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false
    if (filters.bedrooms && property.bedrooms < Number.parseInt(filters.bedrooms)) return false
    if (filters.minPrice && property.price < filters.minPrice) return false
    if (filters.maxPrice && property.price > filters.maxPrice) return false

    return true
  })

  currentProperties = filtered
  renderProperties(currentProperties)
  updateResultsCount()
}

// Clear filters
function clearFilters() {
  document.getElementById("propertyType").value = ""
  document.getElementById("city").value = ""
  document.getElementById("bedrooms").value = ""
  document.getElementById("minPrice").value = ""
  document.getElementById("maxPrice").value = ""

  currentFilters = {}
  currentProperties = [...sampleProperties]
  renderProperties(currentProperties)
  updateResultsCount()
}

// Parse price from formatted string
function parsePrice(priceStr) {
  if (!priceStr) return null
  return Number.parseInt(priceStr.replace(/\D/g, ""))
}

// Initialize search
function initializeSearch() {
  const searchBtn = document.getElementById("searchBtn")
  const searchInput = document.getElementById("searchInput")

  searchBtn.addEventListener("click", performSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })
}

// Perform search
function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase()

  if (!query) {
    currentProperties = [...sampleProperties]
  } else {
    currentProperties = sampleProperties.filter(
      (property) =>
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query),
    )
  }

  renderProperties(currentProperties)
  updateResultsCount()
}

// Update results count
function updateResultsCount() {
  const count = currentProperties.length
  const countElement = document.getElementById("resultsCount")
  countElement.textContent = `Encontrados ${count} imóveis`
}

// Initialize modal
function initializeModal() {
  const modal = document.getElementById("requestModal")
  const closeBtn = document.getElementById("closeModal")
  const form = document.getElementById("requestForm")

  closeBtn.addEventListener("click", closeRequestModal)

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeRequestModal()
    }
  })

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    submitRequest()
  })

  // Phone formatting
  const phoneInputs = document.querySelectorAll("#requestPhone")
  phoneInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
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
  })
}

// Open request modal
function openRequestModal(propertyId) {
  const property = sampleProperties.find((p) => p.id === propertyId)
  if (!property) return

  const modal = document.getElementById("requestModal")
  const image = document.getElementById("modalPropertyImage")
  const title = document.getElementById("modalPropertyTitle")
  const price = document.getElementById("modalPropertyPrice")

  image.src = property.image
  image.alt = property.title
  title.textContent = property.title
  price.textContent = `R$ ${formatPrice(property.price)}`

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close request modal
function closeRequestModal() {
  const modal = document.getElementById("requestModal")
  modal.classList.remove("active")
  document.body.style.overflow = ""

  // Reset form
  document.getElementById("requestForm").reset()
}

// Submit request
function submitRequest() {
  const formData = new FormData(document.getElementById("requestForm"))
  const data = Object.fromEntries(formData)

  // Simulate API call
  console.log("Request submitted:", data)

  // Show success message
  alert("Solicitação enviada com sucesso! Entraremos em contato em breve.")

  closeRequestModal()
}

// View property details
function viewDetails(propertyId) {
  // In a real application, this would navigate to a detailed property page
  alert(`Visualizar detalhes do imóvel ${propertyId}`)
}

// Load more properties
document.getElementById("loadMore").addEventListener("click", function () {
  // Simulate loading more properties
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...'

  setTimeout(() => {
    this.innerHTML = '<i class="fas fa-plus"></i> Carregar Mais Imóveis'
    // In a real application, you would load more properties from the API
  }, 1000)
})

// Sort functionality
document.getElementById("sortBy").addEventListener("change", function () {
  const sortBy = this.value

  switch (sortBy) {
    case "price-low":
      currentProperties.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      currentProperties.sort((a, b) => b.price - a.price)
      break
    case "size":
      currentProperties.sort((a, b) => b.area - a.area)
      break
    case "recent":
    default:
      currentProperties.sort((a, b) => b.id - a.id)
      break
  }

  renderProperties(currentProperties)
})

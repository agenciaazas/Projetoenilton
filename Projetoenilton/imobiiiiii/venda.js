// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  initializeSellForm()
  initializePhotoUpload()
  initializeModals()
})

// Initialize sell form
function initializeSellForm() {
  const form = document.getElementById("sellForm")
  const startBtn = document.getElementById("startSelling")

  // Scroll to form when start button is clicked
  startBtn.addEventListener("click", () => {
    document.querySelector(".sell-form-section").scrollIntoView({
      behavior: "smooth",
    })
  })

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    submitProperty()
  })

  // Price input formatting
  const priceInput = document.getElementById("sellPrice")
  priceInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value) {
      value = Number.parseInt(value).toLocaleString("pt-BR")
      e.target.value = "R$ " + value
    }
  })

  // Phone formatting
  const phoneInputs = document.querySelectorAll("#ownerPhone, #ownerWhatsapp")
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

  // CEP formatting and lookup
  const zipInput = document.getElementById("sellZipCode")
  zipInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length <= 8) {
      value = value.replace(/(\d{5})(\d{0,3})/, "$1-$2")
      e.target.value = value
    }

    // Auto-fill address when CEP is complete
    if (value.replace("-", "").length === 8) {
      lookupAddress(value.replace("-", ""))
    }
  })

  // Save as draft functionality
  document.getElementById("saveAsDraft").addEventListener("click", () => {
    saveAsDraft()
  })
}

// Initialize photo upload
function initializePhotoUpload() {
  const uploadArea = document.getElementById("uploadArea")
  const photoInput = document.getElementById("photoInput")
  const selectBtn = document.getElementById("selectPhotos")
  const preview = document.getElementById("photoPreview")

  const uploadedFiles = []

  // Click to select files
  selectBtn.addEventListener("click", () => {
    photoInput.click()
  })

  uploadArea.addEventListener("click", () => {
    photoInput.click()
  })

  // Handle file selection
  photoInput.addEventListener("change", (e) => {
    handleFiles(e.target.files)
  })

  // Drag and drop functionality
  uploadArea.addEventListener("dragover", (e) => {
    e.preventDefault()
    uploadArea.classList.add("dragover")
  })

  uploadArea.addEventListener("dragleave", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("dragover")
  })

  uploadArea.addEventListener("drop", (e) => {
    e.preventDefault()
    uploadArea.classList.remove("dragover")
    handleFiles(e.dataTransfer.files)
  })

  // Handle uploaded files
  function handleFiles(files) {
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        uploadedFiles.push(file)
        displayPhoto(file)
      }
    })
  }

  // Display photo preview
  function displayPhoto(file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const photoItem = document.createElement("div")
      photoItem.className = "photo-item"
      photoItem.innerHTML = `
        <img src="${e.target.result}" alt="Preview">
        <button type="button" class="photo-remove" onclick="removePhoto(this)">
          <i class="fas fa-times"></i>
        </button>
      `
      preview.appendChild(photoItem)
    }
    reader.readAsDataURL(file)
  }

  // Remove photo function (global scope)
  window.removePhoto = (button) => {
    const photoItem = button.parentElement
    const index = Array.from(preview.children).indexOf(photoItem)
    uploadedFiles.splice(index, 1)
    photoItem.remove()
  }
}

// Initialize modals
function initializeModals() {
  const successModal = document.getElementById("successModal")
  const closeSuccessBtn = document.getElementById("closeSuccessModal")
  const addAnotherBtn = document.getElementById("addAnotherProperty")

  closeSuccessBtn.addEventListener("click", () => {
    closeSuccessModal()
  })

  addAnotherBtn.addEventListener("click", () => {
    closeSuccessModal()
    resetForm()
    window.scrollTo({ top: 0, behavior: "smooth" })
  })

  // Close modal when clicking outside
  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
      closeSuccessModal()
    }
  })
}

// Submit property
function submitProperty() {
  const form = document.getElementById("sellForm")
  const formData = new FormData(form)

  // Get selected features
  const features = []
  document.querySelectorAll('input[name="features"]:checked').forEach((checkbox) => {
    features.push(checkbox.value)
  })

  // Prepare data
  const propertyData = {
    title: formData.get("propertyTitle"),
    type: formData.get("sellPropertyType"),
    price: parsePrice(formData.get("sellPrice")),
    bedrooms: formData.get("sellBedrooms"),
    bathrooms: formData.get("sellBathrooms"),
    area: formData.get("sellArea"),
    address: formData.get("sellAddress"),
    city: formData.get("sellCity"),
    state: formData.get("sellState"),
    zipCode: formData.get("sellZipCode"),
    description: formData.get("sellDescription"),
    features: features,
    owner: {
      name: formData.get("ownerName"),
      email: formData.get("ownerEmail"),
      phone: formData.get("ownerPhone"),
      whatsapp: formData.get("ownerWhatsapp"),
    },
    acceptTerms: formData.get("acceptTerms"),
    acceptContact: formData.get("acceptContact"),
  }

  // Simulate API call
  console.log("Property submitted:", propertyData)

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publicando...'
  submitBtn.disabled = true

  // Simulate API delay
  setTimeout(() => {
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
    showSuccessModal()
  }, 2000)
}

// Save as draft
function saveAsDraft() {
  const form = document.getElementById("sellForm")
  const formData = new FormData(form)

  // Save to localStorage (in a real app, this would be saved to the server)
  const draftData = Object.fromEntries(formData)
  localStorage.setItem("propertyDraft", JSON.stringify(draftData))

  // Show confirmation
  alert("Rascunho salvo com sucesso! Você pode continuar editando mais tarde.")
}

// Show success modal
function showSuccessModal() {
  const modal = document.getElementById("successModal")
  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close success modal
function closeSuccessModal() {
  const modal = document.getElementById("successModal")
  modal.classList.remove("active")
  document.body.style.overflow = ""
}

// Reset form
function resetForm() {
  const form = document.getElementById("sellForm")
  form.reset()

  // Clear photo preview
  const preview = document.getElementById("photoPreview")
  preview.innerHTML = ""

  // Clear uploaded files array
  window.uploadedFiles = []
}

// Parse price from formatted string
function parsePrice(priceStr) {
  if (!priceStr) return null
  return Number.parseInt(priceStr.replace(/\D/g, ""))
}

// Address lookup by CEP (Brazilian postal code)
function lookupAddress(cep) {
  // This would typically call a CEP API like ViaCEP
  // For demo purposes, we'll simulate the response

  if (cep === "01310100") {
    document.getElementById("sellAddress").value = "Av. Paulista, 1000"
    document.getElementById("sellCity").value = "São Paulo"
    document.getElementById("sellState").value = "SP"
  }
}

// Load draft if exists
window.addEventListener("load", () => {
  const draft = localStorage.getItem("propertyDraft")
  if (draft && confirm("Você tem um rascunho salvo. Deseja carregá-lo?")) {
    const draftData = JSON.parse(draft)

    // Fill form with draft data
    Object.keys(draftData).forEach((key) => {
      const input = document.querySelector(`[name="${key}"]`)
      if (input) {
        if (input.type === "checkbox") {
          input.checked = draftData[key] === "on"
        } else {
          input.value = draftData[key]
        }
      }
    })

    // Clear draft after loading
    localStorage.removeItem("propertyDraft")
  }
})

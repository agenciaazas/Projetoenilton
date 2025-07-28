// Main JavaScript for Moraes Imobiliária Website
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initCookieNotice();
    initSearchForm();
    initCarousel();
    initNavigation();
    
    console.log('Moraes Imobiliária website loaded successfully');
});

// Cookie Notice Functionality
function initCookieNotice() {
    try {
        const cookieNotice = document.getElementById('cookie-notice');
        const dismissBtn = document.getElementById('dismiss-cookie');
        
        if (!cookieNotice || !dismissBtn) {
            console.warn('Cookie notice elements not found');
            return;
        }
        
        // Check if cookie consent was already given
        if (localStorage.getItem('cookieConsent') === 'true') {
            cookieNotice.style.display = 'none';
            return;
        }
        
        // Show cookie notice
        cookieNotice.style.display = 'block';
        
        // Handle dismiss button click
        dismissBtn.addEventListener('click', function() {
            cookieNotice.style.opacity = '0';
            cookieNotice.style.transform = 'translateY(100%)';
            
            setTimeout(function() {
                cookieNotice.style.display = 'none';
            }, 300);
            
            // Save consent to localStorage
            localStorage.setItem('cookieConsent', 'true');
        });
        
    } catch (error) {
        console.error('Error initializing cookie notice:', error);
    }
}

// Search Form Functionality
function initSearchForm() {
    try {
        const searchForm = document.getElementById('search-form');
        const locationInput = document.getElementById('location-input');
        const errorMessage = document.getElementById('search-error');
        
        if (!searchForm || !locationInput || !errorMessage) {
            console.warn('Search form elements not found');
            return;
        }
        
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const location = locationInput.value.trim();
            
            // Hide previous error message
            errorMessage.style.display = 'none';
            
            // Validate input
            if (!location) {
                showError('Por favor, digite uma localização para buscar.');
                locationInput.focus();
                return;
            }
            
            if (location.length < 2) {
                showError('Digite pelo menos 2 caracteres para buscar.');
                locationInput.focus();
                return;
            }
            
            // Simulate search (in a real application, this would make an API call)
            performSearch(location);
        });
        
        // Real-time validation
        locationInput.addEventListener('input', function() {
            if (errorMessage.style.display !== 'none') {
                errorMessage.style.display = 'none';
            }
        });
        
        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        
        function performSearch(location) {
            // Show loading state
            const searchBtn = searchForm.querySelector('.search-btn');
            const originalText = searchBtn.textContent;
            searchBtn.textContent = 'Buscando...';
            searchBtn.disabled = true;
            
            // Simulate API call delay
            setTimeout(function() {
                searchBtn.textContent = originalText;
                searchBtn.disabled = false;
                
                // In a real application, you would redirect to search results
                alert(`Buscando imóveis em: ${location}`);
            }, 1000);
        }
        
    } catch (error) {
        console.error('Error initializing search form:', error);
    }
}

// Carousel Functionality
function initCarousel() {
    try {
        const carousel = document.getElementById('launches-carousel');
        const prevBtn = document.getElementById('carousel-prev');
        const nextBtn = document.getElementById('carousel-next');
        
        if (!carousel || !prevBtn || !nextBtn) {
            console.warn('Carousel elements not found');
            return;
        }
        
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        let autoSlideInterval;
        
        if (items.length === 0) {
            console.warn('No carousel items found');
            return;
        }
        
        // Show specific slide
        function showSlide(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
        }
        
        // Next slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            showSlide(currentIndex);
        }
        
        // Previous slide
        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showSlide(currentIndex);
        }
        
        // Start auto-slide
        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, 5000); // 5 seconds
        }
        
        // Stop auto-slide
        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        }
        
        // Event listeners
        nextBtn.addEventListener('click', function() {
            stopAutoSlide();
            nextSlide();
            startAutoSlide();
        });
        
        prevBtn.addEventListener('click', function() {
            stopAutoSlide();
            prevSlide();
            startAutoSlide();
        });
        
        // Pause auto-slide on hover
        carousel.addEventListener('mouseenter', stopAutoSlide);
        carousel.addEventListener('mouseleave', startAutoSlide);
        
        // Initialize
        showSlide(currentIndex);
        startAutoSlide();
        
    } catch (error) {
        console.error('Error initializing carousel:', error);
    }
}

// Navigation Functionality
function initNavigation() {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        
        if (navLinks.length === 0) {
            console.warn('Navigation links not found');
            return;
        }
        
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // In a real application, you might want to show/hide content
                // or navigate to different pages based on the tab
                const tabId = this.getAttribute('href');
                console.log(`Navigating to tab: ${tabId}`);
            });
        });
        
    } catch (error) {
        console.error('Error initializing navigation:', error);
    }
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    try {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
    } catch (error) {
        console.error('Error initializing smooth scroll:', error);
    }
}

// Property card hover effects
function initPropertyCards() {
    try {
        const propertyCards = document.querySelectorAll('.property-card');
        
        propertyCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
    } catch (error) {
        console.error('Error initializing property cards:', error);
    }
}

// Initialize additional features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScroll();
    initPropertyCards();
});

// Handle window resize
window.addEventListener('resize', debounce(function() {
    // Handle responsive adjustments if needed
    console.log('Window resized');
}, 250));

// Handle page visibility change
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Page is hidden, pause any animations or intervals
        console.log('Page hidden');
    } else {
        // Page is visible, resume animations or intervals
        console.log('Page visible');
    }
});


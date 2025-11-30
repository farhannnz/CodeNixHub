// Contact Page JavaScript

// Particle.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00ff88'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00ff88',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// Form Validation
const contactForm = document.getElementById('contactForm');
const formGroups = document.querySelectorAll('.form-group');

// Validation rules
const validationRules = {
    firstName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'First name must be at least 2 characters and contain only letters'
    },
    lastName: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Last name must be at least 2 characters and contain only letters'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        required: false,
        pattern: /^[\+]?[1-9][\d]{0,15}$/,
        message: 'Please enter a valid phone number'
    },
    service: {
        required: true,
        message: 'Please select a service'
    },
    message: {
        required: true,
        minLength: 10,
        message: 'Message must be at least 10 characters long'
    }
};

// Validate individual field
function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value.trim();
    const rules = validationRules[fieldName];
    const formGroup = field.closest('.form-group');
    
    if (!rules) return true;
    
    // Remove existing error message
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Reset classes
    formGroup.classList.remove('error', 'success');
    
    // Check if required field is empty
    if (rules.required && !fieldValue) {
        showFieldError(formGroup, field, 'This field is required');
        return false;
    }
    
    // Skip validation if field is empty and not required
    if (!fieldValue && !rules.required) {
        return true;
    }
    
    // Check minimum length
    if (rules.minLength && fieldValue.length < rules.minLength) {
        showFieldError(formGroup, field, rules.message);
        return false;
    }
    
    // Check pattern
    if (rules.pattern && !rules.pattern.test(fieldValue)) {
        showFieldError(formGroup, field, rules.message);
        return false;
    }
    
    // Field is valid
    formGroup.classList.add('success');
    return true;
}

// Show field error
function showFieldError(formGroup, field, message) {
    formGroup.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
    
    // Focus on the field
    field.focus();
}

// Real-time validation
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
        const formGroup = field.closest('.form-group');
        if (formGroup.classList.contains('error')) {
            validateField(field);
        }
    });
});

// Form submission
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Validate all fields
    let isValid = true;
    const formData = new FormData(contactForm);
    
    document.querySelectorAll('input, select, textarea').forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    if (!isValid) {
        // Scroll to first error
        const firstError = document.querySelector('.form-group.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API call)
        await simulateFormSubmission(formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('success', 'error');
        });
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert('There was an error sending your message. Please try again.');
    } finally {
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Simulate form submission
function simulateFormSubmission(formData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form submitted with data:', Object.fromEntries(formData));
            resolve();
        }, 2000);
    });
}

// Show success message
function showSuccessMessage() {
    // Remove existing success message
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <strong>Message Sent Successfully!</strong><br>
        Thank you for contacting us. We'll get back to you within 24 hours.
    `;
    
    // Insert before form
    contactForm.parentNode.insertBefore(successDiv, contactForm);
    
    // Show with animation
    setTimeout(() => {
        successDiv.classList.add('show');
    }, 100);
    
    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove after 10 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 10000);
}

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Open Map Function
function openMap() {
    const address = "123 Tech Street, Digital City, DC 12345";
    const encodedAddress = encodeURIComponent(address);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(mapUrl, '_blank');
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Page Header Animation
gsap.timeline()
    .from('.page-title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' })
    .from('.page-subtitle', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5');

// Contact Form Animation
gsap.from('.contact-form-section', {
    scrollTrigger: {
        trigger: '.contact-main',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

// Contact Info Animation
gsap.from('.contact-info-section', {
    scrollTrigger: {
        trigger: '.contact-main',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power3.out'
});

// Contact Items Animation
gsap.from('.contact-item', {
    scrollTrigger: {
        trigger: '.contact-info-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Map Section Animation
gsap.from('.map-placeholder', {
    scrollTrigger: {
        trigger: '.map-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: 'power3.out'
});

// FAQ Items Animation
gsap.from('.faq-item', {
    scrollTrigger: {
        trigger: '.faq-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power3.out'
});

// Form Field Focus Effects
document.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('focus', () => {
        gsap.to(field, {
            duration: 0.3,
            scale: 1.02,
            ease: 'power2.out'
        });
    });
    
    field.addEventListener('blur', () => {
        gsap.to(field, {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Contact Icon Hover Effects
document.querySelectorAll('.contact-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1.1,
            rotation: 10,
            ease: 'power2.out'
        });
    });
    
    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Scroll Progress Indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #00ff88, #00cc6a);
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px #00ff88;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    scrollProgress.style.width = scrolled + '%';
});

console.log('CodenixHub Contact - Engineering Digital Excellence 🚀');
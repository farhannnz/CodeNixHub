// Services Page JavaScript

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

// Service Details Data
const serviceDetails = {
    'web-development': {
        title: 'Web Development',
        overview: 'Our web development services encompass everything from simple websites to complex web applications. We use cutting-edge technologies and frameworks to create responsive, fast, and secure web solutions that drive business growth.',
        features: [
            'Responsive Web Design',
            'Progressive Web Apps (PWA)',
            'E-commerce Integration',
            'Content Management Systems',
            'API Development & Integration',
            'Database Design & Optimization',
            'SEO Optimization',
            'Performance Optimization'
        ],
        technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'PHP', 'Python', 'MongoDB', 'MySQL'],
        benefits: [
            'Increased online presence and visibility',
            'Better user engagement and conversion rates',
            'Scalable architecture for future growth',
            'Cross-browser compatibility',
            'Mobile-first responsive design'
        ]
    },
    'mobile-development': {
        title: 'Mobile Development',
        overview: 'We create native and cross-platform mobile applications that provide seamless user experiences across iOS and Android devices. Our mobile solutions are designed to engage users and drive business objectives.',
        features: [
            'Native iOS & Android Development',
            'Cross-Platform Solutions',
            'App Store Optimization',
            'Push Notifications',
            'Offline Functionality',
            'Social Media Integration',
            'In-App Purchases',
            'Analytics Integration'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic', 'Firebase', 'AWS Mobile'],
        benefits: [
            'Reach customers on their preferred devices',
            'Improved customer engagement',
            'Direct marketing channel',
            'Enhanced brand loyalty',
            'Real-time user analytics'
        ]
    },
    'ai-solutions': {
        title: 'AI Solutions',
        overview: 'Our AI solutions help businesses automate processes, gain insights from data, and make intelligent decisions. We implement machine learning models and AI algorithms tailored to your specific business needs.',
        features: [
            'Machine Learning Models',
            'Natural Language Processing',
            'Computer Vision',
            'Predictive Analytics',
            'Chatbots & Virtual Assistants',
            'Recommendation Systems',
            'Fraud Detection',
            'Process Automation'
        ],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Scikit-learn', 'Keras', 'NLTK', 'OpenCV'],
        benefits: [
            'Automated decision-making processes',
            'Improved operational efficiency',
            'Enhanced customer experiences',
            'Data-driven insights',
            'Competitive advantage through innovation'
        ]
    },
    'cloud-services': {
        title: 'Cloud Services',
        overview: 'Our cloud services help businesses migrate to the cloud, optimize their infrastructure, and implement scalable solutions. We provide end-to-end cloud consulting and implementation services.',
        features: [
            'Cloud Migration Strategy',
            'Infrastructure as Code',
            'DevOps & CI/CD Pipelines',
            'Serverless Architecture',
            'Container Orchestration',
            'Security & Compliance',
            'Monitoring & Logging',
            'Cost Optimization'
        ],
        technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Ansible'],
        benefits: [
            'Reduced infrastructure costs',
            'Improved scalability and flexibility',
            'Enhanced security and compliance',
            'Faster deployment and updates',
            'Better disaster recovery capabilities'
        ]
    },
    'ui-ux-design': {
        title: 'UI/UX Design',
        overview: 'Our UI/UX design services focus on creating intuitive, engaging, and user-centered digital experiences. We combine research, strategy, and creative design to deliver solutions that users love.',
        features: [
            'User Research & Analysis',
            'Information Architecture',
            'Wireframing & Prototyping',
            'Visual Design & Branding',
            'Usability Testing',
            'Accessibility Compliance',
            'Design Systems',
            'Interaction Design'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer', 'Zeplin', 'Marvel'],
        benefits: [
            'Improved user satisfaction and retention',
            'Higher conversion rates',
            'Reduced development costs',
            'Better brand perception',
            'Competitive differentiation'
        ]
    },
    'ecommerce-solutions': {
        title: 'E-Commerce Solutions',
        overview: 'We build comprehensive e-commerce platforms that drive sales and provide exceptional shopping experiences. Our solutions include everything from product catalogs to payment processing and order management.',
        features: [
            'Custom E-commerce Platforms',
            'Payment Gateway Integration',
            'Inventory Management',
            'Order Processing & Fulfillment',
            'Customer Account Management',
            'Analytics & Reporting',
            'Multi-channel Integration',
            'Mobile Commerce'
        ],
        technologies: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Stripe', 'PayPal', 'Square', 'Klarna'],
        benefits: [
            'Increased online sales revenue',
            'Better customer shopping experience',
            'Streamlined order management',
            'Real-time inventory tracking',
            'Comprehensive sales analytics'
        ]
    }
};

// Service Detail Modal Functions
function openServiceDetail(serviceId) {
    const service = serviceDetails[serviceId];
    if (!service) return;

    // Create modal if it doesn't exist
    let modal = document.getElementById('serviceModal');
    if (!modal) {
        modal = createServiceModal();
        document.body.appendChild(modal);
    }

    // Populate modal content
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalOverview').textContent = service.overview;
    
    // Features list
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    service.features.forEach(feature => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${feature}`;
        featuresList.appendChild(li);
    });
    
    // Technologies
    const techContainer = document.getElementById('modalTechnologies');
    techContainer.innerHTML = '';
    service.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-tag';
        span.textContent = tech;
        techContainer.appendChild(span);
    });
    
    // Benefits list
    const benefitsList = document.getElementById('modalBenefits');
    benefitsList.innerHTML = '';
    service.benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-arrow-right"></i> ${benefit}`;
        benefitsList.appendChild(li);
    });

    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Animate modal entrance
    gsap.fromTo(modal.querySelector('.modal-content'), 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' }
    );
}

function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    if (modal) {
        gsap.to(modal.querySelector('.modal-content'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.2,
            ease: 'power2.in',
            onComplete: () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

function createServiceModal() {
    const modal = document.createElement('div');
    modal.id = 'serviceModal';
    modal.className = 'service-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modalTitle" class="modal-title"></h2>
                <button class="close-modal" onclick="closeServiceModal()">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Overview</h3>
                <p id="modalOverview"></p>
                
                <h3>Key Features</h3>
                <ul id="modalFeatures"></ul>
                
                <h3>Technologies We Use</h3>
                <div id="modalTechnologies" class="service-tech"></div>
                
                <h3>Benefits</h3>
                <ul id="modalBenefits"></ul>
                
                <div style="text-align: center; margin-top: 30px;">
                    <a href="contact.html" class="btn-primary glow-btn">Get Started</a>
                </div>
            </div>
        </div>
    `;
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeServiceModal();
        }
    });
    
    return modal;
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Page Header Animation
gsap.timeline()
    .from('.page-title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' })
    .from('.page-subtitle', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5');

// Service Cards Animation
gsap.from('.service-card-main', {
    scrollTrigger: {
        trigger: '.services-grid-main',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// Process Items Animation
gsap.from('.process-item', {
    scrollTrigger: {
        trigger: '.process-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Benefits Animation
gsap.from('.benefit-item', {
    scrollTrigger: {
        trigger: '.benefits-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.15,
    ease: 'back.out(1.7)'
});

// Service Card Hover Effects
document.querySelectorAll('.service-card-main').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.service-icon'), {
            duration: 0.3,
            scale: 1.1,
            rotation: 10,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.service-icon'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Process Item Hover Effects
document.querySelectorAll('.process-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.process-icon'), {
            duration: 0.3,
            scale: 1.1,
            rotation: 360,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.process-icon'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Benefit Item Hover Effects
document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.benefit-icon'), {
            duration: 0.3,
            scale: 1.2,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.benefit-icon'), {
            duration: 0.3,
            scale: 1,
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

// Keyboard navigation for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeServiceModal();
    }
});

console.log('CodenixHub Services - Engineering Digital Excellence 🚀');
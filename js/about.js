// About Page JavaScript

// Particle.js Configuration (same as main)
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

// Counter Animation for Stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 20);
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe all stat numbers
document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Page Header Animation
gsap.timeline()
    .from('.page-title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' })
    .from('.page-subtitle', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5');

// Company Intro Animation
gsap.from('.intro-content', {
    scrollTrigger: {
        trigger: '.company-intro',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: -100,
    opacity: 0,
    ease: 'power3.out'
});

gsap.from('.intro-visual', {
    scrollTrigger: {
        trigger: '.company-intro',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    x: 100,
    opacity: 0,
    ease: 'power3.out'
});

// Stats Animation
gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.intro-stats',
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

// Mission & Vision Animation
gsap.from('.mv-item', {
    scrollTrigger: {
        trigger: '.mission-vision',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
});

// Process Timeline Animation
gsap.from('.process-step', {
    scrollTrigger: {
        trigger: '.process-timeline',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: (index) => index % 2 === 0 ? -100 : 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Team Members Animation
gsap.from('.team-member', {
    scrollTrigger: {
        trigger: '.team-grid',
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

// Values Animation
gsap.from('.value-item', {
    scrollTrigger: {
        trigger: '.values-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Team Member Hover Effects
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', () => {
        gsap.to(member.querySelector('.member-image'), {
            duration: 0.3,
            scale: 1.1,
            ease: 'power2.out'
        });
    });
    
    member.addEventListener('mouseleave', () => {
        gsap.to(member.querySelector('.member-image'), {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Process Step Hover Effects
document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseenter', () => {
        gsap.to(step.querySelector('.step-number'), {
            duration: 0.3,
            scale: 1.2,
            rotation: 360,
            ease: 'power2.out'
        });
    });
    
    step.addEventListener('mouseleave', () => {
        gsap.to(step.querySelector('.step-number'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Visual Element Animation
gsap.to('.visual-element::before', {
    duration: 3,
    scale: 1.2,
    opacity: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
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

// Intersection Observer for general animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all animatable elements
document.querySelectorAll('.mv-item, .process-step, .team-member, .value-item').forEach(el => {
    observer.observe(el);
});

console.log('About CodenixHub - Engineering Digital Excellence 🚀');
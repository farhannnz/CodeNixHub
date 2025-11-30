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

// Bootstrap Navbar Enhancements
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.custom-navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });

    // Active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
gsap.timeline()
    .from('.hero-title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' })
    .from('.hero-subtitle', { duration: 0.8, y: 50, opacity: 0, ease: 'power3.out' }, '-=0.5')
    .from('.hero-description', { duration: 0.8, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.3')
    .from('.hero-buttons', { duration: 0.8, y: 30, opacity: 0, ease: 'power3.out' }, '-=0.3')
    .from('.floating-icon', {
        duration: 1,
        scale: 0,
        rotation: 360,
        opacity: 0,
        ease: 'back.out(1.7)',
        stagger: 0.2
    }, '-=0.5');

// Service Cards Animation
gsap.from('.service-card', {
    scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Feature Items Animation
gsap.from('.feature-item', {
    scrollTrigger: {
        trigger: '.features-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.15,
    ease: 'power3.out'
});

// Tech Stack Animation
gsap.from('.tech-item', {
    scrollTrigger: {
        trigger: '.tech-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.6,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)'
});

// Portfolio Items Animation
gsap.from('.portfolio-item', {
    scrollTrigger: {
        trigger: '.portfolio-slider',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
    },
    duration: 0.8,
    x: -100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
});

// Testimonials Animation
gsap.from('.testimonial-item', {
    scrollTrigger: {
        trigger: '.testimonials-carousel',
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

// Section Titles Animation
gsap.from('.section-title', {
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
});

// Counter Animation for Stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current) + '+';
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        }
    }, 20);
}

// Service Card Hover Effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.card-icon'), {
            duration: 0.3,
            scale: 1.2,
            rotation: 10,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.card-icon'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Portfolio Item Hover Effects
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.portfolio-image'), {
            duration: 0.3,
            scale: 1.05,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.portfolio-image'), {
            duration: 0.3,
            scale: 1,
            ease: 'power2.out'
        });
    });
});

// Tech Item Hover Animation
document.querySelectorAll('.tech-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('i'), {
            duration: 0.3,
            scale: 1.3,
            rotation: 360,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('i'), {
            duration: 0.3,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Glitch Effect for Hero Title
function createGlitchEffect() {
    const glitchElement = document.querySelector('.glitch');
    if (glitchElement) {
        setInterval(() => {
            if (Math.random() > 0.95) {
                glitchElement.style.animation = 'none';
                setTimeout(() => {
                    glitchElement.style.animation = 'glitch 2s infinite';
                }, 100);
            }
        }, 100);
    }
}

// Initialize glitch effect
createGlitchEffect();

// Floating Animation for Hero Icons
gsap.to('.floating-icon:nth-child(1)', {
    duration: 3,
    y: -20,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
});

gsap.to('.floating-icon:nth-child(2)', {
    duration: 2.5,
    y: -15,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
    delay: 0.5
});

gsap.to('.floating-icon:nth-child(3)', {
    duration: 3.5,
    y: -25,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
    delay: 1
});

// Button Click Effects
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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

// Intersection Observer for animations
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
document.querySelectorAll('.service-card, .feature-item, .tech-item, .portfolio-item, .testimonial-item').forEach(el => {
    observer.observe(el);
});

// Add CSS for intersection observer animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .service-card, .feature-item, .tech-item, .portfolio-item, .testimonial-item {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(animationStyle);

// Preloader
window.addEventListener('load', () => {
    const preloader = document.createElement('div');
    preloader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        ">
            <div style="
                font-family: 'Orbitron', monospace;
                font-size: 2rem;
                color: #00ff88;
                text-shadow: 0 0 20px #00ff88;
                animation: pulse 1s infinite;
            ">
                CodenixHub
            </div>
        </div>
    `;

    document.body.appendChild(preloader);

    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1500);
});

console.log('CodenixHub - Engineering Digital Excellence 🚀');

// MASTER LEVEL AMAZING ANIMATIONS AND EFFECTS

// Counter Animation for Stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number-amazing');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target === 24 ? '/7' : '+');
            }
        };

        updateCounter();
    });
}

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');

            // Trigger counter animation for stats section
            if (entry.target.classList.contains('stats-showcase')) {
                setTimeout(animateCounters, 500);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.stats-showcase, .process-amazing, .service-card, .tech-item');
    animateElements.forEach(el => observer.observe(el));
});

// Enhanced Cursor Effect
let cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let cursorFollower = document.createElement('div');
cursorFollower.className = 'cursor-follower';
document.body.appendChild(cursorFollower);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Interactive Elements Hover Effects
document.querySelectorAll('.service-card, .tech-item, .stat-card-amazing, .step-circle-amazing').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-hover');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-hover');
    });
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual, .floating-bg-elements');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Dynamic Text Animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Enhanced GSAP Animations
if (typeof gsap !== 'undefined') {
    // Hero Section Advanced Animation
    gsap.timeline()
        .from('.hero-title', {
            duration: 1.2,
            y: 100,
            opacity: 0,
            ease: 'power4.out',
            stagger: 0.1
        })
        .from('.hero-subtitle', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        }, '-=0.8')
        .from('.hero-description', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.6')
        .from('.hero-buttons a', {
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: 'back.out(1.7)',
            stagger: 0.2
        }, '-=0.4')
        .from('.hero-main-image', {
            duration: 1.5,
            scale: 0.8,
            opacity: 0,
            ease: 'elastic.out(1, 0.5)'
        }, '-=1');

    // Service Cards Animation
    gsap.from('.service-card', {
        duration: 0.8,
        y: 80,
        opacity: 0,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%'
        }
    });

    // Tech Stack Animation
    gsap.from('.tech-item', {
        duration: 0.6,
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.tech-grid',
            start: 'top 80%'
        }
    });

    // Testimonials Animation
    gsap.from('.testimonial-item', {
        duration: 1,
        x: 100,
        opacity: 0,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.testimonials-carousel',
            start: 'top 80%'
        }
    });
}

// Smooth Reveal Animation for Sections
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    revealObserver.observe(section);
});

// Interactive Background Particles
function createInteractiveParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'interactive-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticle(x, y) {
        return {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            decay: Math.random() * 0.02 + 0.01
        };
    }

    function updateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;

            if (p.life <= 0) {
                particles.splice(i, 1);
                continue;
            }

            ctx.save();
            ctx.globalAlpha = p.life;
            ctx.fillStyle = '#00ff88';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00ff88';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        requestAnimationFrame(updateParticles);
    }

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        if (Math.random() < 0.3) {
            particles.push(createParticle(mouse.x, mouse.y));
        }
    });

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    updateParticles();
}

// Initialize interactive particles
createInteractiveParticles();

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Animate page elements in sequence
    setTimeout(() => {
        document.querySelector('.navbar').style.transform = 'translateY(0)';
        document.querySelector('.navbar').style.opacity = '1';
    }, 200);
});

// Enhanced Scroll Effects
let ticking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    // Parallax for hero background
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translate3d(0, ${rate}px, 0)`;
    }

    // Update navbar background
    const navbar = document.querySelector('.navbar');
    if (scrolled > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
        navbar.style.backdropFilter = 'blur(10px)';
    }

    ticking = false;
}

function requestScrollUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

window.addEventListener('scroll', requestScrollUpdate);// Am
azing Marquee Scroll Effects
function initMarqueeScrollEffects() {
    const marqueeTexts = document.querySelectorAll('.marquee-text-fullheight');
    const marqueeSection = document.querySelector('.marquee-section-fullheight');

    if (!marqueeSection) return;

    // Intersection Observer for marquee section
    const marqueeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger amazing effects when marquee comes into view
                marqueeTexts.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add('scroll-effect');
                        setTimeout(() => {
                            text.classList.remove('scroll-effect');
                        }, 2000);
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    marqueeObserver.observe(marqueeSection);

    // Scroll-based color changes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.001;

        marqueeTexts.forEach((text, index) => {
            const hue = (rate * 50 + index * 60) % 360;
            const glowColor = `hsl(${hue}, 100%, 50%)`;

            if (scrolled > 100) {
                text.style.filter = `drop-shadow(0 0 30px ${glowColor})`;
                text.style.webkitTextStroke = `3px ${glowColor}`;
                text.style.textStroke = `3px ${glowColor}`;
            } else {
                text.style.filter = 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))';
                text.style.webkitTextStroke = '3px #ffffff';
                text.style.textStroke = '3px #ffffff';
            }
        });
    });

    // Mouse interaction effects
    marqueeTexts.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.style.animationPlayState = 'paused';
            text.style.transform = 'scale(1.1) rotate(5deg)';
        });

        text.addEventListener('mouseleave', () => {
            text.style.animationPlayState = 'running';
            text.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize marquee effects when DOM is loaded
document.addEventListener('DOMContentLoaded', initMarqueeScrollEffects);

// Enhanced scroll effects for the entire website
let scrollEffectTicking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;

    // Parallax effect for marquee background
    const marqueeSection = document.querySelector('.marquee-section-fullheight');
    if (marqueeSection) {
        const rect = marqueeSection.getBoundingClientRect();
        const isVisible = rect.top < windowHeight && rect.bottom > 0;

        if (isVisible) {
            const parallaxRate = (windowHeight - rect.top) * 0.1;
            marqueeSection.style.transform = `translateY(${parallaxRate}px)`;
        }
    }

    // Dynamic background effects
    const body = document.body;
    const hue = (scrolled * 0.1) % 360;
    body.style.background = `radial-gradient(circle at center, hsl(${hue}, 10%, 5%) 0%, #000000 100%)`;

    scrollEffectTicking = false;
}

function requestScrollEffectUpdate() {
    if (!scrollEffectTicking) {
        requestAnimationFrame(updateScrollEffects);
        scrollEffectTicking = true;
    }
}

window.addEventListener('scroll', requestScrollEffectUpdate);// 
Enhanced Mobile Navigation
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Remove marquee-related JavaScript since marquee is removed
// Clean up any marquee references
const cleanupMarqueeJS = () => {
    // Remove any marquee event listeners or references
    const marqueeElements = document.querySelectorAll('.marquee-text-fullheight');
    marqueeElements.forEach(el => {
        el.removeEventListener('mouseenter', () => { });
        el.removeEventListener('mouseleave', () => { });
    });
};
//
 Contact Form WhatsApp Integration
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const company = formData.get('company');
            const service = formData.get('service');
            const budget = formData.get('budget');
            const timeline = formData.get('timeline');
            const message = formData.get('message');
            const newsletter = formData.get('newsletter');

            // Validate required fields
            if (!firstName || !lastName || !email || !service || !message) {
                showNotification('Please fill in all required fields!', 'error');
                return;
            }

            // Create WhatsApp message
            let whatsappMessage = `🚀 *New Project Inquiry - CodenixHub*\n\n`;
            whatsappMessage += `👤 *Client Details:*\n`;
            whatsappMessage += `• Name: ${firstName} ${lastName}\n`;
            whatsappMessage += `• Email: ${email}\n`;
            if (phone) whatsappMessage += `• Phone: ${phone}\n`;
            if (company) whatsappMessage += `• Company: ${company}\n`;

            whatsappMessage += `\n💼 *Project Information:*\n`;
            whatsappMessage += `• Service: ${getServiceName(service)}\n`;
            if (budget) whatsappMessage += `• Budget: ${getBudgetName(budget)}\n`;
            if (timeline) whatsappMessage += `• Timeline: ${getTimelineName(timeline)}\n`;

            whatsappMessage += `\n📝 *Project Details:*\n${message}\n`;

            if (newsletter) {
                whatsappMessage += `\n📧 *Newsletter:* Subscribed\n`;
            }

            whatsappMessage += `\n---\n*Sent via CodenixHub Website*`;

            // Encode message for URL
            const encodedMessage = encodeURIComponent(whatsappMessage);

            // Your WhatsApp number (replace with your actual number)
            const whatsappNumber = '918668846240';

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Show success message
            showNotification('Redirecting to WhatsApp...', 'success');

            // Open WhatsApp after a short delay
            setTimeout(() => {
                window.open(whatsappURL, '_blank');

                // Reset form after successful submission
                contactForm.reset();
                showNotification('Form submitted successfully! Check WhatsApp to send your message.', 'success');
            }, 1000);
        });
    }
});

// Helper functions to convert form values to readable names
function getServiceName(value) {
    const services = {
        'web-development': 'Web Development',
        'mobile-app': 'Mobile App Development',
        'ui-ux-design': 'UI/UX Design',
        'seo-marketing': 'SEO & Digital Marketing',
        'ecommerce': 'E-commerce Development',
        'custom-software': 'Custom Software Solutions',
        'api-development': 'API Development & Integration',
        'cloud-solutions': 'Cloud Solutions',
        'consultation': 'General Consultation',
        'other': 'Other'
    };
    return services[value] || value;
}

function getBudgetName(value) {
    const budgets = {
        'under-5k': 'Under $5,000',
        '5k-10k': '$5,000 - $10,000',
        '10k-25k': '$10,000 - $25,000',
        '25k-50k': '$25,000 - $50,000',
        '50k-plus': '$50,000+',
        'discuss': "Let's Discuss"
    };
    return budgets[value] || value;
}

function getTimelineName(value) {
    const timelines = {
        'asap': 'ASAP',
        '1-month': 'Within 1 Month',
        '2-3-months': '2-3 Months',
        '3-6-months': '3-6 Months',
        '6-months-plus': '6+ Months',
        'flexible': 'Flexible'
    };
    return timelines[value] || value;
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add to page
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);

    // Animate in
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
}

// Enhanced form validation with real-time feedback
document.addEventListener('DOMContentLoaded', function () {
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');

    formInputs.forEach(input => {
        input.addEventListener('blur', function () {
            validateField(this);
        });

        input.addEventListener('input', function () {
            if (this.classList.contains('error')) {
                validateField(this);
            }
        });
    });
});

function validateField(field) {
    const value = field.value.trim();
    const isRequired = field.hasAttribute('required');
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }

    // Check if required field is empty
    if (isRequired && !value) {
        isValid = false;
        errorMessage = 'This field is required';
    }

    // Email validation
    if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }

    // Phone validation (basic)
    if (field.type === 'tel' && value) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }

    // Show error if invalid
    if (!isValid) {
        field.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = errorMessage;
        field.parentElement.appendChild(errorElement);
    }

    return isValid;
}

// Quick WhatsApp contact buttons
document.addEventListener('DOMContentLoaded', function () {
    // Add quick contact buttons for different services
    const serviceButtons = document.querySelectorAll('.service-card, .contact-method');

    serviceButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (e.target.classList.contains('quick-whatsapp')) {
                e.preventDefault();
                const service = this.dataset.service || 'General Inquiry';
                const message = `Hi! I'm interested in ${service}. Can you provide more information?`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappURL = `https://wa.me/918668846240?text=${encodedMessage}`;
                window.open(whatsappURL, '_blank');
            }
        });
    });
});
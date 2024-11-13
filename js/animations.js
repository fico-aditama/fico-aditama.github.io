// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animations
function initHeroAnimations() {
    const heroElements = gsap.utils.toArray('[data-animation="fadeUp"]');
    
    heroElements.forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out"
        });
    });
}

// Skill Bars Animation
function initSkillBars() {
    gsap.utils.toArray('.skill-bar').forEach(bar => {
        gsap.from(bar, {
            width: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: bar,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Projects Section Animation
function initProjectCards() {
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Timeline Animation
function initTimeline() {
    const timelineElements = gsap.utils.toArray('.timeline-item');
    
    timelineElements.forEach((element, index) => {
        gsap.from(element, {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Parallax Effect
function initParallax() {
    gsap.utils.toArray('[data-parallax]').forEach(section => {
        const depth = section.dataset.parallax;
        const movement = -(section.offsetHeight * depth);
        
        gsap.fromTo(section,
            {
                y: -movement
            },
            {
                y: movement,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );
    });
}

// Text Reveal Animation
function initTextReveal() {
    gsap.utils.toArray('.reveal-text').forEach(text => {
        let splitText = new SplitText(text, { type: "chars, words" });
        
        gsap.from(splitText.chars, {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Initialize All Animations
function initAnimations() {
    initHeroAnimations();
    initSkillBars();
    initProjectCards();
    initTimeline();
    initParallax();
    initTextReveal();
}

// Run animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);

// Smooth scroll reveal
const observerOptions = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach((element) => {
    observer.observe(element);
});

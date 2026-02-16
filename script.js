// ============================================
// Golden Horse 金马 - JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initLanguageToggle();
    initCountdown();
    initConfetti();
    initMobileMenu();
    initScrollEffects();
    initSmoothScroll();
});

// ============================================
// Language Toggle (i18n)
// ============================================
function initLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    const langToggleMobile = document.getElementById('langToggleMobile');
    const langEn = langToggle.querySelector('.lang-en');
    const langZh = langToggle.querySelector('.lang-zh');

    // Check for saved language preference
    const savedLang = localStorage.getItem('goldenhorse-lang') || 'en';
    setLanguage(savedLang);

    // Desktop toggle
    langToggle.addEventListener('click', () => {
        const currentLang = document.body.classList.contains('zh') ? 'zh' : 'en';
        const newLang = currentLang === 'en' ? 'zh' : 'en';
        setLanguage(newLang);
    });

    // Mobile toggle
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', () => {
            const currentLang = document.body.classList.contains('zh') ? 'zh' : 'en';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(newLang);
        });
    }

    function setLanguage(lang) {
        document.body.classList.remove('en', 'zh');
        document.body.classList.add(lang);

        if (lang === 'zh') {
            langEn.classList.remove('active');
            langZh.classList.add('active');
            if (langToggleMobile) {
                const mobileLangEn = langToggleMobile.querySelector('.lang-en');
                const mobileLangZh = langToggleMobile.querySelector('.lang-zh');
                mobileLangEn.classList.remove('active');
                mobileLangZh.classList.add('active');
            }
        } else {
            langZh.classList.remove('active');
            langEn.classList.add('active');
            if (langToggleMobile) {
                const mobileLangEn = langToggleMobile.querySelector('.lang-en');
                const mobileLangZh = langToggleMobile.querySelector('.lang-zh');
                mobileLangZh.classList.remove('active');
                mobileLangEn.classList.add('active');
            }
        }

        // Update all translatable elements
        document.querySelectorAll('[data-en][data-zh]').forEach(el => {
            el.textContent = el.getAttribute(`data-${lang}`);
        });

        // Save preference
        localStorage.setItem('goldenhorse-lang', lang);
    }
}

// ============================================
// Countdown Timer
// ============================================
function initCountdown() {
    // Chinese New Year 2026: February 17, 2026 at midnight
    const newYearDate = new Date('February 17, 2026 00:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const countdownMessage = document.getElementById('countdownMessage');
    const countdown = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = newYearDate - now;

        if (distance < 0) {
            // New Year has arrived!
            countdown.style.display = 'none';
            countdownMessage.style.display = 'block';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ============================================
// Confetti Animation
// ============================================
function initConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');

    let confettiParticles = [];
    let animationId;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Confetti colors - red and gold theme
    const colors = [
        '#C41E3A', // Chinese Red
        '#FFD700', // Gold
        '#DAA520', // Goldenrod
        '#FFB800', // Bright Gold
        '#8B0000', // Dark Red
        '#FFFFFF'  // White
    ];

    class Confetti {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = -10;
            this.size = Math.random() * 8 + 4;
            this.speedY = Math.random() * 2 + 1;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.opacity = 1;
            this.shape = Math.random() > 0.5 ? 'rect' : 'circle';
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            // Add slight horizontal sway
            this.x += Math.sin(this.y / 50) * 0.5;

            // Fade out near bottom
            if (this.y > canvas.height - 100) {
                this.opacity -= 0.02;
            }

            // Reset when off screen
            if (this.y > canvas.height || this.opacity <= 0) {
                this.reset();
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;

            if (this.shape === 'rect') {
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size / 2);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }
    }

    // Create confetti particles
    function initParticles() {
        confettiParticles = [];
        const particleCount = Math.min(100, Math.floor(window.innerWidth / 10));

        for (let i = 0; i < particleCount; i++) {
            const particle = new Confetti();
            // Random starting position
            particle.y = Math.random() * canvas.height;
            confettiParticles.push(particle);
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confettiParticles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        animationId = requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    // Adjust particle count on resize
    window.addEventListener('resize', () => {
        initParticles();
    });
}

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger
        const spans = mobileToggle.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// ============================================
// Scroll Effects
// ============================================
function initScrollEffects() {
    const navbar = document.getElementById('navbar');

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Fade-in animations on scroll
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
}

// ============================================
// Smooth Scroll
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Floating Image Parallax Effect
// ============================================
function initFloatParallax() {
    const floatImage = document.getElementById('floatImage');
    if (!floatImage) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const translateY = scrollY * 0.1;

        floatImage.style.transform = `translateY(-${translateY}px)`;
    });
}

// Add floating parallax after DOM load
setTimeout(initFloatParallax, 100);

// ============================================
// Background Music
// ============================================
function initBackgroundMusic() {
    const bgm = document.getElementById('bgm');
    if (!bgm) return;

    // Set volume
    bgm.volume = 0.5;

    // Try to play on load (may be blocked by browser)
    const playPromise = bgm.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log('Autoplay was prevented. Music will play on user interaction.');
            // Add one-time listener for first user interaction
            document.addEventListener('click', function () {
                bgm.play().catch(e => console.log('Could not play audio'));
            }, { once: true });
        });
    }
}

// Initialize background music
document.addEventListener('DOMContentLoaded', initBackgroundMusic);

// ============================================
// Interactive Tokenomics
// ============================================
function showTokenDetails(type) {
    const detailsEl = document.getElementById('tokenDetails');
    const isZh = document.body.classList.contains('zh');

    // Remove active class from all stats
    document.querySelectorAll('.token-stat').forEach(stat => {
        stat.classList.remove('active');
    });

    // Add active class to clicked stat
    event.currentTarget.classList.add('active');

    let message = '';

    switch (type) {
        case 'supply':
            message = isZh ? '1,000,000,000 代币 - 永不稀释' : '1,000,000,000 tokens - Never diluted';
            break;
        case 'tax':
            message = isZh ? '0% 买入 / 0% 卖出 - 公平发射' : '0% Buy / 0% Sell - Fair Launch';
            break;
        case 'community':
            message = isZh ? '100% 社区拥有 - 归社区所有' : '100% Community Owned - Owned by the community';
            break;
    }

    detailsEl.innerHTML = '<p>' + message + '</p>';
}

// Copy button functionality
document.querySelector('.copy-btn')?.addEventListener('click', function () {
    const address = document.querySelector('.contract-address').textContent;
    if (address && address !== 'Coming Soon' && address !== '即将推出') {
        navigator.clipboard.writeText(address);
        this.textContent = 'Copied!';
        setTimeout(() => {
            this.textContent = isZh ? '复制' : 'Copy';
        }, 2000);
    }
});

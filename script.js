document.addEventListener('DOMContentLoaded', () => {
    // ---- Reveal on Scroll ----
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load

    // ---- Mobile Menu ----
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        const closeMobileMenu = () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = '';
        };

        if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
        mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
    }

    // ---- Navbar scroll effect ----
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(15, 23, 42, 0.97)';
            } else {
                nav.style.background = 'rgba(15, 23, 42, 0.85)';
            }
        });
    }
});

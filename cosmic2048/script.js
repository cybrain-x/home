(() => {
    const stars = document.getElementById('stars');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (stars) {
        const fragment = document.createDocumentFragment();
        const count = window.innerWidth < 700 ? 42 : 78;
        for (let index = 0; index < count; index += 1) {
            const star = document.createElement('span');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.setProperty('--duration', `${1.8 + Math.random() * 4}s`);
            star.style.animationDelay = `${Math.random() * -5}s`;
            fragment.appendChild(star);
        }
        stars.appendChild(fragment);
    }

    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear().toString();

    if (!reducedMotion) {
        const emblem = document.querySelector('.cosmic-emblem');
        window.addEventListener('pointermove', event => {
            if (!emblem || window.innerWidth < 900) return;
            const x = (event.clientX / window.innerWidth - 0.5) * 12;
            const y = (event.clientY / window.innerHeight - 0.5) * 12;
            emblem.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }, { passive: true });
    }
})();

document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.getElementById('stars-container');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
});

function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-zh], [data-en]');
    elements.forEach(el => {
        el.innerHTML = el.dataset[lang];
    });

    document.getElementById('zh-btn').classList.toggle('active', lang === 'zh');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');
}
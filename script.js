document.addEventListener('DOMContentLoaded', function() {
    // Star animation
    const starsContainer = document.getElementById('stars-container');
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5-10 seconds
        starsContainer.appendChild(star);
    }

    // Language toggle active state
    const langButtons = document.querySelectorAll('.language-toggle .lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set default language on load or retrieve from localStorage
    const defaultLang = localStorage.getItem('lang') || 'zh';
    switchLanguage(defaultLang);
});

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    // Update document title
    if (translations[lang] && translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }
}

function switchLanguage(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
}

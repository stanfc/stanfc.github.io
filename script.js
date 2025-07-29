// 語言切換功能
let currentLanguage = "zh";

function switchLanguage(lang) {
  currentLanguage = lang;

  // 更新按鈕狀態
  document.getElementById("zh-btn").classList.toggle("active", lang === "zh");
  document.getElementById("en-btn").classList.toggle("active", lang === "en");

  // 更新所有具有多語言屬性的元素
  const elements = document.querySelectorAll("[data-zh][data-en]");
  elements.forEach((element) => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      element.innerHTML = text;
    }
  });
}

// 創建浮動粒子效果
function createParticles() {
  const particlesContainer = document.getElementById("particles");

  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";

    const size = Math.random() * 5 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = Math.random() * 10 + 10 + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particlesContainer.appendChild(particle);

    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 20000);
  }

  // 每500ms創建一個新粒子
  setInterval(createParticle, 500);
}

// 頁面載入完成後啟動動畫
document.addEventListener("DOMContentLoaded", function () {
  createParticles();

  // 添加平滑滾動效果
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });
});

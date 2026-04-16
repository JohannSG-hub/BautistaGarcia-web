// 🔥 ANIMACIONES AL HACER SCROLL
const elements = document.querySelectorAll('.fade-in');

const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);


// 🔥 NAVBAR EFECTO SCROLL
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scrolled");
  } else {
    navbar.classList.remove("nav-scrolled");
  }
});


// 🔥 SCROLL SUAVE PARA LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// 🔥 BOTÓN WHATSAPP (opcional tracking)
const whatsappBtn = document.querySelector('.whatsapp-btn');

if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    console.log("Click en WhatsApp");
  });
}
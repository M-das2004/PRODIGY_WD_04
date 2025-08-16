// Smooth scrolling for nav
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing animation
const text = "Meghma Das";
let i = 0;
const speed = 150;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

// Reveal on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Back to Top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

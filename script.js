/* =========================================
   Munira Lambuwale — Portfolio Scripts
   ========================================= */

// Smooth scroll to a section by id
function go(id) {
  closeMenu();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Hamburger menu toggle (mobile)
function toggleMenu() {
  const hbg = document.getElementById("hbg");
  const menu = document.getElementById("mobileMenu");
  hbg.classList.toggle("open");
  menu.classList.toggle("open");
}

function closeMenu() {
  document.getElementById("hbg").classList.remove("open");
  document.getElementById("mobileMenu").classList.remove("open");
}

// Typing animation in the hero section
const typedWords = [
  "Full Stack Developer",
  "AI / ML Engineer",
  "React & Node Builder",
  "NLP + Vision Enthusiast",
  "CS @ AIKTC Mumbai"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
  const el = document.getElementById("typed");
  const currentWord = typedWords[wordIndex];

  if (!isDeleting) {
    el.textContent = currentWord.slice(0, ++charIndex);
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    el.textContent = currentWord.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typedWords.length;
    }
  }

  setTimeout(typeLoop, isDeleting ? 45 : 80);
}

// Scroll-reveal animation using IntersectionObserver
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// Initialize everything once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  typeLoop();
  initScrollReveal();
});

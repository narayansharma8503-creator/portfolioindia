// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
});

// Contact form simulation
const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    formMsg.textContent = "Sending...";
    setTimeout(() => {
      formMsg.textContent = "Thank you! Your message has been sent.";
      form.reset();
    }, 800);
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

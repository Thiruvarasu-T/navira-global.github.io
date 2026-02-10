// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Hero slider
const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dot"));

let idx = 0;
function showSlide(i){
  idx = i % slides.length;
  slides.forEach((s, n) => s.classList.toggle("active", n === idx));
  dots.forEach((d, n) => d.classList.toggle("active", n === idx));
}

dots.forEach(d => {
  d.addEventListener("click", () => showSlide(Number(d.dataset.slide)));
});

setInterval(() => showSlide((idx + 1) % slides.length), 5000);

// Contact form (front-end only)
// For a real form: use Formspree / Netlify Forms / a simple serverless function.
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  const form = e.target;

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();

  note.textContent = `Thanks ${name || ""}! Your inquiry is captured (demo). Connect a real form endpoint to receive emails.`;
  form.reset();
  return false;
}
window.handleSubmit = handleSubmit;

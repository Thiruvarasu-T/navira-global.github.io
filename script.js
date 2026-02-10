// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple front-end form handler (demo)
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  const form = e.target;
  const data = new FormData(form);
  const company = (data.get("company") || "").toString().trim();
  note.textContent = `Thanks${company ? " " + company : ""}! We received your inquiry (demo). Connect an email endpoint to receive submissions.`;
  form.reset();
  return false;
}
window.handleSubmit = handleSubmit;

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

reveals.forEach(el => io.observe(el));

// Parallax layers (hero visual)
const layers = Array.from(document.querySelectorAll(".parallax-stage .layer"));
function onScroll(){
  const y = window.scrollY || 0;
  // Small, smooth movement. Each layer uses data-depth.
  layers.forEach(el => {
    const depth = Number(el.getAttribute("data-depth") || "0.15");
    const translate = Math.min(36, y * depth * 0.12);
    el.style.transform = `translate3d(0, ${translate}px, 0)`;
  });
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

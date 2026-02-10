// Mobile menu
const navBtn = document.getElementById("navBtn");
const navLinks = document.getElementById("navLinks");

navBtn?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navBtn.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navBtn?.setAttribute("aria-expanded", "false");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.12 });
reveals.forEach(el => io.observe(el));

// Simple parallax on hero background (subtle)
const heroBg = document.getElementById("heroBg");
function onScroll(){
  if(!heroBg) return;
  const y = window.scrollY || 0;
  heroBg.style.backgroundPosition = `center ${50 + (y * 0.06)}%`;
}
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Contact form (demo)
function handleSubmit(e){
  e.preventDefault();
  const note = document.getElementById("formNote");
  const data = new FormData(e.target);
  const first = (data.get("firstName") || "").toString().trim();
  note.textContent = `Thanks${first ? " " + first : ""}! Your message is captured (demo). Connect a form endpoint to receive emails.`;
  e.target.reset();
  return false;
}
window.handleSubmit = handleSubmit;

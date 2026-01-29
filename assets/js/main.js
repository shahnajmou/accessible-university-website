const btn = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

if (btn && nav) {
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });
}

const y = document.querySelector("#year");
if (y) y.textContent = String(new Date().getFullYear());

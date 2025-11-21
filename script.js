// ----- Menú móvil  -----
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  });
});

// ----- Router por hash -----
const VIEWS = document.querySelectorAll(".view");
const LINKS = document.querySelectorAll(".navbar a");

function showView(id) {
  // si no llega hash, ve a home
  const target = id ? id.replace("#", "") : "home";

  // activar la vista
  VIEWS.forEach((v) => v.classList.toggle("active", v.id === target));

  // marcar link activo
  LINKS.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === `#${target}`)
  );
}

// Cambiar vista al cambiar el hash
window.addEventListener("hashchange", () => showView(location.hash));

// Al cargar la página, ir a la vista del hash o del home
document.addEventListener("DOMContentLoaded", () => {
  showView(location.hash);
});

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navbar.classList.toggle("active");
});

//Cerrar menú al hacer click en un enlace
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
  });
});

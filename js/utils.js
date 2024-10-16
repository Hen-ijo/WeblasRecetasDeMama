/* Variables */
const currentLocation = window.location.pathname;
const menuLinks = document.querySelectorAll(".menu a");
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const containerHero = document.querySelector(".container-hero");
const body = document.body;
/* Variables */

/* Current Page */
menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentLocation) {
    link.classList.add("active");
  }
});
/* Current Page */

/* Mobile Menu */
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  menu.classList.toggle("active");
  containerHero.classList.toggle("active");
  body.classList.toggle("no-scroll");

  if (menuIcon.classList.contains("fa-bars")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-close");
  } else {
    menuIcon.classList.remove("fa-close");
    menuIcon.classList.add("fa-bars");
  }
});
/* Mobile Menu */

/* Scroll Top Btn */
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
/* Scroll Top Btn */

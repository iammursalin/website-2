/* jshint esversion: 6 */

const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

// toggle mobile menu
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("active");
});

// change header on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

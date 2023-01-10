const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navItems.classList.toggle("active");
});

document.querySelectorAll(".item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
  })
);

const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.parentNode.classList.toggle("active");
  });
});

const navBar = document.querySelector(".nav-bar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navBar.classList.add("white-nav");
  } else if (window.scrollY <= 50) {
    navBar.classList.remove("white-nav");
  }
});

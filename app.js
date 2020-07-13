const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".nav-list");
const links = document.querySelectorAll(".nav-list li");


hamburger.addEventListener("click", () => {
  list.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});



const btn = document.querySelector("#open-nav-menu");
btn.addEventListener("click", () => {
  let menu = document.querySelector("header nav .wrapper");
  menu.classList.add("nav-open");
});

const cross = document.querySelector("#close-nav-menu");
cross.addEventListener("click", () => {
  let closure = document.querySelector("header nav .wrapper");
  closure.classList.remove("nav-open");
});

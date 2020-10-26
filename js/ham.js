const ham = document.getElementById("ham");
const main = document.getElementById("main");
const hamBox = document.getElementById("ham-box");
const hamNav = document.getElementById("ham-nav");

ham.addEventListener("click", (e) => {
  ham.classList.toggle("active");
  main.classList.toggle("blur");
  hamNav.classList.toggle("active");

  main.addEventListener("click", (e) => {
    main.classList.remove("blur");
    ham.classList.remove("active");
    hamNav.classList.remove("active");
  });
});

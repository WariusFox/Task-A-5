document.querySelector(".burger-menu").addEventListener("click", function () {
  this.classList.toggle("open");
  document.querySelector(".navigation-list").classList.toggle("active");
});

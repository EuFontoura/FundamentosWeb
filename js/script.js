var NavbarButton = document.getElementById("mobile-menu");
var CloseButton = document.getElementById("close");

NavbarButton.addEventListener("click", function () {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("hide");
  sidebar.classList.add("active");
});

CloseButton.addEventListener("click", function () {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  sidebar.classList.add("hide");
});

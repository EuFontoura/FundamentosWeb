// Para controlar a abertura e fechamento da navbar em mobile

var NavbarButton = document.getElementById("mobile-menu");
var CloseButton = document.getElementById("close");

/**
 * Exibe o menu lateral (sidebar)
 * Remove a classe 'hide' e adiciona a classe 'active'
 */

NavbarButton.addEventListener("click", function () {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("hide");
  sidebar.classList.add("active");
});

/**
 * Oculta o menu lateral (sidebar)
 * Remove a classe 'active' e adiciona a classe 'hide'
 */

CloseButton.addEventListener("click", function () {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  sidebar.classList.add("hide");
});

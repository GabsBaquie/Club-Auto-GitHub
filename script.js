var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

/* Définit la largeur de la navigation latérale à 250px */ /* Sidenav menu */
function openNav() {
  sidenav.classList.add("active");
}

/* Définit la largeur de la navigation latérale à 0 */ /* Active class .sidenav.active */
function closeNav() {
  sidenav.classList.remove("active");
}

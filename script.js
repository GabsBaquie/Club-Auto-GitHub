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

// Gestion des buttons dans page Produit


// - Le 1er forEach parcourt chaque bouton d'onglet dans la liste buttonOnglets, en les préparant pour l'écouteur d'événements.
// - L'index est utilisé pour maintenir la correspondance entre les boutons et leur contenu associé.
// - Le 2ème forEach est la réaction au clic : il vérifie si le bouton cliqué est celui qui est actuellement sélectionné.
// - Si le bouton cliqué est celui actuellement sélectionné, la classe activeTab est ajoutée pour le mettre en évidence.
// - Dans le cas contraire, la classe activeTab est supprimée pour désélectionner les autres boutons.


  const buttonContainer = document.querySelectorAll('.tab');
   buttonContainer.forEach((button) => {
    button.addEventListener('click', () => {
      
    
  buttonContainer.forEach((btn) => {
    if (btn === button) {  
      
//Dans cette condition, nous comparons le bouton actuel de la deuxième boucle forEach (btn) avec le bouton sur lequel l'utilisateur a cliqué (button).

        btn.classList.add('activeTab'); // Ajoute la classe au bouton cliqué
      } else {
        btn.classList.remove('activeTab'); // Supprime la classe des autres boutons
      }
    });
  });
});

//Ce code gère des boutons sur une page produit et permet de sélectionner un bouton d'onglet en lui ajoutant une classe spéciale pour le mettre en évidence. 

// const buttonContainer = document.querySelectorAll('.tab'); On cherche tous les boutons d'onglet sur la page et on les stocke dans la variable buttonContainer.

// buttonContainer.forEach((button) => { ... });
// Pour chaque bouton d'onglet dans la liste, on ajoute un écouteur d'événements qui attend un clic.

// À l'intérieur de la fonction du clic button.addEventListener('click', () => { ... }); 

// On parcoure à nouveau tous les boutons d'onglet avec buttonContainer.forEach((btn) => { ... });.
// Si le bouton en cours (btn) correspond au bouton cliqué (button), alors on ajoute la classe activeTab à ce bouton. Cela le met en évidence.
// Si le bouton en cours ne correspond pas au bouton cliqué, alors on retire la classe activeTab. Cela désélectionne les autres boutons.

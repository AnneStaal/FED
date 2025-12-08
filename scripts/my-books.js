/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

// stap 1: zoek de menu-button op en sla die op in een variabele
const addShelf = document.querySelector("main > button");
const shelfInput = document.querySelector("main");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
addShelf.onclick = shelfAdd;


// stap 3: voeg in de functie een class toe aan main
function shelfAdd(){
  shelfInput.classList.toggle("is-open");
}



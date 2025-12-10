/****************************************/
/* menu openen en sluiten met de button */
/****************************************/

// stap 1: zoek de menu-button op en sla die op in een variabele
const genreButton = document.querySelector("main > ul:nth-of-type(1) button");
const openGenres = document.querySelector("main");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
genreButton.onclick = moreGenres;


// stap 3: voeg in de functie een class toe aan main
function moreGenres(){
  openGenres.classList.toggle("is-open");
}




# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Auteur:
  Anne Staal

  #### Je startniveau:
  Ik kies voor het startniveau: rood.

  #### Je focus:
  Ik ga me vooral focussen op de surface plane. 
</details>





## Je website

<details open>
  <summary>uitwerken voor kick-off werkgroep</summary>

  ### Je opdracht:
    GoodReads
    https://www.goodreads.com/?ref=nav_hom
  #### Screenshot(s) van de eerste pagina (small screen): 
    De eerste pagina die ik ga na maken is de My Books pagina  
  <img src="readme-images/MyBooks.png" width="375px" alt="pagina van de website GoodReads waar je al je opgeslagen boeken kan zien">

  #### Screenshot(s) van de tweede pagina (small screen):
    De tweede pagina die ik ga namaken is de zoekpagina op pinterest.  
  <img src="readme-images/BoekDetail.png" width="375px" alt="pagina van de website GoodReads waar je alle details kan zien">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:

</details>



## Breakdownschets (week 1)

<details>
  <summary>uitwerken na afloop 3<sup>e</sup> werkgroep</summary>
  <img src="readme-images/legenda.jpg" width="100px" alt="legenda voor de breakdownschetsen">
  Hier is een legenda om het makkelijker te maken om mijn breakdownschets te begrijpen.

  ### My books pagina:
  #### De hele pagina: 
  Bij deze afbeelding is te zien in welke secties ik de pagina heb opgedeeld. De secties met een rood kruis ga ik niet uitvoeren.
  <img src="readme-images/my_books.jpg" width="375px" alt="breakdown van de my books pagina">
  
  Hier is mijn breakdownschets van de My Books pagina.
  <img src="readme-images/breakdownschets_my_books.jpg" width="375px" alt="volledige breakdownschets van de my books pagina">
  

  #### dynamisch deel (bijv menu): 
  Hier is mijn breakdownschets van de verschillende dynamische elementen van de website GoodReads.
  <img src="readme-images/menu.jpg" width="250px" alt="breakdown van het secundaire menu als je op de profielfoto klikt">
  <img src="readme-images/hoofdmenu.jpg" width="250px" alt="breakdown van het hoofdmenu">
  <img src="readme-images/hoofdmenu_groot_scherm.jpg" width="250px" alt="breakdown van het hoofdmenu op groot scherm">

  #### wellicht nog een dynamisch deel (bijv filter): 
  Hier is mijn breakdownschets van de uitleg die naar voren komt bij een boek als je erover heen hovert.
  <img src="readme-images/extra_uitleg_boek.jpg" width="375px" alt="breakdown van de extra uitleg die je krijgt bij een boek als je hovert">

  ### Boek in detail pagina:
  #### De hele pagina: 
  Ook de pagina met details van een boek heb ik in verschillende secties verdeeld.De secties met een rood kruis ga ik niet uitvoeren.
  <img src="readme-images/details_page.jpg" width="375px" alt="breakdown van een pagina met details van een boek">
  
  Dit is de breakdownschets van de detail pagina.
  <img src="readme-images/breakdownschets_Book_detail.jpg" width="375px" alt="volledige breakdownschets van een pagina met details van een boek">


  #### dynamisch deel (bijv menu): 
  Hier is mijn breakdownschets van de extra informatie wanneer die is uitgeklapt.
  <img src="readme-images/breakdownschets_book_detail_extra.jpg" width="375px" alt="breakdown van een extra informatie deel wanneer die is uitgeklapt">
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Anne                | Stiene                | Dylan             | Nicha                               | Kasper           |
  | ---                 | ---                   | ---               | ---                                 | ---              |
  | Dropdown menu       | Titel omdraaien       | Hamburger menu    | aria-label active naar unactive     | en dan ik dat    |
  | Button disablen     | ronddraaiend grid     | Custom properties | grid netjes maken                   | dit wil ik zeker |
  | Specifiek element   | h2 en button uit grid |                   |                                     | ...              |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen
 - Grid-column: 1 -1;
 - Krijg je de hele breedte van je grid

 - Emmet cheat sheet

 - List-style-type:””;
    Hiermee blijft het een list voor de screen reader
    Met list-type:none; is het geen lijst meer.

 - Anchor-name in moet in gewone ul
 - Postion-anchor is waar de knoppen voor de carousel aan hangt.

 - Voor geen animatie
    @media (prefers-reduced-motion:no-preference){
	    scroll-behavior: smooth;
    }

 - Aspect-ratio:1/1;
 	  |-> maakt het een vierkantje

 - Als in url live staat kan je er pen van maken dan kan je daar de code van zien

 - Active state met chrome://flags

 - Voor border moet je transparent doen voor high-contrast

</details>





## Voortgang 2 (week 3)

<details>
  <summary>uitwerken voor 2<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  <img src="readme-images/voortgang_2.png" width="375px" alt="mijn voortgang van week 3">


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Anne                      | Stiene              | Dylan               | Kasper                            | Nicha          |
  | ---                       | ---                 | ---                 | ---                               | ---            |
  | ul zowel verticaal        | grid is kapot       | grid kaartjes       | Afsnijden van svg door font-size  |                |
  | als horizontaal plaatsen  |                     | afbeelding scaling  | SVG/Image in content zetten       |                |
  |                           |                     |                     | Kaart in section                  |                |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  - Voor je layout kun je grid-area gebruiken, de tool kan je als hulpmiddel gebruiken ik zou niet de code overnemen. 
  - https://cssgridgenerator.com/
  - https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-area
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):

</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
  Er zijn een paar details van de eerste pagina die mij in de weg zitten. Ik heb ook dingen aan een studentassistent gevraagd, maar die wist het ook niet. Toen heb ik het zelf opgelost.
  Ik merk dat ik tijdens het coderen in plaats van surface plane, ook de hele tijd bezig ben met het reponsive maken van de website.

  ### Agenda voor meeting
  samen met je groepje opstellen

  | Anne                      | Stiene                  | Dylan                            | Kasper                            | Nicha          |
  | ---                       | ---                     | ---                              | ---                               | ---            |
  | headerlink                | picture element stylen  | Bij groepje A1                   | Grid kleiner                      |                |
  | vliegende zoekbar         | Is het genoeg           | grid-scaling oneven verplaatsen  | meer in header (details)          |                |
  | add shelf knop            |                         | hamburger menu via tabben        | Kaart met locaties van winkels    |                |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen
  - Carousel moet buttons erbij

  - Font inherit —> inherit je font van je parent

  - Media queries per element apart (dus voor header, footer en main apart) Liefst zelfs met nog meer elementen.

  - Dvh 

  - Z-index:1 voor header dat zoekbalk niet meer zweeft
  - Scherm moet kleiner 320 px

  - Header foto misschien picture element maken anders
  - Display:flex;
    Justify-content:center;

  - Add button:
    Als open formulier met label input en button.
    Javascript voor nodig

  - Margin-line:auto —> zorgt ervoor dat het iets in het midden komt te staan.
  - Wel als je daarvoor max-width hebt gebruikt.

  - Sterren met range en dan steps:1;
</details>





## Eindgesprek (week 5)

<details>
  <summary>uitwerken voor eindgesprek</summary>

  ### Je uitkomst - karakteristiek screenshots:
  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="uitomst opdracht 1">


  ### Dit ging goed/Heb ik geleerd: 
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="top">


  ### Dit was lastig/Is niet gelukt:
  Korte omschrijving met plaatjes

  <img src="readme-images/dummy-plaatje.jpg" width="375px" alt="bummer">
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron 1
  2. bron 2
  3. ...

</details>
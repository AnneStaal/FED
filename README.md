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
  Ik ga me vooral focussen op de surface plane, maar ondertussen ben ik ook bezig geweest met het responsive maken van de website.
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
  <img src="readme-images2/BoekDetail.png" width="375px" alt="pagina van de website GoodReads waar je alle details kan zien">
 
</details>



## Toegankelijkheidstest 1/2 (week 1)

<details>
  <summary>uitwerken na test in 2<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen:
  #### Screenreader:
  - Er wordt geen gebruik gemaakt van H2. Ook worden er allemaal headings door elkaar gebruikt. Soms klopt de volgorde wel en soms niet.
    <img src="readme-images/mb_headings.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
    <img src="readme-images2/titf_headings.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
  - Sommige linkjes staan er twee keer in, want dan staan ze in de navigatie maar ook in de main.
    <img src="readme-images/mb_links.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
  - Er zijn meerdere linkjes die niet uitleggen waar ze voor zijn, bijv. (edit), here, 2. 
    <img src="readme-images/mb_links_getallen.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
    <img src="readme-images2/titf_links_here.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
  - De boek covers worden heel uitgebreid uitgelegd tussen de linkjes, soms zo erg uitgebreid dat ook de hoeveelheid sterren en beoordelingen erbij staan.
    <img src="readme-images2/titf_links_boeken.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
    <img src="readme-images2/titf_links_boeken_uitgebreid.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
  - Ook zijn de linkjes van de footer bij beide pagina's anders. Bij de een wordt er ook uitgelegd dat de linkjes naar de socials gaan van goodreads en bij de andere wordt er allemaal gezet welke social het is.
      <img src="readme-images/mb_footer.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
      <img src="readme-images2/titf_footer.JPG" width="250px" alt="screenshot van de linkjes die je ziet met screenreader">
  - Als je gewoon rond tabt op de pagina daar wordt je eigenprofiel geskipt terwijl daaronder ook nog een heel menu zit.
  - Als je de pijltjes gebruikt beweegt de hele pagina heen en weer, want er kan horizontaal gescrold worden.

  - Bij de pagina van het boek in detail staat er een linkje ergens midden op de pagina die niet zichtbaar is.
  - De beoordelings sterren worden ook voorgelezen en het wordt ook verteld bij welk van de sterren je bent.
  - Bij Landmarks staat er vaak artikel in, zonder uitleg wat het is.

  #### WCAG-checklist:
  - Er zitten fouten in de code.
  - Niet elke pagina heeft een unieke titel.
  - Zoals eerder vermeld worden er headings geskipt of door elkaar gebruikt.
  - Sommige linkjes zien eruit als buttons.
  - Er is geen mogelijkheid voor licht of donker modus. Er is maar een optie en dat is licht. Hetzelfde bij hoog contrast is ook niet aanwezig.
  - De lettergroote van de website veranderd niet als je het in je instellingen hebt aangepast.
  - Geen andere selectie kleur aanwezig.
  - De ene pagina kan je wel horizontaal scrollen en de ander niet.
  - De twee pagina's zijn ook allebei totaal anders, qua responsive.
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
  <img src="readme-images2/details_page.jpg" width="375px" alt="breakdown van een pagina met details van een boek">
  
  Dit is de breakdownschets van de detail pagina.
  <img src="readme-images2/breakdownschets_Book_detail.jpg" width="375px" alt="volledige breakdownschets van een pagina met details van een boek">


  #### dynamisch deel (bijv menu): 
  Hier is mijn breakdownschets van de extra informatie wanneer die is uitgeklapt.
  <img src="readme-images2/breakdownschets_book_detail_extra.jpg" width="375px" alt="breakdown van een extra informatie deel wanneer die is uitgeklapt">
</details>





## Voortgang 1 (week 2)

<details>
  <summary>uitwerken voor 1<sup>e</sup> voortgang</summary>

  ### Stand van zaken
    hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)
    
    Ik ben bezig geweest met het maken van mijn header. Hier had ik een dropdown menu voor nodig, maar ik wist niet hoe ik dat moest doen. Het maken van de breakdownschets heeft mij wel geholpen om mijn code makkelijker te schrijven. Ik ben alleen vergeten om screenshots te maken van hoe ver ik was aan het eind van week 2.


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

  De basis van mijn eerste pagina staat erin. Ik ben nu bezig geweest met het stylen van mijn eerste pagina. Alleen heb ik lijstjes die zowel verticaal als horizontaal moeten staan en ik weet niet zo goed hoe ik dat het makkelijkste kan gaan doen. Mijn header wordt al beter. Ik heb nu wel een dropdown menu, maar als je hem openklapt staat die nog niet hoe ik het wil.
  <img src="readme-images2/voortgang_2.png" width="375px" alt="mijn voortgang van week 3">
  


  ### Agenda voor meeting
  samen met je groepje opstellen

  | Anne                      | Stiene              | Dylan               | Kasper                            | Nicha          |
  | ---                       | ---                 | ---                 | ---                               | ---            |
  | ul zowel verticaal        | grid is kapot       | grid kaartjes       | Afsnijden van svg door font-size  |                |
  | als horizontaal plaatsen  |                     | afbeelding scaling  | SVG/Image in content zetten       |                |
  |                           |                     |                     | Kaart in section                  |                |


  ### Verslag van meeting
  hier na afloop snel de uitkomsten van de meeting vastleggen

  Ik moet voor de lay-out een grid gaan maken. Ik heb 2 websites gekregen die mij daarbij kunnen helpen.
  - https://cssgridgenerator.com/
  - https://css-tricks.com/snippets/css/complete-guide-grid/#aa-grid-area
</details>





## Toegankelijkheidstest 2/2 (week 4)

<details>
  <summary>uitwerken na test in 9<sup>e</sup> werkgroep</summary>

  ### Bevindingen
  Lijst met je bevindingen die in de test naar voren kwamen (geef ook aan wat er verbeterd is):
   #### Screenreader:
  - De headings zijn nu weer in goede volgorde en er missen geen headings tussen door.
    <img src="readme-images/mb_headings_mijn.JPG" width="250px" alt="screenshot van wat je ziet met screenreader">
    <img src="readme-images2/titf_headings_mijn.JPG" width="250px" alt="screenshot van wat je ziet met screenreader">
  - Linkjes hebben nu een logische naam of vertellen waar ze voor zijn.
    <img src="readme-images/mb_links_mijn.JPG" width="250px" alt="screenshot van wat je ziet met screenreader">
    <img src="readme-images/mb_links2_mijn.JPG" width="250px" alt="screenshot van wat je ziet met screenreader">
     <img src="readme-images2/titf_links_mijn.JPG" width="250px" alt="screenshot van wat je ziet met screenreader">
    <img src="readme-images2/titf_links2_mijn.JPG" width="250px" alt="screenshot van wat je ziet met screenreader">
  - Bij de website van Goodreads zelf hebben ze ook de hoeveelheid sterren en beoordelingen erbij staan, dat heb ik niet gedaan. Wel heb ik daar de titel en de auteur staan.
  - De linkjes bij de footer en header op beide pagina's zijn nu hetzelfde
  - Als je tabt door de website volg je een logische lijn door de website en je komt ook bij je profiel en het menu daaronder.
  - De website beweegt nu niet meer van links naar rechts als je je pijltjes gebruikt.

  #### WCAG-checklist:
  - Zelf heb ik geen darkmodus toegevoegd, dat had ik wel moeten doen, maar ik heb geen svg's in mijn website. Het zijn allemaal afbeeldingen.
  - Voor de rest was de website al best wel volgens de checklist. Er zijn een paar ervaringselementen die ik heb verbeterd.
</details>





## Voortgang 3 (week 4)

<details>
  <summary>uitwerken voor 3<sup>e</sup> voortgang</summary>

  ### Stand van zaken
  hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)

  Er zijn een paar details van de eerste pagina die mij in de weg zitten. Ik heb ook dingen aan een studentassistent gevraagd, maar die wist het ook niet. Toen heb ik het zelf opgelost.
  Ik merk dat ik tijdens het coderen in plaats van surface plane, ook de hele tijd bezig ben met het reponsive maken van de website. Ik vraag mezelf alleen af of ik niet op een te groot scherm aan het werken ben. 

  Ik ben bijna klaar met mijn eerste pagina tot in de details, maar dat zorgt ervoor dat ik nog niet zoveel heb gedaan aan mijn tweede pagina dus daar moet ik wel echt aan gaan beginnen. De opzet is er maar de rest nog niet.

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
  <img src="readme-images/my_books_eigen.jpg" width="375px" alt="uitomst pagina 1">
  <img src="readme-images2/titf_eigen.jpg" width="375px" alt="uitomst pagina 2">


  ### Dit ging goed/Heb ik geleerd: 
  Het maken van de code ging goed. Ik wist wat ik aan het doen was en hoe ik verder moest. Ik wist ook welke vragen ik moest stellen. Het maken van de breakdownschetsen hielpen daar wel heel erg bij. Dus het is fijn dat ik daar veel tijd in heb gestoken.

  <img src="readme-images2/breakdownschets_Book_detail.jpg" width="375px" alt="voorbeeld">


  ### Dit was lastig/Is niet gelukt:
  Mijn tijdsindeling heb ik niet helemaal goed gedaan. Dus dat moet ik volgende keer echt anders doen. Ook ben ik te erg bezig geweest met de eerste pagina eerst helemaal in detail maken wat ervoor zorgde dat ik in tijdsnood kwam. Dus voor een volgende keer moet ik eerst alle de pagina's 80% afmaken en als ik tijd over heb de details gaan doen.

  Licht en donker modus is mij uiteindelijk niet gelukt en dat vind ik wel jammer. Als ik nog extra extra tijd had gehad dan zou ik daar beter naar gekeken hebben. 

  Een ding wat mij echt niet lukte was het blauw randje dat je krijgt als je door een website heen tabt weg te halen. Ik snap het nog steeds niet.
</details>





## Bronnenlijst

<details open>
  <summary>continu bijhouden terwijl je werkt</summary>

  Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg). 
  Nb. ChatGpT en andere AI horen er ook bij.
  Nb. Vermeld de bronnen ook in je code.

  1. bron:https://codepen.io/AnneStaal/pen/YPqdxBy?editors=1100 van Sanne	
  2. ai https://chatgpt.com/share/693199ea-1954-800e-b91f-44c77274fbbf
  3. https://codepen.io/AnneStaal/pen/VYaqmBW van een van de studentassistenten

</details>
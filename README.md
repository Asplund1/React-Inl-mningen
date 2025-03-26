# React-Inl-mningen
Dashboard 

skillnad från grupp projektet: startade om från början, då grupp delen var gjord med react router istället för vite samt med typescript istället för javascript. så det kändes lättare att börja om och bli bättre på det jag förstår och jobbat med innan än att lära mig något nästan helt nytt. 

men jag fortsatte med att använda tailwind samt med att själva iden om en musik dashboard. 



<!-- Projektbeskrivning (Vad är detta för projekt? Varför en musikapp? Vilken data använder du?)

Teknikval (React, Tailwind, React Router, eventuella andra bibliotek)

Installationsinstruktioner (hur man kör npm install, npm run dev etc.)

Kortfattad dokumentation över hur koden är strukturerad (mappstruktur och huvudkomponenter).

Beskrivning av egen funktionalitet (om du har lagt till filtrering, sökfunktion eller något annat). -->

Projektbeskrivning
Musikappen är en dashboard där du kan:
Söka efter artister och låtar (via MusicBrainz API).
Byta mellan ljust/mörkt tema med en ThemeToggle.
Spara låtar och artister i en spellista (Redux).
Navigera mellan olika sidor: Home, Search och About.
Jag valde att göra en musikapp / dashboard för det lät intressant att jobba med ett musik api.


Teknikval
React

Redux Toolkit: Hantering av global state (spellista).
React Router: Navigering mellan olika sidor.
Tailwind CSS: UI-ramverk för responsiv design och snabba CSS-utility-klasser.
MusicBrainz API: Externt API för artist- och låtdata.



Funktioner

Sökfunktion:
Välj “Artist” eller “Låt” med en radioknapp.
Skriv en sökterm i SearchBar.
Klicka på “Sök” för att hämta max 10 träffar från MusicBrainz.
Varje träff kan läggas till i en global spellista (Redux).

spellista:
Klicka på spellista för att se sparade låtar.
Ta bort enskilda låtar eller rensa hela listan.


Tema (Dark/Light):
ThemeToggle byter mellan ljust och mörkt läge.

Ramverk:
Sidan använder Tailwind-klasser för att ändra bakgrund och textfärger samt storlek på text.

Responsiv Design:
Applikationen fungerar i mobil, surfplatta och desktop-läge.


├─ src/
│  ├─ Components/
│  │  ├─ Navbar.jsx
│  │  ├─ ThemeToggle.jsx
│  │  ├─ SearchBar.jsx
│  │  ├─ SearchResults.jsx
│  │  └─ AnimatedCard.jsx
│  ├─ Pages/
│  │  ├─ Home.jsx
│  │  ├─ SearchMusicBrainz.jsx
│  │  └─ About.jsx
│  ├─ Features/
│  │  └─ playlistSlice.js
│  ├─ services/
│  │  └─ musicbrainz.js
│  ├─ state/
│  │  └─ Store.js
│  ├─ App.jsx
│  └─ main.jsx
├─ public/
├─ package.json
└─ README.md


Components: Återanvändbara UI-komponenter (Navbar, SearchBar, etc.).
Pages: Varje vy/sida i applikationen (Home, About, Search).
Features: Redux-slices (ex. playlistSlice) som hanterar global state.
services: API-anrop mot MusicBrainz.
state: Konfiguration av Redux-store.




   installation och körning av musikappen/dashboarden

  1. klona detta repo
  i github går det att klona genom att trycka på den gröna knappen som heter <> code, sedan kan du välja att öppna applikationen genom några olika alternativ.
  2. installera beroenden
    cd musikapp skriver du sedan in i terminalen bash 
    följt av npm install följt av npm run dev
// Möglichkeiten | je größer die Zahl bei Array(), deste höher die Chancen | Bilder im 290x400px Format und ".dateiendung" muss zusammen 4 sein, z.b. "".jpg"

var bizepscurls = "bizepscurls.jpg";
var kniebeugen = "kniebeugen.jpg";
var hampelmänner = "hampelmänner.jpg";
var gewinn = "gewinn.jpg";
var nochmal = "nochmal.jpg";
var niete = "niete.jpg";

const auswahl = [
   ...Array(1).fill(gewinn),
   ...Array(10).fill(bizepscurls),
   ...Array(8).fill(kniebeugen),
   ...Array(7).fill(hampelmänner),
   ...Array(7).fill(nochmal),
   ...Array(6).fill(niete)
]


// Strg + F9 drücken für Umdrehen

document.addEventListener("keydown", e => {
   e.preventDefault();
   if (
      e.key.toLowerCase() === "f9"
      && e.ctrlKey
      ) {
      findchoices();
      turnAround();
   }
   else {
      return;
   }
});


// Strg + F10 drücken für Reset

document.addEventListener("keydown", e => {
   e.preventDefault();
   if (
      e.key.toLowerCase() === "f10"
      && e.ctrlKey
      ) {
         reset();
   }
   else {
      return;
   }
});

// Möglichkeiten aussuchen | erst aussuchen, wenn die Karte verdeckt ist
function findchoices() {
   if (document.querySelector(".back-face").style.transform == "rotateY(0deg)" && document.querySelector(".front-face").style.transform == "rotateY(-180deg)") {
      return;
   } else {
      // Random Auswahl
      let zufälligeZahl = Math.floor(Math.random() * auswahl.length);
      let rückseiteBild = auswahl[zufälligeZahl];


      document.querySelector(".back-face").style.background = "url(" + rückseiteBild + ")"; // für Hintergrund der Rückseite


      // Variablen für die Werte der Ergebnisse

      var bizepcurlsValue = document.querySelector("#bizepcurlsTableValue");

      var kniebeugenValue = document.querySelector("#kniebeugenTableValue");

      var hampelmännerValue = document.querySelector("#hampelmännerTableValue");

      var gewinnValue = document.querySelector("#gewinnTableValue");

      var nochmalValue = document.querySelector("#nochmalTableValue");

      var nieteValue = document.querySelector("#nieteTableValue");


      // Anzeige, wie oft gedreht wurde

      var turnedValue = document.querySelector("#turnedValue");

      function incrementTurnedValue() {
         turnedValue.value = parseInt(turnedValue.value) + 1;
      }
      incrementTurnedValue();


      // Schickt die Werte an die Tabelle, wie oft die jeweiligen Optionen gemacht werden müssen

      if (rückseiteBild == "bizepscurls.jpg") {
         function incrementBizepcurlsValue() {
            bizepcurlsValue.value = parseInt(bizepcurlsValue.value) + 5;
         }
         incrementBizepcurlsValue();
      } else if (rückseiteBild == "kniebeugen.jpg") {
         function incrementKniebeugenValue() {
            kniebeugenValue.value = parseInt(kniebeugenValue.value) + 5;
         }
         incrementKniebeugenValue();
      } else if (rückseiteBild == "hampelmänner.jpg") {
         function incrementHampelmännerValue() {
            hampelmännerValue.value = parseInt(hampelmännerValue.value) + 5;
         }
         incrementHampelmännerValue();
      } else if (rückseiteBild == "gewinn.jpg") {
         function incrementGewinnValue() {
            gewinnValue.value = parseInt(gewinnValue.value) + 1;
         }
         incrementGewinnValue();
      } else if (rückseiteBild == "nochmal.jpg") {
         function incrementNochmalValue() {
            nochmalValue.value = parseInt(nochmalValue.value) + 1;
         }
         incrementNochmalValue();
      } else if (rückseiteBild == "niete.jpg") {
         function incrementNieteValue() {
            nieteValue.value = parseInt(nieteValue.value) + 1;
         }
         incrementNieteValue();
      } else {
         return;
      }
   }
}


// Umdrehen Button | Position der Karte checken und dann entweder abbrechen oder umdrehen

function turnAround() { // Checken ob Rückseite vorne ist
   if (document.querySelector(".back-face").style.transform == "rotateY(0deg)" && document.querySelector(".front-face").style.transform == "rotateY(-180deg)") {
      return;
   } else { // Wenn nicht, dann Rückseite nach vorne drehen
      document.querySelector(".back-face").style.transform = "rotateY(0deg)";
      document.querySelector(".front-face").style.transform = "rotateY(-180deg)";
   }
}


// Reset Button | Position der Karte checken und dann entweder abbrechen oder resetten / umdrehen

function reset() { // Checken ob Vorderseite vorne ist
   if (document.querySelector(".back-face").style.transform == "rotateY(180deg)" && document.querySelector(".front-face").style.transform == "rotateY(0deg)") {
      return;
   } else { // Wenn nicht, dann Vorderseite nach vorne drehen
      document.querySelector(".back-face").style.transform = "rotateY(180deg)";
      document.querySelector(".front-face").style.transform = "rotateY(0deg)";
   }
}
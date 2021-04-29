//Projekti 2: Arvauspeli/Javascript-osuus/Paul Willman/19.4.2021//

(function () {
    //Määritetään muuttujat, joita funktio tarvitsee toimiakseen.
    var guessesLeft, randomNumber, guessInput, guessTable = [], submitButton, answerDisplay, maxGuesses;
    var msg1 = document.getElementById('message1');
    var msg2 = document.getElementById('message2');

    //Määritetään kuinka monta kertaa pelaaja voi veikata per peli//
    maxGuesses = 3;



    //Ladataan kaikki elementit DOM:mista etukäteen
    //jotta sitä ei tarvitse tehdä joka kerta, kun tarkistamme vastauksen
guessInput = document.getElementById('guess');
submitButton = document.getElementById("submitAnswer");

    //Käytetään DIV-elementtiä kertomaan vastaus
    answerDisplay = document.getElementById("answer");

    answerDisplay.innerHTML = "Arvaa lukuni kolmella yrityksellä!";

    submitButton.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        checkAnswer();
    });

    //Alustetaan peli
    initGame();

    function initGame () {
        guessesLeft = maxGuesses;
        guessTable = [];
        msg1.textContent = "Veikkauksia jäljellä: " + guessesLeft;
        msg2.textContent = "Arvatut numerosi ovat: None";
        randomNumber = Math.floor(Math.random() * 10 + 1);
        guessInput.value = "";
    }

//Tarkistetaan ja vertaillaan pelaajan antamaa vastausta ehtoihin
    function checkAnswer () {

      //Annetaan ohjeistukset jättämään edellinen pelaajan veikkaus näkyviin//
      var temp = guessInput.value;
      guessTable.push(temp);
        //Jokainen pelaajan veikkaus vähentää yhden veikkauksen maksimi määrästä, mitä pelaaja voi tehdä per peli.
        guessesLeft -= 1;

        //funktio tarkistaa ensin vastasitko oikein, jos kyllä, se pysähtyy tähän.
        if (guessInput.value == randomNumber) {
            answerDisplay.innerHTML = "Sinä voitit! " + randomNumber + " on oikein. " +
                "Laita uusi veikkaus aloittaaksesi pelin uudelleen. Muista, että sinulla on kolme yritystä arvata lukuni!";
            msg1.textContent = "Veikkauksia jäljellä: " + guessesLeft;
            msg2.textContent = "Arvatut numerosi ovat: " + guessTable;
            initGame();
            return;
        }
        //Jos ei, funktio tarkistaa menitkö veikkauksessasi yli oikean vastauksen. Jos kyllä, se pysähtyy tähän.
        else if (guessInput.value > randomNumber) {
            answerDisplay.innerHTML = "Liian korkea!";
            msg1.textContent = "Veikkauksia jäljellä: " + guessesLeft;
            msg2.textContent = "Arvatut numerosi ovat: " + guessTable;
        }
        //Muussa tapauksessa funktio ymmärtää veikkauksen olleen liian alhainen ja se pysähtyy tähän.
        else {
            answerDisplay.innerHTML = "Liian matala!";
            msg1.textContent = "Veikkauksia jäljellä: " + guessesLeft;
            msg2.textContent = "Arvatut numerosi ovat: " + guessTable;
        }

        //Jos kaikki 3 veikkausta meni pieleen, käynnistää funktio tämän osuuden ja lopettaa pelin, pyytäen samalla aloittamaan uuden.
        if (guessesLeft === 0) {
            answerDisplay.innerHTML += " Nyt loppui arvaukset - Sinä hävisit! Veikkaa uudelleen aloittaaksesi uuden pelin. Muista, että sinulla on kolme yritystä arvata lukuni!";
            msg1.textContent = "Veikkauksia jäljellä: " + guessesLeft;
            msg2.textContent = "Arvatut numerosi ovat: " + guessTable;
            initGame();
        }
    }

}());

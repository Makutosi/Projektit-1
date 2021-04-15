

const randomNum = Math.floor(Math.random() * 10)+1;    //Math.random antaa meille randomilla luvun, kunhan se on kerrottu tarvittavalla lukumäärällä ja Math.floor pitää huolta että se pysyy kokonaislukuna.
var no_of_guesses = 0;
var maxGuesses = 3;
var guessed_nums = [];

function play()
{
  var msg1 = document.getElementById('message1');
  var msg2 = document.getElementById('message2');
  var msg3 = document.getElementById('message3');
  var user_guess = document.getElementById('guess').value;
  if (user_guess < 0 || user_guess > 10 )
  {
    alert("Valitse numero 0 - 10 välillä");
  }
  else
  {
    guessed_nums.push(user_guess);
    no_of_guesses+= 1;

    if (user_guess < randomNum)
    {
      msg1.textContent = "Vastauksesi on liian pieni.";
      msg2.textContent = "Vastaustesi määrä: " + no_of_guesses;
      msg3.textContent = "Arvatut numerosi ovat: " + guessed_nums;
    }
    else if (user_guess > randomNum)
    {
      msg1.textContent = "Vastauksesi on liian korkea.";
      msg2.textContent = "Vastaustesi määrä: " + no_of_guesses;
      msg3.textContent = "Arvatut numerosi ovat: " + guessed_nums;
    }
    else if (user_guess == randomNum)
    {
      msg1.textContent = "Upeata! Arvasit oikein!";
      msg2.textContent = "Numero oli: " + randomNum;
      msg3.textContent = "Arvasit sen: " + no_of_guesses + " yrityksellä";
      document.getElementById('my_btn').disabled = true;
    }
  }
}

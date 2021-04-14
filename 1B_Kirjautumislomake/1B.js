//Projekti 1B Kirjautumislomake JS-osuus /Eriko Korhonen/ 9.4.2021/v1
//nimi tarkastus
function validate()
{
 var nimi = document.getElementById("nimisyotto").value; //("nimi")?
 if(nimi.length < 6)
 {
   alert("Antamasi nimi on liian lyhyt");
   return false;
 }
 else
 {
   return;
 }

}
//email tarkastus
function emailValidation(){
  var mail = document.getElementById("emailsyotto").value;
  if(mail == "") {
    alert("Syötä sähköpostiosoite!");
    return false;
  }
  if(mail.indexOf("@") == -1){
    alert("Virheellinen sähköpostiosoite!")
  }

    return true;
}


 //ika tarkastus
 function ikaValidation() {
 var ika = document.getElementById("ikasyotto").value;
  if(isNaN(ika) || ika <= 0 || ika > 100) {
    alert("Tarkista ikä!");
    return false;
  }
}

 //radioButton tarkastus
 function checkRadio()
 {
    if(document.getElementById('nainen').checked || document.getElementById('mies').checked ||
    document.getElementById('muu').checked) {

    }
    else
    {
        alert("Valitse yksi");
    }
}

//checkboxit tarkastus
function checkCheckBox()
 {
    var checkbox = document.getElementById("checkbx");
    var checkboxes = checkbox.getElementsByTagName("input");
    var isValid = false;

    for(var i = 0; i<checkboxes.length; i++) {
      if(checkboxes[i].type == "checkbox" && checkboxes[i].checked) {
        isValid = true;
        break;
      }
    }

    alert("Tarkista valinnat");
    return isValid;
 }

 //  pudotusvalikko tarkastus
 function dropValidation() {
  var e = document.getElementById("pudotus");
  var option = e.options[e.selectedIndex].value;
  if(option == 0) {
    alert("Valitse pudotusvalikosta yksi.");
  }
 }
// Palaute-textarea tarkastus
function checkText()
{
var palaute = document.getElementById("palaute").value;
 if(palaute.length < 10)
 {
   alert("Palautteessa pitää olla vähintään 10 merkkiä");
   return false;
 }
}

// Submit tarkastus
var submit = document.getElementById("submit");
kyselyLomake.onsubmit = function()
{
  if (kyselyLomake.nimi.value == "")
  {
    message.innerHTML = "Täytä lomake";
    return false;
  }
  else
  {
    message.innerHTML ="Kiitos lomakkeen täyttämisestä";
    return true;
  }
}


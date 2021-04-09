//Projekti 1B Kirjautumislomake JS-osuus /Eriko Korhonen/ 9.4.2021/v1
//nimi tarkastus
function validate()
{
 var nimi = document.getElementById("nimisyotto").value;//("nimi")?
 if(nimi.length < 6)
 {
   message.innerHTML = "Antamasi nimi on liian lyhyt";
   return false;
 }
 else
 {
   message.innerHTML = "";
   return true;
 }

//email tarkastus
var email = document.getElementById("email").value; // ("emailsyotto")?
function emailIsValid (email)
{
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
if(emailIsValid(sahkoposti)) {
 }
 else
 {
   alert("Anna oikea sähköpostiosoitteesi");
   return false;
 }

 //ika tarkastus
 var ika = document.getElementById("ikasyotto").value;
   if( nimi = texti)//?
   {
     message.innerHTML = "Numero ei määriteltävissä";
     return false;
   }
   else
   {
     message.innerHTML = "";
     return true;
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
    var checked = 0;
    var checkbox = document.getElementById("checkbox");
    var checks = checkbox.getElementsByTagName("INPUT");
    for(var i = 0; i<checks.length; i++) {
        if(checks[i].checked)
         {
            checked++;
        }
    }

    if (checked > 0)
     {
        return true;
    }
    else
    {
        alert("Valitse ainakin yksi!");
        return false;
    }
}

 //  pudotusvalikko tarkastus
var selected_option_text = oSelectOne.options[index].text;
var selected_index = oForm.elements["matkustus"].selectedIndex;

if(selected_index > 0)
{
   //var selected_option_value = oForm.elements["matkustus"].options[selected_index].value;?
   var selected_option_text = oForm.elements["matkustus"].options[selected_index].text;
}
else
{
   alert('Valitse yksi');
}

// Palaute-textarea tarkastus
function checkText()
{
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

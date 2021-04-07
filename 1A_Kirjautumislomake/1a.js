///KIRJAUTUMISLOMAKE-TEHTÄVÄN JS/ Riku Kaartoaho/

//Tarkastaa radio-painikkeet//
function checkRadio() {
    if(document.getElementById('user').checked || document.getElementById('student').checked || document.getElementById('none').checked) {

    }else {
        alert("Valitse millainen tietokoneen käyttäjä olet!");
    }
}
//Tarkastaa checkboxit//
function checkCheckBox() {
    var checked = 0;
    var checkbox = document.getElementById("checkbox");
    var checks = checkbox.getElementsByTagName("INPUT");
    for(var i = 0; i<checks.length; i++) {
        if(checks[i].checked) {
            checked++;
        }
    }

    if (checked > 0) {
        return true;
    } else {
        alert("Kerro mitä mieltä olet sivuistamme!")
        return false;
    }
}

function checkText() {
    var text = document.getElementById("textarea").value;

    if(text.length < 20) {
        alert("Palautteen pitää olla vähintään 20 merkkiä pitkä!");
        return false;
    } else {
        return true;
    }
}

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var minLength = 6;

//Tarkastaa käyttäjänimen//
    if(username.length < minLength) {
        alert("Anna vähintään 6-merkkinen käyttäjänimi");
        return false;
    } else{
        
    }

//Tarkastaa onko salasanassa isoa kirjainta//
    var i=0;
    var character='';
    while (i <= password.length){
        character = password.charAt(i);
        if (!isNaN(character * 1)){
            
        }else{
            if (character == character.toUpperCase()) {
                alert("Tervetuloa " + username + "!");
                return true;
            }
            if (character == character.toLowerCase()){
                alert("Salasanassa on oltava vähintään yksi iso kirjain!");
                return false;
            }
        }
        i++;
    }

}


///KIRJAUTUMISLOMAKE-TEHTÄVÄN JS/ Riku Kaartoaho/

function validation() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var minLength = 6;

//Tarkastaa käyttäjänimen//
    if(username.length < minLength) {
        alert("Anna vähintään 6-merkkinen käyttäjänimi");
        return false;
    } else{
        
    }
    //Tarkastaa radio-painikkeet//
    if(document.getElementById('user').checked || document.getElementById('student').checked || document.getElementById('none').checked) {

    }else {
        alert("Valitse millainen tietokoneen käyttäjä olet!");
        return false;
    }
    //Tarkastaa checkboxit//
    var checked = 0;
    var checkbox = document.getElementById("checkbox");
    var checks = checkbox.getElementsByTagName("INPUT");
    for(var i = 0; i<checks.length; i++) {
        if(checks[i].checked) {
            checked++;
        }
    }

    if (checked <= 0) {
        alert("Kerro mitä mieltä olet sivuistamme!");
        return false;
    } else {
        
    }
    //textarea check
    var text = document.getElementById("textarea").value;

    if(text.length < 20) {
        alert("Palautteen pitää olla vähintään 20 merkkiä pitkä!");
        return false;
    } else {
        return true;
    }
}

function pwCheck() {
    //Tarkastaa onko salasanassa isoa kirjainta//
if(password.value != "") {
    if(password.value.length < 6) {
      alert("Salasan on oltava vähintään 6 merkkiä pitkä!");
      return false;
    }
    var a = /[A-Z]/;
        if(!a.test(password.value)) {
        alert("Salasanassa on oltava vähintään yksi iso kirjain!");
        return false;
    }
} else {
    alert("Syötä salasana!");
}
}

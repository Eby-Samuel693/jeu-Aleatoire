let trouver = Math.floor(Math.random() * 100) + 1;
let chance = 10;
let rep = document.getElementById("rep");
let rest = document.getElementById("chiffre");
let champ = document.getElementById("text");
let envoie = document.getElementById("click");
let utilisateur = document.getElementById("rep-U");
let reset = document.getElementById("reset");

function monClick() {

    if (chance > -1) {

        if (parseInt(champ.value) === trouver) {
            rep.innerHTML = "trouver !!!";
            utilisateur.innerHTML += champ.value + " ";
        }
        else if (parseInt(champ.value) < trouver) {

            rep.innerHTML = "FAUX ton nombre est trop petit.";
            rest.innerHTML = chance--;
            utilisateur.innerHTML += champ.value + " ";
            reset.removeEventListener("click",monClick);
        }
        else if (parseInt(champ.value) > trouver) {
            rep.innerHTML = "FAUX ton nombre est trop grand.";
            rest.innerHTML = chance--;
            utilisateur.innerHTML += champ.value + " ";
            reset.removeEventListener("click",monClick);
        }
        else {
        }
    }
    else {
        reset.removeEventListener("click",champ.value);
    }
}

envoie.addEventListener("click",monClick);
reset.addEventListener("click",monReset);


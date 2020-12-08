let trouver = Math.floor(Math.random() * 100) + 1;
let chance = 10;
let rep = document.getElementById("rep");
let rest = document.getElementById("chiffre");
let champ = document.getElementById("text");
let envoie = document.getElementById("click");
let utilisateur = document.getElementById("rep-U");
let reset = document.getElementById("reset");

//fonction monClick
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
        }
        else if (parseInt(champ.value) > trouver) {
            rep.innerHTML = "FAUX ton nombre est trop grand.";
            rest.innerHTML = chance--;
            utilisateur.innerHTML += champ.value + " ";
        }
        else {
        }
    }
    else {

    }
}


// fonction "reset"
function supprime() {
    champ.value = null;
    utilisateur.innerHTML = null;
    rest.innerHTML = null;
}


// le bouton "envoie" permet simplement de validé le nombre entrée ^^
envoie.addEventListener("click",monClick);

// le bouton "recommencé" remettra les valeurs par defaut = nul
reset.addEventListener("click",supprime);


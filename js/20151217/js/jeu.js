var mots = ["chat","dromadaire","poulpe"];
var motADeviner;

function generatePage() {
    // On tire au hasard un mot, ça devient le mot à deviner
    var i = random(0, mots.length);
    motADeviner = mots[i];
    // Deux window.alert affichant le mot à deviner et son nombre de lettres
    // window.alert(motADeviner);
    // window.alert(motADeviner.length);
    // On crée autant d’input et de boutons qu’il y a de lettres dans le mot à deviner
    divLettres = document.getElementById("lettres");
    for (var i=0; i < motADeviner.length; i++) {
        // on met un id = numéro de la lettre aux inputs
        // on met un onclick qui appelle la fonction verifier avec comme paramètre
        // le numéro de la lettre
        divLettres.innerHTML += "<input type='text' id='" + i + "'><button onclick='verifier(" + i + ");'>OK</button><br>";
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

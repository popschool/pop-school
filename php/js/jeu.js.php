<?php
/*
 * BDD Name :   myPHPApp
 * Table name : words
 * Table columns :
 *              id:     Integer, auto-incremental
 *              word:   VarChar(255)
 * Don't forget to change MySQL login and password in script
 * to fit your ones
 * */
$cnx = mysql_connect("localhost","root","");
mysql_select_db("myPHPApp");

$req = "SELECT * FROM words";
$result = mysql_query($req, $cnx);

$motsBDD = "";
while($item = mysql_fetch_array($result)) {
    $motsBDD .= "\"" . $item["word"] . "\",";
}
?>
var mots = [<?=$motsBDD?>];
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

// Vérification de la valeur d’une lettre entrée par l’utilisateur
function verifier(numeroLettre) {
    var lettreAController = document.getElementById(numeroLettre).value;
    // window.alert(lettreAController);
    // On contrôle si la lettre utilisateur est la même que celle dans le mot
    if(lettreAController == motADeviner[numeroLettre]) {
        window.alert("bon");
    }
    else {
        window.alert("mauvais");
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

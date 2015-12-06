// fonction pour générer la liste des matchs
function remplirMatchs(nbEquipes) {
    /* variable pour stocker les matches
    contient un tableau avec
        0 => numéro de round
        1 => information sur le match */
    var listeMatchs = [];
    // variable temporaire pour l’algo mathématique
    var roundRobinEquipes = [];
    // on ajoute les numéros d’équipes dans la variable temporaire
    for (var i=0; i<nbEquipes; i++) {
        roundRobinEquipes.push(i);
    }

    for (var i=0; i < nbEquipes-1; i++) {
        listeMatchs[i] = [];
        for (var j=0; j < nbEquipes/2; j++) {
            listeMatchs[i].push(roundRobinEquipes[j] + "," + roundRobinEquipes[nbEquipes - 1 - j]); // insert pair as a match
        }
        roundRobinEquipes.splice(1, 0, roundRobinEquipes.pop()); // permutate for next round
    }

    var listeMatchsDiv = ""; // we start with a not undefiened string
    for (var i=0; i<listeMatchs.length; i++) { // liste des rounds
        listeMatchsDiv += "\n\t<div class=\"journee\" id=\"journee" + i + "\">";
        listeMatchsDiv += "\n\t\t<h2>Journée " + (i+1) + "</h2>";
        for (var j=0; j<listeMatchs[i].length; j++) { // matches des rounds
            listeMatchsDiv += "\n\t\t\t<div>";
            var nomsDesEquipes = listeMatchs[i][j].split(",");
            var nomDuMatch = unserialize("nomEquipe" + nomsDesEquipes[0]) + " vs " + unserialize("nomEquipe" + nomsDesEquipes[1]);
            listeMatchsDiv += "\n\t\t\t\t<label for=\"resultat" + listeMatchs[i][j] + "\">" + nomDuMatch + "</label>";
            listeMatchsDiv += "\n\t\t\t\t<input type=\"text\" pattern=\"[0-9]*-[0-9]*\" size=\"5\" maxlength=\"5\" placeholder=\"0-0\" value=\"" + unserialize("resultat" + listeMatchs[i][j]) + "\" onchange=\"serialize(this);\" id=\"resultat" + listeMatchs[i][j] + "\">";
            listeMatchsDiv += "\n\t\t\t</div>";
        }
        listeMatchsDiv += "\n\t</div>";
    }
    document.getElementById("listeMatchs").innerHTML += listeMatchsDiv;
}


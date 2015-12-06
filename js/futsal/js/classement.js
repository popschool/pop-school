function afficherClassement(nbEquipes) {
    // variable pour stocker les scores
    var listeScores = [];
    /* variable pour stocker les points
    contient des tableaux avec
        0 => nom de l’équipe
        1 => son nombre de points
        2 => son nombre de victoires avec bonus offensif
        3 => son nombre de victoires
        4 => son nombre de matchs nuls
        5 => son nombre de défaites
        6 => buts marqués
        7 => buts pris
    */
    var infoEquipes = [];
    // variable temporaire pour l’algo mathématique
    var roundRobinEquipes = [];
    // on ajoute les numéros d’équipes dans la variable temporaire
    for (var i=0; i<nbEquipes; i++) {
        roundRobinEquipes.push(i);
        infoEquipes[i] = Array(2);
        infoEquipes[i][0] = unserialize("nomEquipe" + i);
        infoEquipes[i][1] = 0;
        infoEquipes[i][2] = 0;
        infoEquipes[i][3] = 0;
        infoEquipes[i][4] = 0;
        infoEquipes[i][5] = 0;
        infoEquipes[i][6] = 0;
        infoEquipes[i][7] = 0;
    }

    // application de l’algo round-robin pour avoir la liste des matchs
    for (var j=0; j < nbEquipes-1; j++) {
        for (var i=0; i < nbEquipes/2; i++) {
            // on récupère le n° de l’adversaire selon l’alog round-robin
            var idAdversaire = nbEquipes - 1 - i;
            // on récupère le résultat
            var result = unserialize("resultat" + [roundRobinEquipes[i] + "," + roundRobinEquipes[idAdversaire]]).split("-"); // fetch match
            result[0] = parseInt(result[0]);
            result[1] = parseInt(result[1]);
            // problème avec le résultat du match récupéré, on boucle
            if(isNaN(result[0]) || isNaN(result[1]))
                continue;
            // on calcule la différence de but
            var diff = result[0]-result[1];
            // on répercute les buts marqués en encaissés
            infoEquipes[i][6] += result[0];
            infoEquipes[i][7] += result[1];
            infoEquipes[idAdversaire][6] += result[1];
            infoEquipes[idAdversaire][7] += result[0];

            // victoire de A sur B, bonus offensif
            if(diff >= 3) {
                infoEquipes[i][1] += 4;
                infoEquipes[i][2]++;
                infoEquipes[idAdversaire][5]++;
            }
            // victoire de A sur B
            else if(diff >= 1) {
                infoEquipes[i][1] += 3;
                infoEquipes[i][3]++;
                infoEquipes[idAdversaire][5]++;
            }
            // match nul
            else if(diff == 0) {
                infoEquipes[i][1]++;
                infoEquipes[idAdversaire][1]++;
                infoEquipes[i][4]++;
                infoEquipes[idAdversaire][4]++;
            }
            // victoire de B sur A
            else if(diff <= -1) {
                infoEquipes[idAdversaire][1] += 3;
                infoEquipes[idAdversaire][3]++;
                infoEquipes[i][5]++;
            }
            // victoire de B sur A, bonus offensif
            else if(diff <= -3) {
                infoEquipes[idAdversaire][1] += 4;
                infoEquipes[idAdversaire][2]++;
                infoEquipes[i][5]++;
            }
        }
        // application de l’aglo round-robin
        roundRobinEquipes.splice(1, 0, roundRobinEquipes.pop());
    }

    // on trie les équipes selon leur classement
    infoEquipes = infoEquipes.sort(compare);

    // affichage
    classement = "\n\t\t<table>";
    classement += "\n\t\t<tr><td></td><th>Équipe</th>" +
                        "<th>points</th>" +
                        "<th>victoires++</th>" +
                        "<th>victoires</th>" +
                        "<th>nuls</th>" +
                        "<th>défaites</th>" +
                        "<th>diff</th>" +
                        "</tr>";
    for(var i=0; i<infoEquipes.length; i++)
        classement += "\n\t\t\t<tr><th>" + (i+1) + "</th>" +
                        "<th>" + infoEquipes[i][0] + "</th>" +
                        "<td>" + infoEquipes[i][1] + "</td>" +
                        "<td>" + infoEquipes[i][2] + "</td>" +
                        "<td>" + infoEquipes[i][3] + "</td>" +
                        "<td>" + infoEquipes[i][4] + "</td>" +
                        "<td>" + infoEquipes[i][5] + "</td>" +
                        "<td>" + (infoEquipes[i][6]-infoEquipes[i][7]) + "</td>" +
                        "</tr>";
    classement += "\n\t\t</table>";
    document.getElementById("classement").innerHTML += classement;
}

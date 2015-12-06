function remplirPage(nbEquipe,nbJoueurs) {
    var listeEquipes = "";
    for(var i=0; i<nbEquipe; i++) {
        listeEquipes += "\n\t\t<div class=\"equipe\">";
        listeEquipes += "\n\t\t\t<input placeholder=\"nomEquipe n°" + i +"\" onChange=\"serialize(this);\" type=\"text\" id=\"nomEquipe" + i + "\" value=\"" + unserialize("nomEquipe" + i) + "\">";
        listeEquipes += "\n\t\t\t<div class=\"joueur\">";
        for(var j=0; j<nbJoueurs; j++) {
            listeEquipes += "\n\t\t\t\t<input placeholder=\"Joueur n°" + j + "\" onChange=\"serialize(this);\" type=\"text\" id=\"E" + i + "J" + j + "\">";
        }
        listeEquipes += "\n\t\t\t</div>";
        listeEquipes += "\n\t\t</div>";
    }
    document.getElementById('listeEquipes').innerHTML += listeEquipes;
}

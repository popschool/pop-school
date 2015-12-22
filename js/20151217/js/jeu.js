var mots = ["chat","dromadaire","poulpe"];
var motADeviner;

function generatePage() {
    // On tire au hasard un mot, ça devient le mot à deviner
    var i = random(0, mots.length);
    motADeviner = mots[i];
    // window.alert(motADeviner);
    //window.alert(motADeviner.length);
    divLettres = document.getElementById("lettres");
    for (var i=0; i < motADeviner.length; i++) {
        divLettres.innerHTML += "<input type='text'><button>OK</button><br>";
    }
}

function random(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
}

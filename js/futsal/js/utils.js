function serialize(item) {
    localStorage.setItem(item.id, item.value);
}
function unserialize(item) {
    var retour = localStorage.getItem(item);
    if(retour)
        return retour;
    else
        return "";
}

function compare(a,b) {
    return b[1] - a[1];
}

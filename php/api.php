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

if(isset($_GET["id"])) {
    $req = "DELETE FROM words WHERE id = \"" . $_GET["id"] . "\"";
    mysql_query($req, $cnx) or die("Oups");
    echo "<div>mot " . $_GET["id"] . " supprimé</div>";
}
if(isset($_POST["word"])) {
    $req = "INSERT INTO words (word) VALUES (\"" . $_POST["word"] . "\")";
    mysql_query($req, $cnx) or die ("Oups 2");
    echo "<div>mot " . $_POST["word"] . " créé</div>";
}
$req = "SELECT * FROM words";
$result = mysql_query($req, $cnx);

while($item = mysql_fetch_array($result)) {
    $json[] = $item;
}
echo json_encode($json);
?>

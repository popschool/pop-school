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
?>
<ul>
<?php
while($item = mysql_fetch_array($result)) {
    echo "<li>". $item["id"] . " - " . utf8_encode($item["word"]);
    echo "<a href=\"index.php?id=" . $item["id"] . "\">supprimer ce mot</a>";
    echo "</li>";
}
?>
</ul>

<form method="post" action="<?=$_SERVER["PHP_SELF"]?>">
    <h2>Ajouter un mot</h2>
    <input type="text" name="word">
    <input type="submit" value="ajouter">
</form>








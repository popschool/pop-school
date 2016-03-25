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

class Mot {
    public $id;
    public $mot;

    function __construct($mot,$id="") {
        $this->id = $id;
        $this->mot = $mot;
    }

    function create() { 
        $req = "INSERT INTO words (word) VALUES (\"" . $this->mot . "\")";
        mysql_query($req) or die ("Oups 2");
        return "mot " . $this->mot . "créé";
    } 
    function read() {
        $ret = "<li>". $this->id . " - " . utf8_encode($this->mot) . " ";
        $ret .= "<a href=\"index.php?id=" . $this->id . "\">supprimer ce mot</a>";
        $ret .= "</li>";
        return $ret;
    }
    function update($newMot) { // update code
    }
    function delete() { 
        $req = "DELETE FROM words WHERE id = \"" . $this->id . "\"";
        mysql_query($req) or die("Oups");
        return "<div>mot " . $this->id . " supprimé</div>";
    }
}

if(isset($_POST["word"])) {
    $word = new Mot($_POST["word"]);
    echo $word->create();
}
if(isset($_GET["id"])) {
    $word = new Mot("",$_GET["id"]);
    echo $word->delete();
}
$req = "SELECT * FROM words";
$result = mysql_query($req, $cnx);
?>
<ul>
<?php
while($item = mysql_fetch_array($result)) {
    $word = new Mot($item["word"],$item["id"]);
    echo $word->read();
}
?>
</ul>

<form method="post" action="<?=$_SERVER["PHP_SELF"]?>">
    <h2>Ajouter un mot</h2>
    <input type="text" name="word">
    <input type="submit" value="ajouter">
</form>

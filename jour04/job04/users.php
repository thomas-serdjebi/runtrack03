<?php

$conn = new PDO("mysql:host=localhost;dbname=utilisateurs", 'root', '');

$query = "SELECT * FROM utilisateurs ";
$ex = $conn->prepare($query);
$ex->setFetchMode(\PDO::FETCH_ASSOC);
$ex->execute();

$table = $ex->fetchAll();

exit(json_encode($table));

?>
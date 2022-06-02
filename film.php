<?php 
require './db.php';
$data = [];
$load = isset($_GET['page']) ? $_GET['page'] : 0;
$query = "SELECT * FROM film LIMIT 0,10";
$sql = $db->query($query);


while($row = $sql->fetch_assoc()){
    array_push($data, $row);
}

header("Content-Type: application/json");
echo json_encode($data);
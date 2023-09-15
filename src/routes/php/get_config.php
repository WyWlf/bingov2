<?php
require 'connection.php';
$content = json_decode(file_get_contents('php://input'), true);

if (!empty($content['game'])){
    $json = file_get_contents('./game_configs/'.$content['game'].'.json');
    $obj = json_encode($json);
    echo $obj;
}

?>
<?php
require 'connection.php';
$content = json_decode(file_get_contents('php://input'), true);

if(!empty($content)){
    $dir = 'game_configs/'.$content['path'].'';
    file_put_contents($dir, file_get_contents('php://input'));
    echo 1;
} else {
    echo 0;
}

?>
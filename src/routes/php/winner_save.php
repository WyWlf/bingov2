<?php

require 'connection.php';

$content = json_decode(file_get_contents('php://input'), true);

if(!empty($content)){
        $sql = "UPDATE match_history SET winner = ? where game = ?";
        $sth = $conn->prepare($sql);
        $sth -> bindParam(1, $content['winner'], PDO::PARAM_STR);
        $sth -> bindParam(2, $content['game'], PDO::PARAM_INT);
        $sth -> execute();
        echo 1;
} else {
    echo 0;
}

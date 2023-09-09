<?php

require 'connection.php';
$content = json_decode(file_get_contents('php://input'), true);

if(!empty($content)){
    $sql = 'SELECT * FROM match_history where username = ?';
    $sth = $conn->prepare($sql);
    $sth -> bindParam(1, $content['data'], PDO::PARAM_STR);
    $sth -> execute();
    $res = $sth->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($res);
} else {
    echo 0;
}
?>
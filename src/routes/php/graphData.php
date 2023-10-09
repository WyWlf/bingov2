<?php
require 'connection.php';
$content = json_decode(file_get_contents('php://input'), true);

if (!empty($content['game_id'])){
    $query = "SELECT * FROM match_history where game = ?";
    $sth = $conn->prepare($query);
    $sth -> bindParam(1, $content['game_id'], PDO::PARAM_INT);
    $sth -> execute();
    $response = $sth->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($response); 
}

?>
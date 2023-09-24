<?php

require 'connection.php';

$content = json_decode(file_get_contents('php://input'), true);

if(!empty($content)){
    if (empty($content['host'])){
        $sql = "INSERT INTO match_history (username, game, time_finished, highest_streak, correct_answers, wrong_answers, status, date, rush, flashlight, hardcore, level) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
        $sth = $conn->prepare($sql);
        $sth -> bindParam(1, $content['username'], PDO::PARAM_STR);
        $sth -> bindParam(2, $content['game'], PDO::PARAM_INT);
        $sth -> bindParam(3, $content['time'], PDO::PARAM_STR);
        $sth -> bindParam(4, $content['streak'], PDO::PARAM_INT);
        $sth -> bindParam(5, $content['correct'], PDO::PARAM_INT);
        $sth -> bindParam(6, $content['wrong'], PDO::PARAM_INT);
        $sth -> bindParam(7, $content['status'], PDO::PARAM_INT);
        $sth -> bindParam(8, $content['date'], PDO::PARAM_STR);
        $sth -> bindParam(9, $content['r'], PDO::PARAM_STR);
        $sth -> bindParam(10, $content['f'], PDO::PARAM_STR);
        $sth -> bindParam(11, $content['h'], PDO::PARAM_STR);
        $sth -> bindParam(12, $content['level'], PDO::PARAM_STR);
        $sth -> execute();
        echo 1;
    } else {
        $sql = "INSERT INTO match_history (username, game, time_finished, highest_streak, correct_answers, wrong_answers, status, mode, host, winner, date) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
        $sth = $conn->prepare($sql);
        $sth -> bindParam(1, $content['username'], PDO::PARAM_STR);
        $sth -> bindParam(2, $content['game'], PDO::PARAM_INT);
        $sth -> bindParam(3, $content['time'], PDO::PARAM_STR);
        $sth -> bindParam(4, $content['streak'], PDO::PARAM_INT);
        $sth -> bindParam(5, $content['correct'], PDO::PARAM_INT);
        $sth -> bindParam(6, $content['wrong'], PDO::PARAM_INT);
        $sth -> bindParam(7, $content['status'], PDO::PARAM_INT);
        $sth -> bindParam(8, $content['mode'], PDO::PARAM_INT);
        $sth -> bindParam(9, $content['host'], PDO::PARAM_STR);
        $sth -> bindParam(10, $content['winner'], PDO::PARAM_STR);
        $sth -> bindParam(11, $content['date'], PDO::PARAM_STR);
        $sth -> execute();
        echo 1;
    }

} else {
    echo 0;
}
?>
<?php

require 'connection.php';

$content = json_decode(file_get_contents('php://input'), true);

if (!empty($content['username']) && !empty($content['password']) && !empty($content['selection'])){
    $newUser = "INSERT INTO user_accounts (username, password, type) SELECT * FROM ( SELECT ? AS username, ? AS password, ? AS type) AS tmp 
    WHERE NOT EXISTS (
        SELECT * FROM user_accounts where username = ?
    ) LIMIT 1";

    $sth = $conn->prepare($newUser);
    $sth -> bindParam(1, $content['username'], PDO::PARAM_STR);
    $sth -> bindParam(2, $content['password'], PDO::PARAM_STR);
    $sth -> bindParam(3, $content['selection'], PDO::PARAM_STR);
    $sth -> bindParam(4, $content['username'], PDO::PARAM_STR);
    $sth -> execute();
    echo 'Registered successfully. You can now login';
} else {
    echo 'Please fill all required fields.';
}

?>
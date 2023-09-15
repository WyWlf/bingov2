<?php
require 'connection.php';

$content = json_decode(file_get_contents('php://input'), true);
if(!empty($content['username'])){
    $hashed_pw = "SELECT username from user_accounts where username = ?";
    $sth = $conn->prepare($hashed_pw);
    $sth -> bindParam(1, $content['username'], PDO::PARAM_STR);
    $sth -> execute();
    $result = $sth->rowCount();

    if ($result == 0){
        echo 0;
    } else {
        echo 'This username is already registered';
    }
    
} else {
    echo "Please fill all required fields.";
}
?>
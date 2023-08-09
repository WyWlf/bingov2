<?php
require 'connection.php';

$content = json_decode(file_get_contents('php://input'), true);
if(!empty($content['username']) && !empty($content['password'])){
    $hashed_pw = "SELECT password,type from user_accounts where username = ?";
    $sth = $conn->prepare($hashed_pw);
    $sth -> bindParam(1, $content['username'], PDO::PARAM_STR);
    $sth -> execute();
    $count = $sth->rowCount();
    $result = $sth->fetch(PDO::FETCH_ASSOC);

    if ($count > 0){
        $decrpyt_pass = password_verify($content['password'], $result['password']);
        if ($decrpyt_pass == 1){
            echo 1;
            echo $content['username'];
        } else {
            echo "Wrong Password";
        }
    } else {
        echo "Account not found";
    }
    
} else {
    echo "Check your inputs and try again";
}
?>
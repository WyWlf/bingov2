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
       // $decrpyt_pass = password_verify($content['password'], $result['password']);
        if ($result['password'] == $content['password']){
            echo json_encode(
                $json = (object) array(
                'success' => 1,
                'type' => $result['type']
            ));
        } else {
            echo json_encode(
                $json = (object) array(
                'success' => 0,
                'message' => 'Wrong password'
            ));
        }
    } else {
        echo json_encode(
            $json = (object) array(
            'success' => 0,
            'message' => 'Account not found'
        ));
    }
    
} else {
    echo json_encode(
        $json = (object) array(
        'success' => 0,
        'message' => 'Please fill all required fields'
    ));
}
?>
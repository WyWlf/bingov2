<?php

require 'connection.php';
$content = json_decode(file_get_contents('php://input'), true);

function getExpression($first, $second, $operator){
    switch ($operator) {
        case 'addition':
            return ((int)$first) + ((int)$second);
            break;
        case 'subtraction':
            return ((int)$first) - ((int)$second);
            break;
        case 'multiplication':
            return ((int)$first) * ((int)$second);
            break;
        case 'division':
            return ((int)$first) / ((int)$second);
            break;
    }
}
if(!empty($content)){
    $newForm = array();
    foreach($content['main'] as $index => $item){
        $answer = getExpression($item['firstVal'.$index], $item['secondVal'.$index], $item['operation'.$index]);
        $row = [
            'firstVal' => $item['firstVal'.$index],
            'secondVal' => $item['secondVal'.$index],
            'operator' => $item['operation'.$index],
            'answer' => round($answer, 2),
        ];
        array_push($newForm, $row);
    }
    $file = fopen('./game_configs/'.$content['game'].'.json', 'w');
    fwrite($file, json_encode($newForm));
    fclose($file);
    echo 1;
}
?>
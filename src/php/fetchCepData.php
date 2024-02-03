<?php

header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');

if (isset($_GET['cep'])) {
    $cep = $_GET['cep'];
    $url = "https://viacep.com.br/ws/$cep/json/";

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    $response = curl_exec($ch);
    curl_close($ch);

    if (!$response) {
        echo json_encode(["error" => "Não foi possível obter os dados do CEP."]);
    } else {
        echo $response;
    }
} else {
    echo json_encode(["error" => "CEP não fornecido."]);
}

?>

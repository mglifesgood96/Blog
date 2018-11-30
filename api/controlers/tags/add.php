<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../objects/tags.php';

$database = new Database();
$db = $database->getConnection();

$tags = new Tags($db);
 
$name = $_POST['name'];
 
if (isset($name)) {

    $tags->name = $name;

    if ($tags->add()) {
        http_response_code(201);
        echo json_encode(array("status" => "200", "message" => "Tag dodany!"));
    }
    else {
        http_response_code(503);
        echo json_encode(array("status" => "503", "message" => "Nie mozna utworzyć!"));
    }
}
 
else {
    http_response_code(400); 
    echo json_encode(array("status" => "400", "message" => "Błąd danych!"));
}
?>
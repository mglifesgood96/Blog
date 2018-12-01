<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../objects/categories.php';

$database = new Database();
$db = $database->getConnection();

$categories = new Categories($db);

$name = $_POST['name'];
$id = $_POST['id'];

$categories->id = $id;
$categories->name = $name;

if ($categories->update()) {
    http_response_code(200);
    echo json_encode(array("status" => "200", "message" => "Gotowe!"));
} else {
    http_response_code(503);
    echo json_encode(array("status" => "503", "message" => "Nie mozna zaktualizować!"));
}
?>
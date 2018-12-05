<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../../config/database.php';
include_once '../../objects/posts.php';

$database = new Database();
$db = $database->getConnection();

$posts = new Post($db);

$posts->id = $_POST['id'];

if ($posts->delete()) {
    http_response_code(200);
    echo json_encode(array("status" => "200", "message" => "Usunięto!"));
} else {
    http_response_code(503);
    echo json_encode(array("status" => "503", "message" => "Błąd!"));
}
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
include_once '../../config/database.php';
include_once '../../objects/posts.php';
include_once '../../objects/globals.php';

$database = new Database();
$db = $database->getConnection();

$post = new Post($db);
 
$title = $_POST['title'];
$description = $_POST['description'];
$id_category = $_POST['id_category'];
$id_tag = $_POST['id_tag'];
$status = $_POST['status'];
$page_name = page_name_genertator($title);

if (isset($status)) {

    $post->title = $title;
    $post->description = $description;
    $post->id_category = $id_category;
    $post->id_tag = $id_tag;
    $post->status = $status;
    $post->page_name = $page_name;
    
    if ($post->create()) {
        http_response_code(201);
 
        echo json_encode(array("status" => "200", "insertId" => $post->id, "message" => "Dodano!"));
    }
    else {
        http_response_code(503);
 
        echo json_encode(array("status" => "503", "message" => "Nie mozna dodać!"));
    }
}
else {
    http_response_code(400);

    echo json_encode(array("status" => "400", "message" => "Błąd danych!"));
}
?>
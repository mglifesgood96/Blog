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
 
$id = $_POST['id'];
$title = $_POST['title'];
$description = $_POST['description'];
$id_category = $_POST['id_category'];
$id_tag = $_POST['id_tag'];
$status = $_POST['status'];
$img_baner = "images/".$_POST['img_baner'];

$page_name = page_name_genertator($title);

$post->id = $id;
$post->title = $title;
$post->description = $description;
$post->id_category = $id_category;
$post->id_tag = $id_tag;
$post->status = $status;
$post->page_name = $page_name;
$post->img_baner = $img_baner;
 
if ($post->update()) {
    http_response_code(200);
 
    echo json_encode(array("status"=>"200","message" => "Zapisano"));
}
else {
    http_response_code(503);
 
    echo json_encode(array("status" => "503","message" => "Unable to update post."));
}
?>
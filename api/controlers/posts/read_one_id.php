<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
 
include_once '../../config/database.php';
include_once '../../objects/posts.php';
 
$database = new Database();
$db = $database->getConnection();
 
$post = new Post($db);
 
$post->id = isset($_GET['id']) ? $_GET['id'] : die();
 
$post->readOneById();

if ($post->title != null) {
    $post_arr = array(
        "id" => $post->id,
        "title" => $post->title,
        "description" => $post->description,
        "page_name" => $post->page_name,
        "id_category" => $post->id_category,
        "id_tag" => $post->id_tag,
        "creation_date" => $post->$creation_date,
        "modification_date" => $post->$modification_date,
        "published_from" => $$post->published_from
    );
 
    http_response_code(200);
 
    echo json_encode($post_arr);
} else {
    http_response_code(404);

    echo json_encode(array("message" => "Post does not exist."));
}
?>
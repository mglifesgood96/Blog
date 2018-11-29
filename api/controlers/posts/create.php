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

$post = new Post($db);
 
// TODO: pobranie daynych z ajax  $data

if (!empty($data->title) &&
    !empty($data->page_name) &&
    !empty($data->description)
) {
    $post->title = $data->title;
    $post->page_name = $data->page_name;
    $post->description = $data->description;
    $post->id_category = $data->id_category;
    $post->id_tag = $data->id_tag;
    $post->status = $data->status;
    
    if ($post->create()) {
        http_response_code(201);
 
        echo json_encode(array("message" => "Post was created."));
    }
    else {
        http_response_code(503);
 
        echo json_encode(array("message" => "Unable to create post."));
    }
}
else {
    http_response_code(400);

    echo json_encode(array("message" => "Unable to create post. Data is incomplete."));
}
?>
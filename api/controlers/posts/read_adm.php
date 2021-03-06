<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/posts.php';
 
$database = new Database();
$db = $database->getConnection();
 
$posts = new Post($db);

$stmt = $posts->readAdm();
$num = $stmt->rowCount();
 
if ($num > 0) {
 
    $posts_arr = array();
    $posts_arr["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            "id" => $id,
            "page_name" => $page_name,
            "title" => $title,
            "id_tag" => $id_tag,
            "category" => $category,
            "status" => $status,
            "creation_date" => $creation_date,
            "modification_date" => $modification_date
        );

        array_push($posts_arr["data"], $post_item);
    }
 
    http_response_code(200);
 
    echo json_encode($posts_arr);

} else {

    http_response_code(404);
 
    echo json_encode(
        array("message" => "No posts found.")
    );

}
?>
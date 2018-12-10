<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/posts.php';

$database = new Database();
$db = $database->getConnection();

$posts = new Post($db);

$stmt = $posts->readBlog();
$num = $stmt->rowCount();

if ($num > 0) {

    $posts_arr = array();
    $posts_arr["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            "page_name" => $page_name,
            "title" => $title,
            "category" => $category,
            "creation_date" => $creation_date,
            'img_baner' => $img_baner
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
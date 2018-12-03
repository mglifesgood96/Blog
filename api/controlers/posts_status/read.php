<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/posts_status.php';

$database = new Database();
$db = $database->getConnection();

$tags = new PostsStatus($db);

$stmt = $tags->read();
$num = $stmt->rowCount();

if ($num > 0) {

    $statuses = array();
    $statuses["status"] = "200";
    $statuses["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            "id" => $id,
            "name" => $name
        );

        array_push($statuses["data"], $post_item);
    }
    
    http_response_code(200);
    echo json_encode($statuses);
} else {
    echo json_encode(
        array("status" => "404", "message" => "No tags found.", "data" => "")
    );

}
?>
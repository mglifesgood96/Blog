<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/tags.php';

$database = new Database();
$db = $database->getConnection();

$tags = new Tags($db);

$tags->id = '8,9';
//$_POST['ids'];

$stmt = $tags->readByIds();
$num = $stmt->rowCount();

if ($num > 0) {

    $tags_arr = array();
    $tags_arr["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $post_item = array(
            "name" => $name
        );

        array_push($tags_arr["data"], $post_item);
    }

    http_response_code(200);
    echo json_encode($tags_arr);
} else {
    http_response_code(404);
    echo json_encode(
        array("message" => "No posts found.")
    );

}
?>
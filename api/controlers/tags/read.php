<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/tags.php';

$database = new Database();
$db = $database->getConnection();

$tags = new Tags($db);

$stmt = $tags->read();
$num = $stmt->rowCount();

if ($num > 0) {

    $tags_arr = array();
    $tags_arr["status"] = "200";
    $tags_arr["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            "id" => $id,
            "name" => $name,
            "creation_date" => $creation_date,
            "modification_date" => $modification_date
        );

        array_push($tags_arr["data"], $post_item);
    }

    http_response_code(200);

    echo json_encode($tags_arr);

} else {

    http_response_code(404);

    echo json_encode(
        array("status"=>"404","message" => "No tags found.")
    );

}
?>
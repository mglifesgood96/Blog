<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/categories.php';

$database = new Database();
$db = $database->getConnection();

$categories = new Categories($db);

$stmt = $categories->read_blog();
$num = $stmt->rowCount();

if ($num > 0) {

    $categories_arr = array();
    $categories_arr["status"] = "200";
    $categories_arr["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $post_item = array(
            "id" => $id,
            "name" => $name
        );

        array_push($categories_arr["data"], $post_item);
    }

    http_response_code(200);

    echo json_encode($categories_arr);

} else {
    //http_response_code(404);
    echo json_encode(
        array("status" => "404", "message" => "Brak danych", "data" => "")
    );

}
?>
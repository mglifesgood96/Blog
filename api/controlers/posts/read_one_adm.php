<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../../config/database.php';
include_once '../../objects/posts.php';

$database = new Database();
$db = $database->getConnection();

$posts = new Post($db);

$posts->id = $_POST['id'];

$stmt = $posts->readOneById();
$num = $stmt->rowCount();

if ($num > 0) {

    $posts_arr = array();
    $posts_arr["data"] = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $img_name = "";
        $img_type = "";
        $img_size = "";
        if($img_baner && $img_baner !== "" && file_exists('../../../' . $img_baner)){
            $img_name = substr($img_baner, strrpos($img_baner, '/') + 1);
            $img_type = get_image_mime_type('../../../' . $img_baner);
            $img_size = filesize('../../../' . $img_baner);
        }else{
            $img_baner = "";
        }
        $post_item = array(
            "id" => $id,
            "page_name" => $page_name,
            "img_baner" => $img_baner,
            "title" => $title,
            "description" => $description,
            "id_tag" => $id_tag,
            "id_category" => $id_category,
            "status" => $status,
            "creation_date" => $creation_date,
            "modification_date" => $modification_date,
            "img_detal" => array(
                "name" => $img_name,
                "type" => $img_type,
                "size" => $img_size
            )
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

function get_image_mime_type($image_path)
{
    $mimes = array(
        IMAGETYPE_GIF => "image/gif",
        IMAGETYPE_JPEG => "image/jpg",
        IMAGETYPE_PNG => "image/png",
        IMAGETYPE_SWF => "image/swf",
        IMAGETYPE_PSD => "image/psd",
        IMAGETYPE_BMP => "image/bmp",
        IMAGETYPE_TIFF_II => "image/tiff",
        IMAGETYPE_TIFF_MM => "image/tiff",
        IMAGETYPE_JPC => "image/jpc",
        IMAGETYPE_JP2 => "image/jp2",
        IMAGETYPE_JPX => "image/jpx",
        IMAGETYPE_JB2 => "image/jb2",
        IMAGETYPE_SWC => "image/swc",
        IMAGETYPE_IFF => "image/iff",
        IMAGETYPE_WBMP => "image/wbmp",
        IMAGETYPE_XBM => "image/xbm",
        IMAGETYPE_ICO => "image/ico"
    );

    if (($image_type = exif_imagetype($image_path))
        && (array_key_exists($image_type, $mimes))) {
        return $mimes[$image_type];
    } else {
        return false;
    }
}
?>
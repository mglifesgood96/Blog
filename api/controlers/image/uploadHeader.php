<?php
$temp = explode(".", $_FILES["file"]["name"]);
$newfilename = round(microtime(true)) . '.' . end($temp);
if(move_uploaded_file($_FILES["file"]["tmp_name"], "../../../images/header" . $newfilename)){
    echo json_encode(
        array("file" => "header".$newfilename)
    );
}
?>
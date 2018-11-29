
<?php
require_once "connect.php";
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

    $target_path = "ftp://serwer1418406:Net15051@serwer1418406.home.pl/public_html/adrian/player/tmp_video/";
    $tmp_name = $_FILES['fileToUpload']['tmp_name'];
    $size = $_FILES['fileToUpload']['size'];
    $name = $_FILES['fileToUpload']['name'];
    $num = $_POST['num'];
    $num_chunks = $_POST['num_chunks'];
    $new_name = $_POST['new_name'];
    $file_type = $_POST['file_type'];

    $target_file = $target_path . basename($name);

    $targetFileName = $new_name.'.'.$file_type;
  //  $targetFileName = str_replace(' ', '_', $targetFileName);

    $complete = $targetFileName;

    move_uploaded_file($tmp_name, $target_path.$complete."_".$num);

?>

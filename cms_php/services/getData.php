<?php
    include 'db.php';

	$execute = false;
	if(isset($_GET['cmd'])){
		$cmd = $_GET['cmd'];
		if($cmd==="getTags"){
		$sql = 'SELECT * FROM tags';
		$execute = true;
		}
		if($cmd==="getCategories"){
		$sql = 'SELECT * FROM categories';
		$execute = true;
		}
		if($cmd==="getArticles"){
		$sql = 'SELECT id,title,public,createDate FROM articles';
		$execute = true;
		}
		if($cmd==="getArticlesEdit"){
			$id = $_GET['id'];
			$sql = "SELECT * FROM articles WHERE id=$id";
			$execute = true;
		}
		if($cmd==="getSettings"){
		$sql = 'SELECT * FROM settings';
		$execute = true;
		}
		if($cmd==="getRights"){
		$sql = 'SELECT * FROM rights';
		$execute = true;
		}
		if($cmd==="getUsers"){
		$sql = 'SELECT * FROM users';
		$execute = true;
		}
	}

  if($execute) {
		$conn = @mysqli_connect($host, $user, $password, $db);
		if (!$conn) {
			die('{"status": "error", "msg": "' . mysqli_connect_error() . '"}');
		}
		else {
			$result = mysqli_query($conn, $sql);
			$items = array();
			if (mysqli_num_rows($result) > 0) {
				while($row = mysqli_fetch_assoc($result)) {
					array_push($items, $row);
				}
				echo '{"status": "success", "msg": "'.count ($items).' items found", "data": ' . json_encode($items) .'}';
			}
			else {
				echo '{"status": "error", "msg": "no items", "data":{}}';
			}
			$conn->close();
		}
	}
?>

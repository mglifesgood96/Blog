<?php
    require_once "db.php";
    $conn = new mysqli($host, $user, $password, $db);
    $execute = false;
    $successMsg = 'Success';
    if(isset($_GET['cmd'])) {
        $cmd = $_GET['cmd'];
        if($cmd == 'newTag'){
            $name = $_POST['name'];
            $sql = "INSERT INTO tags(name) VALUES ('$name')";
            $execute = true;
        }
        else if($cmd === 'editTag'){
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $name = $_POST['name'];
                $sql = "UPDATE tags SET name='$name' WHERE id=$id";
                $execute = true; 
            }
        }
        else if($cmd === 'removeTag'){
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $sql = "DELETE FROM tags WHERE id=$id";
                $execute = true; 
            }
        }
        else if($cmd === 'newCategory'){
            $name = $_POST['name'];
            $sql = "INSERT INTO categories(name) VALUES ('$name')";
            $execute = true;
        }
        else if($cmd === 'editCategory'){
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $name = $_POST['name'];
                $sql = "UPDATE categories SET name='$name' WHERE id=$id";
                $execute = true; 
            }
        }
        else if($cmd === 'removeCategory'){
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $sql = "DELETE FROM categories WHERE id=$id";
                $execute = true; 
            }
        }
        else if($cmd === 'editSetting'){
            $com = $_POST['com'];
            $tags = $_POST['tags'];
            $postPerPge = $_POST['num'];
            $sql = "UPDATE settings SET comments=$com,tags=$tags,postPerPge='$postPerPge'";
            $execute = true; 
        }
        else if($cmd === 'editArticle'){
            if(isset($_GET['id'])){
                $id = $_GET['id'];
                $title = $_POST['title'];
                $category = $_POST['category'];
                $tags = $_POST['tags'];
                $public = $_POST['public'];
                $content = $_POST['content'];
                $sql = "UPDATE articles SET id_category=$category,id_tags='$tags',title='$title',content='$content',public='$public' WHERE id=$id ";
                $execute = true; 
            }
        }
        else if($cmd === 'uploadImgArticle'){
            if ($_FILES['file']['name']) {
                if (!$_FILES['file']['error']) {
                $name = md5(rand(100, 200));
                $ext = explode('.', $_FILES['file']['name']);
                $filename = $name . '.' . $ext[1];
                $destination = '../blog/img/' . $filename;
                $location = $_FILES["file"]["tmp_name"];
                move_uploaded_file($location, $destination);
                echo 'localhost/cms_php/blog/img/' . $filename;
                }
                else
                {
                echo  $message = 'Ooops!  Your upload triggered the following error:  '.$_FILES['file']['error'];
                }
            }
        }
        else if($cmd === "deleteImgArticle"){
            $src = $_POST['src'];
            $file_name = '../'.$src;
            if(unlink($file_name))
            {
                echo 'File Delete Successfully';
            }
        }

        if($execute) {
            if ($conn->query($sql) === TRUE) {
                echo $successMsg;
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            $conn->close();
        }
    }
?>
<?php
    include 'db.php';
    $message = '';
    session_start();
    try{
        $connect = new PDO("mysql:host=$host;dbname=$db",$user,$password);
        $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $connect -> query ('SET NAMES utf8');
        if(isset($_POST['login'])){
            if(empty($_POST['email']) || empty($_POST['password'])){
                $message = 'Wszystkie pola są wymagane';
            }else{
                $query = "SELECT * FROM users WHERE email = :email AND password = :password";
                $statment = $connect->prepare($query);
                $statment->execute(
                    array(
                        'email' => $_POST["email"],
                        'password' => $_POST["password"]
                    )
                );
                $count = $statment->rowCount();
                while($row = $statment->fetch(PDO::FETCH_ASSOC) ){ 
                    $uid = $row['id'];
                    $email = $row['email'];
                    $right = $row['rights_id'];
                    $sid = session_id();
                    $timestamp = time();
                } 
                if($count>0){
                    $message = 'Zalogowano';
                    $sql = "INSERT INTO logs (page,id_user,id_name,id_result,message) VALUES ('login','$uid','1','1','$message')";
                    $statment = $connect->prepare($sql);
                    $statment->execute();

                    $_SESSION['uid'] = $uid;
                    $_SESSION['email'] =  $email;
                    $_SESSION['sid'] = $sid;
                    $_SESSION['right'] = $right;
                    $_SESSION['timestamp'] = $timestamp;
                    $_SESSION['logged_in'] = true;
                    header('location:index');
                }else{
                    $message = 'Zły login lub hasło';
                    $sql = "INSERT INTO logs (page,id_name,id_result,message) VALUES ('login','1','2','$message')";
                    $statment = $connect->prepare($sql);
                    $statment->execute();
                    header('location:index');
                }
            }
        }
    }catch(PDOExceptio $error){
        $message = $error->getMessage();
        $sql = "INSERT INTO logs (page,id_name,id_result,message) VALUES ('login','1','2','$message')";
        $statment = $connect->prepare($sql);
        $statment->execute();
    }
?>

<?php
  include 'db.php';
  session_start() ;
  $_SESSION['sid'] = '0';
  $uid = $_SESSION['uid'];

  $connect = new PDO("mysql:host=$host;dbname=$db",$user,$password);
  $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $connect -> query ('SET NAMES utf8');
  $message = 'Wylogowano';
  $sql = "INSERT INTO logs (page,id_user,id_name,id_result,message) VALUES ('logout','$uid','2','1','$message')";
  $statment = $connect->prepare($sql);
  $statment->execute();

  session_destroy();
  header('Location: ../login');
?>

<?php
    session_start();
    if ((!isset($_SESSION['sid'])) || ($_SESSION['sid'] == '0')) {
        header('Location: login');
        exit;
    }else{

    }
?>

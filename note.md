# make users page dynamic

-> file : users.php
<?php
    session_start();
    if(!isset($_SESSION['unique_id'])){
        header("location: login.php");
    }
?>

check in 1:39:02
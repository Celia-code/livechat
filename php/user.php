<?php
    session_start();
    include_once "config.php";
    $sql = mysqli_query($conn, "SELECT * FROM users");
    if(mysqli_num_rows($sql) == 0){

    }elseif(mysqli_num_rows($sql) > 0){
        
    }
?>
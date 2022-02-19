<?php
    //connected with MySql
    $conn = mysqli_connect("localhost", "root", "Aa0979025607", "chat");
    if(!$conn){
        echo "Database connected" . mysqli_connect_error();
    }
?>0
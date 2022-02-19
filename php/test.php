<?php
    include_once "config.php";
    $fname = mysqli_real_escape_string($conn, $_POST['fname']);  //check on config.php
    $lname = mysqli_real_escape_string($conn, $_POST['lname']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    echo $fname;


?>
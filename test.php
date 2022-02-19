<?php
session_start();
if (!isset($_SESSION['unique_id'])) {
    header("location: login.php");
}
?>
<?php
    // session_start();
    include_once "config.php";
    $sql = mysqli_query($conn, "SELECT * FROM users");
    // if(mysqli_num_rows($sql) == 0){

    // }elseif(mysqli_num_rows($sql) > 0){
        
    // }
?>
<?php include_once"header.php"?>
<body>
    <div class="wrapper">
        <section class="users">
            <header>
          
    </div>

    <!-- js -->
    <script src="javascript/users.js"></script>
</body>

</html>
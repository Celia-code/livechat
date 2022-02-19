<?php
session_start();
if (!isset($_SESSION['unique_id'])) {
    header("location: login.php");
}
?>
<?php
include_once "php/config.php";
$sql = mysqli_query($conn, "SELECT * FROM users WHERE unique_id = {$_SESSION['unique_id']}");
if (mysqli_num_rows($sql) > 0) {
    $rows = mysqli_fetch_assoc($sql);
}
?>

<?php include_once "header.php"; ?>

<body>
    <div class="wrapper">
        <section class="users">
            <header>

                <div class="content">
                    <img src="php/images/<?php echo $rows['img'] ?>" alt="">
                    <div class="details">
                        <span><?php echo $rows['fname'] . " " . $rows['lname'] ?></span>
                        <p><?php echo $rows['status'] ?></p>
                    </div>
                </div>
                <a href="#" class="logout">Logout</a>
            </header>
            <div class="search">
                <span class="text">Select an user to Start chat</span>
                <input type="text" placeholder="Enter name to search...">
                <button><i class="fas fa-search"></i></button>
            </div>
            <div class="users-list">
                
            </div>
        </section>
    </div>

    <!-- js -->
    <script src="javascript/users.js"></script>
</body>

</html>
<?php include_once"header.php";?>
<body>
    <div class="wrapper">
        <section class="form login">
            <header>Realtime Chat App</header>

            <form action="#" enctype="multipart/form-data">
                <div class="error-txt">This is an error message!</div>
                <div class="field input">
                    <lable>Email Address</lable>
                    <input type="text" placeholder="Enter your email" name="email">
                </div>
                <div class="field input">
                    <lable>Password</lable>
                    <input type="password" placeholder="Enter new password" name="password">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to chat">
                </div>
            </form>
            <div class="link">Not yet signed up ? <a href="#">Sign now</a></div>
        </section>
    </div>

    <!-- js -->
    <script src="javascript/pass-show-hide.js"></script>
    <script src="javascript/login.js"></script>
</body>
</html>
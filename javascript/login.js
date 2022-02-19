const form = document.querySelector('.login form')
const continueBtn = form.querySelector('.button input')
const errorText = form.querySelector('.error-txt')

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting

}

continueBtn.onclick = () => {
    // Ajax Start
    let xhr = new XMLHttpRequest(); // creating XML Object
    xhr.open("POST", "php/login.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response
                if (data == "0success") {
                    location.href = "users.php";
                } else {
                    errorText.style.display = "block";
                    errorText.textContent = data;
                }
            }
        }
    }

    //we have to send the form data through ajax to php 
    let formData = new FormData(form); //creating new formData Object
    xhr.send(formData); //sending the form data to signup.php
}
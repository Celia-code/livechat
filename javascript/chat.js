const form = document.querySelector('.typing-area');
const sendBtn = form.querySelector('button');
const inputField = form.querySelector('input-field');
const chatBox = document.querySelector('.chat-box');

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submitting

}

sendBtn.onclick = () => {
    // Ajax Start
    let xhr = new XMLHttpRequest(); // creating XML Object
    xhr.open("POST", "php/insert-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                inputField.value = "";

            }
        }
    }

    //we have to send the form data through ajax to php 
    let formData = new FormData(form); //creating new formData Object
    xhr.send(formData); //sending the form data to signup.php
}

setInterval(() => {
    // Ajax Start
    let xhr = new XMLHttpRequest(); // creating XML Object
    xhr.open("POST", "php/get-chat.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                chatBox.innerHTML = data;
            }
        }
    }
    //we have to send the form data through ajax to php 
    let formData = new FormData(form); //creating new formData Object
    xhr.send(formData); //sending the form data to signup.php
}, 500);
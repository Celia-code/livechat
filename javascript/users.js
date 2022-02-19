const searchBar = document.querySelector('.users .search input');
const searchBtn = document.querySelector('.users .search button');

searchBtn.onclick = () => {
    searchBar.classList.toggle('active');
    searchBar.focus();
    searchBtn.classList.toggle('active');
}

setInterval(()=>{
    // Ajax Start
    let xhr = new XMLHttpRequest(); // creating XML Object
    xhr.open("GET", "php/users.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response
                console.log(data);
            }
        }
    }
    xhr.send();
}, 500);
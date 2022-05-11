let menu = document.querySelector("#menu-btn");
let navar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navar.classList.remove('active');
}
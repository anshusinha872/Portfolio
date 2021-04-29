const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbar');
const navClose = document.getElementById('nav-close');
navBtn.addEventListener('click',()=>{
    navBar.classList.add("shownav");
});
navClose.addEventListener('click', () => {
    navBar.classList.remove("shownav");
});
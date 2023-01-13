var my_navbar = document.querySelector('.my-navbar');
var btn_mobile = document.querySelector('.btn-mobile');
var slide_mobile = document.querySelector('.slide-mobile');


btn_mobile.addEventListener('click',()=>{
    my_navbar.classList.toggle('show'); 
    slide_mobile.classList.toggle('show')
})
btn_mobile.addEventListener('click',()=>{
    my_navbar.classList.remove('show'); 
    slide_mobile.classList.remove('show')
})



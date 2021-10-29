burger = document.querySelector('.burger');
navig = document.querySelector('.navig');
navul = document.querySelector('.navul');
// let logo = document.getElementsByClassName("logo");
// rightNav = document.querySelector('.rightNav');
 


burger.addEventListener('click', ()=>{
    // rightNav.classList.toggle('v-class-resp');
    navul.classList.toggle('v-class-resp');
    navig.classList.toggle('h-nav-resp');
    // logo.style.display == "block" ? logo.style.display = "none" : 
    // logo.style.display = "block"; 
});

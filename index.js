//Navigation Burgur
burger = document.querySelector('.burger');
navig = document.querySelector('.navig');
navul = document.querySelector('.navul');
 
burger.addEventListener('click', ()=>{
    navul.classList.toggle('v-class-resp');
    navig.classList.toggle('h-nav-resp');
});

//Changing nav bar colour when it reaches about section
var nav = document.querySelector('header');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 480) { 
        nav.style.backgroundColor = 'rgba(56, 56, 56, 0.5)';
        nav.style.transitionDuration = '0.5s';
    } else {
        nav.style.backgroundColor = 'rgba(91, 91, 91, 0.95)';
        nav.style.transitionDuration = '0.5s';
    }
});
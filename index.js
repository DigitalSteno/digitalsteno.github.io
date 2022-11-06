//Navigation Burgur
burger = document.querySelector('.burger');
navig = document.querySelector('.navig');
navul = document.querySelector('.navul');
 
burger.addEventListener('click', ()=>{
    navul.classList.toggle('v-class-resp');
    navig.classList.toggle('h-nav-resp');
});

//Changing nav bar colour when it reaches about section
var nav = document.querySelector('.header');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 480) { 
        nav.style.backgroundColor = 'rgba(56, 56, 56, 0.253)';
        nav.style.transitionDuration = '0.5s';
    } else {
        nav.style.backgroundColor = 'rgba(91, 91, 91, 0.75)';
        nav.style.transitionDuration = '0.5s';
    }
});

//Return to top
let rToTop = document.getElementById("rToTop");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    {
        rToTop.style.display = "block";
    }
    else
    {
        rToTop.style.display = "none";
    }
}

rToTop.addEventListener("click", backToTop);
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Cookies consent
const cookieBox = document.querySelector(".cookie-cont");
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.addEventListener("click", cookieFunc);
function cookieFunc(){
    document.cookie = "cookies-analytics=true; max-age="+60*60*24*30;
    document.cookie = "cookies-functional=true; max-age="+60*60*24*30;
    document.cookie = "cookies-marketing=true; max-age="+60*60*24*30;
    document.cookie = "cookies-preferences=true; max-age="+60*60*24*30;
    if(document.cookie){
        cookieBox.classList.add("hide");
    }
    else{
        alert("Cookie Can't Be Set!");
    }
}
let checkCookie1 = document.cookie.indexOf("cookies-analytics=true");
let checkCookie2 = document.cookie.indexOf("cookies-functional=true");
let checkCookie3 = document.cookie.indexOf("cookies-marketing=true");
let checkCookie4 = document.cookie.indexOf("cookies-preferences=true");
checkCookie1 != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");
checkCookie2 != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");
checkCookie3 != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");
checkCookie4 != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");

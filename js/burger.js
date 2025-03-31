const burger = document.querySelector('.burger-menu');
const headerItems = document.querySelector('.header__adaptiv-none');
let isActive = false;

burger.addEventListener('click', function() {
    if (!isActive) {
        gsap.to(".bar1", {duration: 0.1, top: "calc(var(--index)*0.35)"});
        gsap.to(".bar2", {duration: 0.1, bottom: "calc(var(--index)*0.35)"});
        gsap.to(".bar1", {delay:.2,duration: 0.1,rotate: 45});
        gsap.to(".bar2", {delay:.2,duration: 0.1,rotate: -45});
        gsap.to(".black__Header-adaptiv", {duration: 0.2,opacity:1,zIndex:10000});
    } else {
        gsap.to(".bar1", {duration: 0.1,rotate: 0});
        gsap.to(".bar2", {duration: 0.1,rotate: 0});
        gsap.to(".bar1", {delay:.2,duration: 0.1,top: 0});
        gsap.to(".bar2", {delay:.2,duration: 0.1,bottom: 0});
        gsap.to(".black__Header-adaptiv", {duration: 0.2,opacity:0,zIndex:-99});
    }
    isActive = !isActive;
    
});
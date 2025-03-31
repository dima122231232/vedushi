gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function setFullHeight() {
    const fullHeightElements = document.querySelectorAll('.full-height');
    fullHeightElements.forEach(el => {
        el.style.height = `${window.innerHeight}px`;
    });
}
if(ScrollTrigger.isTouch !==1){
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth:1.5,
        effects:true,
    
        
    })
}


let vh = window.innerHeight / 100;let vw = window.innerWidth / 100;
var indexJs = vh+vw;var indexJs = vh+vw;
gsap.to(".header-h2-1,.header__osnova-email ,.header__osnova-number,.header-text-1", {duration: 1,top:0,delay:.3});
gsap.to(".header-h2-2,.header-text-2", {duration: 1,top:0,delay:.4});
gsap.to(".header__soz", {opacity: 1,delay:1,duration: 1});

// NUMBER------------------------------------------------------------------
document.querySelector('.effect-up').addEventListener('mouseenter', () => {
    for (let i = 0; i < spans.length; i++) {
        setTimeout(function() {
            gsap.to(spans[i], {duration: .2,delay:.05,rotationX: 180});
            gsap.to(spans[i], {duration: .2,delay:.05,rotationX: 180,top:-indexJs*.7});
            gsap.to(spans2[i], {duration: .2,delay:.1,rotationX: 0});
            gsap.to(spans2[i], {duration: .2,delay:.05,top:-indexJs*.55});
            gsap.to(".header__osnova-number-fake", {opacity:1,duration:.1});
        }, i * 30);
    }
});
document.querySelector('.effect-up').addEventListener('mouseleave', () => {
    for (let i = 0; i < spans.length; i++) {
        setTimeout(function() {
            gsap.to(spans[i], {duration: .2,delay:.05,rotationX: 0,z:0});
            gsap.to(spans[i], {duration: .2,delay:.05,rotationX: 0,top:0});
            gsap.to(spans2[i], {duration: .2,rotationX: -120});
            gsap.to(spans2[i], {duration: .2,delay:.05,top:0});
        }, i * 30);
    }

});
const div = document.querySelector('.header__osnova-number');
div.innerHTML = div.innerText.split('').map(char => `<span>${char}</span>`).join('');
const spans = div.querySelectorAll('span');
const div2 = document.querySelector('.header__osnova-number-fake');
div2.innerHTML = div2.innerText.split('').map(char2 => `<span>${char2}</span>`).join('');
const spans2 = div2.querySelectorAll('span');
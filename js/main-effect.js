gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let vhh = window.innerHeight / 100;let vww = window.innerWidth / 100;
var indexJs = vhh+vww;
//CARTS---------------------------
const resetAnimations = () => {
    gsap.to(".img5", {duration: .3, marginTop: "40vh", marginLeft: "10vw", rotate: "30deg", scale: 1});
    gsap.to(".img4", {duration: .3, marginTop: "30vh", marginLeft: "5vw", rotate: "15deg", scale: 1});
    gsap.to(".img3", {duration: .3, marginTop: "22vh", scale: 1});
    gsap.to(".img2", {duration: .3, marginTop: "22.5vh", marginLeft: "-5vw", rotate: "-5deg", scale: 1});
    gsap.to(".img1", {duration: .3, marginTop: "25vh", marginLeft: "-10vw", rotate: "-15deg", scale: 1});
};

const checkHover = () => {
    const hovered = document.querySelectorAll('.img1:hover, .img2:hover, .img3:hover, .img4:hover, .img5:hover');
    if (hovered.length === 0) {
        resetAnimations();
    }
};

document.querySelector('.img3').addEventListener('mouseenter', () => {
    gsap.to(".img5", {duration: .3, marginTop: "35vh", marginLeft: "20vw", rotate: "10deg",scale: 1});
    gsap.to(".img4", {duration: .3, marginTop: "22vh", marginLeft: "11vw", rotate: "20deg",scale: 1});
    gsap.to(".img3", {duration: .3, marginTop: "10vh", scale: 1.15});
    gsap.to(".img2", {duration: .3, marginTop: "12vh", marginLeft: "-8vw", rotate: "-15deg",scale: 1});
    gsap.to(".img1", {duration: .3, marginTop: "20vh", marginLeft: "-18vw", rotate: "-15deg",scale: 1});
});
document.querySelector('.img3').addEventListener('mouseleave', () => {
    setTimeout(checkHover, 500);
});

document.querySelector('.img2').addEventListener('mouseenter', () => {
    gsap.to(".img5", {duration: .3, marginTop: "35vh", marginLeft: "20vw", rotate: "10deg",scale: 1});
    gsap.to(".img4", {duration: .3, marginTop: "22vh", marginLeft: "11vw", rotate: "20deg",scale: 1});
    gsap.to(".img3", {duration: .3, marginTop: "12vh",scale: 1});
    gsap.to(".img2", {duration: .3, marginTop: "8vh", marginLeft: "-9vw", rotate: "-10deg", scale: 1.15});
    gsap.to(".img1", {duration: .3, marginTop: "20vh", marginLeft: "-18vw", rotate: "-15deg",scale: 1});
});
document.querySelector('.img2').addEventListener('mouseleave', () => {
    setTimeout(checkHover, 500);
});

document.querySelector('.img1').addEventListener('mouseenter', () => {
    gsap.to(".img5", {duration: .3, marginTop: "35vh", marginLeft: "20vw", rotate: "10deg",scale: 1});
    gsap.to(".img4", {duration: .3, marginTop: "22vh", marginLeft: "11vw", rotate: "20deg",scale: 1});
    gsap.to(".img3", {duration: .3, marginTop: "12vh",scale: 1});
    gsap.to(".img2", {duration: .3, marginTop: "12vh", marginLeft: "-8vw", rotate: "-15deg",scale: 1});
    gsap.to(".img1", {duration: .3, marginTop: "10vh", marginLeft: "-20vw", rotate: "-35deg", scale: 1.15});
});
document.querySelector('.img1').addEventListener('mouseleave', () => {
    setTimeout(checkHover, 500);
});

document.querySelector('.img5').addEventListener('mouseenter', () => {
    gsap.to(".img5", {duration: .3, marginTop: "30vh", marginLeft: "25vw", rotate: "35deg", scale: 1.15});
    gsap.to(".img4", {duration: .3, marginTop: "22vh", marginLeft: "11vw", rotate: "20deg", scale: 1});
    gsap.to(".img3", {duration: .3, marginTop: "12vh, scale: 1"});
    gsap.to(".img2", {duration: .3, marginTop: "12vh", marginLeft: "-8vw", rotate: "-15deg", scale: 1});
    gsap.to(".img1", {duration: .3, marginTop: "20vh", marginLeft: "-18vw", rotate: "-15deg", scale: 1});
});
document.querySelector('.img5').addEventListener('mouseleave', () => {
    setTimeout(checkHover, 500);
});

document.querySelector('.img4').addEventListener('mouseenter', () => {
    gsap.to(".img5", {duration: .3, marginTop: "35vh", marginLeft: "20vw", rotate: "10deg",scale: 1});
    gsap.to(".img4", {duration: .3, marginTop: "20vh", marginLeft: "12vw", rotate: "12deg", scale: 1.15});
    gsap.to(".img3", {duration: .3, marginTop: "12vh",scale: 1});
    gsap.to(".img2", {duration: .3, marginTop: "12vh", marginLeft: "-8vw", rotate: "-15deg",scale: 1});
    gsap.to(".img1", {duration: .3, marginTop: "20vh", marginLeft: "-18vw", rotate: "-15deg",scale: 1});
});
document.querySelector('.img4').addEventListener('mouseleave', () => {
    setTimeout(checkHover, 500);
});


// POLOSA-------------------------------------
gsap.timeline({repeat: -1}).to(".polosa1",{duration:60,marginLeft:-300*vhh,marginTop:-37*vhh}).to(".polosa1",{duration:10,marginLeft:0,marginTop:0});
gsap.timeline({repeat: -1}).to(".polosa2",{duration:60,marginLeft:300*vhh,marginTop:-37*vhh}).to(".polosa2",{duration:10,marginLeft:0,marginTop:0});




// Block__4--------------------------------------------------
const block1 = document.querySelector('.item__block4-1');
block1.innerHTML = block1.innerText.split('').map(charB1 => `<span>${charB1}</span>`).join('');
const spansB1 = block1.querySelectorAll('span');

const block2 = document.querySelector('.item__block4-2');
block2.innerHTML = block2.innerText.split('').map(charB2 => `<span>${charB2}</span>`).join('');
const spansB2 = block2.querySelectorAll('span');

const block3 = document.querySelector('.item__block4-3');
block3.innerHTML = block3.innerText.split('').map(charB3 => `<span>${charB3}</span>`).join('');
const spansB3 = block3.querySelectorAll('span');

const block4 = document.querySelector('.item__block4-4');
block4.innerHTML = block4.innerText.split('').map(charB4 => `<span>${charB4}</span>`).join('');
const spansB4 = block4.querySelectorAll('span');

const block5 = document.querySelector('.item__block4-5');
block5.innerHTML = block5.innerText.split('').map(charB5 => `<span>${charB5}</span>`).join('');
const spansB5 = block5.querySelectorAll('span');

const block6 = document.querySelector('.item__block4-6');
block6.innerHTML = block6.innerText.split('').map(charB6 => `<span>${charB6}</span>`).join('');
const spansB6 = block6.querySelectorAll('span');

const block7 = document.querySelector('.item__block4-7');
block7.innerHTML = block7.innerText.split('').map(charB7 => `<span>${charB7}</span>`).join('');
const spansB7 = block7.querySelectorAll('span');

const block8 = document.querySelector('.item__block4-8');
block8.innerHTML = block8.innerText.split('').map(charB8 => `<span>${charB8}</span>`).join('');
const spansB8 = block8.querySelectorAll('span');

const block9 = document.querySelector('.item__block4-9');
block9.innerHTML = block9.innerText.split('').map(charB9 => `<span>${charB9}</span>`).join('');
const spansB9 = block9.querySelectorAll('span');

let up1 = 0 ;let up2 = 0;let up3 = 0;let up4 = 0;let up5 = 0;let up6 = 0 ;let up7 = 0;let up8 = 0;let up9 = 0;

ScrollTrigger.matchMedia({
    "(max-width: 769px)": function() {
        gsap.fromTo(".text__Sek4", {top: "calc(var(--index)*6)"}, {top: "calc(var(--index)*0)",duration:1, scrollTrigger: {trigger: '.item__block4-1', start: 250*vhh,end:310*vhh}});

        for (let i = 0; i < spansB1.length; i++) {gsap.fromTo(spansB1[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (200+up1)*vhh,end:(280+up1)*vhh, scrub: true}}); up1 += 5;}
        for (let i = 0; i < spansB2.length; i++) {gsap.fromTo(spansB2[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (208+up2)*vhh,end:(288+up2)*vhh, scrub: true}}); up2 += 5;}
        for (let i = 0; i < spansB3.length; i++) {gsap.fromTo(spansB3[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (216+up3)*vhh,end:(296+up3)*vhh, scrub: true}}); up3 += 5;}
        for (let i = 0; i < spansB4.length; i++) {gsap.fromTo(spansB4[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (224+up4)*vhh,end:(304+up4)*vhh, scrub: true}}); up4 += 5;}
        for (let i = 0; i < spansB5.length; i++) {gsap.fromTo(spansB5[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (232+up5)*vhh,end:(312+up5)*vhh, scrub: true}}); up5 += 5;}
        for (let i = 0; i < spansB6.length; i++) {gsap.fromTo(spansB6[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (240+up6)*vhh,end:(320+up6)*vhh, scrub: true}}); up6 += 5;}
        for (let i = 0; i < spansB7.length; i++) {gsap.fromTo(spansB7[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (248+up7)*vhh,end:(328+up7)*vhh, scrub: true}}); up7 += 5;}
        for (let i = 0; i < spansB8.length; i++) {gsap.fromTo(spansB8[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (256+up8)*vhh,end:(336+up8)*vhh, scrub: true}}); up8 += 5;}
        for (let i = 0; i < spansB9.length; i++) {gsap.fromTo(spansB9[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (264+up9)*vhh,end:(344+up9)*vhh, scrub: true}}); up9 += 5;}
        
        gsap.fromTo(".imgBlock4-1,.black1,.imgBlock4-2,.black2,.imgBlock4-3,.black3,.imgBlock4-4,.black4,.imgBlock4-5,.black5,.imgBlock4-6,.black6,.imgBlock4-7,.black7,.imgBlock4-8,.black8,.imgBlock4-9,.black9", {left: "100vw"}, {left: "-80vw", scrollTrigger: {trigger: '.item__block4-1', start: 240*vhh,end:540*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-1", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 190*vhh,end:540*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-2", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 210*vhh,end:560*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-3", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 220*vhh,end:580*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-4", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 230*vhh,end:590*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-5", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 240*vhh,end:600*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-6", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 250*vhh,end:610*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-7", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 260*vhh,end:620*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-8", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 270*vhh,end:630*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-9", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 280*vhh,end:640*vhh, scrub: true}});

        // 5 PHOTO-------------------------------------
        let activeIndex = 3;
        const allDivs = [1, 2, 3, 4, 5];
        const updateLayout = (index) => {
            activeIndex = index;
            gsap.to(`.imgBlock3__div-${activeIndex}`, { duration: 0.5, width: "100%", opacity: 1 });
            gsap.to(`.imgBlock3__div-${activeIndex - 1}, .imgBlock3__div-${activeIndex + 1}`, { duration: 0.5, width: "10%", opacity: 0.2 });
            gsap.to(allDivs.filter(i => i !== activeIndex && i !== activeIndex - 1 && i !== activeIndex + 1)
              .map(i => `.imgBlock3__div-${i}`), { duration: 0.5, width: "0%", opacity: 0 });
        
            const button = document.querySelector('.but-num');
            const h2Num = document.querySelector('.h2-num');
        
            switch (activeIndex) {
                case 1:
                    h2Num.textContent = "СВАДЬБЫ";
                    button.onclick = () => window.open('../html/section3__DOB/sek3__1.html', '_blank');
                    gsap.to(".div__number", { duration: 0.5, top: 0 });
                    break;
                case 2:
                    h2Num.textContent = "SOHO ROOMS";
                    button.onclick = () => window.open('../html/section3__DOB/sek3__2.html', '_blank');
                    gsap.to(".div__number", { duration: 0.5, top: -1.5 });
                    break;
                case 3:
                    h2Num.textContent = "EVENT";
                    button.onclick = () => window.open('../html/section3__DOB/sek3__3.html', '_blank');
                    gsap.to(".div__number", { duration: 0.5, top: -3 });
                    break;
                case 4:
                    h2Num.textContent = "ВЫПУСКНЫЕ ВЕЧЕРА";
                    button.onclick = () => window.open('../html/section3__DOB/sek3__4.html', '_blank');
                    gsap.to(".div__number", { duration: 0.5, top: -4.5 });
                    break;
                case 5:
                    h2Num.textContent = "НОВЫЙ ГОД";
                    button.onclick = () => window.open('../html/section3__DOB/sek3__5.html', '_blank');
                    gsap.to(".div__number", { duration: 0.5, top: -6 });
                    break;
            }
        };
        allDivs.forEach(i => {
            document.querySelector(`.imgBlock3__div-${i}`).addEventListener('click', () => updateLayout(i));
        });
        document.querySelector('.arrow__bk3-left').addEventListener('click', () => {
            if (activeIndex > 1) {
                updateLayout(activeIndex - 1);
            }
        });
        document.querySelector('.arrow__bk3-right').addEventListener('click', () => {
            if (activeIndex < 5) {
                updateLayout(activeIndex + 1);
            }
        });
        updateLayout(3);
    },



    "(min-width: 770px)": function() {
        for (let i = 0; i < spansB1.length; i++) {gsap.fromTo(spansB1[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (360+up1)*vhh,end:(440+up1)*vhh, scrub: true}}); up1 += 5;}
        for (let i = 0; i < spansB2.length; i++) {gsap.fromTo(spansB2[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (368+up2)*vhh,end:(448+up2)*vhh, scrub: true}}); up2 += 5;}
        for (let i = 0; i < spansB3.length; i++) {gsap.fromTo(spansB3[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (376+up3)*vhh,end:(456+up3)*vhh, scrub: true}}); up3 += 5;}
        for (let i = 0; i < spansB4.length; i++) {gsap.fromTo(spansB4[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (384+up4)*vhh,end:(464+up4)*vhh, scrub: true}}); up4 += 5;}
        for (let i = 0; i < spansB5.length; i++) {gsap.fromTo(spansB5[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (392+up5)*vhh,end:(472+up5)*vhh, scrub: true}}); up5 += 5;}
        for (let i = 0; i < spansB6.length; i++) {gsap.fromTo(spansB6[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (400+up6)*vhh,end:(480+up6)*vhh, scrub: true}}); up6 += 5;}
        for (let i = 0; i < spansB7.length; i++) {gsap.fromTo(spansB7[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (408+up7)*vhh,end:(488+up7)*vhh, scrub: true}}); up7 += 5;}
        for (let i = 0; i < spansB8.length; i++) {gsap.fromTo(spansB8[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (416+up8)*vhh,end:(496+up8)*vhh, scrub: true}}); up8 += 5;}
        for (let i = 0; i < spansB9.length; i++) {gsap.fromTo(spansB9[i], {left: "15vw"}, {left: "0vw", scrollTrigger: {trigger: '.item__block4-1', start: (424+up9)*vhh,end:(504+up9)*vhh, scrub: true}}); up9 += 5;}

        gsap.fromTo(".imgBlock4-1,.black1,.imgBlock4-2,.black2,.imgBlock4-3,.black3,.imgBlock4-4,.black4,.imgBlock4-5,.black5,.imgBlock4-6,.black6,.imgBlock4-7,.black7,.imgBlock4-8,.black8,.imgBlock4-9,.black9", {left: "100vw"}, {left: "-80vw", scrollTrigger: {trigger: '.item__block4-1', start: 380*vhh,end:730*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-1", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 350*vhh,end:700*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-2", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 370*vhh,end:720*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-3", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 380*vhh,end:740*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-4", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 390*vhh,end:750*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-5", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 400*vhh,end:760*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-6", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 410*vhh,end:770*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-7", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 420*vhh,end:780*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-8", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 430*vhh,end:790*vhh, scrub: true}});
        gsap.fromTo(".imgBlock4-9", {rotate: "0deg"}, {rotate: "180deg", scrollTrigger: {trigger: '.item__block4-1', start: 440*vhh,end:800*vhh, scrub: true}});

        gsap.fromTo(".text__Sek4", {top: "calc(var(--index)*6)"}, {top: "calc(var(--index)*0)",duration:1, scrollTrigger: {trigger: '.item__block4-1', start: 470*vhh,end:480*vhh}});

        // 5 PHOTO-------------------------------------
        document.querySelector('.imgBlock3__div-1').addEventListener('mouseenter', () => {
            gsap.to(".imgBlock3__div-2,.imgBlock3__div-3,.imgBlock3__div-4,.imgBlock3__div-5", {duration: .5,width:"5%"});
            gsap.to(".blImg2,.blImg3,.blImg4,.blImg5", {duration: .5,height:"100%",opacity:.2});
            gsap.to('.imgBlock3__div-1', {width: "70%",duration:.5});
            gsap.to(".blImg1", {duration: .5,height:"110%",opacity:1});
            gsap.to(".div__number", {duration: .5,top:0});
            gsap.to(".Block3__div_h5-1", {opacity:1,duration:.2,delay:.1,zIndex:2});
            gsap.to(".Block3__div_h5-2,.Block3__div_h5-3,.Block3__div_h5-4,.Block3__div_h5-5", {opacity:0,duration:.3,zIndex:-1});
});
document.querySelector('.imgBlock3__div-2').addEventListener('mouseenter', () => {
            gsap.to(".imgBlock3__div-1,.imgBlock3__div-3,.imgBlock3__div-4,.imgBlock3__div-5", {duration: .5,width:"5%"});
            gsap.to(".blImg1,.blImg3,.blImg4,.blImg5", {duration: .5,height:"100%",opacity:.2});
            gsap.to('.imgBlock3__div-2', {width: "70%",duration:.5});
            gsap.to(".blImg2", {duration: .5,height:"110%",opacity:1});
            gsap.to(".div__number", {duration: .5,top:-indexJs*1.5});
            gsap.to(".Block3__div_h5-2", {opacity:1,duration:.2,delay:.1,zIndex:2});
            gsap.to(".Block3__div_h5-1,.Block3__div_h5-3,.Block3__div_h5-4,.Block3__div_h5-5", {opacity:0,duration:.3,zIndex:-1});
});
document.querySelector('.imgBlock3__div-3').addEventListener('mouseenter', () => { 
            gsap.to(".imgBlock3__div-1,.imgBlock3__div-2,.imgBlock3__div-4,.imgBlock3__div-5", {duration: .5,width:"5%"});
            gsap.to(".blImg1,.blImg2,.blImg4,.blImg5", {duration: .5,height:"100%",opacity:.2});
            gsap.to('.imgBlock3__div-3', {width: "70%",duration:.5});
            gsap.to(".blImg3", {duration: .5,height:"110%",opacity:1});
            gsap.to(".div__number", {duration: .5,top:-indexJs*3});
            gsap.to(".Block3__div_h5-3", {opacity:1,duration:.2,delay:.1,zIndex:2});
            gsap.to(".Block3__div_h5-1,.Block3__div_h5-2,.Block3__div_h5-4,.Block3__div_h5-5", {opacity:0,duration:.3,zIndex:-1});
});
document.querySelector('.imgBlock3__div-4').addEventListener('mouseenter', () => {
            gsap.to(".imgBlock3__div-1,.imgBlock3__div-3,.imgBlock3__div-2,.imgBlock3__div-5", {duration: .5,width:"5%"});
            gsap.to(".blImg1,.blImg3,.blImg2,.blImg5", {duration: .5,height:"100%",opacity:.2});
            gsap.to('.imgBlock3__div-4', {width: "70%",duration:.5});
            gsap.to(".blImg4", {duration: .5,height:"110%",opacity:1});
            gsap.to(".div__number", {duration: .5,top:-indexJs*4.5});
             gsap.to(".Block3__div_h5-4", {opacity:1,duration:.2,delay:.1,zIndex:2});
            gsap.to(".Block3__div_h5-1,.Block3__div_h5-3,.Block3__div_h5-2,.Block3__div_h5-5", {opacity:0,duration:.3,zIndex:-1});
});
document.querySelector('.imgBlock3__div-5').addEventListener('mouseenter', () => { 
            gsap.to(".imgBlock3__div-1,.imgBlock3__div-3,.imgBlock3__div-2,.imgBlock3__div-4", {duration: .5,width:"5%"});
            gsap.to(".blImg1,.blImg3,.blImg2,.blImg4", {duration: .5,height:"100%",opacity:.2});
            gsap.to('.imgBlock3__div-5', {width: "70%",duration:.5});
            gsap.to(".blImg5", {duration: .5,height:"110%",opacity:1});
            gsap.to(".div__number", {duration: .5,top:-indexJs*6});
             gsap.to(".Block3__div_h5-5", {opacity:1,duration:.2,delay:.1,zIndex:2});
            gsap.to(".Block3__div_h5-1,.Block3__div_h5-3,.Block3__div_h5-4,.Block3__div_h5-2", {opacity:0,duration:.3,zIndex:-1});

});


        // Block__2_img--------------------------------------------------
        const elements = ['.i0','.i1', '.i2', '.i3', '.i4', '.i5', '.i6', '.i7'];

        elements.forEach(selector => {
        const element = document.querySelector(selector);
        
        element.addEventListener('mouseenter', () => {
            gsap.to(selector, { width:"6.3vw", duration: 0.2 });
        });
        
        element.addEventListener('mouseleave', () => {
            gsap.to(selector, { width:"6vw", duration: 0.2 });
        });
        });
    }
  });
  // NUMBER FT------------------------------------------------------------------
document.querySelector('.never').addEventListener('mouseenter', () => {
    for (let i = 0; i < spans5.length; i++) {
        setTimeout(function() {
            gsap.to(spans5[i], {duration: .2,delay:.05,rotationX: 180});
            gsap.to(spans5[i], {duration: .2,delay:.05,rotationX: 180,top:-indexJs*.7});
            gsap.to(spans6[i], {duration: .2,delay:.1,rotationX: 0});
            gsap.to(spans6[i], {duration: .2,delay:.05,top:-indexJs*.65});
            gsap.to(".header__osnova-number-ft-fake", {opacity:1,duration:.1});
        }, i * 30);
    }
});
document.querySelector('.never').addEventListener('mouseleave', () => {
    for (let i = 0; i < spans6.length; i++) {
        setTimeout(function() {
            gsap.to(spans5[i], {duration: .2,delay:.05,rotationX: 0,z:0});
            gsap.to(spans5[i], {duration: .2,delay:.05,rotationX: 0,top:0});
            gsap.to(spans6[i], {duration: .2,rotationX: -120});
            gsap.to(spans6[i], {duration: .2,delay:.05,top:0});
        }, i * 30);
    }

});
const div5 = document.querySelector('.header__osnova-number-ft');
div5.innerHTML = div5.innerText.split('').map(char5 => `<span>${char5}</span>`).join('');
const spans5 = div5.querySelectorAll('span');
const div6 = document.querySelector('.header__osnova-number-ft-fake');
div6.innerHTML = div6.innerText.split('').map(char6 => `<span>${char6}</span>`).join('');
const spans6 = div6.querySelectorAll('span');

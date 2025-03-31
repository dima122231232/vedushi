let isStarted = false;let played = false, soundEnabled = true;
document.querySelector('.preloader').addEventListener('click', () => {
    const video = document.getElementById('video');
    video.muted = soundEnabled;
    soundEnabled = !soundEnabled;
});
video.pause();
function start_button() {
    if (isStarted) return;
    isStarted = true;
    gsap.fromTo('.start__box, .wheel',{opacity:1},{opacity:0,duration:1 })
    gsap.to('.wheel', {rotation: -360,  duration: 5, ease: 'linear',repeat: -1});
    document.querySelector('.crest__start_button').removeEventListener('mouseleave', removeActiveClass);
    document.querySelector('.arrow__start_button').removeEventListener('mouseleave', removeActiveClass2);
    gsap.to('.start__section  ',{opacity:0, duration:5,delay:2})
    gsap.to('.preloader',{opacity:.5, duration:5,delay:2})
    gsap.to('.start__button-arrow ',{opacity:1, duration:1,delay:5})

    const video = document.getElementById('video');video.currentTime = 0;video.muted = false;video.volume = 0;video.play();let interval = setInterval(() => video.volume < 1 ? video.volume += 0.0005 : clearInterval(interval), 8);
    setTimeout(function() {if (!played) {played = true; }}, 1000); 
}

  const rotateBetweenWords = (value) => {
    const words = document.querySelectorAll('.wheel__word')
    
    let deg =0
    
    for (let word of words) {
        word.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
}

const rotateBetweenLetters = (value) => {
    const letters = document.querySelectorAll('.wheel__letter')
    
    let deg = 100
    
    for (let letter of letters) {
        letter.style.transform = `rotate(${ deg }deg)`
        deg += value
    }
    
}
rotateBetweenWords(35)
rotateBetweenLetters(7)
gsap.to('.wheel', {
    rotation: 360,  
    duration: 50, 
    ease: 'linear',
    repeat: -1
  });


        const wheel = document.querySelector('.wheel');
        function removeActiveClass() {
            wheel.classList.remove('active');
        }
        
        function removeActiveClass2() {
            wheel.classList.remove('active2');
        }
        document.querySelector('.crest__start_button').addEventListener('mouseenter', () => {
            wheel.classList.add('active');
        });
        
        document.querySelector('.crest__start_button').addEventListener('mouseleave', removeActiveClass);
        
        document.querySelector('.arrow__start_button').addEventListener('mouseenter', () => {
            wheel.classList.add('active2');
        });
        document.querySelector('.arrow__start_button').addEventListener('mouseleave', removeActiveClass2);


        document.getElementById('video').addEventListener('ended', () => {
            gsap.to('body', {opacity: 0, duration: 1, onComplete: () => {
                window.location.href = "html/main.html";
            }});
        });
        function START(){
            gsap.to('body', {opacity: 0, duration: 1, onComplete: () => {
                window.location.href = "html/main.html";
            }});
        }
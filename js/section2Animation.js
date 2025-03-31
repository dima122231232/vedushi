function Section2(){
    swiper.params.autoplay.disableOnInteraction = true;
    swiper.autoplay.start(); 
    gsap.to(['.no_div-block2-1','.no_div-block2-2','.no_div-block2-3','.no_div-block2-4','.no_div-block2-5','.no_div-block2-6','.Button__link'],{
        top:"calc(var(--index)*6)",
        duration:0.6,
        stagger:0.1,
      });
      setTimeout(function() {
        document.querySelector(".conteiner__block-2,.inviseble_div-block2,.section__block-2").style.display='none';
        document.querySelector(".vremenno").style.display='block';
        gsap.to(" .swiper-container", {duration:1, opacity:1});
    },1000);
      
}
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    slideToClickedSlide: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
      },
    },
    autoplay: false
  });
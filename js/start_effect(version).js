gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    smooth: 1,   
    effects: true,
  });
  gsap.fromTo('.item-img', {marginTop: "150vh"}, {marginTop: "-105vh",duration: 1.7,ease: "expo.inOut",stagger: 0.05, });
gsap.fromTo('.items__video',{width:"27vw",height:"29vh",top:'140vh'},{width:"100vw",height:"100vh",top:'105vh',duration:1,ease: "expo.out" ,delay:2.3})
gsap.fromTo('.items__video',{width:"30vw",height:"30vh"},{width:"27vw",height:"29vh",duration:.7,ease: "expo.inOut" ,delay:1.5})
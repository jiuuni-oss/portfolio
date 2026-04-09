const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,      // 한 번에 보일 슬라이드 수
    spaceBetween: 0,       // 슬라이드 사이 간격
    loop: true,            // 무한 반복
    autoplay: {
        delay: 4000,       // 4초마다 자동으로 넘어감
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,   // 점 클릭 시 이동
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


gsap.registerPlugin(ScrollTrigger);
$(document).ready(function(){

    gsap.to("#inc01 .gsap_cont", {
        scrollTrigger:{
            start:"-20% top",
            trigger:"#inc01 .gsap_cont",
            end:"-10% top", 
            onEnter:()=>{
                gsap.to("#inc01 .gsap_cont", {opacity:"1"})
            },
            onLeaveBack:()=>{
                gsap.to("#inc01 .gsap_cont", {opacity:"0"})
            }
        }
    })  

    $("#inc01 .gsap_wrap li").each(function(i, e){

        if ($(e).hasClass("last")) {
            return;
        }

        ScrollTrigger.create({
            trigger: e,
            start:"top top+=60",
            endTrigger: "#inc01 .gsap_wrap li.last",
            end: "top -5%",
            pin: true,
            pinSpacing: false,
        });

        gsap.to(e, {
            scrollTrigger: {
                trigger: e,
                start:"top top+=65",
                end: "top -=70%",
                scrub: 1,
            },
            scale: 0.7,
            filter: "blur(8px)",
            ease: "none",
        });
    });

    const inc01_tl = gsap.timeline({
        scrollTrigger:{
            start:"top top",
            trigger:"#inc01 .gsap_wrap li.last",
            end:"bottom top",
            scrub:1,
        }
    });
    inc01_tl.to("#inc01 .txt div:first-child", {backgroundSize:"100%", duration:1}, 0);
    inc01_tl.to("#inc01 .txt div:nth-child(2)", {backgroundSize:"100%", duration:1}, 0.1);
    inc01_tl.to("#inc01 .txt a", {opacity:"1", filter:"blur(0px)", y:"0", duration:0.5}, 0)
})
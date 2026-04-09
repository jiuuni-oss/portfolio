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
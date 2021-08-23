(function(){
    const swiper = new Swiper('.slider', {
        loop: true,
        grabCursor: true,
        loopedSlides: 1,
        centeredSlides: true,
        spaceBetween: 10,
        navigation:{
            nextEl: '.slider__next',
            prevEl: '.slider__previous'
        },
        pagination:{
            el: '.slider__pagination',
            clickable: true,
        }
    })
})(window, document, Swiper);
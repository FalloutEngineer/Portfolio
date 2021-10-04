(
    function(){
        const swiper = new Swiper('.hero__background', {
            direction: 'vertical',
            loop: false,
            autoHeight: true,
            spaceBetween: 5,
            speed: 500,
            navigation:{
                nextEl: '.hero__slider-next',
                prevEl: '.hero__slider-prev'
            }
        })
    }
)(document, Swiper)
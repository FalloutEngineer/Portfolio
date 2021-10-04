(
    function(){
        const first = new Swiper('.slider', {
            slidesPerView: 1,
            centeredSlides: true,
            watchOverflow: true,
            initialSlide: 1,
            grabCursor: true,

            pagination: {
                el: '.slider__pagination',
                clickable: true,
            },

            breakpoints: {
                830.98:{
                    slidesPerView: 3,
                }
            }
        })

        const top = new Swiper('.top-slider', {
            slidesPerView: 'auto',
            centeredSlides: true,
            watchOverflow: true,
            initialSlide: 2,
            effect: 'coverflow',
            grabCursor: true,
            coverflowEffect: {
                rotate: 20,
                slideShadows: false,
                // stretch: ,
                depth: 300,
            },

            pagination: {
                el: '.top-slider__pagination',
                clickable: true,
            },
        })
    }
)(document, Swiper)
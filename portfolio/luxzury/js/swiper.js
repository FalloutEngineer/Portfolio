(
    function(){
        const facilities = new Swiper('.facilities__swiper', {
            navigation: {
                prevEl: '.facilities__nav-button-prev',
                nextEl: '.facilities__nav-button-next'
            },

            breakpoints: {
                790.98:{
                    slidesPerView: 2.2,
                    spaceBetween: 50,
                },
                0:{
                    spaceBetween: 10,
                    slidesPerView: 'auto',
                    centeredSlides: true,
                }
            }
        });

        const feedback = new Swiper('.feedback__slider', {
            slidesPerView: 1,
            effect: 'flip',

            navigation: {
                prevEl: '.feedback__control-prev',
                nextEl: '.feedback__control-next'
            },
        })
        
    }
)(document, Swiper)
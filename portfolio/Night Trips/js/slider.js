(
    function(){
        const swiper = new Swiper('.pick__slider',{
            slidersPerView: 'auto',
            // spaceBetween: 30,
            effect: 'fade',
            fadeEffect:{
                crossFade: true
            },

            navigation: {
                nextEl: '.pick__next-slide',
                prevEl: '.pick__prev-slide',
            },
        })

        const paginations = document.querySelectorAll('.pick__slide-pagination');

        paginations.forEach((element, index) => {
            if((index + 1) < 10){
                element.innerHTML = '0' + (index + 1)+ '.'
            }else{
                element.innerHTML = (index + 1) + '.'
            }
        })
    }
)(document, Swiper)
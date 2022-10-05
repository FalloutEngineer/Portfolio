(
    function(){
        const swiper = new Swiper('.slider-big', {
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            slidesperview: 1,
          
            navigation: {
              nextEl: '.hero__button-next',
              prevEl: '.hero__button-prev',
            },
        });
    }()
)
(
    function(){
        const swiper = new Swiper('.slider', {
            direction: 'horizontal',
            loop: false,
            gap: 0,
            
          
            navigation: {
              nextEl: '.support__button-next',
              prevEl: '.support__button-prev',
            },

            breakpoints: {
                1100:{
                    slidesPerView: 4,
                },
                670:{
                    slidesPerView: 3,
                },
                350:{
                    slidesPerView: 2,
                },
                0:{
                    slidesPerView: 1,
                }
            }
          });
    }()
)
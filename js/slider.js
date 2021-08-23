(function(window, document, Swiper){

    const classes = {
        current: '_current',
    }

    const menu = document.querySelector('.header__menu');
    const menuItems = menu.querySelectorAll('.header__menu-item');

    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: false,
        parallax: true,
        resistance: true,
        resistanceRatio: 0.1,
        touchReleaseOnEdges: true,
        grabCursor: true,
        speed: 1700,
        centerSlides: true,
        sliderPerView: 'auto',

        on:{
          init: function() {
            let swiper = this;
            for(let i = 0; i < swiper.slides.length; i++){
              swiper.slides[i].querySelector('.swiper-slide__background').setAttribute('data-swiper-parallax', 0.75 * swiper.width)
            }
          },
          resize: function(){
            let swiper = this;
            for(let i = 0; i < swiper.slides.length; i++){
              swiper.slides[i].querySelector('.swiper-slide__background').setAttribute('data-swiper-parallax', 0.75 * swiper.width)
            }
          }
        },
      
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      });

      addMenuClickListeners();
      changeActiveMenuItemOnSlideChange();
      

      function changeActiveMenuItemOnSlideChange(){
        swiper.on('slideChange', () =>{
          menuItems.forEach(item =>{
              item.classList.remove(classes.current);
          })
          menuItems[swiper.realIndex].classList.add(classes.current);
        })
      }

      function addMenuClickListeners(){
        menuItems.forEach((item, index) => {
          item.addEventListener('click', e =>{
              swiper.slideTo(index);
          })
        })
      }
    
})(window, document, Swiper);
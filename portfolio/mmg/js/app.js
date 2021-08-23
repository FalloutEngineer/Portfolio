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
(function(window, document) {
    const menuSpoilers = document.querySelectorAll('.nav__item._spoiler');
    const classes = {
        active: '_active',
    };

    menuSpoilers.forEach(spoiler => {
        spoiler.querySelector('.nav__link').addEventListener('click', e =>{
            spoiler.classList.toggle(classes.active)
            spoiler.querySelector('.nav__sub-list').classList.toggle(classes.active);
        })
    })
})(window, document);
(function(window, document) {
    const page = {
        menu: document.querySelector('.header__container'),
        button: document.querySelector('.header__burger-button'),
        buttonWrapper: document.querySelector('.header__burger-button-wrapper'),
        body: document.querySelector('body'),
    }
    const classes = {
        active: '_active',
        locked: '_locked',
    }

    page.buttonWrapper.addEventListener('click', e =>{
        togglePage();
        toggleMenu();
        toggleButton();
    })

    function togglePage(){
        page.body.classList.toggle(classes.locked);
    }
    function toggleMenu(){
        page.menu.classList.toggle(classes.active);
    }
    function toggleButton(){
        page.button.classList.toggle(classes.active);
    }
})(window, document);
(function(document, window){
    
    const news = document.querySelectorAll('.news__item');

    getNews().then((data) => {
        data.forEach((element, index) => {
            news[index].querySelector('.news__image').src = element.imageUrl;
            news[index].querySelector('.news__heading').innerHTML = element.heading;
            news[index].querySelector('.news__paragraph').innerHTML = element.content;
            news[index].querySelector('.news__time').innerHTML = `Date: ${element.date}`;
            news[index].querySelector('.news__comments').innerHTML = `Comments: ${element.comments}`;
            news[index].querySelector('.news__item-wrapper').href = element.url;
        });

    })

    async function getNews(){
        return fetch('./json/news.json').then(response => {
            return response.json();
        })
        .catch(error => {
            console.error(error);
        })
        .then(data =>{
            return data;
        })
    }

})(document, window);
(function(document, window){
    const classes = {
        active: '_active',
    };

    const footerItems = document.querySelectorAll('.footer__item');

    footerItems.forEach(item => {
        const heading = item.querySelector('.footer__item-heading');

        const list = item.querySelector('.footer__list');

        if(heading){
            heading.addEventListener('click', (e) => {
                e.preventDefault();
                list.classList.toggle(classes.active);
            });
        }
        else{
            list.classList.add(classes.active);
        }
    });
})(document, window);
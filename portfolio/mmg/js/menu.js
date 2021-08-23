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
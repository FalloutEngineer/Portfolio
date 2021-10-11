(
    function(){
        const pageModel = {
            body: document.querySelector('body'),
            headerContainer: document.querySelector('.header__container'),
            burgerButton: document.querySelector('.header__burger-button')
        }
        const classes = {
            active: '_active',
            locked: '_locked'
        }

        //code

        buttonListener();

        //functions
        function buttonListener() {
            pageModel.burgerButton.addEventListener('click', e => {
                pageModel.burgerButton.classList.toggle(classes.active);
                pageModel.body.classList.toggle(classes.locked);
                pageModel.headerContainer.classList.toggle(classes.active);
            })
        }
    }
)(document)
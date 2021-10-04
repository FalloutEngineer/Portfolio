(
    function(){
        const classes = {
            active: '_active',
            locked: '_locked'
        }
        const pageModel = {
            body: document.body,
            burgerButton: document.querySelector('.header__burger-button'),
            headerContainer: document.querySelector('.header__container'),
        }

        //

        pageModel.burgerButton.addEventListener('click', e => {
            toggleBody();
            toggleButton();
            toggleMenu();
        })

        //

        function toggleMenu(){
            pageModel.headerContainer.classList.toggle(classes.active)
        }

        function toggleBody(){
            pageModel.body.classList.toggle(classes.locked)
        }

        function toggleButton(){
            pageModel.burgerButton.classList.toggle(classes.active)
        }
    }
)(document)
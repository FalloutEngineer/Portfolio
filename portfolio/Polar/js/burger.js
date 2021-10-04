(
    function(){
        const burgerButton = document.querySelector('.header__burger-button');
        const menu = document.querySelector('.header__container');
        const body = document.body;

        const classes = {
            active: "_active",
            locked: "_locked"
        };

        addButtonEventListener();

        function addButtonEventListener(){
            burgerButton.addEventListener('click', e => {
                burgerButton.classList.toggle(classes.active);
                body.classList.toggle(classes.locked);
                menu.classList.toggle(classes.active);
            })
        }
    }
)(document);
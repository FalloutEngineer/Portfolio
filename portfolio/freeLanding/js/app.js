function burger(){
    return function(){

        const body = document.body;

        const menu = {
            nav = document.querySelector('.nav'),
            burgerButton = document.querySelector('.burger-button'),
        }

        const classes = {
            blocked = '_blocked',
            active = '_active',
        }

        //main

        setListeners();

        //functions

        function setListeners(){
            menu.burgerButton.addEventListener('click', () => {
                toggleBody();
                toggleBurger();
                toggleBurgerButton();
            });
        }

        function toggleBody(){
            body.classList.toggle(classes.blocked);
        }

        function toggleBurger(){
            menu.nav.classList.toggle(classes.active);
        }

        function toggleBurgerButton(){
            menu.burgerButton.classList.toggle(classes.active);
        }

    }
};

burger()();

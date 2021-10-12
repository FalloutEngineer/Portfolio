(
    function(){

        const pageModel = {
            header: document.querySelector('.header'),
            headerContainer: document.querySelector('.header__container'),
            burgerButton: document.querySelector('.header__burger-button'),
            body: document.querySelector('body')
        }

        const classes = {
            notTop: '_not-top',
            active: '_active',
            locked: '_locked'
        }

        scollNotTop();    
        burger();    

        function scollNotTop(){
            window.addEventListener('scroll', e => {
                if(window.scrollY != 0){
                    pageModel.header.classList.add(classes.notTop)
                }else{
                    pageModel.header.classList.remove(classes.notTop)
                }
            })
        }

        function burger(){
            pageModel.burgerButton.addEventListener('click', e => {
                e.preventDefault();
                toggleButton()
                toggleBody();
                toggleMenu();
            })
        }

        function toggleButton(){
            pageModel.burgerButton.classList.toggle(classes.active)
        }

        function toggleBody(){
            pageModel.body.classList.toggle(classes.locked)
        }

        function toggleMenu(){
            pageModel.headerContainer.classList.toggle(classes.active)
        }
    }
)(document, window)
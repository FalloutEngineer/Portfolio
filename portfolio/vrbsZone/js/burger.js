(
    function(){
        const button = document.querySelector('.header__nav-button');
        const menu = document.querySelector('.header__nav-list');

        const classes = {
            active: '_active',
            locked: '_locked'
        }

        button.addEventListener('click', e =>{
            button.classList.toggle(classes.active)
            menu.classList.toggle(classes.active)
        })
    }
)(document)
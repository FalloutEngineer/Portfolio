function menu(){
    const classes = {
        active: '_active',
        locked: '_locked',
    };

    const page = {
        body: document.body,
        nav: document.querySelector('.nav'),
        button: document.querySelector('.logo'),
        list: document.querySelector('.nav__list_mobile'),
    }

    const breakpoints = {
        md1: 1280 + 12,
        md2: 767.98,
        md3: 479.98,
    }

    return function(){
        initializeMenu();
    }

    function initializeMenu(){
        page.button.addEventListener('click', () => {
            if(window.innerWidth <= breakpoints.md2){
                toggleButton();
                toggleBodyLock();
                toggleMenu();
            }
        });
    }

    function toggleButton(){
        page.button.classList.toggle(classes.active);
    };

    function toggleBodyLock(){
        page.body.classList.toggle(classes.locked);
    };

    function toggleMenu(){
        page.list.classList.toggle(classes.active);
    };
}

menu()();
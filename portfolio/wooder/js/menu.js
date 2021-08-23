function menu(){
    let page = {
        body: document.body,
        menu: document.querySelector('.left-menu'),
        button: document.querySelector('.left-menu__button'),
        wrapper: document.querySelector('.wrapper'),
        nav: document.querySelector('.nav'),
        menuLinks: document.querySelectorAll('.left-menu__item')
    }

    let classes = {
        active: '_active',
        locked: '_locked',
    }

    return function(){
        page.button.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMenu();
        })

        page.menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMenu();
            })
        });
    }

    function toggleMenu(){
        page.wrapper.classList.toggle(classes.locked);
        page.button.classList.toggle(classes.active);
        page.menu.classList.toggle(classes.active);
        page.nav.classList.toggle(classes.active);
        page.body.classList.toggle(classes.locked);
    }
}

menu()();
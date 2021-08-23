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
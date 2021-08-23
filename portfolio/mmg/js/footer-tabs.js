(function(document, window){
    const classes = {
        active: '_active',
    };

    const footerItems = document.querySelectorAll('.footer__item');

    footerItems.forEach(item => {
        const heading = item.querySelector('.footer__item-heading');

        const list = item.querySelector('.footer__list');

        if(heading){
            heading.addEventListener('click', (e) => {
                e.preventDefault();
                list.classList.toggle(classes.active);
            });
        }
        else{
            list.classList.add(classes.active);
        }
    });
})(document, window);
(function(document, Pace){
    const classes = {
        animated: "_animated",
        animation: "_animation",
    }

    const elementsToAnimate = document.querySelectorAll(`.${classes.animated}`);
    Pace.on('done', () => {
        elementsToAnimate.forEach(element => {
            element.classList.add(classes.animation)
        })
    })
})(document, Pace)
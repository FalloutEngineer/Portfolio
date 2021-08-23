(function(document, Pace){
    const paceBackground = document.querySelector('.pace-background')
    Pace.on('done', () => {
        paceBackground.classList.add('_done');
    })
})(document, Pace);
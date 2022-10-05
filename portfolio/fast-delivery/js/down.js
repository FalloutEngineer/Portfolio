(
    function(){
        const section = document.querySelector('.about');
        const button = document.querySelector('.hero__down');

        button.addEventListener('click', e => {
            section.scrollIntoView({
                behavior: 'smooth'
            })
        });
    }()
)
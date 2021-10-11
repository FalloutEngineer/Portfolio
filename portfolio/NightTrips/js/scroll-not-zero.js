(
    function(){
        const header = document.querySelector('header');

        const notZero = '_not-zero';

        window.addEventListener('scroll', e => {
            if(window.scrollY !== 0){
                header.classList.add(notZero)
            }else{
                header.classList.remove(notZero)
            }
        })
    }
)(document, window)
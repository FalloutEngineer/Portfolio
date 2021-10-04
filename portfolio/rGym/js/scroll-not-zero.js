(
    function(){
        const classBackground = '_background';
        const header = document.querySelector('.header');
        window.addEventListener('scroll', e => {
            if(window.scrollY !== 0){
                header.classList.add(classBackground)
            }else{
                header.classList.remove(classBackground)
            }
        })
    }
)(document, window)
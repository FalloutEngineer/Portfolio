(
    function(){
        const header = document.querySelector('header');

        document.addEventListener('scroll' , () => {
            const scroll = window.scrollY;
            if(scroll !== 0){
                header.classList.add('_background');
            }else{
                header.classList.remove('_background');
            }
        })
    }
)(document, window)
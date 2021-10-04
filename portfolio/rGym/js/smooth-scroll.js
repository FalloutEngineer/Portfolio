(
    function(){
        const anchors = document.querySelectorAll('a[href*="#"]');


        anchors.forEach(anchor => {
            anchor.addEventListener('click', e => {
                e.preventDefault();
                const target = anchor.getAttribute('href');
                if(target !== ''){
                    if(target === '#'){
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }else{
                        const targetElement = document.querySelector(`${target}`)
                        if(targetElement){
                            targetElement.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }
                    }
                }
            })
        })
    }
)(document, window)
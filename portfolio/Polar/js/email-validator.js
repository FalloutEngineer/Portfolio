(
    function(){
        const pageModel = {
            question: {
                email: document.querySelector('.contact__email'),
                submit: document.querySelector('.contact__submit'),
            },
            newsletter: {
                email: document.querySelector('.footer__subscribe-input'),
                submit: document.querySelector('.footer__subscribe-submit'),
            }
        }

        initButtons()

        function isEmail(email){
            const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegExp.test(String(email).toLocaleLowerCase());
        }

        function initButtons(){
            
            const forms = Object.values(pageModel);

            forms.forEach(element => {
                setValidator(element);
            });

            function setValidator(item){
                item.submit.addEventListener('click', e =>{
                    e.preventDefault();
                    if(!isEmail(item.email.value)){
                        item.email.classList.add('validation_error');
                    }else{
                        item.email.classList.remove('validation_error');
                        item.email.classList.add('validation_success');
                        item.email.addEventListener('animationend', e => {
                            item.email.classList.remove('validation_success');
                        })
                    }
                })
                item.email.addEventListener('click', e =>{
                    item.email.classList.remove('validation_error');
                })
            }
        }
    }
)(document)
(
    function(){
        const email = document.querySelector('.subscribe__email');
        const submit = document.querySelector('.subscribe__submit');
        
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        submit.addEventListener('click', e => {
            if(!reg.test(email.value.toLowerCase())){
                email.value = ''
            }
        })
    }
)(document)
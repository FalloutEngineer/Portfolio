(
    function(){
        const buttons = document.querySelectorAll('.tech__nav-button');
        const tabs = document.querySelectorAll('.tech__tab');

        const active = '_active';

        buttons.forEach((button, i) => {
            button.addEventListener('click', (e) => {
                if(!button.classList.contains(active)){
                    buttons.forEach(button2 =>{
                        button2.classList.remove(active);
                    })
                    button.classList.add(active);

                    tabs.forEach(tab =>{
                        tab.classList.remove(active);
                    })
                    tabs[i].classList.add(active);
                }
            })
        })
    }()
)
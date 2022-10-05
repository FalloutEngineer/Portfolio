(
    function(){
        const active = '_active';
        const buttons = document.querySelectorAll('.hero__tabs-button');
        const tabs = document.querySelectorAll('.hero__tabs-tab');

        buttons.forEach((button, id) => {
            button.addEventListener('click', e => {
                buttons.forEach(button2 => {
                    button2.classList.remove(active);
                })
                tabs.forEach(tab =>{
                    tab.classList.remove(active);
                })
                tabs[id].classList.add(active);
                button.classList.add(active);
            });
        })
    }()
)
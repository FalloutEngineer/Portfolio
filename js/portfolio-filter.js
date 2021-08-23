function portfolioFilter(){
    const states = {
        hidden: '_hidden',
        active: '_active'
    }

    const filters = {
        all: '_all',
        landing: '_landing',
        multiPage: '_multi-page',
        store: '_store',
        forum: '_forum',
        singlePage: 'singlePage',
        portal: '_portal',
        spa: '_spa',
    }

    const buttons = document.querySelectorAll('.portfolio-button');

    const sites = document.querySelectorAll('.portfolio__item');

    initButtons();
    buttonPress();

    function initButtons(){
        buttons[0].classList.add(states.active);
    }

    function setFilter(filter){
        if(filter == filters.all){
            sites.forEach(item =>{
                item.classList.remove(states.hidden);
            })
        }else{
            sites.forEach(site => {
                if(!site.classList.contains(filter)){
                    site.classList.add(states.hidden);
                }else{
                    site.classList.remove(states.hidden);
                }
            });
        }
    }

    function buttonPress(){
        buttons.forEach(button => {
            button.addEventListener('click', () =>{
                buttons.forEach(item => {
                    item.classList.remove(states.active)
                })
                button.classList.add(states.active);
                setFilter(button.dataset.filter);
            })
        });
    }
};
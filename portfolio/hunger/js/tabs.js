function tabs(){
    const classes = {
        active: '_active',
    }

    const page = {
        tabsContainer: document.querySelector('.tabs-container'),
        tabsButtons: document.querySelectorAll('.tab'),
        tabsContent: document.querySelector('.tabs__content'),
        tabs: document.querySelectorAll('.tabs__body'),
        activeTab: document.querySelector('.tabs__body._active'),
    }

    setClickListeners();

    function setClickListeners(){
        page.tabsButtons.forEach(button => {
            button.addEventListener('click', () => {
                let data = button.dataset.value;
                if(data != "" && data != null){
                    setActiveTabByDataset(button.dataset.value);
                }else{
                    throw new Error('Wrong button dataset')
                }
            })
        })
    }

    function setActiveTabByDataset(set){
        page.tabs.forEach(tab => {
            if(tab.dataset.tab == set){
                tab.classList.add(classes.active);
            }
            else{
                tab.classList.remove(classes.active);
            }
        })
    }
}

tabs();
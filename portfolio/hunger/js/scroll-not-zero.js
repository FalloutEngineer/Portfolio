function scrollNotZero(){
    return function() {
        const classes = {
            notTop: '_not-top',
        };
    
        const page = {
            wrapper: document.querySelector('.wrapper'),
            nav: document.querySelector('.nav'),
            menuLists: document.querySelectorAll('.nav__list'),
            logo: document.querySelector('.logo'),
        }

        addScrollListeners();
    
        function addScrollListeners(){
            page.wrapper.addEventListener('scroll', ()=>{
                addClassIfNotZero()
            }, {passive: true})
        }
    
        function addClassIfNotZero(){
            if(page.wrapper.scrollTop != 0){
                page.menuLists.forEach(list => {
                    list.classList.add(classes.notTop);
                })
                page.logo.classList.add(classes.notTop);
                page.nav.classList.add(classes.notTop);
            }else{
                page.menuLists.forEach(list => {
                    list.classList.remove(classes.notTop);
                })
                page.logo.classList.remove(classes.notTop);
                page.nav.classList.remove(classes.notTop);
            }
        }
    }
}

scrollNotZero()();
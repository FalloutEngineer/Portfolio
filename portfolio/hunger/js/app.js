function menu(){
    const classes = {
        active: '_active',
        locked: '_locked',
    };

    const page = {
        body: document.body,
        nav: document.querySelector('.nav'),
        button: document.querySelector('.logo'),
        list: document.querySelector('.nav__list_mobile'),
    }

    const breakpoints = {
        md1: 1280 + 12,
        md2: 767.98,
        md3: 479.98,
    }

    return function(){
        initializeMenu();
    }

    function initializeMenu(){
        page.button.addEventListener('click', () => {
            if(window.innerWidth <= breakpoints.md2){
                toggleButton();
                toggleBodyLock();
                toggleMenu();
            }
        });
    }

    function toggleButton(){
        page.button.classList.toggle(classes.active);
    };

    function toggleBodyLock(){
        page.body.classList.toggle(classes.locked);
    };

    function toggleMenu(){
        page.list.classList.toggle(classes.active);
    };
}

menu()();
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
function regularImageWrapperHeight(){
    const wrappers = document.querySelectorAll('.square-image__wrapper');

    setDependencies(wrappers);

    function setDependencies(wrappers){
        if(wrappers.length > 0){
            wrappers.forEach(wrapper => {
                let image = wrapper.querySelector('.square-image');
                resizeParent(wrapper, image);
                window.addEventListener('resize', () =>{
                    resizeParent(wrapper, image);
                }, true)
            })
        }
    }

    function resizeParent(parent, child){
        parent.style.height = child.offsetWidth + 'px';
    }
}

regularImageWrapperHeight();
new Swiper('.specialties__swiper-slider', {
    loop: true,

    initialSlide: 1,

    pagination: {
        el: '.swiper-pagination',

        clickable: true,
    },

    spaceBetween: 225,
})
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
function smoothScrool(){
    const anchors = document.querySelectorAll('a[href*="#"]')

    setListeners();

    function setListeners(){
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetID = anchor.getAttribute('href');
                document.querySelector(`${targetID}`).scrollIntoView({
                    behavior: "smooth",
                    block: "start",

                })
            })
        })
    }
}

smoothScrool();
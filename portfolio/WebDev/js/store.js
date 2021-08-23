function store(){
    let buttonPrefix = "latest-works__filter_"

    let categoriesPrefix = "latest-works_"

    let categories = {
        web: Array.from(document.getElementsByClassName(categoriesPrefix + 'web')),
        ui: Array.from(document.getElementsByClassName(categoriesPrefix + 'ui')),
        mockups: Array.from(document.getElementsByClassName(categoriesPrefix + 'mockups')),
    }

    let all_items = [].concat(categories.web, categories.ui, categories.mockups)

    let buttons = {
        all: document.getElementById(buttonPrefix + 'all'),
        web: document.getElementById(buttonPrefix + 'web'),
        ui: document.getElementById(buttonPrefix + 'ui'),
        mockups: document.getElementById(buttonPrefix + 'mockups')
    }

    console.log(buttons.mockups);

    buttons.all.onclick = () => {
        all_items.forEach(element => element.classList.remove('hide'));
    }

    buttons.web.addEventListener('click', function(){
        changeCategory(categories.web);
    });
    buttons.ui.addEventListener('click', function(){
        changeCategory(categories.ui);
    })
    buttons.mockups.addEventListener('click', function(){
        changeCategory(categories.mockups);
    })

    changeCategory(categories.mockups);

    function changeCategory(category){
        all_items.forEach(element => element.classList.add('hide'));
        category.forEach(element => element.classList.remove('hide'));
    }
}

store()
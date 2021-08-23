function burger(){
    let header = document.getElementsByClassName('header')[0];
    let body = document.body;
    let burger_button = header.getElementsByClassName('burger-button')[0];

    let burger_menu = header.getElementsByTagName('nav')[0].getElementsByTagName('ul')[0];

    let isOpened = false;

    burger_button.onclick = toggleBurger;

    function toggleBurger(){
        if(!isOpened){
            burger_menu.classList.add('active');
            burger_button.classList.add('active');
            body.classList.add('blocked');
        }else{
            burger_menu.classList.remove('active');
            burger_button.classList.remove('active');
            body.classList.remove('blocked');
        }
        isOpened = !isOpened
    }
}

burger()
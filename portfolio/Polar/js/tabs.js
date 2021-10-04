(
    function(){
        const pageModel = {
            tabsMenu: document.querySelector('.tabs-menu__list'),
            tab: {
                element: document.querySelector('.tab'),
                items: [
                    {
                        image: document.querySelectorAll('.tab-item')[0].querySelector('.tab-item__image'),
                        heading: document.querySelectorAll('.tab-item')[0].querySelector('.tab-item__heading'),
                        description: document.querySelectorAll('.tab-item')[0].querySelector('.tab-item__description'),
                        discountPrice: document.querySelectorAll('.tab-item')[0].querySelector('.tab-item__discount-price'),
                        originalPrice: document.querySelectorAll('.tab-item')[0].querySelector('.tab-item__original-price'),
                        buyButton: document.querySelectorAll('.tab-item')[0].querySelector('.tab-item__buy-button'),
                    },
                    {
                        image: document.querySelectorAll('.tab-item')[1].querySelector('.tab-item__image'),
                        heading: document.querySelectorAll('.tab-item')[1].querySelector('.tab-item__heading'),
                        description: document.querySelectorAll('.tab-item')[1].querySelector('.tab-item__description'),
                        discountPrice: document.querySelectorAll('.tab-item')[1].querySelector('.tab-item__discount-price'),
                        originalPrice: document.querySelectorAll('.tab-item')[1].querySelector('.tab-item__original-price'),
                        buyButton: document.querySelectorAll('.tab-item')[1].querySelector('.tab-item__buy-button'),
                    },
                    {
                        image: document.querySelectorAll('.tab-item')[2].querySelector('.tab-item__image'),
                        heading: document.querySelectorAll('.tab-item')[2].querySelector('.tab-item__heading'),
                        description: document.querySelectorAll('.tab-item')[2].querySelector('.tab-item__description'),
                        discountPrice: document.querySelectorAll('.tab-item')[2].querySelector('.tab-item__discount-price'),
                        originalPrice: document.querySelectorAll('.tab-item')[2].querySelector('.tab-item__original-price'),
                        buyButton: document.querySelectorAll('.tab-item')[2].querySelector('.tab-item__buy-button'),
                    }
                ]
            }
        }

        const productsDir = "img/products/";

        let dataJson = {};

        let currency = "$";

        getJson()
        .then(data => {
            dataJson = data;
            initButtons();
        })

        

        function getJson(){
            return fetch("../json/tabs-base.json")
            .then(response => {
                return response.json();
            })
        }

        function selectTab(tabName){
            const data = dataJson[tabName];
            let values = Object.values(data);
            let keys = Object.keys(data);

            pageModel.tab.items.forEach((tabItem, index) => {
                const itemObject = values[index]

                tabItem.heading.innerHTML = keys[index];
                tabItem.image.src = productsDir + itemObject.image;
                tabItem.description.innerHTML = itemObject.description;
                tabItem.discountPrice.innerHTML = currency + itemObject.discountPrice;
                tabItem.originalPrice.innerHTML = currency + itemObject.originalPrice;
                tabItem.buyButton.href = itemObject.buyLink;
            });
        }

        function initButtons(){
            const buttons = pageModel.tabsMenu.querySelectorAll('.tabs-menu__item-button');

            buttons[0].classList.add('_active');

            buttons.forEach(button => {
                button.addEventListener('click', e => {
                    selectTab(button.innerHTML.toLowerCase());
                    buttons.forEach(item => {
                        item.classList.remove('_active');
                    })
                    button.classList.add('_active');
                })
            });
        }
    }
)(document)
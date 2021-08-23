(function(document, window){
    
    const news = document.querySelectorAll('.news__item');

    getNews().then((data) => {
        data.forEach((element, index) => {
            news[index].querySelector('.news__image').src = element.imageUrl;
            news[index].querySelector('.news__heading').innerHTML = element.heading;
            news[index].querySelector('.news__paragraph').innerHTML = element.content;
            news[index].querySelector('.news__time').innerHTML = `Date: ${element.date}`;
            news[index].querySelector('.news__comments').innerHTML = `Comments: ${element.comments}`;
            news[index].querySelector('.news__item-wrapper').href = element.url;
        });

    })

    async function getNews(){
        return fetch('../json/news.json').then(response => {
            return response.json();
        })
        .catch(error => {
            console.error(error);
        })
        .then(data =>{
            return data;
        })
    }

})(document, window);
(
    function(){
        const reviewsModel = {
            person:{
                photo: document.querySelector('.review__person-image'),
                name: document.querySelector('.review__person-name'),
                nationality: document.querySelector('.review__person-nationality')

            },
            review: document.querySelector('.review__text'),
            carousel: {
                controls: {
                    prev: document.querySelector('.review__carousel-prev-button'),
                    next: document.querySelector('.review__carousel-next-button'),
                },
                circles: {
                    buttons:{
                        prev: document.querySelector('.review__carousel-prev'),
                        next: document.querySelector('.review__carousel-next'),
                    },
                    images:{
                        prev: document.querySelector('.review__carousel-prev .review__carousel-small-circle'),
                        current: document.querySelector('.review__carousel-current-image'),
                        next: document.querySelector('.review__carousel-next .review__carousel-small-circle'),
                    }
                }
            }
        }

        const imagesPath = "img/feedback/persons/";

        let currentReview = 1;
        let reviewsCount = 0;

        let persons = [];

        initReviews().then(() => {
            initButtons();
        })

        async function initReviews(){
            return loadJson().then(response => {
                return response.json();
            })
            .then(data => arrayFromJson(data))
            .then(() =>{
                reviewsCount = persons.length;
            })
        }

        function loadJson(){
            return fetch('../json/reviews-base.json');
        }

        function arrayFromJson(data){
            for(element in data){
                persons.push({
                    name: element,
                    nationality: data[element].nationality,
                    image: data[element].image,
                    review: data[element].review,
                })
            }
        }

        function changeReview(){
            reviewsModel.person.photo.src = imagesPath + persons[currentReview].image;
            reviewsModel.person.name.innerHTML = persons[currentReview].name;
            reviewsModel.person.nationality.innerHTML = persons[currentReview].nationality;
            reviewsModel.review.innerHTML = persons[currentReview].review;

            updateImages();
        }

        function nextReview(){
            currentReview = getNextReviewId();
            changeReview();
        }

        function prevReview(){
            currentReview = getPrevReviewId();
            changeReview();
        }

        function getPrevReviewId(){
            let result = currentReview;
            if(currentReview === 0){
                result = reviewsCount - 1;
            }else{
                result = currentReview - 1;
            }
            return result;
        }

        function getNextReviewId(){
            let result = currentReview;
            if(currentReview === reviewsCount - 1){
                result = 0;
            }else{
                result = currentReview + 1;
            }
            return result;
        }

        function initButtons(){
            reviewsModel.carousel.controls.next.addEventListener('click', (e) => {
                e.preventDefault();
                nextReview();
            });
            reviewsModel.carousel.controls.prev.addEventListener('click', (e) => {
                e.preventDefault();
                prevReview();
            })
        }

        function updateImages(){
            reviewsModel.carousel.circles.images.next.src = imagesPath + persons[getNextReviewId()].image;
            reviewsModel.carousel.circles.images.current.src = imagesPath + persons[currentReview].image;
            reviewsModel.carousel.circles.images.prev.src = imagesPath + persons[getPrevReviewId()].image;
        }
    }
)(document)
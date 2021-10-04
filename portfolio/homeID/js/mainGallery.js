(
    function (){
        const slideDir = "img/mainSlider/";
        const slidesCount = 3;
        let currentSlide = 2;

        const sliderImage = document.querySelector('.mainGallery__image');
        const previews = {
            first: document.querySelector('.mainGallery__preview-image._first'),
            second: document.querySelector('.mainGallery__preview-image._second')
        }

        const controls = {
            desktop:{
                next: document.querySelector('.mainGallery__next'),
                prev: document.querySelector('.mainGallery__prev'),
            },
            mobile: {
                next: document.querySelector('.mainGallery__mobile-next'),
                prev: document.querySelector('.mainGallery__mobile-prev'),
            }
        }

        const pagination = document.querySelector('.mainGallery__pagination');
        const progressBar = document.querySelector('.mainGallery__progress-line');

        //code

        changeProgressBar();
        changePagination();
        setButtonListeners();
        addPreviewsListeners();

        //code

        function nextSlide(){

            if(currentSlide === slidesCount){
                currentSlide = 1;
            }else{
                currentSlide++;
            }

            changeSlide();
        }

        function previousSlide(){
            if(currentSlide === 1){
                currentSlide = slidesCount;
            }else{
                currentSlide--;
            }

            changeSlide();
        }

        function changeSlide(){
            sliderImage.src = slideDir + `Slide${currentSlide}-edit.png`;
            changePreviews();
            changePagination();
            changeProgressBar();
        }

        function changePreviews(){
            if(currentSlide == 1){
                previews.first.src = slideDir + `Slide${3}.png`;
                previews.second.src = slideDir + `Slide${2}.png`;
            }
            if(currentSlide == 2){
                previews.first.src = slideDir + `Slide${1}.png`;
                previews.second.src = slideDir + `Slide${3}.png`;
            }
            if(currentSlide == 3){
                previews.first.src = slideDir + `Slide${2}.png`;
                previews.second.src = slideDir + `Slide${1}.png`;
            }
        }

        function setButtonListeners(){

            setPreviousListeners()
            setNextListeners()

            function setNextListeners(){
                controls.desktop.next.addEventListener('click', (e) => {
                    nextSlide();
                })
                controls.mobile.next.addEventListener('click', (e) => {
                    nextSlide();
                })
            }

            function setPreviousListeners(){
                controls.desktop.prev.addEventListener('click', (e) => {
                    previousSlide();
                })
                controls.mobile.prev.addEventListener('click', (e) => {
                    previousSlide();
                })
            }
        }

        function addPreviewsListeners(){
            previews.first.addEventListener('click' , (e) => {
                previousSlide();
            })
            previews.second.addEventListener('click' , (e) => {
                nextSlide();
            })
        }

        function changePagination(){
            pagination.innerHTML = "0" + currentSlide;
        }

        function changeProgressBar(){
            progressBar.style.maxWidth = (currentSlide / slidesCount * 100) + "%";
        }
    }
)(document, window)
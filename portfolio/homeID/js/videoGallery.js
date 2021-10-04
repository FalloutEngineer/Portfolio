(
    function(){
        const controls = {
            prev: document.querySelector('.video-gallery__prev'),
            next: document.querySelector('.video-gallery__next')
        }

        const videosCount = 3;
        let currentVideo = 2;

        const videoDir = "img/videoGallery/";

        const slideImage = document.querySelector('.video-gallery__video');

        const progressBar = document.querySelector('.video-gallery__progress');

        //code

        changeProgress();
        setControlsListeners();

        //code

        function nextSlide(){
            if(currentVideo === videosCount){
                currentVideo = 1;
            }else{
                currentVideo++;
            }

            changeSlide();
        }

        function previousSlide(){
            if(currentVideo === 1){
                currentVideo = videosCount;
            }else{
                currentVideo--;
            }

            changeSlide();
        }

        function changeSlide(){
            slideImage.src = videoDir + `video${currentVideo}.png`;
            changeProgress();
        }

        function changeProgress(){
            progressBar.style.maxWidth = (currentVideo / videosCount * 100) + "%";
        }

        function setControlsListeners(){
            controls.next.addEventListener('click', (e) => {
                e.preventDefault();
                nextSlide();
            });
            controls.prev.addEventListener('click', (e) => {
                e.preventDefault();
                previousSlide();
            })
        }
    }
)(document)
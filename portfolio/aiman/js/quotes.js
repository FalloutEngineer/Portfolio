(
    function(){
        const body = document.querySelector(".say__slider-body");
        const slides = document.querySelectorAll(".say__slider-slide");
        const prev = document.querySelector(".say__prev");
        const next = document.querySelector(".say__next");
        const active = "_active";

        prev.disabled = "true";
        next.disabled = "true";

        updateButtons();

        prev.addEventListener("click", e => {
            let currentId = getCurrentId();
            slides.forEach(slide => {
                slide.classList.remove(active);
            })
            slides[currentId - 1].classList.add(active);

            updateButtons();
        });

        next.addEventListener("click", e => {
            let currentId = getCurrentId();
            slides.forEach(slide => {
                slide.classList.remove(active);
            })
            slides[currentId + 1].classList.add(active);

            updateButtons();
        });

        function updateButtons(){
            let currentId = getCurrentId();
            
            prev.disabled = !isPrevExists(currentId);
            next.disabled = !isNextExists(currentId);
        }

        function getCurrentId(){
            let currentId;
            slides.forEach((slide, id) => {
                if(slide.classList.contains(active)){
                    currentId = id;
                }
            })
            return currentId;
        }

        function isNextExists(currentId){
            if(!isArrayEmpty()){
                let possibleNext = currentId + 1;
                return isIdInArray(possibleNext);
            }
            return false;
        }

        function isPrevExists(currentId){
            if(!isArrayEmpty()){
                let possiblePrev = currentId - 1;
                return isIdInArray(possiblePrev);
            }
            return false;
        }

        function isIdInArray(id){
            return (id <= getArrayLastId()) && (id >= 0);
        }

        function isArrayEmpty(){
            return slides.length == 0;
        }

        function getArrayLastId(){
            return slides.length - 1;
        }
    }()
)
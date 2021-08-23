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
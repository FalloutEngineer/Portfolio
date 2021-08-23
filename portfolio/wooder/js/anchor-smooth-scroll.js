
function smoothAnchors(){
    let anchors = document.querySelectorAll('a[href*="#"]');
    const page = document.querySelector('.page');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) =>{
            e.preventDefault();

            const blockID = anchor.getAttribute('href');
            const target = document.querySelector('' + blockID);

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    })
}

smoothAnchors()
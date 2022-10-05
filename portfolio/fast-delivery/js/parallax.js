(
    function(){
        document.addEventListener('mousemove', parallax);
        const items = document.querySelectorAll('[data-parallax]');
        function parallax(e){
            items.forEach(item => {
                const speed = item.getAttribute('data-parallax');
                const x = (window.innerWidth - e.pageX * speed)/100;
                const y = (window.innerWidth - e.pageY * speed)/100;

                item.style.transform = `translateX(${x}px) translateY(${y}px)` ;
            })

        }
    } 
)()
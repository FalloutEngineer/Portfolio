function regularImageWrapperHeight(){
    const wrappers = document.querySelectorAll('.square-image__wrapper');

    setDependencies(wrappers);

    function setDependencies(wrappers){
        if(wrappers.length > 0){
            wrappers.forEach(wrapper => {
                let image = wrapper.querySelector('.square-image');
                resizeParent(wrapper, image);
                window.addEventListener('resize', () =>{
                    resizeParent(wrapper, image);
                }, true)
            })
        }
    }

    function resizeParent(parent, child){
        parent.style.height = child.offsetWidth + 'px';
    }
}

regularImageWrapperHeight();
'use strict'

const spoilers = document.querySelectorAll('[data-spoiler]');

if(spoilers.length > 0){
    const regularSpoilers = Array.from(spoilers).filter(function (item, index, self) {
        return !item.dataset.spoiler.split(',')[0];
    });
    
    if(regularSpoilers.length > 0){
        initSpoilers(regularSpoilers);
    };

    const mediaSpoilers = Array.from(spoilers).filter(function (item, index, self) {
        return item.dataset.spoiler.split(',')[0];
    });

    if(mediaSpoilers.length > 0){
        const breakpointsArray = [];
        mediaSpoilers.forEach(spoiler =>{
            const params = spoiler.dataset.spoiler;
            const breakpoint = {};
            const paramsArray = params.split(',');
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
            breakpoint.item = spoiler;
            breakpointsArray.push(breakpoint);
        });

        let mediaQueries = breakpointsArray.map(item => {
            return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
        });
        
        mediaQueries = mediaQueries.filter((item, index, self) => {
            return self.indexOf(item) === index;
        });

        mediaQueries.forEach(breakpoint => {
            const paramsArray = breakpoint.split(',');
            const mediaBreakpoint = paramsArray[1];
            const mediaType = paramsArray[2];
            const matchMedia = window.matchMedia(paramsArray[0]);

            const spoilersArray = breakpointsArray.filter(item => {
                return item.value === mediaBreakpoint && item.type === mediaType;
            });

            matchMedia.addEventListener('change', () => {
                initSpoilers(spoilersArray, matchMedia);
            });
            initSpoilers(spoilersArray, matchMedia);
        });
    };
    function initSpoilers(spoilersArray, matchMedia = false){
        spoilersArray.forEach(spoilerBlock => {
            spoilerBlock = matchMedia ? spoilerBlock.item : spoilerBlock;
            if(matchMedia.matches || !matchMedia){
                spoilerBlock.classList.add('_init');
                initSpoilerBody(spoilerBlock);
                spoilerBlock.addEventListener('click', setSpoilerAction);
            }else{
                spoilerBlock.classList.remove('_init');
                initSpoilerBody(spoilerBlock, false);
                spoilerBlock.removeEventListener('click', setSpoilerAction);
            }
        })
    }
    
    function initSpoilerBody(spoilerBlock, hideSpoilerBody = true){
        const spoilerTitles = spoilerBlock.querySelectorAll('[data-spoiler]');
        if(spoilerTitles.length > 0){
            spoilerTitles.forEach(spoilerTitle => {
                if(hideSpoilerBody){
                    spoilerTitle.removeAttribute('tabindex');
                    if(!spoilerTitle.classList.contains('_active')){
                        spoilerTitle.nextElementSibling.hidden = true;
                    } else{
                        spoilerTitle.setAttribute('tabindex', '-1');
                        spoilerTitle.nextElementSibling.hidden = false;
                    }
                }
            })
        }
    }
    function setSpoilerAction(e){
        const el = e.target;
        if(el.hasAttribute('data-spoiler')){
            const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
            const spoilerBlock = spoilerTitle.closest('[data-spoiler]');
            const oneSpoiler = spoilerBlock.hasAttribute('data-one-spoiler') ? true : false;
            if(!spoilerBlock.querySelectorAll('._slide').length){
                if(oneSpoiler && !spoilerTitle.classList.contains('_active')){
                    hideSpoilerBody(spoilerBlock);
                }
                spoilerTitle.classList.toggle('_active');
                _slideToggle(spoilerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        }
    }
    
    function hideSpoilerBody(spoilerBlock){
        const spoilerTitleActive = spoilerBlock.querySelector('[data-spoiler]._active');
        if(spoilerTitleActive){
            spoilerTitleActive.classList.remove('_active');
            _slideUp(spoilerTitleActive.nextElementSibling, 500);
        };
    };
};

let _slideUp = (target, duration=500) => {
    if(!target.classList.contains('_slide')){
        target.classList.add('_slide')
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout( () => {
            target.hidden = true;
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}

let _slideDown = (target, duration=500) => {
    if(!target.classList.contains('_slide')){
        target.classList.add('_slide')
        if(target.hidden){
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
            target.classList.remove('_slide');
        }, duration);
    }
}

let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
}
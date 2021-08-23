(function(window, document){
    //constants

    const DOMLanguageOptions = document.querySelectorAll("#langSwitcher option");

    const languages = getLanguages(DOMLanguageOptions);

    const classes = {
        hidden: '_hidden',
    }

    const pageModel = {
        header: {
            headerMenu: {
                mainSlide: document.querySelector('#main-slide-name'),
                aboutSlide: document.querySelector('#about-slide-name'),
                portfolioSlide: document.querySelector('#portfolio-slide-name'),
            },
            languageMenu: document.querySelector('#langSwitcher'),
        },
        mainSlide: {
            bigHeading: document.querySelector('.main-slide__big-heading'),
            smallHeading: document.querySelector('.main-slide__small-heading'),
            links:{
                github: document.querySelector('#link-github'),
                telegram: document.querySelector('#link-telegram'),
                weblancer: document.querySelector('#link-weblancer'),
            }
        },
        aboutSlide: {
            heading: document.querySelector('.about-slide__heading'),
            shortInfo: {
                age: {
                    heading: document.querySelector('.about-slide__age-heading'),
                    value: document.querySelector('.about-slide__age-value'),
                },
                location: {
                    heading: document.querySelector('.about-slide__location-heading'),
                    value: document.querySelector('.about-slide__location-value'),
                },
                education: {
                    heading: document.querySelector('.about-slide__education-heading'),
                    value: document.querySelector('.about-slide__education-value'),
                    links:{
                        ksu: document.querySelector('#link-ksu'),
                    }
                },
                skills: {
                    html:{
                        name: document.querySelector('.about-slide__skill-span._html'),
                        description: document.querySelector('.about-slide__skill-description._html'),
                    },
                    css:{
                        name: document.querySelector('.about-slide__skill-span._css'),
                        description: document.querySelector('.about-slide__skill-description._css'),
                    },
                    js:{
                        name: document.querySelector('.about-slide__skill-span._js'),
                        description: document.querySelector('.about-slide__skill-description._js'),
                    },
                    wordpress:{
                        name: document.querySelector('.about-slide__skill-span._wordpress'),
                        description: document.querySelector('.about-slide__skill-description._wordpress'),
                    }
                },
                story:{
                    heading: document.querySelector('.about-slide__story-heading'),
                    content: {
                        first: document.querySelectorAll('.about-slide__story-paragraph')[0],
                        second: document.querySelectorAll('.about-slide__story-paragraph')[1]
                    }
                }
            }
        },
        portfolioSlide:{
            filterButtons: {
                all: document.querySelector('.portfolio__all-button'),
                landing: document.querySelector('.portfolio__landing-button'),
                multiPage: document.querySelector('.portfolio__multi-page-button'),
                store: document.querySelector('.portfolio__store-button'),
                forum: document.querySelector('.portfolio__forum-button'),
                singlePage: document.querySelector('.portfolio__spa-button'),
                portal: document.querySelector('.portfolio__portal-button'),
                spa: document.querySelector('.portfolio__spa-button'),
            },
            filter: document.querySelector('.portfolio__filter'),
        }
    }

    //code

    hideUnusedButtons()
    setSites().then(data => {
        initializeLanguageSwitcher()
    })
   
    
    
    
    //fuctions

    function initializeLanguageSwitcher(){
        setLocalization(pageModel.header.languageMenu.value)
            setLinks();
            pageModel.header.languageMenu.addEventListener('change', (e) =>{
                setLocalization(e.target.value);
                setLinks();
            })
        
    }

    function setLocalization(localizaton){
        getLocalizatonJson(localizaton)
        .then(data => fillContent(data))
    }

    function getLanguages(DOMLanguageOptions){
        const languages = {};
        DOMLanguageOptions.forEach(item => {
            languages[item.value] = item.value;
        });
        return languages;
    }

    async function getLocalizatonJson(language){
        return fetch(`./json/content/${language}-content.json`)
        .then(response => response.json())
    }

    async function getLinksJson(){
        return fetch(`./json/links.json`)
        .then(response => response.json())
    }

    async function getCategories(){
        return getSitesJSON()
        .then(sites => {
            const categoriesList = [];

            for(site in sites){
                categoriesList.push(sites[site].type);
            }

            return new Set(categoriesList);
        });
    }

    function hideUnusedButtons(){
        const buttonsElement = document.querySelectorAll('.portfolio-button');

        
        getCategories().then(activeCategories => {
            buttonsElement.forEach(button => {
                const buttonContent = button.innerHTML.toLowerCase()
                if(!activeCategories.has(buttonContent) && buttonContent !== "all"){
                    button.classList.add(classes.hidden)
                }
            });
        })
    }

    async function getSitesJSON(){
        return fetch(`./json/portfolio-sites.json`)
        .then(response => response.json())
    }

    async function setSites(){
        return getSitesJSON()
        .then(data => insertSites(data))
    }

    function insertSites(sites){
        for(site in sites){
            const siteType = sites[site].type;
            let siteNode = document.createElement("div");
            siteNode.classList.add('portfolio__item');
            siteNode.classList.add(`_${siteType}`);

            siteNode.dataset.type = sites[site].type;

            let siteElements = {
                heading: document.createElement('h3'),
                imageWrapper: document.createElement('a'),
                image: document.createElement('img'),
                type: document.createElement('p'),
                validation: document.createElement('a'),
            };

            for(element in siteElements){
                if(element != "image"){
                    siteNode.appendChild(siteElements[element]);
                }
            };
            

            siteElements.heading.classList.add('portfolio__item-heading');
            siteElements.heading.innerHTML = sites[site].name;

            siteElements.imageWrapper.classList.add('portfolio__item-image-wrapper');
            siteElements.imageWrapper.href = sites[site].link;
            
            siteElements.imageWrapper.appendChild(siteElements.image);
            siteElements.image.classList.add('portfolio__item-image');
            siteElements.image.src = sites[site].image;

            siteElements.type.classList.add('portfolio__item-type');
            siteElements.type.innerHTML = sites[site].type;

            siteElements.validation.classList.add('portfolio__item-validation');
            siteElements.validation.href = sites[site].validation;
            siteElements.validation.innerHTML = "Validation";

            pageModel.portfolioSlide.filter.appendChild(siteNode);
        }
    }

    function getDOMLinks(){
        return document.querySelectorAll('a[id^="link-"]')
    }

    function setLinks(){
        getLinksJson()
        .then(data => fillLinks(data, getDOMLinks()));
    }

    function fillLinks(links, domLinks){
        domLinks.forEach(domLink =>{
            const domLinkIdPrefix = domLink.id.split('-')[1];

            for(link in links){
                if(domLinkIdPrefix === link){
                    domLink.href = links[link];
                    break;
                }
            }
        })
    }

    function fillContent(localization){

        fillHeader();
        fillMainSlide();
        fillAboutSlide();
        portfolioFilter();
        fillPortfolio();
        
        function fillHeader(){
            pageModel.header.headerMenu.mainSlide.innerHTML = localization.slideNames.main;
            pageModel.header.headerMenu.aboutSlide.innerHTML = localization.slideNames.about;
            pageModel.header.headerMenu.portfolioSlide.innerHTML = localization.slideNames.portfolio;
        }

        function fillMainSlide(){
            pageModel.mainSlide.bigHeading.innerHTML = localization.mainSlide.bigHeading;
            pageModel.mainSlide.smallHeading.innerHTML = localization.mainSlide.smallHeading;
        }
        
        function fillAboutSlide(){
            pageModel.aboutSlide.heading.innerHTML = localization.aboutSlide.heading;

            fillBio();
            fillSkills();
            fillStory();

            function fillBio(){
                pageModel.aboutSlide.shortInfo.age.heading.innerHTML = localization.aboutSlide.age + ":";
                pageModel.aboutSlide.shortInfo.age.value.innerHTML = (new Date() - new Date(2002, 7, 14, 0, 0, 0, 0)) / (24 * 3600 * 365.25 * 1000) | 0;

                pageModel.aboutSlide.shortInfo.location.heading.innerHTML = localization.aboutSlide.location.heading + ":";
                pageModel.aboutSlide.shortInfo.location.value.innerHTML = localization.aboutSlide.location.value;

                pageModel.aboutSlide.shortInfo.education.heading.innerHTML = localization.aboutSlide.education.heading + ":";
                let educationLink = document.createElement("a");
                pageModel.aboutSlide.shortInfo.education.value.innerHTML = localization.aboutSlide.education.inProgress + ", ";
                pageModel.aboutSlide.shortInfo.education.value.appendChild(educationLink);
                educationLink.innerHTML = localization.aboutSlide.education.value;
                educationLink.id = "link-KSU";
            }

            function fillSkills(){
                pageModel.aboutSlide.shortInfo.skills.html.name.innerHTML = localization.aboutSlide.skills.html.name;
                pageModel.aboutSlide.shortInfo.skills.html.description.innerHTML = localization.aboutSlide.skills.html.description;

                pageModel.aboutSlide.shortInfo.skills.css.name.innerHTML = localization.aboutSlide.skills.css.name;
                pageModel.aboutSlide.shortInfo.skills.css.description.innerHTML = localization.aboutSlide.skills.css.description;

                pageModel.aboutSlide.shortInfo.skills.js.name.innerHTML = localization.aboutSlide.skills.js.name;
                pageModel.aboutSlide.shortInfo.skills.js.description.innerHTML = localization.aboutSlide.skills.js.description;

                pageModel.aboutSlide.shortInfo.skills.wordpress.name.innerHTML = localization.aboutSlide.skills.wordpress.name;
                pageModel.aboutSlide.shortInfo.skills.wordpress.description.innerHTML = localization.aboutSlide.skills.wordpress.description;
            }

            function fillStory(){
                pageModel.aboutSlide.shortInfo.story.heading.innerHTML = localization.aboutSlide.story.heading;
                pageModel.aboutSlide.shortInfo.story.content.first.innerHTML = localization.aboutSlide.story.content.first;
                pageModel.aboutSlide.shortInfo.story.content.second.innerHTML = localization.aboutSlide.story.content.second;
            }
        }
        function fillPortfolio(){
            const sites = document.querySelectorAll('.portfolio__item');

            sites.forEach(site => {
                
                const siteType = site.dataset.type;
                let siteTypeElement = site.querySelector('.portfolio__item-type');

                siteTypeElement.innerHTML = localization.portfolioSlide.categories[siteType];

                site.querySelector('.portfolio__item-validation').innerHTML = localization.portfolioSlide.site.validation;
            })

            const buttonsObject = pageModel.portfolioSlide.filterButtons;
            const localizationObject = localization.portfolioSlide.categories;

            buttonsObject.all.innerHTML = localizationObject.all;
            buttonsObject.landing.innerHTML = localizationObject.landing;
            buttonsObject.multiPage.innerHTML = localizationObject.multiPage;
            buttonsObject.store.innerHTML = localizationObject.store;
            buttonsObject.singlePage.innerHTML = localizationObject.singlePage;
            buttonsObject.forum.innerHTML = localizationObject.forum;
            buttonsObject.spa.innerHTML = localizationObject.SPA;
            buttonsObject.portal.innerHTML = localizationObject.portal;
        }
    }
})(window, document, portfolioFilter)
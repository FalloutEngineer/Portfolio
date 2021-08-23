(function(document, window){
    let a = []

    let newTemplate = {
        imageUrl: 'img/news/new1.png',
        heading: 'Why should cellular IoT be different to other technology rollouts?',
        content: 'Along comes the Internet of Things, and for some reason, the pundits begin to talk about the importance of introducing low-cost modules as an enabler for the market to take off.',
        date: '20-07-2017',
        comments: 54,
        url: '#',
    };

    let newTemplate2 = {
        imageUrl: 'img/news/new2.png',
        heading: 'Homeland Security invests $750k to secure IoT disaster sensors',
        content: 'The Department of Homeland Security (DHS) has announced a $750k investment to develop a solution which bolsters the security of IoT disaster sensors.',
        date: '20-07-2017',
        comments: 11,
        url: '#',
    };

    let newTemplate3 = {
        imageUrl: 'img/news/new3.png',
        heading: 'Why IoT security is so important - and what to do about it',
        content: 'Is there a market hotter than the IoT? As manufacturers connect the internet to everything from baby monitors to automobiles, economic analysts such as Bain and McKinsey predict...',
        date: '20-07-2017',
        comments: 4,
        url: '#',
    };

    a.push(newTemplate);
    a.push(newTemplate2);
    a.push(newTemplate3);

    let js = JSON.stringify(a);
    console.log(js);
})(document, window);
const $html = document.querySelector('html');

window.addEventListener('scroll', function(){
    const htmlBounds = $html.getBoundingClientRect();
    const maxScroll = htmlBounds.height - window.innerHeight;
    console.log(window.scrollY, maxScroll);
    const scrollPercent = window.scrollY/maxScroll * 100;
    console.log(scrollPercent);
    if(scrollPercent > 3){
        anime({
            targets: '.img1',
            opacity: '1'
        });
    }   else if(scrollPercent < 3){
        anime({
            targets: '.img1',
            opacity: '0.5'
        });
    }
    if(scrollPercent > 11){
        anime({
            targets: '.img1',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img2',
            opacity: '1'
        });
    }   else if(scrollPercent < 11, scrollPercent > 3){
        anime({
            targets: '.img1',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img2',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 19){
        anime({
            targets: '.img2',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img3',
            opacity: '1'
        });
    }   else if(scrollPercent < 19, scrollPercent > 11){
        anime({
            targets: '.img2',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img3',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 31){
        anime({
            targets: '.img3',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img4',
            opacity: '1'
        });
    }   else if(scrollPercent < 31, scrollPercent > 19){
        anime({
            targets: '.img2',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img3',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 31){
        anime({
            targets: '.img3',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img4',
            opacity: '1'
        });
    }   else if(scrollPercent < 31, scrollPercent > 19){
        anime({
            targets: '.img3',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img4',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 43){
        anime({
            targets: '.img4',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img5',
            opacity: '1'
        });
    }   else if(scrollPercent < 43, scrollPercent > 31){
        anime({
            targets: '.img4',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img5',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 43){
        anime({
            targets: '.img4',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img5',
            opacity: '1'
        });
    }   else if(scrollPercent < 43, scrollPercent > 31){
        anime({
            targets: '.img4',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img5',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 48){
        anime({
            targets: '.img5',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img6',
            opacity: '1'
        });
    }   else if(scrollPercent < 48, scrollPercent > 43){
        anime({
            targets: '.img5',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img6',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 52){
        anime({
            targets: '.img6',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img7',
            opacity: '1'
        });
    }   else if(scrollPercent < 52, scrollPercent > 48){
        anime({
            targets: '.img6',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img7',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 63){
        anime({
            targets: '.img7',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img8',
            opacity: '1'
        });
    }   else if(scrollPercent < 63, scrollPercent > 52){
        anime({
            targets: '.img7',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img8',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 63){
        anime({
            targets: '.img7',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img8',
            opacity: '1'
        });
    }   else if(scrollPercent < 63, scrollPercent > 52){
        anime({
            targets: '.img7',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img8',
            scale: 1,
            opacity: '0'
        });
    }
    if(scrollPercent > 89){
        anime({
            targets: '.img8',
            scale: 0.5,
            opacity: '0'
        });
        anime({
            targets: '.img9',
            opacity: '1'
        });
    }   else if(scrollPercent < 89, scrollPercent > 63){
        anime({
            targets: '.img8',
            scale: 1,
            opacity: '1'
        });
        anime({
            targets: '.img9',
            scale: 1,
            opacity: '0'
        });
    }
});
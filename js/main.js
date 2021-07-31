const updatePercentage = () => {
    //percent.innerHTML = (tl.progress() *100 ).toFixed();
    timeLine.progress();
};

let timeLine = new TimelineMax({onUpdate: updatePercentage});
let timeLine2 = new TimelineMax();
let timeLine3 = new TimelineMax();
let timeLineHome = new TimelineMax();

const ctrlScroll = new ScrollMagic.Controller();

const animationOnScrolling = () => {
    timeLineHome.from(".cover-text-home", 0.25, {opacity: 1});

    timeLine.from(".cover-text", 0.5, {opacity: 1});
    timeLine.from(".card-4", 0.5, {y:100,opacity: 0});

    timeLine2.from(".cover-text-hobbies", 0.5, {opacity: 1});
    timeLine2.from("#about-me-title", 0.5, {x:100,opacity: 0});
    timeLine2.from(".card-1", .5, {x:-100,opacity: 0});
    timeLine2.from(".card-2", .5, {y:100,opacity: 0});
    timeLine2.from(".card-3", .5, {x:100,opacity: 0});

    timeLine3.from(".card-5", .5, {x:100,opacity: 0});
    timeLine3.from(".card-6", .5, {x:-100,opacity: 0});

    const scene = new ScrollMagic.Scene({
        triggerElement: ".main-content",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin(".main-content")
    .setTween(timeLineHome)
    .addTo(ctrlScroll);

    const scene2 = new ScrollMagic.Scene({
        triggerElement: ".about-me",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin(".about-me")
    .setTween(timeLine)
    .addTo(ctrlScroll);
    
    const scene3 = new ScrollMagic.Scene({
        triggerElement: ".about-me-hobbies",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin(".about-me-hobbies")
    .setTween(timeLine2)
    .addTo(ctrlScroll);
    
    const scene4 = new ScrollMagic.Scene({
        triggerElement: ".knowledge",
        triggerHook: "onLeave",
        duration: "100%"
    })
    .setPin(".knowledge")
    .setTween(timeLine3)
    .addTo(ctrlScroll);
};

const createParticles = () => {
    particlesJS('particles-js', {
        particles: {
        color: '#fff',
        shape: 'edge', // "circle", "edge" or "triangle"
        opacity: 1,
        size: 3,
        size_random: true,
        nb: 20,
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: '#fff',
            opacity: 1,
            width: 1,
            condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
        },
        interactivity: {
        enable: true,
        mouse: {
            distance: 300
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab',
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
            enable: true,
            mode: 'push', // "push" or "remove"
            nb: 4
            }
        }
        },
        /* Retina Display Support */
        retina_detect: true
    });
}

const loadFunction = () => {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)){
            console.log('Mobile');
    }else{
        createParticles();
    }
    
    animationOnScrolling();
}

window.onload = loadFunction;
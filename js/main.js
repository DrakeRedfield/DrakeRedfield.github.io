const loadFunction = () => {
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

window.onload = loadFunction;
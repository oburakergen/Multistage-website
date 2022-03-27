
export default {
    extraPlugins: {
        scrollTo: true,
        scrollTrigger: true
    },
    extraEases: {},
    expoScaleEase: true,
    clubPlugins: {},
    registerEffect: [
        {
            name: 'fadeOut',
            defaults: {
                y: -100,
                opacity: 0,
                duration: 2
            },
            effect: (targets, config) => {
                // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
                // eslint-disable-next-line no-undef
                return gsap.to(targets, {
                    y: config.y,
                    opacity: config.opacity,
                    duration: config.duration
                });
            }
        },
        {
            name: 'fadeIn',
            defaults: {
                y: -100,
                opacity: 0,
                duration: 2
            },
            effect: (targets, config) => {
                // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
                // eslint-disable-next-line no-undef
                return gsap.to(targets, {
                    y: config.y,
                    opacity: config.opacity,
                    duration: config.duration
                });
            }
        },
        {
            name: 'fadeInOut',
            defaults: {
                y: -100,
                opacity: 0,
                duration: 2
            },
            effect: (targets, config) => {
                // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
                // eslint-disable-next-line no-undef
                return gsap.to(targets, {
                    y: config.y,
                    opacity: config.opacity,
                    duration: config.duration
                });
            }
        },
        {
            name: 'fadeSlideTo',
            defaults: {
                x: 300,
                opacity: 0.5,
                duration: 2,
                yoyo: true,
                repeat: -1
            },
            effect: (targets, config) => {
                // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
                // eslint-disable-next-line no-undef
                return gsap.to(targets, {
                    x: config.x,
                    opacity: config.opacity,
                    duration: config.duration,
                    yoyo: config.yoyo,
                    repeat: config.repeat
                });
            }
        },
        {
            name: 'fadeSlideFrom',
            defaults: {
                x: 300,
                opacity: 0.5,
                duration: 2,
                yoyo: true,
                repeat: -1
            },
            effect: (targets, config) => {
                // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
                // eslint-disable-next-line no-undef
                return gsap.to(targets, {
                    x: config.x,
                    opacity: config.opacity,
                    duration: config.duration,
                    yoyo: config.yoyo,
                    repeat: config.repeat
                });
            }
        },
        {
            name: 'fadeSlideFromTo',
            defaults: {
                x: 300,
                opacity: 0.5,
                duration: 2,
                yoyo: true,
                repeat: -1
            },
            effect: (targets, config) => {
                // If you use eslint, add comments to disable and avoid errors for no-undef 'gsap'
                // eslint-disable-next-line no-undef
                return gsap.to(targets, {
                    x: config.x,
                    opacity: config.opacity,
                    duration: config.duration,
                    yoyo: config.yoyo,
                    repeat: config.repeat
                });
            }
        }
    ],
    registerEase: []
};

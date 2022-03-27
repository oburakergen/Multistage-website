<template>
  <div v-if="preloader" class="preloader">
    <div ref="preloaderAfter" class="preloader-after" />
    <div ref="preloaderBefore" class="preloader-before" />
    <div ref="preloaderBlock" class="preloader-block">
      <div ref="title" class="title" v-text="siteName" />
      <div ref="words" class="preloader-description" v-bind="$attrs">
        <span> we are </span>
        <span> creative </span>
        <span> collective </span>
      </div>
      <div ref="percent" class="percent" v-text="counter" />
      <div ref="loading" class="loading">
        loading...
      </div>
    </div>
    <div ref="preloader-bar" class="preloader-bar">
      <div ref="preloaderProgress" class="preloader-progress" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'Preloader',
    data () {
        return {
            siteName: '',
            counter: 0,
            windowHeight: 1000,
            preloader: true
        };
    },
    created () {
        this.siteName = process.env.APP_NAME;
    },
    mounted () {
        const self = this;
        const spans = document.querySelectorAll('.preloader-description span');
        const timeLine = this.$gsap.timeline();

        this.$nextTick(() => {
            window.addEventListener('resize', () => {
                self.windowHeight = window.innerHeight;
            });
            timeLine
                .to('.preloader-progress', {
                    transformOrigin: '100% 50%',
                    width: '100%',
                    duration: 2,
                    onUpdate () {
                        if (self.counter <= 98) {
                            self.counter += 1;
                        } else {
                            self.counter = 99;
                        }
                    },
                    onComplete () {
                        setTimeout(() => {
                            self.counter = 100;
                            self.$gsap.to('.preloader .title', {
                                y: '-75%',
                                fontSize: '4vw',
                                opacity: 0.8,
                                duration: 1.2
                            });
                            self.$gsap.to('.preloader-bar', {
                                left: '100%',
                                duration: 1.2
                            });
                            self.$gsap.to('.percent', {
                                autoAlpha: 0,
                                duration: 1.2
                            });
                            self.$gsap.to('.loading', {
                                y: '50%',
                                autoAlpha: 0,
                                duration: 1.2
                            });
                        }, 250);
                    }
                })
                .to(spans[0], 1, { transformOrigin: '100% 50%', opacity: 1 })
                .to(spans[1], 1, {
                    rotation: 0,
                    y: 20,
                    opacity: 1,
                    top: '20px',
                    padding: '0px, 20px'
                })
                .to(spans[2], 1, {
                    transformOrigin: '100% 50%',
                    opacity: 1
                });
            timeLine.to('.preloader-block', {
                opacity: 0,
                onComplete () {
                    setTimeout(() => {
                        self.$gsap.to('.preloader-before', {
                            y: '-100%',
                            delay: 1
                        });
                        self.$gsap.to('.preloader-after', {
                            y: '100%',
                            delay: 1
                        });
                    }, 100);
                    setTimeout(() => {
                        self.preloader = false;
                    }, 10000);
                }
            });
            // NextTick last Element
        });
    },
    methods: {}
};
</script>

<style scoped></style>

<template>
  <div class="lap-slider">
    <div class="lap-root-slider">
      <div
        v-swiper:mySwiper="swiperOption"
        class="slide-inner"
      >
        <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);">
          <div v-for="(banner,index) in data" :key="index" class="swiper-slide">
            <div class="image-container">
              <div
                class="image-bg cover-bg"
                :style="{ backgroundImage: 'url(' + banner.img + ')' }"
              >
                <img :src="banner.img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lap-slider-content">
      <div v-for="(item,index) in data" :key="index" class="slide-content">
        <div class="slide-content-inner">
          <div class="title-text-header">
            <div class="title-text-header-inner">
              <b-link :href="item.link" class="effect-ajax" v-text="item.text" />
            </div>
          </div>

          <p v-text="item.description" />
          <div class="link-slider">
            <b-link :href="item.link" class="effect-ajax">
              <span>View Case</span>
            </b-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            data: [
                {
                    img: '/img/1.jpg',
                    text: 'Lorem İpsum',
                    link: '/',
                    description: 'Sometimes, we need to check the time, wondering when our work\n' +
                      'or meeting will finish, without getting caught by others.'
                },
                {
                    img: '/img/2.jpg',
                    text: 'Lorem İpsum',
                    link: '/',
                    description: 'Sometimes, we need to check the time, wondering when our work\n' +
                    'or meeting will finish, without getting caught by others.'
                },
                {
                    img: '/img/3.jpg',
                    text: 'Lorem İpsum',
                    link: '/',
                    description: 'Sometimes, we need to check the time, wondering when our work\n' +
                    'or meeting will finish, without getting caught by others.'
                }
            ],
            swiperOption: {
                loop: !0,
                effect: 'fade',
                slidesPerView: 1,
                centeredSlides: !0,
                spaceBetween: 0,
                paginationClickable: !0,
                autoplay: {
                    delay: 1e4
                },
                pagination: {
                    el: '.slider-paginations',
                    clickable: !0
                }
            }
        };
    },
    computed: {
        classObject () {
            return {
                asd: false
            };
        }
    },
    mounted () {
        console.log('Current Swiper instance object', this.mySwiper);
    },
    methods: {
        onSwiperRedied (t) {
            console.log('Swiper redied!', t);
        },
        onSwiperClickSlide (t, e) {
            console.log('Swiper click slide!', e);
        }
    }
};
</script>

<style scoped>

</style>

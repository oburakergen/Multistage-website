import gsapOptions from './gsap.options';
import langOptions from './lang.options';

export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - agency',
        title: 'agency',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { hid: 'og:title', name: 'og:title', content: 'Laraplay | Dashboard' },
            { hid: 'og:locale', name: 'og:locale', content: 'tr_TR' },
            { hid: 'og:url', name: 'og:url', content: process.env.BASE_URL },
            { hid: 'og:type', name: 'og:type', content: 'website' },
            { hid: 'og:description', name: 'og:description', content: 'Laraplay Admin Dashboard' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        script: [
            { hid: 'lap.js', src: '/lap.js', type: 'text/javascript' }
        ],
        noscript: [
            { innerHTML: 'Body No Scripts', body: true }
        ],
        link: [
            { rel: 'icon', type: 'img/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/axios' },
        { src: '~/plugins/theme.client' },
        { src: '~/plugins/i18n' },
        { src: '~/plugins/swiper.client', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://composition-api.nuxtjs.org/getting-started/setup
        '@nuxtjs/composition-api/module',
        'nuxt-gsap-module',
        '@nuxt/image'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/bootstrap
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        '@nuxtjs/dotenv',
        '@nuxtjs/i18n',
        'bootstrap-vue/nuxt'
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: process.env.API_URL
    },
    gsap: gsapOptions,
    i18n: langOptions,
    bootstrapVue: {
        icons: true
    },

    publicRuntimeConfig: {
        baseURL: process.env.BASE_URL,
        appName: process.env.APP_NAME,
        appTimezone: process.env.APP_TIMEZONE
    },
    privateRuntimeConfig: {
        apiUrl: process.env.API_URL
    },

    router: {
    // turns off prefetching (since the default is true)
        linkPrefetchedClass: 'preloaded',
        linkActiveClass: 'active',
        prefetchLinks: false,
        middleware: 'user-agent'
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            name: 'Laraplay Admin'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
        filenames: {
            chunk: ({ isDev }) => (isDev ? '[name].js' : '[id].[contenthash].js')
        },
        minifyCSS: true,
        minifyJS: true,
        babel: {
            compact: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        extend (config, { isClient }) {
            if (isClient) {
                config.devtool = 'source-map';
            }
        }
    }
};

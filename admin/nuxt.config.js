export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        htmlAttrs: {
            lang: 'tr_TR',
            amp: true
        },
        titleTemplate: '%s - admin',
        title: 'admin',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            { hid: 'og:title', name: 'og:title', content: 'Laraplay | Dashboard' },
            { hid: 'og:locale', name: 'og:locale', content: 'tr_TR' },
            { hid: 'og:url', name: 'og:url', content: process.env.BASE_URL || 'http://localhost:3000' },
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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    loading: {
        color: '#0D47A1',
        height: '2px'
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/node_modules/flag-icon-css/css/flag-icon.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~/plugins/Axios', mode: 'client' },
        { src: '~/plugins/Theme', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/dotenv'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content'
    ],

    publicRuntimeConfig: {
        baseURL: process.env.NODE_ENV === 'production'
            ? (process.env.API_URL)
            : process.env.DEV_URL

    },
    privateRuntimeConfig: {
        apiSecret: process.env.API_SECRET
    },

    router: {
    // turns off prefetching (since the default is true)
        linkPrefetchedClass: 'preloaded',
        linkActiveClass: 'active',
        prefetchLinks: false,
        middleware: 'user-agent'
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            name: 'Laraplay Admin',
            lang: 'tr_TR'
        }
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        treeShake: true,
        optionsPath: './vuetify.options.js',
        options: {
            customProperties: true
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
};

class Theme {
    constructor (laraplay, isDev, vuetify) {
        this.lap = laraplay;
        this.development = () => {
            const dev = (isDev === 'development');

            if (dev) {
                this.lap.storage.localStorage.set({
                    name: 'lap-storage-dev',
                    value: dev
                });
            }

            return dev;
        };
        this.browser = this.lap.storage.localStorage.get('admin-site-browser') || 'desktop';
        this.vuetify = vuetify;
        this.check = typeof vuetify === 'object';
    }

    get getColour () {
        let theme = 'light';

        if (this.vuetify.theme.dark) {
            theme = 'dark';
        }

        return this.lap.storage.localStorage.get('admin-site-theme') || theme;
    }

    setColour (value) {
        const color = value || this.getColour;
        const bodyElement = document.querySelector('body');

        bodyElement.classList.add(color);

        this.vuetify.theme.dark = color === 'dark';

        Lap.storage.localStorage.set({
            name: 'admin-site-theme',
            value: color
        });
    }

    get getLang () {
        return (this.vuetify.lang || {}).current || 'tr_TR';
    }

    lang (value) {
        let lang = value || this.getLang;

        if (lang.includes('tr')) {
            lang = 'tr_TR';
        } else {
            lang = 'en_US';
        }

        Lap.storage.localStorage.set({
            name: 'admin-site-lang',
            value: lang
        });
    }

    searchFocus () {
        return document.getElementById('search').focus();
    }

    get device () {
        let device = '';

        if (this.lap.browser.isTablet()) {
            device = 'tablet';
        } else if (this.lap.browser.isMobile()) {
            device = 'mobile';
        } else {
            device = 'desktop';
        }

        this.lap.storage.localStorage.set({
            name: 'admin-site-device',
            value: device
        });

        return device;
    }
}

// eslint-disable-next-line no-unused-expressions
!(function (lap) {
    setTimeout(() => {
        window.theme = new Theme(lap, process.env.NODE_ENV, ((document.querySelector('#__nuxt') || {})
            .__vue__ || {}).$vuetify);
        window.theme.development();
        window.theme.lang();
        window.theme.setColour();

        this.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.key === '/') {
                window.theme.searchFocus();
            }
        });

        const colour = window.theme.getColour;

        window.theme.setColour(colour);
    }, 500);
}(Lap));

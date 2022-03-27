
class ThemeClient {
    constructor (isDev) {
        this.development = () => {
            const dev = (isDev === 'development');

            if (dev) {
                window.Lap.storage.localStorage.set({
                    name: 'lap-storage-dev',
                    value: dev
                });
            }

            return dev;
        };
        this.browser = window.Lap.storage.localStorage.get('admin-site-browser') || 'desktop';
    }

    get getLang () {
        return 'tr_TR';
    }

    lang (value) {
        let lang = value || this.getLang;

        if (lang.includes('tr')) {
            lang = 'tr_TR';
        } else {
            lang = 'en_US';
        }

        Lap.storage.localStorage.set({
            name: 'agency-site-lang',
            value: lang
        });
    }

    get device () {
        let device = '';

        if (Lap.browser.isTablet()) {
            device = 'tablet';
        } else if (Lap.browser.isMobile()) {
            device = 'mobile';
        } else {
            device = 'desktop';
        }

        Lap.storage.localStorage.set({
            name: 'agency-site-device',
            value: device
        });

        return device;
    }

    scrollbar () {
        // const scrollbar1 = window.Scrollbar;
        //
        // const a = document.querySelector('#lap-scrollbar');
    }
}

(function () {
    window.theme = new ThemeClient();
    window.theme.lang();
}(Lap));

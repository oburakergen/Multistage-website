/*
 * Copyright (c) 2021/12/4 Burak ERGEN
 */

import colors from 'vuetify/es5/util/colors';
import tr from '~/locales/tr';
import en from '~/locales/en';

export default {
    lang: {
        locales: {
            tr,
            en
        },
        fallbackLocale: {
            // eslint-disable-next-line
      'tr': 'tr_TR',
            // eslint-disable-next-line
      'en': 'en_US',
        },
        current: 'tr'
    },
    customVariables: ['~/assets/variables.scss'],
    ltr: true,
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#3f51b5',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c'
            },
            dark: {
                primary: colors.blue.darken2,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3,
                greenlight: colors.green.lighten5
            }
        }
    }
};

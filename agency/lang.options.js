/*
 * Copyright (c) Burak ERGEN 2022.
 */
import tr from './locales/tr';
import en from './locales/en';

export default {
    baseUrl: process.env.BASE_URL,
    locales: [
        { code: 'en', iso: 'en-US' },
        { code: 'tr', iso: 'tr-TR' }
    ],
    defaultLocale: 'tr',
    vueI18n: {
        fallbackLocale: 'tr',
        messages: {
            en, tr
        }
    }
};

/*
 * Copyright (c) 2021/8/20 Burak ERGEN
 */
import tr from 'vuetify/es5/locale/tr';
import table1 from './componets/tr/table';
import leftbar from '@/locales/theme/tr/leftbar';

export default {
    ...tr,
    ...table1,
    ...leftbar,
    userCart: {
        time: {
            day: 'Günlük',
            week: 'Haftalık',
            month: 'Aylık'
        }
    }

};

import en from 'vuetify/es5/locale/en';
import table1 from './componets/en/table';
import leftbar from './theme/en/leftbar';

export default {
    ...en,
    ...table1,
    ...leftbar,
    userCart: {
        time: {
            day: 'Daily',
            week: 'Weekly',
            month: 'Monthly'
        }
    }
};

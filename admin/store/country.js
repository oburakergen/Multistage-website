/*
 * Copyright (c) Burak ERGEN 2022.
 */

export const state = () => {
    return {
        countries: {}
    };
};

export const actions = {
    async getCountryList ({ commit }) {
        await this.$axios.$get('/address/country/all').then((response) => {
            commit('setCountryData', response || {});

            return response;
        }).catch((e) => {
            if (typeof Lap === 'object') {
                return Lap.errorBag._send({
                    className: 'response',
                    methodName: 'get',
                    stack: e
                });
            }
        });
    },

    async removeCountry ({ commit }, data) {
        await this.$axios.$delete('/address/country/delete', data).then((response) => {
            commit('setCountryData', response || {});

            return response;
        }).catch((e) => {
            console.log('as');

            if (typeof Lap === 'object') {
                return Lap.errorBag._send({
                    className: 'response',
                    methodName: 'get',
                    stack: e
                });
            }
        });
    }
};

export const mutations = {
    setCountryData (state, data) {
        state.countries = data.data;
    }
};

export const getters = {

};

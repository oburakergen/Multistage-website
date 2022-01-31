/*
 * Copyright (c) 2021/8/22 Burak ERGEN
 */

export const state = () => {
    return {
        leftlist: {},
        path: '/'
    };
};

export const actions = {
    async getLeftBarData ({ commit, getters }, params) {
        commit('setPath', params.path.split('/edit/').filter(Boolean).shift());

        await this.$axios.$get('/admin/theme/leftbar.js').then((response) => {
            commit('setLeftBarData', response);

            return response;
        }).catch((e) => {
            if (typeof Lap === 'object') {
                return Lap.errorBag._send({
                    className: 'response',
                    methodName: 'get',
                    stack: e
                });
            }

            return {
                message: e.message,
                statusCode: e.response.status
            };
        });
    }
};

export const mutations = {
    setLeftBarData (state, data) {
        state.leftlist = data;
    },
    setPath (state, data) {
        state.path = data;
    }
};

export const getters = {
    leftBar: (state) => {
        const data = ((state.leftlist || {}).data || []).map((item) => {
            const key = item.items.findIndex((link) => {
                return link.to === state.path;
            });

            item.active = key !== -1;

            return item;
        }, []);

        return [...data];
    }
};

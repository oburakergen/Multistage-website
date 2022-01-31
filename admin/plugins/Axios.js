/*
 * Copyright (c) 2021/10/4 Burak ERGEN
 */

export default function ({ $axios, store, error }) {
    $axios.defaults.baseURL = 'http://localhost:5000/';
    $axios.defaults.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest'
    };

    $axios.onRequest((config) => {
        if (config.method.toUpperCase() !== 'GET') {
            config.headers['x-csrf-token'] = store.state._csrf || '';
        }
    });

    $axios.onError((error) => {
        if (error.response.status) {
            console.log(error.message, Lap);
        }

        return Promise.resolve(false);
    });
}

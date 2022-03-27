/*
 * Copyright (c) 2021/10/4 Burak ERGEN
 */

export default function ({ $axios, $config, store }) {
    $axios.defaults.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, X-Requested-With',
        'Access-Control-Expose-Headers': 'X-Auth-Token, X-Auth-UUID, X-Auth-Permissions, X-Path-Content',
        'Allow': 'GET'
    };

    $axios.onRequest((config) => {
        if (config.method.toUpperCase() !== 'GET') {
            $axios.setToken(store.state._csrf, 'x-csrf-token');
        }
    });

    $axios.onError((error) => {
        if (error.response.status) {
            console.log(error.message);
        }

        return Promise.resolve(false);
    });
}

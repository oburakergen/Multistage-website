/*
 * Copyright (c) 2021/12/4 Burak ERGEN
 */

module.exports = {
    apps: [
        {
            name: 'MyAdminTemplate',
            exec_mode: 'cluster',
            instances: 'max', // Or a number of instances
            script: './node_modules/nuxt/bin/nuxt.js',
            args: 'start'
        }
    ]
};

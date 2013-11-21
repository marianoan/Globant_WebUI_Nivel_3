/*
* @Author: Mariano Gonzalez
*/
require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        jqueryui: {
            exports: "$",
            deps: ['jquery']
        },
        jquerymobile: {
            deps: ['jquery']
        },
        tooltipster: {
            exports: "$",
            deps: ['jquery']
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    baseUrl: 'js',
    paths: {
        jquery: 'jquery-1.7.1.min',
        jqueryui: 'jquery-ui-1.10.3.custom.min',
        jquerymobile: 'jquery.mobile-1.3.2.min',
        tooltipster: 'jquery.tooltipster.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        localStorage: 'backbone.localStorage'
    }

});



require([
    'router',
], function (Router) {
    
    new Router();
});

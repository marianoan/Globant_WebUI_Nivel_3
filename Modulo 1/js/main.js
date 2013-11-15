﻿/*
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
        jquery: 'jquery.min',
        jqueryui: 'jquery-ui-1.10.3.custom.min',
        tooltipster: 'jquery.tooltipster.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        localStorage: 'backbone.localStorage'
    }

});

require([

  //Load our app module and pass it to our definition function
  'router',
], function (Router) {
    //The "app" dependency is passed in as "App"
    new Router();
});
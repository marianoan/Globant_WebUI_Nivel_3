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
        jquerymobile: 'jquery.mobile-1.1.0-rc.1.min',
        tooltipster: 'jquery.tooltipster.min',
        underscore: 'underscore-min',
        backbone: 'backbone-min',
        localStorage: 'backbone.localStorage'
    }

});

require([
    'jquery',
    'backbone',
    'router',
], function ($, Backbone,Router) {
    
    $(document).on("mobileinit",
		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function () {
		    // Prevents all anchor click handling including the addition of active button state and alternate link bluring.
		    $.mobile.linkBindingEnabled = false;

		    // Disabling this will prevent jQuery Mobile from handling hash changes
		    $.mobile.hashListeningEnabled = false;
		}
	)

    /*require(["jquerymobile"], function () {
        // Instantiates a new Backbone.js Mobile Router
        this.router = new Router();
    });*/
    
    new Router();
});
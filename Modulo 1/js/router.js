define([
    'jquery',
    'jquerymobile',
    'backbone',
    'app'
], function ($, jquerymobile, Backbone, App) {

   return Backbone.Router.extend({
        routes: {
            'cart': 'cart',
             '': 'index'
        },

        initialize: function () {
            app = new App()
            Backbone.history.start();

        },

        cart: function () {
           //$.mobile.changePage("#cart", { reverse: false, changeHash: false });
           app.setCartView();
           app.collection.customFilter();
           
       },

        index: function () {
            //$.mobile.changePage("#", { reverse: false, changeHash: false });
            app.collection.fetch();
            app.setDefaultView();
           
       }
   });

});


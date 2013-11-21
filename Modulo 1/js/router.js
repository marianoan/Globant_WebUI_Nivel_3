define([
    'jquery',
    'backbone',
    'app'
], function ($, Backbone, App) {

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
           app.setCartView();
           app.collection.customFilter();
           
       },

        index: function () {
            //$.mobile.changePage("#cart", { reverse: false, changeHash: false });
            //$.mobile.loading("show");
            app.collection.fetch();
            app.setDefaultView();
           
       }
    });

});


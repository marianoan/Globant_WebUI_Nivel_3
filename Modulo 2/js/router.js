define([
    'backbone',
    'app'
], function (Backbone, App) {

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
           app.setDefaultView();
           app.collection.fetch();
       }
    });

});
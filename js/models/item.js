define([
  'underscore',
  'backbone'
], function (_, Backbone) {

    var Item = Backbone.Model.extend({
        

        defaults: {
            id: 0,
            title: 'title',
            price: '0.00',
            publisher: 'publisher',
            cover: 'http://placehold.it/370x75',
            country: 'country',
            argument: 'lorem ipsum dolor',
            printedBy: 'printedBy',
            authors: 'authors',
            inCart: true
        },

        toggle: function () {
            this.save({
                inCart: !this.get('inCart')
            });
        }
    });
    // Return the model for the module
    return Item;
});

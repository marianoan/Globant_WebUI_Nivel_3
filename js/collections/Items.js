define([
  'underscore',
  'backbone',
  'localStorage',
  'models/Item',
  'views/ItemView'
], function (_, Backbone, localStorage, Item, ItemView) {

    var Items = Backbone.Collection.extend({
        model: Item,

        localStorage: new localStorage('shoppingList'),

        url: "data.json",

        nextOrder: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('order') + 1;
        },

        inCart: function () {
            return this.filter(function (item) {
                return item.get('inCart');
            });
        },

    });
    // You don't usually return a collection instantiated
    return Items;
});

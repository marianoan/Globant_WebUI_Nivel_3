/*
* @Author: Mariano Gonzalez
*/

define([
  'jquery',
  'underscore',
  'backbone',
  'models/Item',
  'text!ItemTemplate.html'
], function ($, _, Backbone, Item, ItemTemplate) {

    var ItemView = Backbone.View.extend({

        tagName: 'article',
        className: 'module width_half',

        //Items events
        events: {
            'click .addButton': 'addToCart',
            'click #modifyButton': 'modifyQuantity',
            'click #deleteButton': 'removeFromCart'
        },

        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
            this.template = _.template(ItemTemplate);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$alert = $('#alert')
            this.$inCartIcon = this.$('#inCartIcon');
            this.$modifyButton = this.$('#modifyButton');
            this.$deleteButton = this.$('#deleteButton');
            this.$addButton = this.$('.addButton');
            this.$quantity = this.$('#quantity');
            return this;
        },



        //Destroy model
        clear: function () {
            this.model.destroy();
        },

       

        //add the item to cart
        addToCart: function () {
            var quantity = this.$('#quantity').val().trim();
            this.$alert.html('The item has been added to the cart');
            this.$alert.show();
            this.$inCartIcon.show();
            this.$modifyButton.show();
            this.$deleteButton.show();
            this.$addButton.hide();
            this.model.save({ quantity: quantity });
            this.model.toggle();
            Backbone.history.navigate('#');
        },

        //Modify quantity of items purchased
        modifyQuantity: function () {
            var quantity = this.$('#quantity').val().trim();
            this.model.save({ quantity: quantity });
            this.$alert.html('The quantity has been updated');
            this.$alert.show();
            Backbone.history.navigate('#');
        },

        //Remove item from cart
        removeFromCart: function () {
            this.model.toggle();
            this.model.save({ quantity: 0 });
            this.$quantity.val('1');
            //window.app.collection.customFilter();
            this.$alert.html('The item has removed from your cart');
            this.$alert.show();
            this.$inCartIcon.hide();
            this.$modifyButton.hide();
            this.$deleteButton.hide();
            this.$addButton.show();
            Backbone.history.navigate('#');
        }


    });

    return ItemView;
});



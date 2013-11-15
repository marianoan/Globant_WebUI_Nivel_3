/*
* @Author: Mariano Gonzalez
*/

define([
  'tooltipster',
  'underscore',
  'backbone',
  'models/Item',
  'text!CartItemTemplate.html'
], function ($, _, Backbone, Item, ItemTemplate) {

    var ItemView = Backbone.View.extend({

        tagName: 'article',
        

        //Items events
        events: {
            'click #alert': 'closeAlert',
            'click #modifyButton': 'modifyQuantity',
            'click #deleteButton': 'removeFromCart'
        },

        initialize: function () {
            //console.log('cart');
            this.listenTo(this.model, 'destroy', this.remove);
            this.template = _.template(ItemTemplate);
        },

        //Renders the item
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$alert = this.$('#alert')
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

        //Close the alert
        closeAlert: function () {
            this.$alert.hide();
        },


        //Modify quantity of items purchased
        modifyQuantity: function () {
            var quantity = this.$('#quantity').val().trim();
            this.model.save({ quantity: quantity });
            this.$alert.html('The quantity has been updated');
            this.$alert.show();
        },

        //Remove item from cart
        removeFromCart: function () {
            this.model.toggle();
            this.model.save({ quantity: 0 });
            this.$quantity.val('1');
            window.app.collection.customFilter();
            this.$alert.html('The item has removed from your cart');
            this.$alert.show();
            this.$inCartIcon.hide();
            this.$modifyButton.hide();
            this.$deleteButton.hide();
        }


    });

    return ItemView;
});



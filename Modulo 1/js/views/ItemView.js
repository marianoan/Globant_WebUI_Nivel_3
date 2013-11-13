define([
  'jquery',
  'underscore',
  'backbone',
  'models/Item',
  'text!ItemTemplate.html'
], function ($, _, Backbone, Item, ItemTemplate) {

    var ItemView = Backbone.View.extend({

        tagName: 'article',
        

        // Los eventos de cada item.
        events: {
            'click .addButton': 'addToCart',
            'click #alert': 'closeAlert',
            'click #modifyButton': 'modifyQuantity',
            'click #deleteButton': 'removeFromCart'
        },

        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
            this.template = _.template(ItemTemplate);
            
            
        },

        //Renderea todo el item.
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.$alert = this.$('#alert')
            this.$inCartIcon = this.$('#inCartIcon');
            this.$modifyButton = this.$('#modifyButton');
            this.$deleteButton = this.$('#deleteButton');
            this.$addButton = this.$('.addButton');
            return this;
        },



        //Borra el item.
        clear: function () {
            this.model.destroy();
        },

        closeAlert: function () {
            this.$alert.hide();
        },

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
        },

        modifyQuantity: function () {
            var quantity = this.$('#quantity').val().trim();
            this.model.save({ quantity: quantity });
            this.$alert.html('The quantity has been updated');
            this.$alert.show();
        },

        removeFromCart: function () {
            this.model.toggle();
            this.model.save({ quantity: 0 });
            this.$alert.html('The item has removed from your cart');
            this.$alert.show();
            this.$inCartIcon.hide();
            this.$modifyButton.hide();
            this.$deleteButton.hide();
            this.$addButton.show();
        }


    });

    return ItemView;
});



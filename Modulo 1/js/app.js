/*
* @Author: Mariano Gonzalez
*/
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/Items',
  'views/ItemView',
  'models/Item',
  'router'
], function ($, _, Backbone, Items, ItemView, Item, Router) {

    return Backbone.View.extend({

        el: '#shoppingCartApp',

        //View events
        events: {
        },

        //Initialize the view
        initialize: function () {
            this.collection = new Items();
            this.resetItems();

            this.$itemsList = this.$('#itemsList');
            this.$titleApp = this.$('#titleApp');
            this.$secondary_bar = this.$('#secondary_bar');

            this.setDefaultView();
            
            this.addItem('Watchmen', 200, 'DC Comics', 'http:\/\/kalafudra.files.wordpress.com/2009/03/watchmen-cover.jpg', 'Spain', 'Lebowski ipsum this is quite a pad you got here, man. Completely unspoiled. Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. We ve got a man down, Dude. Quis elit blandit fringilla a ut. I m saying, Cynthias Pomeranian. I m looking after it while Cynthia and Marty Ackerman are in Hawaii. Turpis praesent felis ligula, malesuada suscipit malesuada non, ultrices non. Whose toe was it, Walter? Urna sed orci ipsum, placerat id condimentum rutrum, rhoncus ac lorem aliquam placerat.', 'ECC Ediciones', 'Alan Moore, Dave Gibbons');
            this.addItem('V of Vendetta', 250, 'DC Comics', 'http:\/\/www.scifinow.co.uk/wp-content/uploads/2010/04/vendetta.jpg', 'Spain', 'Theyre nihilists. Posuere neque, at dignissim magna ullamcorper in aliquam sagittis massa ac tortor ultrices faucibus. Leads, yeah. Ill just check with the boys down at the Crime Lab. Theyve assigned four more detectives to the case, got us working in shifts. Curabitur eu mi sapien, ut. Im not Mr. Lebowski; youre Mr. Lebowski. Im the Dude. Ultricies ipsum morbi eget risus nulla nullam vel nisi enim, vel auctor.', 'ECC Ediciones', 'Alan Moore, David Lloyd');

            this.listenTo(this.collection, 'add', this.addOne);
            this.listenTo(this.collection, 'reset', this.addAll);


            this.collection.fetch();

            this.addAll();
        },

        //Atributos para un nuevo contacto
        newAttributes: function (title, price, publisher, cover, country, argument, printedBy, authors) {
            return {
                id: this.collection.nextOrder(),
                title: title,
                price: price,
                publisher: publisher,
                cover: cover,
                country: country,
                argument: argument,
                printedBy: printedBy,
                authors: authors,
                quantity: 0,
                inCart: false
            };
        },

        addItem: function (title, price, publisher, cover, country, argument, printedBy, authors) {
            this.collection.create(this.newAttributes(title, price, publisher, cover, country, argument, printedBy, authors));
        },



        addOne: function (item) {
            var view = new ItemView({ model: item });
            this.$itemsList.append(view.render().el);
        },

        addAll: function () {
            this.$itemsList.html('');
            this.collection.each(this.addOne, this);
        },



        setDefaultView: function () {
            this.$titleApp.html('<h3>Items that you can buy</h3>');
            this.$secondary_bar.html('<div class="action"><a href="#/cart"><p>View Cart</p></a></div>');
        },

        setCartView: function () {
            this.$titleApp.html('<h3>Shopping Cart</h3>');
            this.$secondary_bar.html('<div class="back"><a href="#"><p>Back to Items</p></a></div>');
        },

        resetItems: function () {
            this.collection.each(function (item) {
                item.save({
                    'inCart': false,
                    'quantity': 0
                });
            });
        }

    });

});